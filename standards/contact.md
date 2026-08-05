# Contact Page Structure

Reverse-engineered from `design/Contact - Desktop.png` and `design/Contact - Mobile.png`, cross-referenced against `knowledge/05_design_system.md`, `standards/components.md`, and `CLAUDE.md`. This is the canonical blueprint for the Contact page — nothing here should be changed without updating the approved design first.

## Section Order

Top to bottom, exactly as shown in the approved design:

1. Navigation
2. Hero ("Start a conversation")
3. Contact Form (form fields + "What happens next" panel, in one bordered container)
4. "Find us" — Section Header + Info Card row (Location, Email, Social)
5. Footer

A single wavy divider graphic marks the transition from the Hero's light lavender background to the white background beneath it, positioned just above the Contact Form container. The Footer's own wavy top edge is separate, per `standards/components.md`.

## Layout

- **Hero**: centered heading ("Start a conversation"), centered two-line supporting paragraph beneath it. Light lavender background. This is the "with a form as the immediate next element" Hero variant documented in `standards/components.md` — the Hero itself carries no CTA.
- **Contact Form**: a single container with a blue border, split into two columns on desktop — the form fields on the left (white background) and the "What happens next" panel on the right (light lavender background). Sits on the page's white background.
- **"Find us"**: a centered heading, followed by a three-column row of equal-width Info Cards (Location, Email, Social), light lavender card background, on the page's white background.
- **Footer**: as documented in `standards/components.md` — unchanged here.

## Components Used

Using the canonical names defined in `standards/components.md`:

- **Navigation**
- **Hero** (the "with a form as the immediate next element" variant)
- **Contact Form**, including its internal **Primary CTA** ("Send Message" on desktop / "Submit Message" on mobile — see Form Behaviour)
- **Section Header** — "Find us" uses a further-reduced variant: heading only, with no eyebrow and no supporting paragraph. This goes beyond the no-eyebrow exception already noted for the Homepage in `standards/homepage.md`, and should be treated as an additional approved exception specific to this section, not a template to apply elsewhere without checking.
- **Info Card** (three instances: Location, Email, Social)
- **Footer**

## Content Structure

Describes what each section holds, not the wording itself:

- **Hero**: one heading; one supporting statement explaining who should reach out and why.
- **Contact Form**: five form fields (see Form Behaviour), a spam-prevention control, one submit action, and one plain-text alternative contact line with an inline email link. The adjacent panel holds one heading, four sequential steps describing what happens after submission, and one closing note about the range of organisations Pixelocracy works with.
- **"Find us"**: one heading; three information entries (Location, Email, Social), each with a label and one or two lines of information.
- **Footer**: company tagline, site link list, certification/trust marks, social link, copyright line.

Do not write marketing copy into this file — content for each section lives in `/knowledge` and is written when the page is built.

## Visual Behaviour

- Background sequence: light lavender (Hero) → white (Contact Form, "Find us") → light lavender (Footer).
- Hero heading and "Find us" heading are centered; form fields and the "What happens next" panel are left-aligned within their own column.
- The Contact Form container is outlined with a visible blue border around the entire two-column block — this bordered-container treatment is specific to this component, per `standards/components.md`.
- Info Cards use the same light lavender card fill seen elsewhere in the design system (e.g. Case Study Card's archive variant).
- The reCAPTCHA control ("I'm not a robot") is shown as a real third-party widget embed, not a custom checkbox.
- Spacing between the Hero, Contact Form, "Find us", and Footer is large and consistent, matching the general spacing behavior described in `knowledge/05_design_system.md`.

## Responsive Behaviour

- The Hero heading wraps from one line (desktop) to two lines (mobile); the supporting paragraph remains full width.
- The Contact Form's two columns stack vertically on mobile: form fields first, "What happens next" panel below, both still inside the single bordered container.
- Every form field is full width on mobile, including Full Name and Your Email, which share a row on desktop.
- The "Find us" row collapses from three side-by-side cards to a single stacked column on mobile, with thin horizontal divider rules separating each entry — a mobile-specific visual detail not present in the desktop card row.
- Footer stacks in the same order as every other page.

## Form Behaviour

Describes only what is visible in the approved designs — no validation or technical behavior is invented beyond this:

- **Field order**: Full Name, Your Email, Phone Number, Subject, Your Message.
- **Required marking**: Full Name and Your Email are marked with an asterisk (`*`); Phone Number, Subject, and Your Message carry no asterisk. No other required/optional indicator is shown.
- **Grouping**: Full Name and Your Email are grouped side by side in one row on desktop; Phone Number, Subject, and Your Message (a multi-line textarea) each occupy a full-width row. On mobile, all five fields stack full width, including Full Name and Your Email.
- **Spam prevention**: a reCAPTCHA "I'm not a robot" checkbox appears directly beneath the message field.
- **CTA placement**: the submit button sits directly beneath the reCAPTCHA control.
- **CTA label inconsistency**: the desktop design shows "Send Message"; the mobile design shows "Submit Message". This is an inconsistency between the two approved files, not a confirmed intentional variant — it should be resolved by asking rather than silently picking one.
- **Alternative contact path**: directly beneath the submit button, a plain-text line reads "Or drop us a message via [email]," with "email" shown as an inline link.
- **No other visible behavior**: no inline field validation states, helper text, error messages, or success/confirmation state are shown in either approved design. This is not yet defined and must not be invented.

## Reusable Patterns

Patterns on this page that are shared globally and must not be rebuilt per-page:

- **Hero** (the with-form variant)
- **Info Card** row
- **Contact Form**'s two-column, bordered-container pairing of an input form with a supporting "what to expect" panel — reusable if a future page needs a similar inquiry form
- **Primary CTA** used as a form submit action
- **Navigation** and **Footer**

## AI Rules

- Preserve the section order and count exactly as listed above — do not add, remove, or reorder sections without an approved design change.
- Do not invent form validation, error states, helper text, or a success/confirmation state — none is visible in the approved designs; if a task requires one, stop and ask rather than inventing it.
- Do not silently resolve the "Send Message" / "Submit Message" label inconsistency between desktop and mobile — flag it for a human decision, per `CLAUDE.md`'s "when uncertain, stop and ask."
- Keep the field order and the asterisk-based required marking (Full Name, Your Email only) exactly as shown.
- Do not add an eyebrow or a supporting paragraph to the "Find us" Section Header — the approved design uses a heading only.
- Reuse Contact Form and Info Card from `standards/components.md` rather than rebuilding equivalent markup for this page, and do not duplicate the Contact Form on another page without an approved design change.
- Follow the Decision Process in `CLAUDE.md` before making any change to this page: understand the request, check `/knowledge` and `/design`, reuse before creating, and explain assumptions.
