"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { caseStudies, type CaseStudySummary } from "@/content/case-studies";
import { cn } from "@/lib/utils";

const panelPosition = [
  "bottom-6 left-6 sm:bottom-12 sm:left-12 items-start text-left",
  "top-6 right-6 sm:top-12 sm:right-12 items-end text-right",
  "bottom-6 right-6 sm:bottom-12 sm:right-12 items-end text-right",
];

type WorkItemProps = {
  caseStudy: CaseStudySummary;
  index: number;
  total: number;
};

/**
 * The image carries a slow parallax drift as its chapter scrolls through
 * the viewport — sized 116% so the drift never exposes an edge — on top of
 * the existing hover scale. The panel gets a small hover lift alongside its
 * existing arrow slide. Real physical presence (the photograph shifts as
 * you scroll past it, the panel lifts under the cursor), not a redesign of
 * the large-scale chapter layout.
 */
function WorkItem({ caseStudy, index, total }: WorkItemProps) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? prefersReducedMotion : false;

  const { scrollYProgress } = useScroll({ target: itemRef, offset: ["start end", "end start"] });
  const parallaxYRaw = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const parallaxY = useTransform(parallaxYRaw, (v) => `${v}%`);

  return (
    <Link
      ref={itemRef}
      href={`/work/${caseStudy.slug}`}
      className="group relative flex h-[70vh] w-full items-stretch overflow-hidden border-b border-border sm:h-screen"
    >
      <motion.div style={!reducedMotion ? { y: parallaxY } : undefined} className="absolute inset-[-8%]">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>

      <div
        className={cn(
          "absolute flex max-w-md flex-col gap-4 bg-black p-8 transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:p-10",
          panelPosition[index % panelPosition.length]
        )}
      >
        <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <h3 className="font-display text-2xl leading-[1.05] font-medium text-white sm:text-3xl">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-white/80 sm:text-base">{caseStudy.description}</p>
        <span className="font-cta inline-flex items-center gap-2 text-sm font-medium text-white">
          View case study
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

/**
 * Selected work as an editorial experience, not a card grid: each project
 * is a full-viewport chapter — the real photography filling the frame, a
 * single solid-colour panel carrying the title and outcome. Full colour,
 * not duotone — a different treatment from V3, on purpose.
 */
export function WorkV4() {
  return (
    <section id="work" className="bg-background">
      <div className="border-b border-border bg-background px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Selected work
          </span>
          <h2 className="font-display mt-6 max-w-3xl text-[clamp(2rem,1.2rem+3.5vw,4rem)] leading-[1.03] font-medium text-foreground">
            National platforms, global brands.
          </h2>
        </div>
      </div>

      {caseStudies.map((caseStudy, index) => (
        <WorkItem key={caseStudy.slug} caseStudy={caseStudy} index={index} total={caseStudies.length} />
      ))}
    </section>
  );
}
