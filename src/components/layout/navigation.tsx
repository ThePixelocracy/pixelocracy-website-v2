import Link from "next/link";
import { pillars } from "@/content/pillars";
import { ServicesDropdown } from "@/components/layout/services-dropdown";
import { MobileMenu } from "@/components/layout/mobile-menu";

const primaryLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
];

export function Navigation() {
  return (
    <header className="relative z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight text-primary uppercase"
        >
          Pixelocracy
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <ServicesDropdown pillars={pillars} />
          <Link
            href="/work"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/insights"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Insights
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden text-sm font-semibold text-foreground transition-colors hover:text-primary lg:block"
          >
            Contact
          </Link>
          <MobileMenu links={primaryLinks} pillars={pillars} />
        </div>
      </div>
    </header>
  );
}
