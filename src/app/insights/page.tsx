import type { Metadata } from "next";
import { InsightsPageV4 } from "@/components/v4/insights/insights-page-v4";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on strategy, data, engineering, and product from Pixelocracy.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return <InsightsPageV4 />;
}
