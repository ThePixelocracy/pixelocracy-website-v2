import { ApeironHeroV4 } from "@/components/v4/case-study/apeiron-hero-v4";
import { ApeironClientV4 } from "@/components/v4/case-study/apeiron-client-v4";
import { ApeironDirectionsV4 } from "@/components/v4/case-study/apeiron-directions-v4";
import { ApeironMotionV4 } from "@/components/v4/case-study/apeiron-motion-v4";
import { CaseStudyPlatformV4 } from "@/components/v4/case-study/case-study-platform-v4";
import { CaseStudyResultV4 } from "@/components/v4/case-study/case-study-result-v4";
import { CaseStudyNextV4 } from "@/components/v4/case-study/case-study-next-v4";
import { apeironCaseStudy } from "@/content/apeiron-case-study";

/**
 * The Apeiron Ventures case study — confident, international,
 * investment-focused. Four bespoke sections (`ApeironHeroV4`,
 * `ApeironClientV4`, `ApeironDirectionsV4`, `ApeironMotionV4`) carry
 * Apeiron's own verified brand red and its own real, approved design
 * concept ("infinite" forward motion); the platform, result, and nav
 * sections reuse the same shared systems as every other case study.
 * `CaseStudyPlatformV4` runs without an image or tool pills here — the
 * legacy design's own tool list is identical, word-for-word, to Cardom's
 * (an unedited copy-paste artifact, not verified Apeiron fact — see
 * `apeiron-case-study.ts`). `nextProject` points at WIRED Greece without
 * touching that page.
 */
export function ApeironPageV4() {
  return (
    <>
      <ApeironHeroV4 />

      <ApeironClientV4 />

      <ApeironDirectionsV4 />

      <ApeironMotionV4 />

      <CaseStudyPlatformV4
        eyebrow={apeironCaseStudy.platform.eyebrow}
        heading={apeironCaseStudy.platform.heading}
        paragraph={apeironCaseStudy.platform.paragraph}
        columns={[...apeironCaseStudy.platform.columns]}
      />

      <CaseStudyResultV4
        eyebrow={apeironCaseStudy.result.eyebrow}
        heading={apeironCaseStudy.result.heading}
        paragraphs={[...apeironCaseStudy.result.paragraphs]}
        liveUrl={apeironCaseStudy.liveUrl}
        liveLabel={apeironCaseStudy.liveLabel}
      />

      <CaseStudyNextV4 nextProject={{ name: "WIRED Greece", href: "/work/wired-greece" }} />
    </>
  );
}
