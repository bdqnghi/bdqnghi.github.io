# bdqnghi.github.io

Personal academic website for Dr. Nghi D. Q. Bui, built with React, TypeScript,
Vite, Tailwind CSS, and shadcn/ui.

## Source of truth

This repository now contains the complete application source. Make changes in
the following locations:

- `src/` contains React pages, components, styles, hooks, and data.
- `public/` contains static files such as the profile image, favicons, and
  `robots.txt`.
- `index.html` is the Vite source entry and contains page metadata.
- `package.json` and `vite.config.ts` define the development and build setup.

Do not edit files in `dist/` or minified files in `assets/`. They are generated
build output and are not the source of the website.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal and reloads the page when a source
file changes.

## Validation

Run the source checks before publishing:

```bash
npm run build
npx eslint src
npm run preview
```

`npm run build` creates a clean production site in `dist/`. Always verify the
contents of `dist/` rather than editing its generated JavaScript directly.

## GitHub Pages deployment

GitHub Pages should publish the generated `dist/` directory through a build
workflow. The source `index.html` must remain a Vite entry that loads
`/src/main.tsx`; copying `dist/index.html` back over it makes local source work
confusing and leads to accidental edits of compiled code.

The repository still contains legacy root-level deployment assets from the old
branch-based Pages setup. They can be removed after Pages is switched to a
workflow that builds the project and uploads `dist/`.

## Current customizations

- Responsive academic profile layout with background and publications pages.
- Live GitHub repository star counts with static fallbacks.
- Privacy-conscious embedded X posts.
- Flag Counter geographic visitor map.
- Custom neural-orbit favicon inspired by iterative AI learning systems.
- Research Focus narrative maintained in `src/pages/Index.tsx`.
