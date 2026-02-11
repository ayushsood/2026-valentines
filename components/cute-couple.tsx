"use client"

export function CuteCouple() {
  return (
    <div className="relative">
      <svg
        width="180"
        height="160"
        viewBox="0 0 180 160"
        fill="none"
        className="animate-bounce"
        style={{ animationDuration: "2s" }}
      >
        {/* Big heart background */}
        <path
          d="M90 145C90 145 25 100 25 60C25 35 45 20 65 20C78 20 88 28 90 35C92 28 102 20 115 20C135 20 155 35 155 60C155 100 90 145 90 145Z"
          fill="url(#heartGradient)"
          className="drop-shadow-lg"
        />
        
        {/* Left person (bear-like) */}
        <g transform="translate(45, 55)">
          {/* Body */}
          <ellipse cx="20" cy="45" rx="18" ry="22" fill="#D4A574" />
          {/* Head */}
          <circle cx="20" cy="18" r="18" fill="#D4A574" />
          {/* Ears */}
          <circle cx="5" cy="5" r="7" fill="#D4A574" />
          <circle cx="35" cy="5" r="7" fill="#D4A574" />
          <circle cx="5" cy="5" r="4" fill="#C4956A" />
          <circle cx="35" cy="5" r="4" fill="#C4956A" />
          {/* Face */}
          <ellipse cx="20" cy="22" rx="8" ry="6" fill="#E8C9A0" />
          {/* Eyes - closed happy */}
          <path d="M12 15C12 15 14 18 17 15" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Blush */}
          <circle cx="8" cy="22" r="4" fill="#FFB5B5" opacity="0.6" />
          {/* Nose */}
          <ellipse cx="20" cy="20" rx="3" ry="2" fill="#8B6914" />
          {/* Smile */}
          <path d="M16 26C16 26 20 30 24 26" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Arm reaching out */}
          <ellipse cx="38" cy="40" rx="8" ry="6" fill="#D4A574" transform="rotate(-30 38 40)" />
        </g>
        
        {/* Right person (bunny-like) */}
        <g transform="translate(95, 55)">
          {/* Body */}
          <ellipse cx="20" cy="45" rx="18" ry="22" fill="#F5E6D3" />
          {/* Head */}
          <circle cx="20" cy="18" r="18" fill="#F5E6D3" />
          {/* Ears - long bunny ears */}
          <ellipse cx="10" cy="-8" rx="5" ry="15" fill="#F5E6D3" />
          <ellipse cx="30" cy="-8" rx="5" ry="15" fill="#F5E6D3" />
          <ellipse cx="10" cy="-8" rx="3" ry="12" fill="#FFCDD2" />
          <ellipse cx="30" cy="-8" rx="3" ry="12" fill="#FFCDD2" />
          {/* Face */}
          <ellipse cx="20" cy="22" rx="7" ry="5" fill="#FFFFFF" />
          {/* Eyes - closed happy */}
          <path d="M23 15C23 15 26 18 28 15" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Blush */}
          <circle cx="32" cy="22" r="4" fill="#FFB5B5" opacity="0.6" />
          {/* Nose */}
          <ellipse cx="20" cy="19" rx="2" ry="1.5" fill="#FFB6C1" />
          {/* Smile */}
          <path d="M16 25C16 25 20 29 24 25" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Arm reaching out */}
          <ellipse cx="2" cy="40" rx="8" ry="6" fill="#F5E6D3" transform="rotate(30 2 40)" />
        </g>
        
        {/* Small floating hearts */}
        <g className="animate-pulse">
          <path d="M45 35C45 35 42 32 42 29C42 26 44.5 24 47 24C48.5 24 49.8 25 50 26C50.2 25 51.5 24 53 24C55.5 24 58 26 58 29C58 32 55 35 50 40C45 35 45 35 45 35Z" fill="#FF6B9D" />
        </g>
        <g className="animate-pulse" style={{ animationDelay: "0.3s" }}>
          <path d="M125 30C125 30 122 27 122 24C122 21 124.5 19 127 19C128.5 19 129.8 20 130 21C130.2 20 131.5 19 133 19C135.5 19 138 21 138 24C138 27 135 30 130 35C125 30 125 30 125 30Z" fill="#FF8FAB" />
        </g>
        <g className="animate-pulse" style={{ animationDelay: "0.6s" }}>
          <path d="M85 25C85 25 83 23 83 21C83 19 84.5 17.5 86 17.5C87 17.5 87.8 18.2 88 18.8C88.2 18.2 89 17.5 90 17.5C91.5 17.5 93 19 93 21C93 23 91 25 88 28C85 25 85 25 85 25Z" fill="#FFC8DD" />
        </g>
        
        {/* Sparkles */}
        <g fill="#FFD700">
          <path d="M30 50L32 55L37 55L33 58L35 63L30 60L25 63L27 58L23 55L28 55Z" className="animate-pulse" />
          <path d="M150 45L151.5 49L156 49L152.5 51.5L154 56L150 53L146 56L147.5 51.5L144 49L148.5 49Z" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
        </g>
        
        <defs>
          <linearGradient id="heartGradient" x1="90" y1="20" x2="90" y2="145" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8FAB" />
            <stop offset="1" stopColor="#FF6B9D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
