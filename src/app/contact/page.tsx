import type { Metadata } from "next";
import { ContactPageV4 } from "@/components/v4/contact/contact-page-v4";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Pixelocracy.",
  alternates: {
    canonical: "/contact",
  },
};

/**
 * The Contact page — the canonical /contact route already linked from
 * every CTA button and both navigations across the site. See
 * `ContactPageV4` for this page's own composition.
 */
export default function ContactPage() {
  return <ContactPageV4 />;
}
