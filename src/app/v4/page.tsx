import type { Metadata } from "next";
import { HeroV4 } from "@/components/v4/hero-v4";
import { TrustStripV4 } from "@/components/v4/trust-strip-v4";
import { CapabilitiesV4 } from "@/components/v4/capabilities-v4";
import { ManifestoV4 } from "@/components/v4/manifesto-v4";
import { ProofV4 } from "@/components/v4/proof-v4";
import { WorkV4 } from "@/components/v4/work-v4";
import { CTAV4 } from "@/components/v4/cta-v4";
import { StoryRail } from "@/components/v4/story-rail";

export const metadata: Metadata = {
  title: "Homepage V4 (experimental — Scale)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomeV4() {
  return (
    <>
      <StoryRail />
      <HeroV4 />
      <TrustStripV4 />
      <CapabilitiesV4 />
      <ManifestoV4 />
      <ProofV4 />
      <WorkV4 />
      <CTAV4 />
    </>
  );
}
