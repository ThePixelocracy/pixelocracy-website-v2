"use client";

import { useState } from "react";
import { Quote, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Objection } from "@/content/pillar-pages";

function ObjectionCard({ quote, answer }: Objection) {
  const [open, setOpen] = useState(false);
  const canExpand = Boolean(answer);

  return (
    <div className="flex flex-col gap-4 bg-background p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Quote className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-base font-medium text-foreground italic">{quote}</p>
        </div>
        {canExpand ? (
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="shrink-0 text-primary"
          >
            <ChevronDown
              className={cn("size-4 transition-transform", open && "rotate-180")}
              aria-hidden="true"
            />
            <span className="sr-only">{open ? "Collapse answer" : "Expand answer"}</span>
          </button>
        ) : null}
      </div>
      {canExpand && open ? (
        <div className="flex items-start gap-3 border-t border-border pt-4">
          <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-base font-bold text-foreground">{answer}</p>
        </div>
      ) : null}
    </div>
  );
}

type ObjectionsSectionProps = {
  items: Objection[];
};

export function ObjectionsSection({ items }: ObjectionsSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((item, index) => (
        <ObjectionCard key={index} {...item} />
      ))}
    </div>
  );
}
