"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type PlatformColumn = {
  heading: string;
  detail: string;
};

type CaseStudyPlatformV4Props = {
  eyebrow: string;
  heading: string;
  paragraph: string;
  columns: PlatformColumn[];
  builtWith: string[];
  image: string;
  imageAlt: string;
};

/**
 * Shared "the platform" section — a real product screenshot beside the
 * category/tools breakdown, on the same dark full-bleed background V4
 * already uses for its darkest beat (`PillarIncludedV4`). The screenshot
 * renders with `object-contain` at its native aspect ratio rather than a
 * cropped `object-cover`: it's a real UI, not photography, so nothing is
 * trimmed out of frame. Visible at full opacity from mount — only a
 * non-hiding scale-settle, per the /work archive fix.
 */
export function CaseStudyPlatformV4({
  eyebrow,
  heading,
  paragraph,
  columns,
  builtWith,
  image,
  imageAlt,
}: CaseStudyPlatformV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-black px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">{eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-white">
              {heading}
            </h2>
            <p className="max-w-lg text-base text-white/70">{paragraph}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-16">
          <motion.div
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: fast ?? 0.8, ease: "easeOut" }}
            className="relative mx-auto aspect-[607/922] w-full max-w-xs shrink-0 overflow-hidden lg:mx-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 320px, 60vw"
              loading="eager"
              className="object-contain"
            />
          </motion.div>

          <div className="flex w-full flex-col gap-14">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {columns.map((column, index) => (
                <motion.div
                  key={column.heading}
                  initial={{ y: 16 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: fast ?? 0.55, delay: fast ? 0 : index * 0.06, ease: "easeOut" }}
                  className="flex flex-col gap-3"
                >
                  <h3 className="font-display text-lg font-medium text-white">{column.heading}</h3>
                  <p className="text-sm text-white/70">{column.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">Built with</span>
              {builtWith.map((tool) => (
                <span key={tool} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
