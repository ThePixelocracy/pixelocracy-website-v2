"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type CapabilityIncludedV4Props = {
  content: PillarPageContent;
};

// The running index shrinks as the engagement proceeds — the same
// "guidance gradually reducing" idea already used in the hero and Why Us,
// reinforced a second time on this page rather than reused from another
// pillar's device (no ticks, no brackets, no filling squares here).
const INDEX_SIZE = [
  "text-2xl",
  "text-2xl",
  "text-xl",
  "text-xl",
  "text-lg",
  "text-lg",
  "text-base",
  "text-base",
];

/**
 * The dark beat — deliberately not Strategy's Phase 01/02 roadmap,
 * Data & AI's tick-lines, Engineering's closing brackets, or Digital
 * Products' filling squares. One connected engagement, not a menu of
 * workshops: continuous numbering across both columns, shrinking in scale
 * as the list proceeds, so scanning down the page physically feels like
 * the engagement's own handoff.
 */
export function CapabilityIncludedV4({ content }: CapabilityIncludedV4Props) {
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
                  const thisIndex = runningIndex;
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: fast ?? 0.4, delay: fast ? 0 : thisIndex * 0.06, ease: "easeOut" }}
                      className="flex items-baseline gap-4 border-b border-white/10 py-4"
                    >
                      <span
                        className={`font-display shrink-0 leading-none text-primary ${INDEX_SIZE[thisIndex % INDEX_SIZE.length]}`}
                      >
                        {String(thisIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base text-white/80">{item}</span>
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
