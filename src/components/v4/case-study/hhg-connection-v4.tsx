"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { hhgCaseStudy } from "@/content/hhg-case-study";

/**
 * HHG's own central visual/motion concept — deliberately not Cardom's
 * numbered-circle-and-line timeline. Two labelled nodes, Patient and
 * Specialist, connected by a line a small pulse travels along on a loop —
 * literally "a match, not just a slot," the platform's real job. Beneath
 * it, the booking flow renders as flat accent-topped cards (a calendar/
 * appointment-slip shape) rather than Cardom's circles-on-a-line, so the
 * two case studies never share a visual signature.
 */
export function HhgConnectionV4() {
  const { connection } = hhgCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-muted px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{connection.eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {connection.heading}
            </h2>
          </div>
          <p className="max-w-xl text-base text-foreground">{connection.paragraph}</p>
        </div>

        <div className="relative mt-16 flex items-center justify-center gap-6 sm:gap-12">
          <NodeLabel label={connection.nodes.from} />

          <div aria-hidden="true" className="relative h-px w-full max-w-md flex-1 bg-border">
            {!reducedMotion && (
              <motion.span
                className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary"
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          <NodeLabel label={connection.nodes.to} />
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {connection.journey.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-2 border-t-2 border-primary bg-background p-6"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-medium text-foreground">{step.name}</h3>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NodeLabel({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <span aria-hidden="true" className="h-3 w-3 rounded-full bg-primary" />
      <span className="font-mono text-xs tracking-[0.1em] text-foreground uppercase">{label}</span>
    </div>
  );
}
