# Premium Polish Reference

What separates a good website from an excellent one. Apply these rules to every build.

## Table of Contents

1. [Typography Craft](#typography-craft)
2. [Spacing & Proportion Systems](#spacing--proportion-systems)
3. [Animation & Motion Mastery](#animation--motion-mastery)
4. [Visual Hierarchy & Eye Flow](#visual-hierarchy--eye-flow)
5. [Image Treatment](#image-treatment)
6. [The "Feel" Factor](#the-feel-factor)
7. [Anti-Patterns to Avoid](#anti-patterns-to-avoid)

---

## Typography Craft

Beyond font choice — the optical adjustments professionals make.

### Font Smoothing
```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```
Apply to every project. The difference is subconscious but felt immediately.

### Optical Sizing
```css
body { font-optical-sizing: auto; }
```
Variable fonts auto-adjust stroke weight and spacing for different sizes. Text at 12px gets thicker strokes and wider spacing; text at 48px gets thinner, tighter forms.

### Measure (Line Length)
- **Target**: 60-75 characters per line (about 600-700px for 16px body)
- **Never**: Let text stretch full viewport width
- **Implementation**: `max-width: 65ch` on paragraphs and text containers
- Longer measure needs taller line-height; shorter measure can use tighter leading

### Vertical Rhythm
All spacing should be multiples of the base line-height. If body is 16px/1.5 (24px line-height), then margins and padding use 24px, 48px, 72px, 96px. Creates subconscious harmony.

```css
:root {
  --rhythm: 1.5rem; /* 24px base rhythm unit */
}
p { margin-bottom: var(--rhythm); }
h2 { margin-top: calc(var(--rhythm) * 2); margin-bottom: var(--rhythm); }
h3 { margin-top: calc(var(--rhythm) * 1.5); margin-bottom: calc(var(--rhythm) * 0.5); }
```

### Typographic Color
The visual "texture" of a block of text. Controlled by font weight, size, line-height, and letter-spacing together. Each context needs different typographic color:
- Hero headline: Heavy weight, tight leading, slight negative tracking = bold, impactful texture
- Body copy: Regular weight, generous leading, neutral tracking = even, readable texture
- Caption: Light weight, moderate leading, slight positive tracking = airy, secondary texture

### Smart Punctuation
```css
/* Enable in Tailwind config or CSS */
font-variant-numeric: oldstyle-nums;
```
- Use em-dashes (&mdash;) not hyphens or double hyphens
- Use curly quotes (&ldquo; &rdquo;) not straight quotes
- Use ellipsis (&hellip;) not three periods
- Use &times; for close buttons, not "x"

### Widow/Orphan Prevention
```css
p { text-wrap: pretty; } /* Modern CSS: prevents widows automatically */
h1, h2, h3 { text-wrap: balance; } /* Balances line lengths in headings */
```
Both supported in Chrome, Edge, Firefox (2024+). Fallback: manually adjust copy.

### Font Weight Discipline
- Limit to 3 weights maximum per project: 400 (body), 600 (subheadings/bold), 700 (headlines)
- Avoid 300 (too thin at body sizes) and 900 (too heavy for anything but large display)
- Each weight serves a specific hierarchy role — never decorative

### Letter Spacing Rules
- **Headlines (24px+)**: -0.02em to -0.01em (tighten for visual density)
- **Body text (16px)**: 0 to 0.01em (neutral)
- **ALL CAPS text**: +0.05em to +0.1em (always loosen uppercase tracking)
- **Small text (12-14px)**: +0.01em to +0.02em (slightly open for legibility)

---

## Spacing & Proportion Systems

The mathematical systems that create visual rhythm.

### The 8px Grid (Non-Negotiable)
```
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
```
Every measurement — padding, margin, gap, height — must land on this scale. No 17px, no 33px, no arbitrary values. This creates invisible alignment harmony.

### Golden Ratio in Layout
- **Ratio**: 1.618:1
- **Two-column split**: 62% content / 38% sidebar
- **Hero text area**: 61.8% of hero width, image fills remainder
- **Card proportions**: Width:height ratio of 1.618:1 (e.g., 400x247px)

### Proximity Principle
Related items closer together, unrelated items further apart:
- **Within a component** (card padding): 16-24px
- **Between components** (card-to-card gap): 24-32px
- **Between sections**: 80-128px
- **Rule**: external spacing >= internal spacing, always

### Asymmetric Spacing Pattern
Professional sites rarely use perfectly symmetrical spacing:
- More space below sections than above (next section feels distinct)
- Horizontal padding slightly greater than vertical (breathing room for reading)
- Space before a new topic > space within a topic

### Consistent Rhythm Across Pages
Use CSS custom properties for spacing tokens. Every page must use the same scale:
```css
:root {
  --space-xs: 0.25rem;  /* 4px */
  --space-sm: 0.5rem;   /* 8px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-2xl: 3rem;    /* 48px */
  --space-3xl: 4rem;    /* 64px */
  --space-4xl: 6rem;    /* 96px */
  --space-5xl: 8rem;    /* 128px */
  --section-gap: var(--space-4xl);      /* Between major sections */
  --component-gap: var(--space-xl);     /* Between components */
  --inner-padding: var(--space-lg);     /* Inside components */
}
```

---

## Animation & Motion Mastery

Exact values that feel premium vs cheap.

### Easing Functions (Never Linear)
```css
/* THE FOUR EASINGS - and when to use each */
--ease-out: cubic-bezier(0, 0, 0.58, 1);        /* DEFAULT: hover, reveals, entrances */
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);  /* Modals, page transitions, layout shifts */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);/* Bouncy: tooltips, popovers, playful UI */
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1); /* Apple-like: elegant, controlled motion */

/* NEVER: linear (feels robotic) or ease-in alone (feels sluggish) */
```

### Duration by Interaction Type
- **Instant feedback** (0-100ms): Cursor change, button color shift, input border
- **Micro interactions** (150-300ms): Hover effects, button press, menu slide, tooltip
- **Standard transitions** (300-500ms): Modal open, accordion expand, page fade
- **Choreographed sequences** (500-800ms): Staggered card reveals, hero entrance
- **Never exceed 1000ms** for any single UI transition

### Stagger Patterns for Multiple Elements
```css
/* Cards entering viewport: stagger 80ms apart */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 80ms; }
.card:nth-child(3) { animation-delay: 160ms; }
/* Total sequence should complete within 600ms */
```

### Button Press Feedback
```css
button {
  transition: transform 150ms var(--ease-out), box-shadow 150ms var(--ease-out);
}
button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
button:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```
The translateY(-1px) on hover creates "lift" — a premium tactile feeling.

### Card Hover (The Professional Standard)
```css
.card {
  transition: transform 300ms var(--ease-out), box-shadow 300ms var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
}
```

### Scroll-Triggered Entrance Animation
```css
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.reveal {
  opacity: 0;
  animation: fadeSlideUp 600ms var(--ease-out) forwards;
}
/* Trigger with Intersection Observer at 15% threshold */
```

### Parallax (Subtle Only)
- Background moves at 0.3-0.5x scroll speed (never more)
- **Disable on mobile** (poor iOS Safari performance)
- Use `will-change: transform` to promote to GPU layer
- Never parallax text — only background images or decorative elements

### Reduced Motion Respect
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Visual Hierarchy & Eye Flow

How to control where users look.

### Size Ratio System
- **Hero headline**: 3x body size (48-72px vs 16px)
- **Section heading**: 2x body size (32-48px)
- **Subheading**: 1.25-1.5x body size (20-24px)
- **Body**: Base (16px)
- **Caption/label**: 0.75-0.875x body (12-14px)
- Each step signals clear importance difference

### F-Pattern and Z-Pattern Placement
- **F-Pattern** (content-heavy pages): Place key info top-left, CTAs in scan path
- **Z-Pattern** (landing pages): Logo top-left → CTA top-right → content bottom-left → CTA bottom-right
- Place primary CTA in the final position of the Z or F sweep

### Isolation Creates Importance
- Surround key elements with generous whitespace = "this is important"
- Dense clusters = "these are details"
- A CTA button with 48px of clear space around it outperforms one crammed next to text

### Color Weight Distribution
- **Dark/saturated elements** pull attention first (use for headlines, CTAs)
- **Light/desaturated elements** recede (use for body text, backgrounds)
- **One accent color** draws the eye — use it only for CTAs and key interactive elements
- Don't compete: if everything is bold, nothing is bold

### Information Density Rhythm
Alternate between dense and sparse sections:
1. Hero (sparse — big headline, one CTA, lots of space)
2. Features (moderate — 3-column grid)
3. Social proof (sparse — single testimonial with space)
4. Services (moderate — detailed content)
5. CTA (sparse — one action, maximum space)

This rhythm prevents monotony and guides the user through the page.

---

## Image Treatment

How image quality and consistency signal professionalism.

### Color Grading Consistency
All images on a site must share similar:
- Color temperature (warm/cool/neutral)
- Saturation level
- Contrast and brightness range
- Filter/treatment style

Mix warm lifestyle photos with cold product shots = amateur.

### Aspect Ratio Strategy
- **Hero**: 16:9 desktop, 4:3 tablet, 3:4 or 1:1 mobile
- **Cards in grid**: All same ratio (never mix 16:9 with 1:1 in same row)
- **Testimonial photos**: 1:1 (always square, cropped to face)
- **Logos**: Contained within consistent bounding box

### Image Loading Pattern (Blur-Up)
```html
<!-- Low-quality placeholder (inline base64, ~200 bytes) -->
<div style="background: url(data:image/jpeg;base64,...) center/cover; filter: blur(20px);">
  <img src="full-image.webp" loading="lazy" onload="this.parentElement.style.filter='none'"
       alt="Description" width="800" height="450">
</div>
```
User sees blurred preview → sharp image fades in. Eliminates blank rectangles during load.

### Layout Shift Prevention
```html
<!-- ALWAYS set dimensions to prevent CLS -->
<img src="photo.webp" width="800" height="450" alt="..." loading="lazy"
     style="aspect-ratio: 16/9; width: 100%; height: auto;">
```

### Image Hover Effects
```css
.image-container { overflow: hidden; border-radius: 8px; }
.image-container img {
  transition: transform 500ms var(--ease-out);
}
.image-container:hover img {
  transform: scale(1.05);
}
```
Subtle 5% zoom on hover. Never more than 8%.

### Background Image Overlays
```css
/* Ensure text readability over images */
.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}
```
Gradient overlay > flat overlay. Stronger at top (headline) and bottom (CTA).

---

## The "Feel" Factor

Subconscious quality signals that users feel but can't articulate.

### Loading State Hierarchy
1. **Instant** (<100ms): Show nothing, content appears immediately
2. **Brief** (100-300ms): Show skeleton placeholder (gray shapes)
3. **Moderate** (300ms-2s): Show skeleton + subtle pulse animation
4. **Long** (>2s): Show progress indicator with estimated time or step count
- Never show a blank white screen at any point

### Skeleton Screen Pattern
```html
<div class="animate-pulse">
  <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
  <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
  <div class="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
```
Replace with actual content as it loads. Matches layout shape = no layout shift.

### Form State Choreography
```
Empty → Focus (border glow 150ms) → Typing (real-time hint)
→ Blur → Validate (300ms delay) → Error (slide down 200ms + red border)
                                 → Success (green check fade 200ms)
→ Submit → Button loader (swap text to spinner) → Success message (slide down 400ms)
```
Each transition timed deliberately. The 300ms validation delay after blur prevents jarring error flash while still typing.

### Empty States
Never show blank containers. Every empty state needs:
- Illustration or icon (visual anchoring)
- Clear explanation of why it's empty
- Actionable next step (link or button)

### Error Handling Elegance
```
Bad:  "Error: 400"
Good: "Hmm, that email doesn't look right. Try something like name@company.com"
```
- Human language, not technical codes
- Specific fix suggestion, not just "invalid"
- Red border + icon + message (not color alone — accessibility)
- Error messages fade in (200ms), don't pop

### Page Transition Smoothness
- Fade current page (200ms ease-out) → brief pause (50ms) → fade in new page (300ms ease-out)
- Maintain scroll position for back navigation
- Scroll to top smoothly (400ms) for forward navigation
- Never show a blank white flash between pages

### Cursor Refinement
```css
button, [role="button"], a { cursor: pointer; }
[disabled] { cursor: not-allowed; opacity: 0.5; }
[draggable="true"] { cursor: grab; }
[draggable="true"]:active { cursor: grabbing; }
input, textarea { cursor: text; }
```

---

## Anti-Patterns to Avoid

Specific mistakes that make sites feel cheap or amateur.

### The Deadly Seven
1. **Inconsistent spacing**: Random padding/margin values not on the 8px grid
2. **Too many fonts**: More than 2 typefaces or 3+ weights
3. **Generic stock photos**: Clichéd, inconsistent style, low resolution
4. **No hover states**: Interactive elements that don't respond to cursor
5. **Layout shift on load**: Images, ads, or fonts causing content to jump
6. **Full-width text**: Body copy stretching edge to edge without max-width
7. **Identical disabled/active states**: Buttons that look clickable when they're not

### Template Tells
Signs that scream "I used a template without customizing":
- Default font pairings unchanged (Roboto + Open Sans = every template)
- 1200px max-width with 15px padding (Bootstrap default)
- Blue #007bff links (Bootstrap default)
- Hero with centered text over dark overlay (every template hero)
- "Lorem ipsum" or placeholder text accidentally left in
- Identical section spacing top and bottom (no asymmetric rhythm)
- Cookie-cutter 3-column feature grid with icons above text

### Mobile Neglect Signals
- Hover-dependent interactions with no touch alternative
- Text smaller than 16px (triggers iOS zoom)
- Touch targets smaller than 44px
- Hamburger menu that doesn't animate open/close
- No sticky CTA on long scroll pages
- Forms with side-by-side fields on small screens

## Luxury Website Patterns (Award-Winning Sites)

Hidden gems from analyzing Awwwards and CSS Design Awards winners.

### Asymmetric Section Heights
Professional sites avoid uniform section heights. Alternate between tall spacious sections and compact dense ones. This creates visual rhythm:
```css
/* Instead of uniform sections */
.section-hero { min-height: 100vh; }
.section-features { padding: 120px 0; }    /* Tall */
.section-proof { padding: 64px 0; }        /* Compact */
.section-services { padding: 96px 0; }     /* Medium */
.section-cta { padding: 128px 0; }         /* Tall */
```

### Progressive Negative Space
Whitespace that increases as user scrolls deeper. Creates a sense of expanding into content:
```css
.section:nth-of-type(1) { padding: 80px 0; }
.section:nth-of-type(2) { padding: 96px 0; }
.section:nth-of-type(3) { padding: 112px 0; }
.section:nth-of-type(4) { padding: 128px 0; }
```

### Grid-Breaking Elements
Elements that overlap sections or break out of the grid create visual interest:
```css
.grid-breaker {
  position: relative;
  z-index: 10;
  margin-top: -64px;  /* Overlaps previous section */
  margin-bottom: -32px;
}
.bleed-right {
  margin-right: calc(-50vw + 50%);  /* Bleeds to viewport edge */
}
```

### Noise/Grain Texture Overlay
Subtle film grain prevents the "too digital" flat feel:
```css
.grain-overlay::after {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
}
```
Apply at 2-3% opacity maximum. Adds tactile quality without affecting readability.

### Gradient Architecture
Layer multiple gradients instead of single flat backgrounds:
```css
.rich-background {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(27, 58, 107, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 141, 185, 0.1) 0%, transparent 40%),
    linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}
```

### Color Temperature Shifts Between Sections
Alternate warm and cool tones to create subconscious rhythm:
- Hero: Cool (professional, trustworthy)
- Features: Warm (inviting, approachable)
- Testimonials: Cool (credible, authoritative)
- CTA: Warm (urgent, actionable)

### Variable Font Weight Animation
Premium headline effect using variable fonts:
```css
@supports (font-variation-settings: normal) {
  .animated-weight {
    font-variation-settings: 'wght' 400;
    transition: font-variation-settings 600ms var(--ease-smooth);
  }
  .animated-weight:hover,
  .animated-weight.in-view {
    font-variation-settings: 'wght' 700;
  }
}
```

### Text Reveal Animation
Lines slide up one at a time with staggered delays:
```css
@keyframes textReveal {
  from {
    opacity: 0;
    transform: translateY(100%);
    clip-path: inset(0 0 100% 0);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    clip-path: inset(0 0 0% 0);
  }
}
.text-reveal-line {
  display: block;
  overflow: hidden;
}
.text-reveal-line span {
  display: inline-block;
  animation: textReveal 800ms var(--ease-out) forwards;
  opacity: 0;
}
.text-reveal-line:nth-child(1) span { animation-delay: 0ms; }
.text-reveal-line:nth-child(2) span { animation-delay: 150ms; }
.text-reveal-line:nth-child(3) span { animation-delay: 300ms; }
```

### Magnetic Button Effect
Cursor subtly pulls the button toward it:
```javascript
// Add to interactive elements for premium feel
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
    btn.style.transition = 'transform 400ms var(--ease-spring)';
  });
});
```

### Scroll-Linked Progress Indicator
Shows reading progress for content-heavy pages:
```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--color-cta);
  z-index: 9999;
  transform-origin: left;
  transform: scaleX(0);
}
```
```javascript
window.addEventListener('scroll', () => {
  const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  document.querySelector('.scroll-progress').style.transform = `scaleX(${progress})`;
});
```

### B2B Content Structure (Stripe Pyramid)
For CFO and Composite sites, structure content as:
1. **Emotional hook** (hero): Pain point → transformation promise
2. **Logical argument** (features): How it works, process, methodology
3. **Proof** (social proof): Results, testimonials, case studies, certifications
4. **Action** (CTA): Clear, low-friction next step

### Process Visualization for Manufacturing
Animated timelines showing fabrication/consultation steps convert better than static galleries:
```html
<div class="process-timeline">
  <div class="process-step reveal" data-step="1">
    <div class="step-number">01</div>
    <h3>Consultation</h3>
    <p>Initial assessment of your requirements</p>
  </div>
  <!-- Connect with animated SVG line -->
  <svg class="connector"><line x1="0" y1="50%" x2="100%" y2="50%" stroke-dasharray="5,5"/></svg>
  <div class="process-step reveal" data-step="2">
    <div class="step-number">02</div>
    <h3>Design</h3>
    <p>Custom engineering and specification</p>
  </div>
</div>
```
