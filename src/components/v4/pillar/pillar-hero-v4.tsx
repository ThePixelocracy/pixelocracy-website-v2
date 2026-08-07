"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { sharedWhoWeWorkWith, type PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type PillarHeroV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
};

// Asymmetric resting spots for the scattered "signal" fragments — desktop
// only, four presets covering different corners of the top band so the
// scatter never reads as a tidy row. Content supplies 3-4 objection quotes
// depending on the pillar; presets are consumed in order and simply unused
// past the available count.
const FRAGMENT_POSITION = [
  "top-0 left-[4%] -rotate-3",
  "top-10 left-[42%] rotate-2",
  "top-24 left-[10%] rotate-1",
  "top-4 left-[70%] -rotate-2",
];

/**
 * The pillar hero's own motion concept — deliberately not the homepage's
 * kinetic single-word reveal reused unchanged. The "signal" here is plural
 * and literal: a handful of the real client objections this pillar answers
 * (content-driven from `content.objections`, never invented) scattered
 * across the top of the frame like noise, dissolving away as the actual
 * headline, positioning statement and engagement facts settle in beneath
 * them. Ambiguity clearing into direction — fragmentation → organisation →
 * clarity expressed through a new technique in the same family as the rest
 * of V4 (mount-triggered settle, not a scroll-jack), not a copy-paste of the
 * hero's kinetic-word mechanic.
 *
 * Fragments are desktop-only decorative motion, conditionally mounted so
 * their entrance plays cleanly on appearance. The headline cascade below
 * uses the same `whileInView` + reduced-duration-when-reduced-motion
 * convention as every other V4 section (Capabilities, Manifesto, CTA) — it
 * is present in the SSR markup and fully legible; motion never gates access
 * to it.
 */
export function PillarHeroV4({ pillar, content }: PillarHeroV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const fragments = content.objections.items.slice(0, 4).map((item) => item.quote);
  const showFragments = mounted && isDesktop && !reducedMotion;

  return (
    <section className="relative overflow-hidden bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      {showFragments && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-16 z-0 hidden h-64 lg:block"
        >
          <div className="mx-auto h-full max-w-6xl px-12">
            {fragments.map((quote, index) => (
              <motion.p
                key={quote}
                initial={{ opacity: 0.9, y: 0 }}
                animate={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.9, delay: 0.15 + index * 0.08, ease: "easeOut" }}
                className={`font-mono absolute max-w-[16rem] text-xs text-muted-foreground/70 ${FRAGMENT_POSITION[index % FRAGMENT_POSITION.length]}`}
              >
                &ldquo;{quote}&rdquo;
              </motion.p>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
            className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase"
          >
            Pillar {String(content.number).padStart(2, "0")} — {pillar.name}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.08, ease: "easeOut" }}
            className="font-display text-[clamp(2.5rem,1.2rem+5vw,5.5rem)] leading-[0.98] font-medium text-foreground"
          >
            {pillar.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.16, ease: "easeOut" }}
            className="font-display text-[clamp(1.1rem,0.9rem+1vw,1.5rem)] font-medium text-foreground italic"
          >
            {content.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.24, ease: "easeOut" }}
            className="flex flex-col gap-4 text-base text-foreground"
          >
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-xl">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.32, ease: "easeOut" }}
          >
            <V4Button href="/contact" variant="primary" className="w-fit">
              Book a discovery call
            </V4Button>
          </motion.div>
        </div>

        {content.meta && (
          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.4, ease: "easeOut" }}
            className="flex max-w-xs flex-col gap-6 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
          >
            <div>
              <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">Pillar</dt>
              <dd className="mt-1 text-sm text-foreground">{content.meta.pillar}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                Who we work with
              </dt>
              <dd className="mt-1 text-sm text-foreground">{sharedWhoWeWorkWith}</dd>
            </div>
            {content.meta.worksBestWith && (
              <div>
                <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  Works best with
                </dt>
                <dd className="mt-1 text-sm text-foreground">{content.meta.worksBestWith}</dd>
              </div>
            )}
            {content.meta.typicalEngagement && (
              <div>
                <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  Typical engagement
                </dt>
                <dd className="mt-1 text-sm text-foreground">{content.meta.typicalEngagement}</dd>
              </div>
            )}
          </motion.dl>
        )}
      </div>
    </section>
  );
}
