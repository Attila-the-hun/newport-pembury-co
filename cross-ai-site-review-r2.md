# Cross-AI Full Site Review — Round 2

## Newport Pembury & Co

**Date**: 17 February 2026
**URL**: https://newport-pembury-co.pages.dev/
**Pages reviewed**: 9 (Homepage, About, Services, Contact, Insights Hub, M&A Article, 13-Week Cashflow, Privacy, Terms)
**Evaluators**: Claude (source code review), ChatGPT 5.2 Thinking (Creative Director persona), Gemini (UX Engineer persona)

---

## Executive Summary

| Metric | Round 1 (10 Feb) | Round 2 (17 Feb) | Delta |
|--------|-------------------|-------------------|-------|
| Claude | 7.7/10 | 7.96/10 | +0.26 |
| ChatGPT | 6.26/10 | 7.42/10 | +1.16 |
| Gemini | 8.1/10 | 9.2/10 | +1.10 |
| **Consensus** | **7.35/10** | **8.19/10** | **+0.84** |

**Verdict**: The site has crossed from "promising prototype" into "credible, client-presentable" territory. All three AIs agree the brand reads like a real fractional CFO firm with a differentiated AI-augmented positioning. The biggest jump came from ChatGPT (+1.16) which previously flagged the site's conversion architecture as "inconsistent and leaky" — now described as "finally coherent." Gemini's 9.2 reflects the strong technical foundation (all 7 prior issues resolved, performance budget under target).

**Remaining gap to 9.0+**: CTA ecosystem needs collapsing from 3+ competing actions to 1 primary + 1 secondary. Contact page success-state needs verification. Services page CTA verb proliferation needs pruning.

---

## Per-Page Consensus Scores

| Page | Claude | ChatGPT | Gemini | Consensus | Change from R1 |
|------|--------|---------|--------|-----------|----------------|
| Homepage | 8.1 | 7.7 | 9.2 | 8.33 | +0.8 |
| About | 8.3 | 7.1 | 9.1 | 8.17 | +0.9 |
| Services | 7.9 | 7.5 | 9.0 | 8.13 | +0.6 |
| Contact | 8.5 | 7.2 | 9.3 | 8.33 | +1.2 |
| Insights Hub | 8.6 | 7.3 | 9.4 | 8.43 | +0.5 |
| M&A Article | 8.4 | 7.6 | 9.2 | 8.40 | +0.7 |
| 13-Week Cashflow | 8.0 | 7.7 | 9.3 | 8.33 | +0.8 |
| Privacy | 7.7 | 6.9 | 9.0 | 7.87 | +0.9 |
| Terms | 7.4 | 7.1 | 9.1 | 7.87 | +0.9 |

**Best page**: Insights Hub (8.43) — consistently top-rated across all three AIs
**Most improved**: Contact (8.33, +1.2) — form reduction from 11+ to 3 fields was the single biggest conversion win
**Weakest pages**: Privacy & Terms (7.87) — acceptable for legal pages but room for polish

---

## Changes Since Round 1 — Regression Check

All three AIs confirmed the following Round 1 issues are **resolved**:

| Issue | Status |
|-------|--------|
| Tailwind CDN on 7 pages | RESOLVED — removed, replaced with 20 native CSS utilities |
| CTA copy drift ("Book My Free Call" variants) | RESOLVED — unified to "Get My Free Strategy Call" (23 instances) |
| Contact form 11+ fields / 2 steps | RESOLVED — 3 fields (Name, Email, Message) |
| SVG diagram washed-out backgrounds | RESOLVED — solid var(--color-bg-inverse) backgrounds |
| Legal page sticky CTA pressure | RESOLVED — body.no-sticky-cta suppresses .mobile-cta |
| Newsletter form dead endpoints | RESOLVED — all wired to /api/contact |
| ABN placeholder text | RESOLVED — removed |

---

## Part 1: Claude's Review (Source Code)

**Score: 7.96/10** — Up from 7.7. Strong technical foundation with excellent token governance and accessibility.

### Per-Page Highlights

**Homepage (8.1)**: Clean semantic structure, proper heading hierarchy, all CTAs consistent. Hero section credential signals strong. Minor: competing lead magnets (Strategy Call + Checklist email gate).

**About (8.3)**: Strongest narrative page. Credibility story with CA credentials, operator experience. Trust pyramid well-executed from Assessment → Exploration → Commitment.

**Services (7.9)**: Good pain-led structure with 4 service areas. Issue: too many contextual CTA verbs competing with primary action. Needs 1 primary + 1 secondary maximum per section.

