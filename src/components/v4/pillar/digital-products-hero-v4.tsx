"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { sharedWhoWeWorkWith, type PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type DigitalProductsHeroV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
};

// Per-word "rough" starting states — each word individually unrefined
// (rotated, offset, skewed), never uniform — so the resolve into a clean
// baseline reads as genuine refinement, not a single shared effect.
const ROUGH_STATES = [
  { rotate: -3, y: 7, skewX: -4 },
  { rotate: 2.5, y: -6, skewX: 3 },
  { rotate: -2, y: 5, skewX: -3 },
  { rotate: 3, y: -7, skewX: 4 },
];

/**
 * Digital Products & UI/UX's own motion concept — neither Strategy's
 * dissolving fragments, Data & AI's connecting node graph, nor Engineering
 * & Security's assembling structural bars. Here the transformation happens
 * inside the headline's own typography: each word starts individually
 * rough (rotated, offset, skewed) and settles into a clean, aligned
 * baseline — rough product states becoming refined, usable experiences,
 * expressed through the real H1 rather than a separate decorative graphic.
 *
 * The meta panel responds to hover with a sliding accent bar — a small,
 * real micro-interaction rather than autoplay decoration, appropriate for
 * a pillar about interfaces that respond to intent.
 */
export function DigitalProductsHeroV4({ pillar, content }: DigitalProductsHeroV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  useEffect(() => setMounted(true), []);

  const words = pillar.heading.split(" ");

  const nodes = [
    { label: "Pillar", value: content.meta?.pillar ?? pillar.heading },
    { label: "Who we work with", value: sharedWhoWeWorkWith },
    ...(content.meta?.worksBestWith ? [{ label: "Works best with", value: content.meta.worksBestWith }] : []),
    ...(content.meta?.typicalEngagement
      ? [{ label: "Typical engagement", value: content.meta.typicalEngagement }]
      : []),
  ];

  return (
    <section className="relative bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
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

          <h1 className="font-display flex flex-wrap gap-x-4 text-[clamp(2.5rem,1.2rem+5vw,5.5rem)] leading-[0.98] font-medium text-foreground">
            {words.map((word, index) => {
              const rough = ROUGH_STATES[index % ROUGH_STATES.length];
              return (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, rotate: rough.rotate, y: rough.y, skewX: rough.skewX }}
                  whileInView={{ opacity: 1, rotate: 0, y: 0, skewX: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: fast ?? 0.7, delay: fast ? 0 : 0.08 + index * 0.09, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.5, ease: "easeOut" }}
            className="font-display text-[clamp(1.1rem,0.9rem+1vw,1.5rem)] font-medium text-foreground italic"
          >
            {content.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.58, ease: "easeOut" }}
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
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.66, ease: "easeOut" }}
          >
            <V4Button href="/contact" variant="primary" className="w-fit">
              Book a discovery call
            </V4Button>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.3, ease: "easeOut" }}
          className="flex w-full max-w-sm shrink-0 flex-col lg:w-80"
        >
          {nodes.map((node) => (
            <div key={node.label} className="group relative border-b border-border py-5 first:border-t">
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-0 w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100"
              />
              <div className="pl-4">
                <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {node.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{node.value}</dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
