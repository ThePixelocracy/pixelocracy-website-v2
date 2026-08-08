import Image from "next/image";
import type { InsightBlock } from "@/content/insights/types";
import { slugify } from "@/lib/slugify";

/**
 * Renders an article's `content` blocks in order. Supports the content
 * structures requested for the Insights system: headings, paragraphs,
 * lists, pull quotes, captioned images, and callouts. Heading anchors use
 * the same `slugify` as `ArticleTocV4`, so the desktop Contents sidebar's
 * links always resolve to a real heading in this same render.
 */
export function ArticleBodyV4({ blocks }: { blocks: InsightBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                id={slugify(block.text)}
                className="font-display mt-4 scroll-mt-28 text-2xl font-medium text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="text-base leading-relaxed text-foreground">
                {block.text}
              </p>
            );
          case "list":
            return block.style === "number" ? (
              <ol key={index} className="flex list-decimal flex-col gap-2 pl-5 text-base text-foreground">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="flex list-disc flex-col gap-2 pl-5 text-base text-foreground">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={index} className="border-l-2 border-primary py-2 pl-6">
                <p className="font-display text-xl leading-snug font-medium text-foreground italic sm:text-2xl">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.attribution && (
                  <cite className="mt-3 block font-mono text-xs text-muted-foreground uppercase not-italic">
                    {block.attribution}
                  </cite>
                )}
              </blockquote>
            );
          case "image":
            return (
              <figure key={index} className="flex flex-col gap-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image src={block.src} alt={block.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
                </div>
                {block.caption && <figcaption className="text-sm text-muted-foreground">{block.caption}</figcaption>}
              </figure>
            );
          case "callout":
            return (
              <div key={index} className="bg-muted p-6 text-base text-foreground">
                {block.text}
              </div>
            );
        }
      })}
    </div>
  );
}
