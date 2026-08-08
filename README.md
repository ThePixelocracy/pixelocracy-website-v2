# Pixelocracy Website v2

The new official Pixelocracy website — an AI-first rebuild replacing the previous WordPress site. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/Base UI.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the homepage by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build (also runs type-checking and linting) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

### Environment variables

Copy `.env.example` to `.env.local` and fill in the values you need. Only the `/contact` form requires any of them (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optionally `CONTACT_FROM_EMAIL`) — without them the form still validates submissions but reports that email delivery isn't configured, rather than pretending to send anything.

## Deployment

This is a standard Next.js app, so Vercel is the natural hosting target. The repository does not contain a CI/CD workflow or `vercel.json`, so it cannot confirm on its own whether a live deployment or auto-deploy pipeline is currently connected — check with whoever owns hosting before assuming the site auto-deploys from this repository.

## Website Operating System

This repository is built to be operated by a human team working alongside a repository-connected AI assistant such as Claude — not just read by one. The AI assistant audits the real implementation before changing anything, works only from verified content, reuses the shared V4 design system, and stops for human approval before anything is committed, pushed, or published.

**Capabilities overview:**

- **Available now** — auditing routes/content/assets, building new pages and case studies within the existing V4 system, updating copy and content, running type-checks/lint/builds, preparing Git checkpoints for approval.
- **Planned** — the Insights article schema and template already exist; other content-registry automation (auto-linking related content, a campaign/landing-page template, broken-link auditing) is designed for but not yet built.
- **Requires an external integration** — real contact-form email delivery, image generation, analytics, scheduled/CMS publishing, automated deployment, localisation, and any CRM/newsletter/social integration. None of these exist in the repository today; see the full manual for exactly what each would require.

Read the full rules, QA tiers, Git discipline, and content workflows in **[`docs/WEBSITE_OPERATING_SYSTEM.md`](docs/WEBSITE_OPERATING_SYSTEM.md)**.

## Technology Stack

Next.js, React, TypeScript, Tailwind CSS, and Framer Motion form the core of the site, with shadcn/Base UI as the shared component foundation. Claude is not part of this runtime stack — it's a development and operating layer that works on top of the repository; the website itself runs independently of any AI service.

See **[`docs/TECHNOLOGY_STACK.md`](docs/TECHNOLOGY_STACK.md)** for a plain-language explanation of each technology and why it's used.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel deployment guide for Next.js](https://nextjs.org/docs/app/building-your-application/deploying)
