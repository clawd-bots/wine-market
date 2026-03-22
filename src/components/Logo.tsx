export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const dim = size === "lg" ? 76 : 40;
  const scale = size === "lg" ? 1 : 0.5;
  return (
    <div
      className="inline-flex items-center justify-center rounded-full"
      style={{
        width: dim,
        height: dim,
        border: "1.4px solid rgba(122,31,42,.22)",
        boxShadow: "inset 0 0 0 4px rgba(205,188,168,.12)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        className="twm-overlap"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
      >
        <span className="t">T</span>
        <span className="w">W</span>
        <span className="m">M</span>
      </div>
    </div>
  );
}
