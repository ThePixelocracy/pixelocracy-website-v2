import Image from "next/image";
import { WaveDivider } from "@/components/sections/wave-divider";

type PillarHeroProps = {
  number: number;
  heading: string;
  subheading: string;
  paragraphs: string[];
  meta?: {
    pillar: string;
    worksBestWith?: string;
    typicalEngagement?: string;
  };
  heroImage?: string;
};

export function PillarHero({ number, heading, subheading, paragraphs, meta, heroImage }: PillarHeroProps) {
  return (
    <section className="bg-background px-6 pt-12 pb-0 sm:px-8 sm:pt-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="font-display text-[15px] leading-5 font-medium tracking-wide text-primary uppercase">
            {`Pillar ${String(number).padStart(2, "0")}`}
          </span>
          <h1 className="font-display text-[30px] leading-[38px] font-medium text-foreground sm:text-[48px] sm:leading-[48px]">
            {heading}
          </h1>
          <p className="text-[20px] leading-[26px] text-foreground sm:text-[24px] sm:leading-[30px]">
            {subheading}
          </p>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-foreground sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {meta ? (
          <div className="flex w-full flex-col gap-6 sm:w-80 lg:shrink-0">
            <div className="flex flex-col gap-1">
              <span className="font-display text-xs leading-4 font-medium tracking-wide text-muted-foreground uppercase">
                Pillar
              </span>
              <span className="text-base text-foreground">{meta.pillar}</span>
            </div>
            {meta.worksBestWith ? (
              <div className="flex flex-col gap-1">
                <span className="font-display text-xs leading-4 font-medium tracking-wide text-muted-foreground uppercase">
                  Works best with
                </span>
                <span className="text-base text-foreground">{meta.worksBestWith}</span>
              </div>
            ) : null}
            {meta.typicalEngagement ? (
              <div className="flex flex-col gap-1">
                <span className="font-display text-xs leading-4 font-medium tracking-wide text-muted-foreground uppercase">
                  Typical engagement
                </span>
                <span className="text-base text-foreground">{meta.typicalEngagement}</span>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {heroImage ? (
        <div className="relative mx-auto mt-12 max-w-7xl">
          <div className="relative h-[220px] w-full overflow-hidden sm:h-[420px]">
            <Image src={heroImage} alt="" aria-hidden="true" fill sizes="1280px" className="object-cover" />
          </div>
          <WaveDivider variant="solid" className="absolute -bottom-px left-0 text-background" />
        </div>
      ) : null}
    </section>
  );
}
