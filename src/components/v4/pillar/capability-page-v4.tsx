import { CapabilityHeroV4 } from "@/components/v4/pillar/capability-hero-v4";
import { CapabilityWhyUsV4 } from "@/components/v4/pillar/capability-why-us-v4";
import { CapabilityObjectionsV4 } from "@/components/v4/pillar/capability-objections-v4";
import { CapabilityExperienceV4 } from "@/components/v4/pillar/capability-experience-v4";
import { CapabilityIncludedV4 } from "@/components/v4/pillar/capability-included-v4";
import { PillarCtaV4 } from "@/components/v4/pillar/pillar-cta-v4";
import type { PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type CapabilityPageV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
  allPillars: Pillar[];
};

/**
 * Capability Building — a page-specific composition (external expertise →
 * embedded practice → independent capability), not a fifth repeat of the
 * pillar template with new copy. Its own hero/why-us/objections/
 * experience/included sections, sharing one "guidance gradually reducing"
 * motion vocabulary (a transfer-then-withdrawal hero, decreasing type
 * scale, a hollow-to-filled marker, a travelling timeline, shrinking
 * running numbers) introduced specifically for this page, bookended with
 * the shared `PillarCtaV4` per the established cross-pillar CTA
 * convention.
 */
export function CapabilityPageV4({ pillar, content, allPillars }: CapabilityPageV4Props) {
  return (
    <>
      <CapabilityHeroV4 pillar={pillar} content={content} />
      <CapabilityWhyUsV4 content={content} />
      <CapabilityObjectionsV4 content={content} />
      <CapabilityExperienceV4 content={content} />
      <CapabilityIncludedV4 content={content} />
      <PillarCtaV4 content={content} currentSlug={pillar.slug} allPillars={allPillars} />
    </>
  );
}
