import { cn } from "@/lib/utils";
import { ResolveField } from "@/components/v3/resolve-field";

type PixelDitherProps = {
  /** CSS color of the section above. */
  from: string;
  /** CSS color of the section below. */
  to: string;
  rows?: number;
  cols?: number;
  className?: string;
};

/**
 * Chapter transition: a compact reuse of the same Resolve motif used in the
 * hero. Used sparingly — only at the three narrative thresholds that
 * genuinely change register (arriving at the mission, leaving it, arriving
 * at the ask) — each at a different grain/scale, not as a repeated spacer
 * between every section.
 */
export function PixelDither({ from, to, rows = 2, cols = 64, className }: PixelDitherProps) {
  return (
    <div
      className={cn("relative h-8 w-full overflow-hidden sm:h-10", className)}
      style={{ background: `linear-gradient(to right, ${from}, ${to})` }}
    >
      <ResolveField rows={rows} cols={cols} compact className="absolute inset-0" />
    </div>
  );
}
