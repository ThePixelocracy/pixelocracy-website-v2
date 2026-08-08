# Pixelocracy Website

## Website Operating System & AI-Assisted Content Manual

This document is the authoritative reference for how the Pixelocracy website is operated day to day, including how a repository-connected AI assistant such as Claude may work within it. It complements `CLAUDE.md` (the base operating instructions covering design-source priority and the required order of operations) rather than replacing it — when the two overlap, follow both; when they conflict, stop and ask rather than silently picking one.

The Pixelocracy website is designed as a maintainable publishing system, not a collection of one-off pages. Its shared V4 design system, structured content, reusable page patterns, verified company material, and repository-aware AI workflow allow the team to create and maintain the website consistently over time.

When an AI coding assistant such as Claude is connected to the repository, it can act as an operator of this system: auditing existing material, preparing content, implementing pages, checking changes, and presenting work for human approval. The repository remains the source of truth, and a human remains the publisher.

## Core principle

> Use AI to accelerate careful delivery, not to bypass evidence, design judgment, review, or ownership.

The operating model is built around five rules:

1. **Repository first.** Inspect the implementation, documents, routes, and assets before changing anything.
2. **Verified facts only.** Never invent company claims, people, projects, outcomes, metrics, credentials, or contact details.
3. **One coherent system.** Reuse the V4 tokens, components, accessibility behaviour, and brand principles without reducing every page to the same template.
4. **Human approval before publication.** Implementation, commit, push, deployment, and publication are separate actions.
5. **Proportionate verification.** Match QA effort to the risk and scope of the change.

## The Pixelocracy model

Pixelocracy brings five disciplines together as one accountable team:

1. Strategy & Advisory
2. Data, AI & Automation
3. Engineering & Security
4. Digital Products & UI/UX
5. Capability Building & Operations

The approved mission is to help ambitious organisations turn business challenges into practical technology solutions that improve efficiency, create measurable value, and build lasting capability—leaving every organisation stronger than it was found.

The approved vision is:

> To eliminate mediocrity in technology adoption.

The website should express this combination clearly: different disciplines, one accountable team, lasting capability.

## Sources of truth

The AI assistant must establish the source hierarchy before writing or implementing content.

### Authoritative content

