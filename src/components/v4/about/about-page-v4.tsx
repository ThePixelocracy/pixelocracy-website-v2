import { AboutHeroV4 } from "@/components/v4/about/about-hero-v4";
import { AboutBeliefV4 } from "@/components/v4/about/about-belief-v4";
import { AboutDisciplinesV4 } from "@/components/v4/about/about-disciplines-v4";
import { AboutEvidenceV4 } from "@/components/v4/about/about-evidence-v4";
import { AboutHowWeWorkV4 } from "@/components/v4/about/about-how-we-work-v4";
import { AboutTeamV4 } from "@/components/v4/about/about-team-v4";
import { AboutCtaV4 } from "@/components/v4/about/about-cta-v4";

/**
 * The About page — "Different disciplines. One accountable team. Lasting
 * capability." A completely new V4 experience, not the old V3 About page
 * rebuilt with new styling: hero (five pillars converging into one linked
 * row) → belief (mission/vision) → disciplines (how the pillars combine)
 * → evidence (proof woven into the story) → how we work (principles) →
 * team (real, verified people only) → a single closing CTA.
 */
export function AboutPageV4() {
  return (
    <>
      <AboutHeroV4 />
      <AboutBeliefV4 />
      <AboutDisciplinesV4 />
      <AboutEvidenceV4 />
      <AboutHowWeWorkV4 />
      <AboutTeamV4 />
      <AboutCtaV4 />
    </>
  );
}
