"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/navigation";
import { NavigationV4 } from "@/components/v4/navigation-v4";

// Routes already rebuilt in V4 language. All five pillar pages are now
// listed here — this is additive by design, never a behavior change for
// routes not listed here (V2, V3 stay on the legacy <Navigation/>).
const V4_ROUTES = new Set([
  "/",
  "/services/strategy-advisory",
  "/services/data-ai-automation",
  "/services/engineering-security",
  "/services/digital-products",
  "/services/capability-building-operations",
  "/about",
  "/contact",
  "/work",
]);

/**
 * Routes the site-wide header. The approved V4 homepage was promoted from
 * /v4 to the real homepage at / — so / now gets <NavigationV4/>. All five
 * V4 pillar pages (Strategy & Advisory, Data AI & Automation, Engineering
 * & Security, Digital Products & UI/UX, Capability Building), About,
 * Contact, and the new Work archive join it here. Every other existing
 * route (V2, V3) keeps the exact same <Navigation/> as before; this is
 * additive, not a redesign of those pages.
 */
export function SiteHeader() {
  const pathname = usePathname();
  return pathname && V4_ROUTES.has(pathname) ? <NavigationV4 /> : <Navigation />;
}
