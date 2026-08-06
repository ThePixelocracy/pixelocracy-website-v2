import Image from "next/image";
import { SectionLabel } from "@/components/v2/section-label";
import { Reveal } from "@/components/v2/reveal";

const bullets = [
  {
    lead: "AI native by design",
    rest: "not a bolt-on feature added at the end",
  },
  {
    lead: "Secure by design",
    rest: "security is in every decision, not the last sprint",
  },
  {
    lead: "Cloud-native",
    rest: "architecture built to scale from day one",
  },
];

const tools = [
  { name: "Figma", src: "/tools/figma.svg" },
  { name: "Adobe", src: "/tools/adobe.svg" },
  { name: "React", src: "/tools/react.svg" },
  { name: "Next.js", src: "/tools/nextjs.svg" },
  { name: "Tailwind CSS", src: "/tools/tailwind.svg" },
];

export function ToolsBandV2() {
  return (
    <section className="relative overflow-hidden bg-[#071d7b] px-6 py-20 sm:px-8 sm:py-28">
      <div
        aria-hidden="true"
        className="font-display pointer-events-none absolute -bottom-16 left-1/2 hidden -translate-x-1/2 text-[13rem] leading-none font-medium text-white/[0.04] select-none sm:block lg:text-[20rem]"
      >
        04
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="04" label="Tools we build with" tone="light" className="mb-6" />
        <Reveal>
          <h2 className="font-display max-w-2xl break-words text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.02] font-medium text-white">
            Technology choices are decisions, not preferences.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Every tool in our stack is there because it&apos;s the right one for the job — not
            because it&apos;s fashionable.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-14 grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
            {bullets.map((bullet) => (
              <li key={bullet.lead} className="flex flex-col gap-2">
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-full bg-primary"
                />
                <p className="text-base text-white">
                  <span className="font-bold">{bullet.lead}</span> — {bullet.rest}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
            {tools.map((tool) => (
              <Image
                key={tool.name}
                src={tool.src}
                alt={tool.name}
                width={40}
                height={40}
                className="h-8 w-auto object-contain opacity-80 brightness-0 invert"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
