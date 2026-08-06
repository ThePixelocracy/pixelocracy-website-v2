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

1. The canonical implementation authority is: `knowledge/07_pixelocracy_implementation_spec.md`
2. `knowledge/06_figma_design_system.md` is a supporting reference only.
3. If `knowledge/06_figma_design_system.md` conflicts with `knowledge/07_pixelocracy_implementation_spec.md`, always follow `knowledge/07_pixelocracy_implementation_spec.md`.
4. Do not combine conflicting values from both documents.
5. Use `knowledge/06_figma_design_system.md` only when the relevant value is not covered in `knowledge/07_pixelocracy_implementation_spec.md`.
6. If both documents are silent or ambiguous, stop and ask before implementing.

## Rules

- Do not use assumptions.
- Do not use generic agency language.
- Always optimize for consistency over creativity.

## Objective

The objective is not to build random pages. The objective is to extend the existing Pixelocracy website.
