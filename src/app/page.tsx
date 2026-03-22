"use client";

import Link from "next/link";
import WineCard from "@/components/WineCard";
import { wines } from "@/data/wines";

const featured = wines.slice(0, 4);

const testimonials = [
  {
    quote:
      "The curation is impeccable. Every bottle I've ordered has been a revelation.",
    author: "Marie L.",
    location: "Paris",
  },
  {
    quote:
      "Finally, a wine shop that feels personal. The tasting notes are spot-on.",
    author: "James K.",
    location: "London",
  },
  {
    quote:
      "Their selection of rosés is unmatched. Summer wouldn't be the same without them.",
    author: "Sofia R.",
    location: "Barcelona",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-wine)_0%,_transparent_50%)] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-wine/10 text-wine text-xs font-medium mb-6">
                Curated wines from world-class regions
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] mb-6">
                Discover wines
                <br />
                worth <span className="text-wine">savoring</span>
              </h1>
              <p className="text-lg text-earth leading-relaxed mb-8 max-w-lg">
                From the rolling hills of Tuscany to the sun-drenched vineyards
                of Napa Valley, we bring you an exceptional collection of wines
                chosen for their character and craft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-wine to-wine-bright text-cream-light font-medium text-sm hover:shadow-lg hover:shadow-wine/20 transition-all"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-earth-light text-earth font-medium text-sm hover:border-wine hover:text-wine transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 rounded-[2rem] bg-gradient-to-br from-wine/10 to-earth-light/30 flex items-center justify-center shadow-2xl shadow-wine/5">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <span className="absolute font-serif font-bold text-wine text-7xl opacity-60" style={{ left: 0 }}>T</span>
                      <span className="absolute font-serif font-bold text-wine-mid text-7xl opacity-70" style={{ left: 18 }}>W</span>
                      <span className="absolute font-serif font-bold text-wine-bright text-7xl opacity-80" style={{ left: 42 }}>M</span>
                    </div>
                    <p className="font-serif text-2xl font-semibold text-dark">The Wine Market</p>
                    <p className="text-sm text-earth mt-1">Est. 2019</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-olive/10 -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-wine/5 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wines */}
      <section className="bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-3">
              Featured Selections
            </h2>
            <p className="text-earth max-w-lg mx-auto">
              Hand-picked wines that define excellence in their region and style.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((wine) => (
              <WineCard key={wine.slug} wine={wine} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-wine font-medium hover:text-wine-bright transition-colors"
            >
              View all wines <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[2rem] bg-gradient-to-br from-earth-light/40 to-cream-light aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-8xl mb-4 block">🍇</span>
                <p className="font-serif text-xl text-earth italic">
                  From vineyard to your glass
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
                Wine, curated with care
              </h2>
              <p className="text-earth leading-relaxed mb-4">
                We believe great wine tells a story — of place, of people, of
                tradition. Every bottle in our collection has been tasted,
                discussed, and chosen with intention.
              </p>
              <p className="text-earth leading-relaxed mb-6">
                From first-growth Bordeaux to small-batch natural wines, our
                range spans the full spectrum of what the wine world has to
                offer.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-wine font-medium hover:text-wine-bright transition-colors"
              >
                Learn more about us <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-light text-center mb-12">
            What our customers say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-cream-light/5 rounded-3xl p-8 border border-cream-light/10"
              >
                <p className="text-cream-light/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-cream-light font-medium text-sm">
                    {t.author}
                  </p>
                  <p className="text-cream-light/40 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-wine to-wine-bright rounded-[2rem] p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-light mb-3">
              Join the cellar
            </h2>
            <p className="text-cream-light/80 mb-8 max-w-md mx-auto">
              Subscribe for first access to new arrivals, exclusive offers, and
              curated tasting notes.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-cream-light/20 border border-cream-light/30 text-cream-light placeholder:text-cream-light/50 text-sm focus:outline-none focus:border-cream-light"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-cream-light text-wine font-medium text-sm hover:bg-cream transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
