import Image from "next/image";
import { cn } from "@/lib/utils";

type DuotoneImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  tone?: "primary" | "navy";
};

export function DuotoneImage({ src, alt, className, sizes = "100vw", tone = "primary" }: DuotoneImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover grayscale contrast-125 brightness-90 transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 mix-blend-color",
          tone === "primary" ? "bg-primary" : "bg-navy"
        )}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
    </div>
  );
}
