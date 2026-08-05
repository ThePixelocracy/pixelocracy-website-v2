"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { PillarNavItem } from "@/content/pillars";

type NavLink = { name: string; href: string };

type MobileMenuProps = {
  links: NavLink[];
  pillars: PillarNavItem[];
};

export function MobileMenu({ links, pillars }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-9 items-center justify-center text-foreground"
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      {open ? (
        <div
          id="mobile-menu-panel"
          className="absolute inset-x-0 top-full z-50 border-b border-border bg-background px-6 py-4 shadow-lg"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) =>
              link.name === "Home" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ) : null
            )}

            <span className="px-3 pt-3 pb-1 text-xs font-bold tracking-wide text-muted-foreground uppercase">
              Services
            </span>
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/services/${pillar.slug}`}
                className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {pillar.name}
              </Link>
            ))}

            {links
              .filter((link) => link.name !== "Home")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

            <Link
              href="/contact"
              className="mt-2 rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
