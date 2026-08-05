# Blog Post Structure

Reverse-engineered from `design/Blog - Desktop.png` and `design/Blog - Mobile.png`, cross-referenced against `knowledge/05_design_system.md`, `standards/components.md`, and `CLAUDE.md`. This is the canonical blueprint for every Pixelocracy blog article. Only a single article template exists in the approved designs — there is no blog listing/index/archive page to reverse-engineer, and none is assumed here.

## Section Order

Top to bottom, exactly as shown in the approved design:

1. Navigation
2. Full-bleed banner photo
3. Title block: H1 title, supporting paragraph, share icons (LinkedIn, copy-link)
4. Meta row: category tags + "Published [date] · [x] minute read"
5. Two-column body (desktop only — see Responsive Behaviour): a "CONTENTS" sidebar on the left, article body on the right
6. Divider rule
7. "Previous / Next" article footer nav
8. Footer

## Layout

- **Banner photo**: full-bleed, edge to edge, directly beneath the Navigation.
- **Title block**: H1 and supporting paragraph left-aligned within the standard content column; share icons positioned to the right, roughly level with the paragraph.
- **Meta row**: category tags left-aligned in a horizontal row; the published-date/read-time line right-aligned on the same row.
- **Body**: a sticky left sidebar ("CONTENTS") paired with a wider right-hand content column. The sidebar lists every heading in the article as a flat numbered outline (both heading levels combined into one list), anchor-linked, with the current section highlighted in accent blue. The content column holds repeating heading/paragraph groups, with one inline full-width image appearing after the first group in the approved design.
- **"Previous / Next" nav**: two entries side by side, each with a small thumbnail image, a "Previous"/"Next" label, and a bold title link.
- **Footer**: as documented in `standards/components.md` — unchanged here.

## Components Used

Using the canonical names defined in `standards/components.md`, with explicit notes where no existing canonical component matches:

- **Navigation**
- A full-bleed banner photo, a title block (H1 + paragraph + share icons), and a meta row (tags + date/read-time) — this combined intro is visually related to **Hero** but, per `standards/components.md`, is explicitly **not** classified as a Hero variant. It is not yet documented as its own named component; treat it as specific to the Blog template rather than reusing or renaming Hero.
- **Pill Tag** (category tags — `standards/components.md` already lists the Blog article as a confirmed usage of this component)
- A "CONTENTS" sidebar (numbered, anchor-linked outline of the article's headings, current section highlighted) — not yet documented as its own named component.
- Repeating heading/paragraph body sections — closest to **Content Block**, with the one section that includes an inline photo matching the "text-above-image" pairing already documented as a variant of **Image + Text**. Both are reused here in combination rather than as a single new component.
- A "Previous / Next" article link pair (thumbnail + label + title) — the same category of gap already flagged in `standards/case-study.md` for the case study's previous/next case-study links. Both are a simple prev/next content-navigation pattern; they are not yet confirmed to be the same shared component, but they are clearly the same recurring pattern appearing on two different templates and should be reconciled the next time `standards/components.md` is updated, not assumed identical in the meantime.
- **Footer**

## Content Structure

Describes what each section holds, not the wording itself:

- **Banner photo**: one photograph relevant to the article's subject.
- **Title block**: one H1 title, one supporting summary paragraph, two share actions (LinkedIn, copy link).
- **Meta row**: one or more category tags, one publish date, one read-time estimate.
- **Contents sidebar**: a flattened, numbered, anchor-linked list of every heading in the article body (desktop only).
- **Body**: a sequence of heading/paragraph groups; the exact number of groups and whether any include an inline image is decided per article, not fixed by the template — the approved design shows three such groups, one with an inline image, as one valid instance of this pattern, not a mandated count.
- **"Previous / Next" nav**: one previous-article reference and one next-article reference, each with a thumbnail and a title.
- **Footer**: company tagline, site link list, certification/trust marks, social link, copyright line.

Do not write copy into this file — content for each article lives in `/knowledge` and is written when the article is authored.

One observation worth noting, not a rule: the category tags shown in the approved design ("Data, AI & Automation", "Engineering & Security", "Digital Products & UI/UX") match service pillar names from `knowledge/02_service_pillars.md` — categorization should draw from that approved pillar list rather than a separate, invented taxonomy.

## Visual Behaviour

- The page background is white throughout the article; only the Footer uses the light lavender tint, consistent with every other page.
- The banner photo is full-bleed; every other element is constrained to the standard content column.
- Typography hierarchy, largest to smallest: H1 title → H2 section headings → a bold sub-heading line within each section → body paragraphs.
- The Contents sidebar's active-item highlight and the category Pill Tags are the only accent-blue elements outside of links — body copy stays in the neutral gray-black established in `knowledge/05_design_system.md`.
- Spacing between the title block, meta row, and body is generous and consistent with the general spacing behavior documented in `knowledge/05_design_system.md`.
- A divider rule separates the end of the article body from the "Previous / Next" nav.

## Responsive Behaviour

- The two-column body layout (Contents sidebar + article column) is **desktop only**. In the approved mobile design, the Contents sidebar is not present at all — it is dropped entirely, not converted into an accordion, a collapsed menu, or an inline list. This is an explicit removal, not a simplification to reproduce differently.
- The share icons reposition from beside the supporting paragraph (desktop, right-aligned) to directly above the H1 title (mobile) — a reflow, not a simple stack-in-place.
- The article body becomes a single full-width column on mobile once the sidebar is removed.
- The "Previous / Next" nav stacks vertically on mobile instead of sitting side by side.
- Footer stacks in the same order as every other page.

## Related Content Rules

The only content-navigation mechanism present in the approved design is the "Previous / Next" article link pair at the end of the article body. There is no related-articles grid or list, no tag-based recommendation module, no comment section, no author bio block, and no newsletter signup anywhere in the approved design — none of these should be added. There is also no blog listing/index/archive page in the approved designs; how a reader arrives at an article beyond the "Previous / Next" links and the top navigation's "Insights" link is not yet defined and should not be invented.

## AI Rules

- Preserve the section order exactly as listed above — do not add, remove, or reorder sections without an approved design change.
- Do not invent a related-articles grid, comments, author bio, social proof, or newsletter signup — none exists in the approved design.
- Do not invent a blog listing/archive page layout — none exists in the approved designs; if one is needed, stop and ask rather than designing it from assumption.
- Keep the Contents sidebar desktop-only; do not add a mobile equivalent (accordion, inline outline, etc.) without an approved design change.
- Use Pill Tag for category tags, and draw category names from the approved service pillar list in `knowledge/02_service_pillars.md` rather than inventing a new taxonomy.
- Do not rename the Blog's title/banner intro block as Hero — `standards/components.md` explicitly excludes it from that component.
- Follow the Decision Process in `CLAUDE.md` before making any change to this template or to an individual article: understand the request, check `/knowledge` and `/design`, reuse before creating, and explain assumptions.
