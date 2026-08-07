"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type EngSecObjectionsV4Props = {
  content: PillarPageContent;
};

/**
 * Concerns rendered as reinforced cases, not Strategy's alternating quotes
 * or Data & AI's signal log: each row's left edge grows from a thin line
 * into a solid structural bar as it resolves — fragile becoming reinforced,
 * expressed through the border itself rather than a quotation mark or a
 * mono index alone. One calm column, left-aligned throughout.
 */
export function EngSecObjectionsV4({ content }: EngSecObjectionsV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Typical situations we solve
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            We&apos;ve heard this before
          </h2>
          <div className="max-w-xl text-base text-muted-foreground">
            {content.objections.intro.map((line) => (
              <p key={line} className="mt-2 first:mt-0">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4">
          {content.objections.items.map((item, index) => (
            <div key={item.quote} className="relative py-7">
              <motion.span
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "top center" }}
                className="absolute top-0 bottom-0 left-0 w-[3px] bg-primary"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.1, ease: "easeOut" }}
                className="flex flex-col gap-2 border-b border-border pb-7 pl-6 last:border-b-0"
              >
                <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
                  Case {String(index + 1).padStart(2, "0")}
                </span>
                <p className="max-w-2xl text-lg text-foreground">{item.quote}</p>
                {item.answer && (
                  <p className="font-cta max-w-xl text-sm font-medium text-foreground sm:text-base">
                    <span aria-hidden="true" className="mr-2 text-primary">
                      →
                    </span>
                    {item.answer}
                  </p>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
