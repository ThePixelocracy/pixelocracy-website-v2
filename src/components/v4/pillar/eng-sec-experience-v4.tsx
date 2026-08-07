"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type EngSecExperienceV4Props = {
  content: PillarPageContent;
};

const CORNERS = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

/**
 * Proof as a spec sheet, not Strategy's scale-in numerals or Data & AI's
 * count-up figures: each engagement sits inside a corner-bracket frame —
 * the same locking-boundary device introduced in this page's own hero,
 * reused here rather than a third new motif, so proof reads as certified
 * fact rather than a decorated statistic. The metric is a full statement
 * inside the frame, not a numeral split from its label.
 */
export function EngSecExperienceV4({ content }: EngSecExperienceV4Props) {
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
            Selected experience
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {content.experience.heading}
          </h2>
          {content.experience.intro && (
            <p className="max-w-xl text-base text-muted-foreground">{content.experience.intro}</p>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {content.experience.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.55, ease: "easeOut" }}
              className="relative p-8 sm:p-10"
            >
              {CORNERS.map((corner) => (
                <motion.span
                  key={corner}
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: fast ?? 0.4, delay: fast ? 0 : 0.15, ease: "easeOut" }}
                  className={`absolute h-4 w-4 border-foreground ${corner}`}
                />
              ))}

              <span className="font-mono text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {String(content.experience.items.length).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-[clamp(1.5rem,1rem+2vw,2.25rem)] leading-[1.1] font-medium text-foreground">
                {item.name}
              </h3>
              <p className="mt-3 max-w-md text-base text-foreground">{item.description}</p>
              {item.metric && (
                <p className="font-display mt-6 text-lg leading-snug font-medium text-primary sm:text-xl">
                  {item.metric}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
