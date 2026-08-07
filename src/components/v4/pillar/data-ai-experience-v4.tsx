"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DataAiExperienceV4Props = {
  content: PillarPageContent;
};

type MetricSegment = {
  key: string;
  number: number | null;
  prefix: string;
  suffix: string;
};

// Splits an approved metric string like "8% improvement in stock turns ·
// 5% reduction in waste" into its constituent claims and, where a segment
// leads with a real approved figure, isolates that figure so it can count
// up — the surrounding words are never altered, only the leading number is
// animated separately from its own static suffix.
function parseMetricSegments(metric: string): MetricSegment[] {
  return metric.split("·").map((raw) => {
    const segment = raw.trim();
    const match = segment.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return { key: segment, number: null, prefix: segment, suffix: "" };
    return { key: segment, number: parseFloat(match[1]), prefix: "", suffix: match[2] };
  });
}

// Reduced motion shows the real figure immediately — it is never gated
// behind the same flag that controls whether the count-up animation runs,
// so "motion off" can never mean "value never appears."
function useCountUp(target: number, shouldAnimate: boolean, reducedMotion: boolean, duration = 1.1) {
  const [value, setValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (reducedMotion) {
      setValue(target);
      return;
    }
    if (!shouldAnimate) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shouldAnimate, reducedMotion, target, duration]);

  return value;
}

function AnimatedMetric({ metric, inView, reducedMotion }: { metric: string; inView: boolean; reducedMotion: boolean }) {
  const segments = parseMetricSegments(metric);
  return (
    <div className="flex flex-col items-start gap-3 sm:items-end">
      {segments.map((segment) => (
        <MetricSegmentDisplay key={segment.key} segment={segment} inView={inView} reducedMotion={reducedMotion} />
      ))}
    </div>
  );
}

function MetricSegmentDisplay({
  segment,
  inView,
  reducedMotion,
}: {
  segment: MetricSegment;
  inView: boolean;
  reducedMotion: boolean;
}) {
  const value = useCountUp(segment.number ?? 0, inView && segment.number !== null, reducedMotion);

  if (segment.number === null) {
    return <span className="max-w-xs text-sm text-primary sm:text-right">{segment.prefix}</span>;
  }

  return (
    <span className="flex items-baseline gap-2 sm:justify-end">
      <span className="font-display text-4xl leading-none font-medium text-foreground sm:text-5xl">
        {Math.round(value)}
      </span>
      <span className="max-w-[10rem] text-left text-xs text-muted-foreground sm:text-sm">{segment.suffix}</span>
    </span>
  );
}

function ExperienceRow({
  item,
  index,
  total,
  reducedMotion,
}: {
  item: PillarPageContent["experience"]["items"][number];
  index: number;
  total: number;
  reducedMotion: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <div ref={ref} className="grid grid-cols-1 gap-6 border-b border-border py-10 sm:grid-cols-12 sm:gap-8 sm:py-12">
      <div className="sm:col-span-7">
        <span className="font-mono text-sm text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: fast ?? 0.5, ease: "easeOut" }}
          className="font-display mt-2 text-[clamp(1.5rem,1rem+2.5vw,2.75rem)] leading-[1.05] font-medium text-foreground"
        >
          {item.name}
        </motion.h3>
        <p className="mt-3 max-w-md text-base text-foreground">{item.description}</p>
      </div>

      {item.metric && (
        <div className="sm:col-span-5">
          <AnimatedMetric metric={item.metric} inView={inView} reducedMotion={reducedMotion} />
        </div>
      )}
    </div>
  );
}

/**
 * Proof as a resolving readout, not Strategy's static scale-in numerals:
 * each approved metric counts up from zero once it scrolls into view — raw
 * figures arriving as confident, settled numbers. A uniform left-text /
 * right-metric column for every row (no alternating sides), which itself
 * reads as one aligned system rather than Strategy's back-and-forth list.
 */
export function DataAiExperienceV4({ content }: DataAiExperienceV4Props) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;

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
            <ExperienceRow
              key={item.name}
              item={item}
              index={index}
              total={content.experience.items.length}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
