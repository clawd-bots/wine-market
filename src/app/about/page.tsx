import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — The Wine Market",
  description: "Our story, philosophy, and approach to curating exceptional wines.",
};

const values = [
  {
    title: "Quality First",
    description:
      "Every wine in our collection has been personally tasted and vetted. We never compromise on quality, regardless of price point.",
    icon: "🏆",
  },
  {
    title: "Direct Relationships",
    description:
      "We work directly with winemakers and estates, building relationships that ensure authenticity and fair pricing.",
    icon: "🤝",
  },
  {
    title: "Storytelling",
    description:
      "Behind every bottle is a story of terroir, tradition, and craftsmanship. We make sure those stories reach you.",
    icon: "📖",
  },
  {
    title: "Sustainability",
    description:
      "We prioritize producers who practice sustainable viticulture and respect the land that gives their wines character.",
    icon: "🌱",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-wine/10 text-wine text-xs font-medium mb-6">
            Our Story
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
            A passion for wine,
            <br />
            a commitment to <span className="text-wine">craft</span>
          </h1>
          <p className="text-lg text-earth leading-relaxed">
            The Wine Market was born from a simple belief: that exceptional wine
            should be accessible to everyone who seeks it. Founded in 2019, we
            set out to bridge the gap between world-class vineyards and
            discerning drinkers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-[2rem] bg-gradient-to-br from-wine/10 to-earth-light/20 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-7xl block mb-4">🍇</span>
                <p className="font-serif text-2xl text-earth italic">
                  Where it all began
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">
                From cellar to collection
              </h2>
              <p className="text-earth leading-relaxed mb-4">
                What started as weekend trips to European vineyards quickly
                became an obsession. We found ourselves spending hours with
                winemakers, learning about their craft, their families, and the
                land that shaped their wines.
              </p>
              <p className="text-earth leading-relaxed mb-4">
                We realized that the stories behind these wines were as
                compelling as the wines themselves — and that most of these
                stories never reached the people drinking them.
              </p>
              <p className="text-earth leading-relaxed">
                The Wine Market was created to change that. We curate wines not
                just for quality, but for the stories they tell and the
                experiences they create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-3">
              What guides us
            </h2>
            <p className="text-earth max-w-lg mx-auto">
              Our approach to curation is built on four principles.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-cream-light rounded-3xl p-8 text-center"
              >
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-dark mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-earth leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-light mb-6">
              Our sourcing approach
            </h2>
            <p className="text-cream-light/70 leading-relaxed mb-4">
              We travel to wine regions throughout the year, meeting producers
              face-to-face and tasting directly from barrel and bottle. Our
              network spans France, Italy, Spain, Germany, the Americas, and
              beyond.
            </p>
            <p className="text-cream-light/70 leading-relaxed mb-8">
              We look for wines that express their terroir with authenticity —
              from prestigious appellations to emerging regions pushing
              boundaries. Price is never the primary filter; character and
              quality always come first.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-wine to-wine-bright text-cream-light font-medium text-sm hover:shadow-lg hover:shadow-wine/20 transition-all"
            >
              Explore our collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
