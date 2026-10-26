# Portfolio 3.0

Personal portfolio built with React, TypeScript and Vite, featuring software projects, research, skills and professional experience. Includes responsive dark/light themes and detailed project case studies.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Deploy on Vercel as a Vite application. The build command is `npm run build`, and the output directory is `dist`. The included `vercel.json` supports direct navigation to client-side routes.

## Project structure

- `src/data/content.ts` — profile, experience, projects and links.
- `src/pages/` — homepage, project pages and research page.
- `src/components/` — shared UI components.
- `src/styles.css` — site styling and theme variations.
- `public/images/` — WebP image assets (plus a gameplay GIF).
- `public/documents/Jensen_Jose_Resume.pdf` — PDF available via the Resume link.

Contact uses `mailto:` to launch the visitor's email application.
