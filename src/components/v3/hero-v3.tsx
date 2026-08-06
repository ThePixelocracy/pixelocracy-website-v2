import { NotchButton } from "@/components/v3/notch-button";
import { ResolveField } from "@/components/v3/resolve-field";

const wayfind = [
  { id: "capabilities", label: "Capabilities" },
  { id: "manifesto", label: "Manifesto" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function HeroV3() {
  return (
    <section id="top" className="relative bg-background pt-14 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="font-mono flex items-center gap-3 text-xs tracking-[0.1em] text-muted-foreground uppercase">
          <span className="size-2 bg-primary" aria-hidden="true" />
          Pixelocracy / Grid.01 / Home
        </div>

        <h1 className="font-display mt-8 max-w-4xl text-[clamp(2.25rem,1rem+4.5vw,4.75rem)] leading-[1.02] font-medium tracking-tight text-foreground">
          From national infrastructure
          <br />
          to early-stage products
        </h1>

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg text-foreground">
            Strategy, engineering, data, design and capability combined in one team. Built for
            organizations that need more than a vendor.
          </p>
          <div className="flex flex-wrap gap-4 sm:shrink-0">
            <NotchButton href="/contact" variant="primary">
              Book a discovery call
            </NotchButton>
            <NotchButton href="/work" variant="secondary">
              See our work
            </NotchButton>
          </div>
        </div>
      </div>

      <div className="relative mt-14 sm:mt-20">
        <div className="flex h-[220px] flex-col bg-background sm:h-[300px] lg:h-[360px]">
          <ResolveField rows={6} cols={32} className="min-h-0 flex-1 px-4 pt-4 sm:px-8 sm:pt-6" />

          <div className="shrink-0 px-4 pt-3 sm:px-8">
            <div className="relative h-px w-full bg-border">
              <span aria-hidden="true" className="absolute top-0 left-0 h-1.5 w-px bg-border" />
              <span aria-hidden="true" className="absolute top-0 right-0 h-1.5 w-px bg-border" />
            </div>
            <div className="font-mono flex justify-between pt-2 text-[11px] font-bold tracking-[0.14em] uppercase">
              <span className="text-foreground">Complexity</span>
              <span className="text-primary">Clarity</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <nav
          aria-label="Section index"
          className="font-mono relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-border py-5 text-xs tracking-[0.08em] text-muted-foreground uppercase"
        >
          {wayfind.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
