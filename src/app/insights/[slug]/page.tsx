import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights, getInsightBySlug, getAdjacentInsights } from "@/content/insights";
import { ArticlePageV4 } from "@/components/v4/insights/article-page-v4";

type InsightRouteParams = {
  slug: string;
};

export function generateStaticParams(): InsightRouteParams[] {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<InsightRouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: insight.seoTitle ?? insight.title,
    description: insight.seoDescription ?? insight.excerpt,
    alternates: {
      canonical: `/insights/${slug}`,
    },
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<InsightRouteParams> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const { previous, next } = getAdjacentInsights(slug);
  return <ArticlePageV4 insight={insight} previous={previous} next={next} />;
}
