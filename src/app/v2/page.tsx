import type { Metadata } from "next";
import { HeroV2 } from "@/components/v2/hero-v2";
import { TrustMarquee } from "@/components/v2/trust-marquee";
import { WhatWeDoV2 } from "@/components/v2/what-we-do-v2";
import { ToolsBandV2 } from "@/components/v2/tools-band-v2";
import { ShippedV2 } from "@/components/v2/shipped-v2";
import { CTAV2 } from "@/components/v2/cta-v2";

export const metadata: Metadata = {
  title: "Homepage V2 (experimental)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomeV2() {
  return (
    <>
      <HeroV2 />
      <TrustMarquee />
      <WhatWeDoV2 />
      <ToolsBandV2 />
      <ShippedV2 />
      <CTAV2 />
    </>
  );
}
