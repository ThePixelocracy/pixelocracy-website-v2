"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type PillarWhyUsV4Props = {
  content: PillarPageContent;
};

/**
 * "Why us" as an editorial numbered list, not a three-card grid — the same
 * anti-card stance as the homepage's Five Pillars index, reapplied to a
 * different content shape (differentiator statements instead of pillar
 * names). Each row's title reveals through the same mask/wipe used
 * throughout V4 for headings; the description settles in as quiet secondary
 * support. Alternating alignment keeps the list asymmetric rather than a
 * repeated template — this is competing priorities being sorted into an
 * ordered, legible sequence.
 */
export function PillarWhyUsV4({ content }: PillarWhyUsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">Why us</span>
            <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {content.whyUs.heading}
            </h2>
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-base text-foreground sm:text-lg">{content.whyUs.paragraph}</p>

        <div className="mt-4">
          {content.whyUs.cards.map((card, index) => {
            // True alternation, not just a varied entrance direction: number
            // and heading share a side, copy sits on the opposite side, and
            // that side flips row to row — the same recipe as the homepage's
            // Five Pillars index, reapplied here.
            const reversed = index % 2 === 1;
            const headingFromX = reversed ? 600 : -600;
            const copyFromX = reversed ? -24 : 24;
            return (
              <div
                key={card.description}
                className="grid grid-cols-1 items-start gap-4 border-b border-border py-10 sm:grid-cols-12 sm:gap-6 sm:py-12"
              >
                <div
                  className={`font-mono order-1 flex items-center gap-2 text-sm text-muted-foreground sm:col-span-2 ${reversed ? "sm:order-3 sm:justify-end" : "sm:order-1"}`}
                >
                  {card.variant === "solid" && (
                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-primary" />
                  )}
                  {String(index + 1).padStart(2, "0")}
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  className={`order-2 overflow-hidden sm:col-span-4 ${reversed ? "sm:order-3" : "sm:order-2"}`}
                >
                  {card.title && (
                    <motion.h3
                      variants={{ hidden: { x: headingFromX }, visible: { x: 0 } }}
                      transition={{ duration: fast ?? 0.65, delay: fast ? 0 : 0.05, ease: [0.76, 0, 0.24, 1] }}
                      className={`font-display text-xl leading-[1.1] font-medium text-foreground sm:text-2xl ${reversed ? "sm:text-right" : ""}`}
                    >
                      {card.title}
                    </motion.h3>
                  )}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: copyFromX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.14, ease: "easeOut" }}
                  className={`order-3 max-w-md text-base text-foreground sm:col-span-6 ${card.title ? "" : "sm:col-span-10"} ${reversed ? "sm:order-1 sm:text-left" : "sm:order-3 sm:text-right sm:ml-auto"}`}
                >
                  {card.description}
                </motion.p>
              </div>
            );
          })}
        </div>

        {content.whyUs.caption && (
          <p className="mt-8 text-right text-sm text-muted-foreground italic">{content.whyUs.caption}</p>
        )}
      </div>
    </section>
  );
}
