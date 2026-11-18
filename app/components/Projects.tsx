import ProjectCard, { Project } from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Interactive Developer Portfolio",
      description:
        "A fast, modern personal portfolio website crafted with Next.js App Router, TypeScript, and Tailwind CSS featuring smooth scroll navigation and cherry blossom aesthetics.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/jigyagupta/portfolio",
    },
    {
      title: "Web Task & Study Planner",
      description:
        "A responsive productivity web app for college students to manage coursework, deadlines, and study goals with real-time UI updates and local persistence.",
      tags: ["React", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/jigyagupta/task-planner",
    },
    {
      title: "Python Automation & Scraping Suite",
      description:
        "A collection of lightweight Python automation scripts to parse data, generate reports, and automate daily repetitive computer tasks.",
      tags: ["Python", "Automation", "File I/O"],
      githubUrl: "https://github.com/jigyagupta/python-automation",
    },
    {
      title: "Algorithms & Logic Visualizer",
      description:
        "An educational web application demonstrating fundamental computer science data structures and sorting algorithms with interactive controls.",
      tags: ["JavaScript", "HTML", "CSS", "Algorithms"],
      githubUrl: "https://github.com/jigyagupta/algo-visualizer",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-pink-400">
            🌸 Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
          <p className="mt-4 max-w-xl text-base text-pink-200/70">
            Here are some of the web applications and programming projects I have built while exploring software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Extra link to GitHub profile */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/jigyagupta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-pink-950/80 bg-[#160b18]/60 px-6 py-3 text-sm font-medium text-pink-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/50 hover:bg-pink-950/40 hover:text-white"
          >
            <span>See more repositories on GitHub 🌸</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
