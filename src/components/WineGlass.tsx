export type WineGlassVariant = "default" | "wide" | "tall" | "medium";

export default function WineGlass({ variant = "default" }: { variant?: WineGlassVariant }) {
  const cls = variant === "default" ? "glass" : `glass ${variant}`;
  return (
    <div className={cls}>
      <div className="bowl" />
      <div className="stem" />
      <div className="base" />
      <div className="shine" />
    </div>
  );
}
