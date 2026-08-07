"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/about";

/**
 * Proof as part of the story, not a repeat of the homepage's monumental
 * scroll-jacked Proof section: the same already-approved figures at a
 * modest, editorial scale, introduced by a sentence rather than standing
 * alone as a disconnected wall of numbers.
 */
export function AboutEvidenceV4() {
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
            {aboutContent.evidence.eyebrow}
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {aboutContent.evidence.heading}
          </h2>
          <p className="max-w-2xl text-base text-foreground sm:text-lg">{aboutContent.evidence.intro}</p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.evidence.points.map((point, index) => (
            <motion.div
              key={point.value}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-2 border-b border-border py-8 sm:border-b-0 sm:border-t"
            >
              <span className="font-display text-4xl leading-none font-medium text-foreground sm:text-5xl">
                {point.value}
              </span>
              <p className="max-w-[22ch] text-sm text-muted-foreground">{point.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
