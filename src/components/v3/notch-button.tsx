import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NotchButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "invert";
  className?: string;
};

const NOTCH = "14px";

const fillerTone: Record<string, string> = {
  primary: "top-0 right-0 bg-white",
  secondary: "bottom-0 left-0 bg-primary",
  invert: "top-0 right-0 bg-navy",
};

const surfaceTone: Record<string, string> = {
  primary: "bg-primary text-primary-foreground group-hover:bg-navy",
  secondary:
    "border border-foreground bg-transparent text-foreground group-hover:border-primary group-hover:text-primary",
  invert: "bg-white text-primary group-hover:bg-lavender",
};

export function NotchButton({ href, children, variant = "primary", className }: NotchButtonProps) {
  const clipRight = variant !== "secondary";

  return (
    <Link
      href={href}
      className={cn("group font-cta relative inline-flex text-base font-medium", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute size-3.5 scale-0 opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100",
          fillerTone[variant]
        )}
      />
      <span
        className={cn("relative inline-flex items-center gap-2 px-8 py-4 transition-colors", surfaceTone[variant])}
        style={{
          clipPath: clipRight
            ? `polygon(0 0, calc(100% - ${NOTCH}) 0, 100% ${NOTCH}, 100% 100%, 0 100%)`
            : `polygon(0 0, 100% 0, 100% 100%, ${NOTCH} 100%, 0 calc(100% - ${NOTCH}))`,
        }}
      >
        {children}
      </span>
    </Link>
  );
}
