"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type PillarIncludedV4Props = {
  content: PillarPageContent;
};

/**
 * The dark beat — competing priorities resolved into a roadmap. Rendered as
 * sequential numbered phases connected by a vertical rule (a timeline, not
 * a SaaS feature dashboard): each phase's items are a plain list with a
 * small accent tick, never bullet-point cards, and stays scannable through
 * generous spacing and a real heading hierarchy rather than equal-sized
 * boxes. The Pixelocracy difference closes the beat as a left-accent pull
 * quote — a smaller, quieter device than the homepage Manifesto's giant
 * quotation mark, on purpose: this is a supporting statement, not the
 * company's mission moment, so it borrows the black-beat/pull-quote
 * vocabulary without repeating that composition verbatim.
 */
export function PillarIncludedV4({ content }: PillarIncludedV4Props) {
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

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {content.included.columns.map((column, index) => (
            <div key={column.heading ?? index} className="flex gap-6 sm:gap-10">
              <div className="flex w-12 shrink-0 flex-col items-center gap-3 sm:w-16">
                <span className="font-display text-2xl leading-none text-primary sm:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < content.included.columns.length - 1 && (
                  <span aria-hidden="true" className="w-px flex-1 bg-white/15" />
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: fast ?? 0.55, ease: "easeOut" }}
                className="flex max-w-2xl flex-col gap-5 pb-4"
              >
                {column.heading && (
                  <h3 className="font-display text-xl font-medium text-white sm:text-2xl">{column.heading}</h3>
                )}
                <ul className="flex flex-col gap-3">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-white/80">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                {column.summary && <p className="text-sm text-white/50 italic">{column.summary}</p>}
              </motion.div>
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
