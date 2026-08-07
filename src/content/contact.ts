import { siteConfig } from "@/lib/site-config";

/**
 * Contact page content. Every fact here is verified from the repository —
 * nothing invented:
 *
 * - Location, email, "usually responds within 1 business day", and the
 *   LinkedIn mention are all recorded in
 *   `knowledge/07_pixelocracy_implementation_spec.md`'s factual record of
 *   the approved legacy Contact page ("Find Us" section) — real copy, not
 *   layout description.
 * - `hello@thepixelocracy.com` is also the exact address already shipped
 *   live in `src/components/v4/navigation-v4.tsx`.
 * - No verified LinkedIn URL exists anywhere in the repository —
 *   `siteConfig.links.linkedin` is an empty string, and the footer already
 *   ships with the same `|| "#"` fallback this file reuses, so this isn't
 *   a new gap, just a consistent one.
 * - The hero/what-happens-next copy is concise, connective copy written
 *   for this page, built around the one verified operational fact above
 *   ("usually responds within 1 business day") — no invented process,
 *   SLA, or methodology beyond that.
 */
export const contactContent = {
  hero: {
    eyebrow: "Contact",
    heading: "Start a conversation.",
    paragraph:
      "Tell us what you're building, fixing, or trying to figure out — we usually respond within one business day.",
  },

  meta: [
    {
      label: "Location",
      lines: ["Evristheos 2, Athens, Greece", "Working with clients across Europe"],
    },
    {
      label: "Email",
      lines: ["hello@thepixelocracy.com", "Usually responds within 1 business day"],
      href: "mailto:hello@thepixelocracy.com",
    },
    {
      label: "Social",
      lines: ["LinkedIn", "Follow for updates and new work"],
      href: siteConfig.links.linkedin || "#",
    },
  ],

  whatNext: {
    eyebrow: "What happens next",
    paragraph:
      "Your message goes straight to our team. We usually respond within one business day to arrange next steps.",
  },

  form: {
    submitLabel: "Send message",
    submittingLabel: "Sending…",
    successHeading: "Message sent.",
    successBody: "Thanks for reaching out — we usually respond within one business day.",
    errorBody: "Something went wrong sending your message. Please try again, or email us directly.",
    notConfiguredBody:
      "Email delivery isn't connected yet — please reach us directly at hello@thepixelocracy.com in the meantime.",
  },
};
