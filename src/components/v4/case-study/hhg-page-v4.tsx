import { CaseStudyHeroV4 } from "@/components/v4/case-study/case-study-hero-v4";
import { CaseStudyComparisonV4 } from "@/components/v4/case-study/case-study-comparison-v4";
import { HhgConnectionV4 } from "@/components/v4/case-study/hhg-connection-v4";
import { CaseStudyPlatformV4 } from "@/components/v4/case-study/case-study-platform-v4";
import { CaseStudyResultV4 } from "@/components/v4/case-study/case-study-result-v4";
import { CaseStudyNextV4 } from "@/components/v4/case-study/case-study-next-v4";
import { hhgCaseStudy } from "@/content/hhg-case-study";

/**
 * The Hellenic Healthcare Group (HHG) case study — reuses the shared
 * case-study hero, comparison, platform, result, and nav components built
 * for Cardom, but replaces Cardom's journey timeline with a wholly
 * different, HHG-specific connection concept (`HhgConnectionV4`). No real
 * product screenshot exists for this project (see
 * `src/content/hhg-case-study.ts`), so the platform section runs without
 * an image slot rather than inventing one. `nextProject` points at Cardom
 * — the only other case-study route that genuinely exists — without
 * touching Cardom's own page.
 */
export function HhgPageV4() {
  return (
    <>
      <CaseStudyHeroV4
        eyebrow={hhgCaseStudy.hero.eyebrow}
        title={hhgCaseStudy.hero.title}
        subheading={hhgCaseStudy.hero.subheading}
        paragraph={hhgCaseStudy.hero.paragraph}
        facts={[...hhgCaseStudy.hero.facts]}
        image="/case-studies/hhg-thumbnail.png"
        imageAlt="HHG — Hellenic Healthcare Group's e-booking platform for medical consultations"
        liveUrl="/contact"
        liveLabel="Discuss a project like this"
        liveExternal={false}
      />

      <CaseStudyComparisonV4
        eyebrow={hhgCaseStudy.problem.eyebrow}
        heading={hhgCaseStudy.problem.heading}
        paragraphs={[...hhgCaseStudy.problem.paragraphs]}
        before={{
          heading: hhgCaseStudy.problem.comparison.before.heading,
          items: [...hhgCaseStudy.problem.comparison.before.items],
        }}
        after={{
          heading: hhgCaseStudy.problem.comparison.after.heading,
          items: [...hhgCaseStudy.problem.comparison.after.items],
        }}
      />

      <HhgConnectionV4 />

      <CaseStudyPlatformV4
        eyebrow={hhgCaseStudy.platform.eyebrow}
        heading={hhgCaseStudy.platform.heading}
        paragraph={hhgCaseStudy.platform.paragraph}
        columns={[...hhgCaseStudy.platform.columns]}
      />

      <CaseStudyResultV4
        eyebrow={hhgCaseStudy.result.eyebrow}
        heading={hhgCaseStudy.result.heading}
        paragraphs={[...hhgCaseStudy.result.paragraphs]}
        liveUrl="/contact"
        liveLabel="Discuss a project like this"
        liveExternal={false}
      />

      <CaseStudyNextV4 nextProject={{ name: "Cardom", href: "/work/cardom" }} />
    </>
  );
}