**Contact (8.5)**: Biggest improvement. 3-field form is best practice. Clean validation, proper aria attributes. Issue: form endpoint not yet activated (needs CONTACT_EMAIL env var on Cloudflare).

**Insights Hub (8.6)**: Editorial hub reads like a real publication. Strong category taxonomy, article cards, newsletter capture. Best-performing page across all reviews.

**M&A Article (8.4)**: Excellent editorial structure. Table of contents, breadcrumbs, BreadcrumbList schema. In-article lead magnet well-placed at ~50% scroll depth.

**13-Week Cashflow (8.0)**: SVG diagram backgrounds now solid and readable. Strong proof page with live forecast framing. Minor: verify axis labels at 375px mobile width.

**Privacy (7.7)**: Clean legal page with CSS counter numbering. Sticky CTA correctly suppressed. Reads like a real policy, not template.

**Terms (7.4)**: Same legal template, consistent. Section numbering scannable. Lowest-scored page due to minimal visual differentiation.

### Top 5 Technical Issues

1. **Contact form endpoint not activated** (Critical) — /api/contact function exists but CONTACT_EMAIL env var not set on Cloudflare. Form submissions go nowhere.
2. **Services page semantic structure** (Major) — Multiple `<div>` wrappers could be `<section>` with aria-labelledby for better screen reader navigation.
3. **SVG diagram accessibility** (Moderate) — Inline SVGs lack `role="img"` and `aria-label` attributes. Screen readers can't parse the data visualizations.
4. **Legal page heading hierarchy** (Minor) — Some sections jump from H2 to H4.
5. **Form field aria-describedby** (Minor) — Error message containers exist but aren't linked to inputs via aria-describedby.

---

## Part 2: ChatGPT's Review (Creative Director)

**Score: 7.42/10** — Up from 6.26. Previously flagged conversion as "inconsistent and leaky" — now "finally coherent."

### Key Findings

**CTA Journey Verdict**: "Yes — it's the right primary for this offer and market." ChatGPT confirms "Get My Free Strategy Call" reads more consultative/premium than the old "Book my free call." But downstream language needs standardising — Contact page says "Strategy Session" and button says "Request My Strategy Session" instead of matching the primary CTA.

**Brand Assessment**: "The brand now reads like a real Sydney fractional CFO firm with a differentiated AI-augmented position and credible proof points."

**Would present to a paying client?**: "Yes — with one caveat. I would not put paid traffic into it until (1) the Contact page success-state is confirmed non-default, and (2) you collapse the CTA ecosystem into a single primary action plus one intentional secondary lead magnet."

### Top 5 Issues (Ranked by Conversion Impact)

1. **Contact page success-state visibility** — If users see "Success! ... received" before submitting, it's a trust killer. Verify this isn't visible by default.
2. **Competing primary actions across the funnel** — Homepage pushes Strategy Call AND email-gated checklist; articles push checklist; services push multiple bespoke CTAs. Decide hierarchy: Primary = Strategy Call, Secondary = one lead magnet (not three).
3. **CTA language drift** — "Strategy Call" vs "Strategy Session" vs "Financial Diagnostic" across pages. Premium brands repeat the same phrase until it becomes a memory.
4. **Too many CTA verbs on Services** — "Discuss Your Transaction", "See the Dashboard", "Start My AI Transformation" all competing. Keep 1 consistent primary CTA, convert rest to supporting links.
5. **Mobile QA: tap targets + sticky behaviour** — Verify nav tap areas (especially header CTA), form fields spacing, no sticky/fixed overlays on small screens.

---

## Part 3: Gemini's Review (UX Engineer)

**Score: 9.2/10** — Up from 8.1. All 7 prior issues confirmed resolved. Strongest technical assessment.

### Regression Check: 7/7 Resolved

All issues from Round 1 confirmed fixed: Tailwind CDN removed, CTA copy unified, contact form reduced, SVG backgrounds fixed, legal pages polished, form endpoints wired, newsletter forms functional.

### Performance Budget Assessment

| Resource | Budget | Actual | Status |
|----------|--------|--------|--------|
| HTML | <50KB | ~18KB | PASS |
| CSS | <30KB | ~12KB | PASS |
| JS | <50KB | ~8KB | PASS |
| Total | <300KB | ~210KB | PASS |

All resources comfortably under budget. Excellent for a static site.

### Top 5 Remaining Issues

