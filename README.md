# Gregory Ramírez Fuentes — Portfolio

Personal portfolio built with React + TypeScript + Vite, styled with a neumorphic ("soft UI") design system.

## Sections

- **Home** — intro, photo, and links.
- **Projects** — 4 featured projects, each with a details popup.
- **Contact** — contact methods and current work.

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

## Adding your photo

Replace the placeholder icon in `src/components/Hero.tsx`:

1. Drop your photo at `src/assets/avatar.jpg` (or `.png`).
2. In `Hero.tsx`, import it: `import avatar from '../assets/avatar.jpg'`.
3. Swap the `<UserIcon />` placeholder for `<img src={avatar} alt="Gregory Ramírez Fuentes" className="hero__photo-img" />`.

## Neumorphism resources used as reference

- [design.dev Neumorphism CSS Generator](https://design.dev/tools/neumorphism/)
- [Super Designer Neumorphism Generator](https://superdesigner.co/tools/neumorphism)
- [Poper.ai Neumorphism UI Generator](https://www.poper.ai/tools/neumorphism-ui-generator/)
