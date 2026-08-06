import { pillars } from "@/content/pillars";
import { NotchPanel } from "@/components/v3/notch-panel";
import { ResolveField } from "@/components/v3/resolve-field";

export function WhatWeDoV3() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-lavender px-6 py-20 sm:px-8 sm:py-28">
      <ResolveField
        rows={6}
        cols={28}
        compact
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="font-mono flex items-center gap-3 text-xs tracking-[0.1em] text-muted-foreground uppercase">
          <span className="size-2 bg-primary" aria-hidden="true" />
          Capabilities / Grid.02
        </div>
        <h2 className="font-display mt-6 max-w-2xl text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.02] font-medium text-foreground">
          Five service pillars. One integrated team.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const featured = index === 0;
            return (
              <NotchPanel
                key={pillar.slug}
                href={`/services/${pillar.slug}`}
                corner={index % 2 === 0 ? "tr" : "bl"}
                size={featured ? "32px" : "24px"}
                fillClassName="bg-navy"
                className={featured ? "bg-background sm:col-span-2 lg:col-span-2" : "bg-background"}
              >
                <div
                  className={`flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-300 group-hover:bg-primary sm:p-10 ${featured ? "lg:min-h-[280px]" : ""}`}
                >
                  <span
                    className={`font-display font-medium text-primary/25 transition-colors duration-300 group-hover:text-white/40 ${featured ? "text-7xl" : "text-5xl"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`font-bold text-foreground transition-colors duration-300 group-hover:text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}
                    >
                      {pillar.heading}
                    </h3>
                    <p
                      className={`text-foreground transition-colors duration-300 group-hover:text-white/90 ${featured ? "max-w-md text-base" : "text-sm"}`}
                    >
                      {pillar.differentiator}
                    </p>
                    <span className="font-cta mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-white">
                      Learn more
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </NotchPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
