"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ComparisonColumn = {
  heading: string;
  items: string[];
};

type CaseStudyComparisonV4Props = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  before: ComparisonColumn;
  after: ComparisonColumn;
};

/**
 * Shared "problem" section for a case study — narrative copy beside a
 * before/after contrast (the two-column comparison pattern flagged, but
 * never named, in `standards/case-study.md`). Rebuilt in V4's flat-block
 * vocabulary: no borders, no hard shadows — the "after" column is a solid
 * primary-colour block, not a bordered card.
 */
export function CaseStudyComparisonV4({ eyebrow, heading, paragraphs, before, after }: CaseStudyComparisonV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-base text-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: fast ?? 0.55, ease: "easeOut" }}
            className="flex flex-col gap-5 bg-muted p-8"
          >
            <h3 className="font-display text-lg font-medium text-foreground">{before.heading}</h3>
            <ul className="flex flex-col gap-3">
              {before.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-muted-foreground/50" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: fast ?? 0.55, delay: fast ? 0 : 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5 bg-primary p-8"
          >
            <h3 className="font-display text-lg font-medium text-white">{after.heading}</h3>
            <ul className="flex flex-col gap-3">
              {after.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
