import { CaseStudyHeroV4 } from "@/components/v4/case-study/case-study-hero-v4";
import { CaseStudyComparisonV4 } from "@/components/v4/case-study/case-study-comparison-v4";
import { AegeanRouteV4 } from "@/components/v4/case-study/aegean-route-v4";
import { CaseStudyPlatformV4 } from "@/components/v4/case-study/case-study-platform-v4";
import { CaseStudyResultV4 } from "@/components/v4/case-study/case-study-result-v4";
import { CaseStudyNextV4 } from "@/components/v4/case-study/case-study-next-v4";
import { aegeanCaseStudy } from "@/content/aegean-case-study";

/**
 * The Aegean Motorway case study — reuses the shared case-study hero,
 * comparison, platform, result, and nav components, but replaces both
 * Cardom's journey timeline and HHG's connection concept with a wholly
 * different, Aegean-specific visual (`AegeanRouteV4`): a continuously
 * moving road-marking line with waypoint markers, standing for a
 * real-time information feed rather than a discrete step-by-step process.
 * No real product screenshot exists for this project (see
 * `src/content/aegean-case-study.ts`), so the platform section runs
 * without an image slot, same as HHG. `nextProject` points at HHG — the
 * other built case study — without touching HHG's own page.
 */
export function AegeanPageV4() {
  return (
    <>
      <CaseStudyHeroV4
        eyebrow={aegeanCaseStudy.hero.eyebrow}
        title={aegeanCaseStudy.hero.title}
        subheading={aegeanCaseStudy.hero.subheading}
        paragraph={aegeanCaseStudy.hero.paragraph}
        facts={[...aegeanCaseStudy.hero.facts]}
        image="/case-studies/aegean-mootorways-thumbnail.png"
        imageAlt="Aerial night view of the Aegean Motorway, with the Aegean Motorway logo"
        liveUrl="/contact"
        liveLabel="Discuss a project like this"
        liveExternal={false}
      />

      <CaseStudyComparisonV4
        eyebrow={aegeanCaseStudy.problem.eyebrow}
        heading={aegeanCaseStudy.problem.heading}
        paragraphs={[...aegeanCaseStudy.problem.paragraphs]}
        before={{
          heading: aegeanCaseStudy.problem.comparison.before.heading,
          items: [...aegeanCaseStudy.problem.comparison.before.items],
        }}
        after={{
          heading: aegeanCaseStudy.problem.comparison.after.heading,
          items: [...aegeanCaseStudy.problem.comparison.after.items],
        }}
      />

      <AegeanRouteV4 />

      <CaseStudyPlatformV4
        eyebrow={aegeanCaseStudy.platform.eyebrow}
        heading={aegeanCaseStudy.platform.heading}
        paragraph={aegeanCaseStudy.platform.paragraph}
        columns={[...aegeanCaseStudy.platform.columns]}
      />

      <CaseStudyResultV4
        eyebrow={aegeanCaseStudy.result.eyebrow}
        heading={aegeanCaseStudy.result.heading}
        paragraphs={[...aegeanCaseStudy.result.paragraphs]}
        liveUrl="/contact"
        liveLabel="Discuss a project like this"
        liveExternal={false}
      />

      <CaseStudyNextV4 nextProject={{ name: "HHG", href: "/work/hhg" }} />
    </>
  );
}
