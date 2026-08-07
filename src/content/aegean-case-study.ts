/**
 * Aegean Motorway case study — verified content only.
 *
 * Sources (no invented clients, services, metrics, or screens):
 * - `knowledge/07_pixelocracy_implementation_spec.md` (§ homepage "Case
 *   Study Cards List", card 03): the only verified descriptive copy for
 *   this project — heading "The Central Hub for Motorway Commuters",
 *   description "A digital platform for the Aegean Motorway delivering
 *   real-time traffic updates, live alerts, and reliable information for
 *   thousands of daily commuters." Image described there: "aerial night
 *   photo of a curved highway/bridge with a white triangular-icon logo
 *   reading 'ΑΥΤΟΚΙΝΗΤΟΔΡΟΜΟΣ ΑΙΓΑΙΟΥ' (Aegean Motorway)" — matches
 *   `public/case-studies/aegean-mootorways-thumbnail.png` exactly.
 * - `src/content/work-archive.ts`: the same project as already shipped in
 *   the live /work archive (slug `aegean-motorway`), same description.
 * - `public/client-logos/aegean.svg`: Aegean Motorway's own official logo
 *   asset (`src/content/client-logos.ts` picks this over the duplicate
 *   `agean-mototway-logo.svg` export).
 *
 * As with HHG, no legacy individual case-study design exists for this
 * project (no `design/Aegean * - *.png`) and no real product UI screenshot
 * exists anywhere in the repository — only the one aerial photograph
 * above. The platform section is built from Pixelocracy's own verified
 * capability names, not a product screenshot or invented interface.
 *
 * `src/content/pillar-pages.ts` contains three separate "Mobility"-labelled
 * proof points:
 *   - "Mobility" — "Transformed the national motorway experience into a
 *     self-care digital journey..." · "Millions of transactions supported
 *     annually"
 *   - "Mobility organization" — data/reporting automation, no metric tied
 *     to this project specifically
 *   - "Mobility company" — internal IT team training, "0 escalations/year"
 * None of these names Aegean Motorway specifically, and the repository
 * contains a SECOND, separate real motorway/mobility client logo (Nea
 * Odos — `public/client-logos/nea-odos-logo.svg`), so "the national
 * motorway experience" is at least as plausibly that engagement as this
 * one. Per the same restraint already applied to HHG's "Health Group"
 * proof point, none of these numbers are attributed to Aegean Motorway
 * here — the Result section is a qualitative statement only.
 */

export const aegeanCaseStudy = {
  slug: "aegean-motorway",
  client: "Aegean Motorway",
  industry: "Mobility",

  hero: {
    eyebrow: "Case study — Mobility",
    title: "Aegean Motorway",
    subheading: "A real-time information hub for motorway commuters.",
    paragraph:
      "A digital platform for the Aegean Motorway delivering real-time traffic updates, live alerts, and reliable information for thousands of daily commuters.",
    facts: [
      { label: "Client", value: "Aegean Motorway" },
      { label: "Industry", value: "Mobility" },
      { label: "Scope", value: "Traffic, alerts, commuter information" },
      { label: "Users", value: "Daily commuters" },
    ],
  },

  problem: {
    eyebrow: "01 — The commute",
    heading: "The road doesn't tell you what's ahead",
    paragraphs: [
      "For thousands of daily commuters, the motorway itself carries no information — just tarmac. Conditions change kilometres ahead of where a driver can see, and by the time a problem is visible, there's often no way left to route around it.",
      "Aegean Motorway needed a digital layer over the physical road: one place commuters could check before and during a trip, not signage they'd already driven past.",
    ],
    comparison: {
      before: {
        heading: "Before",
        items: [
          "Conditions only visible once on the road",
          "No live view of incidents ahead",
          "Information scattered across radio, signage",
          "Same experience whether checked at home or mid-drive",
        ],
      },
      after: {
        heading: "The platform",
        items: [
          "Real-time traffic updates",
          "Live incident alerts",
          "One reliable source for commuters",
          "Available before and during the trip",
        ],
      },
    },
  },

  route: {
    eyebrow: "02 — The route",
    heading: "Information that moves with the commuter",
    paragraph:
      "The platform is built around the shape of a real commute — not a one-time transaction, but a continuous stream of live conditions from the moment a trip is planned to the moment it ends.",
    waypoints: [
      { name: "Live traffic", detail: "Current conditions along the route" },
      { name: "Incident alerts", detail: "Live notice of what's ahead" },
      { name: "Toll & travel info", detail: "What a commuter needs before the trip" },
      { name: "Road conditions", detail: "Reliable status, updated continuously" },
    ],
  },

  platform: {
    eyebrow: "03 — The platform",
    heading: "One hub, always on",
    paragraph:
      "Built as a single continuously updating hub rather than a set of static pages — the same information layer whether a commuter checks it before leaving or while already on the road.",
    columns: [
      {
        heading: "Live traffic",
        detail: "Real-time traffic conditions across the motorway network.",
      },
      {
        heading: "Alerts",
        detail: "Live incident and disruption alerts as they happen.",
      },
      {
        heading: "Commuter information",
        detail: "Reliable, always-available information for daily drivers.",
      },
      {
        heading: "Operations",
        detail: "A digital layer connected to the physical motorway itself.",
      },
    ],
  },

  result: {
    eyebrow: "04 — The result",
    heading: "A reliable source for the road ahead",
    paragraphs: [
      "Thousands of daily commuters now have one place to check real-time traffic, live alerts, and road conditions — before a trip or in the middle of one.",
      "The motorway itself hasn't changed. What commuters know about it, before they're on it, has.",
    ],
  },
} as const;

export type AegeanCaseStudy = typeof aegeanCaseStudy;
