"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type CapabilityObjectionsV4Props = {
  content: PillarPageContent;
};

/**
 * Concerns rendered as gaps being filled, not Strategy's alternating
 * quotes, Data & AI's signal log, Engineering's reinforcement bars, or
 * Digital Products' highlight sweep: each item's marker starts hollow and
 * fills solid as it resolves — the same transfer mark from this page's own
 * hero, reused within the page (not borrowed from another pillar) so a
 * fragile situation reads as a gap this pillar exists to fill.
 */
export function CapabilityObjectionsV4({ content }: CapabilityObjectionsV4Props) {
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
          {content.objections.items.map((item) => (
            <motion.div
              key={item.quote}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
              className="flex items-start gap-4 border-b border-border py-7"
            >
              <span className="relative mt-1.5 h-2.5 w-2.5 shrink-0 border border-primary">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: fast ?? 0.3, delay: fast ? 0 : 0.25, ease: "easeOut" }}
                  className="absolute inset-0 bg-primary"
                />
              </span>
              <div className="flex flex-col gap-2">
                <p className="max-w-2xl text-lg text-foreground">{item.quote}</p>
                {item.answer && (
                  <p className="font-cta max-w-xl text-sm font-medium text-foreground sm:text-base">
                    <span aria-hidden="true" className="mr-2 text-primary">
                      →
                    </span>
                    {item.answer}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
