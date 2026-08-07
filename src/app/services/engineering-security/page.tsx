import type { Metadata } from "next";
import { EngSecPageV4 } from "@/components/v4/pillar/eng-sec-page-v4";
import { pillars } from "@/content/pillars";
import { pillarPages } from "@/content/pillar-pages";

const SLUG = "engineering-security";

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
 * The third V4 pillar page — a static, literal route segment that takes
 * routing precedence over `services/[slug]` for this exact path, so the
 * remaining two pillars keep rendering through the legacy template
 * untouched. See `EngSecPageV4` for this page's own composition.
 */
export default function EngineeringSecurityPage() {
  return <EngSecPageV4 pillar={pillar} content={content} allPillars={pillars} />;
}
