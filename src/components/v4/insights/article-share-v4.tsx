"use client";

import { useEffect, useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

// lucide-react has no LinkedIn brand-logo icon (it excludes trademarked
// logos) — a minimal hand-authored glyph, not a new icon-library dependency.
function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98h.04c1.64 0 2.98-1.34 2.98-2.98S6.66 3.5 5.02 3.5h-.04zM2.4 21.5h5.16V8.98H2.4V21.5zM9.34 8.98v12.52h5.16v-6.98c0-1.87 1.4-2.05 1.82-2.05s1.68.18 1.68 2.05v6.98h5.14v-7.7c0-4.6-3.02-5.36-4.5-5.36-1.48 0-2.9.58-3.5 1.72V8.98H9.34z" />
    </svg>
  );
}

/**
 * Real, working share actions — a LinkedIn share-intent link (opens
 * LinkedIn's own share dialog for the current page) and a copy-link
 * button using the Clipboard API. No follower counts, no fake share
 * totals — just the two actions the legacy design specifies. The
 * LinkedIn href is resolved after mount (not during SSR, where
 * `window` doesn't exist) to avoid a hydration mismatch — it starts as
 * "#" and is replaced once the real URL is known, same pattern as this
 * codebase's `mounted` guard for `useReducedMotion`.
 */
export function ArticleShareV4({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [linkedInHref, setLinkedInHref] = useState("#");

  useEffect(() => {
    setLinkedInHref(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share "${title}" on LinkedIn`}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90"
      >
        <LinkedInGlyph />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy article link"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90"
      >
        {copied ? <Check className="h-4 w-4" strokeWidth={1.75} /> : <LinkIcon className="h-4 w-4" strokeWidth={1.75} />}
      </button>
    </div>
  );
}
