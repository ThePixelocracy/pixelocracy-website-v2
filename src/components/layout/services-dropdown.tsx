"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { PillarNavItem } from "@/content/pillars";

export function ServicesDropdown({ pillars }: { pillars: PillarNavItem[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        Services
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
      {open ? (
        <div className="absolute top-full left-0 z-50 mt-2 w-64 rounded-lg border border-border bg-background p-2 shadow-lg">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/services/${pillar.slug}`}
              className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {pillar.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
