import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionLabel({ index, label, tone = "dark", className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "font-display text-sm font-medium",
          tone === "dark" ? "text-primary" : "text-white/70"
        )}
      >
        {index}
      </span>
      <span
        className={cn(
          "h-px w-8",
          tone === "dark" ? "bg-primary/40" : "bg-white/30"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "font-display text-xs font-medium tracking-[0.14em] uppercase",
          tone === "dark" ? "text-muted-foreground" : "text-white/70"
        )}
      >
        {label}
      </span>
    </div>
  );
}
