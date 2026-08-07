# CLAUDE.md

This document is the operating manual for every AI agent working on the Pixelocracy website.

## Working Principles

- Think before acting.
- Read before writing.
- Reuse before creating.
- Verify before assuming.
- Consistency beats originality.
- Approved knowledge always overrides assumptions.
- Approved designs always override personal preferences.
- Every generated page should feel like part of the same website.
- Every generated component should be reusable.
- Explain important implementation decisions when appropriate.

## Required Order of Operations

Before writing any content, designing any UI, or generating any code, always follow this order:

1. Read CLAUDE.md.
2. Read all relevant files under `/knowledge`.
3. Review the approved reference designs under `/design`.
4. Reuse existing design patterns before creating new ones.
5. Reuse existing content structure before inventing new sections.
6. Maintain consistency with the approved Pixelocracy positioning.
7. Never redesign an approved component unless explicitly requested.
8. Never invent company information.
9. Never invent services, proof points or statistics.
10. When uncertain, stop and ask.

## Decision Process

This workflow must be followed for every task:

1. Understand the request.
2. Identify which knowledge files are relevant.
3. Review the approved design references.
4. Reuse existing components whenever possible.
5. Prefer extending existing patterns over creating new ones.
6. Explain any assumptions made.
7. Generate the solution.

## Sources of Truth

The approved sources of truth are:

- `/knowledge`
- `/design`

Nothing outside these two locations overrides them. If a request conflicts with what is documented in `/knowledge` or shown in `/design`, the request should be questioned, not the source of truth.

## Design Documentation Priority

**V4 is approved and locked as the current visual, interaction, and motion direction for the whole site.** For anything touching visual design, typography, motion, responsive behaviour, or component architecture:

1. The canonical authority is: `knowledge/08_v4_design_system.md` — extracted directly from the approved, locked V4 implementation (`src/app/v4/` and `src/components/v4/`). Where code and this document disagree, the code is right; fix the document.
2. `knowledge/07_pixelocracy_implementation_spec.md` and `knowledge/05_design_system.md` are **legacy for visual/component decisions** — they describe the pre-V4 direction (wavy dividers, hard-shadow cards/buttons, rounded-mask photography, gradient CTA bands, a conventional top nav) and must not be used as visual reference for any new page. They remain valid for **content and information architecture** on pages not yet rebuilt in V4 (what sections exist, what order, what real copy was approved) — see `08_v4_design_system.md` §9 for the full breakdown of what's still usable versus deprecated per document.
3. `knowledge/06_figma_design_system.md` remains a supporting reference only, scoped the same way as `07` above: useful for historical raw measurements, superseded by `08` for any value the two disagree on.
4. `knowledge/01_company.md`, `02_service_pillars.md`, `03_tone_of_voice.md`, and `04_design_principles.md` are unaffected by the V3→V4 transition — they are content and philosophy documents, not visual specifications, and remain fully authoritative.
5. The `/design` reference screenshots are **information-architecture and content reference only** — they show what sections/pages exist and what narrative each case study follows, never the visual direction to replicate. The approved V4 implementation defines the visual, interaction, and motion language, not these screenshots.
6. If a document is silent or ambiguous on something a new page needs, stop and ask rather than improvising — and treat the gap as something to add to `08_v4_design_system.md` once resolved.

## Rules

- Do not use assumptions.
- Do not use generic agency language.
- Always optimize for consistency over creativity.

## Objective

The objective is not to build random pages. The objective is to extend the existing Pixelocracy website.
