/**
 * WIRED Greece case study — verified content only.
 *
 * WIRED is one of only three projects with a full legacy V3 case-study
 * design in `/design` (alongside Apeiron and Cardom), and — per
 * `standards/case-study.md` — exists in two versions: an earlier draft
 * (`design/Wired Case Study - *.png`) and a current "UPDATED" version
 * (`design/UPDATED Wired Case Study - *.png`), which supersedes it. This
 * file is sourced from the UPDATED version throughout, per CLAUDE.md's
 * instruction to use the newest verified material — used strictly as a
 * content/history record, never as V4 design direction (no numbered
 * section chrome, wavy dividers, or hard-shadow cards carried over).
 *
 * The UPDATED version's section 04 ("Build to last") uses the Statistics
 * variant of the legacy "Dark Showcase" pattern, not the framed-screenshot
 * gallery variant the superseded earlier draft used — `knowledge/07`'s
 * six-screenshot gallery list belongs to that earlier draft and is not
 * used here.
 *
 * Verbatim copy sourced from `design/UPDATED Wired Case Study - Desktop.png`
 * (cross-checked against `knowledge/07_pixelocracy_implementation_spec.md`'s
 * node-level record of the same file):
 * - Hero description, "The Brief," "The Rules," "The Typeface Problem,"
 *   "The Build" stats, "Web Development" copy and tool list, and "The
 *   Result" are all reproduced from that source below.
 * - `src/content/case-studies.ts` (wired-greece entry, already shipped on
 *   the homepage): "A digital rebirth of a technological icon. The Greek
 *   edition of WIRED engineered to global standards, adapted for local
 *   culture." — the newer, already-approved short description, used for
 *   the hero subheading in place of the legacy design's own phrasing
 *   where the two differ.
 *
 * As with Cardom, these facts (70% infrastructure cost reduction, 2-week
 * go-live against a 4-month industry standard, 7 article hero variants,
 * 15+ page types) are sourced from this one approved legacy design only —
 * they are not independently cross-referenced elsewhere in the repository
 * the way gov.gr's figures are. Presented at the same confidence level as
 * Cardom's legacy-sourced figures, not overstated as independently
 * verified twice over.
 *
 * Assets:
 * - `public/case-studies/wired-thumbnail1.png` (1920×950): a genuine,
 *   current screenshot of the live WIRED Greece homepage — real
 *   navigation, real Greek-language article ("Why the Athens Metro can't
 *   just add air conditioning to the platforms"). Already used as
 *   `imageV4` on the approved V4 homepage.
 * - `public/case-studies/wired-hero.png` (602×763): a genuine screenshot
 *   of a real WIRED Greece article page (hair-transplant industry
 *   story). Used as `image` by the legacy V2/V3 homepage.
 * - No standalone screenshot file exists for the WIRED.com *global*
 *   homepage shown beside the Greek one in the legacy design's "Joining a
 *   Legacy" section — that comparison is described in this case study's
 *   text only, not reconstructed as an image that isn't actually in the
 *   repository.
 * - No official WIRED client-logo file exists in `public/client-logos/`
 *   separately — WIRED's own wordmark is baked into the two real
 *   screenshots above.
 */

