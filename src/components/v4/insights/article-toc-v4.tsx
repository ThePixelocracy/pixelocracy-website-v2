"use client";

import { useEffect, useState } from "react";
import type { InsightBlock } from "@/content/insights/types";
import { slugify } from "@/lib/slugify";

/**
 * The desktop-only "Contents" sidebar — a flat, numbered, anchor-linked
 * outline of the article's headings, current section highlighted via a
 * scroll listener (per `standards/blog-post.md` and `BUILD_PLAN.md`'s own
 * note that this needs one). Dropped entirely on mobile, not converted to
 * an accordion — an explicit removal per that same spec, not a
 * simplification.
 */
export function ArticleTocV4({ blocks }: { blocks: InsightBlock[] }) {
  const headings = blocks.filter((block): block is Extract<InsightBlock, { type: "heading" }> => block.type === "heading");
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(slugify(heading.text));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="hidden lg:sticky lg:top-28 lg:block lg:w-64 lg:shrink-0">
      <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">Contents</span>
      <ol className="mt-4 flex flex-col gap-3">
        {headings.map((heading, index) => {
          const id = slugify(heading.text);
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex gap-3 text-sm ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
