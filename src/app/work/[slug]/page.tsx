import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CardomPageV4 } from "@/components/v4/case-study/cardom-page-v4";
import { cardomCaseStudy } from "@/content/cardom-case-study";
import { HhgPageV4 } from "@/components/v4/case-study/hhg-page-v4";
import { hhgCaseStudy } from "@/content/hhg-case-study";

type CaseStudyRouteParams = {
  slug: string;
};

// Each built case study gets an entry here — content + hero copy for
// metadata, and the page component to render. Any slug not listed
// (govgr, wired-greece, apeiron-ventures, aegean-motorway) 404s honestly
// rather than rendering a stub — none of those routes are linked from
// anywhere in the site yet (see `work-archive.ts`).
const CASE_STUDIES = {
  [cardomCaseStudy.slug]: {
    title: cardomCaseStudy.hero.title,
    description: cardomCaseStudy.hero.subheading,
    Page: CardomPageV4,
  },
  [hhgCaseStudy.slug]: {
    title: hhgCaseStudy.hero.title,
    description: hhgCaseStudy.hero.subheading,
    Page: HhgPageV4,
  },
} as const;

export function generateStaticParams(): CaseStudyRouteParams[] {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseStudyRouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];
  if (!entry) return {};

  return {
    title: `${entry.title} — Case Study`,
    description: entry.description,
    alternates: {
      canonical: `/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<CaseStudyRouteParams> }) {
  const { slug } = await params;
  const entry = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];
  if (!entry) notFound();

  const { Page } = entry;
  return <Page />;
}
