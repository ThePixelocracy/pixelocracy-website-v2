"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { apeironCaseStudy } from "@/content/apeiron-case-study";

/**
 * Apeiron's own hero — built around the fund's real, verified brand red
 * (sampled directly from the genuine screenshot, not guessed), distinct
 * from Cardom's blue, HHG's blue, Aegean's blue, gov.gr's navy, and
 * WIRED's black. Text left, the real live portfolio-page screenshot
 * right — full opacity from mount, only a non-hiding scale-settle.
 */
export function ApeironHeroV4() {
  const { hero } = apeironCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex w-full flex-col gap-6 lg:w-[50%]">
          <span className="font-mono text-xs tracking-[0.14em] text-[#e60000] uppercase">{hero.eyebrow}</span>

          <h1 className="font-display text-[clamp(2.5rem,1.2rem+5.5vw,5.5rem)] leading-[0.98] font-medium text-foreground">
            {hero.title}
          </h1>

          <p className="font-display max-w-lg text-[clamp(1.1rem,0.9rem+1vw,1.5rem)] font-medium text-foreground italic">
            {hero.subheading}
          </p>

          <p className="max-w-lg text-base text-foreground">{hero.paragraph}</p>

          <div>
            <V4Button
              href={apeironCaseStudy.liveUrl}
              variant="primary"
              className="w-fit bg-[#e60000] hover:bg-[#c40000]"
              external
            >
              {apeironCaseStudy.liveLabel}
            </V4Button>
          </div>

          <dl className="mt-2 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6 sm:max-w-md">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{fact.label}</dt>
                <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ scale: 1.03 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: fast ?? 0.8, ease: "easeOut" }}
          className="relative aspect-[4/3] w-full overflow-hidden bg-muted sm:aspect-[1920/948] lg:w-[50%]"
        >
          <Image
            src="/case-studies/apeiron-thumbnail1.png"
            alt="The real Apeiron Ventures portfolio page"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-left-top sm:object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
