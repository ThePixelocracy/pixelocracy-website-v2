"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type CapabilityExperienceV4Props = {
  content: PillarPageContent;
};

/**
 * Proof as sustained independence, not Strategy's scale-in numerals,
 * Data & AI's count-up figures, Engineering's bracket-framed spec sheets,
 * or Digital Products' fill-meter/fact-list: a marker travels the length
 * of a timeline and comes to rest at the approved outcome — duration
 * continuing, not a quantity filling. Both this pillar's proof points are
 * literally about time passing after the engagement ended, so the device
 * matches the content rather than being a generic mould.
 */
export function CapabilityExperienceV4({ content }: CapabilityExperienceV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Selected experience
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {content.experience.heading}
          </h2>
          {content.experience.intro && (
            <p className="max-w-xl text-base text-muted-foreground">{content.experience.intro}</p>
          )}
        </div>

        <div>
          {content.experience.items.map((item, index) => (
            <div key={item.name} className="border-b border-border py-10 last:border-b-0 sm:py-14">
              <span className="font-mono text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {String(content.experience.items.length).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-2 text-[clamp(1.5rem,1rem+2vw,2.25rem)] leading-[1.1] font-medium text-foreground">
                {item.name}
              </h3>
              <p className="mt-3 max-w-md text-base text-foreground">{item.description}</p>

              <div className="relative mt-8 h-px w-full max-w-md bg-border">
                <motion.span
                  aria-hidden="true"
                  initial={{ left: "0%" }}
                  whileInView={{ left: "calc(100% - 0.625rem)" }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: fast ?? 1.1, ease: "easeOut" }}
                  className="absolute -top-1 h-2.5 w-2.5 bg-primary"
                />
              </div>
              {item.metric && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.9, ease: "easeOut" }}
                  className="mt-4 max-w-md text-base font-medium text-primary"
                >
                  {item.metric}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
