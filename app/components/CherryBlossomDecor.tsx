"use client";

import React from "react";

/**
 * Single SVG Sakura Blossom Flower
 */
export function SakuraFlower({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} transition-transform duration-500`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sakuraGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb3cb" />
          <stop offset="60%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#db2777" />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#9f1239" />
        </radialGradient>
      </defs>

      {/* 5 Petals rotated around center (50, 50) */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 50 C42 32 30 18 45 10 C48 8 50 12 50 12 C50 12 52 8 55 10 C70 18 58 32 50 50 Z"
            fill="url(#sakuraGrad)"
            opacity="0.95"
            stroke="#fbcfe8"
            strokeWidth="0.8"
          />
        </g>
      ))}

      {/* Stamens radiating from center */}
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <line x1="50" y1="50" x2="50" y2="35" stroke="#fecdd3" strokeWidth="1" strokeLinecap="round" />
          <circle cx="50" cy="34" r="1.5" fill="#fef08a" />
        </g>
      ))}

      {/* Flower Center Core */}
      <circle cx="50" cy="50" r="6" fill="url(#centerGlow)" />
    </svg>
  );
}

/**
 * Blooming Hero Flower Component:
 * Expands and opens up with an unfurling blossom animation on page load.
 */
export function BloomingSakuraHero() {
  return (
    <div className="relative mb-6 flex items-center justify-center">
      {/* Ambient pink pulse glow behind the flower */}
      <div
        className="absolute h-32 w-32 rounded-full bg-pink-500/20 blur-2xl animate-pulse"
        aria-hidden="true"
      />

      {/* The Opening Flower with blossom animation */}
      <div className="relative animate-bloom animate-pulse-glow">
        <SakuraFlower className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-[0_0_15px_rgba(244,114,182,0.6)]" />
      </div>
    </div>
  );
}

/**
 * Falling Small Flowers & Petals:
 * Drifts down continuously across the page without interfering with clicks.
 */
export function FallingPetals() {
  // Pre-configured positions and animations for falling flowers/petals
  const petals = [
    { left: "8%", delay: "0s", duration: "11s", size: "w-4 h-4", rotate: "15deg" },
    { left: "18%", delay: "3s", duration: "14s", size: "w-5 h-5", rotate: "-20deg" },
    { left: "28%", delay: "1.5s", duration: "12s", size: "w-3 h-3", rotate: "45deg" },
    { left: "42%", delay: "5s", duration: "16s", size: "w-6 h-6", rotate: "-35deg" },
    { left: "55%", delay: "2s", duration: "13s", size: "w-4 h-4", rotate: "60deg" },
    { left: "68%", delay: "6.5s", duration: "15s", size: "w-5 h-5", rotate: "-15deg" },
    { left: "78%", delay: "0.8s", duration: "12.5s", size: "w-3 h-3", rotate: "30deg" },
    { left: "88%", delay: "4s", duration: "14.5s", size: "w-5 h-5", rotate: "-40deg" },
    { left: "94%", delay: "2.5s", duration: "17s", size: "w-4 h-4", rotate: "50deg" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal, index) => (
        <div
          key={index}
          className="petal-drift absolute top-0"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            transform: `rotate(${petal.rotate})`,
          }}
        >
          {index % 2 === 0 ? (
            // Small blooming flower icon
            <SakuraFlower className={`${petal.size} opacity-75`} />
          ) : (
            // Curved delicate petal SVG
            <svg
              className={`${petal.size} text-pink-300 opacity-80`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C9.5 5 7 9 7 13.5C7 17.5 9.5 21 12 21C14.5 21 17 17.5 17 13.5C17 9 14.5 5 12 2Z" fill="url(#sakuraGrad)" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Bottom Small Flowers Row:
 * Decorative ribbon of miniature cherry blossoms for the footer & bottom of pages.
 */
export function SmallFlowersBottom() {
  return (
    <div className="flex items-center justify-center gap-3 py-4 text-pink-400/70">
      <span className="text-xs">❀</span>
      <SakuraFlower className="h-4 w-4 opacity-75" />
      <span className="text-xs">🌸</span>
      <SakuraFlower className="h-5 w-5 opacity-90" />
      <span className="text-sm font-serif tracking-wider text-pink-300/80">🌸 ❀ 🌸</span>
      <SakuraFlower className="h-5 w-5 opacity-90" />
      <span className="text-xs">🌸</span>
      <SakuraFlower className="h-4 w-4 opacity-75" />
      <span className="text-xs">❀</span>
    </div>
  );
}
