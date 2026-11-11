# Thanate Janyaswasdi — Portfolio

Bilingual (English / Thai) content & digital marketing portfolio, built with Next.js 14 (pages router, static export) and Tailwind CSS.

Live: https://mugenboat.github.io/portfolio/

## Editing content

All text (both languages), skills, tools and links live in `lib/content.ts`.
Portfolio images are in `assets/work/`; the profile photo is `public/profile.jpg`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000/portfolio
npm run build   # static site in ./out
```

Pushing to `master` deploys to GitHub Pages via `.github/workflows/nextjs.yml`.
