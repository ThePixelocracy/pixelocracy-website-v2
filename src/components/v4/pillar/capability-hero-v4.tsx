"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { sharedWhoWeWorkWith, type PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type CapabilityHeroV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
};

// Purely geometric team-mark positions — never avatars, never a
// connect-the-dots diagram (that language belongs to Data & AI). Five
// marks scattered around the source, close enough to read as one team.
const TEAM_MARKS = [
  { x: 8, y: 6 },
  { x: 62, y: 2 },
  { x: 88, y: 34 },
  { x: 20, y: 46 },
  { x: 68, y: 52 },
];

/**
 * Capability Building's own motion concept — the opposite shape from
 * every other pillar's hero. Strategy dissolves, Data & AI connects,
 * Engineering assembles-and-locks, Digital Products refines — all of them
 * end with something arriving and staying. Here, one solid source mark
 * transfers outward: team marks scale in one by one (external expertise
 * reaching individual people), and only once every mark is fully present
 * does the source itself recede to a hollow outline — external input
 * withdrawing while the capability it left behind remains completely
 * solid. The page's whole claim ("we succeed when you don't need us
 * anymore") happens once, physically, in the first four seconds.
 */
export function CapabilityHeroV4({ pillar, content }: CapabilityHeroV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  useEffect(() => setMounted(true), []);

  const nodes = [
    { label: "Pillar", value: content.meta?.pillar ?? pillar.heading },
    { label: "Who we work with", value: sharedWhoWeWorkWith },
    ...(content.meta?.worksBestWith ? [{ label: "Works best with", value: content.meta.worksBestWith }] : []),
    ...(content.meta?.typicalEngagement
      ? [{ label: "Typical engagement", value: content.meta.typicalEngagement }]
      : []),
  ];

  const teamDelayStart = 0.35;
  const teamStagger = 0.16;
  const withdrawDelay = teamDelayStart + TEAM_MARKS.length * teamStagger + 0.3;

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

        <div className="flex w-full max-w-sm shrink-0 flex-col gap-12 lg:w-80">
          {/* Desktop-only — the transfer-then-withdrawal diagram. */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: fast ?? 0.3 }}
            className="relative hidden h-40 lg:block"
          >
            {TEAM_MARKS.map((mark, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: fast ?? 0.4,
                  delay: fast ? 0 : teamDelayStart + index * teamStagger,
                  ease: "easeOut",
                }}
                style={{ left: `${mark.x}%`, top: `${mark.y}%` }}
                className="absolute h-3 w-3 bg-primary"
              />
            ))}

            {/* The source mark: solid, then recedes to a hollow outline once
                every team mark has arrived. */}
            <span className="absolute bottom-0 left-[42%] h-5 w-5 bg-primary">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: fast ?? 0.5, delay: fast ? 0 : withdrawDelay, ease: "easeOut" }}
                className="absolute inset-0 border border-primary bg-background"
              />
            </span>
          </motion.div>

          {/* The meta panel — deliberately the quietest of any pillar's:
              no entrance gimmick, just present, stable, already there. */}
          <dl className="flex flex-col gap-5 border-t border-border pt-6">
            {nodes.map((node) => (
              <div key={node.label}>
                <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{node.label}</dt>
                <dd className="mt-1 text-sm text-foreground">{node.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