export const wiredCaseStudy = {
  slug: "wired-greece",
  client: "WIRED Greece (Condé Nast)",
  industry: "Media & Publishing",
  liveUrl: "https://www.wired.com.gr",
  liveLabel: "Live at wired.com.gr",

  hero: {
    eyebrow: "Case study — Media & Publishing",
    title: "WIRED Greece",
    subheading: "A digital rebirth of a technological icon.",
    paragraph:
      "The Greek edition of WIRED engineered to global standards, adapted for local culture — without losing a single pixel of what makes WIRED, WIRED.",
    facts: [
      { label: "Client", value: "WIRED Greece (Condé Nast)" },
      { label: "Industry", value: "Media & Publishing" },
      { label: "Scope", value: "Design system, platform, commerce" },
      { label: "Page types", value: "15+ designed" },
    ],
  },

  legacy: {
    eyebrow: "01 — The brief",
    heading: "Joining a legacy",
    paragraphs: [
      "WIRED has been defining tech culture since 1993. Owned by Condé Nast, it carries thirty years of visual authority — a design language so consistent it feels inevitable.",
      "When the opportunity came to launch WIRED Greece, the mandate wasn't to reimagine it. It was to extend it: to bring that same editorial intelligence and visual rigour to a Greek audience, without losing a single pixel of what makes WIRED, WIRED.",
    ],
  },

  designSystem: {
    eyebrow: "02 — The rules",
    heading: "Adapting an existing design system",
    paragraphs: [
      "Condé Nast's brand standards are non-negotiable by design — WIRED's recognition is inseparable from its consistency.",
      "Small adaptations were permitted only where the Greek market genuinely required them. Every deviation had to be justified against the brand logic, not a creative preference, but a functional necessity.",
    ],
    comparison: {
      before: {
        heading: "Fixed, non-negotiable",
        items: [
          "WIRED masthead and logo",
          "Black / white colour system",
          "Navigation structure and categories",
          "Grid proportions and spacing logic",
          "Article layout hierarchy",
          "Typographic scale relationships",
        ],
      },
      after: {
        heading: "Flexible, adaptable",
        items: [
          "Greek typeface selection",
          "Headline rhythm and line length",
          "Navigation label translations",
          "New page types (events, newsletter)",
          "Subscription flow and UI copy",
          "Footer structure and local links",
        ],
      },
    },
  },

  typeface: {
    eyebrow: "03 — The typeface problem",
    heading: "Greek has no WIRED typeface",
    paragraphs: [
      "Typography is where the WIRED brand lives most visibly. Its Latin typefaces are sharp, geometric, authoritative, and inseparable from how the brand communicates. The problem: none of them had Greek character support.",
      "After evaluating multiple options, we selected a combination that matches the brand's speed, stroke contrast, and tone — set at headline scale, it reads as WIRED.",
    ],
    typefaces: [
      { role: "Headings", name: "Fira Sans Extra Condensed" },
      { role: "Labels", name: "JetBrains Mono" },
      { role: "Body text", name: "Source Serif 4" },
    ],
    headlineSamples: [
      {
        label: "WIRED Global",
        headline: "Meet the sad wives of AI",
        deck: "Are you married to a man who's obsessed with AI? I'm so, so sorry.",
      },
      {
        label: "WIRED Greece",
        headline: "Ασπίδα του Αχιλλέα: Η ψηφιακή φάλαγγα κατά των drones",
        deck: "Τα σύγχρονα πεδία μάχης κινούνται πολύ γρήγορα για να αντιμετωπιστούν με κατακερματισμένες άμυνες.",
      },
    ],
  },

  build: {
    eyebrow: "04 — The build",
    heading: "Build to last",
    paragraph:
      "Launching a global media brand in a new market comes with hard constraints: fixed standards, real deadlines, and infrastructure that has to perform from day one. These are the numbers that defined how this delivery came together.",
    stats: [
      {
        value: "70%",
        label: "Infrastructure cost reduction",
        detail: "Rebuilt with a leaner architecture, delivering Condé Nast-grade performance at a fraction of the operational cost.",
      },
      {
        value: "2wks",
        badge: "8x faster",
        label: "Time to go-live",
        detail: "Against an industry standard of 4 months for a comparable publishing platform.",
      },
      {
        value: "7",
        label: "Article hero variants",
        detail: "Each designed within the WIRED system.",
      },
      {
        value: "15+",
        label: "Page types designed",
        detail: "Homepage, article, category, events, newsletter and more.",
      },
    ],
  },

  platform: {
    eyebrow: "05 — Web development",
    heading: "One platform, every channel",
    paragraph:
      "We built the complete platform — editorial, subscriptions, e-commerce, events, and advertising — within a single ecosystem. Readers can subscribe, access member-only content, purchase physical issues, register for events, and manage their account in one seamless flow, with PDF tickets, automated invoicing, recurring billing, and subscription fulfilment all handled natively. Performance, accessibility, and responsive design were built in from the start — not added after.",
    columns: [
      {
        heading: "Editorial",
        detail: "News, long-form features, video, and author profiles, managed through custom content workflows built for the WIRED Greece team.",
      },
      {
        heading: "Subscriptions",
        detail: "Recurring billing, member-only access, physical issue delivery, and automated invoicing, fully integrated into the reading experience.",
      },
      {
        heading: "Monetisation",
        detail: "Google Ads integration, sponsored content, and e-commerce revenue channels within a single ecosystem.",
      },
    ],
    builtWith: ["WordPress", "Elementor", "WooCommerce", "Google Ads", "WP REST API"],
  },

  result: {
    eyebrow: "06 — The result",
    heading: "Where WIRED Greece now lives",
    paragraphs: [
      "A Greek-speaking audience now has access to one of the world's great tech-media brands, with the full visual authority of the global edition intact.",
      "What you see is a product built entirely from observation, craft, and a deep respect for the source material.",
    ],
  },
} as const;

export type WiredCaseStudy = typeof wiredCaseStudy;
