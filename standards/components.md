# Component Library

Reverse-engineered exclusively from `/design`, `/knowledge`, `CLAUDE.md`, and `knowledge/05_design_system.md`. This is the canonical component library for every AI agent working on the Pixelocracy website. Component names follow the Naming Convention already established in `knowledge/05_design_system.md` — where a requested name in this brief differs from the canonical name, the canonical name is used as the heading and the requested name is noted as a synonym, per the existing rule to never invent alternative names for the same component.

---

# Navigation

## Purpose

The persistent top-of-page wayfinding bar that lets a visitor move between the main areas of the site and reach Contact.

## Used In

Every page in the approved designs: Homepage, About, Contact, Case Studies Archive, Blog article, Pillar Page Template, and all three case studies (Apeiron, Cardom, Wired).

## Structure

Logo (wordmark) on the far left. Horizontal text links center-left: Home, Services (with a dropdown caret), Work, About, Insights. A visually distinct "Contact" link on the far right.

## Layout

Full-width bar, fixed/sticky to the top of the viewport. Logo and links are vertically centered within the bar. Generous horizontal padding to the viewport edge.

## Variants

- **Desktop** — full horizontal link row as described above.
- **Mobile** — links collapse behind a hamburger icon; logo remains visible on the left.

No other variants exist in the approved designs.

## Content Rules

Holds only the site's primary navigation labels (Home, Services, Work, About, Insights, Contact) and the "Services" dropdown. It does not carry marketing copy.

## Design Rules

Must remain identical across every page. The link order, the "Contact" link's distinct treatment, and the Services dropdown must never change per-page.

## AI Rules

Never rebuild this per page. Always reuse the single Navigation component. Do not add, remove, or reorder links without an approved design change.

---

# Hero

## Purpose

Introduces a page: states its primary message and, where relevant, offers a first action.

## Used In

Homepage, About, Contact, Pillar Page Template (where it also includes a right-aligned meta sidebar — see Meta Sidebar).

## Structure

An optional small eyebrow label, a large headline, a short supporting paragraph, and (on most pages) one or two CTA buttons.

## Layout

Centered text on Homepage and Contact. About's Hero is also centered but is followed directly by a two-image banner rather than CTAs. Pillar Page's Hero is left-aligned with a right-aligned meta sidebar rather than centered CTAs.

## Variants

- **With two CTAs** (Homepage: Primary + Secondary CTA).
- **With no CTA, followed by imagery** (About).
- **With a meta sidebar instead of CTAs** (Pillar Page).
- **With a form as the immediate next element** (Contact — the Hero itself has no CTA; the form follows directly below).

The Blog article's top intro block (banner photo + title + share icons + tags/metadata) is visually related but is documented separately under Blog Patterns in `knowledge/05_design_system.md` — it is not classified as a Hero variant. The case-study-specific hero is a distinct, separately documented component: see Case Study Hero.

## Content Rules

One primary headline; one short supporting statement; zero, one, or two calls to action depending on the page's purpose. Do not write the actual headline/body copy here — content is authored per page in `/knowledge`.

## Design Rules

Headline is always the largest text on the page. The eyebrow label, when present, is small, bold, uppercase, and accent blue.

## AI Rules

Reuse this component for any new top-level page. Do not invent a new hero layout — choose among the approved variants above, or stop and ask if none fit.

---

# Case Study Hero

## Purpose

Introduces an individual case study: names the client/product and shows the work before any narrative detail.

## Used In

Apeiron Ventures, Cardom, and Wired Greece (both the current "UPDATED" version and the superseded draft) case studies.

## Structure

A small case-study eyebrow tag, a two-line title (client/brand name bold, product name below in blue), a short description, a single Secondary CTA ("Check it out"), and a device/product mockup positioned to the right.

## Layout

Two-column split: text block left, mockup image right. Left-aligned text.

## Variants

No structural variant exists — all three case studies use the same arrangement. Only the mockup image and copy change per case study.

## Content Rules

Client/brand name, product name, one short descriptive sentence, one CTA. Do not write the descriptive copy here.

## Design Rules

The client's own product branding and colors appear only inside the mockup image — they must never bleed into the surrounding text color, the CTA, or the page chrome.

