# Cross-AI Site Review — Round 3

**Date**: 2026-02-17
**Site**: https://newport-pembury-co.pages.dev/
**Reviewers**: Claude (source code subagent), ChatGPT 5.2 Thinking (browser), Gemini 3 (browser)

---

## Score Summary

| Metric | Claude | ChatGPT (corrected) | Gemini | Consensus |
|--------|--------|---------------------|--------|-----------|
| **Overall** | **8.29** | **8.05** | **9.6** | **8.65** |
| Homepage | 8.4 | 8.2 | 9.6 | 8.73 |
| About | 8.1 | 8.3 | 9.5 | 8.63 |
| Services | 8.7 | 8.1 | 9.7 | 8.83 |
| Contact | 8.2 | 7.8 | 9.4 | 8.47 |
| Insights Hub | 8.9 | 8.2 | 9.5 | 8.87 |
| M&A Article | 8.3 | 8.6 | 9.6 | 8.83 |
| 13-Week Cashflow | 8.5 | 8.6 | 9.6 | 8.90 |
| Privacy | 7.8 | 7.7 | 9.4 | 8.30 |
| Terms | 7.6 | 7.7 | 9.4 | 8.23 |

### Score Trajectory

| Round | Claude | ChatGPT | Gemini | Consensus |
|-------|--------|---------|--------|-----------|
| R1 | 7.7 | 6.26 | 8.1 | 7.35 |
| R2 | 7.96 | 7.42 | 9.2 | 8.19 |
| R3 | 8.29 | 8.05 | 9.6 | 8.65 |
| **Δ R2→R3** | **+0.33** | **+0.63** | **+0.4** | **+0.46** |

---

## ChatGPT Caching Issue

**Critical note**: ChatGPT's initial R3 review scored 7.70/10 based on CACHED/STALE content from Cloudflare's CDN. It reported:
- Contact page still showing "Strategy Session" (actually shows "Strategy Call")
- Homepage service cards still showing "Explore/See/Start/Elevate" (actually shows "Learn More →")
- 5 of 7 regression checks marked FAIL (all actually deployed and live)

After sending a correction with evidence, ChatGPT re-pulled the live site, confirmed all fixes, and issued corrected scores (8.05/10). The Services engagement models CTA sprawl and success-state DOM presence were the only valid findings from its initial review.

**Lesson**: Always request that ChatGPT navigate with `?v=timestamp` cache-busting parameters, or explicitly instruct it to use fresh navigation rather than search-result caches.

---

## Regression Check (R3 Fixes)

| Fix | Claude | ChatGPT | Gemini |
|-----|--------|---------|--------|
| CTA unified to "Get My Free Strategy Call" | PASS | PASS | PASS |
| Services 4 disciplines → "Learn More" | PASS | PASS | PASS |
| Homepage cards → "Learn More →" | PASS | PASS | PASS |
| Font preload on all 9 pages | PASS | N/V* | PASS |
| Footer touch targets 44px | PASS | N/V* | PASS |
| SVG containers role="img" | PASS | N/V* | PASS |
| Social icons descriptive aria-labels | PASS | N/V* | PASS |

*N/V = Not verifiable via ChatGPT's browsing tool (CSS/attribute-level changes)

---

## Consensus Issues (R3)

### MUST FIX (2 items — both already resolved in commit 68b2e0f)

1. **Services Engagement Models CTA sprawl** — ChatGPT + Claude flagged
   - "Scope My Project / Start My Retainer / Discuss Requirements" → all now "Get Started"
   - Status: ✅ FIXED in 68b2e0f

2. **Contact success-state DOM presence** — ChatGPT flagged
   - Success/error alerts present in DOM even when CSS-hidden
   - Added `hidden` + `aria-hidden="true"` attributes, JS removes on show
   - Status: ✅ FIXED in 68b2e0f

### SHOULD FIX (3 items — would push scores toward 8.5+)

3. **Legal pages (Privacy/Terms) need polish** — Claude 7.6-7.8, ChatGPT 7.7
   - Both AIs score these lowest; ChatGPT notes they shouldn't feel "salesy"
   - Claude suggests adding table of contents for navigation
   - Gemini rates them 9.4 (disagrees — sees footer touch targets as key improvement)
   - **Action**: Add anchor-linked TOC to Privacy and Terms pages

4. **Insights hub "Upcoming" density** — ChatGPT flagged
   - Multiple "Coming [Month] 2026" cards make hub feel like a roadmap vs publication
   - Separate Published from Upcoming visually
   - **Action**: Add visual differentiation (opacity, label, or section separator)

5. **Homepage hero dual CTA hierarchy** — ChatGPT flagged
   - "Get My Free Strategy Call" + "See How We Help" — acceptable but secondary should feel clearly subordinate
   - **Action**: Ensure secondary CTA uses ghost/outline style (verify)

### CONSIDER (5 items — diminishing returns)

6. **Print stylesheets** — Gemini only
   - @media print overrides for dark backgrounds and diagrams
   - B2B users may print Insights articles

7. **External link cues** — Gemini only
   - LinkedIn links lack visual "external" icon or aria-label warning

8. **H1/H2 hierarchy on Insights articles** — Gemini only
   - Some sub-headers skip from H2 to H4

9. **Contact page trust reinforcement** — ChatGPT only
   - Add credential/outcome snippet near the form

10. **Form validation ARIA-live regions** — Gemini only
    - Add ARIA-live regions for real-time error message announcements

---

## Gap Analysis — Target: All 3 AIs ≥ 8.5

| AI | Current | Target | Gap | Primary Blockers |
|----|---------|--------|-----|------------------|
| Claude | 8.29 | 8.5 | -0.21 | Privacy 7.8, Terms 7.6, About 8.1 |
| ChatGPT | 8.05 | 8.5 | -0.45 | Contact 7.8, Privacy 7.7, Terms 7.7 |
| Gemini | 9.6 | 8.5 | +1.1 | ✅ Already above target |

**Verdict**: Gemini is well above 8.5. Claude needs +0.21 and ChatGPT needs +0.45. The lowest-scoring pages for both are Privacy (7.7-7.8) and Terms (7.6-7.7). Fixing legal pages is the highest-leverage action to close both gaps simultaneously.

### R4 Fix Plan (estimated to close gaps)

1. **Add TOC to Privacy and Terms pages** — Expected lift: +0.3-0.5 per page for both Claude and ChatGPT
2. **Visual separation of Published/Upcoming on Insights hub** — Expected lift: +0.2-0.3 for ChatGPT Insights score
3. **Verify homepage hero CTA hierarchy** — Expected lift: +0.1-0.2 for ChatGPT Homepage
4. **Contact page trust element** — Expected lift: +0.2-0.3 for ChatGPT Contact
5. **Engagement models CTA unification** — Already done, expected lift: +0.2-0.3 for ChatGPT/Claude Services

With these fixes, projected scores:
- Claude: ~8.6-8.8
- ChatGPT: ~8.4-8.7
- Gemini: ~9.6+ (no regression expected)

---

## Verdicts

**Claude**: "Top issues are legal pages lacking TOC and btn-gold class. Site is client-ready with minor polish."

**ChatGPT (corrected)**: "Yes — I'd present this to a paying client now. And yes, I'd recommend paid traffic after you tidy the Services Engagement Model CTA sprawl and do a final copy sweep."

**Gemini**: "The site has transitioned from 'technically sound' to 'operationally superior.' This site is now a benchmark for minimalist, high-performance B2B engineering. Launch-ready."
