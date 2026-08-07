import { GovgrHeroV4 } from "@/components/v4/case-study/govgr-hero-v4";
import { GovgrConvergenceV4 } from "@/components/v4/case-study/govgr-convergence-v4";
import { CaseStudyComparisonV4 } from "@/components/v4/case-study/case-study-comparison-v4";
import { CaseStudyShowcaseV4 } from "@/components/v4/case-study/case-study-showcase-v4";
import { CaseStudyPlatformV4 } from "@/components/v4/case-study/case-study-platform-v4";
import { CaseStudyResultV4 } from "@/components/v4/case-study/case-study-result-v4";
import { CaseStudyNextV4 } from "@/components/v4/case-study/case-study-next-v4";
import { govgrCaseStudy } from "@/content/govgr-case-study";

/**
 * The gov.gr case study — Pixelocracy's most heavily verified case study
 * (see `src/content/govgr-case-study.ts`), given its own flagship
 * composition rather than the shared hero every other case study reuses:
 * a bespoke full-bleed `GovgrHeroV4` leading with the platform's three
 * verified scale figures, a bespoke radial `GovgrConvergenceV4` ("many
 * services, one point of access") replacing Cardom/HHG/Aegean's own
 * central visuals, and a full-width `CaseStudyShowcaseV4` moment for the
 * real gov.gr homepage screenshot — a new shared component, since a
 * landscape screenshot doesn't fit the portrait slot `CaseStudyPlatformV4`
 * assumes. The comparison, platform, result, and nav sections reuse the
 * same shared systems as Cardom/HHG/Aegean. `nextProject` points at
 * Aegean Motorway without touching that page.
 */
export function GovgrPageV4() {
  return (
    <>
      <GovgrHeroV4 />

      <GovgrConvergenceV4 />

      <CaseStudyComparisonV4
        eyebrow={govgrCaseStudy.citizenExperience.eyebrow}
        heading={govgrCaseStudy.citizenExperience.heading}
        paragraphs={[...govgrCaseStudy.citizenExperience.paragraphs]}
        before={{
          heading: govgrCaseStudy.citizenExperience.comparison.before.heading,
          items: [...govgrCaseStudy.citizenExperience.comparison.before.items],
        }}
        after={{
          heading: govgrCaseStudy.citizenExperience.comparison.after.heading,
          items: [...govgrCaseStudy.citizenExperience.comparison.after.items],
        }}
      />

      <CaseStudyShowcaseV4
        eyebrow={govgrCaseStudy.showcase.eyebrow}
        caption={govgrCaseStudy.showcase.caption}
        image="/case-studies/govgr-thumbnail1.png"
        imageAlt="The real gov.gr homepage, showing the mAigov digital assistant and citizen search"
        desktopAspectClassName="sm:aspect-[1920/946]"
        mobileAspectClassName="aspect-[4/3]"
        mobileObjectPositionClassName="object-left-top"
      />

      <CaseStudyPlatformV4
        eyebrow={govgrCaseStudy.role.eyebrow}
        heading={govgrCaseStudy.role.heading}
        paragraph={govgrCaseStudy.role.paragraph}
        columns={[...govgrCaseStudy.role.columns]}
      />

      <CaseStudyResultV4
        eyebrow={govgrCaseStudy.result.eyebrow}
        heading={govgrCaseStudy.result.heading}
        paragraphs={[...govgrCaseStudy.result.paragraphs]}
        liveUrl="https://www.gov.gr"
        liveLabel="Visit the live platform"
      />

      <CaseStudyNextV4 nextProject={{ name: "Aegean Motorway", href: "/work/aegean-motorway" }} />
    </>
  );
}