## AI Rules

Reuse this exact structure for every new case study. Do not substitute the generic Hero component for a case study — always use Case Study Hero.

---

# Section Header

## Purpose

Introduces a section partway down a page.

## Used In

Homepage ("What we do", "Tools we build with", "Some of what we've shipped"), About, Contact ("Find us"), Case Studies Archive, Pillar Page Template (multiple sections), and the numbered narrative sections of every case study (eyebrow + heading variant).

## Structure

An eyebrow label, a heading, and a supporting paragraph.

## Layout

Center-aligned when introducing a page or a major section (e.g. "What We've Built", "Find us"). Left-aligned when introducing a narrower content block within a case study or Pillar Page section.

## Variants

- **Eyebrow + heading + paragraph** (the default, e.g. Pillar Page, About).
- **Heading + paragraph, no eyebrow** — used specifically on the Homepage's mid-page sections ("What we do", "Tools we build with", "Some of what we've shipped"). This is an approved exception, not an omission to correct.

## Content Rules

One eyebrow label (when used), one heading, one supporting sentence or short paragraph. No body copy beyond that.

## Design Rules

The eyebrow, when present, is always small, bold/uppercase, and accent blue. Do not add an eyebrow to a Homepage mid-page Section Header — that page's approved design omits it.

## AI Rules

Always reuse Section Header to introduce a section. Match the eyebrow/no-eyebrow variant to the page it appears on, following the pattern already established on that page type.

---

# CTA Band

## Purpose

A page-closing, full-width prompt to get in touch.

## Used In

Homepage and Case Studies Archive only. About's closing section ("We're always looking for people who think in systems") is a related but visually distinct recruiting CTA — it uses a light lavender background and an outline Secondary CTA, not this component. Contact and the case study pages do not use a CTA Band.

## Structure

A white heading, white supporting copy (one to two lines), and a single Primary CTA.

## Layout

Full-bleed blue-to-navy gradient block. All content centered.

## Variants

No variant exists — Homepage and Case Studies Archive use an identical CTA Band.

## Content Rules

One heading, one short supporting statement, one Primary CTA. Do not write the heading/copy here.

## Design Rules

Background is always the blue-to-navy gradient; text is always white. Must not be confused with, or replaced by, About's recruiting CTA variant.

## AI Rules

Reuse this exact component wherever a page needs a closing "get in touch" prompt. Do not create a new CTA band style — if an existing page's closing CTA doesn't fit this pattern, flag it rather than inventing a variant.

---

# Primary CTA

*(Requested as "Primary Button" — the canonical name established in `knowledge/05_design_system.md` is Primary CTA.)*

## Purpose

The main conversion action on a page or section.

## Used In

