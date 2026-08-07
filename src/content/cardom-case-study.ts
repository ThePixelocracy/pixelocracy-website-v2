/**
 * Cardom / AVIS case study — verified content only.
 *
 * Sources (no invented clients, services, metrics, or screens):
 * - `design/Cardom Case Study - Desktop.png` / `- Mobile.png`: the approved
 *   legacy V3 case study. Used here strictly as a content and fact record —
 *   its layout, component choices, and visual treatment are NOT reused (see
 *   `knowledge/08_v4_design_system.md` design-documentation priority and the
 *   explicit instruction not to reproduce the V3 case-study template).
 * - `public/case-studies/cardom-hero.png`: a real Cardom product screenshot
 *   (vehicle detail page, cardom.gr). Not a generated interface.
 * - `public/case-studies/cardom-thumbnail.png`: a real Cardom brand/lifestyle
 *   photograph (already used on the homepage and /work archive).
 * - `public/client-logos/avis-svg-1.svg`: AVIS's own official logo asset
 *   (`src/content/client-logos.ts`).
 * - The real cardom.gr product screenshot itself shows the product lockup
 *   "Cardom by Avis & skroutz" — the skroutz.gr partnership mention below is
 *   taken directly from that verified asset, not invented; it corrects an
 *   omission in the legacy case-study copy, which named only AVIS.
 *
 * No case-study metrics (user counts, revenue, conversion, etc.) are
 * verified anywhere in the repository for this project — the "Result"
 * section below is intentionally a qualitative statement, not a fabricated
 * statistic.
 */

export const cardomCaseStudy = {
  slug: "cardom",
  client: "AVIS",
  partnership: "Built in partnership with skroutz.gr",
  industry: "Automotive",
  liveUrl: "https://cardom.gr",
  liveLabel: "Live at cardom.gr",

  hero: {
    eyebrow: "Case study — Automotive",
    title: "Cardom",
    subheading: "A certified marketplace for buying a used car, entirely online.",
    paragraph:
      "Cardom transforms one of Greece's most friction-heavy purchases into a seamless digital experience — certified vehicles, transparent pricing, and door-to-door delivery, from search to doorstep.",
    facts: [
      { label: "Client", value: "AVIS" },
      { label: "Partnership", value: "skroutz.gr" },
      { label: "Industry", value: "Automotive" },
      { label: "Scope", value: "Marketplace, checkout, logistics, backend" },
    ],
  },

  market: {
    eyebrow: "01 — The market",
    heading: "A broken way to buy",
    paragraphs: [
      "In Greece, buying a used car meant dealership visits, haggling, uncertainty about vehicle history, and a process built entirely on physical presence and paperwork. For buyers, it was time-consuming and opaque. For sellers, it was inefficient and hard to scale.",
      "The market was ready for something different. The trust infrastructure to support it didn't exist yet.",
    ],
    comparison: {
      before: {
        heading: "Traditional market",
        items: [
          "Multiple dealership visits required",
          "No vehicle history transparency",
          "Price negotiation with no reference",
          "Paperwork handled manually",
          "No delivery — buyer collects",
        ],
      },
      after: {
        heading: "Cardom",
        items: [
          "Full purchase completed online",
          "Certified condition & history report",
          "Transparent fixed pricing",
          "Registration handled end-to-end",
          "Door-to-door delivery across Greece",
        ],
      },
    },
  },

  relationship: {
    eyebrow: "02 — The relationship",
    heading: "AVIS builds something new",
    paragraphs: [
      "AVIS, one of the most recognised names in mobility, decided to build a certified used-car marketplace from scratch, in partnership with skroutz.gr. The AVIS brand manual defined the identity; Cardom was the product.",
      "The bet was simple and significant: that trust, if designed carefully enough, could replace the test drive.",
    ],
  },

  journey: {
    eyebrow: "03 — The journey",
    heading: "Every screen answers a doubt",
    paragraphs: [
      "Every design decision was made through one filter: does this remove a reason not to buy? Vehicle history upfront. Condition reports before pricing. Full cost breakdown before checkout.",
      "The UI was built to answer questions the buyer hadn't asked yet.",
    ],
    stages: [
      { number: "01", name: "Search", detail: "Filters, media, specs" },
      { number: "02", name: "Verify", detail: "History & condition report" },
      { number: "03", name: "Purchase", detail: "Seamless order completion" },
      { number: "04", name: "Finance", detail: "Secured through partner banks" },
      { number: "05", name: "Deliver", detail: "Door-to-door, paperwork done" },
    ],
    principles: [
      {
        name: "Certification",
        detail: "Every vehicle carries a full inspection report and history summary, visible before the price, not after.",
      },
      {
        name: "Transparency",
        detail: "Fixed pricing. No negotiation, no hidden fees. The total cost is shown at every step of the flow.",
      },
      {
        name: "Control",
        detail: "Buyers choose delivery date, track their order, and manage ownership transfer through a personal dashboard.",
      },
    ],
  },

  platform: {
    eyebrow: "04 — The platform",
    heading: "One integrated system",
    paragraph:
      "We built the complete platform — marketplace, buyer dashboard, real-time inventory, secure checkout, logistics coordination, and after-sales — within a single integrated system.",
    columns: [
      {
        heading: "Marketplace",
        detail: "Advanced search, high-res media, vehicle pages, and real-time inventory across multiple dealers.",
      },
      {
        heading: "Transactions",
        detail: "Secure checkout, financing options, buyer dashboard, and full order management.",
      },
      {
        heading: "Logistics",
        detail: "Delivery scheduling, registration paperwork, ownership transfer — coordinated end-to-end.",
      },
      {
        heading: "Backend",
        detail: "Dealer inventory tools, dynamic pricing logic, order processing, and after-sales support workflows.",
      },
    ],
    builtWith: ["WordPress", "Elementor", "WooCommerce", "Google Ads", "WP REST API"],
  },

  result: {
    eyebrow: "05 — The result",
    heading: "Greece's first fully digital car purchase",
    paragraphs: [
      "Buyers across Greece can now complete a full vehicle purchase entirely online — from search to doorstep. Certified condition reports and transparent pricing eliminated the uncertainty that defined used-car buying.",
      "When trust is designed into every step, it stops being a feature. It becomes the product.",
    ],
  },
} as const;

export type CardomCaseStudy = typeof cardomCaseStudy;
