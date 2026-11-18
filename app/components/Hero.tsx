export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] border-b border-[#232530] px-6 py-16 md:py-24 lg:py-32 flex flex-col justify-between">
      {/* Background Architectural Grid Accent */}
      <div className="pointer-events-none absolute inset-0 bg-grid-architect opacity-40 -z-10" />

      {/* Top Section Tag & Coordinates */}
      <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-[#71717a] pb-8 border-b border-[#181920]">
        <div className="flex items-center gap-3">
          <span className="text-[#d4ff32] font-semibold">// 001. PROLOGUE</span>
          <span>•</span>
          <span>PORTFOLIO COMPENDIUM</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="border border-[#232530] px-2.5 py-1 text-[11px] bg-[#111217] text-[#a1a1aa]">
            1ST SEMESTER CS @ BIT BANGALORE
          </span>
          <span className="hidden sm:inline text-[#52525b]">SPEC.VER // 2.6</span>
        </div>
      </div>

      {/* Central Typographic Statement */}
      <div className="mx-auto w-full max-w-7xl my-auto py-12 md:py-20">
        <div className="relative">
          {/* Subtle watermark index */}
          <span className="absolute -top-10 left-0 font-mono text-xs text-[#52525b] uppercase tracking-widest">
            ENGINEER & INTERFACE CRAFTER
          </span>

          {/* Staggered Giant Typographic Sculpture */}
          <div className="flex flex-col select-none">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.88] text-[#f5f5f3]">
              Jigya
            </h1>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mt-2 md:mt-4">
              <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-light uppercase tracking-tighter leading-[0.88] text-[#71717a] hover:text-[#d4ff32] transition-colors duration-300">
                Gupta
              </span>
              <div className="mt-6 md:mt-0 max-w-md font-mono text-xs text-[#a1a1aa] leading-relaxed border-l-2 border-[#d4ff32] pl-4">
                [ FOCUS: WEB ARCHITECTURE & COMPUTATIONAL SYSTEMS ]
                <p className="mt-2 text-sm text-[#f5f5f3] font-sans font-normal leading-normal">
                  CS student who loves building modern web apps and elegant software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons & Navigation Triggers */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4 sm:gap-6 pt-8 border-t border-[#181920]">
          {/* Button 1: View my work (scrolls to Projects) */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 border border-[#d4ff32] bg-[#d4ff32] px-8 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#08080a] transition-all duration-200 hover:bg-[#b8e617] hover:border-[#b8e617] active:scale-95"
          >
            <span>View my work</span>
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>

          {/* Button 2: Contact me (scrolls to Contact) */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-[#3f3f46] bg-[#111217] px-8 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#f5f5f3] transition-all duration-200 hover:border-[#d4ff32] hover:text-[#d4ff32] active:scale-95"
          >
            <span>Contact me</span>
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>

          <div className="hidden lg:flex items-center gap-3 ml-auto font-mono text-xs text-[#52525b]">
            <span>SCROLL TO EXPLORE</span>
            <span className="animate-bounce text-[#d4ff32]">↓</span>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Ribbon */}
      <div className="mx-auto w-full max-w-7xl pt-4 flex items-center justify-between font-mono text-[11px] text-[#52525b]">
        <span>BANGALORE INSTITUTE OF TECHNOLOGY // DEPT. OF CSE</span>
        <span className="hidden sm:inline">COORDINATES: 12.9716° N, 77.5946° E</span>
        <span>INDEX REF: [01-04]</span>
      </div>
    </section>
  );
}
