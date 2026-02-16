# WCAG 2.2 AA Compliance Reference

Accessibility checklist for professional business websites targeting WCAG 2.2 Level AA.

## Color Contrast Requirements

### Text Contrast (4.5:1 WCAG AA)
- Apply to body text (16px or smaller)
- Body on background: 4.5:1 minimum
- Small text on background: 4.5:1 (no exception)
- Test with WebAIM Contrast Checker

### Large Text Contrast (3:1 WCAG AA)
- Apply to text 18px+ and font-weight 700+
- Apply to text 14px+ and font-weight 900+
- Large text on background: 3:1 minimum
- Headings and hero text qualify

### UI Component Contrast (3:1 WCAG AA)
- Button borders: 3:1 against background
- Focus indicators: 3:1 against background
- Icon colors: 3:1 if conveying information
- Disabled state: may be lighter if clearly disabled

### Implementation
```css
/* Use accessible color combinations */
--color-text-dark: #1A1A2E; /* 15:1 on white */
--color-text-light: #FAFAFA; /* 15.2:1 on navy */
--color-primary: #1B3A6B; /* 8.5:1 on white */
--color-error: #DC3545; /* 5.3:1 on white */
```

Test with: WebAIM, Contrast Ratio, WCAG Color Contrast Analyzer

## Keyboard Navigation

### Tab Order Requirements
- All interactive elements reachable via Tab key
- Logical, predictable tab order (left-to-right, top-to-bottom)
- Do not use positive tabindex (avoid tabindex="1", use tabindex="0" or tabindex="-1")
- Skip links for navigation: <a href="#main" class="skip-link">Skip to main content</a>

### Focus Indicators
- **Visible at all times**: outline 2px solid (brand color, NOT browser default blue)
- **Offset**: 2px minimum offset from element
- **High Contrast**: focus indicator 3:1 against background
- **Not Hidden**: no outline: none; without replacement
- **Color Options**: use outline, box-shadow, or border
- **Keyboard Only**: :focus-visible for keyboard focus (outline: 2px)
- **Brand-matched**: Use `var(--color-focus)` token (gold for CFO brand). Browser default blue focus rings are a brand inconsistency — always override with a semantic token.

### Keyboard Interactions
- **Enter/Space**: activate buttons and links
- **Arrow Keys**: navigate tabs, dropdowns, autocomplete
- **Escape**: close modals, dropdowns, menus
- **Tab**: move forward through focusable elements
- **Shift+Tab**: move backward through focusable elements

### Focusable Elements
- Links: <a href="#">text</a>
- Buttons: <button>text</button>
- Inputs: <input>, <textarea>, <select>
- Custom buttons: <div role="button" tabindex="0">
- Avoid: divs and spans (use semantic elements)

### Implementation
```css
/* Keyboard focus styles */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Visible focus for all interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

## Semantic HTML Elements

### Structural Elements
- **<header>**: page or section header (logo, nav)
- **<nav>**: navigation menu (main nav, footer nav)
- **<main>**: main content (one per page)
- **<article>**: self-contained content
- **<section>**: thematic grouping
- **<aside>**: tangential content (sidebar)
- **<footer>**: page or section footer

### Text Elements
- **<h1>**: page title (one per page)
- **<h2>-<h6>**: section headings (logical nesting)
- **<p>**: paragraph text
- **<strong>**: strong importance (not <b>)
- **<em>**: emphasis (not <i>)
- **<blockquote>**: quoted text

### Form Elements
- **<label>**: associate text with input
- **<input>**: form field with type="text|email|tel|etc"
- **<button>**: clickable action (not <div>)
- **<fieldset>**: group related inputs
- **<legend>**: label for fieldset

### Avoid Non-Semantic
- Do not use <div> for buttons (use <button>)
- Do not use <span> for headings (use <h1>-<h6>)
- Do not use <img> alone for links (wrap in <a>)
- Do not nest buttons or interactive elements

## ARIA Attributes Quick Reference

Use ARIA only when semantic HTML insufficient.

### Landmarks
- `role="main"`: main content area
- `role="navigation"`: navigation region
- `role="banner"`: page header/masthead
- `role="contentinfo"`: page footer
- `role="region"`: generic region (requires aria-label)
- `role="complementary"`: sidebar/related content

### Form & Input
- `aria-label="Search"`: accessible name for input
- `aria-labelledby="id"`: reference label element by ID
- `aria-describedby="id"`: additional description
- `aria-invalid="true"`: invalid input (with aria-describedby error)
- `aria-required="true"`: required field (redundant with required attribute)

### Button & Link
- `aria-label="Close menu"`: for icon-only buttons
- `aria-expanded="true|false"`: expand/collapse state
- `aria-haspopup="true"`: button opens menu/dialog
- `aria-pressed="true|false"`: toggle button state
- `aria-controls="id"`: button controls element

### Content Updates
- `role="status"`: status message (polite)
- `role="alert"`: error/urgent message (assertive)
- `aria-live="polite|assertive"`: announce changes
- `aria-atomic="true"`: announce entire region

### Dialog & Modal
- `role="dialog"`: modal dialog (use <dialog>)
- `aria-modal="true"`: modal overlay
- `aria-labelledby="id"`: dialog title (required)
- `aria-describedby="id"`: dialog description

## Image Alt Text Rules

### Alt Text Requirements
- Every <img> has alt="" attribute
- Descriptive, concise content (under 125 characters)
- Avoid "image of" or "picture of" prefix
- Include relevant context and information
- Decorative images: alt="" (empty)
- Functional images: describe function, not appearance

### Alt Text Examples

Good:
- "Composite carbon fiber material sample"
- "Financial analysis dashboard showing quarterly growth"
- "Sarah Chen, CFO consultant with 15 years experience"

Bad:
- "Image of composite material"
- "Dashboard"
- "Woman in business suit"
- "Photo" (too vague)

### Decorative Images
```html
<!-- Decorative: empty alt -->
<img src="decorative-line.png" alt="">

