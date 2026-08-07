"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type EngSecWhyUsV4Props = {
  content: PillarPageContent;
};

/**
 * "Why us" as a structural cross-section, not Strategy's alternating list
 * or Data & AI's horizontal pipeline: one continuous vertical spine runs
 * the full height of the stack (drawn once, top to bottom) with a short
 * connector notch branching off it as each layer resolves — four
 * differentiators presented as load-bearing layers of the same structure,
 * not four independent claims.
 */
export function EngSecWhyUsV4({ content }: EngSecWhyUsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;
  const listRef = useRef<HTMLDivElement>(null);

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

        <div ref={listRef} className="relative mt-16 flex flex-col">
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: fast ?? 1.1, ease: "easeOut" }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-2 bottom-2 left-0 hidden w-px bg-primary sm:block"
          />

          {cards.map((card, index) => (
            <div
              key={card.description}
              className="relative grid grid-cols-1 gap-3 border-b border-border py-8 last:border-b-0 sm:grid-cols-12 sm:gap-6 sm:py-10 sm:pl-8"
            >
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.35, delay: fast ? 0 : index * 0.15, ease: "easeOut" }}
                style={{ transformOrigin: "left center" }}
                className="absolute top-1/2 left-0 hidden h-px w-6 -translate-y-1/2 bg-primary sm:block"
              />
              <span className="font-mono text-sm text-muted-foreground sm:col-span-2">
                L{String(index + 1).padStart(2, "0")}
              </span>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.15 + 0.1, ease: "easeOut" }}
                className="sm:col-span-10"
              >
                {card.title && (
                  <h3 className="font-display text-xl leading-[1.1] font-medium text-foreground sm:text-2xl">
                    {card.title}
                  </h3>
                )}
                <p className={`max-w-2xl text-base text-foreground ${card.title ? "mt-2" : ""}`}>
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {content.whyUs.caption && (
          <p className="mt-8 text-right text-sm text-muted-foreground italic">{content.whyUs.caption}</p>
        )}
      </div>
    </section>
  );
}
