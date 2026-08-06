import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  src: string;
  /** Rendered width in px at 1x; height is derived from the source aspect ratio. */
  width?: number;
};

type LogoStripProps = {
  caption: string;
  logos: Logo[];
  className?: string;
};

export function LogoStrip({ caption, logos, className }: LogoStripProps) {
  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      <p className="text-sm text-muted-foreground">{caption}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={logo.width ?? 120}
            height={40}
            className="h-8 w-auto object-contain opacity-70 grayscale sm:h-9"
          />
        ))}
      </div>
    </div>
  );
}
