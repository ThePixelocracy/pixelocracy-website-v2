"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { wiredCaseStudy } from "@/content/wired-case-study";

/**
 * "Joining a Legacy" — narrative text beside a real WIRED Greece article
 * page, presented at a slight, tasteful tilt (a page laid down, not a
 * flat mockup) to keep the editorial-feature framing distinct from every
 * other case study's product-screenshot treatment. The image is a
 * genuine screenshot (`wired-hero.png`) — the tilt is a CSS transform on
 * the frame, not a manipulation of the screenshot's own content.
 */
export function WiredLegacyV4() {
  const { legacy } = wiredCaseStudy;
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
            <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">{legacy.eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
              {legacy.heading}
            </h2>
            <div className="flex flex-col gap-4 text-base text-foreground">
              {legacy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ rotate: 3, scale: 1.02 }}
            whileInView={{ rotate: 2, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: fast ?? 0.7, ease: "easeOut" }}
            className="relative mx-auto aspect-[602/763] w-full max-w-[18rem] overflow-hidden border border-border shadow-xl sm:max-w-sm"
          >
            <Image
              src="/case-studies/wired-hero.png"
              alt="A real WIRED Greece article page"
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
