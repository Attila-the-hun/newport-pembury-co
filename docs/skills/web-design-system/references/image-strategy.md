# AI Image Generation Strategy

Framework for generating professional website imagery using AI tools. Covers tool selection, prompt engineering, per-site image needs, and quality standards.

## Tool Comparison

### FLUX Pro (via Replicate API)
- **Best for**: Photorealistic product-adjacent imagery, textures, environments
- **Cost**: ~$0.05/image
- **Strengths**: Best photorealism, precise prompt following, consistent style
- **Use cases**: Carbon fibre textures, industrial environments, architectural renders, material close-ups
- **API**: replicate.com → black-forest-labs/flux-pro

### Midjourney v7
- **Best for**: Aesthetic lifestyle shots, mood imagery, aspirational visuals
- **Cost**: $30/month (Standard plan, ~200 images)
- **Strengths**: Beautiful composition, cinematic lighting, consistent aesthetic
- **Use cases**: CFO lifestyle imagery, office environments, professional settings, home interiors
- **Access**: discord.com/midjourney or midjourney.com

### Ideogram 3.0
- **Best for**: Images containing text, badges, infographics, data visuals
- **Cost**: $8-20/month
- **Strengths**: Accurate text rendering in images, graphic design style
- **Use cases**: Trust badges, certification visuals, process diagrams, branded graphics

### Leonardo AI
- **Best for**: Consistent series of images in the same style
- **Cost**: Free tier (150 tokens/day), $12/month
- **Strengths**: Style consistency across batches, fine-tuning capability
- **Use cases**: Icon sets, feature illustrations, consistent product lineup images

### Recraft v3
- **Best for**: Vector-style illustrations and icons
- **Cost**: Free tier available, $20/month
- **Strengths**: Clean vector output, brand-consistent illustrations
- **Use cases**: Feature icons, process illustrations, decorative elements

---

## Per-Site Image Needs

### Fractional CFO Consulting (~15-20 images)

**ANTI-PATTERN WARNING:** Do NOT use stock cityscapes, skylines, handshake photos, or generic office imagery. These are the most overused images on consulting templates and damage credibility with sophisticated B2B audiences. See v0-design-workflow skill for full rationale.

**Hero approach**: Clean CSS gradient (e.g., `linear-gradient(145deg, #1a2a3a 0%, #2C3E50 40%, #1e3344 70%, #162636 100%)`) with abstract SVG geometric composition or professional headshot. No stock photography.

**AI-Generatable (limited use)**:
- Section backgrounds: Abstract geometric patterns, fine-line topographic grids
- Blog post headers: Conceptual data/chart visualisations (abstract, not photorealistic)
- Texture overlays: Subtle noise, grain, or paper textures for depth

**Must Be Real**:
- Headshot (professional portrait of Tim) — this is the single most important image
- Office/workspace photo (if available)
- Client logos (provided by clients, with permission)

**Prompt Template (CFO - abstract only)**:
```
Abstract geometric composition, intersecting lines and circles suggesting
financial architecture, navy and charcoal palette with subtle gold accents,
minimal, clean, professional, no text, no people, blueprint aesthetic
--style raw --ar 16:9
```

### Composite Materials (~35-50 images)

**AI-Generatable (60%)**:
- Hero background: Abstract composite material textures, carbon fibre weave patterns
- Section backgrounds: Manufacturing facility environments (generic)
- Feature visuals: Material property diagrams, cross-section illustrations
- Process timeline: Step-by-step manufacturing visualizations
- Texture overlays: Carbon fibre, Kevlar, fiberglass patterns

**Must Be Real (40%)**:
- Actual products and finished parts
- Real facility/factory photos
- Team and equipment photos
- Certification and testing images
- Customer application photos

**Prompt Template (Composite)**:
```
Industrial photography, [subject], carbon fibre texture, dark moody
lighting with rim highlights, macro detail, metallic sheen,
manufacturing environment, 16:9 --style raw --ar 16:9
```

### Carbon Fibre Garage Doors (~40-55 images)

**AI-Generatable (50%)**:
- Hero: Beautiful home exterior with garage, driveway, landscaping
- Lifestyle: Homes at different times of day (dawn, dusk, night lighting)
- Interior views: Garage interior with luxury vehicle
- Neighborhood contexts: Suburban, modern, traditional home styles
- Material textures: Carbon fibre weave close-ups

**Must Be Real (50%)**:
- Actual product photos (doors open, closed, detail shots)
- Installation process photos
- Before/after comparisons
- Hardware and mechanism details
- Color/finish options

**Prompt Template (Garage Doors)**:
```
Architectural photography, luxury home exterior with [style] garage door,
[time of day] lighting, manicured landscaping, professional real estate
photography style, high dynamic range, 16:9 --style raw --ar 16:9
```

### Carbon Fibre Curtain Rods & Rails (~45-60 images)

