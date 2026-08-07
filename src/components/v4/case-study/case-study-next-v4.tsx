import Link from "next/link";

type NextProject = {
  name: string;
  href: string;
};

type CaseStudyNextV4Props = {
  /** Only set once a next case study actually has a built route — never a slug without a page. */
  nextProject?: NextProject;
};

/**
 * Closing navigation — always a route back to the archive. `nextProject`
 * is optional and intentionally omitted for Cardom: no other individual
 * case-study route exists yet, and per the "never link to an unbuilt or
 * 404 page" rule, this renders a single honest link rather than a fake
 * prev/next pair. Once a second case study ships, pass `nextProject` and
 * the arrow-link treatment appears without any other change here.
 */
export function CaseStudyNextV4({ nextProject }: CaseStudyNextV4Props) {
  return (
    <section className="border-t border-border bg-background px-6 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/work"
          className="group font-cta inline-flex items-center gap-3 text-base font-medium text-foreground"
        >
          <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:-translate-x-1.5">
            ←
          </span>
          All case studies
        </Link>

        {nextProject && (
          <Link
            href={nextProject.href}
            className="group font-cta inline-flex items-center gap-3 text-base font-medium text-foreground"
          >
            Next — {nextProject.name}
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
