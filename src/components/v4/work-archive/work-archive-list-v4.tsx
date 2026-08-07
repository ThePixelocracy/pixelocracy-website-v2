"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { archiveProjects, type ArchiveProject } from "@/content/work-archive";

/**
 * The archive's own visual concept — a scale-ordered editorial index, not
 * a portfolio grid and not the homepage's full-viewport chapter carousel.
 * Image and type scale vary by verified significance rather than sitting
 * in uniform equal-sized cards (the same "impact drives size" principle
 * V4 already applies to Proof's numerals, extended here to a project
 * list): gov.gr — the only project with a verified national-scale figure
 * and the only one independently cross-referenced across three separate
 * pillar pages — gets the largest, most prominent row. Every other
 * project gets a standard, still-asymmetric row. No card borders, no
 * rounded corners, no equal-height grid.
 *
 * Only a project with `route` set renders a "View case study" link — a
 * project with no built case-study route stays exactly as before,
 * unlinked, rather than pointing at a page that isn't there.
 */
export function WorkArchiveListV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        {archiveProjects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} fast={fast} flagship={index === 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  fast,
  flagship,
}: {
  project: ArchiveProject;
  index: number;
  fast: number | undefined;
  flagship: boolean;
}) {
  const reversed = index % 2 === 1;

  return (
    <div
      className={`flex flex-col gap-8 border-b border-border py-12 sm:gap-12 sm:py-16 lg:flex-row lg:items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ scale: 1.04 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: fast ?? 0.8, ease: "easeOut" }}
        className={`relative w-full overflow-hidden bg-muted ${
          flagship ? "aspect-[16/10] lg:w-[62%]" : "aspect-[4/3] lg:w-[46%]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          style={{ objectPosition: project.imagePosition ?? "center" }}
          className="object-cover"
          priority={flagship}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: fast ?? 0.5, delay: fast ? 0 : 0.1, ease: "easeOut" }}
        className="flex w-full flex-col gap-3 lg:w-[54%]"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-mono text-xs tracking-[0.1em] text-primary uppercase">{project.industry}</span>
        </div>
        <h2
          className={`font-display font-medium text-foreground ${
            flagship ? "text-[clamp(1.75rem,1rem+3vw,3rem)]" : "text-2xl sm:text-3xl"
          }`}
        >
          {project.name}
        </h2>
        <p className={`text-foreground ${flagship ? "max-w-xl text-lg" : "max-w-md text-base"}`}>
          {project.description}
        </p>
        {project.pillars && (
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {project.pillars.map((pillar) => (
              <span key={pillar} className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                {pillar}
              </span>
            ))}
          </div>
        )}
        {project.route && (
          <Link
            href={project.route}
            className="group font-cta mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary"
          >
            View case study
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