**AI-Generatable (55%)**:
- Hero: Elegant room interior with floor-to-ceiling drapes
- Room settings: Living room, bedroom, dining room, office contexts
- Lifestyle: Warm, inviting interior design scenes
- Detail shots: Light filtering through curtains
- Interior design styles: Modern, transitional, contemporary, classic

**Must Be Real (45%)**:
- Actual rod/rail product photos (individual pieces, sets)
- Bracket and hardware detail shots
- Installation detail photos
- Finish/color comparison shots
- Curtain and rod together in real settings

**Prompt Template (Curtain Rods)**:
```
Interior design photography, [room type] with elegant floor-length drapes,
natural light streaming through windows, warm earth tones, editorial style,
shallow depth of field on curtain hardware, 16:9 --style raw --ar 16:9
```

---

## AI vs Real Decision Framework

### Always Use AI For:
- Abstract backgrounds and textures
- Atmospheric/mood imagery
- Conceptual illustrations
- Section dividers and decorative elements
- Blog/article header images
- Pattern overlays
- Generic environment shots

### Always Use Real Photography For:
- Actual products being sold
- People's faces (headshots, team photos)
- Specific certifications and awards
- Customer testimonials with photos
- Before/after comparisons
- Detailed product specifications
- Anything the customer expects to see "as purchased"

### Hybrid Approach:
- Real product in AI-generated environment (composite photography)
- Real headshot with AI-generated background
- Real product photos enhanced with AI upscaling

---

## Prompt Engineering Best Practices

### Structure
```
[Subject], [style], [lighting], [mood/tone], [technical specs], [aspect ratio]
```

### Quality Modifiers
- Add: `professional photography`, `editorial quality`, `high-end`, `commercial grade`
- Add: `shallow depth of field` for product focus
- Add: `natural lighting` or `studio lighting` for realism
- Add: `--style raw` (Midjourney) for photorealism over artistic interpretation

### Consistency Modifiers
For a cohesive site, maintain across all prompts:
- Same color temperature (warm/cool/neutral)
- Same lighting style
- Same mood keywords
- Same aspect ratio per use case

### Aspect Ratios by Use Case
- **Hero images**: 16:9 (desktop), 4:3 (tablet), 3:4 or 1:1 (mobile)
- **Card thumbnails**: 16:9 or 3:2
- **Testimonial avatars**: 1:1
- **Product shots**: 4:3 or 1:1
- **Blog headers**: 16:9 or 2:1

---

## Post-Processing Pipeline

### Step 1: Generate
Use appropriate AI tool at highest available resolution.

### Step 2: Upscale (if needed)
- Topaz Gigapixel AI: Best quality, $99 one-time
- LetsEnhance.io: Good web option, $12/month
- Real-ESRGAN: Free, open-source, excellent results

### Step 3: Format
- Convert to WebP for web delivery
- Generate responsive sizes: 640w, 1024w, 1536w
- Use `optimize_images.sh` from html-tailwind-builder skill

### Step 4: Color Grade
Apply consistent color grading to match brand palette:
- Use same Lightroom preset or CSS filter across all images
- Ensure consistent color temperature, contrast, saturation

### Step 5: Quality Check
- Verify no AI artifacts (extra fingers, text gibberish, impossible geometry)
- Check that style matches existing real photography
- Confirm minimum resolution for intended display size
- Test on both light and dark backgrounds

---

## Cost Comparison

### AI-Generated Approach
- Midjourney Standard: $30/month (build phase)
- FLUX Pro via API: ~$20-40 for batch generation
- Upscaling tools: $12-15/month
- **Total for all 4 sites**: ~$85-135/month during build phase
- **Total project estimate**: $200-400

### Traditional Photography
- Product photography: $2,000-5,000 per site
- Lifestyle/environment: $3,000-10,000 per site
- Post-production: $500-2,000 per site
- **Total for all 4 sites**: $20,000-50,000+

### Savings: 95-99% cost reduction with AI approach

---

## Implementation Order

1. **CFO Site (First)**:
   - Generate hero and section backgrounds with Midjourney
   - Get professional headshot taken (the one real photo needed)
   - Create financial/business conceptual imagery with FLUX Pro
   - Generate blog header template images

2. **Composite Site (Second)**:
   - Generate carbon fibre textures and material patterns
   - Photograph real products and facility (coordinate with team)
   - Create process timeline illustrations
   - Generate atmospheric industrial backgrounds

3. **Garage Doors (Third)**:
   - Photograph all door products and finishes
   - Generate home exterior lifestyle contexts
   - Create installation process visuals
   - Generate architectural environment shots

4. **Curtain Rods (Fourth)**:
   - Photograph all rod/rail products and hardware
   - Generate interior design room settings
   - Create styled room scenes with Midjourney
   - Generate detail and lifestyle shots
