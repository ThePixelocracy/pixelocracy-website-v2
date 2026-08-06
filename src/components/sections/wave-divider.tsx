import { cn } from "@/lib/utils";

type WaveDividerProps = {
  /** "lines" — multiple stroked wave lines (hero → content transitions). "solid" — a single filled wave (color-band transitions). */
  variant?: "lines" | "solid";
  className?: string;
};

export function WaveDivider({ variant = "solid", className }: WaveDividerProps) {
  if (variant === "lines") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={cn("h-16 w-full text-primary/40 sm:h-20", className)}
      >
        {[0, 12, 24, 36, 48].map((offset) => (
          <path
            key={offset}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            d={`M0,${40 + offset * 0.4} C240,${8 + offset * 0.4} 480,${72 - offset * 0.4} 720,${40 + offset * 0.2} C960,${8 + offset * 0.2} 1200,${72 - offset * 0.2} 1440,${40}`}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={cn("h-10 w-full text-lavender", className)}
    >
      <path
        fill="currentColor"
        d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z"
      />
    </svg>
  );
}
