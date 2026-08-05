# Pillar Page Structure

Reverse-engineered from `design/UPDATED Pillar Page Template - Desktop.png` and `design/UPDATED Pillar Page Template - Mobile.png` (the "Strategy & Advisory" instance), cross-referenced against `knowledge/05_design_system.md`, `standards/components.md`, `knowledge/02_service_pillars.md`, and `CLAUDE.md`. This is the canonical blueprint for all five service pillar pages — nothing here should be changed without updating the approved design first.

## Section Order

Top to bottom, exactly as shown in the approved design:

1. Navigation
2. Hero (eyebrow "PILLAR 0X" / pillar name / supporting line and paragraph) with its Meta Sidebar
3. Full-bleed dark abstract banner image, wavy bottom mask
4. "Why us" — Section Header ("WHY US" / "Strategy rooted in delivery") + Feature Grid (three reasons)
5. "We've heard this before" — Section Header ("TYPICAL SITUATIONS WE SOLVE") + a 2×2 grid of objection/answer cards
6. "Selected experience" — Section Header ("SELECTED EXPERIENCE" / "Work that went all the way") + a three-column row of proof cards
7. Full-bleed dark navy section: Section Header ("WHAT'S INCLUDED") + a two-column categorized checklist + a pull-quote ("The Pixelocracy difference")
8. Closing CTA — heading, paragraph, and a Primary CTA, followed by a pillar Pill Tag row ("Other pillars")
9. Footer

Wavy divider graphics mark the transition from the Hero into the dark banner image (step 2→3), from "We've heard this before" into "Selected experience" (step 5→6), and from the dark "What's included" section into the closing CTA (step 7→8).

## Layout

- **Hero**: left-aligned eyebrow, headline, supporting line, and paragraph on the left; a right-aligned Meta Sidebar (Pillar / Works Best With / Typical Engagement) on the right, top-aligned with the headline.
- **Dark banner image**: full-bleed, directly beneath the Hero, with a wavy bottom mask.
- **"Why us"**: centered Section Header, followed by a 3-column Feature Grid directly beneath it — first card solid blue-filled, other two outlined, each numbered.
- **"We've heard this before"**: centered Section Header, followed by a 2×2 grid of accordion-style cards; one card (bottom right in the approved design) is shown expanded.
- **"Selected experience"**: centered Section Header, followed by a 3-column row of text-only proof cards (sector name, description, bold blue outcome line).
- **"What's included"**: centered Section Header on a full-bleed dark navy background, followed by a 2-column checklist (each column with its own subheading, a bulleted list, and a short closing sentence), followed by a pull-quote set off with a vertical accent bar.
- **Closing CTA**: heading and paragraph on the left, Primary CTA on the right; directly beneath, a left-aligned "OTHER PILLARS" label followed by a horizontal row of Pill Tags.
- **Footer**: as documented in `standards/components.md` — unchanged here.

## Components Used

Using the canonical names defined in `standards/components.md`, plus explicit notes where no existing canonical component matches:

- **Navigation**
- **Hero** (left-aligned, paired with **Meta Sidebar**)
- A full-bleed dark abstract banner image directly beneath the Hero — this is not yet documented as its own named component in `standards/components.md`; treat it as a page-specific decorative image block, not as a variant of Dark Showcase (which `standards/components.md` scopes to the case studies only).
- **Section Header** (used four times: "Why us", "We've heard this before", "Selected experience", "What's included" — all using the eyebrow + heading + paragraph variant)
- **Feature Grid** (solid-first / outline-rest variant, three cards)
- **Quote Card** (2×2 grid, one card shown expanded)
- A three-column, text-only proof card ("Selected experience": sector name, description, bold blue outcome line) — this does not match **Case Study Card**, which requires an image block, nor **Content Block**, which per `standards/components.md` must never have a card border or background tint. This is a gap: a card-bounded, text-only proof pattern that is not yet captured as a named component. Flag rather than force it into an existing name.
- A dark navy, 2-column categorized checklist section — visually similar to Dark Showcase's tools/platform variant, but `standards/components.md` scopes Dark Showcase to the case studies only, so this should not be labeled as a Dark Showcase instance without updating that document.
- A pull-quote block with a vertical accent bar ("The Pixelocracy difference") — not yet documented as a named component in `standards/components.md`.
- **Primary CTA** ("Book a discovery call")
- **Pill Tag** (the "Other pillars" row — active/inactive variants, five pills)
- **Footer**

## Content Structure

Describes what each section holds, not the wording itself. Mapped against the six categories requested, using the section names visible in the approved design (the design's own labels differ from these category names, so the mapping below is this document's own organizing interpretation, not a label present in the design):

