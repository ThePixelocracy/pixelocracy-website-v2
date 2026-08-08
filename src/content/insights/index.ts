import type { Insight } from "@/content/insights/types";

/**
 * Every published Insight, newest first. Empty for now — see the note in
 * this repository's Insights implementation report: no complete,
 * publishable article exists anywhere in the repository yet (the only
 * prior reference, `design/Blog - Desktop.png`, is 100% Lorem Ipsum
 * placeholder copy). Per the standing "never invent client facts,
 * statistics, quotes, or claims" rule, no article was fabricated to fill
 * this array.
 *
 * To publish a new article: add one file under
 * `src/content/insights/articles/` satisfying the `Insight` type, then
 * add it to this array. Nothing else needs to change — the archive grid
 * and article template both render from this list automatically.
 */
export const insights: Insight[] = [];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export function getAdjacentInsights(slug: string): { previous?: Insight; next?: Insight } {
  const index = insights.findIndex((insight) => insight.slug === slug);
  if (index === -1) return {};
  return {
    previous: insights[index + 1],
    next: insights[index - 1],
  };
}
