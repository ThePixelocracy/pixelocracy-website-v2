import Image from "next/image";
import Link from "next/link";
import type { Pillar } from "@/content/pillars";

type ProcessSectionProps = {
  pillars: Pillar[];
};

export function ProcessSection({ pillars }: ProcessSectionProps) {
  return (
    <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-background">
      {pillars.map((pillar, index) => (
        <div
          key={pillar.slug}
          className="flex flex-col gap-6 border-b border-border px-6 py-8 last:border-b-0 sm:flex-row sm:items-center sm:gap-10 sm:px-10"
        >
          <span className="font-display text-lg font-medium text-foreground sm:w-10 sm:shrink-0">
            {String(index + 1).padStart(2, "0")}.
          </span>
          <Image
            src={pillar.icon}
            alt=""
            aria-hidden="true"
            width={90}
            height={90}
            className="size-16 shrink-0 sm:size-20"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-foreground">{pillar.heading}</h3>
            <p className="max-w-xl text-base text-foreground">
              {pillar.differentiator}
            </p>
            <Link
              href={`/services/${pillar.slug}`}
              className="text-sm font-bold text-foreground hover:text-primary"
            >
              Learn more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
