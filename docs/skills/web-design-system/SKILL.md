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
- **image-strategy.md**: AI image generation framework. Tool comparison (FLUX Pro, Midjourney, Ideogram, Leonardo, Recraft), per-site image needs with prompt templates, AI vs real photography decision framework, post-processing pipeline, cost analysis (95-99% savings vs traditional). **Read before creating any imagery.**
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
- [ ] Forms have 3 fields or fewer
- [ ] CTAs use high-contrast colors
- [ ] Core Web Vitals targets met
- [ ] Mobile CTA sticky positioned
- [ ] Hero/content images have descriptive alt text (15-125 chars); only decorative images use alt=""
- [ ] Interactive elements use native HTML (button, a, input) — never div with role="button"
- [ ] Heading hierarchy correct
- [ ] Focus indicators visible

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
- [ ] Same CTA button text ("Book My Free Call") and href (/contact)
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
            <a href="/contact" class="cta-btn-primary">Book My Free Call</a>
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
- CTA text variations ("Schedule Consultation" vs "Book My Free Call")
- Missing `aria-label` attributes on navigation landmarks
- Using `<div role="button">` instead of native `<button>` elements (accordions, toggles, dropdowns)
- Inline styles that duplicate existing CSS class properties (e.g. styling .cta-btn-primary with inline background/padding)
- var() fallback values that don't match canonical token values (e.g. `var(--color-error, #wrong-hex)`)
- CSS custom property references in HTML meta attributes where they're invalid (e.g. `<meta name="theme-color" content="var(--x)">`)
- Hero or content images with empty alt="" (only acceptable for truly decorative elements)

---

See detailed guidance in `references/design-tokens.md`, `references/conversion-rules.md`, `references/accessibility.md`, `references/technical-seo.md`, and `references/ux-architecture.md`.
