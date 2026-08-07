"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { clientLogos } from "@/content/client-logos";

const SECONDS_PER_LOGO = 3.5;

function LogoMark({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative h-8 w-[110px] shrink-0">
      <Image
        src={src}
        alt={name}
        fill
        sizes="110px"
        className="object-contain opacity-50 grayscale"
      />
    </div>
  );
}

/**
 * A continuous, seamless logo marquee: the full logo set is rendered twice
 * back to back, and the track translates by exactly -50% of its own width
 * on an infinite linear loop — since the second copy is identical to the
 * first, the loop point is visually indistinguishable from the start, with
 * no jump. Speed scales with the logo count so the perceived pace (px/s)
 * stays constant regardless of how many logos are in the set.
 *
 * Each logo sits in a fixed-size box (`fill` + `object-contain`) rather
 * than a shared width/height on the <Image>, since the real assets span
 * wildly different aspect ratios (JTI is near-square, Ktimatologio is
 * almost 7:1) — a single width/height pair would force Next's inferred
 * aspect-ratio onto every logo and distort most of them.
 *
 * Restrained on purpose: no cards, boxes, or shadows — just the marks,
 * quiet and grayscale, with a soft edge mask so they fade in/out rather
 * than cutting off hard at the container edge.
 */
export function LogoMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;

  const duration = clientLogos.length * SECONDS_PER_LOGO;

  if (reducedMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {clientLogos.map((logo) => (
          <LogoMark key={logo.name} name={logo.name} src={logo.src} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="w-full overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
        className="flex w-max items-center gap-16"
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-16">
            {clientLogos.map((logo) => (
              <LogoMark key={logo.name} name={logo.name} src={logo.src} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
