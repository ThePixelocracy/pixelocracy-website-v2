import { PrimaryCTA } from "@/components/sections/primary-cta";
import { PillTag } from "@/components/sections/pill-tag";
import { pillars } from "@/content/pillars";

type PillarCTASectionProps = {
  heading: string;
  paragraph: string;
  currentSlug: string;
};

export function PillarCTASection({ heading, paragraph, currentSlug }: PillarCTASectionProps) {
  return (
    <section className="bg-background px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="text-[28px] leading-[34px] font-bold text-foreground sm:text-[40px] sm:leading-[48px]">
              {heading}
            </h2>
            <p className="text-base text-foreground sm:text-lg">{paragraph}</p>
          </div>
          <PrimaryCTA href="/contact" className="w-fit">
            Book a discovery call
          </PrimaryCTA>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-display text-xs leading-4 font-medium tracking-wide text-muted-foreground uppercase">
            Other Pillars
          </span>
          <div className="flex flex-wrap gap-4">
            {pillars.map((pillar) => (
              <PillTag key={pillar.slug} href={`/services/${pillar.slug}`} active={pillar.slug === currentSlug}>
                {pillar.heading}
              </PillTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
