export type CaseStudySummary = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  /** Header background behind the logo image ("navy" | "black" | "red" per approved mockup). */
  headerBg: "navy" | "black" | "red";
  /**
   * Higher-resolution replacement used only by the V4 homepage's full-viewport
   * Work chapters and nav thumbnails. `image` (above) stays untouched because
   * it's also consumed by the locked V2/V3 experiments (with their own
   * duotone/crop treatments tuned to that exact file) — falls back to `image`
   * when not set.
   */
  imageV4?: string;
  /** CSS object-position for `imageV4`, tuned so the important part of the
   * frame (logo, brand mark) survives both the wide desktop crop and the
   * much narrower vertical mobile crop of the same full-bleed image. */
  imagePositionV4?: string;
};

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "govgr",
    name: "Greek e-Government Platform",
    title: "Greek e-Government Platform",
    description:
      "9M users, 2,000+ services consolidated. €400M in yearly savings. The second strongest brand in Greece.",
    image: "/case-studies/govgr-thumbnail.png",
    headerBg: "navy",
    imageV4: "/case-studies/govgr-thumbnail1.png",
    imagePositionV4: "30% 30%",
  },
  {
    slug: "wired-greece",
    name: "WIRED Greece",
    title: "WIRED Greece",
    description:
      "A digital rebirth of a technological icon. The Greek edition of WIRED engineered to global standards, adapted for local culture.",
    image: "/case-studies/wired-hero.png",
    headerBg: "black",
    imageV4: "/case-studies/wired-thumbnail1.png",
    imagePositionV4: "center 35%",
  },
  {
    slug: "apeiron-ventures",
    name: "Apeiron Ventures",
    title: "Apeiron Ventures",
    description:
      "A VC fund digital presence that competes on a global stage. Where the brand name became the design language.",
    image: "/case-studies/apeiron-hero.png",
    headerBg: "red",
    imageV4: "/case-studies/apeiron-thumbnail1.png",
    imagePositionV4: "40% 35%",
  },
];
