import WineBottle from "@/components/WineBottle";
import ProductBottle from "@/components/ProductBottle";
import CollectionBottle from "@/components/CollectionBottle";
import MiniBottle from "@/components/MiniBottle";
import WineGlass from "@/components/WineGlass";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-medium tracking-[.14em] uppercase text-earth-mid mb-4">
                Easy to Shop &middot; Beautiful to Gift
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] font-bold text-dark leading-[.95] mb-6">
                Beautiful bottles for every table.
              </h1>
              <p className="text-base leading-relaxed text-earth mb-8 max-w-lg">
                A cleaner, easier way to shop wine for dinners, gifting,
                celebrations, and everyday moments — with a curated selection
                that still feels welcoming and simple to browse.
              </p>
              <div className="flex gap-4">
                <div className="px-7 py-3 rounded-full bg-gradient-to-r from-wine to-wine-bright text-cream-light font-medium text-sm cursor-pointer hover:shadow-lg hover:shadow-wine/20 transition-all">
                  Shop Wines
                </div>
                <div className="px-7 py-3 rounded-full border-2 border-earth-light text-earth font-medium text-sm cursor-pointer hover:border-wine hover:text-wine transition-colors">
                  Browse Collections
                </div>
              </div>
            </div>

            {/* Hero Visual — 3 CSS bottles */}
            <div className="hidden md:flex justify-center">
              <div className="bottle-panel">
                <div className="bottle-grid">
                  <div className="bottle-card">
                    <WineBottle variant="dark" />
                    <div className="bottle-name">Reserve</div>
                  </div>
                  <div className="bottle-card">
                    <WineBottle variant="green" />
                    <div className="bottle-name">Blanc</div>
                  </div>
                  <div className="bottle-card">
                    <WineBottle variant="red" />
                    <div className="bottle-name">Rouge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sparkling Section ===== */}
      <section className="sparkling-section">
        <div className="max-w-7xl mx-auto">
          <div className="section-head">
            <h2 className="section-title">Sparkling</h2>
            <span className="section-sub">New arrivals</span>
          </div>
          <div className="sparkling-grid">
            <div className="sparkling-card">
              <div className="product-stage">
                <ProductBottle variant="moscato" />
              </div>
              <div className="sparkling-name">Moscato d&apos;Asti<br />Villa Jolanda</div>
              <div className="sparkling-meta">$14 &middot; Piedmont</div>
            </div>
            <div className="sparkling-card">
              <div className="product-stage">
                <ProductBottle variant="prosecco" />
              </div>
              <div className="sparkling-name">Prosecco Superiore<br />Col Vetoraz</div>
              <div className="sparkling-meta">$18 &middot; Veneto</div>
            </div>
            <div className="sparkling-card">
              <div className="product-stage">
                <ProductBottle variant="rose" />
              </div>
              <div className="sparkling-name">Sparkling Rosé<br />Domaine Chandon</div>
              <div className="sparkling-meta">$22 &middot; Napa Valley</div>
            </div>
            <div className="sparkling-card">
              <div className="product-stage">
                <ProductBottle variant="lambrusco" />
              </div>
              <div className="sparkling-name">Lambrusco di Sorbara<br />Cleto Chiarli</div>
              <div className="sparkling-meta">$16 &middot; Emilia-Romagna</div>
            </div>
            <div className="sparkling-card">
              <div className="product-stage">
                <ProductBottle variant="spumante" />
              </div>
              <div className="sparkling-name">Spumante Brut<br />Berlucchi &apos;61</div>
              <div className="sparkling-meta">$24 &middot; Lombardy</div>
            </div>
            <div className="sparkling-card">
              <div className="product-stage">
                <ProductBottle variant="pinot" />
              </div>
              <div className="sparkling-name">Pinot Grigio Spumante<br />Santa Margherita</div>
              <div className="sparkling-meta">$20 &middot; Alto Adige</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Carousel Section ===== */}
      <section className="carousel-section">
        <div className="max-w-7xl mx-auto">
          <div className="carousel-wrap">
            {/* Main card */}
            <div className="carousel-main">
              <div className="carousel-overlay">
                <div className="carousel-label">
                  <div className="carousel-kicker">Staff Pick</div>
                  <div className="carousel-title">Sunday Supper Wines</div>
                </div>
              </div>
            </div>

            {/* Side cards */}
            <div className="carousel-side">
              <div className="carousel-card soft-rose" style={{ padding: "22px" }}>
                <div className="mini-title">Rosé Season</div>
                <div className="mini-copy">Light, crisp bottles perfect for warm evenings.</div>
                <div className="mini-visual">
                  <MiniBottle variant="rose" />
                  <MiniBottle variant="white" />
                </div>
              </div>
              <div className="carousel-card soft-gold" style={{ padding: "22px" }}>
                <div className="mini-title">Gift Bundles</div>
                <div className="mini-copy">Curated sets ready to wrap and send.</div>
                <div className="mini-visual">
                  <MiniBottle variant="green" />
                  <MiniBottle variant="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Collection Section ===== */}
      <section className="sparkling-collection">
        <div className="max-w-7xl mx-auto">
          <div className="section-head">
            <h2 className="section-title">The Collection</h2>
            <span className="section-sub">Curated picks</span>
          </div>
          <div className="collection-grid">
            <div className="collection-card">
              <div className="collection-stage">
                <CollectionBottle variant="c-moscato" />
              </div>
              <div className="collection-name">Golden Moscato<br />Sweet &amp; Light</div>
              <div className="collection-meta">$14 &middot; Piedmont</div>
            </div>
            <div className="collection-card">
              <div className="collection-stage">
                <CollectionBottle variant="c-prosecco" />
              </div>
              <div className="collection-name">Prosecco Brut<br />Col Vetoraz</div>
              <div className="collection-meta">$18 &middot; Veneto</div>
            </div>
            <div className="collection-card">
              <div className="collection-stage">
                <CollectionBottle variant="c-rose" />
              </div>
              <div className="collection-name">Provence Rosé<br />Château Miraval</div>
              <div className="collection-meta">$26 &middot; Provence</div>
            </div>
            <div className="collection-card">
              <div className="collection-stage">
                <CollectionBottle variant="c-lambrusco" />
              </div>
              <div className="collection-name">Lambrusco Grasparossa<br />Villa di Corlo</div>
              <div className="collection-meta">$16 &middot; Emilia-Romagna</div>
            </div>
            <div className="collection-card">
              <div className="collection-stage">
                <CollectionBottle variant="c-spumante" />
              </div>
              <div className="collection-name">Trento DOC Brut<br />Ferrari</div>
              <div className="collection-meta">$28 &middot; Trentino</div>
            </div>
            <div className="collection-card">
              <div className="collection-stage">
                <CollectionBottle variant="c-pinot" />
              </div>
              <div className="collection-name">Pinot Grigio<br />Livio Felluga</div>
              <div className="collection-meta">$22 &middot; Friuli</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Glassware Section ===== */}
      <section className="glassware-section">
        <div className="max-w-7xl mx-auto">
          <div className="section-head">
            <h2 className="section-title">Glassware</h2>
            <span className="section-sub">Complete the experience</span>
          </div>
          <div className="glassware-grid">
            <div className="glass-card">
              <div className="glass-stage">
                <WineGlass variant="default" />
                <WineGlass variant="default" />
              </div>
              <div className="glass-title">Universal</div>
              <div className="glass-copy">
                An all-purpose glass with a balanced bowl, perfect for reds and
                whites alike.
              </div>
            </div>
            <div className="glass-card">
              <div className="glass-stage">
                <WineGlass variant="wide" />
                <WineGlass variant="wide" />
              </div>
              <div className="glass-title">Burgundy</div>
              <div className="glass-copy">
                Wide bowl designed for aromatic wines — Pinot Noir, Nebbiolo, and
                aged Burgundy.
              </div>
            </div>
            <div className="glass-card">
              <div className="glass-stage">
                <WineGlass variant="tall" />
                <WineGlass variant="medium" />
              </div>
              <div className="glass-title">Champagne</div>
              <div className="glass-copy">
                Tall, narrow flute to preserve bubbles and concentrate aromas in
                sparkling wines.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="features">
            <div className="feature">
              <div className="feature-title">Free Shipping</div>
              <div className="feature-text">
                Complimentary delivery on every order over $75, carefully packed
                and fully insured.
              </div>
            </div>
            <div className="feature">
              <div className="feature-title">Expert Picks</div>
              <div className="feature-text">
                Every bottle is tasted and selected by our team of certified
                sommeliers.
              </div>
            </div>
            <div className="feature">
              <div className="feature-title">Easy Returns</div>
              <div className="feature-text">
                Not happy? Return any unopened bottle within 30 days — no
                questions asked.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
