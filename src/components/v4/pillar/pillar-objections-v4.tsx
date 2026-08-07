"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type PillarObjectionsV4Props = {
  content: PillarPageContent;
};

/**
 * Scattered client voices resolving into an organised, answered list — the
 * hero's opening fragments return here in full and get addressed one by
 * one. A flowing alternating-alignment list, not a 2x2 grid of equal boxes:
 * each quote is a quiet, singular settle (opacity + small y), the same
 * restrained "quiet" register the homepage reserves for its mission line,
 * reapplied to a new content type rather than invented from scratch. The
 * one quote with a real answer gets a left-accent response directly beneath
 * it instead of a separate disclosure control — the answer is simply there,
 * organised, resolved.
 */
export function PillarObjectionsV4({ content }: PillarObjectionsV4Props) {
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
          {content.objections.items.map((item, index) => {
            const alignRight = index % 2 === 1;
            return (
              <motion.div
                key={item.quote}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: fast ?? 0.55, ease: "easeOut" }}
                className={`flex flex-col gap-3 border-b border-border py-8 sm:py-10 ${alignRight ? "items-end text-right" : "items-start text-left"}`}
              >
                <span aria-hidden="true" className="font-display text-2xl leading-none text-primary">
                  &ldquo;
                </span>
                <p className={`max-w-lg text-lg text-foreground sm:text-xl ${alignRight ? "" : ""}`}>{item.quote}</p>
                {item.answer && (
                  <p
                    className={`font-cta mt-2 max-w-md border-primary text-sm font-medium text-foreground sm:text-base ${
                      alignRight ? "border-r-2 pr-4" : "border-l-2 pl-4"
                    }`}
                  >
                    <span aria-hidden="true" className="mr-2 text-primary">
                      →
                    </span>
                    {item.answer}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
