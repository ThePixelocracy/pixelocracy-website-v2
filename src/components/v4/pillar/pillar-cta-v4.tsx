"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import type { PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type PillarCtaV4Props = {
  content: PillarPageContent;
  currentSlug: string;
  allPillars: Pillar[];
};

/**
 * The bookend — reuses the homepage CTA's overflow-mask wipe technique
 * (the same device also closes the Five Pillars heading and the nav panel)
 * rather than inventing a fourth reveal style, applied here to this
 * pillar's own dynamic closing line instead of the homepage's fixed
 * "Get in / touch." two-line close. Paragraph and button stay fully static
 * and immediately usable, per the same rule the homepage CTA follows.
 * Related pillars are plain text links, never pill badges.
 */
export function PillarCtaV4({ content, currentSlug, allPillars }: PillarCtaV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  const otherPillars = allPillars.filter((pillar) => pillar.slug !== currentSlug);

  return (
    <section className="bg-background px-6 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <h2 className="font-display max-w-4xl text-[clamp(2.25rem,1.2rem+5.5vw,5.5rem)] leading-[1] font-medium text-foreground">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} className="overflow-hidden">
            <motion.span
              variants={{ hidden: { y: 120 }, visible: { y: 0 } }}
              transition={{ duration: fast ?? 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="block"
            >
              {content.cta.heading}
            </motion.span>
          </motion.div>
        </h2>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-lg flex-col gap-4 text-lg text-foreground">
            <p>{content.cta.paragraph}</p>
          </div>
          <V4Button href="/contact" variant="primary" className="w-fit">
            Book a discovery call
          </V4Button>
        </div>

        {otherPillars.length > 0 && (
          <div className="mt-6 flex flex-col gap-4 border-t border-border pt-8">
            <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Other pillars
            </span>
            <nav aria-label="Other service pillars" className="flex flex-wrap gap-x-8 gap-y-3">
              {otherPillars.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={`/services/${pillar.slug}`}
                  className="group inline-flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="border-b border-transparent transition-colors group-hover:border-foreground">
                    {pillar.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
