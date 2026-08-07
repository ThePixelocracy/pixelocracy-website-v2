"use client";

import Image from "next/image";

type CaseStudyShowcaseV4Props = {
  eyebrow: string;
  caption: string;
  image: string;
  imageAlt: string;
  /** Tailwind arbitrary aspect-ratio value for the full-bleed desktop crop, e.g. "aspect-[1920/946]". */
  desktopAspectClassName?: string;
  /** Tailwind arbitrary aspect-ratio value for the narrower, taller mobile crop, e.g. "aspect-[4/3]". */
  mobileAspectClassName?: string;
  /** Tailwind object-position utility keeping the important region in frame on mobile's taller crop, e.g. "object-left-top". */
  mobileObjectPositionClassName?: string;
};

/**
 * Shared full-width real-screenshot moment — for a landscape product
 * screenshot too wide to sit in `CaseStudyPlatformV4`'s portrait image
 * slot (that one assumes a mobile-shaped UI capture, e.g. Cardom's). Runs
 * edge-to-edge at the section's own full width rather than constrained to
 * the shared max-w-6xl content column, so a genuinely important screenshot
 * gets to read at scale on desktop. On mobile, a wide screenshot squeezed
 * into its own native ratio shrinks to an illegible sliver — so mobile
 * gets its own taller, narrower crop with its own tuned object-position,
 * not the same ratio scaled down. Always rendered at full opacity and
 * eagerly loaded — no hover or scroll dependency to become visible, per
 * the /work archive fix.
 */
export function CaseStudyShowcaseV4({
  eyebrow,
  caption,
  image,
  imageAlt,
  desktopAspectClassName = "sm:aspect-[16/9]",
  mobileAspectClassName = "aspect-[4/3]",
  mobileObjectPositionClassName = "object-left-top",
}: CaseStudyShowcaseV4Props) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto mb-6 max-w-6xl px-6 sm:px-8">
        <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{eyebrow}</span>
      </div>
      <div className={`relative w-full overflow-hidden bg-muted ${mobileAspectClassName} ${desktopAspectClassName}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          loading="eager"
          className={`object-cover ${mobileObjectPositionClassName} sm:object-top`}
        />
      </div>
      <div className="mx-auto mt-4 max-w-6xl px-6 sm:px-8">
        <p className="text-sm text-muted-foreground">{caption}</p>
      </div>
    </section>
  );
}
