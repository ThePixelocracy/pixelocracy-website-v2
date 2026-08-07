"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type CaseStudyStat = {
  value: string;
  label: string;
  detail: string;
  /** A short highlight badge beside the value, e.g. "8x faster". */
  badge?: string;
};

type CaseStudyStatsV4Props = {
  eyebrow: string;
  heading: string;
  paragraph: string;
  stats: CaseStudyStat[];
};

/**
 * Shared dark stats-grid section — the "Statistics" variant of the legacy
 * Dark Showcase pattern (`standards/case-study.md`), used when a project's
 * story has strong quantifiable metrics (WIRED's build numbers here;
 * gov.gr's hero folds its own stats in bespoke instead, since that page's
 * whole opening moment is built around them). Numbers and labels are
 * always fully rendered — only a non-hiding y-settle on scroll.
 */
export function CaseStudyStatsV4({ eyebrow, heading, paragraph, stats }: CaseStudyStatsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-black px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">{eyebrow}</span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-white">
            {heading}
          </h2>
          <p className="max-w-2xl text-base text-white/70">{paragraph}</p>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-14 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-[clamp(2.5rem,1.5rem+3.5vw,4rem)] leading-none font-medium text-white">
                  {stat.value}
                </span>
                {stat.badge && (
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {stat.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium text-white">{stat.label}</h3>
              <p className="max-w-sm text-sm text-white/70">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
