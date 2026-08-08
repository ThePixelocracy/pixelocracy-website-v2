import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/content/insights/types";
import { estimateReadingTime } from "@/lib/reading-time";

type InsightCardV4Props = {
  insight: Insight;
  /** The first/largest card in the grid renders bigger, mirroring the archive's own "impact drives size" convention. */
  featured?: boolean;
};

/**
 * A single archive card — image, category, title, excerpt, and a
 * publish-date/reading-time meta line, all wrapped in one link. The image
 * is a plain `<Image>` with no motion gating: always visible, no hover
 * dependency, per the /work archive's own established fix.
 */
export function InsightCardV4({ insight, featured = false }: InsightCardV4Props) {
  const readingTime = estimateReadingTime(insight);
  const formattedDate = new Date(insight.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/insights/${insight.slug}`} className="group flex flex-col gap-4">
      <div
        className={`relative w-full overflow-hidden bg-muted ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        <Image
          src={insight.heroImage}
          alt={insight.heroImageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs tracking-[0.1em] text-primary uppercase">{insight.category}</span>
        <h2
          className={`font-display font-medium text-foreground ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}
        >
          {insight.title}
        </h2>
        <p className={`text-foreground ${featured ? "max-w-xl text-base" : "text-sm"}`}>{insight.excerpt}</p>
        <span className="font-mono text-xs text-muted-foreground uppercase">
          {formattedDate} · {readingTime} min read
        </span>
      </div>
    </Link>
  );
}
