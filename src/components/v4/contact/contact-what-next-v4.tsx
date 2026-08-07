"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { contactContent } from "@/content/contact";

/**
 * A short, honest closing note — not a fabricated multi-step process. Only
 * one operational fact is verified anywhere in the repository ("usually
 * responds within 1 business day"), so that's the entire claim made here.
 */
export function ContactWhatNextV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 pb-24 sm:px-8 sm:pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: fast ?? 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl border-t border-border pt-8"
      >
        <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
          {contactContent.whatNext.eyebrow}
        </span>
        <p className="mt-3 max-w-xl text-base text-foreground sm:text-lg">{contactContent.whatNext.paragraph}</p>
      </motion.div>
    </section>
  );
}
