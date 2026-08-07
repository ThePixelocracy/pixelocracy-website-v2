import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarPageTemplate } from "@/components/pillar-page-template";
import { pillars } from "@/content/pillars";
import { pillarPages } from "@/content/pillar-pages";

type PillarRouteParams = {
  slug: string;
};

// "strategy-advisory" is excluded — it now has its own static route at
// src/app/services/strategy-advisory/page.tsx (the V4 pillar-page template),
// which takes routing precedence over this dynamic segment. Generating it
// here too would conflict with that static route at build time.
export function generateStaticParams(): PillarRouteParams[] {
  return pillars.filter((pillar) => pillar.slug !== "strategy-advisory").map((pillar) => ({ slug: pillar.slug }));
}

async function getPillar(slug: string) {
  const pillar = pillars.find((item) => item.slug === slug);
  const content = pillarPages[slug];
  if (!pillar || !content) return null;
  return { pillar, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PillarRouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = await getPillar(slug);
  if (!found) return {};

  return {
    title: found.pillar.heading,
    description: found.content.subheading,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function PillarPage({ params }: { params: Promise<PillarRouteParams> }) {
  const { slug } = await params;
  const found = await getPillar(slug);
  if (!found) notFound();

  return <PillarPageTemplate pillar={found.pillar} content={found.content} />;
}
