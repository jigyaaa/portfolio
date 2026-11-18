"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-950/60 bg-[#0d060f]/80 backdrop-blur-md transition-colors duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Name / Brand Logo with Cherry Blossom */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-mono text-lg font-bold tracking-tight text-white transition-all duration-300 hover:text-pink-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/15 text-pink-300 ring-1 ring-pink-400/30 transition-transform duration-300 group-hover:scale-105 group-hover:ring-pink-400 group-hover:bg-pink-500/25">
            JG
          </span>
          <span className="text-pink-100 group-hover:text-pink-300 flex items-center gap-1.5">
            Jigya Gupta
            <span className="text-sm transition-transform duration-300 group-hover:rotate-12">🌸</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-pink-200/80 transition-colors duration-200 hover:text-pink-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-pink-500/25 transition-all duration-300 hover:from-pink-400 hover:to-rose-400 hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get in touch 🌸
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-pink-300/80 transition-colors hover:bg-pink-950/40 hover:text-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-b border-pink-950/70 bg-[#0d060f]/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-pink-200 transition-colors hover:text-pink-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition-colors hover:from-pink-400 hover:to-rose-400"
              >
                Get in touch 🌸
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
