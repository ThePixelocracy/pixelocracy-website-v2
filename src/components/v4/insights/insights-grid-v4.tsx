import { insights } from "@/content/insights";
import { InsightCardV4 } from "@/components/v4/insights/insight-card-v4";

/**
 * The archive grid — a featured first card (when one exists) beside a
 * standard three-column grid for the rest, the same "impact drives size"
 * convention used elsewhere in V4. Renders a clean, intentional empty
 * state instead of a bare blank section when no articles are published
 * yet — an honest state, not a placeholder to be mistaken for a bug.
 */
export function InsightsGridV4() {
  if (insights.length === 0) {
    return (
      <section className="bg-background px-6 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-6xl border-t border-border pt-16">
          <p className="max-w-md text-base text-muted-foreground">
            The first Insight is in progress. Check back soon.
          </p>
        </div>
      </section>
    );
  }

  const [featured, ...rest] = insights;

  return (
    <section className="bg-background px-6 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 border-t border-border pt-16">
        <InsightCardV4 insight={featured} featured />
        {rest.length > 0 && (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((insight) => (
              <InsightCardV4 key={insight.slug} insight={insight} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