<!-- Functional: describe purpose -->
<img src="pdf-icon.png" alt="Download report as PDF">

<!-- Data visualization: describe data -->
<img src="chart.png" alt="Revenue increased 45% year-over-year">
```

## Form Accessibility Checklist

- [ ] Every input has <label for="id"> associated
- [ ] Label positioned before or beside input
- [ ] Required fields marked with aria-required="true"
- [ ] Input type="email" for email (mobile keyboard)
- [ ] Input type="tel" for phone (numeric keyboard)
- [ ] Error messages linked via aria-describedby
- [ ] Success state indicated with aria-invalid="false"
- [ ] Form instructions before form element
- [ ] Fieldset + legend for grouped inputs
- [ ] Submit button clearly labeled
- [ ] Tab order is logical
- [ ] No required symbols only (must label "Required")
- [ ] Placeholder text is not substitute for label

## Heading Hierarchy Rules

### H1 Usage
- **One H1 per page**: main page title
- **Never skip levels**: H1 to H3 invalid (skip H2)
- **Location**: first heading on page (after header)
- **Content**: page topic, not site/app name

### Heading Structure
```html
<h1>Main Page Title</h1>
<h2>Section One</h2>
<h3>Subsection One-A</h3>
<h3>Subsection One-B</h3>
<h2>Section Two</h2>
<h3>Subsection Two-A</h3>
```

### Avoid
- Multiple H1 elements (use one H1, multiple H2)
- Skipping levels (H1, H3, H2 invalid)
- Using headings for formatting (use CSS for styling)
- Heading text that repeats (each heading unique)

## Reduced Motion Support

### CSS Implementation
```css
/* Default animation */
button {
  transition: transform 200ms ease;
}

button:hover {
  transform: scale(1.05);
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  button {
    transition: none;
  }
  
  button:hover {
    transform: none;
  }
}
```

### Media Query
- **prefers-reduced-motion: reduce**: disable animations
- Apply to all animations and transitions
- Test: System Preferences (macOS) or Settings (Windows)

## Color Scheme Preference

### CSS Implementation
```css
/* Light theme (default) */
body {
  background-color: white;
  color: #1A1A2E;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1A1A2E;
    color: #FAFAFA;
  }
}
```

### Theme Application
- Provide both light and dark themes
- Detect with prefers-color-scheme
- Allow manual override (theme toggle)
- Test contrast in both modes
- Use CSS custom properties for easy switching

## Touch Target Sizing

### Minimum Sizes
- **44x44px**: button, link, input, icon button
- **48x48px**: recommended (Apple, Google standard)
- **50x50px**: ideal for forms on mobile
- **Spacing**: 8-16px minimum between targets

### Implementation
```css
button {
  min-width: 120px;
  min-height: 44px;
  padding: 12px 24px;
}

a {
  min-height: 44px;
  display: inline-block;
  padding: 8px 12px;
}
```

## Testing Tools & Checklist

### Automated Testing
- **Axe DevTools**: Chrome extension, comprehensive audits
- **WAVE**: WebAIM extension, detailed reporting
- **Lighthouse**: Chrome DevTools, accessibility audit
- **Color Contrast Analyzer**: WebAIM tool, color testing
- **Contrast Ratio**: Leaverou tool, quick contrast check

### Manual Testing
- [ ] Keyboard navigation (Tab through page)
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Color contrast (all text and UI)
- [ ] Focus indicators (visible on all interactive elements)
- [ ] Form labels (associated with inputs)
- [ ] Image alt text (all images have alt)
- [ ] Heading hierarchy (logical nesting, one H1)
- [ ] Mobile touch targets (44px minimum)
- [ ] Reduced motion (animations disabled)
- [ ] Color scheme (dark mode works)

### Screen Reader Testing
- **NVDA**: Windows free screen reader
- **JAWS**: Windows commercial
- **VoiceOver**: macOS and iOS (built-in)
- **TalkBack**: Android (built-in)
- Test headings, landmarks, form labels, alt text

### Testing Sites
- [WebAIM](https://webaim.org/)
- [W3C WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)
- [Deque University](https://dequeuniversity.com/)
- [A11ycasts](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvsPrq_6s)

### Quick Audit Checklist
- [ ] WAVE: 0 errors
- [ ] Axe DevTools: 0 critical/serious
- [ ] Lighthouse Accessibility: 90+
- [ ] Keyboard navigation: 100% functional
- [ ] Focus indicators: visible on all elements
- [ ] Color contrast: 4.5:1 minimum body text
- [ ] Semantic HTML: valid, no role abuse
- [ ] Forms: all inputs have labels
- [ ] Images: all have descriptive alt text

---

Implement accessibility incrementally. Start with semantic HTML, focus indicators, and color contrast. Test with both automated tools and manual testing (keyboard, screen reader).
