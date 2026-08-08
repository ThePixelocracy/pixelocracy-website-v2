"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The Insights archive's intro — same quiet, editorial register as
 * `WorkArchiveHeroV4`, adapted for a reading section rather than a
 * portfolio. No industry/category filter row here yet: with zero
 * published articles today, a filter would have nothing to narrow.
 */
export function InsightsHeroV4() {
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
          Insights
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.08, ease: "easeOut" }}
          className="font-display mt-6 max-w-3xl text-[clamp(2.25rem,1.2rem+4.5vw,4.5rem)] leading-[1.02] font-medium text-foreground"
        >
          Notes from the work.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.16, ease: "easeOut" }}
          className="mt-4 max-w-xl text-lg text-foreground"
        >
          Perspectives on strategy, data, engineering, and product — from the team building alongside our clients.
        </motion.p>
      </div>
    </section>
  );
}
