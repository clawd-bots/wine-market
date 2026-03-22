export type CollectionBottleVariant =
  | "c-moscato"
  | "c-prosecco"
  | "c-rose"
  | "c-lambrusco"
  | "c-spumante"
  | "c-pinot";

export default function CollectionBottle({ variant }: { variant: CollectionBottleVariant }) {
  return (
    <div className={`collection-bottle ${variant}`}>
      <div className="neck" />
      <div className="foil" />
      <div className="label" />
      <div className="band" />
    </div>
  );
}
