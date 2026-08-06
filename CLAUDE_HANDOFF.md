# Pixelocracy Website — Claude Development Handoff

## Purpose

This repository is the implementation of the new Pixelocracy website.

The supplied files define the approved visual direction, page structure, content, and real Pixelocracy assets. Continue development from the existing codebase; do not redesign the website from scratch.

The goal is to reproduce the supplied designs faithfully, turn them into responsive reusable components, populate them with the approved content, and use the real local assets instead of placeholders or legacy WordPress URLs.

## Source-of-truth order

When sources overlap, use this priority:

1. **The latest named PNG mockups** — source of truth for layout, hierarchy, spacing, color treatment, component appearance, responsive behavior, and the visible visual direction.
2. **`01-Master-Plan-Content.docx`** — master positioning, messaging house, service pillars, proof points, differentiators, mission/vision, pains, and broader content direction.
3. **`02-Pixelocracy_Service_Pillars_Website_Content-1-.docx`** — page-ready long-form copy for all five service pillar pages.
4. **`Pixelocracy-Website-Assets/`** — real production assets: Pixelocracy logos, client logos, fonts, team portraits, case-study imagery, about imagery, technology logos, and reusable UI graphics.
5. The existing site at `https://dev.pixelenv.com/pixeldev/` may be used only as a reference/fallback for existing Pixelocracy assets or factual legacy material. It is **not** the visual source of truth for the new build.

If there is an actual content conflict between the two Word documents, prefer the more page-specific/final copy in `02-Pixelocracy_Service_Pillars_Website_Content-1-.docx`, unless a newer PNG explicitly shows revised final wording.

Do not silently invent company claims, statistics, client work, addresses, certifications, team information, or case-study facts.

## Reference file map

### Content documents

- `01-Master-Plan-Content.docx`
  - Master website messaging/content plan.
  - Defines the five service pillars:
    1. Strategy & Advisory
    2. Data, AI & Automation
    3. Engineering & Security
    4. Digital Products & UI/UX
    5. Capability Building & Operations
  - Contains why-us messaging, value propositions, client pains, proof points, key differentiators, mission/vision, and service inclusions.

- `02-Pixelocracy_Service_Pillars_Website_Content-1-.docx`
  - Long-form website copy for all five pillar pages.
  - Each pillar includes Hero, Challenge, How We Help, What's Included, Why Pixelocracy, and CTA content.
  - Use this to populate the shared pillar-page template rather than writing five unrelated page structures.

### Approved page mockups

- `03-Contact-Desktop.png` — Contact page, desktop.
- `04-UPDATED-Pillar-Page-Template-Mobile.png` — latest pillar-page template, mobile.
- `05-01_homepage-Mobile.png` — Homepage, mobile.
- `06-Contact-Mobile.png` — Contact page, mobile.
- `07-Blog-Mobile.png` — Blog/article detail template, mobile.
- `08-About-Mobile.png` — About page, mobile.
- `09-UPDATED-Pillar-Page-Template-Desktop.png` — latest pillar-page template, desktop.
- `10-UPDATED-Wired-Case-Study-Mobile.png` — WIRED Greece case study, mobile.
- `11-UPDATED-Wired-Case-Study-Mobile-1-.png` — duplicate/alternate export of the same latest WIRED mobile design. Do not implement it as a second page.
- `12-Apeiron-Case-Study-Mobile.png` — Apeiron Ventures case study, mobile.
- `13-Case-Studies-Archive-Mobile.png` — Work / Case Studies archive, mobile.
- `14-Cardom-Case-Study-Mobile.png` — Cardom AVIS case study, mobile.
- `15-01_homepage-Desktop.png` — Homepage, desktop.
- `16-Blog-Desktop.png` — Blog/article detail template, desktop.

The word **UPDATED** in filenames matters: those versions supersede older pillar/WIRED layouts.

For pages where only a mobile mockup exists, derive desktop behavior from the shared design system already established by the Homepage, Contact, Pillar and Blog desktop mockups. Do not simply scale the mobile page up.

## Asset pack

Unpack `Pixelocracy-Website-Assets(1).zip` into the project if it has not already been unpacked. Keep the resulting `Pixelocracy-Website-Assets/` directory as the source asset library, or move/copy its contents into the project's normal public/assets structure if that better matches the existing framework.

Important asset groups:

- `brand/` — Pixelocracy logos in SVG and PNG variants. Prefer SVG where appropriate.
- `client-logos/` — real client/partner logos.
- `tools/` — technology/tool logos.
- `team/` — team portraits used by the About page.
- `case-studies/` — real case-study cover/hero/product imagery.
- `about/` — About/service imagery.
- `ui-graphics/` — reusable decorative SVGs and pillar illustrations.
- `fonts/` — supplied Pixelocracy typography assets, including Mabry Pro and Sharp Grotesk families.

Use local files from this pack. Do not hotlink assets from the old WordPress website.

Do not crop a screenshot to manufacture an image/logo if the real asset exists in the asset pack.

## Design system visible in the mockups

Preserve the visual language already established:

- Pixelocracy blue as the primary accent.
- White and very pale blue/lavender background fields.
- Dark navy sections for high-contrast content blocks.
- Large, bold Sharp Grotesk-style display headings.
- Mabry-style body copy.
- Thin blue outlines on cards and buttons.
- Wave-shaped section transitions and footer decoration.
- Compact top navigation on desktop and simplified mobile header/menu.
- Strong editorial whitespace; avoid filling empty areas just because space exists.
- Reusable cards, CTA blocks, tags/pills, metric panels, accordion items, case-study modules, and footer/header components.

Do not replace this with a generic SaaS template aesthetic.

## Page implementation guidance

### Homepage

