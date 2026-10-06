/**
 * Subtle 8-point star tessellation (inline SVG) — plan Part 2.5
 */
export function IslamicPatternBg() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-gold/10 opacity-[0.04]"
      aria-hidden
    >
      <defs>
        <pattern
          id="starTess"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="currentColor"
            d="M20 0l2.2 6.5h6.8L24 9.3 26.2 16 20 12.1 13.8 16 16 9.3 11 6.5h6.8L20 0zm0 24l2.2 6.5h6.8L24 33.3 26.2 40 20 36.1 13.8 40 16 33.3 11 30.5h6.8L20 24z"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#starTess)" />
    </svg>
  );
}

export function HeroLanternDecor() {
  return (
    <div
      className="pointer-events-none absolute left-4 top-6 opacity-30 md:left-8 md:top-10"
      aria-hidden
    >
      <svg
        width="48"
        height="72"
        viewBox="0 0 48 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold"
      >
        <path
          d="M24 0v6M8 8h32M6 20c0 6 2 20 2 20h32s2-14 2-20c0-4-2-6-2-6H8s-2 2-2 6z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect x="12" y="32" width="24" height="32" rx="2" fill="currentColor" fillOpacity="0.15" />
        <line x1="8" y1="64" x2="40" y2="64" stroke="currentColor" strokeWidth="1" />
        <line x1="16" y1="72" x2="32" y2="72" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
