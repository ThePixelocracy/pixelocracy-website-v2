"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { pillars } from "@/content/pillars";
import { caseStudies } from "@/content/case-studies";
import { V4Button } from "@/components/v4/v4-button";
import { cn } from "@/lib/utils";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

/**
 * V4's own navigation, not a reskin of the site-wide one: a minimal
 * "PIXELOCRACY / MENU +" bar that opens into a full-screen, art-directed
 * index — oversized numbered links, real selected work, brand colour on
 * black. `sticky` (not `fixed`) so it reserves its own flow height and
 * every section beneath it keeps measuring scroll position correctly
 * without any compensating padding hack.
 */
export function NavigationV4() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("manifesto");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setOverDark(entry.isIntersecting), {
      rootMargin: "-72px 0px -100% 0px",
      threshold: 0,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const inverted = open || overDark;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[70] w-full transition-colors duration-300",
          open
            ? "bg-transparent"
            : overDark
              ? "bg-black/70 backdrop-blur-sm"
              : scrolled
                ? "bg-background/90 backdrop-blur-sm"
                : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Pixelocracy home">
            <Image
              src="/brand/pix-logo-800.png"
              alt="Pixelocracy"
              width={800}
              height={84}
              priority
              className={cn("h-4 w-auto transition-all duration-300 sm:h-[17px]", inverted && "brightness-0 invert")}
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="v4-menu-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "font-mono flex items-center gap-3 text-xs tracking-[0.14em] uppercase transition-colors",
              inverted ? "text-white" : "text-foreground"
            )}
          >
            {open ? "Close" : "Menu"}
            <Plus
              aria-hidden="true"
              className={cn("size-4 transition-transform duration-300", open && "rotate-45")}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="v4-menu-panel"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-foreground"
          >
            <div className="mx-auto flex min-h-full max-w-7xl flex-col justify-between px-6 pt-28 pb-12 sm:px-8 sm:pt-36">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                <nav aria-label="Primary" className="lg:col-span-7">
                  <ol className="flex flex-col">
                    {mainLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.06, duration: 0.5, ease: "easeOut" }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline gap-4 border-b border-white/10 py-4 sm:py-5"
                        >
                          <span className="font-mono text-xs text-white/40">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-[clamp(2rem,1.2rem+4vw,4.5rem)] leading-none font-medium text-white transition-colors group-hover:text-primary">
                            {link.name}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ol>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + mainLinks.length * 0.06, duration: 0.5, ease: "easeOut" }}
                    className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
                  >
                    <span className="font-mono w-full text-xs tracking-[0.14em] text-white/40 uppercase">
                      Services
                    </span>
                    {pillars.map((pillar) => (
                      <Link
                        key={pillar.slug}
                        href={`/services/${pillar.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {pillar.name}
                      </Link>
                    ))}
                  </motion.div>
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  className="lg:col-span-5"
                >
                  <span className="font-mono text-xs tracking-[0.14em] text-white/40 uppercase">
                    Selected work
                  </span>
                  <div className="mt-6 flex flex-col gap-5">
                    {caseStudies.map((caseStudy) => (
                      <Link
                        key={caseStudy.slug}
                        href={`/work/${caseStudy.slug}`}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-4"
                      >
                        <div className="relative h-16 w-24 shrink-0 overflow-hidden">
                          <Image
                            src={caseStudy.imageV4 ?? caseStudy.image}
                            alt={caseStudy.title}
                            fill
                            sizes="96px"
                            style={{ objectPosition: caseStudy.imagePositionV4 ?? "center" }}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                          {caseStudy.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between"
              >
                <p className="text-sm text-white/50">hello@thepixelocracy.com</p>
                <V4Button href="/contact" variant="invert" className="w-fit">
                  Book a discovery call
                </V4Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
