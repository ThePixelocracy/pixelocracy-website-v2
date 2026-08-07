# V4 Design System — Canonical Source of Truth

**Status: APPROVED AND LOCKED.** The V4 homepage (`src/app/v4/page.tsx` and everything it composes from `src/components/v4/`) is the primary visual and behavioural source of truth for the Pixelocracy website going forward. This document extracts the system from that approved implementation — it does not invent a new one, and it does not redesign anything. Where this document and the live code ever disagree, **the code is right and this document is stale** — fix the document.

This document is the current top authority for visual direction, typography, motion, responsive behaviour, and component architecture. See [`knowledge/05_design_system.md`](./05_design_system.md), [`06_figma_design_system.md`](./06_figma_design_system.md), and [`07_pixelocracy_implementation_spec.md`](./07_pixelocracy_implementation_spec.md) for their now-scoped roles — summarized in [§9](#9-future-pages--how-the-older-documents-now-fit).

---

## 1. What Makes a Page Unmistakably V4

A new page is V4 if, and only if, it exhibits all of these together — any one alone is not enough:

1. **Oversized editorial typography is a structural device, not decoration.** Type gets big enough to become a compositional element (the hero's "national," the metrics numerals, the CTA close) — but it is always legible, always resolves into something readable, never large "just because."
2. **Bold, deliberate scale contrast inside one composition.** A monumental number next to a small caption; a huge headline next to a tiny mono label. Never a uniform type scale across a whole section.
3. **Asymmetric composition and real negative space.** Nothing is centered by default. Alternating alignment, corner placements, and empty space are part of the identity, not gaps to be filled.
4. **Black, white, and one controlled accent.** V4 is not "blue-dominant" — it is predominantly black-and-white, with the canonical Pixelocracy blue (`#4467F6`) appearing only where it earns its place: the logo, hover states, one quotation mark, the active story-rail tick, primary buttons.
5. **Fragmentation → organisation → clarity as the throughline.** Every section's motion should read as something resolving into order, not decoration for its own sake.
6. **Proof and metrics feel monumental, never dashboard-like.** No cards, no equal-sized stat grids.
7. **Project storytelling happens at full-viewport scale.** Case studies are chapters, not thumbnails in a grid.
8. **Navigation is confident and full-screen**, not a shrunk reskin of a conventional top bar.
9. **Motion is section-specific but feels like one family.** Different techniques, shared vocabulary (see [§4](#4-motion-system)).
10. **Content is always real.** Real copy from the approved knowledge base, real client logos, real certification marks, real product photography — never invented, never retyped as text, never a placeholder.

---

## 2. Design Tokens

Real values only, extracted from `src/app/globals.css` and the approved V4 components. Structured as primitives → semantic roles → component-level tokens, and no deeper — V4 does not need a token for every isolated value.

### 2.1 Colour primitives

| Token (CSS var) | Value | Notes |
|---|---|---|
| `--background` | `#ffffff` | |
| `--foreground` | `#000000` | |
| `--primary` | **`#4467F6`** | The canonical Pixelocracy brand blue. Never approximate this — no `blue-500`, no arbitrary near-blue hex. |
| `--primary-foreground` | `#ffffff` | Text/icon colour on top of `primary` fills. |
| `--muted-foreground` | `#656565` | Editorial label / metadata colour. |
| `--border` | `#dce3ff` | Hairline dividers on light backgrounds. |
| `--lavender` | `#e8ecfd` | Inherited primitive from the original system. **Not used inside any V4 section** — V4's dark beats use pure black, not lavender or navy. Still valid as a token; just not part of V4's own palette choices. |
| `--navy` | `#003375` | Same status as lavender — a valid inherited primitive, not part of V4's palette. V4 uses `bg-black` where the old system would have used navy. |
| Pure black | `#000000` (Tailwind `bg-black`) | V4's actual "dark beat" colour — Manifesto section, the full-screen nav panel, Work chapter title panels. Deliberately not the same as `--navy`. |

### 2.2 Semantic colour roles (how V4 actually uses the primitives)

| Role | Token | Used for |
|---|---|---|
| Page surface | `bg-background` / `text-foreground` | Every section except the dark beats. |
| Dark beat surface | `bg-black` | Manifesto, nav full-screen panel, Work chapter panels. Always paired with `text-white` and `text-white/40–70` for secondary text. |
| Brand accent | `text-primary` / `bg-primary` | Used sparingly and deliberately: the manifesto quotation mark, hover states on headings/links, the primary CTA button fill, the active StoryRail tick, the mobile scroll-progress bar fill. Never used to tint a whole section or make "everything blue." |
| Editorial label / metadata | `text-muted-foreground` | Every small mono caption ("What we do", "Results, not claims", numbering, "Learn more"). |
| Hairline divider | `border-border` | Between Pillar rows, between Work chapters. |
| Dark-beat divider | `border-white/10` | Inside the nav panel and other black surfaces. |

### 2.3 Typography families

Three brand type families (loaded via `next/font/local`/`next/font/google` in `src/app/layout.tsx`) plus one unbranded system family:

| CSS variable | Family | Used for |
|---|---|---|
| `--font-display` (`font-display`) | Sharp Grotesk Medium 25 | All display type: headlines, the hero's giant word, metrics numerals, the manifesto quote, nav menu links, section headings. This is V4's oversized-editorial workhorse. |
| `--font-sans` (default body, no utility needed) | Montserrat | Body copy, paragraphs, descriptions. |
| `--font-cta` (`font-cta`) | Mabry Pro | Button and CTA link labels only ("Book a discovery call", "Learn more", "View case study"). |
| *(none — Tailwind default)* `font-mono` | System monospace stack (`ui-monospace, SFMono-Regular, Menlo, ...`) | Every editorial label / metadata / numbering element. **No custom brand mono font is defined** — this is Tailwind's default stack, used deliberately, not an oversight. Formalize as a token only if a brand mono typeface is ever commissioned. |

**The editorial label is a real component-level pattern, not a one-off.** Every instance in the codebase uses the same recipe: `font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase` (or `text-sm` at slightly larger scale, e.g. the desktop Proof numbering). Treat this as a fixed micro-component — do not invent a slightly different label style per new section.

### 2.4 Fluid typography scale (real `clamp()` values in use)

| Context | `clamp()` | File |
|---|---|---|
| Hero headline | `clamp(2.25rem, 1rem + 4.5vw, 4.5rem)` | `hero-v4.tsx` |
| Hero mobile giant word | `22vw` (`18vw` at `sm:`) | `hero-v4.tsx` |
| Nav menu links | `clamp(2rem, 1.2rem + 4vw, 4.5rem)` | `navigation-v4.tsx` |
| Five Pillars heading | `clamp(1.75rem, 1rem + 4vw, 3.5rem)` | `capabilities-v4.tsx` |
| Manifesto quotation mark | `clamp(4rem, 12vw, 11rem)` | `manifesto-v4.tsx` |
| Manifesto vision line | `clamp(2rem, 1.2rem + 4.5vw, 5rem)` | `manifesto-v4.tsx` |
| Work section heading | `clamp(2rem, 1.2rem + 3.5vw, 4rem)` | `work-v4.tsx` |
| Proof numerals (desktop, six distinct sizes) | from `clamp(3.5rem, 2rem + 14vw, 9.5rem)` to `clamp(5rem, 2rem + 23vw, 15.5rem)` | `proof-v4.tsx` |
| Proof numerals (mobile, one size) | `clamp(3.5rem, 2rem + 16vw, 7rem)` | `proof-v4.tsx` |
| CTA headline | `clamp(3rem, 1.5rem + 9vw, 10rem)` | `cta-v4.tsx` |

**Principle, not just values:** every `clamp()` above has a minimum floor that stays readable on the smallest supported viewport and a `vw`-driven middle term that does the actual fluid scaling — the ceiling exists to stop type from becoming absurd on ultra-wide monitors. Never hardcode a single fixed `text-*` size for anything that plays an oversized/display role.

### 2.5 Spacing scale

- **Gutters:** `px-6` (mobile) → `sm:px-8` (≥640px). Identical on every section, no exceptions.
- **Section vertical rhythm** — not uniform; weight communicates emphasis:
  - Quiet beat (Trust strip): `py-20 sm:py-28`
  - Mid weight (Capabilities, Proof mobile stack, Work intro): `py-24 sm:py-32`
  - Monumental beat (Manifesto, CTA): `py-28 sm:py-40`
- Internal row/card-less spacing (Pillar rows, Work panel padding, nav panel padding) sits in the `py-10`–`py-14`, `p-8`–`p-10` range — generous, never tight.

### 2.6 Containers

| Class | Role |
|---|---|
| `max-w-7xl` | Nav / site chrome width. |
| `max-w-6xl` | Standard section content column — the most common container in V4. |
| `max-w-5xl` / `max-w-4xl` | Narrower content columns (hero content block, manifesto vision line). |
| `max-w-md` / `max-w-lg` / `max-w-xl` / `max-w-sm` / `max-w-3xl` | Local caps for paragraphs, panels, and captions — chosen per-context for line-length control, not a rigid scale. |

### 2.7 Borders & dividers

- `border-border` (`#dce3ff`) — hairline dividers between Pillar rows and Work chapters, on light backgrounds only.
- `border-white/10` — the equivalent hairline on dark surfaces (nav panel).
- No rounded corners, no card borders, no shadows anywhere in V4. See [§7](#7-v4-anti-patterns).

### 2.8 Buttons & interactive states — `V4Button` (`src/components/v4/v4-button.tsx`)

Solid flat blocks. No border tricks, no signature shape, no shadow — the "wow" is motion (the arrow slides on hover), not geometry. Deliberately distinct from any earlier button language.

| Variant | Surface |
|---|---|
| `primary` | `bg-primary text-white` |
| `secondary` | `bg-transparent text-foreground`, plus `border-b-2 border-foreground` (an underline link, not a button box) |
| `invert` | `bg-white text-primary` (for use on dark surfaces) |

Every variant: `px-8 py-4` (secondary: `px-0 py-2`), `font-cta`, trailing `→` that slides `translate-x-1.5` on hover over `duration-300`. This is the only button component in V4 — do not invent a fourth variant or a parallel button system without updating this token set.

### 2.9 Section backgrounds

- `bg-background` (white): Hero, Trust strip, Capabilities, Proof (both desktop and mobile), Work section shell, CTA.
- `bg-black`: Manifesto, the nav full-screen panel, Work chapter panels (the caption block only, not the photograph).

### 2.10 Layering / z-index scale

A real, consistent scale — do not introduce an arbitrary z-index outside it:

| Value | Role |
|---|---|
| `z-0` | Base content within a section's own stacking context. |
| `z-10` | In-section overlays: labels sitting above imagery, the hero's giant word layer, Proof's persistent label/cue. |
| `z-20` | The hero's scroll hint. |
| `z-40` | StoryRail (both desktop rail and mobile progress bar). |
| `z-60` | The nav full-screen panel. |
| `z-70` | The nav header bar itself — always the topmost thing on the page, so its close control stays reachable above the open panel. |

### 2.11 Motion durations, easing, and stagger logic

| Easing | Value | Used for |
|---|---|---|
| **Reveal / wipe** | `cubic-bezier(0.76, 0, 0.24, 1)` | Every mask/wipe reveal: Capabilities heading wipe, Manifesto vision-line rise, CTA headline wipe, nav panel `clipPath` open/close. This is V4's signature "resolves into place" easing — reuse it for any new wipe-style reveal rather than picking a new curve. |
| **Simple settle** | `"easeOut"` | Opacity + translate entrance settles (Pillar number/copy, nav menu item stagger, Manifesto glyph). |
| **Organic/continuous** | `"easeInOut"` | Scroll-driven beat interpolation (Proof numerals) and looping bob animations (scroll-cue arrows). |
| **Constant-speed** | `"linear"` | The logo marquee only — anything meant to feel mechanically continuous, not eased. |

Typical durations: `0.3s` hover states, `0.5s` simple settles, `0.55–0.8s` wipes/reveals, `1.6s` bobbing loops, marquee duration scales with content (`3.5s` per logo).

**Stagger logic:** never hand-pick independent millisecond delays per element. The hero cascade defines a single `RESOLVE_END` budget and expresses every element's entrance as a *fraction* of it (`useSettle(scrollYProgress, startFrac, endFrac)`); Proof's scroll cue fade-out is derived from the exact same fraction its first metric uses to arrive (`ENTER_FRACTION`), not a separately-tuned number. This guarantees timing can never drift out of sync when one thing is retuned. Follow this pattern for any new staggered sequence.

### 2.12 Responsive breakpoints

- `sm` (640px, Tailwind default) — fine-grained mobile-internal adjustments (padding bumps, small type bumps). Not the desktop/mobile switch.
- `lg` (1024px, Tailwind default) — **the actual desktop/mobile experience switch**, used both as the Tailwind `lg:` prefix throughout and as the literal JS breakpoint (`window.matchMedia("(min-width: 1024px)")`) that gates which scroll-driven treatment is active (Hero, Proof, Work all check this exact query). No custom breakpoint value has been introduced anywhere in V4 — do not invent one (e.g. a `xl`-only treatment) without strong reason.

---

## 3. Typography & Editorial Composition

- **Display type is spatial when it is the subject of a section, conventional when it is supporting.** The hero's "national," the Proof numerals, and the CTA close all use `font-display` at oversized, `clamp()`-driven sizes and are allowed to crop, overlap, or bleed off-screen via *transform* (never via layout truncation) as part of a scroll narrative. Body copy, captions, and button labels are always fully conventional — normal size, normal wrapping, 100% legible at first paint, never subject to kinetic transforms.
- **Cropping/overflow is always a transform, never a layout cut.** The hero's giant word bleeds past the viewport edge via `scale`/`translate` on an element whose underlying text layout is untouched — this is what lets it resolve back into a perfectly normal, correctly-spaced sentence later. Never achieve a "cropped" look via `overflow: hidden` on real content that would otherwise need to reflow.
- **Line length:** paragraphs are always capped by a `max-w-*` (see §2.6), never allowed to run edge-to-edge at body size.
- **Headline wrapping** is intentionally left to the browser (`clamp()` + `max-w-*`), not hard-coded with manual `<br/>` line breaks — the one exception is the CTA's two-line "Get in / touch." close, where the line break is deliberate art direction, not a wrapping accident.
- **Dramatic scale contrast within one composition is a rule, not an accident** — e.g. Proof's six numerals are deliberately different `clamp()` sizes (§2.4) so that impact drives size, not a uniform template.
- **When to keep type conventional:** body paragraphs, CTA/button labels, and editorial labels/metadata are never made "spatial" or kinetic. Motion touches *display* type or *whole-block* entrances (opacity/position), never mid-sentence text inside a paragraph.

---

## 4. Motion System

**The throughline is fragmentation → organisation → clarity.** Motion must communicate structure, progression, or transformation — never decoration for its own sake, and never at the cost of delaying access to essential content.

### 4.1 Catalogued techniques (what each section actually does, and why it differs)

| Technique | Where | What it does |
|---|---|---|
| **Kinetic typography** | Hero | A single word ("national") is one continuous element — never two elements crossfading — that scales/translates from oversized-and-cropped down to its exact resting position inside the real sentence, which is already correctly laid out underneath it the whole time. |
| **Coordinated cascade** | Hero (rest of headline, subhead, CTAs) | Each secondary element settles in on its own fraction of a shared resolve budget (§2.11), arriving in sequence rather than as one synchronized block. |
| **Scroll-driven assembly / spatial repositioning** | Five Pillars, Proof | Elements arrive from whichever edge they visually occupy, converging toward the centre (Pillars), or arrive-hold-recede in a scroll-mapped "beat" with scale + slide as the primary mover (Proof). |
| **Mask / wipe reveal** | Five Pillars heading, Manifesto vision line, CTA headline, nav panel open/close | An `overflow-hidden` wrapper plus a transform on the child reveals content like a physical wipe — not a fade. Reused three times across the page (Pillars, CTA, nav) as a deliberate bookending device, not three unrelated effects. |
| **Scale transitions** | Hero word, Proof numerals, Manifesto glyph | Physical scale change communicates arrival/departure — always paired with position, rarely alone. |
| **Project image movement** | Work | A slow scroll-linked parallax drift (±6% of an oversized 116%-scaled image) plus a small hover lift on the caption panel gives the photography physical presence without altering the full-viewport chapter layout. |
| **Logo marquee motion** | Trust strip | Continuous, constant-speed (`linear`), seamless-loop drift — the only place V4 uses non-scroll-linked perpetual motion, because it represents an ongoing fact (client trust), not a narrative beat. |
| **Navigation transitions** | Nav | `clipPath` wipe open/close for the full-screen panel; internal links stagger in with simple opacity+y settles once the panel is open. |
| **Section entry** | Manifesto | Three *different* restrained treatments in one section on purpose (scale-in glyph, mask-reveal vision line, plain quiet opacity-only mission line) — proof that "coherent" does not mean "identical recipe repeated." |

### 4.2 Explicit rule: no blanket fade-up

**Do not apply the same generic `opacity: 0` + `translateY` "fade up" to every section.** Every section above earns its own primary mover (scale, mask/wipe, spatial slide, parallax, constant-speed drift) appropriate to what it's communicating. Opacity is allowed only as **secondary support riding along with a primary transform** (e.g. Proof's arrive/recede beat) or as a deliberately *quiet, singular* choice for one specific element (Manifesto's mission line) — never as the default technique reached for every time a new section needs "some motion."

### 4.3 Reduced motion

Every V4 component with motion respects `prefers-reduced-motion`, following one consistent pattern:
- `useReducedMotion()` from framer-motion, gated behind a `mounted` flag that defaults to `false` until after mount — **required** to avoid a real SSR/hydration mismatch (framer-motion can resolve the media query synchronously on the client before hydration completes, diverging from the server-rendered assumption).
- Structural fallback (scroll-jack → static stack, e.g. Proof and Hero) must be gated in **CSS** via Tailwind's `motion-reduce:` variant, not only in JS — CSS resolves at first paint; JS-resolved reduced-motion state does not exist yet at that point, so CSS is what prevents a flash of broken/overlapping content.
- Where a full scroll-jack doesn't apply, motion is simply skipped/shortened (duration ≈`0.01s`) rather than removed as a separate code path, so layout stays identical.

### 4.4 Known implementation traps (real bugs found and fixed — treat as hard rules)

These are not style preferences; each one caused a real, silently-broken animation during V4's build and cost real debugging time to trace. Follow them on any new motion work:

1. **Never drive a scroll-linked style with the array form of `useTransform` (`useTransform(input, [range], [range])`) on a sticky/scroll-jacked container.** Framer Motion can auto-compile that form into a native `ViewTimeline` animation for performance, and on this exact "sticky + `start start`/`end end`" pattern its scroll source can resolve to `<html>` instead of the real container — silently painting a value that has nothing to do with actual scroll position. **Always use the callback form** (`useTransform(input, (v) => ...)`) for anything scroll-linked inside a sticky container.
2. **Never animate `clip-path` directly via `initial`/`whileInView`/`animate`.** Framer Motion's string interpolator for this exact CSS property can silently no-op — the value sticks at its initial state with zero console warning and zero active animation to inspect. Use an `overflow-hidden` wrapper with a `translateX`/`translateY` on the child instead; it achieves the same visual "reveal" and animates reliably.
3. **Never give a `whileInView`-triggered element a large transform offset on itself.** `whileInView`'s visibility check measures the animated element's own *post-transform* bounding box — a big enough offset can push that box mostly outside the viewport, so it can never satisfy its own visibility threshold and the animation never fires (looks identical to bug #2 from the outside: frozen at the initial value). Put `initial`/`whileInView` on an **untransformed parent**, and give the moving child only a `variants` prop that cascades from the parent's state.
4. **Reduced-motion structural gating is CSS, not just JS** (see §4.3) — a JS-only check leaves a flash-of-broken-content window before hydration resolves.

---

## 5. Responsive System

**Mobile is not a scaled-down desktop layout — it is recomposed.** Concretely, per approved section:

| Section | Desktop | Mobile |
|---|---|---|
| Hero | Scroll-jacked kinetic word resolving into a headline | A separate static, cropped, edge-to-edge giant word block (own composition, not the same animated element scaled down), stacked above the real headline in normal flow |
| Proof/Metrics | 560vh scroll-jack, asymmetric absolute-positioned numerals | An honest static stack, same uneven sizes and alternating alignment, no scroll-jack (also the reduced-motion fallback for desktop) |
| Five Pillars | Alternating-side rows with number/copy sliding from outer edges | Same alternating rows, same reveal logic, single-column stack (grid collapses via `grid-cols-1` → `sm:grid-cols-12`) |
| Navigation | Sticky compact bar, full-screen panel with a two-column layout (links + selected work) | Same MENU+ concept and full-screen panel, single-column stack — not a hamburger-to-dropdown pattern |
| Work | Full-viewport chapters, hover-driven panel lift | Same full-viewport chapters at `70vh` instead of `100vh`, parallax and hover lift still active (motion is not desktop-gated here — only the Hero/Proof scroll-jacks are) |
| StoryRail | Vertical rail, right-aligned, chapter labels | Collapses to a slim top progress bar — a different, mobile-appropriate device, not a shrunk rail |

**Principles to carry into new pages:**
- Typography recomposes (different `clamp()` floors, sometimes a genuinely separate mobile-only block) rather than just shrinking.
- Full-screen navigation is preserved on mobile — never regress to a conventional hamburger dropdown.
- Gutters stay `px-6` on mobile (never edge-to-edge) — negative space is reduced, not eliminated.
- Where a desktop treatment depends on `position: sticky` scroll-jacking, mobile gets an *honest static alternative* with the same content and hierarchy, not a crushed version of the same mechanic.
- The `lg` (1024px) breakpoint is the single source of truth for which experience is active (§2.12) — do not introduce a second, different desktop/mobile test elsewhere in a new page.

---

## 6. Reusable V4 Components

| Component | File | Reuse notes |
|---|---|---|
| Header logo | `navigation-v4.tsx` (uses `/brand/pix-logo-800.png`) | Always the real asset via `next/image`, never retyped text. `brightness-0 invert` CSS filter is the only permitted colour adaptation (for dark/inverted states) — never a second logo asset. |
| Navigation (MENU+) | `navigation-v4.tsx` | The compact bar + full-screen panel concept is fixed; content inside the panel (links, services, selected work, contact) is the variable part for future pages if ever needed. |
| Mobile navigation | Same file, same component | No separate mobile nav component — one implementation, responsive throughout. |
| `StoryRail` | `story-rail.tsx` | Homepage-specific progress device. Reuse as-is if a future long-scroll page wants the same chaptered-progress feel; the `chapters` array is the only thing that would need to change. |
| Editorial section intro (label + heading) | Inline pattern (`font-mono` label + `font-display` heading), e.g. `capabilities-v4.tsx`, `work-v4.tsx` | Reuse the label recipe from §2.3 exactly; heading scale varies per section per §2.4. |
| Five Pillars list | `capabilities-v4.tsx` | Content-driven from `src/content/pillars.ts` — reusable as-is for any "index of N things" page needing this treatment. |
| Manifesto typography | `manifesto-v4.tsx` | A specific, singular composition (asymmetric quote + vision + mission) — treat as a one-off pattern to reference stylistically, not a generic "quote block" to instantiate repeatedly. |
| Monumental metrics/proof | `proof-v4.tsx` | The scroll-beat mechanism (`useBeat`) is generic over any list of `{value, label}` proof points — reusable for a future page that needs its own proof section, content-driven from a new content file matching `proof-points-v4.ts`'s shape. |
| Client logo marquee | `logo-marquee.tsx` + `src/content/client-logos.ts` | Fully reusable as-is; content-driven from the full deduplicated logo list. Do not fork a second marquee implementation. |
| Large project/case-study presentation | `work-v4.tsx` | The full-viewport chapter + parallax + hover-lift pattern, content-driven from `src/content/case-studies.ts`. Reusable for a future Work/Case-Studies-archive page. |
| CTA system | `cta-v4.tsx`, `V4Button` | The monumental-close pattern plus the shared button component — reusable at the end of any future page. |
| Official footer | `src/components/layout/footer.tsx` | Shared across every route (V1/V2/V3/V4) — not V4-specific, do not fork a V4-only footer. Already uses the real logo and the real EUROCERT/ISO assets (`public/eurocertISO/eurocert1.png`, `eurocert2.png`, `eurocert3.png`). |
| EUROCERT/ISO certification area | `footer.tsx` | Logo+text lockup (`eurocert1.png`) followed by the two round ISO badges (`eurocert2.png`, `eurocert3.png`), matching the original approved hierarchy. Always the real assets in `public/eurocertISO/` — never retyped or recreated. |
| Buttons and text links | `V4Button`, inline `"Learn more →"` / `"View case study →"` pattern | One button component (§2.8); the arrow-link pattern is the informal second interactive primitive — reuse the exact `→` + `group-hover:translate-x-*` recipe. |
| Editorial labels and metadata | Inline pattern, see §2.3 | Reuse exactly; do not invent a visually-different label style. |
| Responsive media treatment | `work-v4.tsx`, `navigation-v4.tsx` (selected-work thumbnails) | `next/image` with `fill` + `object-cover`/`object-contain` inside an explicitly-sized wrapper — never a fixed `width`/`height` pair on an asset whose real aspect ratio isn't known/controlled (this caused real distortion bugs with the client-logo marquee before being fixed). |

**Where creative variation is encouraged for future pages:** section *content* and *specific composition* (which corner a number sits in, which direction a heading wipes from, how many chapters a story has) — not the underlying *techniques* (§4.1) or *tokens* (§2). A new page should feel like a new chapter of the same book, not a new book.

---

## 7. V4 Anti-Patterns

Explicitly prohibited on any future V4 page:

- Generic SaaS layouts (icon + heading + paragraph card, repeated three or four times).
- Repetitive card grids of any kind.
- Equal-sized metric "dashboards" (identical boxes, identical type size, grid layout).
- Rounded cards, rounded corners generally — V4 has none.
- Gradients of any kind, anywhere.
- Glassmorphism, blur-panel effects.
- Decorative effects without a communicative purpose (floating shapes, particles, glows).
- Generic corporate hero sections (centered headline + stock-photo banner + two buttons).
- Duplicating V3 compositions or component language (wavy dividers as a section motif, hard-offset `6px 6px 0px` drop-shadow buttons/cards, the "Overlay+Border+OverlayBlur" card construction, pill-badge tags, rounded-mask + wave-scallop photography treatment) — see [§9](#9-future-pages--how-the-older-documents-now-fit) for what's deprecated.
- Repeated fade-up (`opacity: 0` + `translateY`) as the default/only animation applied to every section (§4.2).
- Arbitrary floating shapes with no narrative purpose.
- Fake or retyped logos/certification marks — always the real asset (§8).
- Excessive animation that delays access to essential content, or motion that never resolves to a legible, static end-state.
- Sacrificing readability for visual experimentation — every oversized/kinetic typography moment must still resolve into something fully legible (§3).

V4 is bold and expressive, but never chaotic or inaccessible — every rule above exists to protect that balance, not to make the site timid.

---

## 8. Content & Asset Rules

- **Never invent copy, statistics, or client information.** All company/mission/vision copy comes from `knowledge/01_company.md`; all five-pillar copy (overview, value props, client pains, proof points, differentiators) comes from `knowledge/02_service_pillars.md` — these are the authoritative extracted sources (originally sourced from Master Plan / Service Pillars content documents) and remain fully valid, unrelated to any V3/V4 visual distinction.
- **Never fabricate or pad proof points.** Only use figures already approved in `knowledge/02_service_pillars.md` or already shipped in `src/content/proof-points-v4.ts` / `src/content/case-studies.ts`.
- **Official assets only, always the real file:**
  - Wordmark: `public/brand/pix-logo-800.png` — never retyped as text (this was a real bug, since fixed).
  - Client logos: the full deduplicated set in `src/content/client-logos.ts`, sourced from `public/client-logos/`. When two files represent the same brand at different export quality, use the cleaner one (see the comment in that file) — never show the same brand twice.
  - EUROCERT/ISO marks: `public/eurocertISO/eurocert1.png` (logo+text lockup), `eurocert2.png` and `eurocert3.png` (the two round ISO badges) — never recreated, never placeholder text.
  - Case-study photography: `src/content/case-studies.ts` image paths — real, already-shipped assets.
- **Tone of voice** (`knowledge/03_tone_of_voice.md`) and **general design philosophy** (`knowledge/04_design_principles.md`) are foundational and apply unchanged to V4 — they describe voice and high-level values, not V3-specific visuals, and nothing in them conflicts with this document.

---

## 9. Future Pages — how the older documents now fit

V4 supersedes the **visual, component, and motion** decisions in the pre-V4 documents. It does **not** supersede their **content and information-architecture** value for pages not yet rebuilt.

| Document | Status | What it's still good for |
|---|---|---|
| `01_company.md` | **Current, unaffected.** | Company mission/vision/positioning copy — authoritative for every page. |
| `02_service_pillars.md` | **Current, unaffected.** | The five pillars' full content (overview, inclusions, value props, client pains, proof points, differentiator) — authoritative for the five pillar pages whenever they're built. |
| `03_tone_of_voice.md` | **Current, unaffected.** | Voice and writing rules — apply to all future copy. |
| `04_design_principles.md` | **Current, unaffected.** | High-level philosophy (business-outcome-driven design, accessibility, purposeful motion) — compatible with and embodied by V4. |
| `05_design_system.md` | **Legacy — visual/component decisions deprecated.** | Its component inventory (Feature Grid, Dark Showcase, Timeline, CTA Band gradient, hard-shadow cards/buttons, wavy dividers, rounded-mask photography) describes the **pre-V4 direction** and must not be copied into new pages. Its page-level **structural/IA facts** (what sections exist on About/Contact/Blog/Case-studies, what order they're in) are still useful context until those pages are rebuilt in V4 language. |
| `06_figma_design_system.md` | **Supporting reference only** (per `CLAUDE.md`), now further scoped: its raw measurements (fonts, hex values, spacing) are historically accurate for the **original Figma file**, but visual decisions should come from this document (`08`) wherever the two disagree for anything V4 will touch. |
| `07_pixelocracy_implementation_spec.md` | **Content/IA reference only for not-yet-built pages.** | This is a large, factual, page-by-page record of the old reference designs (Homepage, About, Contact, Blog/Insights, Pillar Page Template, Case Studies Archive, Wired/Cardom/Apeiron case studies, Mini Landing). It contains real, usable **copy** in places (e.g. About's actual heading/subhead/paragraph text) — use that copy where it's real content, not layout description. **Do not** carry over its layout, card constructions, wavy dividers, or navigation/footer treatment into any new V4 page — those are explicitly the old direction. |
| `/design/*.png` reference screenshots | **IA/content reference only — never visual direction.** | Use exactly as instructed: to understand information architecture, required sections, page relationships, and case-study narrative arcs. The approved V4 homepage defines the new visual, interaction, and motion language, not these screenshots. |

### Recommended page implementation order

Based on real-content availability and reusable-component leverage from V4:

1. **A five-service-pillar page (e.g. Strategy & Advisory).** Fully authoritative content already exists in `02_service_pillars.md`; the page can lean hard on the already-built, content-driven `capabilities-v4.tsx` treatment for a pillar index, plus `proof-v4.tsx`'s beat mechanism for that pillar's own proof points, plus `V4Button`/CTA patterns already built. Building one pillar page establishes the pillar-page template for the remaining four.
2. **The remaining four pillar pages**, once the template from #1 is validated — these are near-mechanical repetitions of the same template with different `02_service_pillars.md` content.
3. **Work / Case Studies archive**, reusing `work-v4.tsx`'s full-viewport chapter pattern and the existing `case-studies.ts` content — already partially proven inside the homepage.
4. **Individual case-study pages** (Wired Greece, Apeiron Ventures — Cardom only if/when real approved copy exists for it, per the standing "never fabricate" rule already established for the homepage Work section).
5. **About and Contact**, since their approved content in `07`'s About/Contact sections is real but will need full V4-language re-composition (no rounded-mask photography, no wavy dividers, no centered generic hero) — expect more genuine design work here than in the mechanically-templated pillar pages.
6. **Insights/Blog**, last — only a single article template exists in the old reference material with no listing/archive page defined, so this needs the most net-new IA thinking.

---

*This document should let another AI or developer build a new V4 page correctly without needing the conversation history that produced it. If something needed for a new page isn't covered here, that's a gap — extend this document rather than improvising a new pattern silently.*
