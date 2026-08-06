import { cn } from "@/lib/utils";
import type { WhyUsCard } from "@/content/pillar-pages";

type FeatureGridProps = {
  cards: WhyUsCard[];
};

export function FeatureGrid({ cards }: FeatureGridProps) {
  const gridColsClass = cards.length >= 4 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid grid-cols-1 gap-8", gridColsClass)}>
      {cards.map((card, index) => {
        const isSolid = card.variant === "solid";
        return (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-5 p-8",
              isSolid
                ? "bg-primary text-primary-foreground shadow-[6px_6px_0_0_#ccc]"
                : "bg-[#f1f4ff] text-foreground shadow-[6px_6px_0_0_#4467f6]"
            )}
          >
            <span className="font-display text-[32px] leading-[32px] font-medium">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-4">
              {card.title ? (
                <>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <hr className={cn("border-t", isSolid ? "border-white/30" : "border-primary/20")} />
                </>
              ) : null}
              <p className="text-base">{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
