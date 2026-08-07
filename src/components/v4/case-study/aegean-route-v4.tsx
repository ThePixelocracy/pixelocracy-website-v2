"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { aegeanCaseStudy } from "@/content/aegean-case-study";

/**
 * Aegean Motorway's own central visual/motion concept — deliberately not
 * Cardom's circles-on-a-line or HHG's two-node pulse. A continuously
 * scrolling dashed line styled like highway lane markings (the sense of
 * moving forward along a road, not a discrete step-by-step process),
 * with kilometre-post-style waypoint markers along it standing for the
 * live information categories the platform delivers. The line only
 * animates when motion is not reduced; the markers and their labels are
 * always fully rendered and legible regardless.
 */
export function AegeanRouteV4() {
  const { route } = aegeanCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-black px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">{route.eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-white">
              {route.heading}
            </h2>
          </div>
          <p className="max-w-xl text-base text-white/70">{route.paragraph}</p>
        </div>

        <div aria-hidden="true" className="relative mt-16 h-2 w-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 h-full w-[200%]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--color-primary) 0, var(--color-primary) 28px, transparent 28px, transparent 56px)",
            }}
            animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {route.waypoints.map((waypoint, index) => (
            <motion.div
              key={waypoint.name}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <span aria-hidden="true" className="h-4 w-px bg-primary" />
              <span className="font-mono text-xs tracking-[0.1em] text-white/50 uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-medium text-white">{waypoint.name}</h3>
              <p className="text-sm text-white/70">{waypoint.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
