"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";

type CaseStudyFact = {
  label: string;
  value: string;
};

type CaseStudyHeroV4Props = {
  eyebrow: string;
  title: string;
  subheading: string;
  paragraph: string;
  facts: CaseStudyFact[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  liveLabel: string;
};

/**
 * Shared case-study hero — text and facts on the left, the project's real
 * photography on the right at a fixed, intentional crop. Images render at
 * full opacity from mount (the /work archive's whileInView-opacity bug
 * taught us primary imagery must never depend on scroll to become visible);
 * motion here is limited to a non-hiding scale-settle.
 */
export function CaseStudyHeroV4({
  eyebrow,
  title,
  subheading,
  paragraph,
  facts,
  image,
  imageAlt,
  liveUrl,
  liveLabel,
}: CaseStudyHeroV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex w-full flex-col gap-6 lg:w-[52%]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
            className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.08, ease: "easeOut" }}
            className="font-display text-[clamp(2.75rem,1.5rem+6vw,6rem)] leading-[0.98] font-medium text-foreground"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.16, ease: "easeOut" }}
            className="font-display max-w-lg text-[clamp(1.1rem,0.9rem+1vw,1.5rem)] font-medium text-foreground italic"
          >
            {subheading}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.24, ease: "easeOut" }}
            className="max-w-lg text-base text-foreground"
          >
            {paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.32, ease: "easeOut" }}
          >
            <V4Button href={liveUrl} variant="primary" className="w-fit" external>
              {liveLabel}
            </V4Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.4, ease: "easeOut" }}
            className="mt-4 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6 sm:max-w-md"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{fact.label}</dt>
                <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: fast ?? 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden bg-muted lg:aspect-[3/4] lg:w-[48%]"
        >
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" priority className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
