import type { Metadata } from "next";
import { DigitalProductsPageV4 } from "@/components/v4/pillar/digital-products-page-v4";
import { pillars } from "@/content/pillars";
import { pillarPages } from "@/content/pillar-pages";

const SLUG = "digital-products";

const pillar = pillars.find((item) => item.slug === SLUG)!;
const content = pillarPages[SLUG];

export const metadata: Metadata = {
  title: pillar.heading,
  description: content.subheading,
  alternates: {
    canonical: `/services/${SLUG}`,
  },
};

/**
 * The fourth V4 pillar page — a static, literal route segment that takes
 * routing precedence over `services/[slug]` for this exact path (the
 * existing canonical slug, "digital-products", already used throughout
 * `pillars.ts`/`pillar-pages.ts`), so the remaining pillar keeps rendering
 * through the legacy template untouched. See `DigitalProductsPageV4` for
 * this page's own composition.
 */
export default function DigitalProductsPage() {
  return <DigitalProductsPageV4 pillar={pillar} content={content} allPillars={pillars} />;
}
