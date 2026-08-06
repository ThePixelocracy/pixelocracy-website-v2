import { Hero } from "@/components/sections/hero";
import { PrimaryCTA } from "@/components/sections/primary-cta";
import { SecondaryCTA } from "@/components/sections/secondary-cta";
import { LogoStrip } from "@/components/sections/logo-strip";
import { WaveDivider } from "@/components/sections/wave-divider";
import { SectionHeader } from "@/components/sections/section-header";
import { ProcessSection } from "@/components/sections/process-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CTABand } from "@/components/sections/cta-band";
import { pillars } from "@/content/pillars";
import { caseStudies } from "@/content/case-studies";

const trustedLogos = [
  { name: "COSMOTE", src: "/client-logos/COSMOTE@2xGREY.png", width: 110 },
  { name: "AVIS", src: "/client-logos/avis-logo.svg", width: 90 },
  { name: "Hygeia", src: "/client-logos/ygeia-logo_en.png", width: 110 },
  { name: "Vodafone", src: "/client-logos/vodafone-logo.svg", width: 110 },
  { name: "Aegean", src: "/client-logos/aegean.svg", width: 90 },
];

export default function Home() {
  return (
    <>
      <Hero
        heading={
          <>
            From national infrastructure to
            <br className="hidden sm:block" /> early-stage products
          </>
        }
        description="Strategy, engineering, data, design and capability combined in one team. Built for organizations that need more than a vendor."
        actions={
          <>
            <PrimaryCTA href="/contact">Book a discovery call</PrimaryCTA>
            <SecondaryCTA href="/work">See our work</SecondaryCTA>
          </>
        }
      />

      <section className="bg-background px-6 py-14 sm:px-8">
        <LogoStrip caption="Trusted by Greece's largest organisations" logos={trustedLogos} />
      </section>

      <WaveDivider variant="lines" />

      <section className="bg-background px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14">
          <SectionHeader
            heading="What we do"
            description="Five service pillars. One integrated team. Built for organisations that need more than a vendor and expect more than a deck."
          />
          <ProcessSection pillars={pillars} />
        </div>
      </section>

      <WaveDivider variant="solid" className="text-lavender" />

      <section className="bg-lavender px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14">
          <SectionHeader
            heading="Tools we build with"
            description="Technology choices are decisions, not preferences. Every tool in our stack is there because it's the right one for the job — not because it's fashionable."
          />
          <ToolsSection />
        </div>
      </section>

      <section className="bg-background px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14">
          <SectionHeader
            heading="Some of what we've shipped"
            description="National platforms, global brands, award-winning products. A fraction of what the team has delivered."
          />
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-stretch sm:justify-center">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
            ))}
          </div>
          <SecondaryCTA href="/work">View all Case Studies</SecondaryCTA>
        </div>
      </section>

      <CTABand
        heading="Get in touch"
        description={
          <>
            <p>
              Looking for a reliable partner to design, build, or support your next project? We&apos;d
              be happy to hear more!
            </p>
            <p>
              Share a few details with us, and someone from our team will get back to you promptly
              and professionally. We treat every inquiry with care - and every project with clarity.
            </p>
          </>
        }
        action={
          <PrimaryCTA href="/contact" className="shadow-[6px_6px_0_0_#ccc]">
            Talk to our team
          </PrimaryCTA>
        }
      />
    </>
  );
}
