import { cn } from "@/lib/utils";

type ResolveFieldProps = {
  rows?: number;
  cols?: number;
  className?: string;
  /** Compact mode is used for the thin between-section transition strip. */
  compact?: boolean;
};

/** Deterministic pseudo-random in [0,1) — identical on server and client. */
function hash(r: number, c: number, salt: number) {
  const n = Math.sin(r * 127.1 + c * 311.7 + salt * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

/**
 * The Pixelocracy "Resolve" motif: scattered, rotated, muted blocks on the left
 * settle into a precise, uniform, solid grid on the right — complexity
 * becoming clarity. Reused at hero scale and, compact, as the section
 * transition device. Not used decoratively elsewhere.
 */
export function ResolveField({ rows = 6, cols = 28, className, compact = false }: ResolveFieldProps) {
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const progress = cols > 1 ? c / (cols - 1) : 1;
      const chaos = 1 - progress;
      const h1 = hash(r, c, 1);
      const h2 = hash(r, c, 2);
      const h3 = hash(r, c, 3);

      const skip = !compact && chaos > 0.2 && h1 < chaos * 0.4;
      if (skip) {
        cells.push(<div key={`${r}-${c}`} />);
        continue;
      }

      const rotation = compact ? 0 : chaos * (h2 - 0.5) * 60;
      const scale = compact ? 1 : 1 - chaos * (0.1 + h3 * 0.55);
      const opacity = compact ? 0.55 + progress * 0.45 : 0.3 + progress * 0.6 + h1 * chaos * 0.1;

      let tone = "bg-primary";
      if (!compact && chaos > 0.55 && h3 > 0.5) tone = "bg-foreground/25";
      else if (!compact && chaos > 0.3 && h2 > 0.55) tone = "bg-navy/50";

      cells.push(
        <div key={`${r}-${c}`} className="flex items-center justify-center">
          <div
            className={tone}
            style={
              compact
                ? {
                    width: `${scale * 100}%`,
                    height: `${scale * 100}%`,
                    opacity,
                  }
                : {
                    // Force a true 1:1 pixel regardless of the grid cell's own
                    // aspect ratio — width-driven, height follows via aspect-ratio.
                    width: `${scale * 100}%`,
                    aspectRatio: "1 / 1",
                    opacity,
                    transform: rotation ? `rotate(${rotation}deg)` : undefined,
                  }
            }
          />
        </div>
      );
    }
  }

  return (
    <div
      aria-hidden="true"
      className={cn("grid", compact ? "gap-px" : "gap-[3px]", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
    >
      {cells}
    </div>
  );
}
