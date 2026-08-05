# About Page Structure

Reverse-engineered from `design/About - Desktop.png` and `design/About - Mobile.png`, cross-referenced against `knowledge/05_design_system.md`, `standards/components.md`, and `CLAUDE.md`. This is the canonical blueprint for the About page — nothing here should be changed without updating the approved design first.

## Section Order

Top to bottom, exactly as shown in the approved design:

1. Navigation
2. Hero ("About Pixelocracy") with its two-image banner
3. Logo Strip ("Trusted by 100+ organisations")
4. Full-bleed navy section: Section Header ("WHO WE ARE" / "One team. Five disciplines. No handoffs.") + Statistics ("Results, not claims")
5. Section Header ("HOW WE WORK" / "The way we show up")
6. Feature Grid (four cards: "We embed, not consult" / "We start with the outcome" / "We adapt without losing rigour" / "We build your independence")
7. Section Header ("THE LEADERSHIP TEAM" / "The people behind the work")
8. Team Member Card grid
9. Full-bleed light-lavender section: Section Header ("JOIN US" / "We're always looking for people who think in systems.") + Secondary CTA ("See open positions")
10. Footer

Wavy divider graphics mark the transition into and out of the navy section (steps 3→4 and 4→5), matching the general transition pattern documented in `knowledge/05_design_system.md`.

## Layout

- **Hero**: centered eyebrow-less headline ("About Pixelocracy"), centered one-line subtitle, centered supporting paragraph, followed directly by a two-image banner (two black-and-white photos side by side) with a wavy bottom mask. This is the approved "no CTA, followed by imagery" Hero variant documented in `standards/components.md`.
- **Logo Strip**: centered caption above a single horizontal row of grayscale logos. White background.
- **Navy section**: centered Section Header (eyebrow + heading + two supporting paragraphs), followed by a centered Statistics row of five entries, each with a bold number, a short label, and a small category tag beneath it.
- **"The way we show up"**: left-aligned Section Header (eyebrow + heading + one supporting paragraph). White background.
- **Feature Grid**: 2×2 grid directly beneath the Section Header above it. First and fourth cards are solid blue-filled; second and third are outlined — matching the "solid-first / outline-rest" variant defined in `standards/components.md`.
- **"The people behind the work"**: centered Section Header, followed by the Team Member Card grid — a row of three cards, then a row of four cards, evenly spaced.
- **Recruiting section**: centered Section Header, followed by a centered Secondary CTA. Full-bleed light lavender background.
- **Footer**: as documented in `standards/components.md` — unchanged here.

## Components Used

Using the canonical names defined in `standards/components.md`:

- **Navigation**
- **Hero** (the "no CTA, followed by imagery" variant)
- **Logo Strip** (client/partner logo variant)
- **Section Header** (used four times: "Who we are", "How we work", "The leadership team", "Join us")
- **Statistics** (five entries, shown on the navy full-bleed background alongside the "Who we are" Section Header — this pairing is specific to About; it is not an instance of Dark Showcase, which `standards/components.md` scopes to the case studies only)
- **Feature Grid** (solid-first / outline-rest variant, four cards)
- **Team Member Card** (seven card instances, arranged 3 then 4)
- **Secondary CTA** ("See open positions")
- **Footer**

## Content Structure

Describes what each section holds, not the wording itself:

- **Hero**: one page title, one short positioning subtitle, one supporting paragraph describing what the company is and who it works with, plus two supporting photographs.
- **Logo Strip**: one trust caption sentence; a set of client/partner logos.
- **Navy section**: an eyebrow, a heading, two supporting paragraphs describing how the company operates as one team, and five quantified proof points, each with a value, a short label, and a category tag.
- **"How we show up"**: an eyebrow, a heading, and one paragraph explaining the company's working style.
- **Feature Grid**: four entries, each with an order number, a short heading, and one supporting sentence, describing a specific way of working.
- **"The people behind the work"**: an eyebrow, a heading, one supporting paragraph, and a set of team member entries, each with a photo, a name, and a job title.
- **Recruiting section**: an eyebrow, a heading, one supporting paragraph inviting prospective hires, and one CTA.
- **Footer**: company tagline, site link list, certification/trust marks, social link, copyright line.

