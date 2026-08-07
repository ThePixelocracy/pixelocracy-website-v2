"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DataAiObjectionsV4Props = {
  content: PillarPageContent;
};

/**
 * Concerns rendered as a signal log, not Strategy's alternating quote list:
 * a single ordered column, each entry indexed like a timestamped read-out
 * ("SIGNAL 01") instead of a large quotation mark, everything left-aligned
 * so it reads as one orderly system rather than a conversation. Quiet
 * opacity + small y settle only — this section's job is legibility, not
 * spectacle.
 */
export function DataAiObjectionsV4({ content }: DataAiObjectionsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
              className="flex flex-col gap-2 border-b border-border py-7 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="font-mono shrink-0 text-xs tracking-[0.1em] text-primary uppercase sm:w-24">
                Signal {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <p className="max-w-2xl text-lg text-foreground">{item.quote}</p>
                {item.answer && (
                  <p className="font-cta max-w-xl border-l-2 border-primary pl-4 text-sm font-medium text-foreground sm:text-base">
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
