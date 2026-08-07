"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { aboutContent } from "@/content/about";

/**
 * The bookend — the same overflow-mask wipe technique the homepage and
 * every pillar page's CTA already use, applied to About's own closing
 * line. No "other pillars" list here (the hero already provides that
 * wayfinding); one clear action, matching V4's "one primary action per
 * section" rule. No careers/join-us CTA — no verified open-roles content
 * or route exists in the repository to link to honestly.
 */
export function AboutCtaV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <h2 className="font-display max-w-4xl text-[clamp(2.25rem,1.2rem+5.5vw,5.5rem)] leading-[1] font-medium text-foreground">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="overflow-hidden"
          >
            <motion.span
              variants={{ hidden: { y: 120 }, visible: { y: 0 } }}
              transition={{ duration: fast ?? 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="block"
            >
              {aboutContent.cta.heading}
            </motion.span>
          </motion.div>
        </h2>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-lg flex-col gap-4 text-lg text-foreground">
            <p>{aboutContent.cta.paragraph}</p>
          </div>
          <V4Button href="/contact" variant="primary" className="w-fit">
            Book a discovery call
          </V4Button>
        </div>
      </div>
    </section>
  );
}
