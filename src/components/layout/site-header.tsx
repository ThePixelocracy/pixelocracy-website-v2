"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/navigation";
import { NavigationV4 } from "@/components/v4/navigation-v4";

/**
 * Routes the site-wide header per experiment. Every route except /v4 gets
 * the exact same <Navigation/> as before this file existed — this switch
 * is additive, not a behavior change for the main site, V2 or V3.
 */
export function SiteHeader() {
  const pathname = usePathname();
  return pathname?.startsWith("/v4") ? <NavigationV4 /> : <Navigation />;
}
