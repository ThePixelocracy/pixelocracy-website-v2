"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { pillars } from "@/content/pillars";

/**
 * Five disciplines, one team — not a repeat of the homepage's full-width
 * alternating Five Pillars index (that's the homepage's own section), but
 * a tighter linked list here, paired with the six cross-pillar
 * combination lines from the Master Plan's "Cross-Pillar Combinations"
 * section — genuinely new content, not shown anywhere else on the site,
 * describing how the disciplines actually combine rather than repeating
 * what each one is.
 */
export function AboutDisciplinesV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {aboutContent.disciplines.eyebrow}
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {aboutContent.disciplines.heading}
          </h2>
          <p className="max-w-2xl text-base text-foreground sm:text-lg">{aboutContent.disciplines.intro}</p>
        </div>

        <div className="mt-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.08, ease: "easeOut" }}
              className="border-b border-border py-6"
            >
              <Link
                href={`/services/${pillar.slug}`}
                className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-mono shrink-0 text-sm text-muted-foreground sm:w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-medium text-foreground transition-colors group-hover:text-primary sm:w-64 sm:shrink-0 sm:text-2xl">
                  {pillar.name}
                </span>
                <span className="max-w-xl text-sm text-muted-foreground sm:text-base">
                  {pillar.differentiator}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            How they combine
          </span>
          <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            {aboutContent.disciplines.combinations.map((combo, index) => (
              <motion.div
                key={combo.pair}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.4, delay: fast ? 0 : index * 0.06, ease: "easeOut" }}
                className="flex flex-col gap-1 border-b border-border pb-4"
              >
                <span className="font-mono text-xs tracking-[0.08em] text-primary uppercase">{combo.pair}</span>
                <p className="text-base text-foreground">{combo.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
