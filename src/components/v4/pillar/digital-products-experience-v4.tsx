"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarPageContent } from "@/content/pillar-pages";

type DigitalProductsExperienceV4Props = {
  content: PillarPageContent;
};

// Finds the first approved percentage figure in a metric string (e.g. the
// "95%" in "Adopted by 95% of users in the first month...") so it can drive
// a fill meter — never inventing a number, only reading the one already
// approved in the content.
function firstPercentage(metric: string): number | null {
  const match = metric.match(/(\d+(?:\.\d+)?)%/);
  return match ? parseFloat(match[1]) : null;
}

// Scale contrast across an item's own sentences instead of a repeated
// template — impact drives size, matching the V4 principle used elsewhere
// (e.g. Proof's uneven numeral sizes), applied here to plain fact sentences.
const CLAUSE_SIZE = ["text-2xl sm:text-3xl", "text-lg sm:text-xl", "text-lg sm:text-xl"];

function FactList({
  description,
  active,
  reducedMotion,
}: {
  description: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  const fast = reducedMotion ? 0.01 : undefined;
  const clauses = description
    .split(". ")
    .map((clause) => clause.trim())
    .filter(Boolean)
    .map((clause) => (clause.endsWith(".") ? clause : `${clause}.`));

  return (
    <div className="mt-4 flex flex-col gap-2">
      {clauses.map((clause, index) => (
        <motion.p
          key={clause}
          initial={{ opacity: 0, y: 10 }}
          animate={active ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.1, ease: "easeOut" }}
          className={`font-display leading-[1.1] font-medium text-foreground ${CLAUSE_SIZE[index % CLAUSE_SIZE.length]}`}
        >
          {clause}
        </motion.p>
      ))}
    </div>
  );
}

function AdoptionMeter({
  metric,
  active,
  reducedMotion,
}: {
  metric: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  const value = firstPercentage(metric);
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <div className="mt-4 flex flex-col gap-3">
      {value !== null && (
        <div className="h-1.5 w-full max-w-sm bg-border">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={active ? { scaleX: value / 100 } : undefined}
            transition={{ duration: fast ?? 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
            className="h-full bg-primary"
          />
        </div>
      )}
      <p className="max-w-sm text-base text-foreground">{metric}</p>
    </div>
  );
}

/**
 * Proof told as product outcomes, not Strategy's scale-in numerals,
 * Data & AI's count-up figures, or Engineering's bracket-framed spec
 * sheets: each engagement gets its own bespoke presentation drawn from
 * what its own approved facts actually are — an adoption meter where the
 * content is a real comparison (Health Group's 95% adoption), an editorial
 * fact list with scale contrast where it isn't (Gov.gr). Real content
 * shapes the presentation, not a repeated mould.
 */
export function DigitalProductsExperienceV4({ content }: DigitalProductsExperienceV4Props) {
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
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      className="border-b border-border py-10 last:border-b-0 sm:py-14"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <span className="font-mono text-sm text-muted-foreground">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <h3 className="font-display mt-2 text-[clamp(1.5rem,1rem+2vw,2.25rem)] leading-[1.1] font-medium text-foreground">
        {item.name}
      </h3>
      {item.metric ? (
        <>
          <p className="mt-3 max-w-md text-base text-foreground">{item.description}</p>
          <AdoptionMeter metric={item.metric} active={reducedMotion || inView} reducedMotion={reducedMotion} />
        </>
      ) : (
        <FactList description={item.description} active={reducedMotion || inView} reducedMotion={reducedMotion} />
      )}
    </motion.div>
  );
}
