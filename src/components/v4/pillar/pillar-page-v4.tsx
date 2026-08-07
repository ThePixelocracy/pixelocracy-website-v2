import { PillarHeroV4 } from "@/components/v4/pillar/pillar-hero-v4";
import { PillarWhyUsV4 } from "@/components/v4/pillar/pillar-why-us-v4";
import { PillarObjectionsV4 } from "@/components/v4/pillar/pillar-objections-v4";
import { PillarExperienceV4 } from "@/components/v4/pillar/pillar-experience-v4";
import { PillarIncludedV4 } from "@/components/v4/pillar/pillar-included-v4";
import { PillarCtaV4 } from "@/components/v4/pillar/pillar-cta-v4";
import type { PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type PillarPageV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
  allPillars: Pillar[];
};

/**
 * The V4 pillar-page template — content-driven from `pillar-pages.ts` /
 * `pillars.ts`, so it is reusable as-is for the remaining four pillars once
 * this one (Strategy & Advisory) is approved. Only `src/app/services/
 * strategy-advisory/page.tsx` wires this up as a live route today; the
 * other four still render through the legacy `[slug]` template until each
 * is explicitly greenlit.
 */
export function PillarPageV4({ pillar, content, allPillars }: PillarPageV4Props) {
  return (
    <>
      <PillarHeroV4 pillar={pillar} content={content} />
      <PillarWhyUsV4 content={content} />
      <PillarObjectionsV4 content={content} />
      <PillarExperienceV4 content={content} />
      <PillarIncludedV4 content={content} />
      <PillarCtaV4 content={content} currentSlug={pillar.slug} allPillars={allPillars} />
    </>
  );
}
