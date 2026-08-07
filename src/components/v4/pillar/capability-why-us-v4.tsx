"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type CapabilityWhyUsV4Props = {
  content: PillarPageContent;
};

// Decreasing weight, not equal treatment: the same "guidance gradually
// reducing" idea from the hero, expressed here as typographic scale and
// presence fading across the sequence rather than a diagram.
const TITLE_SCALE = ["text-2xl sm:text-3xl", "text-xl sm:text-2xl", "text-lg sm:text-xl"];
const MARK_OPACITY = ["opacity-100", "opacity-60", "opacity-30"];

/**
 * "Why us" as a fading handoff, not Strategy's alternating list, Data & AI's
 * pipeline, Engineering's vertical spine, or Digital Products' big-
 * statement-plus-trio: three differentiators presented at decreasing
 * typographic weight, top to bottom — the same withdrawal the hero shows
 * physically, expressed here as scale and presence.
 */
export function CapabilityWhyUsV4({ content }: CapabilityWhyUsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

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

        <div className="mt-14 flex flex-col">
          {content.whyUs.cards.map((card, index) => (
            <motion.div
              key={card.description}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.15, ease: "easeOut" }}
              className="flex items-start gap-5 border-b border-border py-8 last:border-b-0"
            >
              <span
                aria-hidden="true"
                className={`mt-2 h-4 w-1 shrink-0 bg-primary ${MARK_OPACITY[index % MARK_OPACITY.length]}`}
              />
              <div className="flex flex-col gap-2">
                {card.title && (
                  <h3
                    className={`font-display leading-[1.1] font-medium text-foreground ${TITLE_SCALE[index % TITLE_SCALE.length]}`}
                  >
                    {card.title}
                  </h3>
                )}
                <p className="max-w-xl text-base text-foreground">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {content.whyUs.caption && (
          <p className="mt-8 text-right text-sm text-muted-foreground italic">{content.whyUs.caption}</p>
        )}
      </div>
    </section>
  );
}
