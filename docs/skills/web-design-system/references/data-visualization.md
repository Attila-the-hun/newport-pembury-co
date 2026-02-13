# Data Visualization Reference

Comprehensive guide for creating brand-consistent charts, illustrations, and visual assets for professional business websites. Covers static chart generation, OG images, SVG illustrations, and integration patterns.

## Static Chart Generation with Matplotlib

### Why Static Images Over JavaScript Charts

Static charts (SVG/PNG) are preferred for published content over JavaScript-based visualization libraries for four key reasons:

1. **Performance & Core Web Vitals**: Static images load synchronously without JavaScript parsing, reducing Largest Contentful Paint (LCP) and maintaining <2.5s page load targets. No render-blocking JavaScript dependencies.

2. **Search Engine Optimization**: Content in images isn't directly crawleable by search engines for text content, but static charts as part of article assets improve page load metrics that directly impact SEO rankings. SVG charts with embedded metadata are more friendly to indexing than Canvas-rendered charts.

3. **Zero JavaScript Dependency**: Articles remain functional even when JavaScript fails or is disabled. Static images degrade gracefully across all browsers and network conditions.

4. **Consistent Rendering**: Static charts render identically across all users, eliminating browser-specific rendering variations or data manipulation bugs in client-side charting libraries.

### Brand Theming Constants

All charts use the following brand color palette (Newport Pembury & Co case study):

```python
# Primary Colors
CHARCOAL = '#2C3E50'           # Main background
CHARCOAL_DARK = '#1a2a3a'      # Dark emphasis backgrounds
CHARCOAL_LIGHT = '#34495E'     # Lighter variation
GOLD = '#D4AF37'               # Primary data color, accents
GOLD_DIM = '#B8960C'           # Secondary data color

# Supporting Colors
WHITE = '#FFFFFF'              # Text on dark backgrounds
WHITE_80 = '#CCCCCCcc'         # 80% white opacity
WHITE_50 = '#FFFFFF80'         # 50% white opacity
WHITE_30 = '#FFFFFF4D'         # 30% white opacity
GRAY_LIGHT = '#f8f9fa'         # Light background (timelines)
GRAY_TEXT = '#888888'          # Secondary text
BODY_TEXT = '#555555'          # Tertiary text
```

### Typography Stack

```python
# Font families (set in rcParams)
plt.rcParams['font.family'] = 'Lato'      # Body text, labels
# DejaVu Serif for headers and values (serif elegance)
fontfamily='DejaVu Serif' for titles, value labels
fontfamily='Lato' for axis labels, annotations
```

- **Headers/Titles**: DejaVu Serif, 13px, bold, 6-8pt line height
- **Value Labels**: DejaVu Serif, 16px, bold (on emphasis charts)
- **Axis Labels**: Lato, 11px, regular weight
- **Annotations/Subtitles**: Lato, 9px, regular weight
- **Source Attribution**: Lato, 7px, 30% opacity

### Standard Chart Types

#### 1. Horizontal Bar Chart (Comparative Data)

**Use Case**: Compare metrics across categories (e.g., valuation multiples by preparation level)

