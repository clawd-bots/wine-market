"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navCategories = [
  "Sparkling",
  "Red",
  "White",
  "Rosé",
  "Spirits",
  "Glassware",
  "Deals",
  "Gifting",
  "Events",
  "Stores",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-light/90 backdrop-blur-md border-b border-earth-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Row */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo />
            <span className="font-serif text-xl font-semibold text-dark tracking-wide">
              The Wine Market
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-earth"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Row */}
        <div className="hidden md:block">
          <div className="nav-row">
            {navCategories.map((cat) => (
              <span key={cat}>{cat}</span>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-earth-light/30 pt-4 flex flex-col gap-3">
            {navCategories.map((cat) => (
              <span
                key={cat}
                className="text-sm font-medium text-earth hover:text-wine transition-colors px-2 py-1 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </span>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
