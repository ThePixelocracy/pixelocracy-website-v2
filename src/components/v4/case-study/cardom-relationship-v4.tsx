"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cardomCaseStudy } from "@/content/cardom-case-study";

/**
 * Cardom-specific: visualises the brand relationship itself — AVIS's own
 * official logo asset (`public/client-logos/avis-svg-1.svg`) beside the
 * Cardom wordmark it commissioned. Not a shared component (the "client
 * commissions a new brand" beat is particular to Cardom's story), but the
 * pattern — a real client logo, quietly presented, no invented brand
 * assets — is available to reuse for a future project with the same shape
 * of story.
 */
export function CardomRelationshipV4() {
  const { relationship } = cardomCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-muted px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex max-w-xl flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{relationship.eyebrow}</span>
          <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {relationship.heading}
          </h2>
          <div className="flex flex-col gap-4 text-base text-foreground">
            {relationship.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: fast ?? 0.6, ease: "easeOut" }}
          className="flex shrink-0 items-center gap-8"
        >
          <div className="relative h-10 w-28 sm:h-12 sm:w-32">
            <Image src="/client-logos/avis-svg-1.svg" alt="AVIS" fill className="object-contain object-left" />
          </div>
          <span aria-hidden="true" className="text-2xl font-light text-muted-foreground">
            ×
          </span>
          <span className="font-display text-2xl font-medium text-foreground sm:text-3xl">Cardom</span>
        </motion.div>
      </div>
    </section>
  );
}
