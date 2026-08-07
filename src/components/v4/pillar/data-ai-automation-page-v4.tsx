import { DataAiHeroV4 } from "@/components/v4/pillar/data-ai-hero-v4";
import { DataAiWhyUsV4 } from "@/components/v4/pillar/data-ai-why-us-v4";
import { DataAiObjectionsV4 } from "@/components/v4/pillar/data-ai-objections-v4";
import { DataAiExperienceV4 } from "@/components/v4/pillar/data-ai-experience-v4";
import { DataAiIncludedV4 } from "@/components/v4/pillar/data-ai-included-v4";
import { PillarCtaV4 } from "@/components/v4/pillar/pillar-cta-v4";
import type { PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type DataAiAutomationPageV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
  allPillars: Pillar[];
};

/**
 * Data, AI & Automation — a page-specific composition, not the Strategy
 * template with new copy. Its own hero/why-us/objections/experience/
 * included sections (raw signals → connected intelligence → confident
 * action), bookended with the shared `PillarCtaV4` — the one section where
 * reusing Strategy's exact primitive is appropriate, per the established
 * "CTA is reusable at the end of any future page" convention.
 */
export function DataAiAutomationPageV4({ pillar, content, allPillars }: DataAiAutomationPageV4Props) {
  return (
    <>
      <DataAiHeroV4 pillar={pillar} content={content} />
      <DataAiWhyUsV4 content={content} />
      <DataAiObjectionsV4 content={content} />
      <DataAiExperienceV4 content={content} />
      <DataAiIncludedV4 content={content} />
      <PillarCtaV4 content={content} currentSlug={pillar.slug} allPillars={allPillars} />
    </>
  );
}
