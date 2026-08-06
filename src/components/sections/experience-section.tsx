import type { ExperienceItem } from "@/content/pillar-pages";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.name} className="flex flex-col gap-3 px-0 py-6 sm:px-8 sm:py-0 first:sm:pl-0">
          <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
          <p className="text-base text-foreground">{item.description}</p>
          {item.metric ? <p className="text-base font-bold text-primary">{item.metric}</p> : null}
        </div>
      ))}
    </div>
  );
}
