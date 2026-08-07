import type { Metadata } from "next";
import { PillarPageV4 } from "@/components/v4/pillar/pillar-page-v4";
import { pillars } from "@/content/pillars";
import { pillarPages } from "@/content/pillar-pages";

const SLUG = "strategy-advisory";

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
 * The first V4 pillar page — a static, literal route segment that takes
 * routing precedence over `services/[slug]` for this exact path, so the
 * other four pillars keep rendering through the legacy template untouched.
 * See `PillarPageV4` for the shared, content-driven template this renders.
 */
export default function StrategyAdvisoryPage() {
  return <PillarPageV4 pillar={pillar} content={content} allPillars={pillars} />;
}
