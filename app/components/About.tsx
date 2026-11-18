export default function About() {
  const skills = [
    {
      name: "HTML",
      icon: (
        <svg className="h-4 w-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 5l1.6 15.3L12 22l7.4-1.7L21 5l-9-3zm0 2.2l6.8 2.3-1.3 12.3L12 20.1V4.2z" />
        </svg>
      ),
      level: "Frontend Core",
    },
    {
      name: "CSS",
      icon: (
        <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 5l1.6 15.3L12 22l7.4-1.7L21 5l-9-3zm0 2.2l6.8 2.3-1.3 12.3L12 20.1V4.2z" />
        </svg>
      ),
      level: "Styling & Layout",
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm11.3 13.9c.7.4 1.5.7 2.3.7 1.2 0 1.9-.6 1.9-1.5 0-1-.6-1.4-2.1-2-.2-.1-.5-.2-.7-.3-2.1-.8-3.1-2-3.1-3.6 0-1.8 1.4-3.2 3.6-3.2 1 0 1.9.3 2.7.7l-.7 1.6c-.6-.4-1.3-.6-2-.6-1.1 0-1.7.6-1.7 1.3 0 .8.5 1.2 1.8 1.7.2.1.5.2.7.3 2.3.9 3.4 2 3.4 3.9 0 2-1.5 3.4-4 3.4-1.2 0-2.3-.4-3.1-.9l.7-1.8zm-5.7.1c.5.3 1.1.5 1.7.5.8 0 1.3-.3 1.3-1.2V9.2h2v7.1c0 2-1.2 3.1-3.1 3.1-.9 0-1.8-.3-2.4-.7l.5-1.7z" />
        </svg>
      ),
      level: "ES6+ Logic",
    },
    {
      name: "React",
      icon: (
        <svg className="h-4 w-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      ),
      level: "UI Framework",
    },
    {
      name: "Python",
      icon: (
        <svg className="h-4 w-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-3.3 0-5.4 1.5-5.4 3.7v1.8h5.5v.9H4.3C2.1 8.4 1 10.3 1 12.8c0 2.6 1.4 4.3 3.6 4.3h1.8v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.4c1.5 0 2.7-1.2 2.7-2.7V5.7C17.8 3.5 15.3 2 12 2zm-1.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM19.7 6.9h-1.8v2.3c0 1.8-1.5 3.3-3.3 3.3H9.2c-1.5 0-2.7 1.2-2.7 2.7v3.1c0 2.2 2.5 3.7 5.8 3.7 3.3 0 5.4-1.5 5.4-3.7v-1.8h-5.5v-.9h7.8c2.2 0 3.3-1.9 3.3-4.4 0-2.6-1.4-4.3-3.6-4.3zm-5.9 13.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
        </svg>
      ),
      level: "Programming & Scripts",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-pink-400">
            🌸 Get To Know Me
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
        </div>

        {/* Content Card */}
        <div className="grid gap-10 rounded-2xl border border-pink-950/60 bg-[#160b18]/50 p-8 backdrop-blur-sm md:grid-cols-12 md:p-12">
          {/* Bio text column */}
          <div className="flex flex-col justify-center space-y-4 md:col-span-7">
            <h3 className="text-xl font-semibold text-pink-100 sm:text-2xl flex items-center gap-2">
              Hello! I&apos;m Jigya Gupta. <span>🌸</span>
            </h3>
            <p className="text-base leading-relaxed text-pink-100/90">
              I am currently pursuing Computer Science at{" "}
              <span className="font-semibold text-white">Bangalore Institute of Technology (BIT), Bangalore</span> in my 1st semester.
            </p>
            <p className="text-base leading-relaxed text-pink-200/70">
              I am passionate about programming, learning modern web development frameworks, and turning creative concepts into functional web applications.
            </p>
            <p className="text-base leading-relaxed text-pink-200/70">
              Always curious and excited to learn, I spend my time exploring frontend architectures, writing Python scripts, and experimenting with new tech stacks.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-sm text-pink-300 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                Based in Bangalore, India
              </span>
            </div>
          </div>

          {/* Skills Column */}
          <div className="flex flex-col justify-center rounded-xl border border-pink-950/80 bg-[#0d060f]/80 p-6 md:col-span-5">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-pink-300">
              Technical Skills
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-lg border border-pink-900/40 bg-pink-950/30 px-3.5 py-2 text-sm font-medium text-pink-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/50 hover:bg-pink-900/40 hover:shadow-md hover:shadow-pink-500/10 cursor-default"
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-pink-950/80 pt-4">
              <p className="text-xs text-pink-300/70">
                Currently focusing on sharpening full-stack fundamentals, building interactive React interfaces, and algorithm practice in Python.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
