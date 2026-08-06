import Image from "next/image";
import { PrimaryCTA } from "@/components/sections/primary-cta";
import { SecondaryCTA } from "@/components/sections/secondary-cta";
import { pillars } from "@/content/pillars";
import { SectionLabel } from "@/components/v2/section-label";

export function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-background pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 opacity-70"
      >
        <Image
          src="/ui-graphics/bg-graphic.svg"
          alt=""
          width={1440}
          height={140}
          className="w-full scale-150"
        />
      </div>
      <div
        aria-hidden="true"
        className="font-display pointer-events-none absolute top-10 right-0 -z-0 hidden text-[13rem] leading-none font-medium text-primary/[0.06] select-none sm:block lg:text-[18rem]"
      >
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <SectionLabel index="01" label="Who we are" className="mb-8" />

        <h1
          lang="en"
          className="font-display max-w-5xl [hyphens:auto] [text-wrap:balance] break-words text-[clamp(2.25rem,1rem+5.5vw,7.5rem)] leading-[0.95] font-medium tracking-tight text-foreground"
        >
          From national infrastructure to early&#8209;stage products
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-lg text-foreground sm:text-xl">
            Strategy, engineering, data, design and capability combined in one team. Built for
            organizations that need more than a vendor.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <PrimaryCTA href="/contact">Book a discovery call</PrimaryCTA>
            <SecondaryCTA href="/work">See our work</SecondaryCTA>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-6">
          <span className="font-display text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            One team, five disciplines
          </span>
          {pillars.map((pillar, index) => (
            <span key={pillar.slug} className="flex items-center gap-3">
              {index > 0 ? <span className="text-border" aria-hidden="true">/</span> : null}
              <span className="text-sm font-medium text-foreground">{pillar.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
