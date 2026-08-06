import { PillarHero } from "@/components/sections/pillar-hero";
import { SectionHeader } from "@/components/sections/section-header";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ObjectionsSection } from "@/components/sections/objections-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { IncludedSection } from "@/components/sections/included-section";
import { PillarCTASection } from "@/components/sections/pillar-cta-section";
import { WaveDivider } from "@/components/sections/wave-divider";
import type { Pillar } from "@/content/pillars";
import type { PillarPageContent } from "@/content/pillar-pages";

type PillarPageTemplateProps = {
  pillar: Pillar;
  content: PillarPageContent;
};

export function PillarPageTemplate({ pillar, content }: PillarPageTemplateProps) {
  return (
    <>
      <PillarHero
        number={content.number}
        heading={pillar.heading}
        subheading={content.subheading}
        paragraphs={content.paragraphs}
        meta={content.meta}
        heroImage={content.heroImage}
      />

      <section className="bg-background px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <SectionHeader
            align="left"
            eyebrow="Why us"
            heading={content.whyUs.heading}
            description={content.whyUs.paragraph}
          />
          <FeatureGrid cards={content.whyUs.cards} />
          {content.whyUs.caption ? (
            <p className="text-right text-sm text-muted-foreground italic">{content.whyUs.caption}</p>
          ) : null}
        </div>
      </section>

      <section className="bg-lavender px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-12">
          <SectionHeader
            eyebrow="Typical situations we solve"
            heading="We've heard this before"
            description={
              <>
                {content.objections.intro.map((line, index) => (
                  <span key={line} className={index > 0 ? "mt-2 block" : "block"}>
                    {line}
                  </span>
                ))}
              </>
            }
          />
          <ObjectionsSection items={content.objections.items} />
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#d7defc] to-background px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <SectionHeader
            align="left"
            eyebrow="Selected experience"
            heading={content.experience.heading}
            description={content.experience.intro}
          />
          <ExperienceSection items={content.experience.items} />
        </div>
      </section>

      <WaveDivider variant="solid" className="text-[#071d7b]" />

      <IncludedSection
        eyebrow="What's included"
        heading={content.included.heading}
        intro={content.included.intro}
        columns={content.included.columns}
        differenceEyebrow="The Pixelocracy difference"
        differenceText={content.difference.text}
      />

      <PillarCTASection
        heading={content.cta.heading}
        paragraph={content.cta.paragraph}
        currentSlug={pillar.slug}
      />
    </>
  );
}
