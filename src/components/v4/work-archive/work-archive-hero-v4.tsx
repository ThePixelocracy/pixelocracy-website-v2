"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { industries } from "@/content/work-archive";

/**
 * The archive's intro — quiet by design, distinct from Contact's
 * form-first directness and every pillar's signature reveal. "What We've
 * Built" and "Selected case studies for your consideration" are the real
 * approved headline/subhead from the legacy archive design, reused
 * verbatim; the industry list beneath is derived directly from the six
 * real projects shown below (Government, Healthcare, Mobility, Media,
 * Finance, Automotive), not a decorative filter — with only six projects,
 * one per industry, an interactive filter would narrow to a single result
 * per click and add a control without real browsing value.
 */
export function WorkArchiveHeroV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
          className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase"
        >
          Selected work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.08, ease: "easeOut" }}
          className="font-display mt-6 max-w-3xl text-[clamp(2.25rem,1.2rem+4.5vw,4.5rem)] leading-[1.02] font-medium text-foreground"
        >
          What we&apos;ve built.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.16, ease: "easeOut" }}
          className="mt-4 max-w-xl text-lg text-foreground"
        >
          Selected case studies for your consideration — national platforms and early-stage products, across{" "}
          {industries.join(", ").toLowerCase()}, built by one integrated team.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.3 }}
          className="mt-8 font-mono text-xs text-muted-foreground uppercase"
        >
          Full case-study pages for each project are in progress.
        </motion.p>
      </div>
    </section>
  );
}
