import Image from "next/image";

const bullets = [
  {
    lead: "AI native by design",
    rest: " — not a bolt-on feature added at the end",
  },
  {
    lead: "Secure by design",
    rest: " — security is in every decision, not the last sprint",
  },
  {
    lead: "Cloud-native",
    rest: " architecture built to scale from day one",
  },
];

const tools = [
  { name: "Figma", src: "/tools/figma.svg" },
  { name: "Adobe", src: "/tools/adobe.svg" },
  { name: "React", src: "/tools/react.svg" },
  { name: "Next.js", src: "/tools/nextjs.svg" },
  { name: "Tailwind CSS", src: "/tools/tailwind.svg" },
];

export function ToolsSection() {
  return (
    <div className="flex flex-col items-center gap-12">
      <ul className="flex flex-col flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:flex-row">
        {bullets.map((bullet) => (
          <li
            key={bullet.lead}
            className="flex max-w-xs items-start gap-2 text-base text-foreground sm:max-w-none"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-[15px] shrink-0 rounded-full bg-primary"
            />
            <span>
              <span className="font-bold">{bullet.lead}</span>
              {bullet.rest}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {tools.map((tool) => (
          <Image
            key={tool.name}
            src={tool.src}
            alt={tool.name}
            width={40}
            height={40}
            className="h-8 w-auto object-contain opacity-70 grayscale"
          />
        ))}
      </div>
    </div>
  );
}
