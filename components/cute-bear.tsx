"use client"

export function CuteBear() {
  return (
    <div className="mb-6 relative">
      <svg
        width="160"
        height="160"
        viewBox="0 0 200 200"
        className="drop-shadow-lg"
      >
        {/* Left ear */}
        <circle cx="55" cy="50" r="30" fill="#d4a574" />
        <circle cx="55" cy="50" r="18" fill="#f8a5c2" />

        {/* Right ear */}
        <circle cx="145" cy="50" r="30" fill="#d4a574" />
        <circle cx="145" cy="50" r="18" fill="#f8a5c2" />

        {/* Face */}
        <circle cx="100" cy="100" r="70" fill="#d4a574" />

        {/* Inner face */}
        <ellipse cx="100" cy="115" rx="45" ry="40" fill="#f5deb3" />

        {/* Left eye */}
        <ellipse cx="70" cy="90" rx="12" ry="14" fill="#2d2d2d" />
        <ellipse cx="73" cy="86" rx="4" ry="5" fill="#ffffff" />

        {/* Right eye */}
        <ellipse cx="130" cy="90" rx="12" ry="14" fill="#2d2d2d" />
        <ellipse cx="133" cy="86" rx="4" ry="5" fill="#ffffff" />

        {/* Nose */}
        <ellipse cx="100" cy="115" rx="12" ry="10" fill="#2d2d2d" />
        <ellipse cx="103" cy="112" rx="3" ry="3" fill="#666666" />

        {/* Mouth */}
        <path
          d="M 85 130 Q 100 145 115 130"
          stroke="#2d2d2d"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Blush left */}
        <ellipse cx="55" cy="110" rx="12" ry="8" fill="#ff8fab" opacity="0.6" />

        {/* Blush right */}
        <ellipse cx="145" cy="110" rx="12" ry="8" fill="#ff8fab" opacity="0.6" />

        {/* Heart */}
        <g transform="translate(100, 165)">
          <path
            d="M 0 -8 C -5 -15 -15 -15 -15 -5 C -15 5 0 15 0 15 C 0 15 15 5 15 -5 C 15 -15 5 -15 0 -8"
            fill="#ff6b9d"
            className="animate-pulse"
          />
        </g>
      </svg>

      {/* Floating mini hearts around bear */}
      <div className="absolute -top-2 -right-2 text-primary animate-bounce" style={{ animationDelay: "0.2s" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute top-4 -left-4 text-primary/70 animate-bounce" style={{ animationDelay: "0.5s" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  )
}
