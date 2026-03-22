export type MiniBottleVariant = "white" | "green" | "rose";

export default function MiniBottle({ variant }: { variant: MiniBottleVariant }) {
  return <div className={`mini-bottle ${variant}`} />;
}
