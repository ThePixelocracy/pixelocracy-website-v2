import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type V4ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "invert";
  className?: string;
};

/**
 * V4's own button language: solid flat blocks, no border tricks, no
 * signature shape — the "wow" here is motion (the arrow slides on hover),
 * not geometry. Deliberately distinct from V3's notch system.
 */
export function V4Button({ href, children, variant = "primary", className }: V4ButtonProps) {
  const surface =
    variant === "primary"
      ? "bg-primary text-white"
      : variant === "invert"
        ? "bg-white text-primary"
        : "bg-transparent text-foreground";

  return (
    <Link
      href={href}
      className={cn(
        "group font-cta inline-flex items-center gap-3 px-8 py-4 text-base font-medium",
        variant === "secondary" && "border-b-2 border-foreground px-0 py-2",
        surface,
        className
      )}
    >
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </Link>
  );
}
