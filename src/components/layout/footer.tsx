import Link from "next/link";
import Image from "next/image";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { siteConfig } from "@/lib/site-config";
import { BackToTop } from "@/components/layout/back-to-top";
import { WaveDivider } from "@/components/sections/wave-divider";

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
      <WaveDivider variant="solid" className="absolute top-0 -mt-px" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link href="/" aria-label="Pixelocracy home">
              <Image
                src="/brand/pix-logo-800.png"
                alt="Pixelocracy"
                width={800}
                height={84}
                className="h-5 w-auto"
              />
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
