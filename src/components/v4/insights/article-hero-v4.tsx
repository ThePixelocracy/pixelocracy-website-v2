import Image from "next/image";
import type { Insight } from "@/content/insights/types";
import { estimateReadingTime } from "@/lib/reading-time";
import { ArticleShareV4 } from "@/components/v4/insights/article-share-v4";

/**
 * The article intro — full-bleed banner photo, then a title block (H1 +
 * excerpt + share actions) and a meta row (category + date/reading time),
 * preserving the strongest parts of the approved legacy structure
 * (`standards/blog-post.md`) in V4's own typographic language. Explicitly
 * NOT a Hero variant, per that same spec — kept as its own article-intro
 * component rather than reusing/renaming Hero.
 */
export function ArticleHeroV4({ insight }: { insight: Insight }) {
  const readingTime = estimateReadingTime(insight);
  const formattedDate = new Date(insight.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted sm:aspect-[21/9]">
        <Image
          src={insight.heroImage}
          alt={insight.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="px-6 pt-12 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <div className="flex sm:hidden">
            <ArticleShareV4 title={insight.title} />
          </div>

          <div className="flex items-start justify-between gap-6">
            <h1 className="font-display max-w-2xl text-[clamp(2rem,1.2rem+3.5vw,3.5rem)] leading-[1.05] font-medium text-foreground">
              {insight.title}
            </h1>
            <div className="hidden shrink-0 pt-2 sm:flex">
              <ArticleShareV4 title={insight.title} />
            </div>
          </div>

          <p className="max-w-2xl text-lg text-foreground">{insight.excerpt}</p>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs tracking-[0.08em] text-primary uppercase">
              {insight.category}
            </span>
            <span className="font-mono text-xs text-muted-foreground uppercase">
              Published {formattedDate} · {readingTime} minute read
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
