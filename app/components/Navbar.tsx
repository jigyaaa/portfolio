"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { num: "01", name: "About", href: "#about" },
    { num: "02", name: "Projects", href: "#projects" },
    { num: "03", name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#232530] bg-[#08080a]/90 backdrop-blur-md">
      {/* Top telemetry ticker strip */}
      <div className="hidden border-b border-[#181920] px-6 py-1.5 font-mono text-[11px] text-[#71717a] md:flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#d4ff32] animate-pulse" />
          <span className="text-[#a1a1aa]">SYSTEM STATUS: READY // CS_STUDENT_BIT_BLR</span>
        </div>
        <div className="flex items-center gap-4">
          <span>BANGALORE, IN [12.97°N, 77.59°E]</span>
          <span className="text-[#f5f5f3] font-semibold">{time || "12:00:00"} IST</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Name / Monogram */}
        <a
          href="#"
          className="group flex items-center gap-3 font-mono text-base font-bold tracking-tight text-[#f5f5f3] transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center border border-[#3f3f46] bg-[#111217] text-xs text-[#d4ff32] transition-colors group-hover:border-[#d4ff32] group-hover:bg-[#d4ff32] group-hover:text-[#08080a]">
            JG
          </span>
          <span className="tracking-widest uppercase text-sm">
            Jigya Gupta
          </span>
          <span className="hidden sm:inline-block text-[10px] text-[#71717a] font-normal">
            // 2026 ARCHIVE
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 font-mono text-xs">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group flex items-center gap-1.5 py-1 text-[#a1a1aa] transition-colors hover:text-[#d4ff32]"
                >
                  <span className="text-[#52525b] transition-colors group-hover:text-[#d4ff32]">
                    [{link.num}]
                  </span>
                  <span className="uppercase tracking-wider">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 border border-[#d4ff32] bg-transparent px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-[#d4ff32] transition-all duration-200 hover:bg-[#d4ff32] hover:text-[#08080a]"
          >
            <span>DISPATCH</span>
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center border border-[#27272a] bg-[#111217] text-[#f5f5f3] hover:border-[#d4ff32] hover:text-[#d4ff32] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-[#232530] bg-[#0c0d12] px-6 py-6 md:hidden">
          <ul className="flex flex-col space-y-4 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[#181920] pb-2 text-[#a1a1aa] hover:text-[#d4ff32]"
                >
                  <span className="uppercase">{link.name}</span>
                  <span className="text-xs text-[#52525b]">[{link.num}]</span>
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full border border-[#d4ff32] bg-[#d4ff32] py-2.5 text-center font-mono text-xs font-semibold uppercase tracking-wider text-[#08080a]"
              >
                Dispatch Message ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
