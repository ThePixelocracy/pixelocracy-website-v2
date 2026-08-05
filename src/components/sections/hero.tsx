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
        "bg-gradient-to-b from-lavender to-background px-6 py-20 sm:px-8 sm:py-28",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-3xl flex-col gap-6",
          isCentered ? "items-center text-center" : "items-start text-left"
        )}
      >
        {eyebrow ? (
          <span className="text-xs font-bold tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
        ) : null}
        <Heading className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {heading}
        </Heading>
        {description ? (
          <p
            className={cn(
              "text-base text-muted-foreground sm:text-lg",
              isCentered && "max-w-xl"
            )}
          >
            {description}
          </p>
        ) : null}
        {actions ? (
          <div
            className={cn(
              "flex flex-col gap-3 pt-2 sm:flex-row",
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
