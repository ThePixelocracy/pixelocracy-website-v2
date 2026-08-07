import type { Metadata } from "next";
import { WorkArchivePageV4 } from "@/components/v4/work-archive/work-archive-page-v4";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies from Pixelocracy.",
  alternates: {
    canonical: "/work",
  },
};

/**
 * The Case Studies Archive — the canonical /work route already linked
 * from every "See our work" / "View all Case Studies" CTA and both
 * navigations across the site. See `WorkArchivePageV4` for this page's
 * own composition.
 */
export default function WorkPage() {
  return <WorkArchivePageV4 />;
}
