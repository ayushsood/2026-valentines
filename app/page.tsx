"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { FloatingHearts } from "@/components/floating-hearts"
import { Celebration } from "@/components/celebration"
import { CuteBear } from "@/components/cute-bear"
import { Envelope } from "@/components/envelope"

export default function ValentinePage() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [hasMovedNo, setHasMovedNo] = useState(false)
  const [isWiggling, setIsWiggling] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const moveNoButton = useCallback(() => {
    // Random offset within +/- 100px from the button's original position
    const range = 100
    const newX = (Math.random() - 0.5) * 2 * range
    const newY = (Math.random() - 0.5) * 2 * range

    // Trigger wiggle animation
    setIsWiggling(true)
    setTimeout(() => setIsWiggling(false), 500)

    setNoButtonPosition({ x: newX, y: newY })
    setHasMovedNo(true)
  }, [])

  const handleYesClick = () => {
    setShowCelebration(true)
    setHasMovedNo(false)
  }

  const handleNoHover = () => {
    moveNoButton()
  }

  const handleNoClick = () => {
    moveNoButton()
  }

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true)
    setTimeout(() => setShowLetter(true), 100)
  }

  if (!envelopeOpened) {
    return <Envelope recipientName="Mihika Kapoor" onOpen={handleEnvelopeOpen} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-50 flex items-center justify-center p-4 overflow-hidden">
      <FloatingHearts />

      {showCelebration && <Celebration />}

      {/* Letter container */}
      <div
        className={`relative bg-card rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-lg w-full border border-primary/10 transition-all duration-700 ${
          showLetter
            ? "opacity-100 translate-y-0 rotate-0"
            : "opacity-0 translate-y-8 -rotate-3"
        }`}
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 182, 193, 0.2)",
        }}
      >
        {/* Letter header decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Letter content */}
        <div className="flex flex-col items-center text-center mt-4">
          <CuteBear />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 text-balance">
            Will you be my Valentine?
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            I promise to give you all my love and snacks
          </p>

          <div className="relative w-full flex items-center justify-center gap-4 sm:gap-6">
            <Button
              onClick={handleYesClick}
              size="lg"
              disabled={showCelebration}
              className={`text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-6 font-bold rounded-full shadow-lg transition-all ${
                showCelebration
                  ? "bg-primary text-primary-foreground scale-110 ring-4 ring-primary/30 shadow-xl cursor-default"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl hover:scale-105 active:scale-95"
              }`}
            >
              {showCelebration ? "Yes!" : "Yes!"}
            </Button>

            {!showCelebration && (
              <div
                style={{
                  transform: hasMovedNo
                    ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`
                    : "translate(0, 0)",
                  transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  zIndex: 50,
                }}
              >
                <Button
                  ref={noButtonRef}
                  onMouseEnter={handleNoHover}
                  onClick={handleNoClick}
                  size="lg"
                  variant="outline"
                  className={`text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-6 border-2 border-secondary-foreground/30 text-secondary-foreground font-bold rounded-full hover:border-secondary-foreground/30 hover:text-secondary-foreground bg-card hover:bg-card shadow-md ${
                    isWiggling ? "animate-wiggle" : ""
                  }`}
                >
                  No
                </Button>
              </div>
            )}
          </div>

          {hasMovedNo && !showCelebration && (
            <p className="mt-6 text-sm text-muted-foreground/70 animate-pulse">
              {"Hehe, you can't catch me!"}
            </p>
          )}

          {showCelebration && (
            <p className="mt-6 text-lg text-primary font-semibold animate-pulse">
              {"I knew you'd say yes!"}
            </p>
          )}
        </div>

        {/* Decorative corner hearts */}
        <div className="absolute top-3 left-3 text-primary/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute top-3 right-3 text-primary/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 text-primary/20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute bottom-3 right-3 text-primary/20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-8deg) scale(1.1); }
          40% { transform: rotate(8deg) scale(1.1); }
          60% { transform: rotate(-6deg) scale(1.05); }
          80% { transform: rotate(6deg) scale(1.05); }
        }
        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
      `}</style>
    </main>
  )
}
