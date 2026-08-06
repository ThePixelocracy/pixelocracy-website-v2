import { caseStudies } from "@/content/case-studies";
import { NotchPanel } from "@/components/v3/notch-panel";
import { DuotoneImage } from "@/components/v3/duotone-image";
import { NotchButton } from "@/components/v3/notch-button";

function ShowcaseCard({
  caseStudy,
  number,
  height,
  corner,
  fillClassName,
}: {
  caseStudy: (typeof caseStudies)[number];
  number: string;
  height: string;
  corner: "tl" | "tr" | "bl" | "br";
  fillClassName: string;
}) {
  return (
    <NotchPanel
      href={`/work/${caseStudy.slug}`}
      corner={corner}
      size="28px"
      fillClassName={fillClassName}
      className={`bg-background ${height}`}
    >
      <div className="relative size-full">
        <DuotoneImage
          src={caseStudy.image}
          alt={caseStudy.title}
          tone={caseStudy.headerBg === "navy" ? "navy" : "primary"}
          className="absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(4,8,25,0.96) 0%, rgba(4,8,25,0.85) 22%, rgba(4,8,25,0.35) 48%, rgba(4,8,25,0.05) 68%, transparent 82%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(4,8,25,0.55) 0%, transparent 40%)",
          }}
        />
        <span className="font-display absolute top-5 right-6 text-6xl leading-none font-medium text-white/25 sm:text-7xl">
          {number}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{caseStudy.title}</h3>
          <p className="max-w-md text-sm text-white/85 sm:text-base">{caseStudy.description}</p>
        </div>
      </div>
    </NotchPanel>
  );
}

export function ShippedV3() {
  const [featured, second, third] = caseStudies;

  return (
    <section id="work" className="bg-lavender px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="font-mono flex items-center gap-3 text-xs tracking-[0.1em] text-muted-foreground uppercase">
          <span className="size-2 bg-primary" aria-hidden="true" />
          Selected work / Grid.05
        </div>
        <h2 className="font-display mt-6 max-w-2xl text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.02] font-medium text-foreground">
          National platforms, global brands.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <ShowcaseCard
              caseStudy={featured}
              number="01"
              height="h-[340px] sm:h-[440px] lg:h-[624px]"
              corner="tr"
              fillClassName="bg-white"
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <ShowcaseCard
              caseStudy={second}
              number="02"
              height="h-[260px] sm:h-[300px]"
              corner="bl"
              fillClassName="bg-primary"
            />
            <ShowcaseCard
              caseStudy={third}
              number="03"
              height="h-[260px] sm:h-[300px]"
              corner="tr"
              fillClassName="bg-white"
            />
          </div>
        </div>

        <div className="mt-12">
          <NotchButton href="/work" variant="secondary">
            View all Case Studies
          </NotchButton>
        </div>
      </div>
    </section>
  );
}
