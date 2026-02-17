# Conversion Optimization Rules

2026 best practices for maximizing conversions on professional business websites.

## Call-To-Action (CTA) Design

### Button Specifications
- **Minimum Height**: 44px (touch target WCAG)
- **Minimum Width**: 120px (readable text)
- **Padding**: 12px vertical, 24-32px horizontal
- **Font Size**: 16px
- **Font Weight**: 600-700 (bold)
- **Border Radius**: 8px (md)
- **Cursor**: pointer
- **Transition**: 200ms cubic-bezier(0.4, 0, 0.2, 1)

### Color & Contrast
- **Text-to-Background Contrast**: 4.5:1 minimum (WCAG AA)
- **Border Contrast**: 3:1 minimum for outlined buttons
- **Hover State**: 1.02-1.05x scale, 10-20% color shift
- **Active State**: shadow md, scale 0.98-0.99x
- **Disabled State**: opacity 0.5, cursor not-allowed

### CTA Copy
- Use first-person verbs: "Get my quote", "Start my audit", "Schedule my call"
- Avoid generic: "Submit", "Click here", "Learn more"
- Length: 2-5 words optimal
- Action-oriented: Start, Get, Schedule, Discover, Claim, Request
- Include benefit when possible: "Get Free Analysis"

### CTA Placement
- Hero section: Primary CTA above fold (within 600px)
- Above fold: First CTA at 300-600px scroll depth
- Mid-page: Repeat CTA every 400-600px of content
- Bottom: Final CTA within last 600px
- Sticky mobile: CTA fixed bottom, 10-15% conversion boost
- Sticky desktop: Optional, avoid over-placement
- **Context-appropriate suppression**: Legal pages (privacy, terms) must NOT show sticky/floating CTAs — add `body.no-sticky-cta` class and hide `.mobile-cta` with `display: none !important`. Sales pressure on legal pages erodes trust.

### CTA Copy Governance (R8 — hardened after 8 rounds of drift)
**Primary CTA**: "Get My Free Strategy Call" (exact — no variants)
**Secondary CTA**: "Email Timothy Directly" (shared components only)
**Prohibited variants** (grep for these — 0 results in CTA buttons):
- "Get Started" (too generic — reintroduced in R2, R4, R6, R7)
- "Strategy Session" / "Financial Diagnostic" / "Free Consultation"
- "Schedule" / "Request" / "Submit" (passive voice)

**Page-specific CTAs are permitted** but must follow rules:
- Homepage service cards: 4 unique intent-specific verbs (see SKILL.md Page-Specific CTA Templates)
- Services engagement cards: 3 unique model-specific verbs
- Article lead magnets: 1 per article, content-specific (e.g., "Send Me the Checklist")
- Article CTA banners: must use primary CTA ("Get My Free Strategy Call")
- Newsletter: "Get the Briefing" (insights hub only)

**Testing**: `grep -ri 'Get Started' *.html` in CTA buttons/links → must return 0 results

### Trust Signal Maturity Ladder (R1–R8 lesson — self-asserted trust has a ceiling)
All three AIs consistently flagged trust as "strong but self-asserted." To break through 9.0:

| Level | Example | Score Impact |
|-------|---------|-------------|
| 1. Self-asserted | "20 years experience", "CA (Chartered Accountants ANZ)" | Gets to ~8.5 |
| 2. Structured data | Schema.org hasCredential, ProfessionalService | +0.1 (invisible to ChatGPT) |
| 3. Social proof text | Named testimonials with title + company | +0.2 |
| 4. Verifiable external | Client logos, "Trusted by" bar, case study metrics | +0.3 (needed for 9.0+) |
| 5. Third-party badges | Industry awards, certification logos with links | +0.2 |

**Current state**: Level 2. To reach 9.0+, add Level 3-4 (client testimonials with names, "Trusted by" logo bar on services page).

### CTA Whitespace
- 232% conversion increase with adequate whitespace
- Minimum margin: 24px on sides, 16px top/bottom
- No competing CTAs within 200px
- One primary CTA per viewport (others secondary or tertiary)
- Secondary CTAs: 30-40% smaller, neutral color scheme

