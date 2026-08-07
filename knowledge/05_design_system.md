# Design System

> **⚠️ LEGACY — visual/component decisions superseded by V4.** This document describes the **pre-V4** direction (wavy dividers, hard-shadow `6px 6px 0px` cards/buttons, the "Overlay+Border+OverlayBlur" card construction, gradient CTA bands, rounded-mask + wave-scallop photography, a conventional top nav). None of that should be used as visual reference for any new page. The current visual, typography, motion, and component authority is **[`knowledge/08_v4_design_system.md`](./08_v4_design_system.md)**, extracted from the approved, locked V4 homepage.
>
> This document remains valid for **content and information architecture** on pages not yet rebuilt in V4 (what sections exist on About/Contact/Blog/Case-studies, what order they're in, what real copy was approved) — see `08`'s §9 for the full breakdown.

Reverse-engineered from the approved reference designs in `/design`. These are the single source of truth: Homepage, About, Contact, Case Studies Archive, Blog (single article template), Pillar Page Template, and three case studies (Apeiron Ventures, Cardom, Wired Greece — including Wired's pre-update draft, superseded by "UPDATED Wired Case Study").

Where a pattern is not visible in the approved designs, this document says so explicitly rather than inventing one.

---

# Design Philosophy

Every section is framed around a business outcome, not a decorative idea: headlines state a result ("From national infrastructure to early-stage products"), stats are given as proof ("9M users", "€400M in yearly savings", "0 security breaches"), and objections are addressed directly ("We spent €100K on consultants. The deck is beautiful. Nothing changed."). Imagery is either real product/UI screenshots or abstract technical visuals (particle/network banners) — never generic stock-photo illustration. The same small set of section and card patterns is reused across every page type rather than each page inventing its own layout.

---

# Visual Personality

Confident, structured, "engineered" rather than playful. A recurring numbered system (01, 02, 03...) is the strongest identity device, appearing in service lists, process steps, card grids, and case-study narrative sections. A wavy horizontal divider shape is used repeatedly to break between differently-tinted sections, giving the otherwise rigid grid a soft, human edge. The overall feel is enterprise-grade and blue-dominant, closer to a technology consultancy than a creative agency.

---

# Typography

Two typefaces are visibly in use:

- A bold, rounded, geometric display face for the logo wordmark and major headlines (H1/H2). Letterforms are tight, heavy-weight, and rounded at the terminals.
- A standard humanist sans for body copy, navigation, buttons, form fields, and card text.

Observed patterns:
- Large, tight-line-height display headlines (roughly 2–3 lines max on desktop hero sections).
- Small, bold, uppercase (or small-caps-style) "eyebrow" labels in the accent blue appear before nearly every section heading (e.g. "WHO WE ARE", "PILLAR 01", "01 — THE BRIEF").
- Big bold display numbers are used for stats (e.g. "9M", "€400M", "70%"), paired with a small label underneath.
- Body copy is set at a comfortable reading size with generous line-height, in a neutral gray-black.

Exact typeface names, weights, and a numeric type scale are not specified in the visual designs and are not yet defined — they should be confirmed against brand/font assets before implementation.

---

# Colors

Colors are described qualitatively; exact hex/token values cannot be reliably sampled from the reference PNGs and are not yet defined.

- **Accent blue** — a vivid royal/indigo blue. Used for links, primary buttons, eyebrow labels, icon accents, active nav/pill states, and solid card fills.
- **Deep navy** — a near-black blue. Used as the background for full-bleed "dark" sections: stat bands, CTA bands, "component by component" showcases, and tools/platform breakdowns.
- **Light lavender / periwinkle tint** — a very light blue-tinted background. Used to alternate with white as section backgrounds (hero, footer, card fills, info panels) and to create visual rhythm down the page.
- **White** — primary content background.
- **Near-black** — headline text, footer wordmark.
- **Gray** — secondary/body text, disabled/placeholder states.

Client brand colors that appear inside case-study mockups (e.g. Apeiron's red, Cardom's purple/pink) belong to the featured client's own product and are **not** part of Pixelocracy's palette — they should never bleed into Pixelocracy's own chrome, nav, or buttons.

---

# Layout

Content is generally centered in a constrained column with generous side margins. Full-bleed sections (colored bands, banner images, wavy dividers) break out edge-to-edge while the text/content inside them stays aligned to the same constrained column as the rest of the page. Section backgrounds alternate — white, light lavender, navy, white — to create rhythm. Section headers (eyebrow + heading + supporting paragraph) are typically center-aligned when introducing a page or major section (e.g. "What We've Built", "Find us"); body/detail content below is left-aligned.

---

# Grid

Multi-column groupings observed: 2-column (hero text/image splits, contact form/info panel, "what's included" checklist), 3-column (pillar "why us" cards, case-study "selected experience" cards, tools/platform categories), 4-column (About "how we work" cards, footer tools row), and 5-column (About stats row). No explicit column-count or gutter specification is visible in the flat designs — a numeric 12-column grid is a reasonable implementation assumption but is not confirmed by the source files.

---

# Spacing

Vertical spacing between major sections is large and consistent, giving every section room to breathe. Card and container internal padding is generous rather than tight. No exact spacing scale (e.g. 4/8px base unit) is visible in the flat designs and is not yet defined.

---

# Containers

A single centered max-width container holds page content on every page. Full-bleed elements (colored section backgrounds, banner photography, wavy divider graphics, dark stat/CTA bands) extend beyond this container to the viewport edge, while the text and components inside them still align to the standard container width. No exact max-width value is visible in the flat designs and is not yet defined.

---

# Buttons

Two primary button styles recur everywhere:

- **Solid/primary** — filled accent blue background, white text, rectangular with slightly rounded corners (e.g. "Book a discovery call", "Send Message" / "Submit Message", "Talk to our team").
- **Outline/secondary** — white/transparent fill, blue border, blue text (e.g. "See our work", "Check it out").

A distinctive recurring embellishment: some primary buttons on the homepage hero have a small solid-blue vertical tab/accent attached to their left edge.

Pill-shaped tags are used as a separate control for tab/filter-style selection — e.g. the pillar-page's "other pillars" navigation (active pillar shown solid blue, others outlined) and blog category tags (outlined pills).

---

# Cards

Two card "weights" are paired constantly to create emphasis: a **solid blue-filled card** (typically the first/primary item) alongside **outlined or light-tint cards** (secondary items) in the same grid — seen in the About "how we work" 4-card grid and the pillar-page "why us" 3-card grid.

Other recurring card types:
- **Case-study preview card** — image + text, side-by-side on desktop and stacked (image on top) on mobile, light lavender background, numbered, ending in a "Learn More →" link.
- **Quote / objection card** — large quotation-mark glyph, styled as an accordion; the expanded state shows a rebuttal answer marked with a checkmark icon.
- **Stat card** — large bold number with a short label underneath, shown individually or in a row/grid.
- **Team member card** — black-and-white portrait photo, bold name, gray job title, arranged in a grid.

---

# Navigation

A single fixed/sticky top nav is reused on every page: logo on the far left, horizontal text links (Home, Services with a dropdown caret, Work, About, Insights), and a visually distinct "Contact" link/button on the far right. On mobile, the links collapse behind a hamburger icon.

---

# Footer

Identical structure on every page: a wavy graphic marks the top edge, background is the light lavender tint. Left column holds the wordmark logo and a one-line tagline ("We transform the industries of the present, with the technologies of the future"). Center column is a link list (Expertise, Work, About, Cookie Policy, Privacy Policy). Right column shows a certification badge (EUROCERT ISO/IEC 27001:2023) and a LinkedIn icon. A bottom bar carries the copyright line ("Pixelocracy © 2026, All rights reserved.") alongside a fixed circular blue "back to top" button.

---

# Section Patterns

- **Eyebrow + heading + supporting paragraph** is the universal way every section (and every page) introduces itself.
- **Numbered lists/steps** (01–05) appear at every level: homepage service pillars, About's "how we work," pillar-page "why us" cards, and every case study's narrative sections.
- **Trust logo bar** — a row of grayscale client/partner logos under a "Trusted by..." label — appears on Homepage, About, and Case Studies Archive.
- **"Get in touch" CTA band** — a full-bleed blue gradient band with a white heading, supporting copy, and a white button ("Talk to our team") — recurs identically on Homepage, Case Studies Archive, and elsewhere.
- **Wavy divider graphics** mark nearly every transition between differently-tinted sections.

---

# Case Study Patterns

All three case studies (Apeiron, Cardom, Wired) share one template:

1. **Hero** — case-study eyebrow tag, two-line title (client/brand name bold, product name below in blue), a short description, a single outline CTA ("Check it out"), and a device/product mockup on the right.
2. **Numbered narrative sections** — each with its own small eyebrow ("01 — THE BRIEF/MARKET/CLIENT", etc.) and bold heading. Exact section names differ per story (e.g. Wired: Brief → Rules → Typeface Problem → Built → Web Development → Result; Apeiron: The Client → Three Directions → The Name → Designed to Move → The Development → The Result; Cardom: The Market → The Bet → Trust → Component by Component → The Development → The Result) — the narrative arc is customized per project, but the numbered-eyebrow pattern is constant.
3. **A "build" showcase section on a dark navy background**, in one of two approved variants: (a) a numbered stat grid (large bold numbers + labels, used in the current Wired version), or (b) a gallery of framed UI screenshot mockups titled "Component by component" (used in Apeiron, Cardom, and Wired's earlier draft). Both are approved; which one to use appears to depend on whether the story has strong quantifiable metrics.
4. **Tools/platform breakdown** — dark navy, multi-column, each column has a category heading (e.g. Marketplace, Transactions, Logistics, Backend / Editorial, Subscriptions, Monetization), a bullet list, and rounded pill badges naming the specific tools/technologies used.
5. **Closing "the result" section** — centered heading, supporting paragraph, a CTA button, and a giant, low-opacity oversized wordmark of the client's name filling the section beneath it, with previous/next case-study arrows.

The client's own product branding and colors are shown only inside device-frame mockups within these sections — they do not extend to Pixelocracy's own nav, footer, or button colors.

---

# Blog Patterns

Only a single blog **article** template is included in the approved designs — no blog listing/index/archive page is present. That pattern is **not yet defined**.

The article template:
- Full-width banner photo directly under the nav.
- H1 title, supporting paragraph, and share icons (LinkedIn, copy-link) placed top-right of the intro block.
- A row of pill-shaped category tags plus right-aligned "Published [date] · [x] minute read" metadata.
- Two-column body: a sticky left "CONTENTS" sidebar with a numbered, anchor-linked outline (the active item highlighted in blue), and a right-hand main content column with H2/H3 subheadings, body copy, and an inline full-width image.
- A divider rule followed by a "Previous / Next" article footer nav, each with a thumbnail and title.

---

# Pillar Page Patterns

One template file ("Pillar Page Template") defines the structure used identically across all five service pillars — only the content changes per pillar:

- **Hero** — eyebrow "PILLAR 0X", H1 pillar name, a short supporting line and paragraph, and a right-aligned meta sidebar listing Pillar / Works Best With / Typical Engagement as key-value pairs.
- A full-bleed, dark, abstract banner image directly beneath the hero, with a wavy bottom mask.
- A **3-card "why us" grid**, numbered, using the solid-blue-first / outlined-rest card pairing.
- A **"we've heard this before" objections section** — quote/accordion cards in a 2-column grid, one expanded to reveal a checkmark-marked rebuttal.
- A **3-column "selected experience" section** — sector/industry name, short description, and a bold blue outcome stat as a link.
- A **dark navy "what's included" section** — a 2-column categorized checklist, each column with its own subheading.
- A **pull-quote** ("The Pixelocracy difference") set off with a vertical accent bar.
- A **closing CTA** — heading and paragraph on the left, button on the right, plus a pill-tab row linking to the other four pillars (the current pillar shown solid blue/active, the rest outlined).

---

# Mobile Behaviour

Every multi-column desktop layout collapses to a single stacked column on mobile, preserving the same top-to-bottom content order (no reordering). The top nav collapses to a hamburger icon. Case-study and product mockups scale down and stack vertically rather than overlapping. Stat grids and multi-column tool/platform breakdowns collapse from rows to a stacked list. Wavy dividers and full-bleed color sections are preserved on mobile at a narrower scale.

---

# Responsive Rules

Only two breakpoints are represented in the approved designs: Desktop and Mobile. No intermediate/tablet breakpoint, and no explicit pixel breakpoint values, are shown. Responsive behavior between these two extremes is **not yet defined**.

---

# Component Reuse Rules

The following must be built as single shared components, not per-page duplicates, because they appear pixel-identical across pages in the approved designs:
- Top navigation
- Footer
- "Get in touch" CTA band
- Trust/logo bar
- The solid-blue-first / outlined-rest numbered card grid
- The case-study page template (hero → numbered narrative → dark "build" showcase → tools/platform grid → result/wordmark closer) — one template, populated per case study
- The pillar page template — one template, populated per pillar

---

# Motion Principles

No motion or animation is visible in the approved designs — they are static screenshots. Motion behavior is **not yet defined**. Until pillar-specific motion is approved, defer to the general motion guidance already established in `knowledge/04_design_principles.md` (motion supports understanding, never decorative, smooth/subtle/purposeful).

---

# Accessibility

Accessibility characteristics such as color contrast ratios, focus states, keyboard navigation, and ARIA behavior cannot be verified from static screenshots and are **not yet defined**. One observable fact worth flagging for implementation review: the Contact form's fields (Full Name, Your Email, Phone Number, Subject, Your Message) are shown with placeholder text only and no separate persistent visible label — whether this satisfies the accessibility requirement already stated in `knowledge/04_design_principles.md` ("Accessibility is mandatory") should be verified during build.

---

## Reusable Components

The same building blocks recur across every page in the approved designs. Each is described only by what is actually visible.

**Hero**
The intro block at the top of a page: an optional small eyebrow label, a large headline, a short supporting paragraph, and (on most pages) one or two CTA buttons. Seen on Homepage, About, Contact, and Pillar Page (where it also includes a right-aligned meta sidebar).

**Section Header**
The eyebrow label + heading + supporting paragraph combination used to introduce a section mid-page. Center-aligned when introducing a page or major section (e.g. "What We've Built", "Find us"); left-aligned when introducing a narrower content block.

**CTA Band**
A full-bleed blue/navy gradient band containing a white heading, white supporting copy, and a single Primary CTA (e.g. "Talk to our team"). Appears identically on Homepage and Case Studies Archive.

**Primary CTA**
A solid accent-blue button with white text and slightly rounded corners (e.g. "Book a discovery call", "Send Message" / "Submit Message", "Talk to our team"). On the Homepage hero, one instance carries a small solid-blue accent tab on its left edge.

**Secondary CTA**
An outline button — transparent/white fill, blue border, blue text (e.g. "See our work", "Check it out").

**Feature Grid**
A grid of 3 or 4 numbered cards where the first (and sometimes last) card is solid blue-filled and the remaining cards are outlined/light-tint. Seen in About's "How we work" (4 cards) and the Pillar Page's "Why us" (3 cards). Apeiron's "Every brief starts with exploration" (3 solid-blue cards, no outline variant) is a related all-filled variant of this same pattern.

**Case Study Hero**
A hero variant specific to case study pages: a small case-study eyebrow tag, a two-line title (client/brand name bold, product name below in blue), a short description, a single Secondary CTA ("Check it out"), and a device/product mockup positioned to the right.

**Statistics**
A large bold number paired with a short label underneath, shown standalone or grouped in a row/grid. Seen on a navy background in both About ("Results, not claims": 9M / €400M / 95% / 60% / 0) and Wired's stat variant of the Dark Showcase (70% / 2wks / 7 / 15+).

**Logo Strip**
A row of grayscale client/partner logos beneath a "Trusted by..." label. Seen on Homepage, About, and Case Studies Archive.

**Footer**
Documented in full under [Footer](#footer) above. Identical on every page.

**Navigation**
Documented in full under [Navigation](#navigation) above. Identical on every page.

**Content Block**
A plain heading-and-paragraph text section with no card, grid, or image — e.g. About's "The way we show up" intro, or the narrative paragraphs inside a case study's numbered sections.

**Image + Text**
A body-width pairing of a paragraph of text alongside one or more supporting images used to illustrate a specific claim — e.g. Wired's "Greek has no Wired typeface" (text beside two headline examples). Distinct from the Hero and Case Study Hero, which operate at page-intro scale rather than mid-page illustration scale.

**Dark Showcase**
A full-bleed navy section used to present proof or build detail. Three approved content variants exist inside this same dark container: a Statistics grid, a gallery of framed UI screenshot mockups ("Component by component"), and a categorized tools/platform breakdown (category heading + bullet list + rounded tool-name pill badges).

**Timeline**
A horizontal sequence of numbered circular nodes connected by a line, each node labelled with a stage name (e.g. Cardom's Search → Verify → Purchase → Finance → Deliver), typically followed by supporting cards elaborating on selected stages.

**Process Section**
A single bordered container holding an ordered vertical list of numbered rows, each combining an icon illustration, a heading, a short description, and a "Learn more" link — used to enumerate services/offerings. Seen in the Homepage's "What we do".

---

## Naming Convention

These are the official names for the reusable patterns identified in this document. Earlier sections above sometimes describe the same pattern in narrative prose without a fixed name — going forward, refer to these patterns only by the canonical name below. Do not invent synonyms (e.g. "hero banner", "intro block", "CTA section", "stat block") for a component that already has a name here.

| Canonical name | Do not also call it |
|---|---|
| Hero | hero banner, intro block, page header |
| Section Header | section intro, header block |
| CTA Band | "Get in touch" section, contact band |
| Primary CTA | main button, filled button |
| Secondary CTA | outline button, ghost button |
| Feature Grid | card grid, benefit cards |
| Case Study Hero | project hero, case intro |
| Statistics | stat block, numbers section |
| Logo Strip | trust bar, client logos |
| Footer | site footer, bottom section |
| Navigation | navbar, header nav, menu |
| Content Block | text section, copy block |
| Image + Text | media-text split, illustration block |
| Dark Showcase | dark section, navy block |
| Timeline | step flow, journey diagram |
| Process Section | service list, offering list |

---

## AI Rules

- Never redesign an approved component.
- Prefer composition over invention.
- Reuse existing patterns before creating new ones.
- Preserve spacing relationships.
- Preserve visual hierarchy.
- Maintain consistency across all pages.
- Every new page should feel like it belongs to the existing Pixelocracy website.

---

# AI Instructions

Treat this document as the visual source of truth for the Pixelocracy website. When generating or describing an interface:

- Reuse the documented components and section patterns rather than inventing new ones.
- Never introduce colors, typefaces, or component styles that are not described here.
- Never let a case study's client branding influence Pixelocracy's own site chrome or palette.
- If a needed pattern is not covered in this document, say so explicitly and ask, rather than improvising or redesigning.
- Do not treat gaps marked "not yet defined" as an invitation to invent a value — flag them for human decision.
