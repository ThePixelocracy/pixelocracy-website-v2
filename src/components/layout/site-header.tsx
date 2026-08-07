"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/navigation";
import { NavigationV4 } from "@/components/v4/navigation-v4";

/**
 * Routes the site-wide header. The approved V4 homepage was promoted from
 * /v4 to the real homepage at / — so / now gets <NavigationV4/>. Every
 * other existing route (V2, V3, /services/[slug]) keeps the exact same
 * <Navigation/> as before; this is a route promotion, not a redesign of
 * those other pages.
 */
export function SiteHeader() {
  const pathname = usePathname();
  return pathname === "/" ? <NavigationV4 /> : <Navigation />;
}
