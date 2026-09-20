import { ArrowRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import type { CSSProperties, MouseEvent } from "react"
import type { Project } from "../../types/portfolio"
import Badge from "./Badge"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    event.currentTarget.style.setProperty("--mx", `${x}px`)
    event.currentTarget.style.setProperty("--my", `${y}px`)
  }

  const cardStyle = {
    "--mx": "50%",
    "--my": "50%",
  } as CSSProperties

  return (
    <article
      className="group relative flex h-full overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-lg shadow-bg/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-accent/10"
      style={cardStyle}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), var(--color-card-glow), transparent 12rem)",
          }}
        />

      <div className="relative flex w-full flex-col">
        <Link
          to={`/projects/${project.id}`}
          className="block focus-visible:outline-none"
          aria-label={`View ${project.name} project details`}
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-text transition-colors duration-300 group-hover:text-accent-soft">
              {project.name}
            </h3>

            <ArrowRight
              size={20}
              className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-soft"
              aria-hidden="true"
            />
          </div>

          <p className="mt-3 text-sm leading-6 text-muted">
            {project.description}
          </p>
        </Link>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent-soft"
          >
            <FaGithub
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:scale-110"
            />
            GitHub
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent-soft"
            >
              <ExternalLink
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/link:translate-x-0.5"
              />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard