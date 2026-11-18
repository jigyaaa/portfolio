export default function About() {
  const skills = [
    {
      name: "React",
      category: "UI Architecture",
      indicator: "MODERN VIRTUAL DOM & STATE HOOKS",
      badge: "FRAMEWORK",
    },
    {
      name: "Python",
      category: "Computational Logic",
      indicator: "DATA STRUCTURES, CLI & AUTOMATION",
      badge: "CORE LOGIC",
    },
    {
      name: "JavaScript",
      category: "Web Engine",
      indicator: "ES6+, ASYNC PATTERNS & CLIENT RUNTIME",
      badge: "RUNTIME",
    },
    {
      name: "CSS",
      category: "Design Systems",
      indicator: "RESPONSIVE LAYOUTS & TAILWIND",
      badge: "STYLING",
    },
    {
      name: "HTML",
      category: "Semantic Web",
      indicator: "ACCESSIBLE DOM & COMPONENT HIERARCHY",
      badge: "FOUNDATION",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 border-b border-[#232530] px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#181920] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff32]">
              // 01. DOSSIER & MANIFESTO
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f5f5f3]">
              About Me
            </h2>
          </div>
          <div className="font-mono text-xs text-[#71717a] text-right">
            <span>BIT.BLR // SEM-01</span>
            <span className="block text-[#52525b]">SPEC: CS_ENGINEERING</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          {/* Left Column: Biography & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[#d4ff32]">
                [ BIOGRAPHICAL ABSTRACT ]
              </p>
              <h3 className="text-2xl sm:text-3xl font-light leading-snug text-[#f5f5f3]">
                First-semester Computer Science student at{" "}
                <span className="font-semibold text-white underline decoration-[#d4ff32] decoration-2 underline-offset-4">
                  Bangalore Institute of Technology (BIT)
                </span>
                , Bangalore.
              </h3>
              <p className="text-base text-[#a1a1aa] leading-relaxed">
                I am deeply drawn to the craftsmanship of building clean, responsive web applications and exploring core computational algorithms.
              </p>
              <p className="text-base text-[#a1a1aa] leading-relaxed">
                When I&apos;m not writing code, I am experimenting with modern frontend architectures, writing Python scripts, and refining my understanding of software engineering fundamentals.
              </p>
            </div>

            {/* Geographical / Institutional Coordinates Stamp */}
            <div className="border border-[#232530] bg-[#111217] p-5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[#71717a] border-b border-[#1f212d] pb-2">
                <span>INSTITUTION</span>
                <span className="text-[#f5f5f3] font-medium">BIT BANGALORE</span>
              </div>
              <div className="flex items-center justify-between text-[#71717a] border-b border-[#1f212d] pb-2">
                <span>SEMESTER / DISCIPLINE</span>
                <span className="text-[#f5f5f3] font-medium">01 // COMPUTER SCIENCE</span>
              </div>
              <div className="flex items-center justify-between text-[#71717a]">
                <span>LOCATION</span>
                <span className="text-[#d4ff32]">BANGALORE, KARNATAKA, IN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Capability Matrix (Art-directed Skill Tags) */}
          <div className="lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#232530] lg:pl-12 pt-8 lg:pt-0">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#181920]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#71717a]">
                  TECHNICAL SKILL MATRIX
                </span>
                <span className="font-mono text-xs text-[#d4ff32]">
                  [05 VERIFIED TOOLS]
                </span>
              </div>

              {/* Skill Items List */}
              <div className="mt-6 space-y-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col sm:flex-row sm:items-center justify-between border border-[#1f212d] bg-[#111217]/60 p-4 transition-all duration-200 hover:border-[#d4ff32] hover:bg-[#111217]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#52525b] group-hover:text-[#d4ff32]">
                        0{index + 1}.
                      </span>
                      <h4 className="text-lg font-bold uppercase tracking-tight text-[#f5f5f3] group-hover:text-[#d4ff32]">
                        {skill.name}
                      </h4>
                    </div>

                    <div className="mt-2 sm:mt-0 flex items-center gap-3 font-mono text-xs">
                      <span className="text-[11px] text-[#71717a] hidden md:inline">
                        {skill.indicator}
                      </span>
                      <span className="border border-[#27272a] bg-[#181920] px-2.5 py-1 text-[10px] uppercase text-[#a1a1aa] group-hover:border-[#d4ff32] group-hover:text-[#d4ff32]">
                        {skill.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills summary chips */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#181920]">
                {["HTML", "CSS", "JavaScript", "React", "Python"].map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 border border-[#27272a] bg-[#111217] px-3 py-1 font-mono text-xs text-[#a1a1aa] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff32]" />
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 font-mono text-xs text-[#52525b] leading-relaxed">
              * Dedicated to writing structured, maintainable code with deep attention to typography, modularity, and runtime performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
