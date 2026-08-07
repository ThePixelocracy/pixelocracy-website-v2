"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DigitalProductsWhyUsV4Props = {
  content: PillarPageContent;
};

/**
 * "Why us" as a dense/quiet rhythm, not Strategy's alternating list,
 * Data & AI's pipeline, or Engineering's vertical spine: the first
 * statement lands as one oversized editorial line (a claim, given room to
 * breathe), then the remaining differentiators settle in as a quieter
 * supporting trio beneath it — exploration then clarity, not four equal
 * treatments in a row.
 */
export function DigitalProductsWhyUsV4({ content }: DigitalProductsWhyUsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  const [lead, ...rest] = content.whyUs.cards;

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

        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: fast ?? 0.65, ease: "easeOut" }}
            className="font-display mt-16 max-w-4xl text-[clamp(1.75rem,1rem+3.5vw,3.5rem)] leading-[1.08] font-medium text-foreground"
          >
            {lead.description}
          </motion.p>
        )}

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-12 sm:grid-cols-3 sm:gap-8">
          {rest.map((card, index) => (
            <motion.div
              key={card.description}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              {card.title && (
                <h3 className="font-display text-lg leading-[1.15] font-medium text-foreground sm:text-xl">
                  {card.title}
                </h3>
              )}
              <p className="text-base text-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {content.whyUs.caption && (
          <p className="mt-12 text-right text-sm text-muted-foreground italic">{content.whyUs.caption}</p>
        )}
      </div>
    </section>
  );
}
