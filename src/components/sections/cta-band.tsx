import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CTABandProps = {
  heading: ReactNode;
  description?: ReactNode;
  action: ReactNode;
  className?: string;
};

export function CTABand({ heading, description, action, className }: CTABandProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-br from-primary to-navy px-6 py-16 sm:px-8 sm:py-20",
        className
      )}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-[30px] leading-[38px] font-medium text-white sm:text-[40px] sm:leading-[48px]">
          {heading}
        </h2>
        {description ? (
          <div className="flex flex-col gap-3 text-base text-white/90 sm:text-lg">
            {description}
          </div>
        ) : null}
        {action}
      </div>
    </section>
  );
}
