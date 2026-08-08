import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/content/insights/types";

type ArticleNextPrevV4Props = {
  previous?: Insight;
  next?: Insight;
};

/**
 * The closing "Previous / Next" nav — renders only the entries that
 * genuinely exist. With a single published article this renders nothing
 * at all rather than a broken or self-referential link; per
 * `standards/blog-post.md`, this is the only content-navigation
 * mechanism the article template has (no related-articles grid).
 */
export function ArticleNextPrevV4({ previous, next }: ArticleNextPrevV4Props) {
  if (!previous && !next) return null;

  return (
    <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        {previous ? (
          <Link href={`/insights/${previous.slug}`} className="group flex items-center gap-4">
            <div className="relative h-16 w-24 shrink-0 overflow-hidden bg-muted">
              <Image src={previous.heroImage} alt={previous.heroImageAlt} fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-muted-foreground uppercase">Previous</span>
              <span className="font-display font-medium text-foreground group-hover:text-primary">
                {previous.title}
              </span>
            </div>
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link href={`/insights/${next.slug}`} className="group flex items-center gap-4 sm:flex-row-reverse sm:text-right">
            <div className="relative h-16 w-24 shrink-0 overflow-hidden bg-muted">
              <Image src={next.heroImage} alt={next.heroImageAlt} fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-muted-foreground uppercase">Next</span>
              <span className="font-display font-medium text-foreground group-hover:text-primary">{next.title}</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
