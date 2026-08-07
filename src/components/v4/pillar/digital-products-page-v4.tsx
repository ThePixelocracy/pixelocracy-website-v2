import { DigitalProductsHeroV4 } from "@/components/v4/pillar/digital-products-hero-v4";
import { DigitalProductsWhyUsV4 } from "@/components/v4/pillar/digital-products-why-us-v4";
import { DigitalProductsObjectionsV4 } from "@/components/v4/pillar/digital-products-objections-v4";
import { DigitalProductsExperienceV4 } from "@/components/v4/pillar/digital-products-experience-v4";
import { DigitalProductsIncludedV4 } from "@/components/v4/pillar/digital-products-included-v4";
import { PillarCtaV4 } from "@/components/v4/pillar/pillar-cta-v4";
import type { PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type DigitalProductsPageV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
  allPillars: Pillar[];
};

/**
 * Digital Products & UI/UX — a page-specific composition (human needs →
 * coherent interactions → products people adopt), not a fourth repeat of
 * the pillar template with new copy. Its own hero/why-us/objections/
 * experience/included sections, sharing a human/interaction-led motion
 * vocabulary (rough-to-refined typography, a hover-responsive meta panel,
 * a highlight sweep on feedback, a fill-meter for real adoption proof, a
 * completing step-marker) introduced specifically for this page,
 * bookended with the shared `PillarCtaV4` per the established cross-pillar
 * CTA convention.
 */
export function DigitalProductsPageV4({ pillar, content, allPillars }: DigitalProductsPageV4Props) {
  return (
    <>
      <DigitalProductsHeroV4 pillar={pillar} content={content} />
      <DigitalProductsWhyUsV4 content={content} />
      <DigitalProductsObjectionsV4 content={content} />
      <DigitalProductsExperienceV4 content={content} />
      <DigitalProductsIncludedV4 content={content} />
      <PillarCtaV4 content={content} currentSlug={pillar.slug} allPillars={allPillars} />
    </>
  );
}