**Specifications**:
- **Figure Size**: 8" × 4.2" (landscape, readable in articles)
- **Bar Height**: 0.55 units
- **Color Gradient**: From transparent white (unprepared) to solid gold (prepared)
- **Background**: CHARCOAL_DARK (#1a2a3a)
- **Value Labels**: Positioned right-aligned at bar end, DejaVu Serif 16px bold
- **Annotations**: Centered inside bars in faint white (60% opacity)

**Pattern**:
```python
fig, ax = plt.subplots(figsize=(8, 4.2))
fig.patch.set_facecolor(CHARCOAL_DARK)
ax.set_facecolor(CHARCOAL_DARK)

# Horizontal bars with gradient colors
colors = ['#ffffff20', '#D4AF3760', GOLD]  # Progression from faint to vivid
bars = ax.barh(categories, values, height=0.55, color=colors, edgecolor='none')

# Add value labels
for bar, val in zip(bars, values):
    ax.text(bar.get_width() + 0.15, bar.get_y() + bar.get_height()/2,
            f'{val}x', va='center', ha='left',
            fontsize=16, fontweight='bold', color=GOLD,
            fontfamily='DejaVu Serif')

# Remove visual chrome
ax.xaxis.set_visible(False)
for spine in ax.spines.values():
    spine.set_visible(False)

# Add gold accent line
ax.axhline(y=-0.55, color=GOLD, linewidth=1, alpha=0.3, xmin=0, xmax=1)
```

#### 2. Timeline Chart (Process/Sequential Data)

**Use Case**: Show phased processes with timeline (e.g., M&A preparation phases over 24 months)

**Specifications**:
- **Figure Size**: 8" × 3.8" (landscape, generous spacing)
- **Background**: GRAY_LIGHT (#f8f9fa) for lighter tone
- **Phase Boxes**: FancyBboxPatch with rounded corners (pad=0.05)
- **Color Progression**: Gold gradient from 30% opacity (foundation) to 100% opacity (deal-ready)
- **Timeline Arrow**: Horizontal line with marker dots, bottom-aligned
- **Typography**: Headers in DejaVu Serif bold, sublabels in Lato 7.5pt regular

**Pattern**:
```python
fig, ax = plt.subplots(figsize=(8, 3.8))
fig.patch.set_facecolor(GRAY_LIGHT)
ax.set_facecolor(GRAY_LIGHT)

# Phase data
phases = [
    {'start': 24, 'end': 18, 'label': 'Foundation', 'sublabel': 'Clean-up & systems',
     'color': GOLD + '30', 'text_color': CHARCOAL},
    # ... more phases
]

# Draw timeline phases
for phase in phases:
    width = phase['start'] - phase['end']
    x_start = phase['end']
    rect = mpatches.FancyBboxPatch(
        (x_start, y_bar - bar_height/2), width, bar_height,
        boxstyle="round,pad=0.05",
        facecolor=phase['color'], edgecolor='none'
    )
    ax.add_patch(rect)

    # Labels
    mid_x = x_start + width / 2
    ax.text(mid_x, y_bar + 0.08, phase['label'],
            ha='center', va='center', fontsize=10, fontweight='bold',
            color=phase['text_color'], fontfamily='DejaVu Serif')
    ax.text(mid_x, y_bar - 0.18, phase['sublabel'],
            ha='center', va='center', fontsize=7.5,
            color=phase['text_color'] + '99', fontfamily='Lato')

# Timeline arrow and markers
ax.annotate('', xy=(-0.5, -0.35), xytext=(24.5, -0.35),
           arrowprops=dict(arrowstyle='->', color=CHARCOAL + '40', lw=1.2))

# Month markers (highlighted at Deal Day)
for m in months:
    color = GOLD if m == 0 else CHARCOAL + '40'
    markersize = 5 if m == 0 else 3
    ax.plot(m, -0.35, 'o', color=color, markersize=markersize, zorder=5)
```

#### 3. Donut/Ring Chart (Composition Data)

**Use Case**: Show part-to-whole relationships (e.g., deal readiness breakdown, revenue segments)

**Specifications**:
- **Figure Size**: 6" × 6" (square format)
- **Ring Width**: 0.35 of radius (not full donut)
- **Colors**: GOLD for primary, white variants for secondary, gray for inactive
- **Center Text**: Large percentage in white, label in smaller gray text
- **Legend**: Outside ring, aligned to categories

**Pattern**:
```python
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_facecolor(CHARCOAL_DARK)

# Donut chart
wedges, texts, autotexts = ax.pie(
    values, labels=labels, colors=colors,
    wedgeprops=dict(width=0.35, edgecolor='none'),
    startangle=90, counterclock=False
)

# Center text
centre_circle = plt.Circle((0,0), 0.65, fc=CHARCOAL_DARK, edgecolor='none')
ax.add_artist(centre_circle)

ax.text(0, 0.15, 'percentage', ha='center', va='center',
        fontsize=48, fontweight='bold', color=GOLD, fontfamily='DejaVu Serif')
ax.text(0, -0.15, 'label', ha='center', va='center',
        fontsize=12, color=WHITE_50, fontfamily='Lato')
```

#### 4. Comparison Chart (Side-by-Side Metrics)

**Use Case**: Compare before/after or two scenarios (e.g., prepared vs unprepared valuations)

**Specifications**:
- **Figure Size**: 8" × 5"
- **Layout**: Two bar groups side-by-side with labeled categories below
- **Color Pair**: GOLD for primary, WHITE_50 for secondary
- **Data Labels**: Positioned above bars, bold white text

**Pattern**:
```python
# Side-by-side grouped bars
x = np.arange(len(categories))
width = 0.35

bars1 = ax.bar(x - width/2, values1, width, label='Metric 1', color=GOLD)
bars2 = ax.bar(x + width/2, values2, width, label='Metric 2', color=WHITE_50)

# Value labels above bars
for bar in bars1:
    height = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2., height,
            f'{height:.1f}', ha='center', va='bottom',
            fontsize=11, color=GOLD, fontweight='bold', fontfamily='DejaVu Serif')
```

### Output Formats

#### SVG (Primary)

**Advantages**:
- Infinitely scalable without quality loss
- Crisp on any screen density (1x, 2x retina)
- Smaller file size than PNG for simple charts (typically 40-60% smaller)
- Can be embedded inline in HTML or served as image file
- Supports hover interactions with CSS/JS if needed

**Matplotlib Export**:
```python
output_path = '/path/to/chart-{descriptive-name}.svg'
fig.savefig(output_path, format='svg', facecolor=CHARCOAL_DARK,
            edgecolor='none', bbox_inches='tight', dpi=150)
```

#### PNG (Fallback)

**Advantages**:
- Universal browser support (older browsers)
- Smaller perceived file size for end users
- Good for email and messaging
- 200 DPI for retina-quality printing

**Matplotlib Export**:
```python
output_path = '/path/to/chart-{descriptive-name}.png'
fig.savefig(output_path, format='png', facecolor=CHARCOAL_DARK,
            edgecolor='none', bbox_inches='tight', dpi=200)
```

**Generation Pattern**: Generate both SVG and PNG from the same figure to ensure pixel-perfect consistency:
```python
# Export SVG
fig.savefig('chart.svg', format='svg', ...)
plt.close(fig)

# Recreate figure from scratch for PNG (to avoid Matplotlib format artifacts)
fig_png, ax_png = plt.subplots(...)
# ... redraw chart ...
fig_png.savefig('chart.png', format='png', dpi=200, ...)
plt.close(fig_png)
```

### File Naming Convention

All chart files follow this naming scheme:

**Pattern**: `chart-{descriptive-name}.svg` and `chart-{descriptive-name}.png`

**Examples**:
- `chart-valuation-multiples.svg`
- `chart-deal-timeline.svg`
- `chart-readiness-breakdown.svg`
- `chart-revenue-projection.svg`
- `chart-comparison-prepared-unprepared.svg`

**Storage**: Place in article-specific directories:
```
/insights/{article-slug}/chart-*.svg
/insights/{article-slug}/chart-*.png
```

---

## OG Image Generation with Pillow

Open Graph images are critical for social sharing and preview cards. Generate at exact dimensions with brand-consistent design.

### Standard Dimensions & Formats

- **Canvas Size**: 1200px × 630px (standard Open Graph dimensions)
- **Export Format**: JPEG at quality 92
- **Color Space**: RGB (convert from RGBA before save)
- **File Naming**: `og-image.jpg` or `og-image-{page-variant}.jpg`

### Brand Gradient Backgrounds

Use a diagonal gradient from top-left to bottom-right for depth without complexity.

**Gradient Pattern** (3-stop diagonal):
```python
from PIL import Image, ImageDraw

W, H = 1200, 630

# Define three charcoal tones
CHARCOAL_DARK = (26, 42, 58)      # #1a2a3a (top-left)
CHARCOAL_MID = (44, 62, 80)       # #2C3E50 (middle)
CHARCOAL_LIGHT = (30, 51, 68)     # #1e3344 (bottom-right)

# Create gradient by interpolating across x,y coordinates
for y in range(H):
    for x in range(W):
        # Diagonal gradient factor (weight towards x axis, lighter y axis contribution)
        t = (x / W * 0.6 + y / H * 0.4)

        if t < 0.35:
            # Interpolate from dark to mid
            ratio = t / 0.35
            r = int(CHARCOAL_DARK[0] + (CHARCOAL_MID[0] - CHARCOAL_DARK[0]) * ratio)
            g = int(CHARCOAL_DARK[1] + (CHARCOAL_MID[1] - CHARCOAL_DARK[1]) * ratio)
            b = int(CHARCOAL_DARK[2] + (CHARCOAL_MID[2] - CHARCOAL_DARK[2]) * ratio)
        elif t < 0.65:
            # Middle zone (solid mid tone)
            r, g, b = CHARCOAL_MID
        else:
            # Interpolate from mid to light
            ratio = (t - 0.65) / 0.35
            r = int(CHARCOAL_MID[0] + (CHARCOAL_LIGHT[0] - CHARCOAL_MID[0]) * ratio)
            g = int(CHARCOAL_MID[1] + (CHARCOAL_LIGHT[1] - CHARCOAL_MID[1]) * ratio)
            b = int(CHARCOAL_MID[2] + (CHARCOAL_LIGHT[2] - CHARCOAL_MID[2]) * ratio)

        img.putpixel((x, y), (r, g, b, 255))
```

### Typography Hierarchy

Three levels of typography create visual hierarchy:

**Level 1: Brand/Category Label** (12-14px, all-caps, gold)
- Location: Top of image (y: 120px)
- Font: Sans-serif bold (Lato)
- Color: GOLD (#D4AF37)
- Example: "FRACTIONAL CFO ADVISORY  ·  SYDNEY"

**Level 2: Main Headline** (48-52px, serif, white)
- Location: y: 170px
- Font: DejaVu Serif or equivalent, bold
- Color: WHITE (#FFFFFF)
- Style: Company/product name
- Accent: Gold ampersand (&) if part of name

**Level 3: Subheading/Tagline** (18-20px, sans-serif, 85% white)
- Location: y: 250px onwards (multiple lines)
- Font: Lato regular
- Color: WHITE (204 alpha for slight transparency)
- Content: 2-3 line descriptive tagline

**Secondary Details** (14px, sans-serif, 60% white)
- Location: Bottom of image (y: H - 45px)
- Font: Lato bold
- Color: WHITE (100 alpha, subtle)
- Content: Domain, credentials, or call-to-action

### Gold Accent Elements

Add subtle geometric gold elements for visual interest without clutter:

**Circle Accents** (top-right, bottom-left corners):
```python
from PIL import Image, ImageDraw
import math

overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)

# Large circle (top-right, partially off-canvas)
cx, cy, radius = W + 40, -40, 160
for angle in range(360 * 4):
    a = math.radians(angle / 4)
    x = int(cx + radius * math.cos(a))
    y = int(cy + radius * math.sin(a))
    if 0 <= x < W and 0 <= y < H:
        draw.point((x, y), fill=(212, 175, 55, 18))  # Gold at 7% opacity

# Smaller concentric circle
radius2 = 90
for angle in range(360 * 4):
    a = math.radians(angle / 4)
    x = int(cx - 40 + radius2 * math.cos(a))
    y = int(cy + 40 + radius2 * math.sin(a))
    if 0 <= x < W and 0 <= y < H:
        draw.point((x, y), fill=(212, 175, 55, 12))  # Gold at 5% opacity

# Bottom-left accent circle
cx2, cy2, radius3 = -30, H + 30, 120
for angle in range(360 * 4):
    a = math.radians(angle / 4)
    x = int(cx2 + radius3 * math.cos(a))
    y = int(cy2 + radius3 * math.sin(a))
    if 0 <= x < W and 0 <= y < H:
        draw.point((x, y), fill=(212, 175, 55, 14))  # Gold at 5.5% opacity

# Composite overlay onto base image
img = Image.alpha_composite(img, overlay)
```

**Gold Bottom Border** (3px line):
```python
# Draw 3px solid gold line at bottom edge
draw.rectangle([(0, H - 3), (W, H)], fill=GOLD)  # GOLD = (212, 175, 55)
```

**Separator Lines** (subtle, mid-opacity):
```python
# Thin line to separate sections
draw.line([(left_margin, y_sep), (left_margin + 500, y_sep)],
          fill=(212, 175, 55, 40), width=1)  # Gold at 15% opacity
```

### Complete Layout Template

```
┌─────────────────────────────────────────┐
│  BRAND LABEL · LOCATION  (Gold, 12px)  │ y=120
│                                         │
│  Company Name & Co                      │ y=170, 52px serif
│  Financial leadership for founders      │ y=250, 18px sans
│  scaling $5M to $50M.                   │
│                                         │
│  CA Qualified · 3 M&A Deals ·          │ y=390, 14px sans
│  $50M+ Deal Value · 20 Years            │ (credentials)
│                                         │
│═══════════════════════════════════════  │ Gold bar bottom
│                newportpembury.com.au    │ y=H-45, domain
└─────────────────────────────────────────┘
```

### JPEG Export Quality

```python
from PIL import Image

# Convert RGBA to RGB for JPEG
img_rgb = img.convert('RGB')

# Save with quality 92 (balances file size ~100-150KB)
output_path = '/path/to/og-image.jpg'
img_rgb.save(output_path, 'JPEG', quality=92)
```

---

## SVG Illustrations (Hand-Coded)

For smaller graphic assets and animated elements, hand-code SVG for maximum control and minimal file size.

### Inline SVG Icons for Cards/Features

**Use Case**: Small icons in feature cards, process steps, or benefit lists

**Specifications**:
- **ViewBox**: 40x40 (standardized coordinate space)
- **Stroke Width**: 1.5-2px for 40x40 box
- **Padding**: 4px internal margin (32x32 drawable area)
- **Inline Placement**: Embedded directly in HTML (no external file)

**Pattern**:
```svg
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <!-- Gold background circle -->
  <circle cx="20" cy="20" r="18" fill="#D4AF37" opacity="0.15"/>

  <!-- Icon content -->
  <g stroke="#D4AF37" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 10 20 L 16 26 L 30 12"/>
  </g>
</svg>
```

**CSS Sizing**:
```css
.icon-feature {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}
```

### Hero Background Patterns

Use subtle SVG patterns as hero background fills. Three primary types:

#### 1. Abstract Geometric Pattern (grid + circles)

**Purpose**: Add visual texture without competing with content

**Specifications**:
- **Opacity**: 0.03-0.05 (very faint)
- **Fill**: White or gold
- **Pattern Size**: 60-80px repeat
- **SVG Definition** (in <defs>):

```svg
<svg xmlns="http://www.w3.org/2000/svg" class="hero-pattern">
  <defs>
    <pattern id="geo-pattern" x="60" y="60" width="60" height="60" patternUnits="userSpaceOnUse">
      <!-- Grid lines -->
      <line x1="0" y1="0" x2="60" y2="0" stroke="white" stroke-width="0.5" opacity="0.04"/>
      <line x1="0" y1="0" x2="0" y2="60" stroke="white" stroke-width="0.5" opacity="0.04"/>

      <!-- Corner circles -->
      <circle cx="0" cy="0" r="2" fill="white" opacity="0.05"/>
      <circle cx="60" cy="60" r="2" fill="white" opacity="0.05"/>
      <circle cx="30" cy="30" r="1" fill="#D4AF37" opacity="0.03"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#geo-pattern)"/>
</svg>
```

**Application** (full-width hero):
```html
<style>
  .hero {
    background-image: url('data:image/svg+xml,...');
    background-size: 60px 60px;
    background-attachment: fixed;
  }
</style>
```

#### 2. Grid Lines Pattern

**Purpose**: Technical, minimal background for service/consulting sites

**Specifications**:
- **Line Weight**: 0.75px
- **Grid Size**: 40-50px
- **Opacity**: 0.06-0.08 (visible but not intrusive)
- **Color**: White or gold

```svg
<pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.75" opacity="0.08"/>
</pattern>
```

#### 3. Node Network Pattern (connected dots)

**Purpose**: Modern, connected appearance for tech/consulting

**Specifications**:
- **Node Radius**: 1.5-2px
- **Connection Lines**: 0.5px stroke
- **Spacing**: Random or semi-random placement
- **Opacity**: 0.04-0.08 nodes, 0.02-0.04 connections

```svg
<defs>
  <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
    <!-- Nodes -->
    <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.06"/>
    <circle cx="80" cy="40" r="1.5" fill="white" opacity="0.06"/>
    <circle cx="50" cy="70" r="1.5" fill="white" opacity="0.06"/>

    <!-- Connections -->
    <line x1="20" y1="20" x2="80" y2="40" stroke="white" stroke-width="0.5" opacity="0.03"/>
    <line x1="80" y1="40" x2="50" y2="70" stroke="white" stroke-width="0.5" opacity="0.03"/>
  </pattern>
</defs>
```

### Animated SVG (Donut Charts with IntersectionObserver)

Animate donut charts on scroll-into-view for dynamic engagement.

**HTML Structure**:
```html
<svg class="article-chart animated-donut" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#ffffff20" stroke-width="20"/>
  <circle class="donut-arc" cx="100" cy="100" r="80" fill="none"
          stroke="#D4AF37" stroke-width="20" stroke-dasharray="251 565"
          stroke-linecap="round" stroke-dashoffset="251"
          data-target-offset="125" data-duration="1200"/>

  <text x="100" y="110" text-anchor="middle" class="donut-percentage"
        font-size="24" font-weight="bold" fill="white">45%</text>
</svg>
```

**JavaScript Animation**:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      const arc = entry.target.querySelector('.donut-arc');
      const targetOffset = parseFloat(arc.dataset.targetOffset);
      const duration = parseFloat(arc.dataset.duration);

      // Animate stroke-dashoffset from full (hidden) to target (visible)
      arc.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      arc.style.strokeDashoffset = targetOffset;

      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.animated-donut').forEach(el => observer.observe(el));
```

**CSS Styling**:
```css
.animated-donut {
  max-width: 300px;
  height: auto;
}

.donut-arc {
  transition: stroke-dashoffset 1200ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: 100px 100px;
}
```

### Opacity Guidelines for SVG

Maintain visual hierarchy with consistent opacity:

**Backgrounds & Patterns**:
- Very Faint: 0.03-0.05 (geometric patterns, grid lines)
- Faint: 0.06-0.12 (node networks, subtle accents)

**Icons & Graphics**:
- Light/Secondary: 0.3-0.4 (disabled state, supporting icons)
- Normal: 0.6-0.8 (standard icons, borders)
- Strong: 0.9-1.0 (primary icons, emphasis elements)

**Text & Labels**:
- Disabled: 0.4 (placeholder text, inactive labels)
- Secondary: 0.6-0.7 (supporting text, captions)
- Primary: 0.9-1.0 (main text, headlines)

---

## Integration Patterns

### CSS Classes for Article Charts

Use consistent class naming to style all chart assets uniformly:

**Primary Class**: `.article-chart`
- Applied to all `<img>` elements displaying SVG/PNG charts
- Max-width: 680px (content column width)
- Margin: 32px auto (vertical spacing)
- Lazy loading enabled
- Dark mode variant available

**CSS Rules**:
```css
.article-chart {
  display: block;
  max-width: 680px;
  width: 100%;
  height: auto;
  margin: 32px auto;
  border-radius: 8px;
  loading: lazy;
}

.article-chart-dark {
  /* Applied to charts with charcoal backgrounds */
  background-color: #1a2a3a;
  padding: 16px;
  border-radius: 8px;
}

.article-chart-light {
  /* Applied to charts with light backgrounds */
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
}

@media (max-width: 640px) {
  .article-chart {
    max-width: 100%;
    padding: 0 16px;
    margin: 24px auto;
  }
}
```

### Lazy Loading with `loading="lazy"`

All chart images should use native lazy loading:

```html
<img src="chart-valuation-multiples.svg"
     alt="Valuation multiple comparison: unprepared business at 2.5x, partially prepared at 4.0x, deal-ready business at 6.5x valuation multiple"
     class="article-chart article-chart-dark"
     loading="lazy"
     width="680"
     height="363">
```

**Benefits**:
- Defers off-screen image loading until near viewport
- Improves Core Web Vitals (LCP)
- Zero JavaScript dependency
- Native browser support (100% modern browser coverage)

### Proper Alt Text for Data Charts

Data charts require descriptive alt text that communicates the data, not just "chart" or "graph."

**Format**: Summarize key data points, categories, and values

**Examples**:

Bad:
- "Chart showing valuations"
- "Timeline graphic"
- "Image of bars"

Good:
- "Valuation multiple comparison: unprepared business at 2.5x, partially prepared at 4.0x, deal-ready business at 6.5x valuation multiple"
- "M&A preparation timeline spanning 24 months: foundation phase months 24-18, analysis phase months 18-12, strategic phase months 12-6, deal-ready phase months 6-0"
- "Revenue segment breakdown: product sales 45%, services 35%, licensing 20%"

**Pattern** (table-like data):
```
[Chart Type]: [Category 1] [Value], [Category 2] [Value], [Category 3] [Value], etc.
```

**Pattern** (timeline/process):
```
[Process Name] timeline: [Phase 1] [duration], [Phase 2] [duration], ... [end point]
```

### Responsive Sizing

Charts should scale smoothly from mobile (320px) to desktop (1920px):

```html
<picture>
  <!-- Desktop-optimized SVG (crisp scaling) -->
  <source media="(min-width: 768px)"
          srcset="chart-valuation-multiples.svg"
          type="image/svg+xml">

  <!-- Mobile fallback (PNG for older browsers) -->
  <img src="chart-valuation-multiples.png"
       alt="Valuation multiple comparison..."
       class="article-chart article-chart-dark"
       loading="lazy"
       width="680"
       height="363">
</picture>
```

**CSS Responsive**:
```css
.article-chart {
  max-width: min(680px, 90vw);  /* Never exceed 680px, scale to 90vw if narrower */
  width: 100%;
  height: auto;
}

/* Tablet */
@media (max-width: 1024px) {
  .article-chart { max-width: 100%; }
}

/* Mobile */
@media (max-width: 640px) {
  .article-chart {
    max-width: calc(100vw - 32px);
    margin-left: 16px;
    margin-right: 16px;
  }
}
```

---

## Chart Design Principles

### Background Color Selection

Choose background color based on chart type and content emphasis:

**Dark Backgrounds (CHARCOAL #2C3E50, #1a2a3a)**
- Use for: Emphasis charts, data comparisons, financial metrics
- Advantages: Gold and white stand out dramatically, professional appearance
- Examples: Valuation multiple bars, key metric comparisons
- Text on dark: White (#FFFFFF) at 100% opacity for headlines, gold for values

**Light Backgrounds (GRAY_LIGHT #f8f9fa)**
- Use for: Timelines, processes, sequential data
- Advantages: Less aggressive visual tone, better for longer content
- Examples: Timeline phases, workflow diagrams, step-by-step processes
- Text on light: Charcoal (#2C3E50) for primary text, gray (#888888) for secondary

### Data Color Hierarchy

Gold as primary data color ensures brand consistency and visual emphasis:

**Color Progression** (from weak to strong emphasis):
1. WHITE_30 (#FFFFFF4D, 30% opacity) - Tertiary/background data
2. WHITE_50 (#FFFFFF80, 50% opacity) - Secondary/comparative data
3. WHITE_80 (#CCCCCCcc, 80% opacity) - Supporting data
4. GOLD (#D4AF37) - Primary/key data to emphasize

**Implementation in Bar Charts**:
```python
# Color gradient showing progression from unprepared to deal-ready
colors = [
    '#ffffff20',    # Very faint white (20% opacity) - unprepared
    '#D4AF3760',    # Semi-opaque gold (60% opacity) - partially prepared
    '#D4AF37'       # Solid gold (100% opacity) - deal-ready
]
bars = ax.barh(categories, values, color=colors, edgecolor='none')
```

### Minimal Axis Lines & Chrome

Remove unnecessary visual elements to reduce cognitive load:

```python
# Hide x-axis tick marks and labels
ax.xaxis.set_visible(False)

# Remove all spines (borders)
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove y-axis tick marks (keep labels only)
ax.tick_params(axis='y', colors=WHITE, labelsize=11)  # Labels visible
ax.tick_params(axis='x', colors='#ffffff30', labelsize=9)  # Hidden

# Replace with subtle accent line at bottom
ax.axhline(y=-0.55, color=GOLD, linewidth=1, alpha=0.3, xmin=0, xmax=1)
```

**Result**: Clean, modern appearance with gold accent replacing traditional frame

### Source Attribution

Always credit data sources at chart bottom-right:

**Format**: `[Company/Source] · [Disclaimer if needed]`

```python
# Bottom-right attribution
fig.text(0.98, 0.02, 'Newport Pembury & Co  ·  Illustrative only',
         fontsize=7, color='#ffffff30', ha='right', fontfamily='Lato')
```

**Examples**:
- "Newport Pembury & Co · Illustrative only"
- "Industry Data 2024 · Based on 150+ company analysis"
- "Newport Pembury & Co · Case study from April 2024 transaction"

**Styling**:
- Font: Lato (sans-serif) 7px
- Color: 30% white opacity (#ffffff30) on dark, gray on light (#888888cc)
- Position: Bottom-right corner, 16px margin from edges
- Alignment: Right-aligned (ha='right')

---

## Quick Reference Checklist

When creating data visualizations:

- [ ] Use SVG primary format (PNG fallback)
- [ ] Apply brand colors (Charcoal backgrounds, Gold accents)
- [ ] Use DejaVu Serif for headers, Lato for body
- [ ] Choose background color based on content (dark for emphasis, light for processes)
- [ ] Name files `chart-{descriptive-name}.svg`
- [ ] Generate 1200x630px OG images in JPEG quality 92
- [ ] Include source attribution (bottom-right, 7px, low opacity)
- [ ] Add descriptive alt text for all chart images
- [ ] Apply `.article-chart` CSS class and `loading="lazy"`
- [ ] Keep max-width to 680px for article content
- [ ] Remove unnecessary axes and borders (minimal chrome)
- [ ] Use gold as primary data color (#D4AF37)
- [ ] Test responsive sizing from 320px to 1920px
- [ ] For SVG patterns, use opacity 0.03-0.12
- [ ] For SVG icons, use 40x40 viewBox
- [ ] Animate on-scroll with IntersectionObserver + CSS transitions

