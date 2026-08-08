import type { Insight, InsightBlock } from "@/content/insights/types";

const WORDS_PER_MINUTE = 200;

function wordsInBlock(block: InsightBlock): number {
  switch (block.type) {
    case "heading":
    case "paragraph":
    case "callout":
      return block.text.trim().split(/\s+/).filter(Boolean).length;
    case "quote":
      return block.text.trim().split(/\s+/).filter(Boolean).length;
    case "list":
      return block.items.reduce((sum, item) => sum + item.trim().split(/\s+/).filter(Boolean).length, 0);
    case "image":
      return 0;
  }
}

/** Automatically derived from word count — never stored, never manually maintained per article. */
export function estimateReadingTime(insight: Pick<Insight, "content">): number {
  const words = insight.content.reduce((sum, block) => sum + wordsInBlock(block), 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
