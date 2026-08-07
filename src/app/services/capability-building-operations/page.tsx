import type { Metadata } from "next";
import { CapabilityPageV4 } from "@/components/v4/pillar/capability-page-v4";
import { pillars } from "@/content/pillars";
import { pillarPages } from "@/content/pillar-pages";

const SLUG = "capability-building-operations";

const pillar = pillars.find((item) => item.slug === SLUG)!;
const content = pillarPages[SLUG];

export const metadata: Metadata = {
  title: pillar.heading,
  description: content.subheading,
  alternates: {
    canonical: `/services/${SLUG}`,
  },
};

/**
 * The fifth and final V4 pillar page — a static, literal route segment
 * that takes routing precedence over `services/[slug]` for this exact
 * path (the existing canonical slug, "capability-building-operations",
 * already used throughout `pillars.ts`/`pillar-pages.ts`). With this page
 * shipped, `services/[slug]` has no remaining pillar slugs to serve. See
 * `CapabilityPageV4` for this page's own composition.
 */
export default function CapabilityBuildingPage() {
  return <CapabilityPageV4 pillar={pillar} content={content} allPillars={pillars} />;
}
