# Gregory Ramírez Fuentes | Portfolio

Personal portfolio built with React + TypeScript + Vite, styled with a neumorphic ("soft UI") design system.

## Pages

Hash-routed (`#/experience`), so deep links survive a refresh on GitHub Pages.

- **Home** (`#/`): intro, "Currently" strip, about, education, and a card for each page. Contact links live in the footer on every page.
- **Experience** (`#/experience`): research and engineering roles.
- **Projects** (`#/projects`): hackathon builds and side projects.
- **Leadership** (`#/leadership`): SHPE at USF, FIRST Global, Copa Ka'i, IBM Z.
- **Skills** (`#/skills`): skill groups linked to where each one was used, plus certifications and badges.
- **Volunteering** (`#/volunteering`): community and outreach events. Hidden from the navbar until an entry is published.

Content lives in `src/data/`. Set `draft: true` on an entry to keep it off the site.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploys automatically to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

## Neumorphism resources used as reference

- [design.dev Neumorphism CSS Generator](https://design.dev/tools/neumorphism/)
- [Super Designer Neumorphism Generator](https://superdesigner.co/tools/neumorphism)
- [Poper.ai Neumorphism UI Generator](https://www.poper.ai/tools/neumorphism-ui-generator/)
