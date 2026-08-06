export type CaseStudySummary = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  /** Header background behind the logo image ("navy" | "black" | "red" per approved mockup). */
  headerBg: "navy" | "black" | "red";
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
  },
  {
    slug: "wired-greece",
    name: "WIRED Greece",
    title: "WIRED Greece",
    description:
      "A digital rebirth of a technological icon. The Greek edition of WIRED engineered to global standards, adapted for local culture.",
    image: "/case-studies/wired-hero.png",
    headerBg: "black",
  },
  {
    slug: "apeiron-ventures",
    name: "Apeiron Ventures",
    title: "Apeiron Ventures",
    description:
      "A VC fund digital presence that competes on a global stage. Where the brand name became the design language.",
    image: "/case-studies/apeiron-hero.png",
    headerBg: "red",
  },
];
