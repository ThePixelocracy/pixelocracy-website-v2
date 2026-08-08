import { InsightsHeroV4 } from "@/components/v4/insights/insights-hero-v4";
import { InsightsGridV4 } from "@/components/v4/insights/insights-grid-v4";

/**
 * The Insights archive — the canonical `/insights` landing page, composed
 * the same way the other one-off V4 pages are (`WorkArchivePageV4`,
 * etc.): a page.tsx that renders this composer directly, no template
 * layer needed for a single page.
 */
export function InsightsPageV4() {
  return (
    <>
      <InsightsHeroV4 />
      <InsightsGridV4 />
    </>
  );
}
