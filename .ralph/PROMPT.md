# Task: Build "The Wine Market" Website

## Overview
Build a polished wine e-commerce/showcase website using Next.js (App Router, latest version). This is a personal project for Wesley.

## Base Template
Use the following HTML as design inspiration for the visual language, color palette, typography, and overall aesthetic. Convert it into a proper Next.js site with multiple pages.

### Design Language (from template)
- **Color palette:** Warm cream (#f7f4ef, #fffdf9), burgundy/wine red (#7a1f2a, #b73447, #c63a4b), earthy tones (#6a5b4d, #8b7765, #cdbca8), olive accents (#8aa65a)
- **Typography:** 'Cormorant Garamond' (serif, for headings) + 'Inter' (sans-serif, for body)
- **Visual style:** Rounded corners (32px shells), soft shadows, radial gradient accents, cream/warm backgrounds, luxury feel without being stuffy
- **Brand name:** "The Wine Market" with overlapping TWM monogram logo
- **Overall vibe:** Premium but approachable, European wine shop aesthetic

### HTML Template Reference
```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>The Wine Market</title>
 <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body style="margin:0; background:#f7f4ef; color:#1f1b18; font-family: Inter, sans-serif; padding:40px;">
<!-- Hero section with overlapping TWM monogram, wine-red brand, cream gradients -->
<!-- Grid layout: hero copy left, visual right -->
<!-- CTA buttons: primary (wine gradient), secondary (outlined) -->
<!-- Badge pills, eyebrow text, serif headings -->
</body>
</html>
```

## Requirements

### Tech Stack
- **Next.js** (latest, App Router)
- **Tailwind CSS** for styling
- **TypeScript**
- Google Fonts: Cormorant Garamond + Inter

### Pages to Build
1. **Home** — Hero section (based on template), featured wines section, about teaser, newsletter signup
2. **Shop/Collection** — Wine grid with filters (red, white, rosé, sparkling), sort by price/name, card layout
3. **Wine Detail** — Individual wine page with tasting notes, pairing suggestions, price, add to cart placeholder
4. **About** — Story of The Wine Market, philosophy, sourcing approach
5. **Contact** — Contact form, location/hours placeholder, embedded map placeholder

### Components
- Header/Navigation (responsive, mobile hamburger menu)
- Footer (links, newsletter, social icons)
- Wine card component (image placeholder, name, region, price, varietal badge)
- Hero section (matching template style)
- Section dividers with the warm gradient style
- Newsletter signup section
- Testimonial/review section on homepage

### Wine Data
Create a mock data file (`data/wines.ts`) with ~12 wines:
- Mix of red, white, rosé, and sparkling
- Include: name, region, country, varietal, year, price, tasting notes, food pairings, image placeholder
- Use realistic wine names and regions (Bordeaux, Tuscany, Napa Valley, Burgundy, Rioja, etc.)

### Design Details
- Fully responsive (mobile-first)
- Smooth page transitions
- The TWM overlapping monogram logo from the template
- Wine-red accent color for CTAs and highlights
- Cream/warm white backgrounds
- Subtle gradient accents (like the template's radial gradients)
- Clean, airy layout with generous whitespace

### Deployment
- Initialize git repo
- Create GitHub repo under `clawd-bots` org: `clawd-bots/wine-market`
- Deploy to Vercel under scope `clawd-bots-58eef3b4`
- Production URL should work

### DO NOT
- Do not add actual e-commerce/payment functionality
- Do not use any paid APIs
- Do not add authentication
- Keep it simple but polished

When completely finished, run: openclaw system event --text "Done: Wine Market website built and deployed to Vercel. Production URL included in output." --mode now

If you encounter an unrecoverable error, run: openclaw system event --text "Failed: Wine Market build - <what went wrong>" --mode now
