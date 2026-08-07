import { CaseStudyHeroV4 } from "@/components/v4/case-study/case-study-hero-v4";
import { CaseStudyComparisonV4 } from "@/components/v4/case-study/case-study-comparison-v4";
import { CardomRelationshipV4 } from "@/components/v4/case-study/cardom-relationship-v4";
import { CaseStudyJourneyV4 } from "@/components/v4/case-study/case-study-journey-v4";
import { CaseStudyPlatformV4 } from "@/components/v4/case-study/case-study-platform-v4";
import { CaseStudyResultV4 } from "@/components/v4/case-study/case-study-result-v4";
import { CaseStudyNextV4 } from "@/components/v4/case-study/case-study-next-v4";
import { cardomCaseStudy } from "@/content/cardom-case-study";

/**
 * The Cardom / AVIS case study — a wholly new V4 experience built from the
 * shared case-study section components, populated only with verified
 * content from `src/content/cardom-case-study.ts`. No V3 layout, numbered
 * section chrome, dark component gallery, phone-mockup arrangement, or
 * wavy dividers carried over — see that file's header for sourcing.
 */
export function CardomPageV4() {
  return (
    <>
      <CaseStudyHeroV4
        eyebrow={cardomCaseStudy.hero.eyebrow}
        title={cardomCaseStudy.hero.title}
        subheading={cardomCaseStudy.hero.subheading}
        paragraph={cardomCaseStudy.hero.paragraph}
        facts={[...cardomCaseStudy.hero.facts]}
        image="/case-studies/cardom-thumbnail.png"
        imageAlt="Cardom — the certified used-car marketplace built for AVIS"
        liveUrl={cardomCaseStudy.liveUrl}
        liveLabel={cardomCaseStudy.liveLabel}
      />

      <CaseStudyComparisonV4
        eyebrow={cardomCaseStudy.market.eyebrow}
        heading={cardomCaseStudy.market.heading}
        paragraphs={[...cardomCaseStudy.market.paragraphs]}
        before={{
          heading: cardomCaseStudy.market.comparison.before.heading,
          items: [...cardomCaseStudy.market.comparison.before.items],
        }}
        after={{
          heading: cardomCaseStudy.market.comparison.after.heading,
          items: [...cardomCaseStudy.market.comparison.after.items],
        }}
      />

      <CardomRelationshipV4 />

      <CaseStudyJourneyV4
        eyebrow={cardomCaseStudy.journey.eyebrow}
        heading={cardomCaseStudy.journey.heading}
        paragraphs={[...cardomCaseStudy.journey.paragraphs]}
        stages={[...cardomCaseStudy.journey.stages]}
        principles={[...cardomCaseStudy.journey.principles]}
      />

      <CaseStudyPlatformV4
        eyebrow={cardomCaseStudy.platform.eyebrow}
        heading={cardomCaseStudy.platform.heading}
        paragraph={cardomCaseStudy.platform.paragraph}
        columns={[...cardomCaseStudy.platform.columns]}
        builtWith={[...cardomCaseStudy.platform.builtWith]}
        image="/case-studies/cardom-hero.png"
        imageAlt="Cardom vehicle detail page, showing certified condition report and pricing"
      />

      <CaseStudyResultV4
        eyebrow={cardomCaseStudy.result.eyebrow}
        heading={cardomCaseStudy.result.heading}
        paragraphs={[...cardomCaseStudy.result.paragraphs]}
        liveUrl={cardomCaseStudy.liveUrl}
        liveLabel={cardomCaseStudy.liveLabel}
      />

      <CaseStudyNextV4 />
    </>
  );
}
