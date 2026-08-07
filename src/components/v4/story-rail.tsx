"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "trusted", label: "Trusted" },
  { id: "capabilities", label: "Capabilities" },
  { id: "manifesto", label: "Manifesto" },
  { id: "results", label: "Results" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

/**
 * A persistent editorial progress rail, not a repeat of the site's own nav:
 * tracks which chapter of the story you're in as you scroll. Desktop only —
 * on mobile it collapses to a slim top progress bar instead of trying to
 * cram the same rail into a much smaller viewport.
 */
export function StoryRail() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((el): el is HTMLElement => Boolean(el));

    // Derived directly from current positions on every scroll/resize rather
    // than an IntersectionObserver callback — that approach only fires when
    // a section newly enters/exits the root margin band, so activeId never
    // clears when nothing is visible (e.g. back at the hero, above the
    // first chapter), leaving the rail stuck highlighting a stale chapter.
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);

      const anchor = window.innerHeight * 0.45;
      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= anchor) {
          current = section.id;
        }
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <nav
        aria-label="Story progress"
        className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
      >
        {chapters.map((chapter) => {
          const isActive = activeId === chapter.id;
          return (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="font-mono group flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase"
            >
              <span
                className={
                  isActive
                    ? "text-foreground opacity-100"
                    : "text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                }
              >
                {chapter.label}
              </span>
              <span
                aria-hidden="true"
                className={isActive ? "h-4 w-0.5 bg-primary" : "h-1.5 w-0.5 bg-border"}
              />
            </a>
          );
        })}
      </nav>

      <div className="fixed top-0 right-0 left-0 z-40 h-0.5 bg-transparent lg:hidden">
        <div
          className="h-full bg-primary"
          style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
        />
      </div>
    </>
  );
}
