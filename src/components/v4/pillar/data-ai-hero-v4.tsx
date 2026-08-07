"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { sharedWhoWeWorkWith, type PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type DataAiHeroV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
};

type MetaNode = { label: string; value: string };

/**
 * The Data, AI & Automation hero's own motion concept — deliberately not a
 * repeat of Strategy & Advisory's dissolving-quote-fragments hero. Here the
 * meta facts (pillar, who we work with, works best with) *are* a small
 * connected-node diagram, not a bordered definition list: disconnected
 * signals drawing themselves into one coherent hub, which is the literal
 * shape of this pillar's whole promise. Line-draw (SVG `pathLength`) is a
 * genuinely different primitive from Strategy's mask/wipe and fade-dissolve
 * techniques, and it sits beside the headline rather than over it, so there
 * is no risk of reading as the same device.
 *
 * Desktop gets the radial diagram; mobile gets a plain stacked list instead
 * of a shrunk graph — a deliberate reduction in visualisation complexity,
 * not the same diagram scaled down.
 */
export function DataAiHeroV4({ pillar, content }: DataAiHeroV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  useEffect(() => setMounted(true), []);

  const nodes: MetaNode[] = [
    { label: "Pillar", value: content.meta?.pillar ?? pillar.heading },
    { label: "Who we work with", value: sharedWhoWeWorkWith },
    ...(content.meta?.worksBestWith ? [{ label: "Works best with", value: content.meta.worksBestWith }] : []),
    ...(content.meta?.typicalEngagement
      ? [{ label: "Typical engagement", value: content.meta.typicalEngagement }]
      : []),
  ];

  const radius = 40;
  const positioned = nodes.map((node, index) => {
    const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...node,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  });

  return (
    <section className="relative bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
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

        {/* Desktop — the connected-node diagram doubling as the meta panel. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: fast ?? 0.4, delay: fast ? 0 : 0.3 }}
          className="relative hidden h-80 w-80 shrink-0 lg:block xl:h-96 xl:w-96"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            {positioned.map((node, index) => (
              <motion.line
                key={node.label}
                x1={50}
                y1={50}
                x2={node.x}
                y2={node.y}
                stroke="var(--color-border)"
                strokeWidth={0.6}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: fast ?? 0.7, delay: fast ? 0 : 0.4 + index * 0.12, ease: "easeOut" }}
              />
            ))}
            <motion.circle
              cx={50}
              cy={50}
              r={2.6}
              className="fill-primary"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.4, delay: fast ? 0 : 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "50px 50px" }}
            />
          </svg>

          {positioned.map((node, index) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.4, delay: fast ? 0 : 0.55 + index * 0.12, ease: "easeOut" }}
              className="absolute w-28 max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span className="font-mono block text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
                {node.label}
              </span>
              <span className="mt-1 block text-xs leading-snug text-foreground">{node.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile — a plain stacked list, not the same diagram shrunk down. */}
        <dl className="flex flex-col gap-5 border-t border-border pt-6 lg:hidden">
          {nodes.map((node) => (
            <div key={node.label}>
              <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{node.label}</dt>
              <dd className="mt-1 text-sm text-foreground">{node.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
