import { EngSecHeroV4 } from "@/components/v4/pillar/eng-sec-hero-v4";
import { EngSecWhyUsV4 } from "@/components/v4/pillar/eng-sec-why-us-v4";
import { EngSecObjectionsV4 } from "@/components/v4/pillar/eng-sec-objections-v4";
import { EngSecExperienceV4 } from "@/components/v4/pillar/eng-sec-experience-v4";
import { EngSecIncludedV4 } from "@/components/v4/pillar/eng-sec-included-v4";
import { PillarCtaV4 } from "@/components/v4/pillar/pillar-cta-v4";
import type { PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type EngSecPageV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
  allPillars: Pillar[];
};

/**
 * Engineering & Security — a page-specific composition (complexity →
 * structure → resilience), not the Strategy or Data & AI templates with new
 * copy. Its own hero/why-us/objections/experience/included sections, all
 * sharing one structural/blueprint motion vocabulary (assembling layers,
 * a locking boundary frame, a growing reinforcement bar, closing bracket
 * marks) introduced specifically for this page, bookended with the shared
 * `PillarCtaV4` per the established cross-pillar CTA convention.
 */
export function EngSecPageV4({ pillar, content, allPillars }: EngSecPageV4Props) {
  return (
    <>
      <EngSecHeroV4 pillar={pillar} content={content} />
      <EngSecWhyUsV4 content={content} />
      <EngSecObjectionsV4 content={content} />
      <EngSecExperienceV4 content={content} />
      <EngSecIncludedV4 content={content} />
      <PillarCtaV4 content={content} currentSlug={pillar.slug} allPillars={allPillars} />
    </>
  );
}
