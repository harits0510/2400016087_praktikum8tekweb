export default function HexBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* base dark */}
      <div className="absolute inset-0 bg-black" />

      {/* subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_60%)]" />

      {/* HEXAGON SVG */}
      <svg
        className="absolute inset-0 w-full h-full animate-hexagon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexPattern"
            width="180"
            height="156"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M90 0 
                 L180 45 
                 L180 135 
                 L90 180 
                 L0 135 
                 L0 45 Z"
              fill="none"
              stroke="rgba(59,130,246,0.25)"
              strokeWidth="2"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>
    </div>
  )
}