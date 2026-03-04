# Copilot Instructions for atlaainc.github.io

## Repository Overview

This is the **Atlaa Inc** public website, hosted on **GitHub Pages** at `https://atlaainc.github.io`. It is a static website repository. At its current early stage the repo contains only a `README.md`; all website content will be added here over time.

- **Type:** Static website (GitHub Pages)
- **Hosting:** GitHub Pages — the `main` branch is automatically published to `https://atlaainc.github.io`
- **Default build engine:** GitHub Pages supports plain HTML/CSS/JS or Jekyll out of the box. No build tool is configured yet; add pages as plain HTML files or introduce Jekyll if templating is needed.

---

## Project Layout

```
atlaainc.github.io/
├── .github/
│   └── copilot-instructions.md   # This file
└── README.md                     # Brief repo description
```

New content should be added at the repo root or in clearly named subdirectories (e.g. `assets/`, `css/`, `js/`, `images/`). GitHub Pages serves `index.html` at the root as the homepage.

---

## Working with GitHub Pages

### Plain HTML (no build step)
1. Create or edit `.html`, `.css`, and `.js` files at the repo root (or subdirectories).
2. Commit and push to `main`; GitHub Pages deploys automatically within ~30 seconds.
3. No local build is required for plain HTML sites.

### Jekyll (if introduced)
If a `_config.yml` is present, GitHub Pages treats the site as a Jekyll project.
- **Bootstrap:** `gem install bundler jekyll` (requires Ruby ≥ 3.1)
- **Install deps:** `bundle install`
- **Serve locally:** `bundle exec jekyll serve --livereload` → http://localhost:4000
- **Build:** `bundle exec jekyll build` → outputs to `_site/`
- **Do not commit** the `_site/` directory; add it to `.gitignore`.

---

## Style & Quality Guidelines

- Use **semantic HTML5** elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`).
- Keep CSS in dedicated files under `css/` or `assets/css/`; avoid inline styles.
- JavaScript files belong in `js/` or `assets/js/`.
- Images and media belong in `images/` or `assets/images/`.
- All pages must be **accessible** (WCAG 2.1 AA): use `alt` text on images, proper heading hierarchy, and sufficient color contrast.
- Aim for **mobile-first** responsive design.
- Keep pages **fast**: optimize images, minimize render-blocking resources.

---

## CI / Continuous Integration

No CI workflows are configured yet. When adding workflows, place them in `.github/workflows/`. Common checks to consider:

- HTML validation (e.g. `html-validate` or W3C validator)
- Lighthouse CI for performance and accessibility scores
- Jekyll build check (if Jekyll is used)

---

## Key Facts for Agents

- The live site URL is `https://atlaainc.github.io`.
- Publishing happens automatically from the `main` branch — **do not** add a manual deploy step.
- There are currently no tests, linters, or build scripts; validate changes by reviewing HTML/CSS directly or running Jekyll locally.
- When creating the first `index.html`, make it professional, smooth, and visually polished — it is the public face of Atlaa Inc.
