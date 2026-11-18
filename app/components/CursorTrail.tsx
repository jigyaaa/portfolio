"use client";

import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let count = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

      const now = performance.now();
      if (now - lastTime > 40) {
        lastTime = now;
        const newParticle = { x: e.clientX, y: e.clientY, id: ++count };
        setTrail((prev) => [...prev.slice(-12), newParticle]);
      }
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const interval = setInterval(() => {
      setTrail((prev) => prev.filter((_, idx, arr) => idx > arr.length - 10));
    }, 60);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(interval);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block overflow-hidden" aria-hidden="true">
      {/* Trailing echoes */}
      {trail.map((p, index) => {
        const opacity = (index + 1) / trail.length * 0.4;
        const scale = (index + 1) / trail.length * 0.8;
        return (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#d4ff32] transition-all duration-300"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: "6px",
              height: "6px",
              opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              boxShadow: "0 0 10px rgba(212, 255, 50, 0.5)",
            }}
          />
        );
      })}

      {/* Main Precision Cursor Ring */}
      <div
        className="absolute rounded-full border border-[#d4ff32] transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: "28px",
          height: "28px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="absolute inset-[11px] rounded-full bg-[#d4ff32]" />
      </div>
    </div>
  );
}