Match both `05-01_homepage-Mobile.png` and `15-01_homepage-Desktop.png`.

Key sections include:

- Hero and primary/secondary CTA.
- Trusted-client logo strip.
- Five service pillars.
- Tools/technology section.
- Selected work/case-study cards.
- Large Get in touch CTA.
- Shared footer.

On desktop the five pillars are presented as a structured horizontal/row-based list inside one large bordered block; on mobile they become stacked cards. Preserve that responsive change rather than forcing one layout everywhere.

### Service pillar pages

Use `04-UPDATED-Pillar-Page-Template-Mobile.png` and `09-UPDATED-Pillar-Page-Template-Desktop.png` as the shared design template.

The supplied mockup demonstrates **Strategy & Advisory**, but the implementation must support all five pillars using shared components/data and the approved copy from the content documents.

Expected content pattern includes:

- Pillar intro/hero.
- Short metadata/context column on desktop.
- Hero imagery.
- Why us / value propositions.
- Typical situations/client pains, presented with accordion behavior.
- Selected experience/proof points.
- What's included section.
- Differentiator statement.
- CTA and links to the other pillars.

Do not hard-code the Strategy page five times. Use a reusable page template fed by pillar-specific content/data.

### Contact

Match `03-Contact-Desktop.png` and `06-Contact-Mobile.png`.

The form, What happens next panel, Find us cards, header, and footer must respond as shown. Preserve field labels/required-state treatment and the visual placement of the CAPTCHA area.

If the real form endpoint, CAPTCHA keys, or email delivery integration are not present in the codebase/environment, build the UI cleanly but do not invent production secrets or fake a successful submission. Leave the integration boundary explicit.

### About

Use `08-About-Mobile.png` as the approved mobile reference and derive desktop using the shared site grid/design language.

Use actual imagery and team portraits from the asset pack. Preserve the structure around company introduction, trusted organizations, the five disciplines, proof/results, how we work, leadership/team, joining CTA, and footer.

Do not fabricate additional team members.

### Work / Case Studies archive

Use `13-Case-Studies-Archive-Mobile.png`.

Implement the case-study cards as reusable data-driven components. The archive should link to the relevant individual case-study pages rather than being a static image composition.

### Individual case studies

Current visual references:

- WIRED Greece — `10-UPDATED-Wired-Case-Study-Mobile.png`
- Apeiron Ventures — `12-Apeiron-Case-Study-Mobile.png`
- Cardom AVIS — `14-Cardom-Case-Study-Mobile.png`

These share a recognizable editorial case-study system but have content-specific sections. Reuse primitives/components where possible without forcing all case studies into an identical rigid schema.

Use the actual `case-studies/` imagery from the asset pack wherever available.

### Blog / Insights article

Use `07-Blog-Mobile.png` and `16-Blog-Desktop.png` as the article template.

The **Lorem ipsum is placeholder content**, not approved Pixelocracy editorial copy. Implement the layout/template, content hierarchy, social/share area, tags, metadata, desktop contents navigation, article media, previous/next navigation, and footer. Do not publish the lorem ipsum as real final content.

The desktop article has a contents/sidebar pattern that collapses appropriately on mobile.

## Responsive behavior

Treat the desktop and mobile PNGs as two endpoints of one responsive system, not as separate websites.

- Use fluid/responsive CSS between the supplied breakpoints.
- Preserve content order and hierarchy.
- Stack multi-column layouts intentionally on mobile.
- Maintain readable widths for long-form copy.
- Keep buttons/touch targets usable.
- Avoid horizontal overflow.
- Images should use sensible responsive sizing and `object-fit` behavior based on the design.
- Navigation must become the compact mobile treatment shown in the mockups.

## Engineering expectations

- First inspect the existing project structure, routes, dependencies, styles, and components before changing code.
- Continue the existing stack; do not replace frameworks or rebuild the repository unless genuinely necessary.
- Reuse existing components that already match the supplied designs.
- Create shared primitives for header, footer, buttons, section labels, cards, accordions, CTA blocks, tags, waves, and case-study modules where appropriate.
- Keep content/data separate from repeated presentation code where practical, especially the five pillar pages and case-study cards.
- Use semantic HTML and maintain basic accessibility: heading order, alt text, labels, keyboard interaction, focus states, and appropriate contrast.
- Use optimized local images and avoid unnecessarily loading huge originals when the framework has an image optimization path.
- Preserve SEO-friendly page titles, descriptions, headings, article metadata, and indexable text.
- Do not remove working functionality merely to match a screenshot.
- Do not introduce speculative features that are not represented in the designs/content.

## Visual verification

After implementing each page:

1. Run the project locally.
2. Check the page at representative desktop and mobile viewport widths matching the reference images as closely as practical.
3. Compare against the relevant PNG source of truth.
4. Fix major differences in typography, widths, spacing, alignment, colors, borders, image crops, responsive stacking, and section proportions.
5. Confirm navigation and interactive components still work.

Pixel-perfect fidelity is more important than adding unrequested embellishments.

## What to do next

1. Inspect the existing repository and determine what is already implemented.
2. Locate/unpack the Pixelocracy asset pack and connect real local assets to the existing UI.
3. Read both content documents before changing page copy.
4. Audit the current implementation against the latest mockups listed above.
5. Make a short implementation checklist of missing/mismatched pieces.
6. Continue development from the current state, prioritizing shared site shell/design system first, then the Homepage, pillar template/pages, Work/case studies, About, Contact, and Blog/Insights templates.
7. Verify desktop + mobile behavior as each part is completed.

Do not stop after producing an audit unless a genuine blocker requires user input. Once the current state is understood, proceed with the implementation and report completed changes, remaining work, and any real blockers.
