"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { apeironCaseStudy } from "@/content/apeiron-case-study";

/**
 * "Three Directions" — the genuine design-process narrative: three
 * concepts explored, one selected. A three-card row with the winner
 * visibly marked, rather than the shared two-column before/after
 * comparison (which doesn't fit a three-way exploration).
 */
export function ApeironDirectionsV4() {
  const { directions } = apeironCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-muted px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="font-mono text-xs tracking-[0.14em] text-[#e60000] uppercase">{directions.eyebrow}</span>
          <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {directions.heading}
          </h2>
          <div className="flex flex-col gap-4 text-base text-foreground">
            {directions.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {directions.concepts.map((concept, index) => (
            <motion.div
              key={concept.name}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.08, ease: "easeOut" }}
              className={`flex flex-col gap-3 p-7 ${
                concept.selected ? "bg-[#e60000] text-white" : "bg-background text-foreground"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs tracking-[0.1em] uppercase opacity-70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {concept.selected && (
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium uppercase">
                    Selected
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-medium">{concept.name}</h3>
              <p className={`text-sm ${concept.selected ? "text-white/85" : "text-muted-foreground"}`}>
                {concept.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
