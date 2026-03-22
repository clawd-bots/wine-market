"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream-light/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="font-serif text-lg font-semibold text-cream-light">
                The Wine Market
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream-light/60">
              Curating exceptional wines from world-renowned regions since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-light mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:text-cream-light transition-colors">
                  Shop All Wines
                </Link>
              </li>
              <li>
                <Link href="/shop?type=red" className="hover:text-cream-light transition-colors">
                  Red Wines
                </Link>
              </li>
              <li>
                <Link href="/shop?type=white" className="hover:text-cream-light transition-colors">
                  White Wines
                </Link>
              </li>
              <li>
                <Link href="/shop?type=rosé" className="hover:text-cream-light transition-colors">
                  Rosé Wines
                </Link>
              </li>
              <li>
                <Link href="/shop?type=sparkling" className="hover:text-cream-light transition-colors">
                  Sparkling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-light mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-cream-light transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-light mb-4">
              Stay in Touch
            </h4>
            <p className="text-sm text-cream-light/60 mb-3">
              Get updates on new arrivals and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-cream-light/10 border border-cream-light/20 text-sm text-cream-light placeholder:text-cream-light/40 focus:outline-none focus:border-wine-mid"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-wine text-cream-light text-sm font-medium hover:bg-wine-mid transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-light/10 text-center text-xs text-cream-light/40">
          &copy; {new Date().getFullYear()} The Wine Market. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
