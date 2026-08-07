import type { Metadata } from "next";
import { DataAiAutomationPageV4 } from "@/components/v4/pillar/data-ai-automation-page-v4";
import { pillars } from "@/content/pillars";
import { pillarPages } from "@/content/pillar-pages";

const SLUG = "data-ai-automation";

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
 * The second V4 pillar page — a static, literal route segment that takes
 * routing precedence over `services/[slug]` for this exact path, so the
 * remaining three pillars keep rendering through the legacy template
 * untouched. See `DataAiAutomationPageV4` for this page's own composition.
 */
export default function DataAiAutomationPage() {
  return <DataAiAutomationPageV4 pillar={pillar} content={content} allPillars={pillars} />;
}
