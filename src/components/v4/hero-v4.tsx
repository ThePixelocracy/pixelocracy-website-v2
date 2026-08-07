"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { V4Button } from "@/components/v4/v4-button";

const RESOLVE_END = 0.55;

function easeOutCubic(p: number) {
  const clamped = Math.min(Math.max(p, 0), 1);
  return 1 - Math.pow(1 - clamped, 3);
}

// Steeper tail than cubic: the word needs to be visually indistinguishable
// from its final size well before it's geometrically at exactly 1, or its
// oversized bleed overlaps "From " and the space collapses (reads as
// "Fromnational") for a stretch of scroll right before it locks into place.
function easeOutQuint(p: number) {
  const clamped = Math.min(Math.max(p, 0), 1);
  return 1 - Math.pow(1 - clamped, 5);
}

// A settle-in window expressed as a fraction of RESOLVE_END, not an absolute
// scroll range — every element still finishes within the same overall budget
// as the word itself, just staggered so they arrive in sequence (eyebrow →
// "From" → the rest of the headline → subhead → CTAs) instead of one
// synchronized block popping in together, which read as a single abrupt cut
// next to the word's own continuous, elaborate transform.
function useSettle(scrollYProgress: MotionValue<number>, startFrac: number, endFrac: number) {
  const start = RESOLVE_END * startFrac;
  const end = RESOLVE_END * endFrac;
  const opacity = useTransform(scrollYProgress, (v) => 0.1 + easeOutCubic((v - start) / (end - start)) * 0.9);
  const y = useTransform(scrollYProgress, (v) => (1 - easeOutCubic((v - start) / (end - start))) * 22);
  return { opacity, y };
}

/**
 * "The Reveal." The word "national" is a single continuous element, never
 * two elements crossfading: it starts blown up to fill the frame, cropped
 * at the edges, then physically scales and translates down — as you scroll
 * — into its real position inside the actual headline sentence sitting
 * around it. Transforms don't affect layout, so "From ___ infrastructure to
 * early-stage products" is already laid out correctly from frame one; the
 * oversized word simply visually overlaps it until it resolves down to size.
 *
 * Everything else in the hero (eyebrow, "From", the rest of the headline,
 * subhead, CTAs) gets the same secondary, subtle opacity + translateY
 * settle, but staggered into a cascade (see useSettle) — each arrives a
 * beat later than the one before, so the headline feels progressively
 * assembled rather than one synchronized block popping in beside the
 * word's own continuous transform.
 *
 * `isDesktop` (matchMedia, post-mount) gates the transform values only —
 * never the section's height/layout, which stays purely CSS-breakpoint
 * driven so framer-motion's scroll measurement of containerRef is never
 * corrupted by a post-mount change.
 */
export function HeroV4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // framer-motion can resolve useReducedMotion() synchronously on the client
  // before hydration finishes, diverging from the SSR-assumed value and
  // triggering a hydration mismatch. Force it to the SSR default (false)
  // until after mount, then let the real value take over.
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

  // Written as callbacks, not useTransform(input, [range], [range]) array form —
  // the array form gets auto-compiled into a native ViewTimeline animation whose
  // scroll source resolves to <html> instead of containerRef on this sticky/
  // "start start"→"end end" layout, painting stale values independent of
  // actual scroll position. The callback form keeps this on the JS scroll loop.
  const wordScale = useTransform(scrollYProgress, (v) => 8 - easeOutQuint(v / RESOLVE_END) * 7);
  const wordXRaw = useTransform(scrollYProgress, (v) => (1 - easeOutQuint(v / RESOLVE_END)) * 34);
  const wordX = useTransform(wordXRaw, (v) => `${v}vw`);
  const wordYRaw = useTransform(scrollYProgress, (v) => (1 - easeOutQuint(v / RESOLVE_END)) * 16);
  const wordY = useTransform(wordYRaw, (v) => `${v}vh`);

  const eyebrowSettle = useSettle(scrollYProgress, 0, 0.55);
  const fromSettle = useSettle(scrollYProgress, 0.08, 0.62);
  const tailSettle = useSettle(scrollYProgress, 0.2, 0.75);
  const subheadSettle = useSettle(scrollYProgress, 0.35, 0.88);
  const ctaSettle = useSettle(scrollYProgress, 0.5, 1);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const wordStyle = isDesktop && !reducedMotion ? { scale: wordScale, x: wordX, y: wordY } : undefined;
  const styleFor = (settle: { opacity: MotionValue<number>; y: MotionValue<number> }) =>
    isDesktop && !reducedMotion ? settle : undefined;

  return (
    <section ref={containerRef} className="relative bg-background lg:h-[170vh]">
      <div className="relative lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        {/* Mobile-only static opener — must come first in document order so
            it appears above the real content in normal flow. */}
        <div className="px-6 pt-20 pb-4 text-center lg:hidden">
          <span className="font-display block text-[22vw] leading-[0.85] font-medium tracking-tighter text-foreground sm:text-[18vw]">
            NATIONAL
          </span>
        </div>

        <div className="relative z-0 mt-8 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center">
          <div className="mx-auto flex max-w-5xl flex-col items-start px-6 sm:px-8 lg:px-12">
            <motion.span
              style={styleFor(eyebrowSettle)}
              className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase"
            >
              Pixelocracy — Technology &amp; Digital Transformation Partner
            </motion.span>

            <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.25rem,1rem+4.5vw,4.5rem)] leading-[1.03] font-medium tracking-tight text-foreground">
              <motion.span style={styleFor(fromSettle)} className="inline">
                From{" "}
              </motion.span>
              <motion.span
                style={{ ...wordStyle, transformOrigin: "center center" }}
                className="relative z-10 inline-block bg-background select-none"
              >
                national
              </motion.span>
              <motion.span style={styleFor(tailSettle)} className="inline">
                {" "}
                infrastructure to early-stage products
              </motion.span>
            </h1>

            <motion.p style={styleFor(subheadSettle)} className="mt-6 max-w-xl text-lg text-foreground">
              Strategy, engineering, data, design and capability combined in one team. Built for
              organizations that need more than a vendor.
            </motion.p>
            <motion.div style={styleFor(ctaSettle)} className="mt-9 flex flex-wrap items-center gap-8">
              <V4Button href="/contact" variant="primary">
                Book a discovery call
              </V4Button>
              <V4Button href="/work" variant="secondary">
                See our work
              </V4Button>
            </motion.div>
          </div>
        </div>

        {!reducedMotion && (
          <motion.span
            style={{ opacity: scrollHintOpacity }}
            className="font-mono absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 text-xs tracking-[0.14em] text-muted-foreground uppercase lg:block"
          >
            Scroll ↓
          </motion.span>
        )}
      </div>
    </section>
  );
}
