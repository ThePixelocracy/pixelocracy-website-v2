import Link from "next/link";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { siteConfig } from "@/lib/site-config";
import { BackToTop } from "@/components/layout/back-to-top";

const footerLinks = [
  { name: "Expertise", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="relative bg-lavender">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute top-0 -mt-px h-10 w-full text-lavender"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-display text-xl font-extrabold tracking-tight text-primary uppercase"
            >
              Pixelocracy
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              We transform the industries of the present, with the technologies of the future
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={siteConfig.links.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pixelocracy on LinkedIn"
              className="mt-1 flex size-8 items-center justify-center rounded-md border border-border text-foreground hover:text-primary"
            >
              <LinkedinIcon className="size-4" aria-hidden="true" />
            </Link>
          </nav>

          <div className="text-sm text-muted-foreground">
            <p>Certified Information Security Management System</p>
            <p>EN ISO/IEC 27001:2023</p>
            <p>Certified by EUROCERT</p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          Pixelocracy © {new Date().getFullYear()}, All rights reserved.
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
