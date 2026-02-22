# React / shadcn Migration Wishlist

> Living log of features, components, and patterns we'd add if we migrate from static HTML to a React + shadcn + Tailwind stack. Each entry captures what we want, why it matters, and what's blocking it on the current stack.

**Current stack:** Static HTML/CSS/JS → Cloudflare Pages
**Proposed stack:** Next.js (or Astro) + React + shadcn/ui + Tailwind CSS → Cloudflare Pages
**Decision status:** Collecting evidence. No migration committed yet.

---

## Why We Started Static

1. **Speed to launch** — zero build tooling, instant deploy, no framework learning curve
2. **Performance** — sub-second loads, no JS hydration penalty, tiny payload
3. **Simplicity** — 8 HTML files, one CSS file, minimal JS
4. **Cost** — free Cloudflare Pages hosting, no server-side compute
5. **Governance score** — achieved 8.94/10 on static stack alone

## Why We'd Consider Migrating

1. **Code ceiling reached (~8.9)** — next gains require interactive content, not code polish
2. **Component duplication** — header, footer, CTA banners copy-pasted across 10 files
3. **Cache-busting is manual** — every CSS change requires updating query params in all HTML files
4. **No component reuse** — vanilla JS for every interactive element (carousels, animations)
5. **Content scaling** — adding articles means duplicating full HTML templates
6. **Design system enforcement** — tokens exist in CSS but nothing prevents drift at build time

---

## The Wishlist

