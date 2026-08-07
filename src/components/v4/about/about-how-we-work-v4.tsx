"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/about";

/**
 * How Pixelocracy works alongside clients — a plain, dense two-column
 * principle list. Deliberately the quietest, most conventional section on
 * the page: after the hero's convergence motion and the disciplines'
 * linked index, this is the "just read it" section, matching V4's own
 * rule that not every section needs a new motif.
 */
export function AboutHowWeWorkV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  const midpoint = Math.ceil(aboutContent.howWeWork.principles.length / 2);
  const columns = [
    aboutContent.howWeWork.principles.slice(0, midpoint),
    aboutContent.howWeWork.principles.slice(midpoint),
  ];

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {aboutContent.howWeWork.eyebrow}
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {aboutContent.howWeWork.heading}
          </h2>
        </div>

        <p className="mt-8 max-w-2xl text-base text-foreground sm:text-lg">{aboutContent.howWeWork.whoWeWorkWith}</p>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <ul key={columnIndex} className="flex flex-col">
              {column.map((principle, itemIndex) => (
                <motion.li
                  key={principle}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: fast ?? 0.4,
                    delay: fast ? 0 : columnIndex * 0.1 + itemIndex * 0.05,
                    ease: "easeOut",
                  }}
                  className="border-b border-border py-4 text-base text-foreground"
                >
                  {principle}
                </motion.li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