Homepage ("Book a discovery call", "Talk to our team"), Contact ("Send Message" / "Submit Message"), Pillar Page ("Book a discovery call"), Case Studies Archive ("Talk to our team"), and case study result sections (e.g. Wired's "Live at wired.gr"-style closing action).

## Structure

A single line of button text, optionally with a small leading/trailing icon (e.g. an external-link icon in a case study's closing CTA).

## Layout

Rectangular, slightly rounded corners, sized to its text with standard button padding.

## Variants

- **Standard** — solid accent-blue fill, white text.
- **With left accent tab** — the Homepage hero's Primary CTA carries a small solid-blue vertical tab attached to its left edge. This is only observed on the Homepage hero; it is not confirmed elsewhere.

## Content Rules

Short, action-oriented label only (2–4 words). No supporting copy inside the button.

## Design Rules

Always solid accent-blue fill with white text. Never combine with the outline treatment used for Secondary CTA.

## AI Rules

Use Primary CTA for the single most important action in a section. Do not introduce a third button style — every button on the site must be either Primary CTA or Secondary CTA.

---

# Secondary CTA

*(Requested as "Secondary Button" — the canonical name established in `knowledge/05_design_system.md` is Secondary CTA.)*

## Purpose

A lower-emphasis action alongside or instead of a Primary CTA.

## Used In

Homepage ("See our work", "View all Case Studies"), Case Study Hero on all three case studies ("Check it out"), About ("See open positions").

## Structure

A single line of button text.

## Layout

Rectangular, slightly rounded corners, matching Primary CTA's sizing and padding.

## Variants

No variant exists — a single outline treatment is used everywhere it appears.

## Content Rules

Short, action-oriented label only. No supporting copy inside the button.

## Design Rules

Always transparent/white fill, blue border, blue text. Never filled solid — that treatment belongs to Primary CTA only.

## AI Rules

Use Secondary CTA for a supporting action next to a Primary CTA, or as a standalone lower-emphasis action. Do not style it as a filled button.

---

# Pill Tag

## Purpose

A compact control for tab-style navigation between related items, or for labeling a category.

## Used In

Pillar Page Template ("other pillars" navigation at the bottom of the page) and the Blog article template (category tags, e.g. "Data, AI & Automation", "Engineering & Security", "Digital Products & UI/UX").

## Structure

A short text label inside a fully-rounded (pill-shaped) outline.

## Layout

Arranged in a horizontal row with even spacing between pills.

## Variants

- **Active/selected** — solid accent-blue fill, white text (the current pillar in Pillar Page's bottom navigation).
- **Inactive** — outline only, blue text, transparent fill (the other pillars; all Blog category tags).

## Content Rules

One short label per pill (a pillar name or a content category). No descriptions inside a pill.

## Design Rules

Always fully rounded. Only the active/inactive fill state changes — never introduce a third pill state without an approved design change.

## AI Rules

Reuse Pill Tag for any future tab-style selector or category label. Do not substitute a square-cornered tag or a different shape.

---

# Feature Grid

## Purpose

Presents 3–4 short-form value or reasoning points as a set, with one item visually emphasized.

## Used In

About ("How we work" — 4 cards), Pillar Page Template ("Why us" — 3 cards), Apeiron Ventures case study ("Every brief starts with exploration" — 3 cards, all-filled variant).

## Structure

A grid of numbered cards, each with a heading and a short supporting sentence.

## Layout

3-column (Pillar Page, Apeiron) or 2×2 (About) grid, equal-width cards.

## Variants

- **Solid-first / outline-rest** — the first card (and in About's 4-card grid, a second non-adjacent card) is solid blue-filled; the remaining cards are outlined/light-tint. This is the default variant (About, Pillar Page).
- **All-filled** — every card is solid blue-filled, no outline cards. Used once, in Apeiron's "Every brief starts with exploration".

## Content Rules

One number, one short heading, one short supporting sentence per card. No long-form copy.

## Design Rules

Always numbered. The solid/outline emphasis pattern (or the all-filled variant) must be one of the two approved variants above — do not invent a third emphasis pattern.

## AI Rules

Reuse Feature Grid for any future 3–4 item reasoning or value-proposition set. Choose the solid-first/outline-rest variant by default; use all-filled only if the content calls for equal emphasis on every item, matching Apeiron's precedent.

---

# Service Card

## Purpose / Note

**This is not a separate component in the approved designs.** The individual service-pillar entries on the Homepage ("What we do") are rows inside a single bordered Process Section container — they are not standalone cards with their own borders, shadows, or backgrounds. There is no discrete "Service Card" to document independently.

## AI Rules

Do not create a "Service Card" component. Use Process Section (below) for any list of numbered service/offering entries. If a future request specifically needs a card-bounded version of a service entry, stop and ask rather than inventing one.

---

# Process Section

## Purpose

Enumerates a set of services or offerings as an ordered list within a single container.

## Used In

Homepage ("What we do").

## Structure

A single bordered rectangular container. Inside it, one row per item, each combining: an order number, an icon illustration, a heading, a short description, and a "Learn more →" link. Rows are separated by thin horizontal rules.

## Layout

Full container width; each row stacks vertically with its number on the left and its icon, heading, description, and link following horizontally.

## Variants

No variant exists — a single five-row instance is present in the approved designs (matching the five pillars in `knowledge/02_service_pillars.md`).

## Content Rules

One entry per service/offering; each entry has a number, an icon, a heading, one short description sentence, and a link. Entry count and order must match the approved pillar list.

## Design Rules

Always presented as rows inside one bordered container — never split into separate free-standing cards (see Service Card note above).

## AI Rules

Reuse Process Section for any future ordered list of services or offerings. Keep the row-in-a-single-container structure; do not convert it into a card grid.

---

# Case Study Card

*(Requested as "Case Study Card" — distinct from Case Study Hero, which is the hero of an individual case study page. This component is the preview/teaser card used to link to a case study from another page.)*

## Purpose

Previews a case study as a link from another page.

## Used In

Case Studies Archive (numbered variant) and Homepage's "Some of what we've shipped" (unnumbered variant).

## Structure

An image block (client wordmark/logo on a photo or color background) paired with a text block (heading, short description, sometimes ending in a quantified outcome), ending in a "Learn More" link.

## Layout

- **Case Studies Archive variant**: image and text side-by-side on desktop, stacked (image on top) on mobile. Numbered. Light lavender card background.
- **Homepage variant**: image on top, text below, arranged in a 3-column row on desktop and a single-card carousel with dot pagination on mobile. No number.

## Variants

Two approved variants, as described above: numbered/side-by-side (Case Studies Archive) and unnumbered/stacked-by-default (Homepage). Both belong to the same component family — do not treat them as unrelated components.

## Content Rules

One client/brand mark, one project name/heading, one short description (optionally ending in a quantified proof point), one link. Do not write the description copy here.

## Design Rules

Client brand colors are confined to the image block only — the card's text, background tint, and link color always follow Pixelocracy's own palette, never the client's.

## AI Rules

Reuse Case Study Card wherever a case study needs to be previewed/linked from a non-case-study page. Use the numbered variant for a dedicated listing (like Case Studies Archive) and the unnumbered variant for a teaser row (like Homepage).

---

# Statistics

## Purpose

Presents quantified proof points.

## Used In

About ("Results, not claims" — 9M / €400M / 95% / 60% / 0) and the Wired Greece case study's stat variant of Dark Showcase (70% / 2wks / 7 / 15+).

## Structure

A large bold number paired with a short label underneath.

## Layout

Arranged in a row or grid, evenly spaced, always on a dark navy background in the approved designs.

## Variants

No structural variant — every observed instance is a bold number over a short label on navy. Only the count of stats shown differs (5 on About, 4 on Wired).

## Content Rules

One number/value and one short label per stat. No supporting paragraph per stat.

## Design Rules

Always shown on a dark navy background in the current designs. Numbers are always the largest, boldest element in the stat.

## AI Rules

Reuse Statistics for any future proof-point display. Keep it on a dark background to match the two existing precedents unless a new approved design specifies otherwise.

---

# Logo Strip

*(Requested as "Client Logo Strip" — the canonical name established in `knowledge/05_design_system.md` covers both client and tool/technology logo rows under a single component.)*

## Purpose

Establishes trust (client/partner logos) or signals technical credibility (tool/technology logos).

## Used In

Homepage (used twice: client trust logos under "Trusted by Greece's largest organisations", and tool/technology logos under "Tools we build with"), About (client trust logos), Case Studies Archive (client trust logos).

## Structure

A short caption line above a single horizontal row of grayscale logos.

## Layout

Centered caption, evenly spaced logo row beneath it.

## Variants

- **Client/partner logos** (Homepage, About, Case Studies Archive).
- **Tool/technology logos** (Homepage's "Tools we build with").

Both variants share the same caption-above-row structure.

## Content Rules

One caption sentence and a set of logos. No descriptive text per logo.

## Design Rules

Logos are always grayscale, never in their original brand colors, and never accompanied by a name label.

## AI Rules

Reuse Logo Strip for any future trust bar or tool-credibility row. Keep logos grayscale and unlabeled.

---

# Content Block

## Purpose

Presents a plain block of narrative text with no card, grid, or accompanying image.

## Used In

About ("The way we show up" intro) and the narrative paragraphs inside case study sections (e.g. Wired's "Joining a legacy").

## Structure

A heading followed by one or more paragraphs.

## Layout

Left-aligned, single column, body-copy width.

## Variants

No variant exists — every instance is a heading plus paragraph(s).

## Content Rules

One heading, one or more short paragraphs. No embedded image, card, or grid — if an image is needed, use Image + Text instead.

## Design Rules

Never add a card border, background tint, or grid structure to this component — that would make it a different component.

## AI Rules

Use Content Block for plain narrative text. If the text needs an accompanying image, use Image + Text instead of adding one here.

---

# Image + Text

## Purpose

Pairs a paragraph of text with one or more supporting images to illustrate a specific claim, at body-content scale (not page-intro scale).

## Used In

Wired Greece case study ("Greek has no Wired typeface" — text beside two headline examples) and Cardom ("AVIS puts its name on a new idea" — text followed by device mockups).

## Structure

A block of text and one or more accompanying images.

## Layout

Text and image(s) side-by-side (Wired) or text above image(s) (Cardom) depending on the specific claim being illustrated.

## Variants

- **Side-by-side** (Wired).
- **Text-above-image** (Cardom).

Both are approved; choice depends on the shape of the supporting image(s).

## Content Rules

One short block of explanatory text and one or more supporting images. Do not write the explanatory copy here.

## Design Rules

Distinct from Hero and Case Study Hero, which operate at page-intro scale — this component is always used mid-page to illustrate a specific point, never as a page opener.

## AI Rules

Reuse Image + Text whenever a claim needs a supporting image mid-page. Do not use Hero or Case Study Hero for this purpose.

---

# Timeline

## Purpose

Narrates a sequential process as a connected series of stages.

## Used In

Cardom case study ("Every screen answers a doubt" — Search → Verify → Purchase → Finance → Deliver).

## Structure

A horizontal sequence of numbered circular nodes connected by a line, each node labelled with a stage name, followed by supporting cards elaborating on selected stages.

## Layout

Nodes evenly spaced in a single horizontal row with a connecting line running through them; supporting cards sit in a row beneath.

## Variants

No variant exists — a single five-node instance is present in the approved designs.

## Content Rules

One short label per node; supporting card content is a heading plus a short description.

## Design Rules

Nodes are always numbered and connected by a line — do not present a step sequence without the connecting line, or that becomes a different pattern (e.g. Process Section).

## AI Rules

Reuse Timeline for any future connected step-by-step process narration. Use Process Section instead if the content is a simple enumerated list without a connecting flow.

---

# Dark Showcase

## Purpose

Presents proof or build detail on a full-bleed dark background, giving it visual weight distinct from the surrounding white/lavender sections.

## Used In

All three case studies (Apeiron, Cardom, Wired), for their "build" sections and their tools/platform breakdown sections.

## Structure

A full-bleed navy container holding one of three approved content variants (see Variants).

## Layout

Full viewport width; content inside aligned to the standard content column, generous vertical padding.

## Variants

- **Statistics grid** — used in Wired's current "build" section.
- **Framed UI screenshot gallery** ("Component by component") — used in Apeiron, Cardom, and Wired's earlier draft.
- **Tools/platform breakdown** — category heading + bullet list + rounded tool-name pill badges, used in every case study's platform section.

## Content Rules

Content must be one of the three approved variants above. Do not invent a fourth variant.

## Design Rules

Always on a navy background. Client brand colors may appear only within framed mockups inside the screenshot-gallery variant — never as the section's own background or text color.

## AI Rules

Reuse Dark Showcase for any future case study's build or platform section, selecting the variant that fits the available proof (stats vs. screenshots vs. tool list). Do not create a new dark-section layout.

---

# Quote Card

## Purpose

Surfaces a client objection or frequently-heard concern, then answers it.

## Used In

Pillar Page Template ("We've heard this before").

## Structure

A card with a large quotation-mark glyph and the objection text, styled as an accordion; the expanded state reveals a rebuttal answer marked with a checkmark icon.

## Layout

2-column grid of cards; one card shown expanded in the approved design.

## Variants

- **Collapsed** — quotation mark + objection text only.
- **Expanded** — adds the checkmark-marked rebuttal answer.

## Content Rules

One objection quote and one rebuttal answer per card. No additional supporting copy.

## Design Rules

The quotation-mark glyph and checkmark icon are required parts of this component — do not omit them.

## AI Rules

Reuse Quote Card for any future objection-handling section. Keep the accordion collapsed/expanded behavior and the checkmark icon on the answer.

---

# Team Member Card

## Purpose

Introduces an individual team member.

## Used In

About ("The people behind the work").

## Structure

A black-and-white portrait photo, a bold name, and a gray job title beneath it.

## Layout

Arranged in a grid, evenly spaced.

## Variants

No variant exists — every instance in the approved design follows the same photo/name/title structure.

## Content Rules

One photo, one name, one job title per person. No bio text.

## Design Rules

Portrait photos are always black-and-white, matching the treatment used throughout About.

## AI Rules

Reuse Team Member Card for any future team listing. Keep portraits black-and-white and limit each card to name and title only.

---

# Meta Sidebar

## Purpose

Gives at-a-glance context for a Pillar Page alongside its Hero.

## Used In

Pillar Page Template (all five pillars).

## Structure

A right-aligned key-value list: Pillar / Works Best With / Typical Engagement.

## Layout

Positioned to the right of the Hero's headline and description, top-aligned with it.

## Variants

No variant exists — the same three key-value rows appear on every pillar page; only the values differ.

## Content Rules

Exactly three key-value pairs: Pillar, Works Best With, Typical Engagement. Do not add a fourth row without an approved design change.

## Design Rules

Labels are small and uppercase; values are plain text directly beneath each label.

## AI Rules

Reuse Meta Sidebar on every Pillar Page. Keep it to the same three fields for every pillar.

---

# Contact Form

## Purpose

Captures an inbound inquiry.

## Used In

Contact page only.

## Structure

Fields for Full Name, Your Email, Phone Number, Subject, and Your Message, a reCAPTCHA control, and a Primary CTA ("Send Message" / "Submit Message"). An adjacent panel titled "What happens next" lists the follow-up steps as a bulleted list, followed by a short note about who Pixelocracy works with.

## Layout

Two-column split on desktop: form on the left, "What happens next" panel on the right, both inside a single bordered container. Stacked (form above panel) on mobile.

## Variants

No variant exists — one form instance is present in the approved designs.

## Content Rules

Exactly the five fields listed above, plus the "What happens next" step list. Do not add or remove fields without an approved design change.

## Design Rules

Fields are shown with placeholder text only, with no separate persistent visible label above each field — this is a factual observation from the approved design, flagged in `knowledge/05_design_system.md` for accessibility review, not an instruction to change it.

## AI Rules

Reuse Contact Form only on the Contact page as designed. Do not duplicate it elsewhere without an approved design change; if another page needs a similar inquiry form, stop and ask rather than reusing this one as-is.

---

# Info Card

## Purpose

Presents a single category of "how to reach us" information.

## Used In

Contact page ("Find us" — Location, Email, Social).

## Structure

A small icon, a short uppercase label, and one or two lines of information.

## Layout

3-column row of equal-width cards, light lavender background.

## Variants

No variant exists — all three observed instances (Location, Email, Social) share the same icon/label/info structure.

## Content Rules

One icon, one label, one or two lines of information per card. No additional copy.

## Design Rules

Icon and label are always accent blue; the information lines beneath are plain text.

## AI Rules

Reuse Info Card for any future "contact details" style row. Keep it to icon + label + one or two info lines.

---

# Footer

## Purpose

Closes every page with site links, trust marks, and copyright.

## Used In

Every page in the approved designs — identical structure throughout.

## Structure

A wavy graphic marks the top edge. Left column: wordmark logo and a one-line tagline. Center column: link list (Expertise, Work, About, Cookie Policy, Privacy Policy). Right column: certification badge (EUROCERT ISO/IEC 27001:2023) and a LinkedIn icon. A bottom bar carries the copyright line and a fixed circular blue "back to top" button.

## Layout

Full-width, light lavender background, three-column arrangement on desktop, stacked on mobile.

## Variants

No variant exists — the Footer is identical on every page in the approved designs.

## Content Rules

Tagline, the five link items, the certification badge, the LinkedIn icon, and the copyright line — nothing else.

## Design Rules

Must remain byte-for-byte identical across every page. Never customize the Footer per page.

## AI Rules

Always reuse the single Footer component unchanged. Do not add, remove, or reorder its content per page.
