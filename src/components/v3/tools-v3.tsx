import Image from "next/image";

const bullets = [
  { lead: "AI native by design", rest: "not a bolt-on feature added at the end" },
  { lead: "Secure by design", rest: "security is in every decision, not the last sprint" },
  { lead: "Cloud-native", rest: "architecture built to scale from day one" },
];

const tools = [
  { name: "Figma", src: "/tools/figma.svg" },
  { name: "Adobe", src: "/tools/adobe.svg" },
  { name: "React", src: "/tools/react.svg" },
  { name: "Next.js", src: "/tools/nextjs.svg" },
  { name: "Tailwind CSS", src: "/tools/tailwind.svg" },
];

export function ToolsV3() {
  return (
    <section id="stack" className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="font-mono flex items-center gap-3 text-xs tracking-[0.1em] text-muted-foreground uppercase">
          <span className="size-2 bg-primary" aria-hidden="true" />
          Stack / Grid.04
        </div>
        <h2 className="font-display mt-6 max-w-2xl text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.02] font-medium text-foreground">
          Technology choices are decisions, not preferences.
        </h2>

        <div className="font-mono mt-12 border border-foreground text-sm">
          {bullets.map((bullet, index) => (
            <div
              key={bullet.lead}
              className="flex flex-col gap-1 border-b border-foreground/20 px-6 py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-6 sm:px-8"
            >
              <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-foreground">
                <span className="font-bold">{bullet.lead}</span>
                <span className="text-muted-foreground"> — {bullet.rest}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-border pt-8">
          {tools.map((tool) => (
            <Image
              key={tool.name}
              src={tool.src}
              alt={tool.name}
              width={40}
              height={40}
              className="h-7 w-auto object-contain opacity-70"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
