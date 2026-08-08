"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { apeironCaseStudy } from "@/content/apeiron-case-study";

/**
 * Apeiron's own central visual/motion concept — deliberately not Cardom's
 * timeline, HHG's connection pulse, Aegean's route line, gov.gr's radial
 * convergence, or WIRED's headline pair. Apeiron's real, approved design
 * concept (see `apeiron-case-study.ts`) is a continuously moving field of
 * red pixels/dots — "always progressing, never arriving, never
 * resetting" — echoing the genuine halftone-dot globe graphic visible in
 * the real screenshots. Implemented as a seamlessly looping dot-field
 * background; a purely decorative reinforcement of the "infinity" concept
 * described in real text beside it, never the sole carrier of content, so
 * it renders as a static field (no animation) under reduced motion rather
 * than being hidden.
 */
export function ApeironMotionV4() {
  const { concept } = apeironCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;

  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="font-mono text-xs tracking-[0.14em] text-[#e60000] uppercase">{concept.eyebrow}</span>
          <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {concept.heading}
          </h2>
          <div className="flex flex-col gap-4 text-base text-foreground">
            {concept.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="relative mt-14 h-40 w-full overflow-hidden bg-black sm:h-56">
          <motion.div
            className="absolute inset-0 h-full w-[200%]"
            style={{
              backgroundImage: "radial-gradient(#e60000 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
            animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {concept.reasons.map((reason) => (
            <div key={reason.name} className="flex flex-col gap-2 border-t-2 border-[#e60000] pt-4">
              <h3 className="font-display text-base font-medium text-foreground uppercase">{reason.name}</h3>
              <p className="text-sm text-muted-foreground">{reason.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
