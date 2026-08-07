"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A cinematic pause, composed asymmetrically — left-aligned, not centered;
 * pure black, not navy; a single oversized quotation mark as the only
 * graphic device, not a pixel field. Deliberately the opposite composition
 * from V3's manifesto moment. Design and layout unchanged — only entrance
 * motion added, once, as the section scrolls into view.
 *
 * Three distinct, restrained treatments (not the same recipe repeated):
 * the quotation mark settles in with scale; the vision line rises through
 * an overflow mask (same untransformed-wrapper + variants pattern as the
 * Five Pillars heading wipe — self-measuring whileInView on a transformed
 * element can fail to trigger); the mission line is a plain, quiet opacity
 * fade with no movement at all, staying the quietest element in the frame.
 */
export function ManifestoV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section id="manifesto" className="bg-black px-6 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: fast ?? 0.6, ease: "easeOut" }}
          className="font-display leading-none text-primary select-none"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
        >
          &ldquo;
        </motion.span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="-mt-16 max-w-4xl overflow-hidden sm:-mt-24"
        >
          <motion.p
            variants={{ hidden: { y: 64 }, visible: { y: 0 } }}
            transition={{ duration: fast ?? 0.75, delay: fast ? 0 : 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-[clamp(2rem,1.2rem+4.5vw,5rem)] leading-[1.05] font-medium text-white"
          >
            To eliminate mediocrity in technology adoption.
          </motion.p>
        </motion.div>

        <div className="flex justify-end">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: fast ?? 0.8, delay: fast ? 0 : 0.35 }}
            className="max-w-md text-right text-base text-white/60 sm:text-lg"
          >
            To help ambitious organizations turn business challenges into practical technology
            solutions that improve efficiency, create measurable value, and build lasting
            capability, leaving every organization stronger than we found it.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
