# Skill Changelog

Track every evolution of the web design system skill files. Each entry records what changed, why, and which reflection triggered it.

---

## v1.7.0 — 2026-02-13
### Full Token Migration — 779 Hardcoded Values Replaced
- **Migrated**: 278 legacy `--brand-*` references → semantic `--color-*` tokens (--brand-gold→--color-action-primary, --brand-charcoal→--color-text-primary, etc.)
- **Migrated**: 151 hardcoded font-size values → `var(--font-size-*)` tokens (100% coverage)
- **Migrated**: 296 hardcoded spacing values → `var(--space-*)` tokens (100% coverage)
- **Migrated**: 54 hardcoded border-radius values → `var(--radius-*)` tokens (100% coverage)
- **Removed**: 7 legacy `--brand-*` alias definitions from :root and both dark mode blocks
- **Fixed**: theme-toggle.css `var(--brand-gold)` → `var(--color-action-primary)`
- **Result**: Token governance coverage: font-size 100%, spacing 100%, border-radius 100%, colours 100% semantic. Zero legacy token references remain.
- **Trigger**: Audit v2 scored token governance 3.9/10 — deep research showed the gap was migration, not architecture
- **Files**: main.css (1252 lines changed), theme-toggle.css, audit report v2 added

## v1.6.0 — 2026-02-13
### Token Governance Overhaul — Bottom-Up Implementation
- **Fixed**: 70% of :root tokens (79 of 113) were dead code — never referenced in component CSS (Critical — REF-010)
- **Fixed**: 130 inline `style=` attributes bypassed the token system — reduced to 94 across 8 pages (Critical — REF-010)
- **Fixed**: 19 hardcoded HEX values in component CSS — reduced to 0 (Major — REF-010)
- **Fixed**: index.html CTA buttons still used `.btn .btn-primary` — changed to `.cta-btn-primary`/`.cta-btn-ghost`
- **Fixed**: 4 hardcoded `#FAFAFA` in dark mode btn-outline → `var(--color-text-inverse)`
- **Added**: 8 new token categories to :root — `--font-size-*` (8 sizes), `--letter-spacing-*` (4), `--color-success-*`/`--color-error-*` (6 feedback states), `--color-category-*` (4 article categories), `--duration-*` (4 animation durations), `--radius-xs`
- **Added**: 25+ utility CSS classes in new section "1b. UTILITY CLASSES" — `.footer-list`, `.label-uppercase`, `.required-indicator`, `.pricing-amount`, `.section-title-centered`, `.trust-badge-text`, `.hero-gradient`, `.cta-buttons`, `.sr-only`, and more
- **Changed**: Spacing tokens renamed — `--space-xs` → `--space-2xs`, `--space-sm` → `--space-xs`, new `--space-sm: 0.75rem` inserted
- **Stripped**: 32 inline styles from 8 HTML pages (footer lists, section headings, form titles, required indicators, trust badges, pricing amounts, service titles, labels)
- **Replaced**: 14 hardcoded HEX in component CSS with token references (`--color-error`, `--color-category-growth`, `--color-success-bg`, etc.)
- **Added**: Token Governance Checklist to SKILL.md with grep-based verifiable assertions (4 subsections, 15 checks)
- **Added**: REF-010 to memory/reflections.md (Critical — token system dead code)
- **Added**: Pattern P-005 "Tokens Without Consumers Are Dead Code"
- **Moved**: design-tokens.html, skills-dashboard.html, self-adjustment-dashboard.html → `tools/` directory
- **Trigger**: Third DFRUVL cycle — deep root cause analysis of token governance score (6.8/10)
- **Files**: main.css, index.html, about.html, services.html, contact.html, insights/index.html, insights/ma-readiness-checklist/index.html, privacy.html, terms.html, SKILL.md, memory/reflections.md
- **Remaining**: services.html (31 inline styles), insights/index.html (43 inline styles), 79 dead tokens to prune

