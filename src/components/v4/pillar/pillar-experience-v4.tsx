"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type PillarExperienceV4Props = {
  content: PillarPageContent;
};

/**
 * Proof presented as credible, monumental fact — not three generic project
 * cards. Each engagement's name arrives at real editorial scale with its
 * own small scale-in (the same "impact drives size" instinct as the
 * homepage's Proof numerals, reapplied at a static, page-appropriate weight
 * rather than a full scroll-jacked beat sequence — this is a supporting
 * section, not the homepage's own monumental set-piece). Alternating
 * alignment keeps the sequence asymmetric.
 */
export function PillarExperienceV4({ content }: PillarExperienceV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Selected experience
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {content.experience.heading}
          </h2>
          {content.experience.intro && (
            <p className="max-w-xl text-base text-muted-foreground">{content.experience.intro}</p>
          )}
        </div>

        <div>
          {content.experience.items.map((item, index) => {
            const alignRight = index % 2 === 1;
            return (
              <div
                key={item.name}
                className={`flex flex-col gap-3 border-b border-border py-10 sm:py-14 ${alignRight ? "sm:items-end sm:text-right" : "sm:items-start sm:text-left"}`}
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} / {String(content.experience.items.length).padStart(2, "0")}
                </span>
                <motion.h3
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: fast ?? 0.6, ease: "easeOut" }}
                  className="font-display text-[clamp(2rem,1rem+4vw,4rem)] leading-[1] font-medium text-foreground"
                >
                  {item.name}
                </motion.h3>
                <p className={`max-w-xl text-base text-foreground sm:text-lg ${alignRight ? "sm:ml-auto" : ""}`}>
                  {item.description}
                </p>
                {item.metric && (
                  <span className="font-mono text-xs tracking-[0.1em] text-primary uppercase sm:text-sm">
                    {item.metric}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
