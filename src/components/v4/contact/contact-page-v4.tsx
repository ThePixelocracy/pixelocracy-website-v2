import { ContactHeroV4 } from "@/components/v4/contact/contact-hero-v4";
import { ContactWhatNextV4 } from "@/components/v4/contact/contact-what-next-v4";

/**
 * The Contact page — direct by design. Two sections only: the combined
 * hero+form (the form is immediately actionable, not buried below a
 * decorative reveal) and a short, honest "what happens next" note. No
 * card-bordered two-column layout, no wave dividers, no "Find us" cards —
 * the legacy V3 Contact page's visual language, not this one's.
 */
export function ContactPageV4() {
  return (
    <>
      <ContactHeroV4 />
      <ContactWhatNextV4 />
    </>
  );
}