## v1.5.0 — 2026-02-13
### CTA Banner Standardisation
- **Fixed**: 3 different CTA banner HTML patterns → 1 canonical pattern (Major — REF-009)
- **Changed**: about.html CTA banner — replaced `.cta-content` + `.cta-button` + inline styles with canonical `.cta-banner-content` + `.cta-btn-primary` + `.cta-btn-ghost`
- **Changed**: services.html CTA banner — replaced entirely inline-styled section with canonical `.cta-banner` structure
- **Changed**: insights/index.html CTA banner — replaced Tailwind + inline gradient with canonical `.cta-banner` structure
- **Added**: Canonical CTA banner HTML template to SKILL.md Cross-Page Consistency Checklist (11 checks)
- **Added**: REF-009 to memory/reflections.md
- **Updated**: Pattern P-001 now includes CTA banners (third shared component standardised after header and footer)
- **Trigger**: Second DFRUVL cycle — site governance audit flagged CTA banner inconsistency
- **Files**: about.html, services.html, insights/index.html, SKILL.md, memory/reflections.md

## v1.4.0 — 2026-02-13
### First DFRUVL Cycle — Accessibility & Token Governance
- **Fixed**: Hero image empty alt text on index.html (Critical — REF-006)
- **Fixed**: Accordion `<div role="button">` → native `<button>` on contact.html (Critical — REF-007)
- **Fixed**: var() fallback HEX values on contact.html error indicators (Major — REF-008)
- **Fixed**: Missing theme-color meta tags on 4 pages + invalid var() reference on 1 page (Minor)
- **Fixed**: Inline CTA button styles duplicating CSS classes on insights/index.html (Major — REF-008)
- **Added**: Image alt text classification rule to SKILL.md Testing Checklist
- **Added**: Native HTML element preference rule to SKILL.md Common Mistakes
- **Added**: var() fallback, meta tag exception, and inline duplication rules to SKILL.md Common Mistakes
- **Added**: REF-006, REF-007, REF-008 to memory/reflections.md
- **Added**: Pattern P-004 (Generic Rules Need Classification Specificity)
- **Trigger**: First live DFRUVL cycle run against site governance audit
- **Files**: index.html, contact.html, about.html, services.html, insights/index.html, insights/ma-readiness-checklist/index.html, SKILL.md, memory/reflections.md

## v1.3.0 — 2026-02-13
### Self-Adjustment System
- **Added**: `references/self-adjustment.md` — closed-loop DFRUVL protocol for skill evolution
- **Added**: `CHANGELOG.md` — this file, tracking skill version history
- **Added**: `memory/reflections.md` — episodic memory for gap tracking
- **Added**: Self-adjustment reference to SKILL.md Key References section
- **Trigger**: User request to deploy reinforcement learning-based self-improvement system
- **Foundation**: Synthesised from 29 academic papers (Reflexion, Constitutional AI, SCoRe, Process Reward Models, Curriculum Learning) and 10 Claude Code community solutions

## v1.2.0 — 2026-02-13
### Cross-Page Consistency
- **Added**: Cross-Page Consistency Checklist to SKILL.md (30+ items across 4 categories)
- **Trigger**: Footer inconsistency found across 8 pages during site audit
- **Reflection**: REF-004
- **Files**: SKILL.md

## v1.1.0 — 2026-02-12
### Design Token Gap Analysis & 3-Tier Architecture
- **Added**: 3-Tier Token Architecture (Primitive → Semantic → Component) to design-tokens.md
- **Added**: Token Governance enforcement rule to SKILL.md Core Workflow (step 6)
- **Added**: W3C DTCG format specification
- **Changed**: Expanded design-tokens.md from basic palette list to comprehensive architecture document
- **Trigger**: Design token gap analysis revealed no semantic naming, no governance, no component tokens
- **Reflection**: REF-001
- **Files**: design-tokens.md, SKILL.md

## v1.0.0 — 2026-02-11
### Initial Skill Creation
- **Created**: SKILL.md with 4-brand design system, quick reference tokens, conversion essentials, accessibility requirements
- **Created**: design-tokens.md, conversion-rules.md, accessibility.md, premium-polish.md, ux-architecture.md, technical-seo.md, data-visualization.md, image-strategy.md
- **Trigger**: Initial web design system skill build for Newport Pembury & Co and related brands
- **Files**: All 9 files (3,793 lines total)
