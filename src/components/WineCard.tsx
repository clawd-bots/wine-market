import Link from "next/link";
import { Wine } from "@/data/wines";
import ProductBottle from "./ProductBottle";
import type { ProductBottleVariant } from "./ProductBottle";

const typeToBottle: Record<Wine["type"], ProductBottleVariant> = {
  red: "lambrusco",
  white: "pinot",
  rosé: "rose",
  sparkling: "prosecco",
};

const typeColors: Record<Wine["type"], string> = {
  red: "bg-wine/10 text-wine",
  white: "bg-earth-light/40 text-earth",
  rosé: "bg-pink-100 text-pink-700",
  sparkling: "bg-olive/10 text-olive",
};

export default function WineCard({ wine }: { wine: Wine }) {
  return (
    <Link href={`/wine/${wine.slug}`} className="group">
      <div className="bg-cream-light rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
        {/* CSS Bottle */}
        <div className="aspect-[3/4] bg-gradient-to-br from-earth-light/30 to-cream relative overflow-hidden flex items-end justify-center pb-6">
          <ProductBottle variant={typeToBottle[wine.type]} />
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${typeColors[wine.type]}`}>
              {wine.type}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-xs font-medium text-earth-mid uppercase tracking-wider mb-1">
            {wine.region}, {wine.country}
          </p>
          <h3 className="font-serif text-lg font-semibold text-dark leading-tight mb-1 group-hover:text-wine transition-colors">
            {wine.name}
          </h3>
          <p className="text-xs text-earth mb-3">
            {wine.varietal} &middot; {wine.year}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-wine">${wine.price}</span>
            <span className="text-xs font-medium text-earth-mid group-hover:text-wine transition-colors">
              View Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
