export interface Wine {
  slug: string;
  name: string;
  region: string;
  country: string;
  varietal: string;
  type: "red" | "white" | "rosé" | "sparkling";
  year: number;
  price: number;
  tastingNotes: string;
  foodPairings: string[];
  description: string;
}

export const wines: Wine[] = [
  {
    slug: "chateau-margaux-2018",
    name: "Château Margaux",
    region: "Bordeaux",
    country: "France",
    varietal: "Cabernet Sauvignon Blend",
    type: "red",
    year: 2018,
    price: 189,
    tastingNotes:
      "Deep garnet with aromas of blackcurrant, violet, and cedar. Rich palate with silky tannins, notes of dark chocolate and espresso, leading to a long, elegant finish.",
    foodPairings: ["Grilled lamb chops", "Aged Comté cheese", "Beef Wellington"],
    description:
      "A first growth Bordeaux that epitomizes the elegance and power of Margaux. This exceptional vintage showcases the depth and complexity that has made this estate legendary.",
  },
  {
    slug: "brunello-di-montalcino-2017",
    name: "Casanova di Neri Brunello",
    region: "Tuscany",
    country: "Italy",
    varietal: "Sangiovese",
    type: "red",
    year: 2017,
    price: 78,
    tastingNotes:
      "Ruby red with garnet edges. Aromas of ripe cherry, dried herbs, and leather. Full-bodied with firm tannins, bright acidity, and flavors of plum and tobacco.",
    foodPairings: ["Wild boar ragù", "Truffle risotto", "Pecorino Toscano"],
    description:
      "From one of Montalcino's most celebrated producers, this Brunello delivers the power and grace that defines the appellation. Aged 24 months in oak.",
  },
  {
    slug: "opus-one-2019",
    name: "Opus One",
    region: "Napa Valley",
    country: "USA",
    varietal: "Cabernet Sauvignon Blend",
    type: "red",
    year: 2019,
    price: 425,
    tastingNotes:
      "Intense purple-black. Layers of cassis, blackberry, and graphite with hints of vanilla and mocha. Extraordinary structure with velvety tannins and a persistent finish.",
    foodPairings: [
      "Prime ribeye steak",
      "Braised short ribs",
      "Dark chocolate torte",
    ],
    description:
      "The iconic Napa Valley joint venture that blends Bordeaux tradition with California sunshine. A wine of remarkable depth and sophistication.",
  },
  {
    slug: "marques-de-murrieta-reserva-2018",
    name: "Marqués de Murrieta Reserva",
    region: "Rioja",
    country: "Spain",
    varietal: "Tempranillo",
    type: "red",
    year: 2018,
    price: 32,
    tastingNotes:
      "Medium ruby. Ripe red fruit, vanilla, and subtle smoky oak. Medium-bodied with smooth tannins, balanced acidity, and a warm spice finish.",
    foodPairings: ["Manchego cheese", "Chorizo tapas", "Roasted vegetables"],
    description:
      "A benchmark Rioja from one of the region's oldest and most prestigious bodegas. Classic style with modern finesse, aged in American and French oak.",
  },
  {
    slug: "cloudy-bay-sauvignon-blanc-2023",
    name: "Cloudy Bay Sauvignon Blanc",
    region: "Marlborough",
    country: "New Zealand",
    varietal: "Sauvignon Blanc",
    type: "white",
    year: 2023,
    price: 28,
    tastingNotes:
      "Pale straw with green tints. Explosive aromas of passionfruit, grapefruit, and freshly cut grass. Crisp and vibrant with zingy acidity and a mineral finish.",
    foodPairings: ["Goat cheese salad", "Grilled prawns", "Green curry"],
    description:
      "The wine that put Marlborough on the world map. Vibrant, aromatic, and utterly refreshing — a perfect expression of New Zealand terroir.",
  },
  {
    slug: "chablis-premier-cru-2021",
    name: "William Fèvre Chablis Premier Cru",
    region: "Burgundy",
    country: "France",
    varietal: "Chardonnay",
    type: "white",
    year: 2021,
    price: 52,
    tastingNotes:
      "Brilliant gold. Aromas of white flowers, lemon zest, and wet stone. Lean and precise with bright acidity, oyster shell minerality, and a clean finish.",
    foodPairings: ["Fresh oysters", "Grilled sole", "Chicken in cream sauce"],
    description:
      "A masterful expression of Kimmeridgian terroir from one of Chablis' greatest domaines. Pure, mineral-driven Chardonnay at its finest.",
  },
  {
    slug: "gewurztraminer-hugel-2022",
    name: "Hugel Gewürztraminer",
    region: "Alsace",
    country: "France",
    varietal: "Gewürztraminer",
    type: "white",
    year: 2022,
    price: 24,
    tastingNotes:
      "Pale gold. Intense aromas of lychee, rose petal, and ginger. Off-dry with generous body, exotic fruit flavors, and a spiced, aromatic finish.",
    foodPairings: ["Thai cuisine", "Foie gras", "Muenster cheese"],
    description:
      "From one of Alsace's most historic families, this aromatic white is perfumed and expressive. A versatile food wine with captivating complexity.",
  },
  {
    slug: "sancerre-pascal-jolivet-2022",
    name: "Pascal Jolivet Sancerre",
    region: "Loire Valley",
    country: "France",
    varietal: "Sauvignon Blanc",
    type: "white",
    year: 2022,
    price: 34,
    tastingNotes:
      "Crystal clear with a green hue. Delicate aromas of white peach, flint, and elderflower. Bone-dry with racy acidity and chalky minerality.",
    foodPairings: [
      "Crottin de Chavignol",
      "Asparagus risotto",
      "Smoked salmon",
    ],
    description:
      "A pure and elegant Sancerre from the steep slopes above the Loire. This wine captures the essence of the region's flinty soils.",
  },
  {
    slug: "whispering-angel-rose-2023",
    name: "Whispering Angel Rosé",
    region: "Provence",
    country: "France",
    varietal: "Grenache Blend",
    type: "rosé",
    year: 2023,
    price: 22,
    tastingNotes:
      "Pale salmon pink. Delicate aromas of strawberry, white peach, and herbs de Provence. Light and refreshing with soft fruit and a crisp, dry finish.",
    foodPairings: ["Niçoise salad", "Grilled seafood", "Fresh mozzarella"],
    description:
      "The rosé that launched a thousand summer afternoons. Elegant Provençal style from Château d'Esclans — effortlessly chic.",
  },
  {
    slug: "domaines-ott-bandol-rose-2022",
    name: "Domaines Ott Bandol Rosé",
    region: "Provence",
    country: "France",
    varietal: "Mourvèdre Blend",
    type: "rosé",
    year: 2022,
    price: 48,
    tastingNotes:
      "Very pale copper-pink. Complex aromas of apricot, almond blossom, and sea salt. Rich and textured with stony minerality and a long, saline finish.",
    foodPairings: ["Bouillabaisse", "Seared tuna", "Mediterranean mezze"],
    description:
      "A serious rosé from the masters of Provençal pink. The Mourvèdre base gives this wine structure and aging potential rarely found in rosé.",
  },
  {
    slug: "veuve-clicquot-brut-nv",
    name: "Veuve Clicquot Yellow Label Brut",
    region: "Champagne",
    country: "France",
    varietal: "Pinot Noir Blend",
    type: "sparkling",
    year: 2020,
    price: 62,
    tastingNotes:
      "Fine, persistent bubbles. Aromas of brioche, green apple, and white flowers. Balanced and full with citrus freshness and a toasty, creamy finish.",
    foodPairings: ["Smoked salmon canapés", "Fried chicken", "Parmesan crisps"],
    description:
      "The iconic yellow label that has defined Champagne for over two centuries. Consistent, celebratory, and always elegant.",
  },
  {
    slug: "franciacorta-bellavista-2018",
    name: "Bellavista Franciacorta Gran Cuvée",
    region: "Lombardy",
    country: "Italy",
    varietal: "Chardonnay Blend",
    type: "sparkling",
    year: 2018,
    price: 44,
    tastingNotes:
      "Golden straw with fine perlage. Notes of toasted hazelnut, ripe pear, and honey. Creamy and elegant with bright acidity and a long, refined mousse.",
    foodPairings: ["Risotto Milanese", "Lobster tail", "Aged Parmigiano"],
    description:
      "Italy's answer to Champagne, from the rolling hills of Franciacorta. Méthode traditionnelle at its finest — refined, complex, and utterly Italian.",
  },
];

export function getWineBySlug(slug: string): Wine | undefined {
  return wines.find((w) => w.slug === slug);
}

export function getWinesByType(type: Wine["type"]): Wine[] {
  return wines.filter((w) => w.type === type);
}
