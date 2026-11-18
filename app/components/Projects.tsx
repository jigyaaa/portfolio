import ProjectCard, { Project } from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      index: "// 01",
      title: "Interactive Developer Archive",
      description:
        "High-precision digital portfolio platform engineered with Next.js App Router, TypeScript, and Tailwind CSS. Built with an asymmetric editorial architecture, smooth telemetry, and reactive micro-interactions.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/jigyaaa/portfolio",
    },
    {
      index: "// 02",
      title: "Web Task & Study Platform",
      description:
        "A responsive productivity web app for college students to manage coursework, deadlines, and study goals with real-time UI updates and local persistence.",
      tags: ["React", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/jigyagupta/task-planner",
    },
    {
      index: "// 03",
      title: "Python Automation & Scraping Suite",
      description:
        "A collection of lightweight Python automation scripts designed to parse datasets, generate structured reports, and eliminate repetitive computer workflows.",
      tags: ["Python", "Automation", "CLI", "File I/O"],
      githubUrl: "https://github.com/jigyagupta/python-automation",
    },
    {
      index: "// 04",
      title: "Algorithms & Logic Visualizer",
      description:
        "An educational computational visualization engine demonstrating fundamental data structures, sorting routines, and step-by-step algorithmic state machines.",
      tags: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
      githubUrl: "https://github.com/jigyagupta/algo-visualizer",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 border-b border-[#232530] px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#181920] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff32]">
              // 02. SELECTED REPOSITORY ARCHIVE
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f5f5f3]">
              Featured Projects
            </h2>
          </div>
          <div className="font-mono text-xs text-[#71717a] text-right">
            <span>INDEX: 2026 // OPEN_SOURCE</span>
            <span className="block text-[#52525b]">[ 04 VERIFIED BUILDS ]</span>
          </div>
        </div>

        {/* Projects Dossier Grid */}
        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Global GitHub Profile Dispatch Button */}
        <div className="mt-12 pt-8 border-t border-[#181920] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-[#71717a]">
            WANT TO EXPLORE MORE OPEN-SOURCE EXPERIMENTS?
          </span>
          <a
            href="https://github.com/jigyaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-[#3f3f46] bg-[#111217] px-6 py-3 font-semibold uppercase tracking-wider text-[#f5f5f3] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors"
          >
            <span>GITHUB PROFILE [jigyaaa]</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
