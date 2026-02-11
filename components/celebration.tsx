"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  rotation: number
  scale: number
  delay: number
}

const colors = ["#ff6b9d", "#c44569", "#f8a5c2", "#ffcccc", "#ff8fab", "#ffc8dd", "#ffd700", "#ff69b4"]

export function Celebration() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    // Create initial confetti burst
    const pieces: ConfettiPiece[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      delay: Math.random() * 2,
    }))
    setConfetti(pieces)

    // Add more confetti periodically
    const interval = setInterval(() => {
      const newPieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
        delay: Math.random() * 0.5,
      }))
      setConfetti((prev) => [...prev.slice(-100), ...newPieces])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg) scale(${piece.scale})`,
          }}
        >
          {Math.random() > 0.5 ? (
            // Heart shape
            <svg width="16" height="16" viewBox="0 0 24 24" fill={piece.color}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            // Rectangle confetti
            <div
              className="w-3 h-4 rounded-sm"
              style={{ backgroundColor: piece.color }}
            />
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0.7;
          }
        }
        .animate-confetti-fall {
          animation: confetti-fall 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  )
}
