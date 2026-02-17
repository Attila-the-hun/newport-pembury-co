---
name: web-design-system
description: Apply 2026 web design best practices, color palettes, typography rules, and conversion optimization guidelines for professional business websites. Includes design tokens, accessibility compliance, and CTA optimization strategies. Triggers on website, web design, color palette, typography, font, layout, design system, UI, UX, accessibility, brand, styling.
---

# Web Design System Skill

Use this skill when building or redesigning professional business websites. Provides comprehensive design tokens, conversion rules, and accessibility standards for four brands: Composite Materials, Fractional CFO Consulting, Carbon Fibre Garage Doors, and Carbon Fibre Black Curtain Rods & Rails.

## Core Workflow

1. **Identify Site Type**: Determine which brand (composite, cfo, garage-doors, curtain-rods)
2. **Apply Design Tokens (3-Tier Architecture)**: Use the appropriate palette, typography, and spacing from `design-tokens.md`. Follow the Primitive → Semantic → Component hierarchy. 90% of UI should reference Tier 2 (semantic) tokens. Never apply Tier 1 (primitive) values directly to components.
3. **Optimize Conversions**: Follow CTA, hero section, and trust signal rules in `conversion-rules.md`
4. **Ensure Accessibility**: Validate WCAG 2.2 AA compliance using `accessibility.md` checklist
5. **Test Core Web Vitals**: Achieve LCP <2.5s, INP <200ms, CLS <0.1
6. **Enforce Token Governance**: No hardcoded HEX or pixel values in CSS. All values must reference CSS custom properties. Track Design Debt (>3% budget on UI fixes = systemic failure).
7. **Self-Adjust After Reviews**: When a review finds Critical or Major gaps, run the DFRUVL cycle from `self-adjustment.md`: Detect → Fix → Reflect → Update → Verify → Log. Every substantial gap must trigger a skill evolution in the same session. Target: zero repeat defects. Read `memory/reflections.md` at start of every session for context.

## Quick Design Tokens Reference

### Composite Materials
- **Primary**: Navy #1B3A6B
- **Secondary**: Steel Gray #5A6C7D
- **Accent**: Teal #008DB9
- **CTA**: Orange #FFA500
- **Typography**: Montserrat (headings) + Open Sans (body)

### Fractional CFO (NEW Brand — Canonical)
- **Primary**: Charcoal #1B2838
- **Secondary**: Gold #C5A55A
- **Dark**: #0F1923
- **Ivory**: #F5F0E8
- **Typography**: Cormorant Garamond (headings) + DM Sans (body)
- **OLD Brand** (Cowork legacy, do not use): #2C3E50/#D4AF37, Playfair Display + Lato

### Carbon Fibre Garage Doors
- **Primary**: Obsidian #1A1A2E
- **Secondary**: Carbon Gray #2D2D3F
- **Accent**: Electric Red #E63946
- **CTA**: Bright Red #E63946
- **Typography**: Rajdhani (headings) + Inter (body)

### Carbon Fibre Black Curtain Rods & Rails
- **Primary**: Matte Black #1C1C1C
- **Secondary**: Warm Gray #8B8680
- **Accent**: Brushed Gold #C9A96E
- **CTA**: Gold #C9A96E
- **Typography**: Cormorant Garamond (headings) + Nunito Sans (body)

### Universal
- **Spacing Base**: 8px (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px...)
- **Content Max-Width**: 1200px
- **Section Gaps**: 80-120px desktop, 40-60px mobile
- **Touch Targets**: 44px minimum
- **Breakpoints**: 640px, 768px, 1024px, 1280px, 1536px

## Conversion Essentials

- CTA buttons: 44px+ height, 120px+ width, high contrast, first-person verbs
- Hero section: headline, subheadline, CTA, trust signal, <2.5s load
- Form fields: 3 fields max for highest conversion, progressive disclosure
- Mobile CTA: sticky/floating, 10-15% conversion boost
- Micro-interactions: hover scale 1.02-1.05, transition 200-300ms

## Accessibility Requirements

- **Color Contrast**: 4.5:1 for body text, 3:1 for large text/UI
- **Keyboard Navigation**: Full Tab support, visible focus indicators
- **Semantic HTML**: nav, main, article, header, footer, section
- **Alt Text**: Descriptive, concise, avoid "image of"
- **Heading Hierarchy**: H1 once per page, logical nesting

## Key References