- Approved master company and messaging documents in the repository (`knowledge/01_company.md` through `knowledge/04_design_principles.md`)
- Approved service-pillar content (`knowledge/02_service_pillars.md`, `src/content/pillars.ts`, `src/content/pillar-pages.ts`)
- Current, approved V4 page content (everything under `src/content/*.ts` and the components that render it)
- Verified project and case-study source material (the six case-study content files under `src/content/*-case-study.ts` and `src/content/case-studies.ts`)
- Verified team, leadership, certification, contact, and legal information (`src/content/about.ts`, `src/content/contact.ts`, the footer's EUROCERT/ISO assets)
- Explicit written corrections or approvals from an authorised Pixelocracy reviewer

### Supporting references

- Existing page implementations that are already approved
- Genuine media and brand assets stored in the repository (`public/case-studies/`, `public/client-logos/`, `public/team/`)
- Legacy website content (`/design`, `knowledge/05_design_system.md`, `knowledge/06_figma_design_system.md`, `knowledge/07_pixelocracy_implementation_spec.md`), but only for facts, project history, and genuine assets — never as V4 visual direction, per `knowledge/08_v4_design_system.md`'s own documented priority order

### Not authoritative by default

- Filenames used as evidence of a person's role or employment status
- Old mockups or screenshots used as current design direction
- Placeholder or lorem ipsum content
- Copy inferred from competitors or unrelated external websites
- Unverified notes, drafts, generated text, or Downloads-folder material
- Claims created by the AI to make a page appear complete

If sources conflict, stop and report the conflict. Do not silently choose the most convenient version.

## Current website structure

Verified directly against the repository (`src/app/**/page.tsx`) rather than assumed. Every route below genuinely exists in the current working tree.

**Static pages**
- Homepage — `/`
- About — `/about`
- Contact — `/contact` (real form UI with client-side validation and a honeypot field; see [Forms and external services](#forms-and-external-services) for its actual delivery status)
- Work / Case Studies Archive — `/work`
- Insights archive — `/insights` (see note below — zero published articles today)

**Pillar pages** (`/services/[slug]`, five static routes plus a dynamic fallback for any pillar without one)
- Strategy & Advisory — `/services/strategy-advisory`
- Data, AI & Automation — `/services/data-ai-automation`
- Engineering & Security — `/services/engineering-security`
- Digital Products & UI/UX — `/services/digital-products`
- Capability Building & Operations — `/services/capability-building-operations`

**Case studies** (`/work/[slug]`) — six built and linked from the archive:
- Cardom — `/work/cardom`
- Hellenic Healthcare Group (HHG) — `/work/hhg`
- Aegean Motorway — `/work/aegean-motorway`
- Greek e-Government Platform (gov.gr) — `/work/govgr`
- WIRED Greece — `/work/wired-greece`
- Apeiron Ventures — `/work/apeiron-ventures`

**Articles** (`/insights/[slug]`) — the template and content schema exist and are production-ready, but **no article has been published yet**. The archive renders an intentional empty state rather than placeholder content. See [Content creation workflows](#content-creation-workflows).

**Legacy / locked routes** — kept live, not part of the V4 system, and out of scope for redesign: `/v2` and `/v3` (earlier full-homepage design experiments).

**SEO/system endpoints** — `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` (all implemented).

**Known gap:** the footer links to `/cookie-policy` and `/privacy-policy`, but neither route is built — both currently 404. This is a real, existing gap, not a planned future page; flag it rather than treating the links as functioning.

Treat this list as a snapshot, not a permanent guarantee — re-verify against `src/app/**/page.tsx` before relying on it for a new task, since routes are added over time.

## Capability status

### Available now through the repository workflow

Subject to the implementation actually present in the repository, an AI assistant can:

- Inspect the V4 design system, components, tokens, typography, spacing, motion, navigation, footer, and responsive conventions
- Audit routes, links, content, assets, metadata, and implementation gaps
- Create new pages that belong to the same brand without copying an existing page composition
- Update approved copy, navigation, links, calls to action, metadata, and structured content
- Create service pages, case studies, and article pages using the schemas and templates that already exist (`src/content/insights/types.ts`, the shared `case-study/*` components) — a "campaign landing page" or "event page" type does not exist yet and would need its own template first
- Reuse verified assets and create clearly labelled placeholders when approved assets are missing
- Implement deliberate desktop, tablet, and mobile compositions
- Preserve keyboard access, visible focus, reduced-motion behaviour, semantic structure, and responsive readability
- Run repository-defined type checks (`npx tsc --noEmit`), linting (`npm run lint`), targeted route checks, and production builds (`npm run build`)
- Review diffs and prepare clean Git checkpoints
- Commit and push only after explicit approval
- Report exactly what changed, what was verified, and what remains unresolved

### Planned Website / Content Operating System capabilities

These capabilities become reliable when the repository contains the required templates, schemas, registries, and documented workflows. The Insights article schema exists today; the rest of the list below does not yet:

- Generate a new article from an approved brief and place it in the correct content structure (the schema and template exist now; only the authored content is missing — see [Content creation workflows](#content-creation-workflows))
- Create a slug, page title, description, social metadata, and structured-data fields
- Associate content with the correct service pillars and related case studies
- Add new entries automatically to archive, related-content, and navigation systems
- Create a new case-study draft from supplied evidence, outcomes, images, and credits
- Generate a campaign or event landing page using approved content blocks (no such template exists yet)
- Add or update team members, leadership information, vacancies, or office details from verified source material
- Replace labelled media placeholders without changing layout
- Audit the website for broken links, outdated claims, missing metadata, missing alt text, and orphaned content
- Prepare a complete preview and diff for approval before publication
- Maintain a content registry so relationships, routes, statuses, and ownership remain visible

These are operating goals, not automatic claims about the present codebase. Mark each capability as implemented only after the repository proves that its complete workflow exists.

### Capabilities that require an integration

None of the following exist in this repository today. The following are not provided safely by a code repository and an AI assistant alone:

- **Form delivery** — the `/contact` route has a real submission handler (`src/app/api/contact/route.ts`) wired to Resend, but it requires `RESEND_API_KEY` and `CONTACT_TO_EMAIL` environment variables that are not set in this repository. Until they are, the form validates and honeypot-checks submissions honestly, then reports "not configured" rather than pretending to send.
- CAPTCHA, spam protection beyond the existing honeypot field, rate limiting, and submission monitoring
- **Image generation** — no image-generation provider is integrated
- Image licensing, rights management, and approval tracking
- **Analytics** — no analytics, tracking, or consent-management script is present anywhere in the codebase (verified — no `gtag`, no tag manager, no tracking pixel)
- **Scheduled publishing / CMS** — content is plain TypeScript compiled at build time; there is no CMS, no editing roles, no approval queue, and no scheduled-publish mechanism. Publishing means adding content and shipping a build.
- **Deployment** — the repository has no CI/CD workflow file and no `vercel.json`. `next build`/`next start` work locally and are compatible with Vercel's standard Next.js hosting, but this repository cannot confirm whether a live deployment or auto-deploy pipeline currently exists — verify with whoever owns hosting before describing the site as "live" or "auto-deploying."
- **Localisation** — the site is single-locale (`en_US` in `layout.tsx`); no translation or locale-routing system exists
- Newsletter, LinkedIn, or social publishing — no such integration exists (the footer's LinkedIn icon is a static link, not a publishing integration)
- CRM, recruitment, calendar, and project-management workflows
- Monitoring, alerting, uptime checks, and incident response

Before enabling one of these capabilities, document the provider, environment variables, permissions, data flow, privacy impact, failure behaviour, and responsible owner. Never expose credentials in source files, prompts, logs, screenshots, or browser output.

## What the AI assistant may do

The assistant may perform actions within the scope of the current request:

- Read relevant repository files before proposing or making changes
- Identify authoritative and conflicting sources
- Implement the requested page or content change
- Reuse shared systems without visually altering approved pages
- Add backward-compatible shared functionality when the requested feature genuinely needs it
- Create an intentional placeholder when an approved asset is missing
- Run checks proportionate to the change
- Show the changed route and provide a concise implementation report
- Prepare a commit or push when explicitly instructed

## What the AI assistant must not do

Unless explicitly authorised for the current task, the assistant must not:

- Invent facts, metrics, clients, projects, services, awards, certifications, people, job titles, biographies, offices, dates, quotes, or results
- Treat legacy screenshots as current design direction
- Generate fake product interfaces or client screenshots
- Use unrelated stock imagery to conceal missing assets
- Change approved pages while building a different page
- Refactor unrelated code
- Change multiple content types in one uncontrolled task
- Add dependencies, services, analytics, trackers, or environment variables without explaining why
- Expose secrets or copy environment values into source or chat
- Start a development server when another clean instance is already running
- Commit, push, deploy, publish, send, or submit anything without explicit permission
- Claim that a check passed if it was not run successfully

## Design-system behaviour

The V4 website should feel coherent without making every page identical.

Reuse shared foundations where appropriate:

- Official header and full-screen navigation
- Typography, spacing, colour, and layout tokens
- Approved button and text-link behaviour
- Footer, certification assets, and legal links
- Accessible interaction states
- Responsive breakpoints and content-width rules
- Reduced-motion support

Create a distinct narrative and visual concept for each major page. Do not reuse another page's hero, signature animation, diagram, card system, or content sequence unchanged simply because it already exists.

Avoid generic visual shortcuts such as decorative gradients, glassmorphism, interchangeable rounded cards, arbitrary fade-up animation, stock-office imagery, or diagrams that do not communicate real information.

Mobile is a designed composition, not the desktop page stacked vertically. Reconsider hierarchy, crop, spacing, density, interaction, motion, and calls to action for small screens.

## Content integrity

Every factual statement must be traceable to an approved source.

For each new page or substantial update, the assistant should report:

- Source documents used
- Verified facts and proof used
- Editorial copy newly written from approved material
- Content intentionally omitted because it could not be verified
- Conflicts or gaps requiring human resolution

Editorial connective copy is allowed when it preserves approved meaning. New factual claims are not.

### Case-study evidence rule

A case study may contain only verified:

- Client and project name
- Project context and challenge
- Pixelocracy's actual role
- Services and capabilities delivered
- Technology or platform details approved for disclosure
- Outcomes and metrics
- Quotes, credits, dates, and links
- Images and interface captures

If evidence is incomplete, keep the page in draft or use a labelled content gap. Do not convert assumptions into a polished narrative.

### Missing-image rule

When a required case-study image is not available:

- Use a clean placeholder in the final intended aspect ratio
- Label it with the project and exact image required, for example: `Cardom — mobile checkout screen`
- Keep replacement possible without restructuring the page
- Do not generate a fake client interface
- Do not use unrelated stock photography
- Include the missing asset in the final report

## Standard operating workflow

### 1. Audit

Before designing or coding:

1. Inspect the relevant route, components, content, and assets.
2. Inspect shared systems that the change may affect.
3. Confirm the authoritative content sources.
4. Identify existing routes, duplicates, stale implementations, and known gaps.
5. Review Git status and preserve unrelated user changes.

### 2. Define the task boundary

State:

- The single page, content type, or system being changed
- Routes and links inside scope
- Shared components that may require backward-compatible changes
- Explicit exclusions
- Whether commit, push, deployment, or publication is authorised

### 3. Implement

- Use the existing repository architecture and conventions.
- Prefer structured content over duplicated hard-coded content where the system supports it.
- Use genuine approved assets.
- Build desktop and mobile intentionally.
- Preserve approved pages and unrelated code.

### 4. Review in development

- Check the changed route through direct access and browser refresh.
- Review desktop and mobile presentation.
- Check interactions, focus, loading, success, empty, and error states relevant to the change.
- Check the browser console and requested assets for new failures.
- Verify any links directly affected by the task.

### 5. Obtain visual/content approval

Stop after implementation when the task requests review. Do not commit or push simply because development checks passed.

### 6. Create a checkpoint

After approval:

1. Review the complete relevant diff.
2. Exclude generated output, temporary files, screenshots, rejected variants, local environment files, and unrelated changes.
3. Run the appropriate checkpoint checks.
4. Commit with a clear, scoped message.
5. Push only when explicitly requested.
6. Report the branch, full commit hash, committed files, check results, push result, and remaining working-tree changes.

## Proportionate QA policy

Do not repeat full-site QA after every small correction.

### Tier 1 — Content-only correction (lightweight)

Examples: title, role, sentence, label, verified contact detail.

- Inspect the changed content at the affected viewport(s)
- Review the diff
- Run no production build unless the change touches code or shared configuration

### Tier 2 — Isolated page or component (checkpoint)

Examples: new page, page-specific section, form interface, article layout.

- Verify the affected route directly and after refresh
- Check desktop and mobile
- Check relevant interaction, keyboard, focus, reduced-motion, console, and asset behaviour
- Run repository-defined type and lint checks when code changed
- Run a production build at the approved checkpoint, or earlier if routing, build-time data, shared code, or framework configuration changed

### Tier 3 — Shared system or release checkpoint (full regression)

Examples: navigation, footer, tokens, routing architecture, content registry, framework configuration, dependencies, deployment configuration.

- Run type checks and linting
- Run a production build with duplicate development servers stopped
- Verify all directly affected routes and links
- Perform targeted regression checks on existing approved pages
- Run full-site regression only for major shared checkpoints and release readiness

Every failed check must be reported. Existing unrelated warnings should be distinguished from regressions introduced by the current change.

## Git and change-control rules

- Review `git status` and the relevant diff before staging.
- Preserve unrelated and user-owned changes.
- Never stage `.next`, build output, screenshots, local visual references, temporary exports, secrets, or rejected assets unless the repository explicitly requires a generated artifact.
- Keep commits scoped to one approved deliverable.
- Use clear messages such as `feat: add V4 Contact page` or `fix: correct leadership titles`.
- Do not amend, reset, force-push, delete branches, or rewrite history without explicit authorisation.
- Do not start the next page inside a checkpoint task unless the instruction explicitly says to continue.
- Never commit, push, deploy, or publish without explicit approval for that specific action.

## Content creation workflows

### Create an article

1. Confirm topic, audience, business purpose, author/source, and approval status.
2. Inspect the current Insights model, schema, routes, taxonomy, and examples (`src/content/insights/types.ts`, `src/content/insights/index.ts`, `docs/WEBSITE_OPERATING_SYSTEM.md`'s own route audit above).
3. Research only when authorised; distinguish external evidence from Pixelocracy claims.
4. Draft in the Pixelocracy voice (`knowledge/03_tone_of_voice.md`) using verified expertise and proof.
5. Create slug, metadata, summary, reading time, image requirements, pillar associations, and related content.
6. Use an approved image or a labelled placeholder; use image generation only through an approved integration and after confirming rights and suitability.
7. Add the article to `src/content/insights/index.ts` — the archive grid and article template render from that list automatically.
8. Preview, check, and wait for approval before commit or publication.

### Create a case study

1. Collect an approved brief, client name, problem, work performed, outcomes, technologies, quotes, credits, links, and images.
2. Separate verified evidence from missing information.
3. Inspect existing case-study architecture (`src/app/work/[slug]/page.tsx`'s registry, the shared `src/components/v4/case-study/*` components) and avoid breaking published routes.
4. Build a project-specific editorial narrative using the shared V4 system.
5. Add meaningful capability and industry relationships only when supported.
6. Create labelled placeholders for missing assets.
7. Verify the archive entry and detail route without linking users to a `404`.
8. Stop for factual, legal, and visual approval before publication.

### Create a landing or event page

No template for this content type exists yet — building one is itself the first step, not an assumption to skip.

1. Confirm purpose, audience, owner, dates, offer, CTA, form behaviour, legal requirements, and publication window.
2. Reuse the shared system while creating a page-specific composition.
3. Use verified campaign assets and approved claims.
4. Define expiry, redirect, archival, and analytics behaviour before launch.

### Update a global fact

Examples: leadership title, address, certification, company description.

1. Confirm the new value from an authorised source.
2. Search the entire repository for every occurrence and structured source.
3. Update the canonical source first, then dependent uses.
4. Report every location changed and any conflicting stale version.
5. Apply Tier 1 QA unless shared code or generated content requires more.

## Forms and external services

A complete form interface does not prove that real delivery is configured. As of this writing, `/contact` is exactly this case — see [Capabilities that require an integration](#capabilities-that-require-an-integration).

Before describing a form as functional, verify:

- Submission handler or API route
- Approved delivery provider and destination
- Required environment variables
- Server-side validation
- Spam protection and rate limiting
- Consent and privacy copy
- Error, loading, and success behaviour
- Logging and monitoring without exposing personal data
- Production configuration

If any required element is absent, implement only the approved interface and state exactly what is missing for real delivery.

## Natural-language commands

The following examples describe safe tasks for a repository-connected AI assistant.

### Audit without changing anything

> Audit the website for outdated claims, broken links, missing metadata, missing alt text, and orphaned pages. Do not change files. Report evidence, affected routes, severity, and recommended next actions.

### Create an article draft

> Create an article about AI governance for financial organisations. Use approved Pixelocracy material and clearly cited authorised research. Associate it with Data, AI & Automation and Engineering & Security. Prepare the page, archive entry, metadata, related content, and image requirement. Do not commit or publish; stop for editorial review.

### Create a case study

> Create a new case study for [Client] using only the supplied approved content and images. Report missing facts or assets instead of inventing them. Add the archive entry and detail route, then stop for review without committing.

### Replace a placeholder

> Replace the placeholder labelled `Cardom — mobile checkout screen` with the supplied approved image. Preserve the existing aspect ratio and layout. Verify the affected case study on desktop and mobile. Do not change anything else.

### Update a fact everywhere

> Update the approved leadership title everywhere it appears. Search canonical content and rendered uses, report all changed locations, and perform content-only QA. Do not run full-site regression unless shared code is unexpectedly affected.

### Prepare an approved page for checkpoint

> Review the complete relevant diff, exclude generated and unrelated files, run the checkpoint checks appropriate to the change, commit only the approved page, and push to the current branch. Report the branch, full hash, committed files, checks, push result, and final working-tree status. Do not begin another task.

## Recommended content-system structure

The implementation may use a CMS, local structured files, or another repository-native approach. Today it is local structured TypeScript files (see `src/content/insights/types.ts` for the pattern this repository already follows). Whatever technology is selected, the system should represent:

- Unique content ID and content type
- Title, slug, status, owner, and approval state
- Summary and page metadata
- Authoritative source references
- Pillar, industry, service, and related-content associations
- Hero and supporting media with alt text, crop, caption, credit, rights, and placeholder state
- Verified claims and metrics with internal source notes
- Publication, update, review, and expiry dates
- Canonical route and redirect history

Avoid migrating content into a new system until the repository architecture and editorial workflow have been reviewed and approved.

## Definition of done

A change is complete only when:

- It matches the approved scope and content
- All factual claims are verified
- Missing content and assets are visible and reported
- Desktop and mobile compositions are intentionally reviewed
- Relevant accessibility and interaction behaviour works
- Direct access, refresh, links, and assets affected by the task work
- Appropriate checks pass, with failures honestly reported
- Approved pages remain unaffected within the tested scope
- The diff contains no unrelated or generated noise
- Commit, push, deployment, and publication status are explicit
- A human reviewer has approved the next action

## Ownership and maintenance

This manual describes how the website should be operated. It does not replace product, brand, legal, security, privacy, or editorial ownership.

Review this manual whenever the team changes:

- Repository architecture or framework
- Design tokens or shared components
- Content schemas or editorial workflow
- Routes or navigation
- Form, analytics, CMS, deployment, image, or AI integrations
- QA and release requirements
- Approval roles or publishing permissions

When implementation and documentation disagree, audit the discrepancy. Update the implementation or the manual through an approved change; do not allow undocumented behaviour to become the new standard by accident.
