# Andre Perez portfolio site

Rulebook: `brand/BRAND-GUIDELINES.md` (V4). Read it before changing anything visual or any copy.
Do not move or rename anything in `brand/`. Copy what the site needs into `public/`.

## Commands

Run from this folder (`andre-perez-site/`), Node 22.

- `npm install` once
- `npm run dev` local site with live reload
- `npm run build` typecheck and production build into `dist/`
- `npm run lint`
- `npm run preview` serve the built `dist/` locally

## Stack, and why

- **Vite + React + TypeScript**: fast static build, deploys to any static host. TypeScript checks the content files, so a missing field fails the build instead of breaking a page.
- **Tailwind CSS v4**: brand tokens live in one place (`src/styles/index.css`, `@theme`). The default palette is removed, so only the five brand colors exist.
- **React Router**: page routes, including `/work/:slug` case studies.
- **Not used, on purpose**: Lucide (brand icons need one Cobalt accent stroke, so they're hand-drawn in `src/components/icons/`), Framer Motion (the only motion is a one-time hero entrance, done in CSS).

## Structure

```
public/            fonts (WOFF2 + OFL), logos, favicon, resume PDF, robots.txt
src/content/       ALL copy and facts: site.ts, home.ts, projects.ts, types.ts
src/components/    layout/ (header, footer), home/ (sections), work/ (project card), ui/, icons/
src/pages/         one file per route
src/styles/        index.css (tokens, base styles, motion)
```

## Content model

- `site.ts`: name, tagline, descriptor, title, employer, email, LinkedIn, resume path, domain.
- `home.ts`: hero intro, mission steps, scope stats, capability pillars, about preview, contact CTA.
- `projects.ts`: `Project` objects (see `types.ts`). Card order follows brand guide section 12: label, title, problem, my part, evidence.
- Anything unconfirmed is `{ needsInput: '...' }` and renders as a lilac "Needs input" tag. Search for `needsInput` and `TODO(andre)` to find every open item.

## Web decisions (proposed, awaiting Andre's approval)

| Brand guide item | Decision |
|---|---|
| 1. Dark mode | None. Light site with Night sections. `color-scheme: light`. |
| 2. Status colors | Not needed yet (no forms). |
| 3. KPI display | Big Citron numeral on Night, a rule, label and one context line. Section states these are scope, not results. |
| 4. Motif | Once per page. Home: Citron bars, Lilac dot, on Cobalt (as in the kit templates). Animates once on load. |
| 5. Motion | One-time hero entrance (text rise, motif bars step up, dot arrives). Hover nudges on arrows. All off under reduced motion. No scroll fade-ins. |
| 6. White surface | Not used. Five colors only. |
| 7. Label tracking | 0.1em (V4 guide wins over `styles.css`'s 0.06em). |
| 8. Descriptor | Kit version: "Business operations / Digital commerce / Practical technology". |
| Hero size | Tagline is larger than the kit's 64px H1 (up to about 136px), sized by container width: 3 lines under 1024px, 2 above. Never more than 3. |
| Focus ring | 3px Cobalt on light surfaces, Bone on Night and Cobalt (`.surface-dark`, `.surface-cobalt`). |
| Callout | Night on Citron used once on the homepage ("Learning now"). |

## Open questions for Andre

- Job title: brief says "Ecommerce Marketing Manager", resume PDF says "eCom Manager". Site currently shows the brief's.
- Resume PDF in `public/` includes a phone number. OK to publish?
- Bilingual EN/ES: the guide says to show it, but nothing else confirms it. Not shown yet.
- Project status, "My part", visuals for all projects. Star Therapy: everything.
- Portrait. Domain name. Motif dot color.

## Phases

1. Discovery and plan. Done.
2. Homepage. Done, in review.
3. Work index with filters (only if 4+ projects justify it), case study template, About, Contact.
4. Refinement: OG image (1200x630) per page, sitemap, prerendered HTML per route so link previews and crawlers get real titles, SPA fallback for the chosen host.
5. QA: build, lint, axe, screenshots at 375, 768, 1280, 1600.
