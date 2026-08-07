"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";

type CaseStudyResultV4Props = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  liveUrl: string;
  liveLabel: string;
  /** False for a project with no live public product to link to (e.g. an internal platform) — routes to liveUrl in the same tab instead. */
  liveExternal?: boolean;
};

/**
 * Shared closing statement — the same overflow-mask heading-wipe technique
 * every other V4 page's closing moment uses (see `work-archive-cta-v4.tsx`,
 * `cta-v4.tsx`), applied to the case study's own verified result. Only a
 * qualitative outcome is asserted here; no metric renders unless the
 * calling content genuinely has one.
 */
export function CaseStudyResultV4({
  eyebrow,
  heading,
  paragraphs,
  liveUrl,
  liveLabel,
  liveExternal = true,
}: CaseStudyResultV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{eyebrow}</span>

        <h2 className="font-display max-w-3xl text-[clamp(2rem,1rem+4vw,4rem)] leading-[1.02] font-medium text-foreground">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="overflow-hidden"
          >
            <motion.span
              variants={{ hidden: { y: 90 }, visible: { y: 0 } }}
              transition={{ duration: fast ?? 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="block"
            >
              {heading}
            </motion.span>
          </motion.div>
        </h2>

        <div className="flex flex-col gap-4 text-base text-foreground">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <V4Button href={liveUrl} variant="primary" className="w-fit" external={liveExternal}>
          {liveLabel}
        </V4Button>
      </div>
    </section>
  );
}
