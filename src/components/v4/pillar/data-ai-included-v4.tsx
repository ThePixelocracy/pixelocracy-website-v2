"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DataAiIncludedV4Props = {
  content: PillarPageContent;
};

/**
 * The dark beat — deliberately not Strategy's numbered Phase 01/02 roadmap
 * composition. This pillar's capability list isn't sequential stages, so
 * it's presented as one flat set of connected capabilities: each item's
 * tick-line extends in place (the same connective motif introduced in Why
 * Us on this page, reused within the page for internal coherence, not
 * borrowed from Strategy) rather than being attached to a phase number or a
 * vertical timeline rule. Two columns for scanability, no card borders, no
 * equal-sized boxes.
 */
export function DataAiIncludedV4({ content }: DataAiIncludedV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-black px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">What&apos;s included</span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-white">
            {content.included.heading}
          </h2>
          {content.included.intro && <p className="max-w-2xl text-base text-white/70">{content.included.intro}</p>}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2">
          {content.included.columns.map((column, columnIndex) => (
            <div key={column.heading ?? columnIndex} className="flex flex-col">
              {column.heading && (
                <h3 className="font-display mb-4 text-xl font-medium text-white sm:text-2xl">{column.heading}</h3>
              )}
              <ul className="flex flex-col">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: fast ?? 0.4,
                      delay: fast ? 0 : columnIndex * 0.1 + itemIndex * 0.06,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-4 border-b border-white/10 py-4 text-base text-white/80"
                  >
                    <motion.span
                      aria-hidden="true"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: fast ?? 0.35,
                        delay: fast ? 0 : columnIndex * 0.1 + itemIndex * 0.06 + 0.1,
                        ease: "easeOut",
                      }}
                      style={{ transformOrigin: "left center" }}
                      className="h-px w-5 shrink-0 bg-primary"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
              {column.summary && <p className="mt-4 text-sm text-white/50 italic">{column.summary}</p>}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: fast ?? 0.7, ease: "easeOut" }}
          className="mt-16 max-w-2xl border-l-2 border-primary pl-6 sm:mt-20"
        >
          <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">
            The Pixelocracy difference
          </span>
          <p className="font-display mt-3 text-xl leading-[1.3] font-medium text-white sm:text-2xl">
            {content.difference.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
