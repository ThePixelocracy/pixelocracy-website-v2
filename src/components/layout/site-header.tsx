"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/navigation";
import { NavigationV4 } from "@/components/v4/navigation-v4";

// Routes already rebuilt in V4 language. Extend this set as further pages
// (the remaining four pillar pages, etc.) are validated and promoted — it
// is additive by design, never a behavior change for routes not listed here.
const V4_ROUTES = new Set(["/", "/services/strategy-advisory"]);

/**
 * Routes the site-wide header. The approved V4 homepage was promoted from
 * /v4 to the real homepage at / — so / now gets <NavigationV4/>. The first
 * V4 pillar page (Strategy & Advisory) joins it here. Every other existing
 * route (V2, V3, the remaining /services/[slug] pages) keeps the exact same
 * <Navigation/> as before; this is additive, not a redesign of those pages.
 */
export function SiteHeader() {
  const pathname = usePathname();
  return pathname && V4_ROUTES.has(pathname) ? <NavigationV4 /> : <Navigation />;
}
