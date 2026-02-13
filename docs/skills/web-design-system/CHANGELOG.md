# Skill Changelog

Track every evolution of the web design system skill files. Each entry records what changed, why, and which reflection triggered it.

---

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
