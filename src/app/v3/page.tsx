import type { Metadata } from "next";
import { HeroV3 } from "@/components/v3/hero-v3";
import { TrustStripV3 } from "@/components/v3/trust-strip-v3";
import { WhatWeDoV3 } from "@/components/v3/what-we-do-v3";
import { ManifestoV3 } from "@/components/v3/manifesto-v3";
import { ToolsV3 } from "@/components/v3/tools-v3";
import { ShippedV3 } from "@/components/v3/shipped-v3";
import { CTAV3 } from "@/components/v3/cta-v3";
import { PixelDither } from "@/components/v3/pixel-dither";

export const metadata: Metadata = {
  title: "Homepage V3 (experimental art direction)",
  robots: {
    index: false,
    follow: false,
  },
};

const white = "#ffffff";
const lavender = "#e8ecfd";
const navy = "#071d7b";
const blue = "#4467f6";

/**
 * The Resolve strip is used sparingly — only at the three moments where the
 * page genuinely changes register — each at a different grain, so it reads
 * as a deliberate device rather than a repeated separator between sections.
 */
export default function HomeV3() {
  return (
    <>
      <HeroV3 />
      <TrustStripV3 />
      <WhatWeDoV3 />
      <PixelDither from={lavender} to={navy} rows={3} cols={72} className="h-12 sm:h-16" />
      <ManifestoV3 />
      <PixelDither from={navy} to={white} rows={2} cols={40} className="h-6 sm:h-8" />
      <ToolsV3 />
      <ShippedV3 />
      <PixelDither from={lavender} to={blue} rows={2} cols={56} className="h-8 sm:h-10" />
      <CTAV3 />
    </>
  );
}
