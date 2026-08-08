/**
 * Apeiron Ventures case study — verified content only.
 *
 * Apeiron is one of only three projects with a full legacy V3 case-study
 * design in `/design` (alongside Cardom and WIRED): `design/Apeiron Case
 * Study - Desktop.png` / `- Mobile.png`. Used strictly as a content/history
 * record here, never as V4 design direction.
 *
 * Verbatim copy and facts sourced from that design file:
 * - Client description, fund size (€25M), sectors (GenZ economy,
 *   Enterprise Software, Greece and beyond): section "01 — The Client."
 * - The three design concepts explored, and why the selected one
 *   ("Infinite by Nature") won: sections "02 — Three Directions" and
 *   "03 — Why This Is The One." This is Apeiron's OWN documented,
 *   approved design rationale — "Apeiron means infinity in Greek... the
 *   central concept is a background in continuous forward motion... a
 *   pixelated, animated space" — used directly as this case study's
 *   central visual/motion concept, not invented independently.
 * - Result: launched, nominated by Awwwards (named explicitly in the
 *   source copy — resolves the ambiguous "W. Nominee" badge visible in
 *   the real screenshots), live at apeiron.vc.
 * - `src/content/case-studies.ts` (apeiron-ventures entry, already shipped
 *   on the homepage): "A VC fund digital presence that competes on a
 *   global stage. Where the brand name became the design language." — the
 *   newer, already-approved short description, used for the hero.
 *
 * Deliberately NOT used from the same design file:
 * - Section "05 — The Development"'s paragraph, its "Marketplace /
 *   Transactions / Logistics / Backend" column breakdown, and its
 *   "WordPress, Elementor, WooCommerce, Google Ads, WP REST API" tool
 *   pills are IDENTICAL, word-for-word, to Cardom's own section 05
 *   ("vehicle pages," "dealer inventory," "delivery scheduling" — car
 *   marketplace language that describes nothing about a VC fund site).
 *   This is an unedited copy-paste artifact in the source Figma file, not
 *   verified Apeiron-specific content, and is not reproduced here —
 *   consistent with CLAUDE.md's "do not copy inaccurate legacy wording."
 * - The "Venture News & Insights" article shown in the design ("Apeiron VC
 *   follows on in Alta Ares: French defense AI company closes €50 million
 *   Series A," with named co-investors) is a portfolio company's own
 *   funding news, not a Pixelocracy project metric. Citing its specific
 *   transaction figures here would risk presenting a client's portfolio
 *   company's investment data as a verified case-study outcome — the
 *   "News & Insights" page type is described only in general terms below.
 *
 * Portfolio company names below (40Kft, PlugSecure, Alta Ares, Circuland,
 * finloop, Instacar, Pollfish, Doulestores) are read directly off the
 * genuine screenshots — a trust-strip and a portfolio grid baked into the
 * approved design — not invented.
 *
 * Assets:
 * - `public/case-studies/apeiron-thumbnail1.png` (1920×948): a genuine,
 *   current screenshot of the live Apeiron Ventures portfolio page — real
 *   navigation, the real halftone-dot globe graphic, real portfolio
 *   location markers. Already used as `imageV4` on the approved V4
 *   homepage.
 * - `public/case-studies/apeiron-hero.png` (605×850): the same real page,
 *   a portrait device-mockup crop. Used as `image` by the legacy V2/V3
 *   homepage.
 * - No official Apeiron client-logo file exists in `public/client-logos/`
 *   separately — Apeiron's own "AV" mark is visible in the two real
 *   screenshots above.
 */

