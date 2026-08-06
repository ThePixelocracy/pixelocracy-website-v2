export const siteConfig = {
  name: "Pixelocracy",
  title: "Pixelocracy",
  description:
    "Pixelocracy is a technology and digital transformation partner helping organizations solve complex business challenges through strategy, AI, engineering, digital products, and organizational enablement.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thepixelocracy.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "",
    github: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
