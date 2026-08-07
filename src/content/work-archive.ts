import { caseStudies } from "@/content/case-studies";

/**
 * The Case Studies Archive's own project list — deliberately NOT an
 * extension of `caseStudies` in `src/content/case-studies.ts`. That array
 * is iterated over in full by several already-approved, locked surfaces
 * (the V4 homepage's Work section and "Selected work" nav thumbnails, and
 * the locked V2/V3 homepage experiments, one of which destructures it by
 * fixed position). Adding entries there would silently change all of
 * those. This file re-exposes the same three approved projects verbatim
 * (no new copy) and adds three more that only the archive shows.
 *
 * Sources:
 * - Gov.gr, WIRED Greece, Apeiron Ventures: verbatim from `case-studies.ts`
 *   (already-approved copy, already shipped on the homepage).
 * - Cardom, Hellenic Healthcare Group (HHG), Aegean Motorway: sourced from
 *   `knowledge/07_pixelocracy_implementation_spec.md`'s factual record of
 *   the approved legacy Case Studies Archive design — real project
 *   descriptions, not layout description. Only real assets already in
 *   `public/case-studies/` are used; nothing invented.
 * - The gov.gr `pillars` cross-reference is verified by that project being
 *   independently cited as a proof point in three separate pillar pages
 *   (Strategy & Advisory, Digital Products, Engineering & Security) in
 *   `src/content/pillar-pages.ts` — not asserted for any other project,
 *   since no other project is unambiguously cross-referenced that way.
 *   ("Health Group" and "Mobility" proof points elsewhere describe
 *   different, unnamed engagements — not confirmed to be HHG or Aegean
 *   Motorway specifically, so no pillar tag is added for those.)
 *
 * No individual case-study detail page exists yet for any of these six
 * projects (no `src/app/work/[slug]` route). Every project here is
 * therefore presented without a link, rather than linking to a page that
 * doesn't exist yet.
 */

export type ArchiveProject = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imagePosition?: string;
  industry: string;
  /** Only set where independently cross-referenced elsewhere in approved content. */
  pillars?: string[];
};

const additionalProjects: ArchiveProject[] = [
  {
    slug: "cardom",
    name: "Cardom",
    description:
      "A fully digital marketplace for certified used cars — transparent vehicle history, secure checkout, and door-to-door delivery across Greece.",
    image: "/case-studies/cardom-thumbnail.png",
    industry: "Automotive",
  },
  {
    slug: "hhg",
    name: "Hellenic Healthcare Group (HHG)",
    description:
      "An integrated e-booking platform connecting patients with certified specialists for real-time appointment scheduling, secure messaging, and digital consultations.",
    image: "/case-studies/hhg-thumbnail.png",
    industry: "Healthcare",
  },
  {
    slug: "aegean-motorway",
    name: "Aegean Motorway",
    description:
      "A digital platform for the Aegean Motorway delivering real-time traffic updates, live alerts, and reliable information for thousands of daily commuters.",
    image: "/case-studies/aegean-mootorways-thumbnail.png",
    industry: "Mobility",
  },
];

const INDUSTRY_BY_SLUG: Record<string, string> = {
  govgr: "Government",
  "wired-greece": "Media",
  "apeiron-ventures": "Finance",
};

const PILLARS_BY_SLUG: Record<string, string[]> = {
  govgr: ["Strategy & Advisory", "Digital Products", "Engineering & Security"],
};

export const archiveProjects: ArchiveProject[] = [
  ...caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
    name: caseStudy.name,
    description: caseStudy.description,
    image: caseStudy.imageV4 ?? caseStudy.image,
    imagePosition: caseStudy.imagePositionV4,
    industry: INDUSTRY_BY_SLUG[caseStudy.slug] ?? "",
    pillars: PILLARS_BY_SLUG[caseStudy.slug],
  })),
  ...additionalProjects,
];

export const industries = Array.from(new Set(archiveProjects.map((project) => project.industry))).sort();
