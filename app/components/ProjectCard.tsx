export interface Project {
  index: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative border border-[#1f212d] bg-[#111217]/50 p-6 md:p-8 transition-all duration-300 hover:border-[#d4ff32] hover:bg-[#111217]">
      {/* Corner crosshairs for architectural framing */}
      <span className="absolute -top-1.5 -left-1.5 font-mono text-xs text-[#52525b] group-hover:text-[#d4ff32] select-none">
        +
      </span>
      <span className="absolute -top-1.5 -right-1.5 font-mono text-xs text-[#52525b] group-hover:text-[#d4ff32] select-none">
        +
      </span>

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        {/* Left Side: Index & Project Info */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs text-[#71717a]">
            <span className="text-[#d4ff32] font-semibold tracking-wider">
              {project.index}
            </span>
            <span>//</span>
            <span className="uppercase text-[#a1a1aa]">PROTOTYPE & RELEASE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f5f5f3] transition-colors group-hover:text-[#d4ff32]">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#27272a] bg-[#181920] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#a1a1aa] transition-colors group-hover:border-[#3f3f46] group-hover:text-[#f5f5f3]"
              >
                [{tag}]
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: GitHub Action Trigger */}
        <div className="lg:self-end pt-4 lg:pt-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 border border-[#3f3f46] bg-[#181920] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#f5f5f3] transition-all duration-200 hover:border-[#d4ff32] hover:bg-[#d4ff32] hover:text-[#08080a]"
            aria-label={`View ${project.title} on GitHub`}
          >
            <span>View on GitHub</span>
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
