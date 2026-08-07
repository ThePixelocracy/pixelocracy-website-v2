"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DataAiWhyUsV4Props = {
  content: PillarPageContent;
};

/**
 * "Why us" as a pipeline, not a card grid or Strategy's alternating list:
 * three value propositions connected by a line that extends as each one
 * arrives — raw capability flowing left-to-right (top-to-bottom on mobile)
 * into the next stage. The connecting line's `scaleX`/`scaleY` extension is
 * the primary mover, a different technique from Strategy's mask/wipe
 * headings, chosen because "flow" is literally this pillar's subject.
 */
export function DataAiWhyUsV4({ content }: DataAiWhyUsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  const cards = content.whyUs.cards;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">Why us</span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {content.whyUs.heading}
          </h2>
        </div>
        <p className="mt-8 max-w-2xl text-base text-foreground sm:text-lg">{content.whyUs.paragraph}</p>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-stretch sm:gap-0">
          {cards.map((card, index) => (
            <div key={card.description} className="flex flex-1 flex-col sm:flex-row sm:items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.18, ease: "easeOut" }}
                className="flex flex-1 flex-col gap-3 py-6 sm:py-2"
              >
                <span className="font-mono flex items-center gap-2 text-sm text-muted-foreground">
                  {card.variant === "solid" && (
                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-primary" />
                  )}
                  {String(index + 1).padStart(2, "0")}
                </span>
                {card.title && (
                  <h3 className="font-display text-xl leading-[1.1] font-medium text-foreground sm:text-2xl">
                    {card.title}
                  </h3>
                )}
                <p className="max-w-xs text-base text-foreground">{card.description}</p>
              </motion.div>

              {index < cards.length - 1 && (
                <>
                  {/* Horizontal connector, desktop — extends left to right as the
                      next stage arrives. */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.18 + 0.1, ease: "easeOut" }}
                    style={{ transformOrigin: "left center" }}
                    className="mx-6 hidden h-px w-12 self-center bg-primary sm:block"
                  />
                  {/* Vertical connector, mobile — extends top to bottom. */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.18 + 0.1, ease: "easeOut" }}
                    style={{ transformOrigin: "top center" }}
                    className="my-1 h-8 w-px self-start bg-primary sm:hidden"
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {content.whyUs.caption && (
          <p className="mt-12 text-right text-sm text-muted-foreground italic">{content.whyUs.caption}</p>
        )}
      </div>
    </section>
  );
}
