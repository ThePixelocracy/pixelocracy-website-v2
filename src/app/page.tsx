import { Hero } from "@/components/sections/hero";
import { PrimaryCTA } from "@/components/sections/primary-cta";
import { SecondaryCTA } from "@/components/sections/secondary-cta";

export default function Home() {
  return (
    <Hero
      heading={
        <>
          From national infrastructure to
          <br />
          early-stage products
        </>
      }
      description="Strategy, engineering, data, design and capability combined in one team. Built for organizations that need more than a vendor."
      actions={
        <>
          <PrimaryCTA href="/contact" accentTab>
            Book a discovery call
          </PrimaryCTA>
          <SecondaryCTA href="/work">See our work</SecondaryCTA>
        </>
      }
    />
  );
}
