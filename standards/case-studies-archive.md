# Case Studies Archive Structure

Reverse-engineered from `design/Case Studies Archive - Desktop.png` and `design/Case Studies Archive - Mobile.png`, cross-referenced against `knowledge/05_design_system.md`, `standards/components.md`, and `CLAUDE.md`. This is the canonical blueprint for the Case Studies Archive page.

## Section Order

Top to bottom, exactly as shown in the approved design:

1. Navigation
2. Page heading ("What We've Built") with a supporting subtext line
3. A vertical list of four Case Study Cards (numbered 01–04)
4. Logo Strip ("Trusted by 100+ organisations")
5. CTA Band ("Get in touch")
6. Footer

No wavy divider graphics appear on this page — every section sits directly on a white background except the CTA Band and Footer, which carry their own backgrounds as documented in `standards/components.md`.

## Layout

- **Page heading**: centered H1, centered one-line subtext directly beneath it.
- **Case Study Card list**: four cards stacked vertically, each spanning the same content width. Every card places its text block on the left (light lavender background) and its image on the right (client wordmark centered on the photo) — the cards do **not** alternate sides; all four use the same left-text/right-image orientation.
- **Logo Strip**: centered caption above a single horizontal row of grayscale logos.
- **CTA Band**: full-bleed blue-to-navy gradient block, centered heading, paragraph, and Primary CTA.
- **Footer**: as documented in `standards/components.md` — unchanged here.

## Components Used

Using the canonical names defined in `standards/components.md`:

- **Navigation**
- A centered page heading + subtext — this matches the centered variant of **Section Header**, though used here as the page's own title rather than introducing a mid-page section.
- **Case Study Card** (the numbered, side-by-side archive variant explicitly documented in `standards/components.md` — four instances)
- **Logo Strip** (client/partner logo variant)
- **CTA Band**, with its **Primary CTA** ("Talk to our team")
- **Footer**

## Content Structure

Describes what each section holds, not the wording itself:

- **Page heading**: one page title, one supporting sentence.
- **Case Study Card list**: four entries, each with an order number, a heading, a short description, a client photo with the client's wordmark overlaid, and a "Learn More" link.
- **Logo Strip**: one trust caption sentence; a set of client/partner logos.
- **CTA Band**: one heading, one to two supporting sentences, one conversion action.
- **Footer**: company tagline, site link list, certification/trust marks, social link, copyright line.

## Card Behaviour

- Each Case Study Card is numbered (01–04), matching its position in the list — the numbers are sequential and do not appear to encode a separate priority or category order beyond list position.
- Every card uses the same left-text/right-image layout; there is no alternating or mirrored variant on this page.
- Card heading text is rendered in accent blue and at a larger, bolder weight than the plain near-black headings used elsewhere on the site — this is specific to the Case Study Card's archive variant as shown here, not a general heading treatment.
- Each card's image is a full-bleed photograph relevant to the client's industry, with the client's logo/wordmark centered on top of it in white.
- Each card ends in a single "Learn More →" link, which is the only interactive element on the card besides the card's implicit link-through behavior.
- Card background is light lavender; page background around the cards is white.

## Filtering or Categorisation

No filtering, sorting, category tabs, search, or pagination control of any kind is present in the approved design. The four case studies are shown as a single, fixed, numbered list. Do not add filtering or categorization functionality — it is not part of the approved design.

## Responsive Behaviour

- The Case Study Card list keeps the same numbered order on mobile; each card's image moves above its text block (image on top, text below) rather than staying side by side.
- The page heading's subtext wraps to two lines on mobile.
- The Logo Strip remains a single horizontal row, scaled to the narrower viewport, showing fewer logos before the row ends (three logos visible in the mobile design versus five on desktop — the approved mobile design simply shows less of the row, not a different logo set).
- The CTA Band and Footer stack in the same order and internal arrangement as every other page.

## AI Rules

- Preserve the section order exactly as listed above — do not add, remove, or reorder sections without an approved design change.
- Do not add filtering, sorting, search, or pagination — none exists in the approved design; if a future task requires it, stop and ask rather than inventing it.
- Keep all four Case Study Cards in the same left-text/right-image orientation on desktop — do not introduce an alternating layout.
- Preserve the accent-blue, larger-weight heading treatment specific to this page's Case Study Card instances.
- Reuse Case Study Card, Logo Strip, and CTA Band from `standards/components.md` rather than rebuilding equivalent markup for this page.
- Case study content (names, descriptions, client logos) must come from `/knowledge` and the approved case study designs — never invented.
- Follow the Decision Process in `CLAUDE.md` before making any change to this page: understand the request, check `/knowledge` and `/design`, reuse before creating, and explain assumptions.
