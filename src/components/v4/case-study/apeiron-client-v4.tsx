"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { apeironCaseStudy } from "@/content/apeiron-case-study";

/**
 * "The Client" — narrative text beside the real Apeiron site at a slight
 * editorial tilt (the same device-mockup crop the legacy homepage already
 * uses as `image`), plus a plain-text mention of real portfolio company
 * names read off the genuine screenshots — no reconstructed logo graphics
 * for companies whose logo files aren't actually in the repository.
 */
export function ApeironClientV4() {
  const { client } = apeironCaseStudy;
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.14em] text-[#e60000] uppercase">{client.eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {client.heading}
            </h2>
            <div className="flex flex-col gap-4 text-base text-foreground">
              {client.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-2 max-w-lg border-t border-border pt-4 text-sm text-muted-foreground">
              {client.portfolioNote}
            </p>
          </div>

          <motion.div
            initial={{ rotate: -3, scale: 1.02 }}
            whileInView={{ rotate: -2, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: fast ?? 0.7, ease: "easeOut" }}
            className="relative mx-auto aspect-[605/850] w-full max-w-[18rem] overflow-hidden border border-border shadow-xl sm:max-w-sm"
          >
            <Image
              src="/case-studies/apeiron-hero.png"
              alt="The real Apeiron Ventures site, portrait crop"
              fill
              sizes="(min-width: 1024px) 380px, 70vw"
              loading="eager"
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
