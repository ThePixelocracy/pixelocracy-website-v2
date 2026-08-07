"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/about";

/**
 * The people behind the work — three real, verified team members, shown
 * once each. Deliberately not the old design's seven-slot grid repeating
 * the same three people twice; that was a placeholder pattern from an
 * earlier reference design, not a real roster. Real photographs, full
 * colour, square-cropped — never a decorative circle mask, never a
 * generic stock portrait.
 */
export function AboutTeamV4() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted ? Boolean(prefersReducedMotion) : false;
  const fast = reducedMotion ? 0.01 : undefined;

  return (
    <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-foreground pb-8">
          <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {aboutContent.team.eyebrow}
          </span>
          <h2 className="font-display max-w-2xl text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.05] font-medium text-foreground">
            {aboutContent.team.heading}
          </h2>
          <p className="max-w-2xl text-base text-foreground sm:text-lg">{aboutContent.team.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {aboutContent.team.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: fast ?? 0.5, delay: fast ? 0 : index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-lg font-medium text-foreground">{member.name}</p>
                {member.role && <p className="text-sm text-muted-foreground">{member.role}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