### 1. Elegant Carousel — Services or Client Outcomes
- **Source:** [21st.dev/YadHakim/elegant-carousel](https://21st.dev/YadHakim/elegant-carousel/default)
- **What:** Editorial split-panel carousel with Ken Burns zoom, cross-fade transitions, auto-advancing progress indicators with labelled tabs, decorative frame corners, touch/swipe support
- **Use case A — Services:** 4 slides for M&A Advisory, Cash Flow Intelligence, AI & Finance Transformation, Fractional CFO. Each with a hero image and short pitch.
- **Use case B — Client Outcomes:** Case study showcase. "Coastal Brewing Co — $12M acquisition, 3-month prep" with narrative + image per slide.
- **Why it matters:** Directly addresses the trust signal gap (Level 3-4 on the Trust Ladder). A static service grid can't convey the same narrative depth.
- **Current stack blocker:** Would need 200-300 lines of hand-rolled vanilla JS to replicate. React version is ~1 component import.
- **Content dependency:** Need real client stories / case study photography before building.
- **Added:** 2026-02-21

---

### 2. Shared Layout Components
- **What:** Single-source header, footer, CTA banner, service cards as React components
- **Why it matters:** Currently copy-pasted across 10 HTML files. Every nav change = 10 file edits + 10 cache-bust updates. One source of truth eliminates drift.
- **Current stack blocker:** No templating. We tried canonical HTML patterns in the skill file but human error still creeps in.
- **Content dependency:** None — pure architecture improvement.
- **Added:** 2026-02-21

---

### 3. MDX Article System
- **What:** Write articles in MDX (Markdown + JSX), auto-generate pages with consistent layout, table of contents, author bio, related articles
- **Why it matters:** Adding a new article currently means duplicating a 500+ line HTML file and manually wiring breadcrumbs, schema, OG tags. MDX would reduce this to writing prose with frontmatter metadata.
- **Current stack blocker:** No build step, no templating engine.
- **Content dependency:** None — improves authoring velocity for future articles.
- **Added:** 2026-02-21

---

### 4. Interactive Data Visualisations
- **What:** Animated charts that respond to scroll position or user interaction — e.g., a waterfall chart that builds as you scroll, a comparison slider, an interactive ROI calculator
- **Why it matters:** The assumption engine pipeline already generates ECharts. Embedding interactive versions in articles/services pages would showcase the AI-powered positioning.
- **Current stack blocker:** ECharts works in vanilla JS but scroll-triggered animations, responsive resizing, and theme-aware rendering require significant custom code each time.
- **Content dependency:** Pipeline output templates exist. Need to decide which visualisations to surface publicly.
- **Added:** 2026-02-21

---

### 5. Dark/Light Theme with System Preference
- **What:** Proper React context-based theming with CSS variables, system preference detection, and no FOUC (flash of unstyled content)
- **Why it matters:** Current implementation works but relies on inline script in `<head>` to prevent flash. A React solution would be cleaner and more maintainable.
- **Current stack blocker:** Works fine today — this is a nice-to-have, not a blocker.
- **Content dependency:** None.
- **Added:** 2026-02-21

---

### 6. Contact Form with Server Actions
- **What:** Next.js server actions or Astro API routes for the contact form, with validation, rate limiting, and email delivery
- **Why it matters:** Current contact form depends on Cloudflare Functions + MailChannels which isn't activated yet. A framework solution would give us form validation, loading states, success/error handling out of the box.
- **Current stack blocker:** Cloudflare Functions works but requires manual env var setup and has no client-side validation beyond HTML5.
- **Content dependency:** None.
- **Added:** 2026-02-21

---

### 7. Animated Number Counters / Stats
- **What:** Intersection Observer-triggered animated counters for the trust bar and stats throughout the site (e.g., "3 M&A Deals", "$50M+", "20+ Years")
- **Why it matters:** We have `stat-counter` elements with `data-target` attributes but the animation is basic. A React component could handle easing, formatting (currency, percentages), and staggered reveals.
- **Current stack blocker:** Current vanilla JS implementation works but is brittle and doesn't handle all number formats.
- **Content dependency:** None.
- **Added:** 2026-02-21

---

### 8. Insights Journey Navigator (Adapted from Story Viewer)
- **Source inspiration:** [21st.dev/osiris-balonga/story-viewer](https://21st.dev/osiris-balonga/story-viewer/default)
- **What:** A horizontal scrollable row of circular topic nodes representing stages of a founder's financial journey. Each node links to the relevant article. Visual metaphor: "Where are you right now?" — not social stories, but a guided wayfinding path.
- **Nodes example:** "Cash Flow Blind Spot" → "Systems Migration" → "M&A Preparation" → "Due Diligence" → "Post-Deal Integration"
- **Borrowed from story-viewer:** Circular thumbnails with ring indicators, horizontal scroll with snap points, tap-to-explore interaction, progress indication (read/unread state per article)
- **Deliberately NOT borrowed:** Full-screen modal takeover, auto-advance timer, ephemeral/social aesthetic — these conflict with long-form evergreen content.
- **Use case:** Replace the flat article grid on the insights hub with a journey-first navigation that guides founders to the right article for their stage. The grid would remain below as a fallback/browse view.
- **Why it matters:** Current insights hub treats all articles equally. A journey navigator creates a narrative arc across the content library and helps founders self-select.
- **Current stack blocker:** Buildable in vanilla HTML/CSS (horizontal scroll + snap points + anchor links) but without framer-motion transitions or React state for read/unread tracking it would be a simpler version.
- **Content dependency:** Need enough articles to populate 4-6 journey stages. Currently have 4 articles — just enough for an MVP.
- **Added:** 2026-02-21

---

### 9. Page Transition Animations
- **What:** Smooth cross-fade or slide transitions between pages using Next.js layout animations or View Transitions API
- **Why it matters:** Currently every page navigation is a hard reload. Smooth transitions would elevate the premium feel significantly.
- **Current stack blocker:** Not possible with static HTML without a SPA framework.
- **Content dependency:** None.
- **Added:** 2026-02-21

---

## Migration Considerations

### Framework Choice
- **Next.js** — most mature, best for SEO (SSG/SSR), huge ecosystem, deploys to Cloudflare via @cloudflare/next-on-pages
- **Astro** — "islands architecture", ships zero JS by default, perfect for content sites, React components only where needed, native Cloudflare Pages support
- **Recommendation:** Astro is probably the better fit. Content-first, static by default (preserves our current performance), React only for interactive islands (carousel, charts, forms). No unnecessary JS hydration for static pages.

### What We'd Keep
- All design tokens (CSS custom properties) — transfer directly to Tailwind config
- Typography system (Cormorant Garamond + DM Sans)
- Colour palette and 3-tier token architecture
- All content, copy, and page structure
- Cloudflare Pages hosting
- Git-based deployment workflow

### What We'd Gain
- Component reuse (header, footer, CTA — write once)
- Build-time validation (TypeScript, lint, broken link checks)
- Automatic cache-busting (content hashing)
- MDX for articles
- shadcn/ui component library (buttons, forms, dialogs, carousels)
- Tailwind for utility-first styling with design token integration
- Image optimisation pipeline (next/image or astro:assets)

### Migration Effort Estimate
- **Phase 1 — Scaffold + core layout** (8-12 hours): Set up Astro/Next.js, migrate header/footer/nav to components, replicate all 8 pages
- **Phase 2 — Interactive components** (6-10 hours): Carousel, animated counters, scroll reveals, contact form
- **Phase 3 — Article system** (4-6 hours): MDX setup, article template, auto-generated TOC, related articles
- **Phase 4 — Polish + deploy** (4-6 hours): Performance audit, Lighthouse testing, Cloudflare Pages config, domain cutover
- **Total: ~22-34 hours**

---

## Decision Criteria

Don't migrate until at least 2 of these are true:
1. [ ] First paying client signed (proves the business model before investing in tooling)
2. [ ] 3+ articles planned (justifies the MDX authoring system)
3. [ ] Real client outcomes / case studies available (justifies the carousel and trust signals)
4. [ ] Contact form needs to go live with validation (justifies server-side framework)
5. [ ] Tim wants to add interactive elements that are painful in vanilla JS

---

*Last updated: 2026-02-21*
