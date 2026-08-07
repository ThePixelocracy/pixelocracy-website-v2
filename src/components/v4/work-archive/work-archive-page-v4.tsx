import { WorkArchiveHeroV4 } from "@/components/v4/work-archive/work-archive-hero-v4";
import { WorkArchiveListV4 } from "@/components/v4/work-archive/work-archive-list-v4";
import { WorkArchiveCtaV4 } from "@/components/v4/work-archive/work-archive-cta-v4";

/**
 * The Case Studies Archive — a scale-ordered editorial index of the six
 * verified projects in the repository, not a portfolio grid and not the
 * old V3 archive's bordered card layout.
 */
export function WorkArchivePageV4() {
  return (
    <>
      <WorkArchiveHeroV4 />
      <WorkArchiveListV4 />
      <WorkArchiveCtaV4 />
    </>
  );
}
