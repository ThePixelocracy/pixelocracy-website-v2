"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DigitalProductsObjectionsV4Props = {
  content: PillarPageContent;
};

/**
 * Concerns rendered as surfaced feedback, not Strategy's alternating
 * quotes, Data & AI's signal log, or Engineering's reinforcement bars: a
 * short highlight mark sweeps in beneath each line, like feedback being
 * underlined as it's heard — literal, small, and specific to a pillar
 * about listening to real user behaviour.
 */
export function DigitalProductsObjectionsV4({ content }: DigitalProductsObjectionsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Typical situations we solve
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            We&apos;ve heard this before
          </h2>
          <div className="max-w-xl text-base text-muted-foreground">
            {content.objections.intro.map((line) => (
              <p key={line} className="mt-2 first:mt-0">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4">
          {content.objections.items.map((item, index) => (
            <motion.div
              key={item.quote}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
              className="flex flex-col gap-3 border-b border-border py-8"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
                Heard {String(index + 1).padStart(2, "0")}
              </span>
              <p className="max-w-2xl text-lg text-foreground sm:text-xl">{item.quote}</p>
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.4, delay: fast ? 0 : 0.15, ease: "easeOut" }}
                style={{ transformOrigin: "left center" }}
                className="h-[3px] w-16 bg-primary"
              />
              {item.answer && (
                <p className="font-cta max-w-xl text-sm font-medium text-foreground sm:text-base">
                  <span aria-hidden="true" className="mr-2 text-primary">
                    →
                  </span>
                  {item.answer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
