"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { pillars } from "@/content/pillars";

/**
 * An editorial index, not a card grid: each pillar is one huge, full-width
 * statement. Alternating alignment keeps the rhythm asymmetric rather than
 * a repeated template.
 *
 * Each row assembles as it scrolls into view: the number and supporting
 * copy slide in from whichever outer edge they actually sit on that row —
 * converging toward the middle, not a uniform direction — while the
 * heading reveals through a directional wipe: an overflow-hidden mask over
 * a translateX, x-only (no opacity), so it genuinely reads as a wipe, not
 * a fade.
 *
 * The trigger lives on the (untransformed) wrapper, and the heading only
 * carries `variants` cascading from it — not its own `initial`/`whileInView`.
 * `whileInView`'s visibility check measures the animated element's own
 * *post-transform* bounding box, and offsetting the heading far enough to
 * fully hide it behind the mask pushes that box mostly outside the
 * viewport, so it can never satisfy its own visibility threshold and the
 * animation never fires. The wrapper never moves, so it triggers reliably;
 * the heading just rides along.
 *
 * Coordinated stagger (number → heading → copy), not one synchronized
 * block, and no opacity+translateY as the primary mover.
 */
export function CapabilitiesV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section id="capabilities" className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between border-b border-foreground pb-6">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            What we do
          </span>
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Five pillars, one team
          </span>
        </div>

        {pillars.map((pillar, index) => {
          const reversed = index % 2 === 1;
          // Number and heading share a side (both sit right of copy when
          // reversed); copy sits on the opposite side — each arrives from
          // the edge it actually occupies, converging toward the centre.
          const numberFromX = reversed ? 28 : -28;
          const copyFromX = reversed ? -28 : 28;
          // Comfortably wider than any rendered heading width at this
          // column span (up to ~600px), so the mask always fully hides it.
          const headingFromX = reversed ? 700 : -700;

          return (
            <Link
              key={pillar.slug}
              href={`/services/${pillar.slug}`}
              className="group grid grid-cols-1 items-center gap-4 border-b border-border py-10 sm:grid-cols-12 sm:gap-6 sm:py-14"
            >
              <motion.span
                initial={{ opacity: 0, x: numberFromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
                className={`font-mono order-1 text-sm text-muted-foreground sm:col-span-1 ${reversed ? "sm:order-3 sm:text-right" : "sm:order-1"}`}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className={`order-2 overflow-hidden sm:col-span-6 ${reversed ? "sm:order-3" : "sm:order-2"}`}
              >
                <motion.h3
                  variants={{ hidden: { x: headingFromX }, visible: { x: 0 } }}
                  transition={{ duration: fast ?? 0.65, delay: fast ? 0 : 0.08, ease: [0.76, 0, 0.24, 1] }}
                  className={`font-display text-[clamp(1.75rem,1rem+4vw,3.5rem)] leading-[1.02] font-medium text-foreground transition-colors group-hover:text-primary ${reversed ? "sm:text-right" : ""}`}
                >
                  {pillar.heading}
                </motion.h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: copyFromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.16, ease: "easeOut" }}
                className={`order-3 flex flex-col gap-2 sm:col-span-5 ${reversed ? "sm:order-1 sm:items-start sm:text-left" : "sm:order-3 sm:items-end sm:text-right"}`}
              >
                <p className="max-w-sm text-base text-foreground">{pillar.differentiator}</p>
                <span className="font-cta inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Learn more
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
