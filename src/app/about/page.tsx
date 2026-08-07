import type { Metadata } from "next";
import { AboutPageV4 } from "@/components/v4/about/about-page-v4";

export const metadata: Metadata = {
  title: "About",
  description: "Different disciplines. One accountable team. Lasting capability.",
  alternates: {
    canonical: "/about",
  },
};

/**
 * The About page — the canonical /about route already linked from the
 * site-wide header, full-screen nav, and footer. See `AboutPageV4` for
 * this page's own composition.
 */
export default function AboutPage() {
  return <AboutPageV4 />;
}
