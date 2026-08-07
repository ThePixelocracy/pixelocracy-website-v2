"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { sharedWhoWeWorkWith, type PillarPageContent } from "@/content/pillar-pages";
import type { Pillar } from "@/content/pillars";

type EngSecHeroV4Props = {
  pillar: Pillar;
  content: PillarPageContent;
};

// Purely geometric layer widths — a small blueprint-elevation silhouette,
// never a data visualisation, so it carries no content that could drift
// out of sync with anything real.
const LAYER_WIDTHS = [100, 74, 92, 60, 84];
const LAYER_OFFSETS = [-26, 22, -18, 28, -22];
const LAYER_ROTATE = [-2.5, 2, -1.5, 2.5, -2];

/**
 * Engineering & Security's own motion concept — neither Strategy's
 * dissolving quote fragments nor Data & AI's connecting node graph.
 * Here, misaligned structural layers (offset, slightly rotated — reading
 * as unstable) assemble into a clean, aligned stack from the foundation
 * up, then a boundary frame draws closed around the finished structure:
 * complexity resolving into dependable architecture, with security as the
 * boundary that locks around it rather than a decoration bolted on after.
 *
 * The meta panel (pillar / who we work with / works best with) is framed
 * the same way — corner brackets closing in, like a blueprint annotation —
 * rather than Strategy's plain list or Data & AI's radial diagram.
 */
export function EngSecHeroV4({ pillar, content }: EngSecHeroV4Props) {
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

        <div className="flex w-full max-w-sm shrink-0 flex-col gap-10 lg:w-80">
          {/* Desktop-only — the assembling layer stack + locking frame. */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: fast ?? 0.3 }}
            className="relative hidden flex-col-reverse gap-2 py-3 lg:flex"
          >
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 1.05, ease: "easeOut" }}
              className="absolute top-0 right-0 left-0 h-px bg-foreground"
            />
            {LAYER_WIDTHS.map((width, index) => (
              <motion.div
                key={index}
                initial={{ x: LAYER_OFFSETS[index], rotate: LAYER_ROTATE[index], opacity: 0 }}
                whileInView={{ x: 0, rotate: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: fast ?? 0.55,
                  delay: fast ? 0 : index * 0.13,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{ width: `${width}%` }}
                className="h-3 bg-foreground"
              />
            ))}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 1.05, ease: "easeOut" }}
              className="absolute right-0 bottom-0 left-0 h-px bg-foreground"
            />
          </motion.div>

          {/* The meta panel — a blueprint-annotation frame, corner brackets
              closing in rather than a plain list or a radial diagram. */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.2, ease: "easeOut" }}
            className="relative p-6"
          >
            {[
              "top-0 left-0 border-t border-l",
              "top-0 right-0 border-t border-r",
              "bottom-0 left-0 border-b border-l",
              "bottom-0 right-0 border-b border-r",
            ].map((corner) => (
              <span key={corner} aria-hidden="true" className={`absolute h-3 w-3 border-foreground ${corner}`} />
            ))}
            <dl className="flex flex-col gap-5">
              {nodes.map((node) => (
                <div key={node.label}>
                  <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {node.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{node.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
