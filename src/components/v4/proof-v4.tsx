"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { proofPointsV4 } from "@/content/proof-points-v4";
import { cn } from "@/lib/utils";

const COUNT = proofPointsV4.length;

// Alternating corner placements — an asymmetric composition, not a grid: no
// two consecutive proof points land in the same spot.
const POSITION = [
  "items-start justify-start text-left",
  "items-end justify-end text-right",
  "items-start justify-center text-center",
  "items-end justify-start text-left",
  "items-start justify-end text-right",
  "items-center justify-center text-center",
];

// Deliberately uneven scale — impact drives size, not a uniform template.
// "0" closes the sequence at the largest size of all: the starkest, quietest
// claim gets the most negative space and the biggest glyph.
const SIZE = [
  "text-[clamp(4.5rem,2rem+19vw,13.5rem)]",
  "text-[clamp(3.5rem,2rem+15vw,10.5rem)]",
  "text-[clamp(4.5rem,2rem+17vw,12.5rem)]",
  "text-[clamp(3.5rem,2rem+14vw,9.5rem)]",
  "text-[clamp(4.5rem,2rem+19vw,13.5rem)]",
  "text-[clamp(5rem,2rem+23vw,15.5rem)]",
];

// The edge each numeral arrives from — direction varies so the sequence
// doesn't repeat a single "slide in from the left" motion six times.
const ARRIVE_FROM = [-14, 14, 0, -14, 14, 0];

// Fraction of a single beat's span spent arriving — shared by useBeat and by
// the scroll cue's fade-out, so the cue always disappears exactly as the
// first metric begins to resolve, however that timing is tuned later.
const ENTER_FRACTION = 0.22;
const FIRST_ENTER_END = (1 / COUNT) * ENTER_FRACTION;

function easeInOut(p: number) {
  const clamped = Math.min(Math.max(p, 0), 1);
  return clamped * clamped * (3 - 2 * clamped);
}

/**
 * One proof point's beat within the section's total scroll budget: arrives
 * (scale + slide, not a flat fade), holds fully legible, then recedes
 * (scale down + fade) as the next one begins arriving. Physical motion is
 * the primary mover — opacity only rides along as secondary support during
 * the arrive/recede beats, never a standalone crossfade.
 */
function useBeat(scrollYProgress: MotionValue<number>, index: number) {
  const start = index / COUNT;
  const end = (index + 1) / COUNT;
  const span = end - start;
  const enterEnd = start + span * ENTER_FRACTION;
  const holdEnd = end - span * 0.26;
  const arriveFrom = ARRIVE_FROM[index % ARRIVE_FROM.length];

  const opacity = useTransform(scrollYProgress, (v) => {
    if (v <= start || v >= end) return 0;
    if (v < enterEnd) return easeInOut((v - start) / (enterEnd - start));
    if (v < holdEnd) return 1;
    return 1 - easeInOut((v - holdEnd) / (end - holdEnd));
  });

  const scale = useTransform(scrollYProgress, (v) => {
    if (v <= start) return 0.72;
    if (v < enterEnd) return 0.72 + 0.28 * easeInOut((v - start) / (enterEnd - start));
    if (v < holdEnd) return 1;
    if (v < end) return 1 - 0.16 * easeInOut((v - holdEnd) / (end - holdEnd));
    return 0.84;
  });

  const xRaw = useTransform(scrollYProgress, (v) => {
    if (v <= start) return arriveFrom;
    if (v < enterEnd) return arriveFrom * (1 - easeInOut((v - start) / (enterEnd - start)));
    return 0;
  });
  const x = useTransform(xRaw, (v) => `${v}vw`);

  return { opacity, scale, x };
}

export function ProofV4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reducedMotion = mounted ? prefersReducedMotion : false;

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Called explicitly six times, not via .map() — COUNT is a fixed
  // module-level constant (proofPointsV4.length), never conditional across
  // renders, but an unrolled call list keeps that obvious at a glance.
  const beat0 = useBeat(scrollYProgress, 0);
  const beat1 = useBeat(scrollYProgress, 1);
  const beat2 = useBeat(scrollYProgress, 2);
  const beat3 = useBeat(scrollYProgress, 3);
  const beat4 = useBeat(scrollYProgress, 4);
  const beat5 = useBeat(scrollYProgress, 5);
  const beats = [beat0, beat1, beat2, beat3, beat4, beat5];

  // Visible through the intentional white pause at the very start of the
  // scroll-jack, then fades out over exactly the same window the first
  // metric uses to arrive — by the time "9M" is legible, the cue is gone.
  const cueOpacity = useTransform(scrollYProgress, (v) => 1 - easeInOut(v / FIRST_ENTER_END));

  const active = isDesktop && !reducedMotion;

  return (
    <section
      id="results"
      ref={containerRef}
      className="relative bg-background motion-reduce:h-auto lg:h-[560vh] lg:motion-reduce:h-auto"
    >
      {/* Mobile — and desktop-with-reduced-motion — get an honest static
          stack: same uneven scale and alternating alignment, no scroll-jack. */}
      <div className="flex flex-col gap-16 px-6 py-24 sm:px-8 lg:hidden lg:motion-reduce:flex lg:motion-reduce:px-16 lg:motion-reduce:py-32">
        <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
          Results, not claims
        </span>
        <div className="flex flex-col items-center gap-2 py-4 text-center">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Scroll to see the proof
          </span>
          {reducedMotion ? (
            <span aria-hidden="true" className="text-muted-foreground">
              ↓
            </span>
          ) : (
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="text-muted-foreground"
            >
              ↓
            </motion.span>
          )}
        </div>
        {proofPointsV4.map((point, index) => (
          <div
            key={point.value}
            className={cn(
              "flex flex-col gap-3",
              index % 2 === 1 ? "items-end text-right" : "items-start text-left"
            )}
          >
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "font-display leading-none font-medium text-foreground",
                "text-[clamp(3.5rem,2rem+16vw,7rem)]"
              )}
            >
              {point.value}
            </span>
            <p className="max-w-[28ch] text-base text-foreground">{point.label}</p>
          </div>
        ))}
      </div>

      {/* Desktop, motion-safe — the scroll-driven editorial sequence. */}
      <div className="relative hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:overflow-hidden lg:motion-reduce:hidden">
        <span className="font-mono absolute top-10 left-12 z-10 text-xs tracking-[0.14em] text-muted-foreground uppercase">
          Results, not claims
        </span>

        <motion.div
          style={active ? { opacity: cueOpacity } : undefined}
          className="absolute inset-x-0 bottom-16 z-10 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Scroll to see the proof
          </span>
          <motion.span
            aria-hidden="true"
            animate={active ? { y: [0, 6, 0] } : undefined}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground"
          >
            ↓
          </motion.span>
        </motion.div>

        {proofPointsV4.map((point, index) => (
          <motion.div
            key={point.value}
            style={active ? { opacity: beats[index].opacity, scale: beats[index].scale, x: beats[index].x } : undefined}
            className={cn("absolute inset-0 flex flex-col gap-4 px-16 py-24 xl:px-24", POSITION[index])}
          >
            <span className="font-mono text-sm text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
            </span>
            <span className={cn("font-display leading-none font-medium text-foreground", SIZE[index])}>
              {point.value}
            </span>
            <p className="max-w-md text-lg text-foreground">{point.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
