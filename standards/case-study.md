# Case Study Structure

Reverse-engineered from all three approved case studies — Apeiron Ventures, Cardom, and Wired Greece (the current "UPDATED" version; the earlier Wired draft is superseded but was cross-checked) — cross-referenced against `knowledge/05_design_system.md`, `standards/components.md`, and `CLAUDE.md`. This is the canonical blueprint for every Pixelocracy case study.

The three approved case studies do not share one rigid section-by-section script — the narrative sections in the middle of the page flex to fit each story. What is constant across all three, and therefore canonical, is documented below; where a section's *content type* varies by project, that variation is stated explicitly rather than forced into a single fixed shape.

## Section Order

Constant across all three approved case studies:

1. Navigation
2. Case Study Hero
3. Numbered narrative section "01" (client/market/brief context)
4. Numbered narrative section "02" (the strategic bet, constraint, or rules)
5. Numbered narrative section "03" (the creative or trust-building solution — the component used here varies most by project; see Content Structure)
6. Numbered narrative section "04" — a "build" showcase on a full-bleed dark background
7. Numbered narrative section "05" — a tools/platform breakdown on a full-bleed dark background
8. Numbered narrative section "06" — "the result": closing statement, CTA, oversized client wordmark, and previous/next case study links
9. Footer

Every numbered section carries a small eyebrow in the form "0X — [SECTION NAME]" (e.g. "01 — THE BRIEF", "02 — THE BET", "04 — THE BUILD"). The exact section names differ per project (documented per-project in `knowledge/05_design_system.md`), but the six-slot numbered structure and its ordering is constant across Apeiron, Cardom, and Wired.

## Layout

- **Case Study Hero**: text block left (eyebrow tag, two-line title, description, Secondary CTA), product/device mockup right.
- **Numbered narrative sections (01–03)**: left-aligned eyebrow + heading, paired with body copy and/or supporting imagery. The specific pairing varies: text alongside a comparison list or comparison cards (Cardom's "The market", Wired's "The rules"); text alongside device mockups (Cardom's "The bet"); a centered Feature Grid beneath a centered heading (Apeiron's "Why this in the end"); a horizontal Timeline with supporting cards (Cardom's "Designing for trust"); or text beside supporting images (Wired's "The typeface problem").
- **Section 04 ("the build")**: full-bleed dark navy background, centered eyebrow + heading + supporting paragraph, followed by either a centered Statistics row (Wired) or a gallery of framed UI screenshot mockups arranged in an irregular grid (Apeiron, Cardom).
- **Section 05 (tools/platform)**: full-bleed dark navy background, continuing directly from section 04 with no white gap between them, multi-column layout — each column has a category heading, a bulleted list, and a row of rounded tool-name pill badges.
- **Section 06 ("the result")**: centered eyebrow + heading + supporting paragraph + Primary CTA, followed by a full-width, low-opacity oversized wordmark of the client's name, with previous/next case-study arrow links beneath it.
- **Footer**: as documented in `standards/components.md` — unchanged here.

## Components Used

Using the canonical names defined in `standards/components.md`, with explicit notes where no existing canonical component matches:

