"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type EngSecIncludedV4Props = {
  content: PillarPageContent;
};

/**
 * The dark beat — deliberately not Strategy's Phase 01/02 roadmap or
 * Data & AI's tick-line list. Each capability is prefixed by a small pair
 * of bracket marks that close together as the row resolves — a boundary
 * sealing around each capability, the same idea as the hero's locking
 * frame, expressed here as pure typography rather than a repeated icon.
 * Two columns for scanability, no card borders, no equal-sized boxes.
 */
export function EngSecIncludedV4({ content }: EngSecIncludedV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
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
                {column.items.map((item, itemIndex) => {
                  const delay = fast ? 0 : columnIndex * 0.1 + itemIndex * 0.06;
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: fast ?? 0.4, delay, ease: "easeOut" }}
                      className="flex items-center gap-3 border-b border-white/10 py-4 text-base text-white/80"
                    >
                      <span aria-hidden="true" className="font-mono inline-flex text-primary">
                        <motion.span
                          initial={{ x: -3 }}
                          whileInView={{ x: 0 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: fast ?? 0.35, delay: delay + 0.08, ease: "easeOut" }}
                        >
                          [
                        </motion.span>
                        <motion.span
                          initial={{ x: 3 }}
                          whileInView={{ x: 0 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: fast ?? 0.35, delay: delay + 0.08, ease: "easeOut" }}
                        >
                          ]
                        </motion.span>
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
