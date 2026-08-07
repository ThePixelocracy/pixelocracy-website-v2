import { LogoMarquee } from "@/components/v4/logo-marquee";

/**
 * A deliberate contrast beat after the monumental hero: small, quiet, a lot
 * of air around it. The opposite register on purpose. The full client-logo
 * set drifts past in a continuous, seamless marquee rather than a static
 * row of 4-5 selected names.
 */
export function TrustStripV4() {
  return (
    <section id="trusted" className="bg-background px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <p className="text-sm text-muted-foreground">Trusted by Greece&apos;s largest organisations</p>
      </div>
      <div className="mx-auto mt-10 max-w-6xl">
        <LogoMarquee />
      </div>
    </section>
  );
}
