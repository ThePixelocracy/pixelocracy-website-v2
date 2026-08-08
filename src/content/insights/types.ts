/**
 * The Insights content schema. One plain TypeScript object per article —
 * the same pattern every other section of the site already uses for
 * content (`case-studies.ts`, `pillar-pages.ts`, etc.), not a CMS, not a
 * database, not markdown/MDX. Adding a future article means adding one
 * file that satisfies `Insight` to `src/content/insights/articles/` and
 * one line in `src/content/insights/index.ts` — no template changes.
 */

export type InsightBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; style: "bullet" | "number"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; text: string };

export type Insight = {
  slug: string;
  title: string;
  /** Short summary shown on the archive card and in the article's title block. */
  excerpt: string;
  /** Drawn from `src/content/pillars.ts` names, or "Company" — see `standards/blog-post.md`'s own observation that categories should reuse the approved pillar list. */
  category: string;
  /** ISO date, e.g. "2026-08-07". */
  date: string;
  /** Defaults to "Pixelocracy Team" at render time when omitted. */
  author?: string;
  heroImage: string;
  heroImageAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  content: InsightBlock[];
};
