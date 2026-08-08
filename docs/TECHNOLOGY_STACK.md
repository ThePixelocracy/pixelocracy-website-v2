# Pixelocracy Website — Technology Stack & Why We Use It

This document explains the main technologies behind the Pixelocracy website in simple, non-technical language. It is verified against `package.json` — every entry below is a real, currently-installed dependency, not an aspiration.

The goal of the stack is not to use technology for its own sake. Each tool has a clear role: keep the website fast, consistent, maintainable, accessible, and easy to evolve — including through a repository-connected AI assistant such as Claude.

## Technology Stack

| Technology | What it does, in simple terms | Why we use it |
| --- | --- | --- |
| **Next.js 15** | The main engine of the website. It handles pages, routes, loading, and how the site is delivered to visitors. | It helps keep the site fast, well organised, cacheable, and SEO-friendly. Most pages can be generated as static pages when they do not need dynamic server functionality. |
| **React 19** | The system used to build the individual pieces of each page. | It lets us create reusable components such as headers, buttons, cards, forms, and content sections instead of rebuilding them for every page. |
| **TypeScript** | A safety layer on top of JavaScript. | It catches many mistakes during development and during the build process. This is especially useful when humans and AI assistants are both working on the codebase. |
| **Tailwind CSS v4** | Controls the visual styling of the website: colours, spacing, sizing, responsive behaviour, and layout. | It helps keep the design system consistent across the entire website. Shared design tokens live centrally rather than being recreated differently on every page. |
| **tw-animate-css** | A small companion library that adds ready-made animation utilities on top of Tailwind. | It gives the design system a consistent set of simple, reusable motion utilities rather than one-off CSS animations scattered across components. |
| **Framer Motion** | The website's animation and motion system. | It powers scroll reveals, kinetic text, timeline effects, and other V4 interactions in a consistent way. It also supports reduced-motion accessibility behaviour. |
| **shadcn (CLI) + Base UI** | shadcn is a tool for adding reusable interface elements (like buttons and menus) directly into our own codebase; Base UI is the underlying, unstyled component library those elements are built on. | It gives us flexible UI building blocks that we own and can fully adapt to the Pixelocracy design, instead of depending on a rigid, pre-styled component package. |
| **class-variance-authority (CVA)** | Helps manage different versions of the same component. | For example, a button can have primary, secondary, small, or large variants without duplicating component code. |
| **clsx + tailwind-merge** | Small utilities that keep styling classes clean and prevent conflicts. | They make reusable components easier and safer to maintain as the website grows. |
| **Lucide React** | A library of interface icons. | It provides a consistent icon system without creating every common UI icon from scratch. |
| **ESLint 9 + eslint-config-next** | An automated code-quality checker. | It identifies common errors, unsafe patterns, and Next.js-specific issues before they reach the live website. |

## How the Pieces Work Together

In simple terms:

1. **Next.js + React** build and deliver the website.
2. **TypeScript** helps protect the code from mistakes.
3. **Tailwind CSS + tw-animate-css** keep the visual design and its motion utilities consistent.
4. **Framer Motion** manages richer animation and interaction.
5. **shadcn + Base UI** provide reusable interface building blocks.
6. **CVA, clsx, and tailwind-merge** keep component variants and styling organised.
7. **Lucide React** provides consistent icons.
8. **ESLint** checks the code for problems.

Together, these technologies form one system rather than a collection of unrelated tools.

## Why This Matters for the Pixelocracy Website

The overall approach is designed around four principles:

- **Fast by default** — pages should be static and cacheable wherever possible.
- **Safe to change** — TypeScript and automated checks catch many issues before release.
- **Consistent by design** — shared tokens, components, variants, and motion patterns reduce one-off implementations.
- **Easy to extend** — a new page or case study can reuse existing systems instead of reinventing the website each time.

## Where Claude Fits In

Claude is not part of the website's runtime technology stack. It acts as an **AI-assisted operating layer** when connected to the repository. The website runs entirely on Next.js, React, and the technologies listed above — it does not call out to Claude, or to any AI service, to serve a single page to a visitor. Removing Claude from the picture entirely would not change how the live site behaves.

Because the repository contains the website structure, components, content models, design rules, and development instructions, a repository-connected Claude can understand how the site is built and work within those existing systems.

This can allow Claude to assist with tasks such as:

- creating new pages using existing components and design rules;
- adding or updating case studies and articles;
- updating content, links, metadata, and navigation;
- reusing the correct design tokens and motion patterns;
- identifying missing assets and using clearly labelled placeholders;
- checking TypeScript, linting, routes, and builds when appropriate;
- reviewing changes before an approved commit or deployment.

The important distinction is that **Claude does not replace the technology stack, and the website does not depend on it to function**. Claude operates on top of the stack, as a development and operating aid — the same way a human developer works on top of it without becoming part of what ships to visitors. The stronger and more clearly documented the underlying system is, the more reliably an AI assistant can help maintain and evolve the website.

See `docs/WEBSITE_OPERATING_SYSTEM.md` for the full operating rules that govern how Claude (or any repository-connected AI assistant) is expected to work within this stack.

## Short Version

> **Next.js/React** build the site → **TypeScript** protects it → **Tailwind + tw-animate-css** keep the design and motion utilities consistent → **Framer Motion** handles richer movement → **shadcn/Base UI** provide reusable building blocks → **ESLint** checks the code → **Claude**, when connected to the repository, can help operate and evolve the whole system — without ever being part of what actually runs for a website visitor.
