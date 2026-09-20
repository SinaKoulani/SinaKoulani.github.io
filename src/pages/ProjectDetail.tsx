import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import { projects } from "../data/portfolio"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import PageHeader from "../components/ui/PageHeader"
import usePageTitle from "../hooks/usePageTitle"

const ProjectDetail = () => {
  const { id } = useParams()
  const projectIndex = projects.findIndex((project) => project.id === id)
  const project = projects[projectIndex]

  usePageTitle(project ? project.name : "404")

  if (!project) {
    return (
      <main className="bg-bg">
        <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:py-32">
          <PageHeader
            eyebrow="404"
            title="Project Not Found"
            description="The project you are looking for does not exist."
          />

          <Link to="/projects">
            <Button>
              <ArrowLeft
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Projects
            </Button>
          </Link>
        </section>
      </main>
    )
  }

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : null

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null

  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
        <Link
          to="/projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-soft"
        >
          <ArrowLeft
            size={17}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>

        <PageHeader
          eyebrow="Project"
          title={project.name}
          description={project.description}
        />

        <div className="space-y-8">
          <section className="rounded-xl border border-line bg-surface p-6 shadow-lg shadow-bg/20 sm:p-8">
            <h2 className="text-xl font-semibold text-text">
              About the project
            </h2>

            <p className="mt-4 leading-8 text-muted">
              {project.longDescription}
            </p>
          </section>

          <section className="rounded-xl border border-line bg-surface p-6 shadow-lg shadow-bg/20 sm:p-8">
            <h2 className="text-xl font-semibold text-text">
              Key highlights
            </h2>

            <ul className="mt-5 space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-7 text-muted"
                >
                  <span
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-line bg-surface p-6 shadow-lg shadow-bg/20 sm:p-8">
            <h2 className="text-xl font-semibold text-text">
              Technologies
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <FaGithub size={18} aria-hidden="true" />
                GitHub
                <ExternalLink size={16} aria-hidden="true" />
              </Button>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">
                  <ExternalLink size={17} aria-hidden="true" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>

          <nav
            className="grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
            aria-label="Project navigation"
          >
            {previousProject ? (
              <Link
                to={`/projects/${previousProject.id}`}
                className="group rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-muted">
                  Previous Project
                </span>

                <span className="mt-2 flex items-center gap-2 font-medium text-text transition-colors group-hover:text-accent-soft">
                  <ArrowLeft
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  {previousProject.name}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group rounded-xl border border-line bg-surface p-5 text-right transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-muted">
                  Next Project
                </span>

                <span className="mt-2 flex items-center justify-end gap-2 font-medium text-text transition-colors group-hover:text-accent-soft">
                  {nextProject.name}
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            )}
          </nav>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetail