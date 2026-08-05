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
        <span className="text-xs font-bold tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {heading}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-base text-muted-foreground sm:text-lg",
            isCentered && "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
