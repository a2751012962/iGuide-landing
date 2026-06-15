# iGuide SEO Guide

How SEO is implemented in this repo, plus the off-page playbook for getting iGuide
discovered. Canonical domain: **https://iguide.chat**.

## What's implemented (on-page / technical)

- **Static prerendering (SSG)** via `vite-react-ssg`. `npm run build` renders every route to
  a real HTML file (e.g. `dist/en/about/index.html`) so crawlers get full content + meta on
  the first crawl — no waiting for client-side JS rendering.
- **Per-language URLs**: every page exists at `/en/...` and `/zh/...`. Language is part of the
  URL (not in-page state), so each language version is separately indexable. The navbar
  language toggle navigates between the two URLs (`src/components/useLanguageSwitch.ts`).
- **`hreflang`**: each page emits reciprocal, self-referential `en` / `zh-Hans` / `x-default`
  alternates (`src/components/Seo.tsx`), mirrored in `public/sitemap.xml`.
- **Per-page metadata** via the SSR-safe `<Seo>` component (react-helmet-async through
  vite-react-ssg's `Head`): title, description, canonical, Open Graph, Twitter, `<html lang>`.
- **Structured data (JSON-LD)**: `Organization`, `WebSite`, `WebApplication` (site-wide, in
  `index.html`) + `BreadcrumbList` per page. Deliberately **not** using `FAQPage` (Google is
  retiring FAQ rich results) or `EducationalOrganization`/`affiliation: UIUC` (misleading for an
  unofficial project — spam risk). If dorm reviews move onto this domain, model dorms as
  `Product`-style items with genuine first-party `AggregateRating` only.
- **Sitemap & robots**: `public/sitemap.xml` (all per-language URLs + alternates),
  `public/robots.txt` (references the sitemap).
- **Redirects**: `public/_redirects` sends `/`, `/en`, `/zh`, and legacy unprefixed paths to the
  right per-language page at the edge. Redirect fallback pages are `noindex`.
- **Performance**: `LazyMotion` for the `motion` library, `prefers-reduced-motion` CSS, single
  SVG favicon. Future win: route-level lazy loading (kept eager for now to pass `lang` as a prop).

## Off-page / discoverability playbook

Foundation:
- Verify the site in **Google Search Console** and **Bing Webmaster Tools**; submit the sitemap.
- Enable **IndexNow** in Bing for near-instant (re)indexing (Bing's index also feeds ChatGPT Search).
- Use URL Inspection to request indexing of key pages; monitor the Coverage + Core Web Vitals reports.

Content / keywords:
- Target high-intent long-tail queries: e.g. "ISR vs PAR UIUC", "best UIUC dorms", "Ikenberry dorm
  review", "UIUC international student housing". Optionally validate volume/difficulty with the
  Semrush MCP before writing.
- When the Dorm Viewer moves onto this domain, give **each dorm its own prerendered, indexable
  page** (unique title/description/canonical) rather than a JS-only view.

E-E-A-T (trust — the gate for an unofficial project vs. `uiuc.edu`):
- Author bios (names, major, grad year), original photos/data, transparent data methodology, and a
  prominent non-affiliation disclaimer (already present in the Terms + About pages).

Community (where students actually are):
- Authentic participation in r/UIUC; partnerships with CSSA and student orgs; **WeChat** and
  **Xiaohongshu (RED)** for Chinese students already on campus (nofollow but high reach/referral).
- Baidu is **not** worth targeting for students already in the US.

## Maintenance notes

- Adding a page: create the component (accepting a `lang: 'zh' | 'en'` prop), register an `/en/...`
  and a `/zh/...` route in `src/App.tsx`, add a `<Seo>` with the unprefixed `path`, and add both
  URLs (with alternates) to `public/sitemap.xml`.
- Keep all internal `<Link>`s language-prefixed (``to={`/${lang}/...`}``) so navigation preserves
  the current language.
- `react-router-dom` is pinned to **v6** because `vite-react-ssg` requires the v6 server entry.
