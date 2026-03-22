# Additional Template CSS — Bottle & Product Styling

These CSS styles from the original template should be incorporated into the Next.js build. They define the hero bottle visuals and product card/sparkling section designs.

## Hero Visual & Bottles
```css
.hero-visual::before { content:''; position:absolute; inset:20px; border-radius:28px; border:1px solid rgba(255,255,255,.35); }
.bottle-panel { width:100%; max-width:430px; background:linear-gradient(180deg,rgba(255,255,255,.72),rgba(255,255,255,.45)); border:1px solid rgba(255,255,255,.6); border-radius:30px; padding:26px; box-shadow:0 20px 50px rgba(31,27,24,.10); }
.bottle-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:18px; align-items:end; }
.bottle-card { text-align:center; }
.bottle-name { font-size:13px; color:#4c4139; margin-top:10px; }

/* Hero bottle shapes — CSS-only wine bottles */
.hero-bottle { margin:0 auto 10px; position:relative; }
.hero-bottle .neck { position:absolute; left:50%; transform:translateX(-50%); top:-20px; border-radius:4px 4px 0 0; }
.hero-bottle.dark { width:54px; height:182px; background:linear-gradient(180deg,#2d2825 0%, #181412 100%); border-radius:14px 14px 10px 10px; box-shadow:0 12px 24px rgba(0,0,0,.12); }
.hero-bottle.dark .neck { width:16px; height:26px; background:#231f1d; }
.hero-bottle.green { width:60px; height:212px; background:linear-gradient(180deg,#7e8c5f 0%, #5c6d3f 100%); border-radius:16px 16px 11px 11px; box-shadow:0 12px 24px rgba(0,0,0,.12); }
.hero-bottle.green .neck { width:18px; height:30px; background:#5c6d3f; }
.hero-bottle.red { width:56px; height:194px; background:linear-gradient(180deg,#6b2231 0%, #45131d 100%); border-radius:14px 14px 10px 10px; box-shadow:0 12px 24px rgba(0,0,0,.12); }
.hero-bottle.red .neck { width:16px; height:26px; background:#45131d; }
```

## Sparkling/Product Section
```css
.sparkling-section { padding: 28px 24px 34px; background:#fff; }
.section-head { display:flex; align-items:center; justify-content:space-between; gap:16px; margin: 0 0 18px; }
.section-title { font-family:'Cormorant Garamond', serif; font-size:42px; color:#1f1b18; margin:0; }
.section-sub { font-size:13px; color:#8b7765; letter-spacing:.12em; text-transform:uppercase; }
.sparkling-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:24px 20px; }
.sparkling-card { padding:8px 8px 14px; background:transparent; }
.product-stage { height:248px; display:flex; align-items:flex-end; justify-content:center; }
.sparkling-name { font-size:14px; line-height:1.45; color:#3d342d; min-height:62px; margin-top:10px; }
.sparkling-meta { margin-top:8px; font-size:12px; color:#8b7765; letter-spacing:.08em; text-transform:uppercase; }

/* Product bottle with label, foil, band details */
.product-bottle { position:relative; filter: drop-shadow(0 14px 24px rgba(31,27,24,.12)); }
.product-bottle .neck { position:absolute; left:50%; transform:translateX(-50%); top:-22px; border-radius:4px 4px 0 0; }
.product-bottle .foil { position:absolute; left:50%; transform:translateX(-50%); top:-30px; border-radius:4px 4px 0 0; }
.product-bottle .label { position:absolute; left:50%; transform:translateX(-50%); background:rgba(255,255,255,.85); border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,.05); }
.product-bottle .band { position:absolute; left:50%; transform:translateX(-50%); height:10px; border-radius:999px; }

/* Specific bottle variants */
.moscato { width:58px; height:188px; background:linear-gradient(180deg,#d8b56c 0%, #bf9a4b 100%); border-radius:16px 16px 10px 10px; }
.moscato .neck { width:16px; height:26px; background:#bf9a4b; }
.moscato .foil { width:18px; height:10px; background:#f3e7c2; }
.moscato .label { top:58px; width:32px; height:74px; }
.moscato .band { top:72px; width:22px; background:#e9d39c; }

.prosecco { width:60px; height:204px; background:linear-gradient(180deg,#7f9661 0%, #627b46 100%); border-radius:18px 18px 10px 10px; }
.prosecco .neck { width:16px; height:28px; background:#627b46; }
.prosecco .foil { width:18px; height:11px; background:#d6cfaa; }
.prosecco .label { top:62px; width:34px; height:82px; }
.prosecco .band { top:76px; width:24px; background:#d6cfaa; }
```

## Key Design Notes
- Bottles are **pure CSS** — no images. Each bottle type (dark, green, red, moscato, prosecco) is a styled div with neck, foil, label, and band sub-elements.
- The hero section shows 3 bottles in a frosted glass panel.
- Product cards use the same CSS bottle approach with more detail (foil, label, band).
- All measurements and colors should be preserved exactly.
- Convert these to Tailwind utility classes where possible, but use custom CSS for the complex bottle shapes.
