export const siteConfig = {
  name: "Pixelocracy",
  title: "Pixelocracy",
  description:
    "Pixelocracy is an AI-first studio building products, brands, and digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thepixelocracy.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "",
    github: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
