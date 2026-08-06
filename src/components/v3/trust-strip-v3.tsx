import Image from "next/image";

const trustedLogos = [
  { name: "COSMOTE", src: "/client-logos/COSMOTE@2xGREY.png", width: 110 },
  { name: "AVIS", src: "/client-logos/avis-logo.svg", width: 90 },
  { name: "Hygeia", src: "/client-logos/ygeia-logo_en.png", width: 110 },
  { name: "Vodafone", src: "/client-logos/vodafone-logo.svg", width: 110 },
  { name: "Aegean", src: "/client-logos/aegean.svg", width: 90 },
];

export function TrustStripV3() {
  return (
    <section id="trusted" className="bg-background px-6 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="font-mono flex items-center gap-3 text-xs tracking-[0.1em] text-muted-foreground uppercase">
          <span className="size-2 bg-primary" aria-hidden="true" />
          Trusted by Greece&apos;s largest organisations
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-border pt-8">
          {trustedLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={40}
              className="h-7 w-auto object-contain opacity-70 grayscale sm:h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
