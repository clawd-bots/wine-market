export type HeroBottleVariant = "dark" | "green" | "red";

export default function WineBottle({ variant }: { variant: HeroBottleVariant }) {
  return (
    <div className={`hero-bottle ${variant}`}>
      <div className="neck" />
    </div>
  );
}
