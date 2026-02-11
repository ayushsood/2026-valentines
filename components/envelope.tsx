"use client"

import { useState } from "react"

interface EnvelopeProps {
  recipientName: string
  onOpen: () => void
}

export function Envelope({ recipientName, onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false)

  const handleClick = () => {
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 800)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-rose-100 to-pink-50 flex items-center justify-center p-4 z-50">
      {/* Floating hearts in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i % 3}s`,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>

      <button
        onClick={handleClick}
        disabled={isOpening}
        className="relative cursor-pointer group focus:outline-none"
      >
        {/* Envelope container */}
        <div
          className={`relative transition-all duration-700 ${
            isOpening ? "scale-150 opacity-0" : "group-hover:scale-105"
          }`}
        >
          {/* Envelope back */}
          <div className="relative w-72 h-48 sm:w-80 sm:h-52 md:w-96 md:h-60">
            {/* Main envelope body */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg shadow-xl border border-amber-200/50" />
            
            {/* Envelope flap (top) */}
            <div
              className={`absolute -top-0 left-0 right-0 h-28 sm:h-32 md:h-36 origin-top transition-transform duration-700 ${
                isOpening ? "rotate-x-180" : "group-hover:-rotate-x-12"
              }`}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <svg
                viewBox="0 0 384 144"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0 L192 120 L384 0 L384 4 L192 124 L0 4 Z"
                  fill="url(#flapGradient)"
                  className="drop-shadow-sm"
                />
                <path
                  d="M0 0 L192 120 L384 0"
                  fill="none"
                  stroke="#d4a574"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="100%" stopColor="#fde68a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Envelope inner shadow */}
            <div className="absolute inset-2 top-12 bg-gradient-to-b from-amber-200/30 to-transparent rounded" />

            {/* Wax seal */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 shadow-lg flex items-center justify-center border-2 border-rose-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="drop-shadow">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Address label */}
            <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 text-center">
              <p className="text-xs text-amber-600/70 font-medium tracking-widest uppercase mb-1">
                To:
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-900 font-serif italic">
                {recipientName}
              </p>
            </div>
          </div>

          {/* Tap to open hint */}
          <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-muted-foreground/60 whitespace-nowrap animate-pulse">
            Tap to open
          </p>
        </div>
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
          }
          50% {
            transform: translateY(-10vh) rotate(180deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .-rotate-x-12 {
          transform: rotateX(-12deg);
        }
      `}</style>
    </div>
  )
}
