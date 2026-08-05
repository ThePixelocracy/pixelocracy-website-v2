# Homepage Structure

Reverse-engineered from `design/01_homepage - Desktop.png` and `design/01_homepage - Mobile.png`, cross-referenced against `knowledge/05_design_system.md` and `CLAUDE.md`. This is the canonical blueprint for the Homepage — nothing here should be changed without updating the approved design first.

## Section Order

Top to bottom, exactly as shown in the approved design:

1. Navigation
2. Hero
3. Logo Strip ("Trusted by Greece's largest organisations")
4. "What we do" — Section Header + Process Section (five service pillars)
5. "Tools we build with" — Section Header + value-proposition list + tool logos
6. "Some of what we've shipped" — Section Header + case-study preview cards + secondary CTA
7. CTA Band ("Get in touch")
8. Footer

Wavy divider graphics mark the transition between sections 3→4 and 5→6, matching the general transition pattern documented in `knowledge/05_design_system.md`.

## Layout

- **Navigation**: full-width bar, logo left, nav links center-left, "Contact" right.
- **Hero**: centered two-line headline, centered one-paragraph subtext beneath it, two CTAs (Primary + Secondary) side by side, centered. Background fades from a light lavender tint at the top into white.
- **Logo Strip**: a centered caption line above a single evenly-spaced horizontal row of grayscale logos. White background.
- **"What we do"**: centered Section Header (heading + one-sentence subtext), followed by a single bordered rectangular container spanning the content width. Inside it, five rows stacked vertically, each separated by a thin horizontal rule: order number on the left, a small line-art icon, then heading, description, and a "Learn more →" link. White background.
- **"Tools we build with"**: centered Section Header, followed by three short value-proposition statements arranged in a row (each with a small blue dot marker), followed by a single centered row of five grayscale tool/technology logos. Full-bleed light lavender background.
- **"Some of what we've shipped"**: centered Section Header, followed by a three-column row of equal-width preview cards. Each card has a colored image block on top (client wordmark/logo centered on it) and a white/light card body below (heading, description ending in a stat sentence). A centered "View all Case Studies" secondary CTA sits below the row. White background.
- **CTA Band**: full-bleed blue-to-navy gradient block, centered white heading, centered two-line supporting paragraph, centered white Primary CTA beneath.
- **Footer**: as documented in `knowledge/05_design_system.md` under "Footer" — unchanged here.

## Components Used

Using the canonical names defined in `knowledge/05_design_system.md`:

- **Navigation**
- **Hero**, **Primary CTA** ("Book a discovery call"), **Secondary CTA** ("See our work")
- **Logo Strip** (used twice: once for client trust logos, once for tool/technology logos)
- **Section Header** (used three times: "What we do", "Tools we build with", "Some of what we've shipped")
- **Process Section** (the five numbered service-pillar rows)
- A short inline value-proposition list (three items) in "Tools we build with" — this list style is not yet documented as its own named component in `knowledge/05_design_system.md` and should not be renamed or treated as a new component without updating that file first.
- A case-study preview card variant in "Some of what we've shipped": related to the "Case-study preview card" described under Cards in `knowledge/05_design_system.md`, but without a number, with the image on top rather than beside the text, and with an outcome stat folded into the description. Treat as the same family, not a new component.
- **Secondary CTA** ("View all Case Studies")
- **CTA Band**, **Primary CTA** ("Talk to our team")
- **Footer**

## Content Structure

Describes what each section holds, not the wording itself:

- **Hero**: one primary value-proposition headline; one supporting sentence describing the breadth of capability and the target audience; a primary conversion action; a secondary "see the proof" action.
- **Logo Strip**: one trust caption sentence; a set of client/partner logos.
- **"What we do"**: a section intro (heading + one-sentence framing); exactly five entries, one per service pillar, each with an order number, an icon, the pillar name, a one-sentence value statement, and a link to that pillar's page. The five pillars must match `knowledge/02_service_pillars.md` exactly.
- **"Tools we build with"**: a section intro; three short technology-principle statements; a set of tool/technology logos.
- **"Some of what we've shipped"**: a section intro; three case-study teaser entries, each with a client/brand mark, a project name, a short outcome-oriented description ending in a quantified proof point, and a link; one link to the full case-study archive.
- **CTA Band**: one heading; two supporting sentences inviting contact; one conversion action.
- **Footer**: company tagline, site link list, certification/trust marks, social link, copyright line.

Do not write marketing copy into this file — content for each section lives in `/knowledge` and is written when the page is built.

## Visual Behaviour

- Section backgrounds alternate to create rhythm: white → white → light lavender → white → navy gradient → light lavender (footer).
- All section-level headers on this page are centered; the "What we do" row content and card bodies are left-aligned internally.
- Spacing between major sections is large and consistent, matching the general spacing behavior described in `knowledge/05_design_system.md`.
- Wavy divider graphics appear at every background-color transition on this page.
- Unlike Section Headers on other approved pages (About, Pillar Page, Contact), the Homepage's mid-page section headers ("What we do", "Tools we build with", "Some of what we've shipped") have **no** blue eyebrow label above them — they consist of heading + supporting paragraph only. This is a deviation from the general Section Header pattern and should be preserved as-is, not "corrected" to add an eyebrow.
- The numbered-list motif (01–05) is the strongest hierarchy device on the page, used once, in "What we do".
- Accent blue is reserved for links, the small dot markers in "Tools we build with", and CTA fills — never for body copy.

## Reusable Patterns

Patterns on this page that are shared globally and must not be rebuilt per-page:

- **Section Header** (centered heading + supporting paragraph)
- **CTA Band** ("Get in touch") — identical to the one on Case Studies Archive
- **Logo Strip** — the same component serves both the client trust bar and the tool/technology logo row
- **Process Section** — the numbered, bordered list container
- **Primary CTA / Secondary CTA** pairing
- **Navigation** and **Footer**

## AI Rules

- Preserve the section order and count exactly as listed above — do not add, remove, or reorder sections without an approved design change.
- The "What we do" list must always contain exactly five entries, matching the five pillars in `knowledge/02_service_pillars.md` — never more, never fewer.
- Do not add an eyebrow label to this page's mid-page Section Headers; the approved design does not use one here.
- Do not invent new client logos, tool logos, or stats for "Some of what we've shipped" or the Logo Strip — use only what is approved in `/design` and `/knowledge`.
- Reuse the Section Header, CTA Band, Logo Strip, and Process Section components rather than rebuilding equivalent markup for this page.
- Mobile behavior must follow `design/01_homepage - Mobile.png`: single-column stacking in the same order, and the "Some of what we've shipped" row becoming a single-card view with dot pagination.
- Follow the Decision Process in `CLAUDE.md` before making any change to this page: understand the request, check `/knowledge` and `/design`, reuse before creating, and explain assumptions.
