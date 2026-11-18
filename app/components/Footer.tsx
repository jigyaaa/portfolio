export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#08080a] pt-16 pb-12 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Navigation & Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#181920] font-mono text-xs">
          {/* Col 1: Identity */}
          <div className="md:col-span-5 space-y-2">
            <span className="text-[#f5f5f3] font-bold uppercase tracking-wider block">
              Jigya Gupta // Portfolio
            </span>
            <p className="text-[#71717a] leading-relaxed max-w-sm">
              Computer Science student at Bangalore Institute of Technology (BIT), exploring web systems, interfaces, and algorithmic software.
            </p>
          </div>

          {/* Col 2: Coordinates */}
          <div className="md:col-span-4 space-y-1 text-[#71717a]">
            <span className="text-[#a1a1aa] uppercase text-[11px] block">GEOLOCATION</span>
            <p>BANGALORE, KARNATAKA, INDIA</p>
            <p className="text-[#52525b]">12.9716° N, 77.5946° E // ASIA/KOLKATA</p>
          </div>

          {/* Col 3: Navigation */}
          <div className="md:col-span-3 space-y-2 md:text-right">
            <span className="text-[#a1a1aa] uppercase text-[11px] block">NAVIGATE</span>
            <div className="flex md:justify-end gap-4 text-[#71717a]">
              <a href="#about" className="hover:text-[#d4ff32] transition-colors">[ABOUT]</a>
              <a href="#projects" className="hover:text-[#d4ff32] transition-colors">[WORK]</a>
              <a href="#contact" className="hover:text-[#d4ff32] transition-colors">[CONTACT]</a>
              <a href="#" className="text-[#d4ff32] hover:underline">[TOP ↑]</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Massive Bleed Watermark */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#52525b]">
          <p>
            &copy; 2026 <span className="text-[#a1a1aa] font-semibold">Jigya Gupta</span>. All rights reserved.
          </p>
          <span className="text-[11px]">ARCHITECTURAL SPEC // BUILT WITH NEXT.JS & TAILWIND CSS</span>
        </div>

        {/* Massive Typographic Watermark Background */}
        <div className="pointer-events-none select-none mt-12 text-center overflow-hidden" aria-hidden="true">
          <span className="text-[14vw] font-black uppercase tracking-tighter leading-none text-[#12131a]/60 block whitespace-nowrap">
            Jigya Gupta
          </span>
        </div>
      </div>
    </footer>
  );
}