export const apeironCaseStudy = {
  slug: "apeiron-ventures",
  clientName: "Apeiron Ventures",
  industry: "Venture Capital",
  liveUrl: "https://www.apeiron.vc",
  liveLabel: "Live at apeiron.vc",

  hero: {
    eyebrow: "Case study — Venture Capital",
    title: "Apeiron Ventures",
    subheading: "A VC fund digital presence that competes on a global stage.",
    paragraph: "Where the brand name became the design language.",
    facts: [
      { label: "Client", value: "Apeiron Ventures" },
      { label: "Industry", value: "Venture Capital" },
      { label: "Fund", value: "€25M, pre-seed & seed" },
      { label: "Recognition", value: "Awwwards nominee" },
    ],
  },

  client: {
    eyebrow: "01 — The client",
    heading: "Investing in what comes next",
    paragraphs: [
      "Apeiron Ventures is a pre-seed and seed fund investing across the GenZ economy and Enterprise Software, in Greece and beyond. With a €25m fund and a clear thesis, they back ambitious founders from the earliest stages.",
      "Their digital presence had to reflect that conviction. Most VC sites look the same — institutional, cautious, forgettable. Apeiron wanted something that felt as bold and forward-thinking as the startups it chooses to back.",
    ],
    portfolioNote: "Apeiron's portfolio includes 40Kft, PlugSecure, Alta Ares, Circuland, finloop, Instacar, Pollfish, and Doulestores.",
  },

  directions: {
    eyebrow: "02 — Three directions",
    heading: "Every brief starts with exploration",
    paragraphs: [
      "Before committing to a direction, three distinct concepts were developed, each interpreting the Apeiron brief through a different lens. The goal was to stress-test what the brand could be, not just what it should look like.",
      "Each concept had a central idea, a visual logic, and a different answer to the same question: what does a VC fund that backs founders before anyone else actually look like?",
    ],
    concepts: [
      {
        name: "VC Behind the Founders",
        detail: "People-first. Real founders, their stories, and their connection to Apeiron at the centre of the experience.",
        selected: false,
      },
      {
        name: "Futuristic & Bold",
        detail: "GenZ aesthetic, loud typography, bold colour. A VC site that feels like a tech company rather than a fund.",
        selected: false,
      },
      {
        name: "Infinite by Nature",
        detail: "The brand as metaphor — a pixelated, evolving space that reflects movement, continuity, and boundless growth.",
        selected: true,
      },
    ],
  },

  concept: {
    eyebrow: "03 — Why this is the one",
    heading: "The name said it all",
    paragraphs: [
      "Apeiron means infinity in Greek — and that single word became the brief. The central concept is a background in continuous forward motion, like travelling through space: always progressing, never arriving, never resetting.",
      "Everything else on the site layers on top of that motion. As you scroll, the content changes — showcasing the team, fund, and ventures — while the space beneath remains constant and uninterrupted. The content is transient, the momentum is permanent.",
    ],
    reasons: [
      {
        name: "Brand alignment",
        detail: "The infinity metaphor is baked into the brand name itself. The visual language didn't need to be invented — it needed to be uncovered.",
      },
      {
        name: "Visual uniqueness",
        detail: "No VC site looks like this. The pixelated, animated space sets Apeiron apart in a category where most sites are indistinguishable from each other.",
      },
      {
        name: "Constraint as asset",
        detail: "A brand palette limited to shades of red. The pixel texture created depth and movement without relying on colour variety.",
      },
    ],
  },

  platform: {
    eyebrow: "04 — The platform",
    heading: "One system, every audience",
    paragraph:
      "Founders and limited partners alike needed the same site to work for them — so the platform was built around the real content a VC fund actually publishes, not a generic template.",
    columns: [
      {
        heading: "Team",
        detail: "Founder-facing profiles introducing the people behind Apeiron's investment decisions.",
      },
      {
        heading: "Portfolio",
        detail: "Live investments and global reach, presented through the fund's own halftone-map identity.",
      },
      {
        heading: "Fund information",
        detail: "Fund size, thesis, and stage — the facts a founder or LP needs before reaching out.",
      },
      {
        heading: "News & insights",
        detail: "Venture news, updates, and founder stories from across Apeiron's portfolio.",
      },
    ],
  },

  result: {
    eyebrow: "05 — The result",
    heading: "Recognised. Live. Boundless.",
    paragraphs: [
      "The site launched and won a nomination by Awwwards — the international benchmark for web design excellence. A Greek VC fund, now with a digital presence that competes on a global stage.",
      "More importantly, it does what it was designed to do: it communicates ambition before a single word is read. Founders and limited partners alike arrive at a site that feels as serious and forward-thinking as the fund itself.",
    ],
  },
} as const;

export type ApeironCaseStudy = typeof apeironCaseStudy;
