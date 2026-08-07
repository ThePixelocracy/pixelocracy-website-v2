"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DigitalProductsIncludedV4Props = {
  content: PillarPageContent;
};

/**
 * The dark beat — deliberately not Strategy's Phase 01/02 roadmap,
 * Data & AI's tick-lines, or Engineering's closing bracket marks. One
 * continuous numbering runs across both columns (01–08, not restarting)
 * so it reads as a single connected engagement rather than two
 * independent lists. Each step's marker is a hollow square that fills
 * solid as it resolves — a step in a shipped product journey completing —
 * reusing the square-accent shape already established elsewhere in V4
 * (never a rounded/circular icon), animated in a way no other pillar uses.
 */
export function DigitalProductsIncludedV4({ content }: DigitalProductsIncludedV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  let runningIndex = -1;

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
                {column.items.map((item) => {
                  runningIndex += 1;
                  const delay = fast ? 0 : runningIndex * 0.07;
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: fast ?? 0.4, delay, ease: "easeOut" }}
                      className="flex items-center gap-4 border-b border-white/10 py-4 text-base text-white/80"
                    >
                      <span className="relative h-2.5 w-2.5 shrink-0 border border-primary">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: fast ?? 0.3, delay: delay + 0.15, ease: "easeOut" }}
                          className="absolute inset-0 bg-primary"
                        />
                      </span>
                      <span className="font-mono text-xs text-white/40">
                        {String(runningIndex + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </motion.li>
                  );
                })}
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
