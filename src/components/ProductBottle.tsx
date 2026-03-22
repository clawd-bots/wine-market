export type ProductBottleVariant =
  | "moscato"
  | "prosecco"
  | "rose"
  | "lambrusco"
  | "spumante"
  | "pinot";

export default function ProductBottle({ variant }: { variant: ProductBottleVariant }) {
  return (
    <div className={`product-bottle ${variant}`}>
      <div className="neck" />
      <div className="foil" />
      <div className="label" />
      <div className="band" />
    </div>
  );
}
