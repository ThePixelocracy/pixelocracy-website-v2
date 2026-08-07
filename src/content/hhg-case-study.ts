/**
 * Hellenic Healthcare Group (HHG) case study — verified content only.
 *
 * Sources (no invented clients, services, metrics, or screens):
 * - `knowledge/07_pixelocracy_implementation_spec.md` (§ homepage "Case
 *   Study Cards List", card 02): the only verified descriptive copy for
 *   this project — heading "Integrated E-Booking System for Medical
 *   Consultations", description "A healthcare platform connecting patients
 *   with certified specialists for real-time appointment scheduling,
 *   secure messaging, and seamless digital consultations."
 * - `src/content/work-archive.ts`: the same project as already shipped in
 *   the live /work archive (slug `hhg`), description lightly tightened
 *   there — used as the newer, already-approved phrasing.
 * - `public/case-studies/hhg-thumbnail.png`: the only real photograph for
 *   this project (a stethoscope on a clinician's coat, HHG's own logo
 *   overlaid) — already in use on /work.
 * - `public/client-logos/hhg_logo-2.svg`: HHG's own official logo asset
 *   (`src/content/client-logos.ts`).
 *
 * Unlike Cardom, no legacy individual case-study design exists for this
 * project (no `design/HHG Case Study - *.png`) and no real product UI
 * screenshot exists anywhere in the repository — only the one lifestyle
 * photograph above. The platform section below is therefore built from
 * Pixelocracy's own verified capability names, not a product screenshot or
 * invented interface.
 *
 * `src/content/pillar-pages.ts`'s "Health Group" proof point ("Employee
 * workflow platform" · "95% adoption in the first month" · "1M+
 * transactions" · "50% effort decrease") is NOT used here: it explicitly
 * describes an internal employee workflow tool, not a patient-facing
 * booking product, and is not confirmed to be the same engagement as this
 * one. Attaching its numbers to this case study would be an unverified
 * claim, not a sourced fact — the same restraint already documented in
 * `work-archive.ts` for this exact reason.
 *
 * No case-study metrics are verified anywhere in the repository for this
 * project — the "Result" section is a qualitative statement only.
 */

export const hhgCaseStudy = {
  slug: "hhg",
  client: "Hellenic Healthcare Group (HHG)",
  industry: "Healthcare",

  hero: {
    eyebrow: "Case study — Healthcare",
    title: "HHG",
    subheading: "An integrated e-booking platform for medical consultations.",
    paragraph:
      "A healthcare platform connecting patients with certified specialists for real-time appointment scheduling, secure messaging, and digital consultations.",
    facts: [
      { label: "Client", value: "Hellenic Healthcare Group" },
      { label: "Industry", value: "Healthcare" },
      { label: "Scope", value: "Booking, messaging, consultations" },
      { label: "Users", value: "Patients & specialists" },
    ],
  },

  problem: {
    eyebrow: "01 — The problem",
    heading: "Coordinating care took a phone call",
    paragraphs: [
      "Booking a specialist consultation traditionally meant calling a front desk, waiting for a callback, and coordinating a time by hand — friction for patients, and repetitive administrative work for the people running the schedule.",
      "HHG needed a single digital path from finding the right specialist to actually being seen, without either side picking up the phone.",
    ],
    comparison: {
      before: {
        heading: "Before",
        items: [
          "Booking required a phone call",
          "Availability confirmed manually",
          "No secure channel to the specialist",
          "Consultations tied to a physical visit",
        ],
      },
      after: {
        heading: "HHG's platform",
        items: [
          "Specialists searchable and bookable online",
          "Real-time appointment scheduling",
          "Secure messaging with your specialist",
          "Digital consultations, not just in-person",
        ],
      },
    },
  },

  connection: {
    eyebrow: "02 — The connection",
    heading: "Every booking is a match, not just a slot",
    paragraph:
      "The platform's core job is a real-time match between a patient and the right certified specialist — then keeping that connection open, securely, from first message to consultation.",
    nodes: {
      from: "Patient",
      to: "Specialist",
    },
    journey: [
      { name: "Find", detail: "Search certified specialists by need" },
      { name: "Book", detail: "Real-time appointment scheduling" },
      { name: "Message", detail: "Secure messaging before the visit" },
      { name: "Consult", detail: "In-person or digital consultation" },
    ],
  },

  platform: {
    eyebrow: "03 — The platform",
    heading: "One system, patients and specialists",
    paragraph:
      "Built as a single connected system rather than separate tools bolted together: scheduling, messaging, and consultation delivery all share the same patient and specialist record.",
    columns: [
      {
        heading: "Specialist directory",
        detail: "Certified specialists, searchable by patients across the group.",
      },
      {
        heading: "Scheduling",
        detail: "Real-time appointment availability and booking.",
      },
      {
        heading: "Messaging",
        detail: "A secure channel between patient and specialist.",
      },
      {
        heading: "Consultations",
        detail: "Digital consultations alongside in-person visits.",
      },
    ],
  },

  result: {
    eyebrow: "04 — The result",
    heading: "A single digital front door to specialist care",
    paragraphs: [
      "Patients across the HHG network can now find a certified specialist, book a real appointment, and message securely before ever picking up the phone.",
      "Coordination that used to run through a front desk now runs through the platform itself.",
    ],
  },
} as const;

export type HhgCaseStudy = typeof hhgCaseStudy;
