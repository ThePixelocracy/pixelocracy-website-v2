import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { pillars } from "@/content/pillars";
import { SectionLabel } from "@/components/v2/section-label";
import { Reveal } from "@/components/v2/reveal";

export function WhatWeDoV2() {
  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03" label="What we do" className="mb-6" />
        <h2 className="font-display max-w-2xl break-words text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.02] font-medium text-foreground">
          Five service pillars. One integrated team.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-foreground">
          Built for organisations that need more than a vendor and expect more than a deck.
        </p>

        <div className="mt-16 flex flex-col">
          {pillars.map((pillar, index) => {
            const reversed = index % 2 === 1;
            return (
              <Reveal key={pillar.slug} delay={index * 0.05}>
                <Link
                  href={`/services/${pillar.slug}`}
                  className="group relative grid grid-cols-1 items-center gap-8 border-b border-border py-12 first:pt-0 last:border-b-0 sm:gap-12 lg:grid-cols-[1fr_auto_1.1fr]"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "font-display pointer-events-none absolute -top-6 text-[7rem] leading-none font-medium text-primary/[0.07] select-none sm:text-[9rem]",
                      reversed ? "right-0 lg:right-1/3" : "left-0 lg:left-0"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={cn(
                      "relative z-10 flex flex-col gap-4",
                      reversed ? "lg:order-3" : "lg:order-1"
                    )}
                  >
                    <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                      {pillar.heading}
                    </h3>
                    <p className="max-w-md text-base text-foreground sm:text-lg">
                      {pillar.differentiator}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                      Learn more
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>

                  <div className="hidden h-16 w-px justify-self-center bg-border lg:order-2 lg:block" aria-hidden="true" />

                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-center bg-lavender p-10 sm:p-14",
                      reversed ? "lg:order-1" : "lg:order-3"
                    )}
                  >
                    <Image
                      src={pillar.icon}
                      alt=""
                      aria-hidden="true"
                      width={160}
                      height={160}
                      className="size-28 transition-transform duration-500 group-hover:scale-110 sm:size-36"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
