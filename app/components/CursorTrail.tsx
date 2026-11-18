"use client";

import { useEffect, useState } from "react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  char: string;
  size: number;
  rotation: number;
  vx: number;
  vy: number;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<TrailParticle[]>([]);

  useEffect(() => {
    let particleId = 0;
    let lastTime = 0;
    const throttleMs = 35; // Spawns particle every ~35ms on movement

    const blossomIcons = ["🌸", "❀", "✿", "✦", "•"];

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const randomChar =
        blossomIcons[Math.floor(Math.random() * blossomIcons.length)];
      const randomSize = Math.random() * 8 + 12; // 12px - 20px
      const randomRotation = Math.random() * 360;
      const vx = (Math.random() - 0.5) * 1.5;
      const vy = Math.random() * 1.2 + 0.8; // Gentle downward drift

      const newParticle: TrailParticle = {
        id: ++particleId,
        x: e.clientX,
        y: e.clientY,
        char: randomChar,
        size: randomSize,
        rotation: randomRotation,
        vx,
        vy,
      };

      setParticles((prev) => [...prev.slice(-25), newParticle]); // Keep max 25 particles in state
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Continuous fade / cleanup timer
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            rotation: p.rotation + 4,
          }))
          .filter((_, idx, arr) => idx > arr.length - 20) // Natural decay
      );
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none transition-all duration-700 ease-out animate-cursor-fade"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            color: p.char === "•" || p.char === "✦" ? "#fbcfe8" : "inherit",
            textShadow: "0 0 8px rgba(244, 114, 182, 0.7)",
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
