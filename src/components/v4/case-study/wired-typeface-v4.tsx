"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { wiredCaseStudy } from "@/content/wired-case-study";

/**
 * WIRED's own central visual/motion concept — deliberately not Cardom's
 * timeline, HHG's connection pulse, Aegean's route line, or gov.gr's
 * radial convergence. The same masthead, two alphabets: the real WIRED
 * Global and WIRED Greece headline pairs (verbatim from the approved
 * legacy design) rendered side by side, Latin beside Greek, demonstrating
 * "one system, two languages" as content rather than as an abstract
 * shape. Both samples are always fully rendered — this is the one part
 * of the whole case study making the typographic argument, so nothing
 * here is gated behind a toggle or a hover.
 */
export function WiredTypefaceV4() {
  const { typeface } = wiredCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{typeface.eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {typeface.heading}
            </h2>
            <div className="flex flex-col gap-4 text-base text-foreground">
              {typeface.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <dl className="mt-2 flex flex-col gap-3 border-t border-border pt-6">
              {typeface.typefaces.map((item) => (
                <div key={item.role} className="flex items-baseline justify-between gap-4">
                  <dt className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">{item.role}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">{item.name}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-6">
            {typeface.headlineSamples.map((sample, index) => (
              <motion.div
                key={sample.label}
                initial={{ y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.1, ease: "easeOut" }}
                className="border-l-2 border-primary bg-muted p-8"
              >
                <span className="font-mono text-xs font-bold tracking-[0.1em] text-primary uppercase">
                  {sample.label}
                </span>
                <p className="font-display mt-3 text-2xl leading-[1.1] font-bold text-foreground sm:text-3xl">
                  {sample.headline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{sample.deck}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
