import { wines, getWineBySlug } from "@/data/wines";
import Link from "next/link";
import { notFound } from "next/navigation";

const typeEmoji: Record<string, string> = {
  red: "🍷",
  white: "🥂",
  rosé: "🌸",
  sparkling: "✨",
};

export function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const wine = getWineBySlug(slug);
    if (!wine) return { title: "Wine Not Found" };
    return {
      title: `${wine.name} — The Wine Market`,
      description: wine.description,
    };
  });
}

export default async function WineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-earth-mid">
        <Link href="/shop" className="hover:text-wine transition-colors">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-dark">{wine.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gradient-to-br from-earth-light/30 to-cream-light rounded-[2rem] aspect-square flex items-center justify-center">
          <div className="text-center">
            <span className="text-9xl block mb-4 opacity-50">
              {typeEmoji[wine.type]}
            </span>
            <p className="font-serif text-xl text-earth/60 italic">{wine.varietal}</p>
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-wine/10 text-wine text-xs font-medium capitalize mb-4">
            {wine.type}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-2">
            {wine.name}
          </h1>
          <p className="text-earth-mid mb-1">
            {wine.region}, {wine.country} &middot; {wine.year}
          </p>
          <p className="text-sm text-earth mb-6">{wine.varietal}</p>

          <div className="text-3xl font-bold text-wine mb-8">
            ${wine.price}
          </div>

          <p className="text-earth leading-relaxed mb-8">{wine.description}</p>

          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-wine to-wine-bright text-cream-light font-medium hover:shadow-lg hover:shadow-wine/20 transition-all mb-10">
            Add to Cart
          </button>

          {/* Tasting Notes */}
          <div className="bg-cream-light rounded-2xl p-6 mb-6">
            <h3 className="font-serif text-xl font-semibold text-dark mb-3">
              Tasting Notes
            </h3>
            <p className="text-earth leading-relaxed">{wine.tastingNotes}</p>
          </div>

          {/* Food Pairings */}
          <div className="bg-cream-light rounded-2xl p-6">
            <h3 className="font-serif text-xl font-semibold text-dark mb-3">
              Food Pairings
            </h3>
            <ul className="space-y-2">
              {wine.foodPairings.map((pairing) => (
                <li
                  key={pairing}
                  className="flex items-center gap-2 text-earth"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-olive flex-shrink-0" />
                  {pairing}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to shop */}
      <div className="mt-16 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-wine font-medium hover:text-wine-bright transition-colors"
        >
          <span>&larr;</span> Back to collection
        </Link>
      </div>
    </div>
  );
}