## Hero Section Requirements

### Essential Elements
- **Headline**: 48-72px, primary color, <10 words
- **Subheadline**: 18-24px, gray text, 1-2 sentences max
- **CTA Button**: High-contrast, 44px+ height, first-person verb
- **Hero Image/Video**: Full-width, optimized for mobile
- **Trust Signal**: Badge, certification, social proof, or credibility marker

### Hero Image Optimization
- Load time: <2.5s Largest Contentful Paint (LCP)
- Format: WebP with JPEG fallback
- Dimensions: 1200x600px minimum
- Mobile: 90vw width, adapt aspect ratio
- Use srcset for responsive variants
- Include alt text: descriptive, <125 characters

### Hero Copy Strategy
- Lead with benefit, not feature
- Speak to target pain point
- Headline: transformation or outcome
- Subheadline: expand on headline or method
- CTA: clear next step (no mystery clicks)

## Form Optimization

### Field Reduction Strategy
- **Highest Conversion**: 3 fields or fewer
- **Good Conversion**: 4-6 fields
- **Lower Conversion**: 7+ fields (20-25% drop)
- **Mobile**: Never exceed 3 fields

### Form Layout
- Single column on all breakpoints
- Full-width input fields (96-100vw on mobile)
- 16-24px vertical gap between fields
- Group related fields visually
- Placeholder text as hint only (must have labels)

### Progressive Disclosure
- Show essential fields first
- Reveal conditional fields based on answers
- Secondary fields: separate form or collapsible
- Multi-step forms: show progress indicator
- Confirm submission before final step

