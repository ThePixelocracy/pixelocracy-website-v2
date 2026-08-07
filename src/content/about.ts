/**
 * About page content. Every fact here is sourced from an already-approved
 * repository document — nothing invented:
 *
 * - `knowledge/01_company.md` (itself extracted from
 *   `docs/content/Pixelocracy_Master_Plan_Content.docx` §D3, "Who We Are",
 *   "What We Believe", "Who We Work With", "Core Principles") — mission,
 *   vision, belief, who-we-work-with, and the ten core principles are
 *   verbatim from this file.
 * - `docs/content/Pixelocracy_Master_Plan_Content.docx`, "Cross-Pillar
 *   Combinations" section — the six combination lines are verbatim from
 *   there; this content has not been used anywhere else on the site yet.
 * - `src/content/pillars.ts` — the five pillar differentiator lines are
 *   the same already-approved copy shown on the homepage's Five Pillars
 *   index, reused here (not duplicated as a full section) to describe how
 *   the disciplines work together.
 * - `src/content/proof-points-v4.ts` — a subset of the same already-
 *   approved figures used on the homepage, woven into narrative sentences
 *   rather than repeated as a standalone monumental-numeral section.
 * - The V4 homepage hero (`hero-v4.tsx`) — "Built for organizations that
 *   need more than a vendor" is reused verbatim, already-shipped copy.
 *
 * Team: only verified people. All three titles (Chris Andreikos — General
 * Manager, Filippos Zakopoulos — Management Board, Michalis Petychakis —
 * Management Board) are sourced from the approved legacy About page
 * (`design/About - Desktop.png`), confirmed as the authoritative source
 * for leadership titles. Names, images and order are unchanged from the
 * approved About page implementation.
 */

export type AboutTeamMember = {
  name: string;
  role?: string;
  image: string;
};

export type PillarCombination = {
  pair: string;
  text: string;
};

export type AboutEvidencePoint = {
  value: string;
  label: string;
};

export const aboutContent = {
  hero: {
    eyebrow: "About Pixelocracy",
    heading: "Different disciplines. One accountable team.",
    subheading: "Built for organizations that need more than a vendor.",
    paragraphs: [
      "Pixelocracy is a technology and digital transformation partner that helps organizations solve complex business challenges through strategy, AI, engineering, digital products, and organizational enablement.",
      "We combine business thinking with technical execution, allowing strategy, design, engineering, and operations to work as one integrated team. Our goal is not simply to deliver projects, but to help organizations build long-term capability and measurable business value.",
    ],
  },

  belief: {
    eyebrow: "What we believe",
    heading: "Technology alone doesn't create transformation.",
    mission:
      "To help ambitious organizations turn business challenges into practical technology solutions that improve efficiency, create measurable value, and build lasting capability, leaving every organization stronger than we found it.",
    vision: "To eliminate mediocrity in technology adoption.",
    paragraph:
      "Real change happens when business strategy, people, processes, data, design, and engineering evolve together. We build for long-term outcomes, not short-term deliverables.",
  },

  disciplines: {
    eyebrow: "Five disciplines, one team",
    heading: "The pillars don't hand off. They combine.",
    intro:
      "Together, strategy, data, engineering, product and capability provide an end-to-end transformation framework — not five separate service lines that meet only at the invoice.",
    combinations: [
      { pair: "Strategy + Data", text: "Define the KPI, then instrument the business to hit it." },
      { pair: "Data + Engineering", text: "Build the data pipelines that feed decision systems." },
      { pair: "Engineering + Products", text: "Technology that's fast and beautiful." },
      { pair: "Products + Capability", text: "Your team builds products confidently." },
      { pair: "Capability + Strategy", text: "Transformation that lasts because your people own it." },
      {
        pair: "All five pillars",
        text: "End-to-end transformation: strategy, technology, product, people, and lasting capability.",
      },
    ] satisfies PillarCombination[],
  },

  evidence: {
    eyebrow: "Results, not claims",
    heading: "Scale, not slides.",
    intro:
      "The same team that writes the strategy stays through the build, the launch and what happens after — across national platforms and ambitious digital products alike.",
    points: [
      { value: "9M", label: "citizen users on a national platform we designed and built" },
      { value: "€400M", label: "in yearly operational savings, same platform" },
      { value: "95%", label: "adoption in month one on a workflow platform (typical is 20–30%)" },
      { value: "0", label: "security breaches in 2 years on mission-critical infrastructure" },
    ] satisfies AboutEvidencePoint[],
  },

  howWeWork: {
    eyebrow: "How we work",
    heading: "Who we partner with",
    whoWeWorkWith:
      "We partner with ambitious organizations that view technology as a strategic business capability. Our experience spans government, mobility, energy, healthcare, telecommunications, financial services, retail, insurance, FMCG and enterprise organizations, helping them navigate complex digital transformation initiatives with confidence. We work with leaders who value long-term partnerships, measurable outcomes and sustainable transformation over short-term delivery.",
    principles: [
      "Business outcomes before technology",
      "Strategy must lead to execution",
      "AI should solve practical business problems",
      "Design and engineering work as one integrated team",
      "Security is built in from the beginning",
      "Build capability, not dependency",
      "Deliver practical, production-ready solutions",
      "Simplicity beats unnecessary complexity",
      "Measure success through real-world adoption and business value",
      "Leave every organization stronger than we found it",
    ],
  },

  team: {
    eyebrow: "Leadership",
    heading: "The people behind the work",
    intro: "The team that shapes Pixelocracy's approach and stays accountable for what it delivers.",
    members: [
      { name: "Chris Andreikos", role: "General Manager", image: "/team/christos-andreikos.jpg" },
      { name: "Filippos Zakopoulos", role: "Management Board", image: "/team/filippos-zakopoulos.jpg" },
      { name: "Michalis Petychakis", role: "Management Board", image: "/team/michalis-petychakis.jpg" },
    ] satisfies AboutTeamMember[],
  },

  cta: {
    heading: "Looking for a technology partner, not a vendor?",
    paragraph:
      "Tell us what you're building or trying to fix. We'll tell you honestly whether and how we can help.",
  },
};
