# Build Plan

Implementation roadmap for the Pixelocracy website, based on a full review of `CLAUDE.md`, `/knowledge`, `/standards`, and `/design`. This document plans the build — it contains no code. Every recommendation below is grounded in what those four sources actually establish; where they leave something undecided, that is stated explicitly rather than resolved by assumption, per `CLAUDE.md`'s Working Principles and Decision Process.

Current codebase state at the time of this plan: Next.js 15.5 (App Router, TypeScript, `src/` directory), Tailwind CSS v4 (CSS-first config, no `tailwind.config.ts`), shadcn/ui initialized (`base-nova` style, neutral base color, one component present: `src/components/ui/button.tsx`, built on Base UI's `render` prop rather than Radix `asChild`), Framer Motion and Lucide installed, `src/lib/site-config.ts` for SEO metadata, and SEO scaffolding (`robots.ts`, `sitemap.ts`, `manifest.ts`) already in place. Only the placeholder homepage from initial setup exists — no design-system-derived components have been built yet.

---

## 1. Recommended Implementation Order

Ordered so that shared primitives exist before any page needs them, and so that pages with fully-resolved specs are built before pages that still have open questions attached to them (see §10).

**Phase 0 — Foundation**
Design tokens in `globals.css` (§7), shared layout shell (Navigation + Footer, wrapped in the root layout), and the small set of primitives nearly every page depends on: Primary CTA, Secondary CTA, Pill Tag, Section Header.

**Phase 1 — Homepage** (`/`)
Highest reuse value — exercises Hero, Logo Strip, Process Section, Section Header, the unnumbered Case Study Card variant, and CTA Band. Building it first surfaces most shared components in one pass.

**Phase 2 — About** (`/about`)
Introduces Statistics, Feature Grid (solid-first/outline-rest variant), and Team Member Card. Reuses Section Header, Logo Strip, Secondary CTA from Phase 0–1.

**Phase 3 — Contact** (`/contact`)
Introduces Contact Form and Info Card. Isolated from the rest of the template system, so it can be built independently once Phase 0 primitives exist. The CTA-label inconsistency (§10) must be resolved before this phase is called done.

**Phase 4 — Case Studies Archive** (`/work`)
Introduces the numbered Case Study Card variant. Reuses Logo Strip and CTA Band from Phase 1, so no new global components are needed beyond the card itself.

**Phase 5 — Case Study template** (`/work/[slug]`)
The most complex template: Case Study Hero, Dark Showcase (all three variants), Timeline, Image + Text, Feature Grid (all-filled variant), and the still-unnamed two-column comparison pattern (§10). Build the template against one case study (Wired Greece, since it has the most fully worked "UPDATED" spec) before generalizing to Apeiron and Cardom, which use different §04/§05 component choices — confirming the template's flexibility is real, not assumed.

**Phase 6 — Pillar Page template** (`/services/[slug]`)
Reuses Section Header, Feature Grid, Pill Tag, Primary CTA. Introduces Meta Sidebar, Quote Card, and two flagged gaps (the dark checklist section and the "Pixelocracy difference" pull-quote — §10). Build once, populate all five pillars from `knowledge/02_service_pillars.md`.

**Phase 7 — Blog Post template** (`/insights/[slug]`)
Introduces the Contents sidebar and the prev/next link pattern (shared conceptually with Case Study's prev/next, per `standards/blog-post.md` — §10). Lowest priority: only one article template exists and no listing page exists to link to it yet.

**Not scheduled — Pillars Archive (`/services`) and Blog listing (`/insights`)**
No approved design exists for either. Per `standards/pillars-archive.md` and `knowledge/05_design_system.md`, do not build these from assumption. See §5 and §10 for the interim routing approach.

**Ongoing, not a phase**: accessibility pass (§9), content wiring from `/knowledge` into each template, and a final cross-page consistency review against `standards/components.md`.

---

## 2. Shared Layout Architecture

Navigation and Footer are documented as identical on every page with no per-page variation (`standards/components.md`). They belong in the root layout, not in individual pages:

- `src/app/layout.tsx` (already holds fonts + metadata) renders `<Navigation />` above `{children}` and `<Footer />` below it. No route-group-specific layout is needed, because every page — including all dynamic templates — shares the exact same shell.
- Each dynamic section (`work`, `services`, `insights`) follows the same two-layer pattern: a thin `page.tsx` responsible only for resolving the slug and loading content, and a template component (`CaseStudyTemplate`, `PillarPageTemplate`, `BlogPostTemplate`) responsible for composing the section components documented in the matching `standards/*.md` file. This keeps routing/data-fetching separate from presentation, and means the same template renders every instance of its content type — exactly the "one template, populated per pillar/case study" relationship already established in `standards/pillar-page.md` and `standards/case-study.md`.
- Static pages (Homepage, About, Contact, Case Studies Archive) don't need a separate template layer — their `page.tsx` can compose section components directly, since each is a one-off, not a repeated instance.

---

## 3. Reusable Components to Build First

Ordered by how many pages depend on them (per the "Used In" field of each entry in `standards/components.md`), since building in this order minimizes rework:

1. **Navigation** and **Footer** — every page.
2. **Primary CTA** and **Secondary CTA** — every page except Blog article body copy.
3. **Section Header** — Homepage (no-eyebrow variant), About, Contact, Case Studies Archive, Pillar Page, Case Study narrative sections (all eyebrow variant).
4. **Logo Strip** — Homepage (twice), About, Case Studies Archive.
5. **CTA Band** — Homepage, Case Studies Archive.
6. **Feature Grid** — About, Pillar Page, Apeiron case study.
7. **Case Study Card** — Case Studies Archive (numbered variant), Homepage (unnumbered variant).
8. **Pill Tag** — Pillar Page nav, Blog category tags.
9. **Statistics** — About, Wired case study.
10. **Process Section** — Homepage only, but foundational enough to build early given how central "What we do" is to the Homepage.

Everything after this point is page-specific and can be built alongside the page that first needs it: Hero (and its four variants), Case Study Hero, Meta Sidebar, Quote Card, Team Member Card, Contact Form, Info Card, Timeline, Image + Text, Dark Showcase (and its three variants), the Blog Contents sidebar, and the prev/next link pattern.

---

## 4. Server vs. Client Components

Next.js defaults to Server Components; the rule below is to mark `'use client'` only where state, browser APIs, or an event handler genuinely requires it, and to keep that boundary as small and low as possible in the tree (an interactive island inside a server-rendered shell, not the whole component).

**Server components** (no state, no browser APIs): Navigation's shell, Footer, Hero (all variants), Section Header, CTA Band, Feature Grid, Statistics, Logo Strip, Case Study Card, Case Study Hero, Meta Sidebar, Team Member Card, Info Card, Process Section, Content Block, Image + Text, Dark Showcase (all three variants), the prev/next link pattern, and every page-level template component.

**Client components** (state, interaction, or a browser API is unavoidable):
- **Mobile menu toggle** — isolated as a small client child inside the otherwise-server Navigation, since only the open/close state needs it.
- **Services dropdown** — same pattern: a small client trigger inside a server-rendered Navigation.
- **Quote Card** — accordion expand/collapse state.
- **Feature Grid's and Case Study Card's mobile carousel behavior** — active-slide state and dot pagination.
- **Contact Form** — form state, client-side validation feedback, submission handling, and the reCAPTCHA widget.
- **Blog's Contents sidebar** — needs a scroll listener to highlight the active section.
- **Footer's "back to top" button** — scroll-position-triggered visibility and a click-to-scroll handler.
- **Any Framer Motion entrance animation** — `motion.*` components require a client boundary. Recommend building one small shared client wrapper (e.g. a `Reveal`/`MotionSection` component) that only adds enter-animation behavior and renders its children through — this keeps the actual section content (Hero, Section Header, Feature Grid, etc.) as server components, with only a thin animation wrapper crossing the client boundary, rather than converting whole sections to client components for the sake of one fade-in.

---

## 5. Route Structure

Derived from the Navigation's link set (`standards/components.md`) and the content types found in `/design` and `/knowledge`:

| Route | Page | Status |
|---|---|---|
| `/` | Homepage | Ready to build |
| `/about` | About | Ready to build |
| `/contact` | Contact | Ready to build (pending §10 CTA-label decision) |
| `/work` | Case Studies Archive | Ready to build |
| `/work/[slug]` | Case Study (apeiron-ventures, cardom, wired-greece) | Ready to build |
| `/services/[slug]` | Pillar Page (5 pillars from `knowledge/02_service_pillars.md`) | Ready to build |
| `/services` | Pillars Archive | **No approved design** — see §10. The Navigation's "Services" dropdown should link directly to the five `/services/[slug]` pages rather than to this route until a design exists. |
| `/insights/[slug]` | Blog article | Ready to build |
| `/insights` | Blog listing | **No approved design** — see §10. The Navigation's "Insights" link has nowhere approved to land as a listing page; needs a decision before launch (see §10). |
| `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` | SEO endpoints | Already implemented |

---

## 6. Folder Structure

```
src/
  app/
    layout.tsx                # Navigation + Footer shell (already exists, extend it)
    page.tsx                  # Homepage
    about/page.tsx
    contact/page.tsx
    work/
      page.tsx                # Case Studies Archive
      [slug]/page.tsx          # loads content, renders CaseStudyTemplate
    services/
      [slug]/page.tsx          # loads content, renders PillarPageTemplate
    insights/
      [slug]/page.tsx          # loads content, renders BlogPostTemplate
  components/
    layout/
      navigation.tsx
      mobile-menu.tsx          # client
      services-dropdown.tsx    # client
      footer.tsx
    sections/                 # one file per standards/components.md entry
      hero.tsx
      section-header.tsx
      cta-band.tsx
      feature-grid.tsx
      process-section.tsx
      logo-strip.tsx
      statistics.tsx
      case-study-card.tsx
      case-study-hero.tsx
      dark-showcase.tsx
      quote-card.tsx           # client
      team-member-card.tsx
      meta-sidebar.tsx
      contact-form.tsx         # client
      info-card.tsx
      content-block.tsx
      image-text.tsx
      timeline.tsx
      pill-tag.tsx
    templates/
      case-study-template.tsx
      pillar-page-template.tsx
      blog-post-template.tsx
    motion/
      reveal.tsx               # client, shared Framer Motion wrapper
    ui/                        # shadcn primitives (button.tsx exists; add input, textarea, checkbox as needed)
  content/                    # structured content, sourced from /knowledge, not invented
    pillars.ts                 # from knowledge/02_service_pillars.md
    case-studies/
      apeiron.ts
      cardom.ts
      wired-greece.ts
  lib/
    site-config.ts             # existing
    utils.ts                   # existing
```

This mirrors the naming already fixed in `standards/components.md`'s Naming Convention table — file and component names should match those canonical names directly so there is never a translation step between the docs and the code.

---

## 7. Design Tokens Required

`knowledge/05_design_system.md` is explicit that exact hex values, exact type scale, exact spacing scale, and exact container max-width are **not yet defined** — they could not be reliably sampled from flat PNGs. This plan does not invent them. What can be implemented now, and what must be confirmed before final polish:

**Can implement now (qualitative tokens already approved):**
- Colors, as CSS variables extending the shadcn/Tailwind v4 `@theme` block already in `globals.css`: an accent blue (map to `--primary`), a deep navy (new `--color-navy` token, for full-bleed dark sections), a light lavender tint (new `--color-lavender` token, or map to `--secondary`/`--muted`), white/near-black (already covered by `--background`/`--foreground`).
- Two type roles: a bold rounded display face (headings, logo) and a humanist sans (body, UI) — implement as two `next/font` families with CSS variables, matching the existing Geist setup's pattern in `layout.tsx`.
- Border radius scale — already established by the shadcn init (`--radius` and its derived `--radius-sm/md/lg/xl` scale in `globals.css`); reuse it rather than adding a second scale.

**Must be confirmed before pixel-accurate implementation (flagged, not invented):**
- Exact hex/OKLCH values for accent blue, deep navy, and light lavender.
- The exact display and body typeface names/weights/license.
- A numeric spacing scale (the designs show generous, consistent spacing but no base unit is specified).
- The page container's exact max-width.

Recommend using close visual approximations for these during Phase 0–1 build-out (clearly marked as provisional in code comments is unnecessary per this repo's no-comments convention, but should be tracked as an open item — see §10), then doing a single pass to correct all token values once the brand/design team confirms them, rather than guessing precisely now and treating the guess as final.

---

## 8. Tailwind Strategy

- Continue with Tailwind v4's CSS-first configuration (`@theme inline` in `globals.css`) — no `tailwind.config.ts` is needed or currently present, and introducing one would fight the shadcn `base-nova` setup already in place.
- Extend the existing `@theme` block with the additional tokens from §7 rather than hardcoding hex values in component classNames — every color used in a section component should resolve through a theme variable, so a future token correction is a one-file change.
- Use `class-variance-authority` (already installed, already the pattern in `src/components/ui/button.tsx`) for every component with visual variants: Primary/Secondary CTA, Pill Tag (active/inactive), Feature Grid card (solid/outline), Case Study Card (numbered/unnumbered).
- Mobile-first utility classes throughout. Per `knowledge/05_design_system.md`'s Responsive Rules, the approved designs only define two breakpoints (Desktop and Mobile) with no confirmed pixel values and no tablet breakpoint — implement with a single breakpoint jump (e.g. Tailwind's default `lg:`) and let intermediate widths inherit the mobile layout, rather than inventing tablet-specific rules that have no source design behind them.
- Full-bleed sections (dark navy blocks, wavy dividers, CTA bands) need a "break out of the centered container" utility — implement as a small shared layout primitive (e.g. a `FullBleed` wrapper) rather than repeating the same negative-margin/`100vw` pattern in every section that needs it.
- Wavy divider graphics should be built as inline SVG components, not raster images, so they can pick up theme colors via `currentColor`/`fill` and stay crisp at every viewport width — implement one `WaveDivider` component with a direction/placement prop rather than one-off SVGs per page.

---

## 9. Accessibility Considerations

`knowledge/04_design_principles.md` states accessibility is mandatory; `knowledge/05_design_system.md` already flags one concrete gap. Concrete, design-grounded considerations for implementation:

- **Contact Form labels**: the approved design shows placeholder text only, with no persistent visible label — already flagged in `knowledge/05_design_system.md` as needing verification. Implementation must add a programmatically-associated `<label>` for every field (visually hidden if the placeholder-only look is to be preserved), not ship placeholder-only inputs as the final accessible markup.
- **Color contrast**: cannot be verified until exact hex values (§7) are confirmed — accent blue on white/lavender and white text on navy both need a WCAG AA contrast check once real values land.
- **Focus states**: the shadcn button already has a `focus-visible` ring pattern (`focus-visible:ring-3 focus-visible:ring-ring/50`) — extend this same treatment to every interactive component (links, Pill Tag, accordion triggers, form fields) rather than introducing a second focus style.
- **Quote Card**: implement as a real disclosure widget — a `<button>` trigger with `aria-expanded` and `aria-controls`, not a clickable `<div>`.
- **Mobile carousels** (Feature Grid, Case Study Card dot pagination): dot controls need real `<button>` elements with descriptive `aria-label`s (e.g. "Go to slide 2 of 3"), and the carousel must also be operable by keyboard, not swipe-only.
- **Navigation**: the mobile hamburger menu needs `aria-expanded`/`aria-controls` and should trap focus while open; the Services dropdown needs `aria-haspopup`/`aria-expanded` and full keyboard support (Enter/Space to open, Escape to close, arrow-key traversal).
- **Images**: all photography, client logos, and team portraits need descriptive `alt` text sourced from `/knowledge` content — never left empty or decorative unless an image is genuinely decorative.
- **Reduced motion**: Framer Motion entrance animations (built through the shared `Reveal` wrapper from §4) should respect `prefers-reduced-motion`, consistent with `knowledge/04_design_principles.md`'s existing motion philosophy ("never animate for decoration").
- **Heading hierarchy**: exactly one `<h1>` per page; Section Header and Content Block instances must nest as real `<h2>`/`<h3>` elements matching their visual level, not visually-styled `<div>`s.
- **Skip-to-content link**: not visible in any flat mockup (it wouldn't be), but is a baseline accessibility requirement that doesn't conflict with the visual design — recommend adding it regardless.

---

## 10. Risks or Open Questions

Every item below is a genuine gap or inconsistency surfaced while writing `/standards`, not a new observation invented for this plan — each is cross-referenced to where it was first flagged.

1. **No exact design tokens exist** — hex/OKLCH color values, typeface names/weights, spacing scale, and container max-width are all marked "not yet defined" in `knowledge/05_design_system.md`. Pixel-accurate implementation is blocked on these until confirmed (§7).
2. **Contact Form CTA label inconsistency** — desktop shows "Send Message", mobile shows "Submit Message" (`standards/contact.md`). Needs a decision before Phase 3 is considered complete.
3. **Case Study Hero color inconsistency** — Apeiron's second title line uses the client's own red brand color, while Cardom's and Wired's use Pixelocracy's accent blue (`standards/case-study.md`). Needs a decision before this becomes precedent for future case studies.
4. **Several components have no approved name or full spec yet**, flagged as gaps rather than forced into existing names: the Pillar Page's dark abstract banner image, the "Selected experience" text-only proof card, the Pillar Page's dark "what's included" checklist section, the "Pixelocracy difference" pull-quote, the two-column comparison pattern shared by Cardom and Wired, the case-study/blog previous-next link pattern, and the Blog's "Contents" sidebar (`standards/pillar-page.md`, `standards/case-study.md`, `standards/blog-post.md`). These should be either formalized in `standards/components.md` or explicitly approved as-is before or during the phase that first needs them.
5. **No Pillars Archive (`/services`) design exists** (`standards/pillars-archive.md`) — do not build this page from assumption. Interim approach: the Navigation's Services dropdown links directly to the five pillar pages.
6. **No Blog listing (`/insights`) design exists** (`knowledge/05_design_system.md`) — same treatment as #5. The Navigation's "Insights" link needs an interim decision (e.g. link to the most recent article, or omit until a listing design is approved).
7. **No tablet/intermediate breakpoint is defined** (`knowledge/05_design_system.md`) — only Desktop and Mobile exist in the approved designs. Risk of an awkward layout gap at intermediate widths; §8's mobile-first-until-`lg:` approach is a reasonable interim default, not a confirmed spec.
8. **Accessibility specifics cannot be fully verified from flat mockups** — contrast ratios and motion behavior depend on the token values from #1; the placeholder-only Contact Form fields are a known gap already flagged in `knowledge/05_design_system.md`.
9. **No backend/submission behavior is specified for the Contact Form** — reCAPTCHA is shown visually, but there is no documented decision on the actual submission handler (server action, third-party form service, or email API). This blocks Contact Form from being functionally complete, not just visually built, and needs a decision before Phase 3 ships.
10. **Team Member Card content is a placeholder in the approved design** — only three real people are shown, repeated across seven card slots (`standards/about.md`). The real team roster is needed before the About page can ship with real content.

---

No code has been written as part of this plan. Once the open questions above that block a given phase are resolved (or explicitly accepted as provisional), implementation can begin at Phase 0.