Do not write marketing copy into this file — content for each section lives in `/knowledge` and is written when the page is built.

One factual observation from the approved design, not a content instruction: the Team Member Card grid shows only three distinct people (Chris Andreikos, Filippos Zakopoulos, Michael Petychakis) repeated across seven card slots (three, then Chris again as a fourth). This is what the approved design currently shows — populate the final page with the real team roster rather than repeating names, but do not change the seven-slot grid layout without an approved design change.

## Visual Behaviour

- Section backgrounds alternate to create rhythm: white (Hero, Logo Strip) → navy (Who we are / Statistics) → white (How we work, Feature Grid, Leadership) → light lavender (Join us / footer).
- The Hero, Logo Strip section, navy section, and both mid-page Section Headers introducing "The people behind the work" and "Join us" are centered; "How we work" and its Feature Grid are left-aligned/left-anchored.
- Spacing between major sections is large and consistent, matching the general spacing behavior described in `knowledge/05_design_system.md`.
- Wavy divider graphics appear at the white-to-navy and navy-to-white transitions.
- Every Section Header on this page uses the eyebrow-label variant (unlike the Homepage's mid-page headers, which omit it) — "WHO WE ARE", "HOW WE WORK", "THE LEADERSHIP TEAM", and "JOIN US" are all present.
- Team member portraits are consistently black-and-white, matching the treatment noted in `standards/components.md`.
- Accent blue is used for the Feature Grid's solid-card fills, the Statistics category tags, and the Secondary CTA border/text — never for body copy.

## Responsive Behaviour

- All multi-column and multi-item sections collapse to a single stacked column on mobile, in the same top-to-bottom order as desktop.
- The Hero's two-image banner stacks or scales down to fit the narrower viewport, wavy mask preserved.
- The Logo Strip remains a single horizontal row, scaled to the narrower viewport.
- The Statistics row collapses from a five-across row to a stacked list.
- The Feature Grid becomes a single-card view on mobile with dot pagination beneath it (only the first card, "We embed, not consult," is shown, with a three-dot indicator) — the same carousel behavior already established for Case Study Card on the Homepage in `standards/homepage.md`.
- The Team Member Card grid collapses from a 3-then-4 row layout to a single column for the first three cards, followed by a 2-column pair for the remaining repeated cards.
- The recruiting section and Footer stack in the same order as desktop, full width.

## Reusable Patterns

Patterns on this page that are shared globally and must not be rebuilt per-page:

- **Section Header** (both the centered and left-aligned eyebrow variants)
- **Logo Strip**
- **Statistics** (paired with a Section Header on a full-bleed dark background — the same pairing precedent Wired's case study uses inside Dark Showcase)
- **Feature Grid** (solid-first / outline-rest variant), including its mobile single-card-with-dots behavior
- **Team Member Card**
- **Secondary CTA**
- **Navigation** and **Footer**

## AI Rules

- Preserve the section order and count exactly as listed above — do not add, remove, or reorder sections without an approved design change.
- Do not label the navy "Who we are" / Statistics section as Dark Showcase — that component name is reserved for the case study "build" and platform sections per `standards/components.md`.
- Do not turn the recruiting section into a CTA Band — `standards/components.md` explicitly documents it as a distinct, visually different component (light lavender background, outline Secondary CTA), not the blue "Get in touch" CTA Band used on Homepage and Case Studies Archive.
- The Feature Grid must keep the solid-first / outline-rest emphasis pattern (cards 1 and 4 solid, 2 and 3 outlined) — do not switch it to the all-filled variant used on Apeiron.
- The Team Member Card grid must keep its seven-slot, 3-then-4 layout; populate it with real team members rather than repeating names, but do not change the slot count or arrangement without an approved design change.
- Reuse Section Header, Logo Strip, Statistics, Feature Grid, Team Member Card, and Secondary CTA from `standards/components.md` rather than rebuilding equivalent markup for this page.
- Follow the Decision Process in `CLAUDE.md` before making any change to this page: understand the request, check `/knowledge` and `/design`, reuse before creating, and explain assumptions.