### Input Specifications
- **Height**: 44px
- **Padding**: 8px 12px
- **Font**: 16px body font (prevents zoom on iOS)
- **Border**: 1px solid Gray-300
- **Focus**: outline none, border-color primary, ring 3px
- **Error State**: border-color error (#DC3545), message below
- **Success State**: border-color success (#28A745), icon right
- **Disabled**: opacity 0.6, cursor not-allowed

### Form Validation
- Real-time validation (onChange after blur)
- Show error messages inline, below field
- Use aria-invalid and aria-describedby
- Success state with checkmark icon
- Disable submit until all required fields pass

## Social Proof Placement

### Trust Signals by Location
- **Hero Section**: Company logos (3-5), customer count, or certification badge
- **Below First CTA**: Quote or testimonial (1 paragraph max)
- **Mid-Page**: 3-column testimonials or case study preview
- **Form Section**: "Join 5,000+ companies" or similar social proof
- **Sidebar**: Trust badges, certifications, awards (vertical stack)
- **Footer**: All certifications and partnerships

### Testimonial Strategy
- Include name, title, company (2-4 words each)
- Use professional headshot (100x100px minimum)
- Length: 1-2 sentences maximum
- Lead with quantified result: "Reduced costs by 40%"
- Video testimonials: 30-60 seconds, auto-play muted
- Star ratings: 4.8+ average for credibility

### Certification & Logos
- Logo size: 80-120px height
- Grayscale styling (not full color)
- 2-3 logos per row maximum
- Include trust badges (SSL, privacy certs)
- Partner/integration logos below main badges

## Micro-interaction Specifications

### Button Interactions
- **Hover**: scale 1.02-1.05, shadow md
- **Active**: scale 0.98-0.99, shadow sm
- **Focus**: outline 2px offset 2px
- **Disabled**: opacity 0.5, no hover effect
- **Transition**: 200-300ms cubic-bezier(0.4, 0, 0.2, 1)

### Link Interactions
- **Default**: color CTA, text-decoration none
- **Hover**: text-decoration underline, subtle scale 1.02
- **Active**: color darker shade of CTA
- **Focus**: outline 2px offset 2px
- **Visited**: color gray-500 (optional)

### Form Interactions
- **Focus**: 3px ring with CTA color at 0.1 opacity
- **Input Fill**: smooth color transition (200ms)
- **Error State**: border color to error, shake animation (200ms)
- **Success State**: checkmark fade-in (300ms)

### Scroll Animations
- **Fade-in**: opacity 0 to 1 (500ms, intersect 50% threshold)
- **Slide-up**: translateY 20px to 0 (500ms)
- **No motion preference**: prefers-reduced-motion media query disables

### Interaction Implementation
- Use CSS transitions (not JavaScript animations)
- Use transform and opacity only
- Avoid animating layout properties
- Test on mid-range devices (target 60fps)
- Disable on prefers-reduced-motion

## Mobile CTA Strategy

### Sticky CTA Button
- Position: fixed bottom 0, z-index 100
- Height: 50-56px (larger than desktop)
- Width: 100vw - 16px (16px margin sides)
- Bottom: 8px margin from bottom navigation
- Visible when hero exits (onscroll > 600px)
- Hide on form focus (prevent covering input)

### Mobile CTA Metrics
- Sticky CTA: 10-15% conversion increase
- Sticky positioning: 80%+ engagement on mobile
- Remove after primary conversion (lead capture)
- A/B test: sticky vs. end-of-page CTA

### Mobile Form Strategy
- Single column always
- 3 fields maximum for mobile forms
- Larger touch targets: 48-56px input height
- Keyboard: input type="email" for email fields
- Hide form labels on small screens (use placeholder + aria-label)
- Full keyboard accessibility: Tab order correct

## Above-the-Fold Checklist

Define fold at 600px height (mobile viewport).

- [ ] Headline visible and complete
- [ ] Subheadline visible and legible
- [ ] Primary CTA button visible and accessible
- [ ] Hero image loaded and responsive
- [ ] Trust signal (logo, badge, count) visible
- [ ] No horizontal scroll on any breakpoint
- [ ] Navigation accessible (not overlapping content)
- [ ] Page load started (visual progress visible)
- [ ] Legible on all breakpoints (no text overlap)
- [ ] Mobile CTA not obscuring hero content

## Page Load Performance

### Core Web Vitals Targets

#### Largest Contentful Paint (LCP)
- **Target (2026 Elite)**: <2.0 seconds
- **Good**: <2.5s
- **Needs Improvement**: 2.5s-4s
- **Poor**: >4s

Optimize:
- Preload critical images in <head>
- Use WebP format with JPEG fallback
- Compress images with Squoosh or TinyPNG
- Lazy-load below-fold images
- Inline critical CSS

#### Interaction to Next Paint (INP)
- **Target (2026 Elite)**: <150 milliseconds
- **Good**: <200ms
- **Needs Improvement**: 200ms-500ms
- **Poor**: >500ms

Optimize:
- Minimize JavaScript execution
- Defer non-critical JS
- Use event delegation
- Avoid long tasks (>50ms)
- Use Web Workers for heavy processing

#### Cumulative Layout Shift (CLS)
- **Target (2026 Elite)**: 0.0 (zero layout shift)
- **Good**: <0.1
- **Needs Improvement**: 0.1-0.25
- **Poor**: >0.25

Optimize:
- Reserve space for images, ads, embeds
- Set width/height on all images
- Use transform animations (not layout)
- Add font-display: swap for web fonts
- Avoid unsized DOM insertions

### Performance Budget
- HTML: <50KB gzipped
- CSS: <30KB gzipped (critical <15KB)
- JavaScript: <50KB gzipped (critical <20KB)
- Images: <500KB total (with WebP)
- Fonts: <100KB total
- Total page: <300KB

## Conversion Testing Strategy

### A/B Test Priorities
1. CTA copy and color
2. Form field count (3 vs. 5 vs. 7 fields)
3. Hero section image
4. Testimonial count and placement
5. Sticky mobile CTA vs. fixed

### Measurement Baseline
- Session duration: >2 minutes
- Scroll depth: >60% of page
- Form completion: >25%
- CTA clicks: >5% of visitors
- Conversion rate: benchmark 2-5% for B2B

### Testing Tools
- Optimizely
- Google Optimize (legacy, migrate to GA4)
- Convert
- VWO (Visual Website Optimizer)
- Unbounce (landing pages)

---

Implement these rules in order: Hero > CTA > Forms > Mobile > Performance. Measure each before moving to next optimization.
