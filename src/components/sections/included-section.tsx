import { cn } from "@/lib/utils";
import type { IncludedColumn } from "@/content/pillar-pages";

type IncludedSectionProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  columns: IncludedColumn[];
  differenceEyebrow: string;
  differenceText: string;
};

export function IncludedSection({
  eyebrow,
  heading,
  intro,
  columns,
  differenceEyebrow,
  differenceText,
}: IncludedSectionProps) {
  return (
    <section className="bg-[#071d7b] px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="font-display text-[15px] leading-5 font-medium tracking-wide text-[#dbe1fc] uppercase">
            {eyebrow}
          </span>
          <h2 className="font-display text-[28px] leading-[34px] font-medium text-white sm:text-[32px] sm:leading-[32px]">
            {heading}
          </h2>
          {intro ? <p className="text-base text-white/90 sm:text-lg">{intro}</p> : null}
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/10 bg-[#061868] p-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:p-12">
          {columns.map((column, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-5 py-8 first:pt-0 sm:py-0",
                index === 0 ? "sm:pr-10" : "sm:pl-10"
              )}
            >
              {column.heading ? (
                <h3 className="font-display text-2xl leading-[30px] font-medium text-white">
                  {column.heading}
                </h3>
              ) : null}
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white/90">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[#dbe1fc]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {column.summary ? (
                <p className="border-t border-white/10 pt-4 text-sm text-white/70">
                  {column.summary}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex gap-6 border-l-2 border-primary pl-6">
          <div className="flex flex-col gap-2">
            <span className="font-display text-[15px] leading-5 font-medium tracking-wide text-[#dbe1fc] uppercase">
              {differenceEyebrow}
            </span>
            <p className="max-w-3xl text-lg text-white sm:text-xl">{differenceText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
