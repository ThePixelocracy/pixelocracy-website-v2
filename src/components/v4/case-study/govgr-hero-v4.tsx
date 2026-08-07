"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { govgrCaseStudy } from "@/content/govgr-case-study";

/**
 * gov.gr's own flagship hero — deliberately not `CaseStudyHeroV4`'s
 * text-left/image-right split every other case study uses. Full-bleed,
 * dark, the real brand photograph behind a scrim for legibility, and the
 * platform's three verified scale figures presented immediately, each
 * paired with what it means for a citizen rather than as a bare stat —
 * "more editorial weight" for the repository's most heavily verified case
 * study, not a bigger version of the shared template.
 */
export function GovgrHeroV4() {
  const { hero } = govgrCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="relative overflow-hidden bg-black px-6 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0">
        <Image
          src="/case-studies/govgr-thumbnail.png"
          alt="Classical government architecture, gov.gr"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.14em] text-white/60 uppercase">{hero.eyebrow}</span>
          <h1 className="font-display text-[clamp(3rem,1.5rem+7vw,7rem)] leading-[0.95] font-medium text-white">
            {hero.title}
          </h1>
          <p className="font-display max-w-xl text-[clamp(1.1rem,0.9rem+1vw,1.5rem)] font-medium text-white italic">
            {hero.subheading}
          </p>
          <p className="max-w-xl text-base text-white/80">{hero.paragraph}</p>
          <div>
            <V4Button href="https://www.gov.gr" variant="invert" className="w-fit" external>
              Visit the live platform
            </V4Button>
          </div>

          <dl className="flex flex-wrap gap-x-8 gap-y-4">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">{fact.label}</dt>
                <dd className="mt-1 text-sm text-white/90">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
          {hero.stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <span className="font-display text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-none font-medium text-white">
                {stat.value}
              </span>
              <span className="max-w-[16rem] text-sm text-white/70">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
