import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { CaseStudySummary } from "@/content/case-studies";

const headerBgClass: Record<CaseStudySummary["headerBg"], string> = {
  navy: "bg-navy",
  black: "bg-black",
  red: "bg-[#d0233b]",
};

export function CaseStudyCard({ slug, title, description, image, headerBg }: CaseStudySummary) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group flex w-full max-w-[400px] flex-col overflow-hidden bg-lavender shadow-[6px_6px_0_0_#4467f6] transition-transform hover:-translate-y-0.5"
    >
      <div className={cn("relative h-[170px] w-full overflow-hidden", headerBgClass[headerBg])}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="400px"
          className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 px-8 py-8">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-base text-foreground">{description}</p>
      </div>
    </Link>
  );
}