- **design-tokens.md**: 3-Tier Token Architecture (Primitive → Semantic → Component), W3C DTCG format, semantic naming convention, automated governance framework, complete color palettes for all 4 brands, typography scales, spacing (8px grid), shadows, border radius, easing functions, and CSS custom properties template. Includes ROI/M&A readiness context for design token investment.
- **conversion-rules.md**: CTA optimization, hero sections, forms, social proof, micro-interactions, Core Web Vitals
- **accessibility.md**: WCAG 2.2 AA compliance checklist, keyboard navigation, ARIA, testing tools
- **data-visualization.md**: Static chart generation with matplotlib (bar, timeline, donut charts), OG image generation with Pillow (1200x630px, brand gradients), SVG illustrations (icons, patterns, animated charts), integration patterns (CSS classes, lazy loading, alt text), chart design principles (color hierarchy, minimal chrome, source attribution). **Read before creating article charts or social assets.**
- **premium-polish.md**: CRITICAL — What separates good from excellent. Typography craft (font smoothing, optical sizing, vertical rhythm, smart punctuation, widow prevention), spacing systems (8px grid, golden ratio, proximity, asymmetric rhythm), animation mastery (exact easing curves, duration values, stagger patterns, button/card hover recipes), visual hierarchy (eye flow, isolation, density rhythm), image treatment (color grading, blur-up loading, aspect ratios), the "feel" factor (skeleton screens, form choreography, error elegance, page transitions), luxury website patterns (noise/grain, gradient architecture, text reveals, magnetic buttons, Stripe pyramid for B2B), and anti-patterns to avoid. **Read this file before every build.**
- **image-strategy.md**: Three-model image workflow (Claude SVG → Gemini photorealistic → ChatGPT conceptual). **Phase 1 (Claude SVGs) is mandatory before any external image generation.** Includes SVG specs per use case, Claude SVG checklist, prompt file convention (IMAGE-PROMPTS.md), additional tool comparison (FLUX Pro, Midjourney, Ideogram, Leonardo, Recraft), per-site image needs with prompt templates, AI vs real photography decision framework, post-processing pipeline, cost analysis. **Read before creating any imagery.**
- **technical-seo.md**: Schema markup (JSON-LD) templates for LocalBusiness, ProfessionalService, Product, BreadcrumbList, FAQPage. Open Graph and Twitter Card meta tags. XML sitemap generation. robots.txt and bot governance (AI crawler management). Canonical tags. Site architecture (flat, 3-click rule). Per-page SEO checklist. **Apply to every page before launch.**
- **ux-architecture.md**: Trust pyramid (5-stage progressive commitment model), narrative structure for user journeys (Story Circle mapped to page sections), cognitive load management (Hick's Law, Miller's Law, Jakob's Law), progressive disclosure patterns, and page architecture templates for service and product businesses. **Read when planning page structure.**
- **self-adjustment.md**: DFRUVL closed-loop protocol (Detect → Fix → Reflect → Update → Verify → Log). Synthesised from Reflexion, Constitutional AI, SCoRe, and Process Reward Models. Gap severity classification, root cause taxonomy, skill update rules, curriculum learning levels, memory architecture, and scoring metrics. **Run after every review that finds Critical or Major gaps.**
- **CHANGELOG.md**: Version history of all skill file updates. Records what changed, why, which reflection triggered it, and which files were modified.
- **memory/reflections.md**: Episodic memory of gaps found and fixes applied. Each entry answers 5 questions: what broke, why, where, so what, now what. Also tracks cross-cutting patterns. **Read at start of every session.**

## Implementation Tips

- Start with semantic HTML structure
- Apply design tokens as CSS custom properties
- Implement progressive enhancement for interactions
- Test on actual devices at breakpoints
- Run accessibility audits with Axe, WAVE, or Chrome DevTools
- Monitor Core Web Vitals with Lighthouse or PageSpeed Insights
- Use system fonts or web fonts with <2s load time
- Ensure touch targets are 44px× on mobile

## Testing Checklist

- [ ] Design tokens applied correctly
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Primary lead form has **≤3 visible fields** (Name, Email, Message for first-touch; qualification fields post-submission only)
- [ ] CTAs use high-contrast colors
- [ ] Core Web Vitals targets met
- [ ] Mobile CTA sticky positioned (except on legal pages — `body.no-sticky-cta` hides it)
- [ ] Hero/content images have descriptive alt text (15-125 chars); only decorative images use alt=""
- [ ] Interactive elements use native HTML (button, a, input) — never div with role="button"
- [ ] Heading hierarchy correct
- [ ] Focus indicators visible (gold `var(--color-focus)`, not browser default blue)
- [ ] **Tailwind CDN removed from ALL pages** (`grep -r 'cdn.tailwindcss.com' *.html` returns **0 results**)
- [ ] **All form endpoints point to real backend** (no `YOUR_FORM_ID`, no `action="#"`)

## Token Governance Checklist (run after every CSS/HTML change)

**Verifiable assertions — every check has a command that produces a number.**

### HTML Inline Styles
- [ ] `grep -r 'style=' *.html` returns **<20 results** across all pages (target: 0 for new pages)
- [ ] Footer `<ul>` elements use `class="footer-list"` — **zero** inline list styles
- [ ] CTA buttons use `.cta-btn-primary` / `.cta-btn-ghost` — **zero** `.btn .btn-primary` in CTA banners
- [ ] Required field indicators use `class="required-indicator"` — **zero** inline `color: var(--color-error)`
- [ ] No inline `font-family:` on any element (headings inherit from CSS rule on h1-h6)

### CSS Hardcoded Values
- [ ] `grep '#[0-9a-fA-F]' main.css` outside `:root` / `[data-theme]` returns **0 results**
- [ ] Form validation uses `var(--color-success)`, `var(--color-error)`, `var(--color-success-bg)`, `var(--color-error-bg)` — **zero** hardcoded feedback colours
- [ ] Category pills use `var(--color-category-*)` tokens — **zero** hardcoded pill colours
- [ ] Button dark mode uses `var(--color-text-inverse)` — **zero** hardcoded `#FAFAFA`

### Token Coverage
- [ ] All `:root` tokens are referenced at least once in component CSS or HTML classes (no dead tokens)
- [ ] Font sizes use `var(--font-size-*)` tokens — target 80%+ (run: count `font-size:` vs `var(--font-size-`)
- [ ] Spacing uses `var(--space-*)` tokens — target 80%+ (run: count padding/margin/gap with `var(` vs hardcoded `px`)
- [ ] Border radius uses `var(--radius-*)` tokens — target 90%+

### New Page/Component Rule
- [ ] New pages **must** start from a template that uses utility classes (`.footer-list`, `.cta-buttons`, `.label-uppercase`, etc.)
- [ ] New CSS **must** reference tokens for all colour, spacing, radius, and font-size values — zero hardcoded exceptions without a documented reason

## Cross-Page Consistency Checklist

Run this checklist after every multi-page build or before deployment. Inconsistencies in shared components (header, footer, CTA) erode brand trust and signal carelessness. Every page must use the **same canonical HTML** for these sections — CSS classes, not inline styles.

### Header / Navigation (all pages must match)
- [ ] Identical `<nav id="navbar">` structure on every page
- [ ] Same nav links in same order (Our Firm, What We Do, Insights)
- [ ] Correct `active` class on the current page's nav link only
- [ ] Same CTA button text ("Get My Free Strategy Call") and href (/contact)
- [ ] Theme toggle present and positioned identically (after CTA)
- [ ] Hamburger button includes `aria-controls="navLinks"`
- [ ] Same padding/height (`py-5`) on nav container
- [ ] Semantic `<ul>/<li>` markup for nav links (not bare `<a>` tags)

### Footer (all pages must match)
- [ ] Uses CSS classes (`footer-brand`, `footer-links`, `footer-contact`, `footer-bottom`) — never inline styles
- [ ] Semantic `<nav>` wrappers with `aria-label` on link columns
- [ ] `<ul>/<li>` lists for footer links (not bare `<a>` tags)
- [ ] **Services column** — exact labels: "M&A Advisory", "Cash Flow & Financial Strategy", "Systems & Transformation", "Strategic CFO Partnership"
- [ ] **Company column** — exact labels and hrefs: "Our Firm" → /about, "Our Team" → /about, "Our Approach" → /#process, "Insights" → /insights/
- [ ] **Contact column** — email, phone, "Sydney, Australia" with `footer-location` class
- [ ] **Footer bottom** — copyright year, Privacy Policy link, Terms of Service link
- [ ] LinkedIn social icon present with correct href
- [ ] No extra columns (e.g. "Legal" column) — privacy/terms links live in footer-bottom only

### CTA Banners (canonical HTML — all standard pages must match)

**Canonical structure** (only subtitle, headline, and description text vary per page):
```html
<section class="cta-banner">
    <div class="cta-banner-content scroll-reveal">
        <p class="cta-subtitle">[Subtitle]</p>
        <h2>[Headline]</h2>
        <p>[Description]</p>
        <div class="cta-buttons">
            <a href="/contact" class="cta-btn-primary">Get My Free Strategy Call</a>
            <a href="mailto:hello@newportpembury.com.au" class="cta-btn-ghost">Email Timothy Directly</a>
        </div>
    </div>
</section>
```

**Checklist**:
- [ ] Uses `<section class="cta-banner">` — never inline background/padding styles
- [ ] Inner wrapper is `<div class="cta-banner-content scroll-reveal">`
- [ ] Subtitle uses `<p class="cta-subtitle">` — never inline font-size/color/letter-spacing
- [ ] Button container uses `<div class="cta-buttons">` — never inline flex/gap styles
- [ ] Primary button uses `.cta-btn-primary` class — no other button class (not `.btn-primary`, `.cta-button`)
- [ ] Ghost button uses `.cta-btn-ghost` class — no inline border/background overrides
- [ ] Primary text is "Book My Free Call", secondary is "Email Timothy Directly"
- [ ] **Zero inline `style=` attributes** anywhere in the CTA banner section
- [ ] Contact page contextual CTA ("Not Ready? Email Us") is an acceptable variant
- [ ] Legal pages (privacy, terms) may omit CTA banners
- [ ] Article pages may use content-specific CTAs (newsletter signup form)

### Page-Specific CTA Templates (R8 lesson — page CTAs drift as fast as shared components)

**Homepage Service Cards** (4 cards in `.services-grid`):
| Card # | Service | CTA Text (exact) | Class |
|--------|---------|-------------------|-------|
| 01 | M&A Advisory | Discuss Your Deal → | `.service-card-cta` |
| 02 | AI-Powered Cash Flow Intelligence | Get Cash Flow Clarity → | `.service-card-cta` |
| 03 | AI & Finance Transformation | Assess Your Stack → | `.service-card-cta` |
| 04 | Strategic CFO Partnership | Book a Strategy Call → | `.service-card-cta` |

**Rule**: Every homepage service card CTA must be intent-specific. "Get Started →" is PROHIBITED on service cards. Each CTA maps to a specific user pain point, not a generic funnel entry.

**Services Engagement Cards** (3 cards in `.engagement-grid`):
| Card | Model | CTA Text (exact) | Class |
|------|-------|-------------------|-------|
| Project | $5K per engagement | Scope My Project | `.engagement-outline-btn` |
| Retainer | $3K per month | Book a Retainer Call | `.engagement-gold-btn` |
| Interim CFO | Custom | Discuss Interim Role | `.engagement-outline-btn` |

**Rule**: Engagement card CTAs must describe the specific next step for that engagement model. "Get Started" is PROHIBITED on engagement cards.

**Insights Article CTAs** (per-article, content-specific):
- M&A article: "Send Me the Checklist" (email-gated lead magnet)
- 13-Week Cashflow: "Get My Free Strategy Call" (links to /contact)
- Rule: Max 1 content-specific CTA per article at ~50% scroll depth. Primary CTA (strategy call) must appear in article CTA banner section.

### Brand Consistency
- [ ] Logo text "Newport Pembury & Co" rendered identically everywhere (including footer)
- [ ] Tagline "Strategic Financial Leadership" matches exactly
- [ ] Gold ampersand uses `<span class="gold-amp">` in nav logo
- [ ] Color tokens used via CSS custom properties — no hardcoded HEX values
- [ ] Typography uses Cormorant Garamond (headings) + DM Sans (body) — no font fallback mismatches
- [ ] Spacing follows 8px grid system
- [ ] Touch targets meet 44px minimum on all interactive elements

### Common Mistakes to Catch
- Inline styles duplicating what CSS classes already handle (footer, CTA, nav)
- Different service labels across pages (e.g. "Financial Modeling" vs "Cash Flow & Financial Strategy")
- Different company link labels (e.g. "What We Do" vs "Our Team", "Get in Touch" vs "Our Approach")
- Missing `<nav>` or `<ul>/<li>` semantic wrappers in footer link columns
- Hash links (`#process`) that only work on the homepage — use `/#process` on all non-homepage pages
- Extra footer columns on some pages but not others
- CTA text variations ("Schedule Consultation" vs "Get My Free Strategy Call")
- Missing `aria-label` attributes on navigation landmarks
- Using `<div role="button">` instead of native `<button>` elements (accordions, toggles, dropdowns)
- Inline styles that duplicate existing CSS class properties (e.g. styling .cta-btn-primary with inline background/padding)
- var() fallback values that don't match canonical token values (e.g. `var(--color-error, #wrong-hex)`)
- CSS custom property references in HTML meta attributes where they're invalid (e.g. `<meta name="theme-color" content="var(--x)">`)
- Hero or content images with empty alt="" (only acceptable for truly decorative elements)

- Generic "Get Started" on homepage service cards or services engagement cards (use intent-specific CTAs — see Page-Specific CTA Templates)
- New HTML written with `style=` attributes instead of CSS classes (write the class FIRST, then reference it)
- Hardcoded negative-value colors (`#ef4444`, `#E63946`) instead of `var(--color-error)` token
- Engagement card pricing with inline `margin-bottom` instead of `.engagement-pricing` class

## Inline Style Prevention Rule (R8 Lesson)

**Problem**: Inline styles are reintroduced with every new feature. Post-build grep catches them but doesn't prevent them.

**Rule**: When writing new HTML, ALWAYS check if a CSS class exists for the styling needed. If not, create the class in main.css FIRST, then reference it in HTML. The workflow is:

1. Need styling → Check main.css for existing class
2. Class exists → Use it
3. Class doesn't exist → Create it in main.css → Use it
4. NEVER write `style="..."` as a shortcut

**Exception**: Truly dynamic values (e.g., JavaScript-computed positions, inline SVG attributes) may use inline styles with a code comment explaining why.

## Cross-AI Review Methodology (R1–R8 Lessons)

### Reviewer Personas & Calibration
| AI | Persona | Scoring Tendency | Best For |
|----|---------|------------------|----------|
| Claude | Source Code Engineer | Strict (8.3–8.9 range) | Token compliance, semantic HTML, accessibility gaps, code governance |
| ChatGPT | Creative Director | Moderate (6.3–8.9 range) | Conversion architecture, CTA clarity, trust signals, editorial framing |
| Gemini | UX Engineer | Generous (8.1–10.0 range) | UX polish, micro-interactions, print/a11y edge cases, structured data |

### Score Interpretation
- **Consensus** = weighted: (Claude × 0.35) + (ChatGPT × 0.35) + (Gemini × 0.30)
- Gemini 10.0 ≠ perfection — it means "no issues I can detect via browser visit"
- ChatGPT scores are the hardest to move above 8.5 (most conversion-focused)
- Claude subagent scores may be stricter than calibrated Claude scores (different context)

### What Each AI Cannot See
- **ChatGPT**: Cannot inspect `<script type="application/ld+json">` (schema.org). Schema fixes won't boost ChatGPT score.
- **Gemini**: Tends to not penalise for missing features it hasn't seen before (no baseline expectation).
- **Claude subagent**: May miscount DOM elements if reading source vs. rendered HTML differs (e.g., Coming Soon articles).

### Diminishing Returns Curve
| Score Range | Effort per 0.1 point | Fix Type |
|-------------|----------------------|----------|
| 7.0–8.0 | 1–2 hours | Structural (form reduction, CDN removal, CTA unification) |
| 8.0–8.5 | 2–4 hours | Governance (inline styles, token compliance, cross-page consistency) |
| 8.5–9.0 | 4–8 hours | Polish (accessibility, editorial framing, page-specific templates) |
| 9.0+ | 8+ hours | Content (client logos, case studies, external validation, animations) |

### Score Trajectory (Actuals, R1–R8)
| Round | Claude | ChatGPT | Gemini | Consensus |
|-------|--------|---------|--------|-----------|
| R1 | 7.70 | 6.26 | 8.10 | 7.35 |
| R2 | 7.96 | 7.42 | 9.20 | 8.19 |
| R3 | 8.29 | 8.05 | 9.60 | 8.65 |
| R4 | 8.48 | 8.44 | 9.70 | 8.87 |
| R5 | 8.72 | 8.68 | 9.85 | 9.08 |
| R6 | 8.77 | 8.76 | 9.93 | 9.15 |
| R7 | 8.82 | 8.84 | 10.0 | 9.22 |
| R8 | ~8.9 | 8.94 | 10.0 | ~9.3 |

### Regression Check Protocol
Every review round includes a regression table verifying previous fixes still hold. Template:
```
| Fix Description | Expected | Status |
|-----------------|----------|--------|
| [Specific testable assertion] | [PASS criteria] | PASS/FAIL |
```
Include ALL fixes from the previous round plus any critical fixes from earlier rounds. A FAIL on a regression is higher priority than a new issue.

---

See detailed guidance in `references/design-tokens.md`, `references/conversion-rules.md`, `references/accessibility.md`, `references/technical-seo.md`, and `references/ux-architecture.md`.
