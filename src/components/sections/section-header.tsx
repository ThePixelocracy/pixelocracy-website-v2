import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  as?: ElementType;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCentered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="font-display text-[15px] leading-5 font-medium tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-[28px] leading-[34px] font-bold text-foreground sm:text-[40px] sm:leading-[48px]">
        {heading}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-base text-foreground sm:text-lg",
            isCentered && "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