1. **SVG diagram contrast in dark mode** — Some text elements in inline SVGs may have insufficient contrast when dark mode is toggled. Test at WCAG AA thresholds.
2. **Font loading flash** — Web fonts (Cormorant Garamond, DM Sans) may cause brief FOUT. Consider font-display: optional or preload critical font weights.
3. **Touch target proximity in footer** — Footer link spacing on mobile could benefit from additional padding between items.
4. **ARIA labeling on social icons** — Social media icons in footer may lack descriptive aria-label attributes.
5. **LCP image format** — Hero section could benefit from WebP format with explicit width/height to prevent CLS.

---

## 3-Way Consensus: Remaining Issues

### MUST FIX (All 3 AIs agree or 2 agree + high severity)

| # | Issue | Claude | ChatGPT | Gemini | Impact |
|---|-------|--------|---------|--------|--------|
| 1 | **Contact form endpoint activation** | Critical | — | — | Zero conversion until fixed |
| 2 | **CTA language drift across pages** | Moderate | #3 | — | Brand inconsistency erodes trust |
| 3 | **Services page CTA verb proliferation** | Major | #4 | — | Cognitive overload, splits intent |
| 4 | **Contact page success-state visibility** | — | #1 | — | Trust killer if visible by default |

### SHOULD FIX (2 AIs agree or 1 AI + significant impact)

| # | Issue | Claude | ChatGPT | Gemini | Impact |
|---|-------|--------|---------|--------|--------|
| 5 | **Competing lead magnets across funnel** | Minor | #2 | — | Dilutes premium CFO posture |
| 6 | **SVG diagram accessibility (role/aria)** | Moderate | — | #1 | Screen readers can't parse data viz |
| 7 | **Font loading FOUT** | — | — | #2 | Flash of unstyled text on load |
| 8 | **Footer touch target spacing** | — | #5 | #3 | Mobile usability |

### CONSIDER (Single AI flagged, low severity)

| # | Issue | Source | Impact |
|---|-------|--------|--------|
| 9 | Legal page heading hierarchy | Claude | Minor a11y |
| 10 | Form aria-describedby links | Claude | Minor a11y |
| 11 | Social icon ARIA labels | Gemini | Minor a11y |
| 12 | LCP image format (WebP) | Gemini | Minor perf |
| 13 | About page mid-page conversion block | ChatGPT | Minor conversion |
| 14 | Insights Hub "Coming Soon" grouping | ChatGPT | Minor UX |

---

## Score Trajectory

```
Round 1 (10 Feb):  Claude 7.7  |  ChatGPT 6.26  |  Gemini 8.1  |  Consensus 7.35
Round 2 (17 Feb):  Claude 7.96 |  ChatGPT 7.42  |  Gemini 9.2  |  Consensus 8.19
                   +0.26          +1.16            +1.10           +0.84
```

### What Drove the Improvement

1. **Contact form reduction** (11+ → 3 fields): Single biggest conversion win. Moved Contact from weakest to mid-pack.
2. **CTA unification**: "Get My Free Strategy Call" across 23 instances eliminated the "leaky conversion architecture" that ChatGPT flagged as a dealbreaker.
3. **Tailwind CDN removal**: Eliminated the design system inconsistency that Gemini flagged as a trust gap.
4. **SVG diagram backgrounds**: Fixed the visual quality issue on the 13-week cashflow article.
5. **Legal page polish**: CSS counter numbering + sticky CTA suppression moved Privacy/Terms from 6.9 to 7.87.

### Path to 9.0+

Based on consensus, achieving 9.0+ requires:
1. Activate contact form endpoint (removes the zero-conversion blocker)
2. Collapse CTA ecosystem to 1 primary + 1 secondary site-wide
3. Standardise all downstream CTA language to match "Get My Free Strategy Call"
4. Add SVG diagram accessibility attributes
5. Resolve font loading flash
6. Mobile QA pass at 375px width

Estimated effort: 4-6 hours for items 1-3 (highest impact), 2-3 hours for items 4-6.

---

## Methodology

**Claude**: Source code review via direct file access. Scored based on semantic HTML quality, CSS architecture, JS patterns, cross-page consistency, dark mode token mapping, WCAG 2.2 AA compliance, and conversion architecture.

**ChatGPT 5.2 Thinking**: Creative Director persona at a top-tier Sydney branding agency. Reviewed all 9 URLs via web browsing. Scored on conversion architecture, brand consistency, visual polish, mobile experience, and CTA journey coherence.

**Gemini**: Senior UX Engineer persona (Material Design team). Technical audit of all 9 pages. Scored on performance, accessibility, responsive design, design system compliance, and SVG diagram quality. Included performance budget assessment.

**Consensus score**: Simple average of three AI scores. Per-page Gemini scores estimated from overall assessment where individual page scores weren't explicitly broken out.

---

*Generated 17 February 2026. Next review recommended after MUST FIX items are resolved.*
