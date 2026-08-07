"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/about";

/**
 * The belief section — deliberately quiet after the hero's convergence
 * motion. Mission and vision sit side by side as an asymmetric pair (the
 * mission gets the larger, left-weighted statement; the vision is the
 * smaller counterpoint on the right), settling in with a plain, single
 * opacity+y fade — no new motif, on purpose, matching the "quiet register"
 * V4 already reserves for its most declarative statements.
 */
export function AboutBeliefV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {aboutContent.belief.eyebrow}
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {aboutContent.belief.heading}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: fast ?? 0.6, ease: "easeOut" }}
            className="sm:col-span-7"
          >
            <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">Mission</span>
            <p className="font-display mt-3 text-[clamp(1.5rem,1rem+2vw,2.25rem)] leading-[1.15] font-medium text-foreground">
              {aboutContent.belief.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.12, ease: "easeOut" }}
            className="sm:col-span-5"
          >
            <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">Vision</span>
            <p className="font-display mt-3 text-xl leading-[1.2] font-medium text-foreground sm:text-2xl">
              {aboutContent.belief.vision}
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.2 }}
          className="mt-12 max-w-2xl text-base text-foreground sm:text-lg"
        >
          {aboutContent.belief.paragraph}
        </motion.p>
      </div>
    </section>
  );
}
