import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { Project } from "../../types/portfolio"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:bg-[var(--color-surface-hover)]">
      <div>
        <h3 className="text-xl font-semibold text-white">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
          {project.description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-hover)]"
        >
          <FaGithub size={18} aria-hidden="true" />
          GitHub
        </a>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            <ExternalLink size={18} aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard