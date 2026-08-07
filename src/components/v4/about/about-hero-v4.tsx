"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";
import { aboutContent } from "@/content/about";
import { pillars } from "@/content/pillars";

// Scattered starting positions for the five pillar tags — desktop only.
// Each pillar arrives from wherever it visually "lives" and converges into
// one aligned row, never into a single point (that convergence-to-a-hub
// language belongs to Data & AI) and never disappearing (that withdrawal
// language belongs to Capability Building).
const SCATTER = [
  { x: -18, y: -22, rotate: -4 },
  { x: 22, y: 14, rotate: 3 },
  { x: -10, y: 20, rotate: -2 },
  { x: 16, y: -16, rotate: 4 },
  { x: -24, y: 6, rotate: -3 },
];

/**
 * The About page's own motion concept — none of the five pillar heroes'
 * languages (no dissolve, no node-graph, no assembling structure, no
 * refining typography, no transfer-then-withdrawal), and not the homepage
 * hero either. Here the five real pillars — as themselves, not abstract
 * marks — start scattered around the headline and converge into one
 * aligned, linked row beneath it: five disciplines organising into a
 * single working line. Every tag stays a real link to its own pillar page,
 * so the hero doubles as functional wayfinding between the two — a device
 * only this page needs, since it's the one place the five pillars are
 * discussed together as one identity.
 */
export function AboutHeroV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative bg-background px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
          className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase"
        >
          {aboutContent.hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.08, ease: "easeOut" }}
          className="font-display max-w-3xl text-[clamp(2.5rem,1.2rem+5vw,5rem)] leading-[1] font-medium text-foreground"
        >
          {aboutContent.hero.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.16, ease: "easeOut" }}
          className="font-display max-w-xl text-[clamp(1.1rem,0.9rem+1vw,1.5rem)] font-medium text-foreground italic"
        >
          {aboutContent.hero.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 0.24, ease: "easeOut" }}
          className="flex max-w-2xl flex-col gap-4 text-base text-foreground"
        >
          {aboutContent.hero.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Desktop — five scattered pillar tags converging into one row.
            A real flex-wrap row handles spacing/wrapping correctly for
            labels of any length; the scatter is a transform overlay on
            top of each tag's own natural position, not an absolute
            percentage placement (which collided for longer pillar names). */}
        <div className="hidden w-full max-w-2xl flex-col items-center gap-6 lg:flex">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {pillars.map((pillar, index) => {
              const scatter = SCATTER[index % SCATTER.length];
              return (
                <motion.div
                  key={pillar.slug}
                  initial={{ opacity: 0, x: `${scatter.x}%`, y: `${scatter.y}%`, rotate: scatter.rotate }}
                  whileInView={{ opacity: 1, x: "0%", y: "0%", rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: fast ?? 0.6,
                    delay: fast ? 0 : 0.4 + index * 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <Link
                    href={`/services/${pillar.slug}`}
                    className="font-mono block text-nowrap text-xs tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-primary"
                  >
                    {pillar.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: fast ?? 0.6, delay: fast ? 0 : 1, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
            className="h-px w-full bg-border"
          />
        </div>

        {/* Mobile/tablet — a plain stacked list of links, not the scatter. */}
        <nav aria-label="Service pillars" className="flex flex-col gap-3 border-t border-border pt-6 lg:hidden">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/services/${pillar.slug}`}
              className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {pillar.name}
            </Link>
          ))}
        </nav>

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
    </section>
  );
}
