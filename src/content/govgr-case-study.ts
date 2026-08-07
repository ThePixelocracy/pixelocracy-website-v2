/**
 * gov.gr (Greek e-Government Platform) case study — verified content only.
 *
 * This is Pixelocracy's most heavily cross-referenced, most independently
 * verified case study in the repository — the same core figures recur,
 * consistently, across five separate files:
 * - `src/content/case-studies.ts` (govgr entry): "9M users, 2,000+ services
 *   consolidated. €400M in yearly savings. The second strongest brand in
 *   Greece."
 * - `src/content/about.ts` (evidence points): "9M citizen users on a
 *   national platform we designed and built" · "€400M in yearly
 *   operational savings, same platform."
 * - `src/content/proof-points-v4.ts` (homepage Proof section): "9M citizen
 *   users on the Greek e-Government Platform" · "€400M in yearly savings,
 *   same platform" · "0 security breaches in 2 years, eGovernance
 *   infrastructure."
 * - `src/content/pillar-pages.ts`, cited independently in THREE pillars:
 *   - Strategy & Advisory ("eGovernance"): "Designed the national digital
 *     transformation solution for a government platform now used by
 *     millions of citizens across the country." · "2nd strongest brand in
 *     Greece · €400M yearly savings."
 *   - Engineering & Security ("eGovernance"): "Zero-trust security
 *     architecture for mission critical infrastructure." · "80% fewer
 *     manual security checks · 0 breaches in 2 years."
 *   - Digital Products ("Gov.gr citizen portal"): "9M users, 2,000+
 *     services consolidated. €400M in yearly savings. The second
 *     strongest brand in Greece."
 * - `knowledge/02_service_pillars.md`: "Gov.gr citizen portal: 9 million
 *   users, consolidation of more than 2,000 public services, more than
 *   €400 million annual savings."
 *
 * Pixelocracy's verified role is specifically STRATEGY (the national
 * digital transformation solution/roadmap) and SECURITY ARCHITECTURE
 * (zero-trust, mission-critical infrastructure), with the platform also
 * cited as a Digital Products proof point. Nothing in the repository
 * states Pixelocracy built the entire gov.gr platform end-to-end — gov.gr
 * is a national government initiative; this case study describes
 * Pixelocracy's documented contribution to it, not sole ownership of it.
 *
 * Assets:
 * - `public/case-studies/govgr-thumbnail.png`: the brand/lifestyle photo
 *   (classical government architecture, gov.gr crest+wordmark overlay) —
 *   same image used on the legacy V2/V3 homepage and the /work archive.
 * - `public/case-studies/govgr-thumbnail1.png`: a genuine, current
 *   screenshot of the live gov.gr homepage (higher resolution, used as
 *   `imageV4` on the approved V4 homepage) — showing the real "mAigov"
 *   digital-assistant widget and citizen search bar. Not a mockup or a
 *   reconstruction; this is what the real product actually looks like.
 * - No official gov.gr client-logo file exists separately in
 *   `public/client-logos/` — the crest/wordmark lives baked into the two
 *   images above.
 *
 * No legacy individual case-study design exists for gov.gr either (no
 * `design/gov.gr * - *.png`; only Apeiron, Cardom, and Wired have full
 * legacy case-study mockups) — this V4 page is a wholly new composition,
 * not a redesign of an existing one.
 */

export const govgrCaseStudy = {
  slug: "govgr",
  client: "Hellenic Republic — gov.gr",
  industry: "Government",

  hero: {
    eyebrow: "Case study — Government",
    title: "gov.gr",
    subheading: "Complexity, consolidated into one point of access.",
    paragraph:
      "Greece's official digital government platform — one place for certificates, permits, and public services, without visiting offices.",
    stats: [
      { value: "9M", label: "citizens who use gov.gr instead of visiting an office" },
      { value: "2,000+", label: "public services, now in one search bar" },
      { value: "€400M", label: "saved every year — redirected to public services, not paperwork" },
    ],
    facts: [
      { label: "Client", value: "Hellenic Republic" },
      { label: "Industry", value: "Government" },
      { label: "Pixelocracy's role", value: "Strategy, security architecture" },
      { label: "Recognition", value: "2nd strongest brand in Greece" },
    ],
  },

  challenge: {
    eyebrow: "01 — The challenge",
    heading: "Thousands of services. One citizen at a time.",
    paragraphs: [
      "Before consolidation, accessing a public service in Greece meant knowing which office handled it, what to bring, and when it was open — repeated separately for every certificate, permit, and form.",
      "The brief wasn't to digitise each office individually. It was to remove the need to know any of that in the first place.",
    ],
    convergence: {
      metric: "2,000+",
      metricLabel: "public services",
      resultLabel: "gov.gr",
    },
  },

  citizenExperience: {
    eyebrow: "02 — The citizen experience",
    heading: "From knowing the system to just asking",
    paragraphs: [
      "The platform's own mAigov digital assistant replaces the hardest part of the old process: knowing which office, form, or procedure applies to you.",
      "A citizen now describes what they need in their own words — the platform routes them, instead of the other way around.",
    ],
    comparison: {
      before: {
        heading: "Before",
        items: [
          "Find the right office for each service",
          "Learn each office's own process",
          "Visit in person, during working hours",
          "Repeat separately for every certificate or permit",
        ],
      },
      after: {
        heading: "gov.gr",
        items: [
          "One platform for public services",
          "One search, instead of many offices",
          "Available any time, from any device",
          "A digital assistant to guide the request",
        ],
      },
    },
  },

  showcase: {
    eyebrow: "The real platform",
    caption: "The gov.gr homepage today — including mAigov, its live digital assistant.",
  },

  role: {
    eyebrow: "03 — Pixelocracy's role",
    heading: "Strategy and security, at national scale",
    paragraph:
      "Pixelocracy designed the national digital transformation strategy behind the platform, and built the zero-trust security architecture protecting it — a documented contribution to a national initiative, not sole ownership of it.",
    columns: [
      {
        heading: "Strategy",
        detail: "The national digital transformation solution and roadmap for consolidating public services.",
      },
      {
        heading: "Security",
        detail: "Zero-trust security architecture for mission-critical infrastructure.",
      },
      {
        heading: "Digital product",
        detail: "Cited as a proof point for citizen-facing platform work at national scale.",
      },
      {
        heading: "Outcome",
        detail: "80% fewer manual security checks · 0 breaches in 2 years.",
      },
    ],
  },

  result: {
    eyebrow: "04 — The result",
    heading: "The second strongest brand in Greece",
    paragraphs: [
      "9M citizens now reach public services through a single platform instead of a patchwork of offices — with more than 2,000 services consolidated into one place.",
      "That consolidation also saves an estimated €400M every year — while gov.gr has become the second strongest brand in Greece, built on a service citizens actually rely on.",
    ],
  },
} as const;

export type GovgrCaseStudy = typeof govgrCaseStudy;
