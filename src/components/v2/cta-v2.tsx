import { PrimaryCTA } from "@/components/sections/primary-cta";
import { SectionLabel } from "@/components/v2/section-label";
import { Reveal } from "@/components/v2/reveal";

export function CTAV2() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-navy px-6 py-24 sm:px-8 sm:py-36">
      <div
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-10 -bottom-20 hidden text-[16rem] leading-none font-medium text-white/[0.05] select-none sm:block lg:text-[22rem]"
      >
        06
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="06" label="Get in touch" tone="light" className="mb-8" />
        <Reveal>
          <h2 className="font-display max-w-3xl break-words text-[clamp(3rem,1.5rem+7vw,8rem)] leading-[0.95] font-medium text-white">
            Get in touch.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-lg flex-col gap-4 text-lg text-white/90">
              <p>
                Looking for a reliable partner to design, build, or support your next project?
                We&apos;d be happy to hear more!
              </p>
              <p>
                Share a few details with us, and someone from our team will get back to you
                promptly and professionally. We treat every inquiry with care - and every project
                with clarity.
              </p>
            </div>
            <PrimaryCTA href="/contact" className="w-fit shadow-[6px_6px_0_0_#ccc]">
              Talk to our team
            </PrimaryCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
