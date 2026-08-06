export type Pillar = {
  /** Short name used in navigation. */
  name: string;
  /** Full heading used on the Homepage "What we do" list and pillar page H1. */
  heading: string;
  slug: string;
  /** One-line key differentiator shown in the Homepage "What we do" list. */
  differentiator: string;
  /** Local illustration asset from the Pixelocracy asset pack (ui-graphics/). */
  icon: string;
};

export const pillars: Pillar[] = [
  {
    name: "Strategy & Advisory",
    heading: "Strategy & Advisory",
    slug: "strategy-advisory",
    differentiator:
      "From roadmap to execution. We stay until it's real, not until the deck is delivered.",
    icon: "/ui-graphics/strategy-advisory-illustration.svg",
  },
  {
    name: "Data, AI & Automation",
    heading: "Data, AI & Automation",
    slug: "data-ai-automation",
    differentiator:
      "Decision intelligence, not just analytics. We build systems that tell you what to do next.",
    icon: "/ui-graphics/data-ai-automation-illustration.svg",
  },
  {
    name: "Engineering & Security",
    heading: "Engineering & Security",
    slug: "engineering-security",
    differentiator:
      "Security is a speed multiplier, not a friction point. We build fast — and we build solid.",
    icon: "/ui-graphics/engineering-security-illustration.svg",
  },
  {
    name: "Digital Products",
    heading: "Digital Products & UI/UX",
    slug: "digital-products",
    differentiator:
      "Complexity made simple. Design and engineering speak the same language here.",
    icon: "/ui-graphics/digital-products-illustration.svg",
  },
  {
    name: "Capability Building & Operations",
    heading: "Capability Building",
    slug: "capability-building-operations",
    differentiator:
      "We succeed when you don't need us anymore. Your team is the asset, not our retainer.",
    icon: "/ui-graphics/capability-building-illustration.svg",
  },
];

export type PillarNavItem = Pick<Pillar, "name" | "slug">;
