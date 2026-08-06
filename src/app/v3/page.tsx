import type { Metadata } from "next";
import { HeroV3 } from "@/components/v3/hero-v3";
import { TrustStripV3 } from "@/components/v3/trust-strip-v3";
import { WhatWeDoV3 } from "@/components/v3/what-we-do-v3";
import { ManifestoV3 } from "@/components/v3/manifesto-v3";
import { ToolsV3 } from "@/components/v3/tools-v3";
import { ShippedV3 } from "@/components/v3/shipped-v3";
import { CTAV3 } from "@/components/v3/cta-v3";
import { PixelDither } from "@/components/v3/pixel-dither";
import { ManifestoTransition } from "@/components/v3/manifesto-transition";

export const metadata: Metadata = {
  title: "Homepage V3 (experimental art direction)",
  robots: {
    index: false,
    follow: false,
  },
};

const lavender = "#e8ecfd";
const blue = "#4467f6";
export default function HomeV3() {
  return (
    <>
      <HeroV3 />
      <TrustStripV3 />
      <WhatWeDoV3 />
      <ManifestoTransition direction="in" />
      <ManifestoV3 />
      <ManifestoTransition direction="out" />
      <ToolsV3 />
      <ShippedV3 />
      <PixelDither from={lavender} to={blue} rows={2} cols={56} className="h-8 sm:h-10" />
      <CTAV3 />
    </>
  );
}
