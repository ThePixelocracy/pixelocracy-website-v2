import Link from "next/link";
import type { Insight } from "@/content/insights/types";
import { ArticleHeroV4 } from "@/components/v4/insights/article-hero-v4";
import { ArticleTocV4 } from "@/components/v4/insights/article-toc-v4";
import { ArticleBodyV4 } from "@/components/v4/insights/article-body-v4";
import { ArticleNextPrevV4 } from "@/components/v4/insights/article-next-prev-v4";

type ArticlePageV4Props = {
  insight: Insight;
  previous?: Insight;
  next?: Insight;
};

/**
 * The reusable article template — every future Insight renders through
 * this same composer. Preserves the approved legacy structure (banner →
 * title block → meta → Contents sidebar + body → prev/next) in V4's own
 * typographic language. Section order: `standards/blog-post.md`.
 */
export function ArticlePageV4({ insight, previous, next }: ArticlePageV4Props) {
  return (
    <>
      <ArticleHeroV4 insight={insight} />

      <div className="px-6 py-16 sm:px-8">
        <div className="mx-auto flex max-w-5xl gap-16">
          <ArticleTocV4 blocks={insight.content} />
          <article className="w-full max-w-3xl">
            <ArticleBodyV4 blocks={insight.content} />
          </article>
        </div>

        <ArticleNextPrevV4 previous={previous} next={next} />

        <div className="mx-auto mt-12 max-w-3xl">
          <Link href="/insights" className="font-cta text-sm font-medium text-primary hover:underline">
            ← All Insights
          </Link>
        </div>
      </div>
    </>
  );
}