- **Hero**: an order label (which pillar number), the pillar name, a short positioning line, a supporting paragraph, and three key-value facts (Pillar, Works Best With, Typical Engagement).
- **Challenge** — corresponds to "We've heard this before": a section intro, and four recurring client objections, each paired with a rebuttal answer (only one rebuttal is shown expanded in the approved design; the interaction implies all four have an answer).
- **How We Help** — corresponds to "Why us": a section intro, and three reasons/approach statements, each with an order number, a short heading, and a supporting sentence.
- **What's Included**: a section intro, two categories of included work, each with a subheading, a bulleted list of specific activities, and a short closing sentence describing what that category achieves.
- **Why Pixelocracy** — corresponds to "Selected experience" plus the closing pull-quote: three sector/engagement proof points (sector name, short description, a quantified or named outcome), and one differentiation statement explaining Pixelocracy's way of working.
- **Call to Action**: a closing heading, a supporting sentence, one primary action, and a set of links to the other four pillar pages.

Do not write or rewrite marketing copy into this file — content for each pillar lives in `knowledge/02_service_pillars.md` and is written when each pillar page is built.

## Visual Behaviour

- Section backgrounds alternate to create rhythm: white (Hero) → dark banner image → white ("Why us", "We've heard this before", "Selected experience") → dark navy ("What's included") → white (closing CTA, footer).
- The Hero is left-aligned; every Section Header on this page is centered; the "What's included" checklist columns and the pull-quote are left-aligned within the dark section; the closing CTA is left-aligned with the Primary CTA positioned to the right.
- Spacing between major sections is large and consistent, matching the general spacing behavior described in `knowledge/05_design_system.md`.
- Wavy divider graphics appear at every background-color transition on this page.
- Every Section Header on this page uses the eyebrow-label variant — no Section Header on the Pillar Page omits its eyebrow.
- The Feature Grid's solid-first / outline-rest emphasis pattern, the Quote Card's quotation-mark glyph and checkmark icon, and the Pill Tag's active/inactive fill states all follow the same design rules already documented for those components in `standards/components.md`.
- Accent blue marks every eyebrow label, the Feature Grid's solid cards, the "Selected experience" outcome lines, the pull-quote's vertical accent bar, and the active Pill Tag — never body copy.

## Responsive Behaviour

- All multi-column sections collapse to a single stacked column on mobile, in the same top-to-bottom order as desktop.
- The Hero's Meta Sidebar moves from a right-aligned column to a stacked block directly beneath the Hero's paragraph.
- The Feature Grid becomes a single-card view on mobile with a three-dot pagination indicator beneath it — the same carousel behavior already established for Case Study Card (Homepage) and Feature Grid (About) in `standards/homepage.md` and `standards/about.md`.
- The "We've heard this before" 2×2 card grid collapses to a single stacked column; the same card is shown expanded as on desktop.
- The "Selected experience" three-column row collapses to a single stacked column.
- The "What's included" two-column checklist collapses to a single stacked column, one category above the other; the pull-quote follows beneath both.
- The closing CTA's heading/paragraph and Primary CTA stack vertically instead of sitting side by side; the "Other pillars" Pill Tag row wraps to fit the narrower viewport, and only the current pillar's pill plus the next pillar are visible without scrolling in the mobile design.

## Pillar Content Rules

This single template is reused, unchanged in structure, across all five service pillars:

- Strategy & Advisory
- Data, AI & Automation
- Engineering & Security
- Digital Products
- Capability Building & Operations

Only the content within each section changes per pillar — the section order, layout, and component choices documented above must remain identical across all five pages. Approved content for each pillar's Overview, What's Included, Value Propositions, Client Pains, Proof Points, and Key Differentiator must come from `knowledge/02_service_pillars.md`, and only from that file and other approved sources under `/knowledge` — never invented or drawn from assumption. The five pillar names and their order in the closing "Other pillars" Pill Tag row must match `knowledge/02_service_pillars.md` exactly.

## Reusable Patterns

Patterns on this page that are shared globally and must not be rebuilt per pillar or per page:

- **Hero** paired with **Meta Sidebar**
- **Section Header** (eyebrow + heading + paragraph variant)
- **Feature Grid** (solid-first / outline-rest variant), including its mobile single-card-with-dots behavior
- **Quote Card** (collapsed/expanded accordion behavior)
- **Primary CTA**
- **Pill Tag** (active/inactive variants)
- **Navigation** and **Footer**

## AI Rules

- Preserve the section order and count exactly as listed above for every pillar page — do not add, remove, or reorder sections without an approved design change.
- Content for every pillar must come from `knowledge/02_service_pillars.md` and other approved `/knowledge` sources only — never invent services, proof points, client pains, or statistics for a pillar.
- Do not label the dark banner image, the "What's included" checklist section, or the "Selected experience" proof cards as Dark Showcase or Case Study Card — those component names are scoped elsewhere in `standards/components.md`. Treat these three as flagged gaps and ask before formalizing a name for them.
- The Feature Grid must keep the solid-first / outline-rest emphasis pattern — do not switch it to the all-filled variant used on Apeiron.
- The "Other pillars" Pill Tag row must always link to all four other pillars, with the current pillar shown in the active (solid) state.
- Reuse Hero, Meta Sidebar, Section Header, Feature Grid, Quote Card, Primary CTA, and Pill Tag from `standards/components.md` rather than rebuilding equivalent markup for any pillar page.
- Follow the Decision Process in `CLAUDE.md` before making any change to this template or to an individual pillar page: understand the request, check `/knowledge` and `/design`, reuse before creating, and explain assumptions.
