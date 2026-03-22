"use client";

import { useState, useMemo } from "react";
import { wines, Wine } from "@/data/wines";
import WineCard from "@/components/WineCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const types: { label: string; value: Wine["type"] | "all" }[] = [
  { label: "All Wines", value: "all" },
  { label: "Red", value: "red" },
  { label: "White", value: "white" },
  { label: "Rosé", value: "rosé" },
  { label: "Sparkling", value: "sparkling" },
];

const sortOptions = [
  { label: "Name A–Z", value: "name-asc" },
  { label: "Name Z–A", value: "name-desc" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "all";

  const [activeType, setActiveType] = useState<Wine["type"] | "all">(
    initialType as Wine["type"] | "all"
  );
  const [sort, setSort] = useState("name-asc");

  const filtered = useMemo(() => {
    let result = activeType === "all" ? [...wines] : wines.filter((w) => w.type === activeType);

    switch (sort) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [activeType, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-3">
          Our Collection
        </h1>
        <p className="text-earth max-w-lg mx-auto">
          Explore our carefully curated selection of wines from the world&apos;s
          finest regions.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t.value}
              onClick={() => setActiveType(t.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeType === t.value
                  ? "bg-wine text-cream-light"
                  : "bg-cream-light text-earth hover:bg-earth-light/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded-full bg-cream-light border border-earth-light/50 text-sm text-earth focus:outline-none focus:border-wine"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-earth-mid mb-6">
        Showing {filtered.length} wine{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Wine Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((wine) => (
          <WineCard key={wine.slug} wine={wine} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-earth text-lg">
            No wines found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-earth">Loading...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
