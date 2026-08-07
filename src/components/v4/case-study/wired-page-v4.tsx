import { WiredHeroV4 } from "@/components/v4/case-study/wired-hero-v4";
import { WiredLegacyV4 } from "@/components/v4/case-study/wired-legacy-v4";
import { CaseStudyComparisonV4 } from "@/components/v4/case-study/case-study-comparison-v4";
import { WiredTypefaceV4 } from "@/components/v4/case-study/wired-typeface-v4";
import { CaseStudyStatsV4 } from "@/components/v4/case-study/case-study-stats-v4";
import { CaseStudyPlatformV4 } from "@/components/v4/case-study/case-study-platform-v4";
import { CaseStudyResultV4 } from "@/components/v4/case-study/case-study-result-v4";
import { CaseStudyNextV4 } from "@/components/v4/case-study/case-study-next-v4";
import { wiredCaseStudy } from "@/content/wired-case-study";

/**
 * The WIRED Greece case study — an editorial feature about an editorial
 * product. A bespoke black-background hero and a bespoke "Joining a
 * Legacy" section (`WiredLegacyV4`, the real article-page screenshot at a
 * slight editorial tilt) open the story; `WiredTypefaceV4` is the central
 * visual concept — the real WIRED Global and WIRED Greece headline pairs
 * shown side by side, Latin beside Greek. The comparison, stats, platform,
 * result, and nav sections reuse the same shared systems as every other
 * case study (`CaseStudyStatsV4` is new here, generalised from the
 * legacy "Dark Showcase" Statistics variant so a future strong-metrics
 * case study can reuse it without inheriting WIRED's specific figures).
 * `nextProject` points at gov.gr without touching that page.
 */
export function WiredPageV4() {
  return (
    <>
      <WiredHeroV4 />

      <WiredLegacyV4 />

      <CaseStudyComparisonV4
        eyebrow={wiredCaseStudy.designSystem.eyebrow}
        heading={wiredCaseStudy.designSystem.heading}
        paragraphs={[...wiredCaseStudy.designSystem.paragraphs]}
        before={{
          heading: wiredCaseStudy.designSystem.comparison.before.heading,
          items: [...wiredCaseStudy.designSystem.comparison.before.items],
        }}
        after={{
          heading: wiredCaseStudy.designSystem.comparison.after.heading,
          items: [...wiredCaseStudy.designSystem.comparison.after.items],
        }}
      />

      <WiredTypefaceV4 />

      <CaseStudyStatsV4
        eyebrow={wiredCaseStudy.build.eyebrow}
        heading={wiredCaseStudy.build.heading}
        paragraph={wiredCaseStudy.build.paragraph}
        stats={[...wiredCaseStudy.build.stats]}
      />

      <CaseStudyPlatformV4
        eyebrow={wiredCaseStudy.platform.eyebrow}
        heading={wiredCaseStudy.platform.heading}
        paragraph={wiredCaseStudy.platform.paragraph}
        columns={[...wiredCaseStudy.platform.columns]}
        builtWith={[...wiredCaseStudy.platform.builtWith]}
      />

      <CaseStudyResultV4
        eyebrow={wiredCaseStudy.result.eyebrow}
        heading={wiredCaseStudy.result.heading}
        paragraphs={[...wiredCaseStudy.result.paragraphs]}
        liveUrl={wiredCaseStudy.liveUrl}
        liveLabel={wiredCaseStudy.liveLabel}
      />

      <CaseStudyNextV4 nextProject={{ name: "gov.gr", href: "/work/govgr" }} />
    </>
  );
}
