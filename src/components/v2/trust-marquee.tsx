import Image from "next/image";
import { SectionLabel } from "@/components/v2/section-label";

const trustedLogos = [
  { name: "COSMOTE", src: "/client-logos/COSMOTE@2xGREY.png", width: 110 },
  { name: "AVIS", src: "/client-logos/avis-logo.svg", width: 90 },
  { name: "Hygeia", src: "/client-logos/ygeia-logo_en.png", width: 110 },
  { name: "Vodafone", src: "/client-logos/vodafone-logo.svg", width: 110 },
  { name: "Aegean", src: "/client-logos/aegean.svg", width: 90 },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-16 pr-16"
      aria-hidden={ariaHidden || undefined}
    >
      {trustedLogos.map((logo) => (
        <Image
          key={logo.name}
          src={logo.src}
          alt={ariaHidden ? "" : logo.name}
          width={logo.width}
          height={40}
          className="h-8 w-auto object-contain opacity-60 grayscale"
        />
      ))}
    </div>
  );
}

export function TrustMarquee() {
  return (
    <section className="border-y border-border bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionLabel index="02" label="Trusted by Greece's largest organisations" className="mb-8" />
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
