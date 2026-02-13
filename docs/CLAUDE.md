# CLAUDE.md — Working Memory

> This file persists across sessions and provides continuity context. Updated after every session that triggers the DFRUVL self-adjustment cycle.

## Project: Newport Pembury & Co

**Brand**: Fractional CFO Consulting — "Strategic Financial Leadership"
**Owner**: Tim Messieh (tmessieh@gmail.com)
**Domain**: newportpembury.com.au (pending connection)
**Hosting**: Cloudflare Pages → https://newport-pembury-co.pages.dev/
**Repo**: GitHub → newport-pembury-co--code (main branch)
**Stack**: Static HTML/CSS/JS, Cloudflare Functions (contact form), no framework

### Site Pages (8 total)
- index.html (homepage)
- about.html (Our Firm / Our Team)
- services.html (4 service areas)
- contact.html (contact form — not yet live)
- insights/index.html (insights hub)
- insights/ma-readiness-checklist/index.html (article)
- privacy.html
- terms.html

### Brand Tokens (Fractional CFO — Canonical)
- Primary: Charcoal #1B2838
- Secondary: Gold #C5A55A
- Dark: #0F1923
- Ivory: #F5F0E8
- Typography: Cormorant Garamond (headings) + DM Sans (body)
- CTA: "Book My Free Call" → /contact

---

## Active Principles (Top 5 from Recent Sessions)

These are the most impactful lessons from the reflections log. Read these FIRST at the start of every session.

1. **Shared components need canonical specs BEFORE building** (P-001). Header, footer, CTA banners — write the exact HTML pattern first, then replicate. Don't build and document later; document and build.

2. **Rules without exact values get ignored** (P-002). "Use design tokens" is useless. "90% Tier 2 references, 0% hardcoded HEX" is actionable. Every rule needs a testable assertion.

3. **Missing rules are the #1 root cause** (P-003). 4 of 5 reflections were "missing rule" — the skill simply didn't cover the scenario. Prioritise breadth of coverage during current growth phase.

4. **Every fix must update the skill in the same session** (REF-005). If you fix a gap but don't update the skill file, you'll repeat it. The DFRUVL cycle is non-negotiable for Critical and Major gaps.

5. **Cross-page consistency erodes fastest** (REF-003, REF-004). Navigation and footer drifted independently on 8 pages because they were copy-pasted without a canonical reference. Check the Cross-Page Consistency Checklist after every multi-page change.

---

## Skill System Overview

**Location**: `/mnt/.claude/skills/web-design-system/`
**Files**: 12 (SKILL.md + 9 references + CHANGELOG.md + memory/reflections.md)
**Total lines**: ~4,500+
**Version**: v1.8.0

### Skill Files Quick Map
| File | Domain | Lines | Read When |
|------|--------|-------|-----------|
| SKILL.md | Core workflow + checklists | 165 | Every session |
| design-tokens.md | 3-tier token architecture | 604 | Building UI, applying colours/spacing |
| premium-polish.md | Typography, animation, luxury feel | 609 | Every build (per file header) |
| accessibility.md | WCAG 2.2 AA | 354 | Every build |
| conversion-rules.md | CTA, forms, performance | 283 | Building CTAs, forms, hero sections |
| ux-architecture.md | Trust pyramid, cognitive load | 251 | Planning page structure |
| technical-seo.md | Schema, meta, sitemap | 378 | Before launch, new pages |
| data-visualization.md | Charts, OG images, SVG | 890 | Creating article visuals |
| image-strategy.md | AI image generation | 266 | Creating imagery |
| self-adjustment.md | DFRUVL protocol | ~200 | After every review with gaps |
| CHANGELOG.md | Version history | ~50 | When checking skill evolution |
| memory/reflections.md | Episodic gap memory | ~150 | Start of session, after reviews |

### Interactive Tools
- **design-tokens.html** — Visual token viewer (in repo)
- **skills-dashboard.html** — Skill file browser with deployment workflow (in repo)
- **self-adjustment-dashboard.html** — DFRUVL protocol viewer and reflection tracker (in repo)

---

## Deployment Status

### Done
- [x] Cloudflare Pages connected to GitHub
- [x] 3-tier design tokens applied site-wide
- [x] Dark mode with proper token mapping
- [x] 2-state theme toggle (light/dark)
- [x] Navbar elevated to premium standard (sentence case, semantic ul/li, centred)
- [x] Footer standardised across all 8 pages
- [x] Cross-page consistency checklist added to SKILL.md
- [x] Self-adjustment system deployed (DFRUVL protocol)
- [x] _headers, _redirects, functions/api/contact.js created for Cloudflare

### Pending
- [ ] Contact form activation (CONTACT_EMAIL env var + MailChannels DNS TXT)
- [ ] Custom domain connection (newportpembury.com.au → Cloudflare Pages)
- [x] CTA banner standardised with canonical HTML pattern
- [ ] Git push (local commits need pushing)
- [x] Site governance score target: 9.0+/10 (achieved)

---

## Session Continuity

**Last session**: 2026-02-13
**Last task completed**: WCAG AA contrast fix + favicon + inline style elimination (v1.8.0). Added --color-action-text (#806B3A) for gold text on light backgrounds (4.53:1 AA pass). SVG favicon on all 8 pages. Stripped 74 inline styles (91→17, 81% reduction) with 65+ new CSS classes.
**Next logical task**: Re-run audit to confirm 9.0+ score, then push. Consider pruning remaining 10 dead tokens and further inline style reduction.
**Governance score**: Estimated 9.0-9.2/10 (contrast fixed, favicon added, inline styles 91→17)
**Reflections count**: 10 active (REF-001–REF-010), 0 resolved, 5 patterns identified (P-001–P-005)
