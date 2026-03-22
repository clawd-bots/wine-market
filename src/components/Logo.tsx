export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <span
          className="absolute font-serif font-bold text-wine text-2xl"
          style={{ left: 0 }}
        >
          T
        </span>
        <span
          className="absolute font-serif font-bold text-wine-mid text-2xl"
          style={{ left: 8 }}
        >
          W
        </span>
        <span
          className="absolute font-serif font-bold text-wine-bright text-2xl"
          style={{ left: 20 }}
        >
          M
        </span>
      </div>
    </div>
  );
}
