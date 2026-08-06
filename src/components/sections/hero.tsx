import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  align?: "center" | "left";
  as?: ElementType;
  className?: string;
};

export function Hero({
  eyebrow,
  heading,
  description,
  actions,
  align = "center",
  as: Heading = "h1",
  className,
}: HeroProps) {
  const isCentered = align === "center";

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-lavender to-background px-6 py-14 sm:px-8 sm:py-20",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-3xl flex-col",
          isCentered ? "items-center text-center" : "items-start text-left"
        )}
      >
        {eyebrow ? (
          <span className="font-display mb-3 text-[15px] leading-5 font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
        ) : null}
        <Heading className="font-display text-[30px] leading-[38px] font-medium text-foreground sm:text-[48px] sm:leading-[48px]">
          {heading}
        </Heading>
        {description ? (
          <p
            className={cn(
              "mt-[50px] text-[20px] leading-[26px] text-foreground sm:text-[24px] sm:leading-[30px]",
              isCentered && "max-w-xl"
            )}
          >
            {description}
          </p>
        ) : null}
        {actions ? (
          <div
            className={cn(
              "mt-9 flex flex-col gap-3 sm:flex-row",
              isCentered && "items-center justify-center"
            )}
          >
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
