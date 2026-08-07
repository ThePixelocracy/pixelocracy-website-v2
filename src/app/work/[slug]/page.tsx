import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CardomPageV4 } from "@/components/v4/case-study/cardom-page-v4";
import { cardomCaseStudy } from "@/content/cardom-case-study";

type CaseStudyRouteParams = {
  slug: string;
};

// Only Cardom has a built individual case-study page so far. Any other
// slug (govgr, wired-greece, apeiron-ventures, hhg, aegean-motorway) 404s
// honestly here rather than rendering a stub — none of those routes are
// linked from anywhere in the site yet (see `work-archive.ts`).
export function generateStaticParams(): CaseStudyRouteParams[] {
  return [{ slug: cardomCaseStudy.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseStudyRouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== cardomCaseStudy.slug) return {};

  return {
    title: `${cardomCaseStudy.hero.title} — Case Study`,
    description: cardomCaseStudy.hero.subheading,
    alternates: {
      canonical: `/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<CaseStudyRouteParams> }) {
  const { slug } = await params;
  if (slug !== cardomCaseStudy.slug) notFound();

  return <CardomPageV4 />;
}
