# Sebastian Chacon — Portfolio

Personal portfolio of Sebastian Chacon, full stack developer based in New Jersey.

**Live:** [mchacon.vercel.app](https://mchacon.vercel.app)

## What's inside

- **Projects** — Ganafy (multi-tenant SaaS loyalty platform), Inmuebles Latam, ZonaTech Latam and HazMiWeb, with highlights and links to the live sites and code.
- **Case study** — how Ganafy is built, from the Svelte dashboard to Supabase, Row Level Security and Apple/Google Wallet passes.
- **Experience, stack, about and contact** sections, plus a downloadable CV.

## Stack

- React 18 + TypeScript
- Vite 6 (SWC)
- Tailwind CSS 3 — light and dark themes (`class` strategy), "liquid glass" surfaces defined in `src/index.css`
- Geist / Geist Mono fonts

## Run locally

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # type-check and build to dist/
npm run lint     # ESLint
npm run preview  # serve the production build
```

## Project structure

```
src/
  components/   page sections (Nav, Hero, Projects, Experience, Stack, About, Contact, Footer)
  hooks/        useScrollReveal — fades sections in on scroll
  assets/       project screenshots (webp) and SVG icons
public/         CV (PDF), favicon and Open Graph image
cv/             build_cv.py — generates the Harvard-style CV PDF (python cv/build_cv.py public/Sebastian-Chacon_CV.pdf)
```

Content (projects, experience, skills) lives as typed arrays at the top of each section component.
