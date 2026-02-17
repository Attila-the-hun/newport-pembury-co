# Cross-AI Site Review — Round 5

**Date**: 2026-02-17
**Site**: https://newport-pembury-co.pages.dev/
**Reviewers**: Claude (source code subagent), ChatGPT 5.2 Thinking (browser), Gemini 3 (browser)
**Milestone**: ALL THREE AIs ≥ 8.5 TARGET ACHIEVED

---

## Score Summary

| Metric | Claude | ChatGPT | Gemini | Consensus |
|--------|--------|---------|--------|-----------|
| **Overall** | **8.72** | **8.68** | **9.85** | **9.08** |
| Homepage | 8.6 | 8.8 | 9.9 | 9.10 |
| About | 8.8 | 8.6 | 9.8 | 9.07 |
| Services | 8.5 | 8.5 | 9.8 | 8.93 |
| Contact | 8.4 | 8.7 | 9.9 | 9.00 |
| Insights Hub | 8.9 | 8.6 | 9.8 | 9.10 |
| M&A Article | 8.7 | 8.8 | 9.8 | 9.10 |
| 13-Week Cashflow | 8.6 | 9.0 | 9.8 | 9.13 |
| Privacy | 8.3 | 8.4 | 9.9 | 8.87 |
| Terms | 8.2 | 8.4 | 9.8 | 8.80 |

### Score Trajectory (R1→R5)

| Round | Claude | ChatGPT | Gemini | Consensus |
|-------|--------|---------|--------|-----------|
| R1 | 7.7 | 6.26 | 8.1 | 7.35 |
| R2 | 7.96 | 7.42 | 9.2 | 8.19 |
| R3 | 8.29 | 8.05 | 9.6 | 8.65 |
| R4 | 8.48 | 8.44 | 9.7 | 8.87 |
| **R5** | **8.72** | **8.68** | **9.85** | **9.08** |
| **Δ R1→R5** | **+1.02** | **+2.42** | **+1.75** | **+1.73** |

### Target Achievement

| AI | Score | Target | Gap | Status |
|----|-------|--------|-----|--------|
| Claude | 8.72 | 8.5 | +0.22 | ✅ ACHIEVED |
| ChatGPT | 8.68 | 8.5 | +0.18 | ✅ ACHIEVED |
| Gemini | 9.85 | 8.5 | +1.35 | ✅ ACHIEVED |

---

## Regression Check (R5 Fixes)

| Fix | Claude | ChatGPT | Gemini |
|-----|--------|---------|--------|
| DOM text injection (no static success/error text) | PASS | PASS | PASS |
| Homepage secondary CTA → text link | PASS | PASS | PASS |
| "Email Timothy Directly" → inline email text | PASS | PASS | PASS |
| Featured article moved to Coming Soon | PASS | PASS | PASS |
| Insights section labels `<p>` → `<h2>` | PASS | PASS | PASS |
| `:focus-visible` gold outlines | PASS | N/V* | PASS |

*N/V = Not verifiable via ChatGPT's text-only browsing tool (CSS-level changes)

---

## Verdicts

**Claude (8.72/10)**: "At 8.72, this site is award-nomination territory. The fixes from Round 4 were thoughtfully executed and measurably improved the user experience. Your team has earned the right to launch with confidence."

**ChatGPT (8.68/10)**: "Yes: I would present this to a paying client today as a premium fractional CFO site with disciplined conversion architecture, strong trust signalling, and a credible editorial engine. I'd also recommend paid traffic."

**Gemini (9.85/10)**: "This is a masterclass in professional, low-friction UX engineering. The site is Client-Ready and exceeds the quality of most boutique financial consultancy sites. The remaining items are 'polish' rather than 'structural,' making this a highly successful Round 5."

---

## Remaining Issues (diminishing returns — all "polish" tier)

### Claude's Top 5
1. Newsletter input styling — focus state inconsistency
2. Mobile form crowding on contact page
3. Legal page visual hierarchy (utilitarian vs premium)
4. BreadcrumbList schema missing on services.html
5. Newsletter opt-out link in footer

### ChatGPT's Top 5
1. Services page two CTA systems ("Learn More" vs "Get Started")
2. Homepage multiple proof CTAs below fold
3. Public "Coming March 2026" content risk
4. Contact page "Prefer to reach out directly?" competes with form
5. Footer micro-consistency

### Gemini's Top 5
1. Print stylesheets (legal pages, insights)
2. External link cues (aria-labels for external links)
3. Scroll-to-top button for long articles
4. H1/H2 contrast in article body
5. ARIA-live for form feedback

---

## Summary

The Newport Pembury & Co website has completed 5 rounds of cross-AI review, achieving the target of all 3 AIs scoring ≥ 8.5. The consensus score rose from 7.35 (R1) to 9.08 (R5), a total improvement of +1.73 points across 5 iterations.

Key achievements across all rounds:
- CTA architecture unified: single dominant "Get My Free Strategy Call" per page
- Legal pages modernised with anchor-linked TOCs
- Insights hub restructured with Published/Coming Soon separation
- Contact form DOM hygiene: no state leakage
- Accessibility: focus-visible gold outlines, ARIA attributes, semantic HTML
- Performance: Tailwind CDN removed, critical CSS inlined
- Trust signals: form trust strip, hero proof bar, social proof

The site is now client-ready and paid-traffic-ready per all 3 AI reviewers.
