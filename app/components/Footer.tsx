import { SmallFlowersBottom } from "./CherryBlossomDecor";

export default function Footer() {
  return (
    <footer className="border-t border-pink-950/60 bg-[#0d060f] py-10 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Decorative row of small flowers down at the bottom */}
        <SmallFlowersBottom />

        <div className="mt-4 flex flex-col items-center justify-between gap-6 sm:flex-row border-t border-pink-950/40 pt-6">
          <p className="text-sm text-pink-300/70">
            &copy; 2026 <span className="font-medium text-pink-100">Jigya Gupta</span>. All rights reserved. 🌸
          </p>

          <div className="flex items-center space-x-6 text-sm text-pink-300/70">
            <a href="#about" className="transition-colors hover:text-pink-300">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-pink-300">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-pink-300">
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-pink-400/60 transition-colors hover:text-pink-300"
              aria-label="Back to top"
            >
              <span>Top</span>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