- **Navigation**
- **Case Study Hero**
- **Section Header** (the eyebrow + heading variant, left-aligned within each numbered narrative section)
- A **two-column comparison list/card pattern** (Cardom's "Traditional Market vs. Cardom" list, Wired's "Fixed Non-Negotiable vs. Flexible Adaptable" cards) — this recurring pairing is not yet documented as its own named component in `standards/components.md`; it is related to, but not identical to, Feature Grid (it is a 2-item contrast, not a 3–4 item numbered set). Flag rather than force it into an existing name.
- **Feature Grid** (Apeiron's "Why this in the end" — the all-filled variant already noted in `standards/components.md`)
- **Timeline** (Cardom's "Every screen answers a doubt")
- **Image + Text** (Wired's "Greek has no Wired typeface")
- **Dark Showcase**, in each of its three approved variants: the Statistics variant (Wired's "Build to last"), the framed UI screenshot gallery variant (Apeiron's "Designed to move", Cardom's "Component by component"), and the tools/platform breakdown variant (present in all three, immediately following the build section)
- **Primary CTA** (the "live at [client site]" action in "the result")
- A **previous/next case-study link** (arrows beside the oversized wordmark) — not yet documented as its own named component in `standards/components.md`
- **Footer**

## Content Structure

Describes what each section holds, not the wording itself. Mapped against the nine categories requested; several of these categories share a numbered slot in the approved designs rather than each having its own dedicated section — this is stated explicitly below rather than implying a one-to-one mapping that doesn't exist in the approved designs.

- **Hero**: client/brand name, product name, one short descriptive sentence, one CTA, one product mockup image.
- **Client Overview**: who the client is and the context they operate in — carried in numbered section "01" (e.g. Apeiron's "Investing in what comes next", Wired's "Joining a legacy"). In the approved designs, this is not always visually separated from the Challenge — see below.
- **Challenge**: the problem or constraint being solved — carried either within section "01" (Cardom's "A broken way to buy" is explicitly problem-framed) or section "02" (Wired's "The rules" frames the constraint of adapting a global brand system). The approved designs do not mandate a single dedicated "Challenge" section — content authors should still write the challenge clearly, but it may live in whichever numbered slot the story naturally places it.
- **Solution**: the creative or strategic answer — carried across sections "02" and/or "03", using whichever component fits the story (comparison cards, a Feature Grid of reasons, a Timeline of trust-building steps, or Image + Text illustrating a specific design decision).
- **Process**: how the solution was built — carried in section "04", either as a Statistics proof-of-build or a gallery of framed UI screenshots.
- **Results**: quantified or stated outcomes — can appear in section "04" when the Statistics variant is used (Wired), and always appears as the closing statement in section "06" ("the result").
- **Technologies**: the tools/platform used to build the product — carried in section "05" as a categorized breakdown with tool-name pill badges. This section is present, in the same position, in all three approved case studies.
- **Related Case Studies**: the approved designs show only a previous/next arrow-link pair beside the closing oversized wordmark — there is no related-case-studies card grid or list in any of the three approved case studies. Do not add one without an approved design change; the current pattern is limited to prev/next navigation only.
- **Call to Action**: a single Primary CTA linking to the live client product, placed in section "06". There is no separate "get in touch" CTA Band on case study pages — per `standards/components.md`, CTA Band is used on Homepage and Case Studies Archive only.

Do not write or rewrite marketing copy into this file — content for each case study lives in `/knowledge` and is written when each case study is built.

## Visual Behaviour

- Section backgrounds alternate to create rhythm: white (Hero, sections 01–03) → dark navy (sections 04–05, continuous with no gap between them) → white (section 06) → footer.
- The Hero and every numbered narrative section are left-aligned; sections 04, 05, and 06 are centered for their headings, with 05's multi-column tool breakdown left-aligned within each column.
- Wavy divider graphics mark the white-to-navy and navy-to-white background transitions.
- The oversized closing wordmark is always shown at low opacity, sized to fill the section width, using the same rounded display typeface as the rest of the site — never the client's own brand typography.
- The client's own product branding and colors (e.g. Apeiron's red, Cardom's purple/pink) appear only inside mockup images and framed screenshots — one confirmed inconsistency exists here: Apeiron's Hero title second line ("Ventures") is set in the client's own red brand color, while Cardom's ("AVIS") and Wired's ("GREECE") second lines are set in Pixelocracy's own accent blue. This is a discrepancy between the three approved files, not a confirmed intentional variant — flag it for a human decision rather than silently standardizing on one option.
- Spacing between sections is large and consistent, matching the general spacing behavior described in `knowledge/05_design_system.md`.

## Responsive Behaviour

- All multi-column sections (comparison lists/cards, Feature Grid, Timeline, Dark Showcase's tools/platform columns) collapse to a single stacked column on mobile, in the same top-to-bottom order as desktop.
- The Case Study Hero's two-column split (text/mockup) stacks vertically on mobile, text first.
- The framed UI screenshot gallery (section 04's mockup-gallery variant) scales down and stacks its individual mockups vertically rather than overlapping, matching the general Mobile Behaviour already documented in `knowledge/05_design_system.md`.
- The oversized closing wordmark and prev/next links remain present on mobile, scaled to the narrower viewport.
- Footer stacks in the same order as every other page.

## Case Study Content Rules

This template must be reused for every case study — Apeiron, Cardom, Wired Greece, and any future project — with only the content changing:

- The nine-part narrative arc (Hero → client/context → bet/constraint → solution → build → platform/tools → result) must stay in the same order for every case study.
- The specific component used inside numbered sections 01–03 may be chosen per project (comparison list/cards, Feature Grid, Timeline, Image + Text, or plain Section Header + copy) to fit that project's story — this flexibility is itself part of the approved template, evidenced by the fact that no two of the three approved case studies use the same combination.
- Section 04 must choose one of the two approved Dark Showcase build variants (Statistics or framed screenshot gallery) based on whether the project has strong quantifiable metrics, matching the precedent already set in `knowledge/05_design_system.md`.
- Section 05 (tools/platform breakdown) and section 06 (the result, with CTA, wordmark, and prev/next links) must appear, in that position, for every case study without exception.
- All client names, outcomes, statistics, and tool names must come from `/knowledge` and other approved sources — never invented for a new case study.
- Client brand colors are confined to mockup imagery only, except where a future approved design explicitly extends them further (see the Apeiron/Cardom/Wired Hero-color inconsistency flagged above, which should be resolved before it is copied into a new case study).

## Reusable Patterns

Patterns on this page that are shared globally and must not be rebuilt per case study:

- **Case Study Hero**
- **Section Header** (eyebrow + heading, left-aligned narrative variant)
- **Dark Showcase** and its three variants (Statistics, screenshot gallery, tools/platform breakdown)
- **Feature Grid**, **Timeline**, and **Image + Text** as interchangeable options for a project's "solution" narrative
- **Primary CTA** as the case study's single closing action
- The oversized low-opacity closing wordmark + prev/next link pattern
- **Navigation** and **Footer**

## AI Rules

- Preserve the nine-part narrative order and the six-numbered-section structure exactly as documented above for every case study — do not add, remove, or reorder the constant sections (Hero, 01–06, Footer) without an approved design change.
- Do not invent a "related case studies" grid — the approved designs show prev/next arrow links only.
- Do not add a "get in touch" CTA Band to a case study page — per `standards/components.md`, that component is scoped to Homepage and Case Studies Archive only.
- Choose the component used in numbered sections 01–03, and the Dark Showcase variant used in section 04, based on what best fits the specific project's story, following the precedent set by Apeiron, Cardom, and Wired — do not default to copying one project's exact layout onto a different story without reason.
- Never let a client's brand colors extend beyond mockup imagery into Pixelocracy's own site chrome, nav, or footer — and do not silently resolve the Apeiron Hero-color inconsistency; flag it for a human decision before it is used as precedent in a new case study.
- All case study content (client facts, outcomes, statistics, tool names) must come from `/knowledge` and other approved sources — never invented.
- Reuse Case Study Hero, Section Header, Dark Showcase, Feature Grid, Timeline, Image + Text, and Primary CTA from `standards/components.md` rather than rebuilding equivalent markup for a new case study.
- Follow the Decision Process in `CLAUDE.md` before making any change to this template or to an individual case study: understand the request, check `/knowledge` and `/design`, reuse before creating, and explain assumptions.
