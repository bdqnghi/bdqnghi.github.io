# bdqnghi.github.io

Personal academic website for Dr. Nghi D. Q. Bui, deployed to GitHub Pages.

## Architecture

This repo contains **both the React source and the compiled output** in the same directory:

- `src/` — React + TypeScript source (Vite + Tailwind + shadcn/ui)
- `assets/` — compiled JS/CSS (what GitHub Pages serves)
- `index.html` — production entry (references compiled assets)
- `404.html` — SPA redirect shim for GitHub Pages routing
- `package.json`, `vite.config.ts`, etc. — build tooling

## GitHub Pages setup

- Branch: `master`, path: `/` (root)
- Build type: **legacy Jekyll** (confirmed via `gh api repos/bdqnghi/bdqnghi.github.io/pages`)
- No `_config.yml` — Jekyll runs with defaults
- No `.nojekyll` — if files stop getting served, add one

## Build + deploy workflow

```bash
npm install
npm run build                                       # outputs to dist/
rm -f assets/index-*.js assets/index-*.css          # remove old hashed bundles
cp dist/assets/index-*.js dist/assets/index-*.css assets/
cp dist/index.html index.html
git add -A && git commit -m "…" && git push
```

The root `index.html` is both the Vite entry (references `/src/main.tsx`) and the deployed file (references `/assets/index-<hash>.js` after build). Vite transforms the script tag during build.

## SPA routing

React Router uses `BrowserRouter`, so direct URL access to `/publications`, `/students`, etc. would 404 on GitHub Pages. Fixed via the rafgraph `spa-github-pages` pattern:

1. `404.html` redirects `/foo` → `/?/foo`
2. Inline script in `index.html` head restores the path via `history.replaceState`
3. React Router picks it up

**Do not remove the inline script at the top of `index.html` `<head>`** — it's what makes refresh work.

## Editing content

- **Bio / Research Focus / Notable Works / Media Coverage**: `src/pages/Index.tsx`
- **Publications list**: `src/data/publications.ts`
- **Students**: `src/data/students.ts`, page in `src/pages/Students.tsx`
- **Sidebar** (profile, nav, open-source repos, contact): `src/components/AppSidebar.tsx`
  - GitHub stars are fetched live from the GitHub API with static fallbacks
- **Layout** (desktop sidebar + tweet panel grid): `src/components/Layout.tsx`
- **X.com tweet panel** (Community Highlights): `src/components/XTweetPanel.tsx`
  - Tweet IDs are hardcoded in the `TWEET_IDS` array

## Styling

- Claude.ai-inspired warm cream palette
- Fonts: DM Sans (body), Source Serif 4 (headings), JetBrains Mono
- Tailwind + custom CSS in `src/index.css`
- CSS variables in `:root` (`--background`, `--accent`, `--space-*`, etc.)

## Git commits

When committing, always rebuild first (`npm run build` + copy to root) so the deployed assets match the source.
