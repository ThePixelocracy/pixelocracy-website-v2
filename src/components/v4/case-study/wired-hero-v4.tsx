"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { wiredCaseStudy } from "@/content/wired-case-study";

/**
 * WIRED's own flagship-adjacent hero — not `CaseStudyHeroV4`'s shared
 * split, and not gov.gr's full-bleed photo treatment either. Black
 * background (WIRED's own brand colour, already used for this project's
 * `headerBg` on the homepage), a small black-on-white kicker tag styled
 * after WIRED's own real "TODAY'S PICKS" section label (visible in the
 * genuine screenshots), and the real live homepage screenshot presented
 * full-width beneath the intro — an editorial-feature opening, not a
 * product-mockup-beside-copy template.
 */
export function WiredHeroV4() {
  const { hero } = wiredCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-black px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="w-fit bg-white px-2.5 py-1 font-mono text-xs font-bold tracking-[0.1em] text-black uppercase">
            {hero.eyebrow}
          </span>

          <h1 className="font-display text-[clamp(3rem,1.2rem+7.5vw,7.5rem)] leading-[0.92] font-bold tracking-tight text-white uppercase">
            {hero.title}
          </h1>

          <p className="font-display max-w-xl text-[clamp(1.1rem,0.9rem+1vw,1.5rem)] font-medium text-white italic">
            {hero.subheading}
          </p>

          <p className="max-w-xl text-base text-white/80">{hero.paragraph}</p>

          <div>
            <V4Button href={wiredCaseStudy.liveUrl} variant="invert" className="w-fit" external>
              {wiredCaseStudy.liveLabel}
            </V4Button>
          </div>

          <dl className="flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">{fact.label}</dt>
                <dd className="mt-1 text-sm text-white/90">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ scale: 1.03 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: fast ?? 0.8, ease: "easeOut" }}
          className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 sm:aspect-[1920/950]"
        >
          <Image
            src="/case-studies/wired-thumbnail1.png"
            alt="The real WIRED Greece homepage"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left-top sm:object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
