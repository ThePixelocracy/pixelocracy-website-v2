"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type JourneyStage = {
  number: string;
  name: string;
  detail: string;
};

type JourneyPrinciple = {
  name: string;
  detail: string;
};

type CaseStudyJourneyV4Props = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  stages: JourneyStage[];
  principles: JourneyPrinciple[];
};

/**
 * Shared "customer journey" section — a numbered stage sequence connected
 * by a line (horizontal on desktop, stacked on mobile), followed by the
 * project's trust/quality principles as flat blocks. Generalised from
 * Cardom's own "Search → Verify → Purchase → Finance → Deliver" flow so a
 * future case study with its own multi-stage journey can reuse the same
 * shape without inheriting Cardom's specific stage count or copy.
 */
export function CaseStudyJourneyV4({ eyebrow, heading, paragraphs, stages, principles }: CaseStudyJourneyV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-base text-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-4">
          {stages.map((stage, index) => (
            <div key={stage.number} className="relative flex flex-1 flex-col items-start gap-3 lg:items-center lg:text-center">
              <div className="flex items-center gap-3 self-stretch lg:gap-0">
                <span
                  className={`font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-lg ${
                    index === 0 ? "border-primary bg-primary text-white" : "border-border text-foreground"
                  }`}
                >
                  {stage.number}
                </span>
                {index < stages.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-border lg:block" />
                )}
              </div>
              <div className="lg:px-2">
                <h3 className="font-display text-lg font-medium text-foreground">{stage.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{stage.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 sm:gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.name}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-3 bg-primary p-7"
            >
              <h3 className="font-display text-base font-medium text-white uppercase">{principle.name}</h3>
              <p className="text-sm text-white/85">{principle.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
