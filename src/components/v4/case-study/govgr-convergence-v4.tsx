"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { govgrCaseStudy } from "@/content/govgr-case-study";

const NODE_COUNT = 12;
const RADIUS = 160;
const CENTER = 200;
const LINE_END_RADIUS = 66;

// Rounded to 2 decimal places so the server-rendered and client-hydrated
// markup are byte-identical — raw Math.cos/sin output can differ in the
// last decimal place between server and browser JS engines, which React
// flags as a hydration mismatch even though the visual difference is
// imperceptible.
const round = (value: number) => Math.round(value * 100) / 100;

const NODES = Array.from({ length: NODE_COUNT }, (_, i) => {
  const angle = (i / NODE_COUNT) * Math.PI * 2;
  return {
    x: round(CENTER + RADIUS * Math.cos(angle)),
    y: round(CENTER + RADIUS * Math.sin(angle)),
    lineX: round(CENTER + LINE_END_RADIUS * Math.cos(angle)),
    lineY: round(CENTER + LINE_END_RADIUS * Math.sin(angle)),
  };
});

/**
 * gov.gr's own central visual/motion concept — deliberately not Cardom's
 * linear timeline, HHG's two-node pulse, or Aegean's scrolling route line.
 * A radial convergence: many points arranged in a circle, each connected
 * by a line that draws inward toward a single centre — "complexity
 * becoming one simple point of access" as a literal many-to-one diagram.
 * The nodes and the centre label are always fully rendered and legible;
 * only the connecting lines' draw-in is animated, and only as decorative
 * reinforcement of the "2,000+ services / gov.gr" figures printed in real
 * text beside it — nothing here is the sole carrier of information.
 */
export function GovgrConvergenceV4() {
  const { challenge } = govgrCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{challenge.eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {challenge.heading}
            </h2>
            <div className="flex flex-col gap-4 text-base text-foreground">
              {challenge.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <svg viewBox="0 0 400 400" aria-hidden="true" className="h-full w-full">
              {NODES.map((node, index) => (
                <motion.line
                  key={index}
                  x1={node.x}
                  y1={node.y}
                  x2={node.lineX}
                  y2={node.lineY}
                  stroke="var(--color-border)"
                  strokeWidth={1.5}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: fast ?? 0.7, delay: fast ? 0 : 0.3 + index * 0.04, ease: "easeOut" }}
                />
              ))}
              {NODES.map((node, index) => (
                <circle key={`dot-${index}`} cx={node.x} cy={node.y} r={5} fill="var(--color-primary)" />
              ))}
              <circle cx={CENTER} cy={CENTER} r={58} fill="var(--color-background)" stroke="var(--color-primary)" strokeWidth={2} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
              <span className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                {challenge.convergence.metric}
              </span>
              <span className="font-mono text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase">
                {challenge.convergence.metricLabel}
              </span>
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.1em] text-primary uppercase">
              → {challenge.convergence.resultLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
