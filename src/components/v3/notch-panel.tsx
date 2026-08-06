import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Corner = "tl" | "tr" | "bl" | "br";

type NotchPanelProps = {
  children: ReactNode;
  href?: string;
  corner?: Corner;
  size?: string;
  className?: string;
  fillClassName?: string;
};

function clipPathFor(corner: Corner, size: string) {
  switch (corner) {
    case "tr":
      return `polygon(0 0, calc(100% - ${size}) 0, 100% ${size}, 100% 100%, 0 100%)`;
    case "bl":
      return `polygon(0 0, 100% 0, 100% 100%, ${size} 100%, 0 calc(100% - ${size}))`;
    case "br":
      return `polygon(0 0, 100% 0, 100% calc(100% - ${size}), calc(100% - ${size}) 100%, 0 100%)`;
    case "tl":
    default:
      return `polygon(${size} 0, 100% 0, 100% 100%, 0 100%, 0 ${size})`;
  }
}

const cornerPosition: Record<Corner, string> = {
  tl: "top-0 left-0",
  tr: "top-0 right-0",
  bl: "bottom-0 left-0",
  br: "bottom-0 right-0",
};

export function NotchPanel({
  children,
  href,
  corner = "tl",
  size = "20px",
  className,
  fillClassName = "bg-primary",
}: NotchPanelProps) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "absolute z-0 scale-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100",
          cornerPosition[corner],
          fillClassName
        )}
        style={{ width: size, height: size }}
      />
      <div className="relative z-10 size-full" style={{ clipPath: clipPathFor(corner, size) }}>
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group relative block transition-transform duration-300 ease-out hover:-translate-y-1", className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn("group relative block transition-transform duration-300 ease-out hover:-translate-y-1", className)}>{content}</div>;
}
