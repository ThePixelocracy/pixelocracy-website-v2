import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/content/case-studies";
import { SecondaryCTA } from "@/components/sections/secondary-cta";
import { SectionLabel } from "@/components/v2/section-label";
import { Reveal } from "@/components/v2/reveal";

const headerBgClass: Record<(typeof caseStudies)[number]["headerBg"], string> = {
  navy: "bg-navy",
  black: "bg-black",
  red: "bg-[#d0233b]",
};

export function ShippedV2() {
  const [featured, ...rest] = caseStudies;

  return (
    <section className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="05" label="Some of what we've shipped" className="mb-6" />
        <h2 className="font-display max-w-2xl break-words text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.02] font-medium text-foreground">
          National platforms, global brands.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-foreground">
          A fraction of what the team has delivered.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2">
          <Reveal className="lg:row-span-2">
            <Link
              href={`/work/${featured.slug}`}
              className="group flex h-full flex-col overflow-hidden bg-lavender shadow-[8px_8px_0_0_#4467f6]"
            >
              <div className={cn("relative h-[240px] w-full overflow-hidden sm:h-[320px] lg:h-[420px]", headerBgClass[featured.headerBg])}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 px-8 py-8 sm:px-10 sm:py-10">
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{featured.title}</h3>
                <p className="max-w-md text-base text-foreground sm:text-lg">{featured.description}</p>
              </div>
            </Link>
          </Reveal>

          {rest.map((caseStudy, index) => (
            <Reveal key={caseStudy.slug} delay={0.1 + index * 0.05}>
              <Link
                href={`/work/${caseStudy.slug}`}
                className="group flex h-full flex-col overflow-hidden bg-lavender shadow-[6px_6px_0_0_#4467f6] sm:flex-row"
              >
                <div
                  className={cn(
                    "relative h-[160px] w-full shrink-0 overflow-hidden sm:h-auto sm:w-[220px]",
                    headerBgClass[caseStudy.headerBg]
                  )}
                >
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    sizes="220px"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2 px-6 py-6">
                  <h3 className="text-lg font-bold text-foreground">{caseStudy.title}</h3>
                  <p className="text-sm text-foreground">{caseStudy.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <SecondaryCTA href="/work">View all Case Studies</SecondaryCTA>
        </div>
      </div>
    </section>
  );
}
