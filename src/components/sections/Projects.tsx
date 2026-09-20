import { ArrowRight } from "lucide-react"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { projects } from "../../data/portfolio"
import PageHeader from "../ui/PageHeader"
import ProjectCard from "../ui/ProjectCard"

interface ProjectsProps {
  featuredOnly?: boolean
  limit?: number
  showFilters?: boolean
  showViewAll?: boolean
}

const Projects = ({
  featuredOnly = false,
  limit,
  showFilters = true,
  showViewAll = false,
}: ProjectsProps) => {
  const [selectedTechnology, setSelectedTechnology] = useState("All")

  const technologies = useMemo(() => {
    const values = projects.flatMap((project) => project.techStack)

    return ["All", ...Array.from(new Set(values))]
  }, [])

  const filteredProjects = useMemo(() => {
    const sourceProjects = featuredOnly
      ? projects.filter((project) => project.featured)
      : projects

    const filtered =
      selectedTechnology === "All"
        ? sourceProjects
        : sourceProjects.filter((project) =>
            project.techStack.includes(selectedTechnology),
          )

    return limit ? filtered.slice(0, limit) : filtered
  }, [featuredOnly, limit, selectedTechnology])

  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <PageHeader
          eyebrow="Work"
          title={featuredOnly ? "Featured Projects" : "Projects"}
          description={
            featuredOnly
              ? "A few projects that showcase my approach to modern frontend development."
              : "A selection of projects built with modern frontend technologies."
          }
        />

        {showFilters && (
          <div
            className="mb-10 flex flex-wrap gap-2"
            aria-label="Project filters"
          >
            {technologies.map((technology) => {
              const isSelected = technology === selectedTechnology

              return (
                <button
                  key={technology}
                  type="button"
                  onClick={() => setSelectedTechnology(technology)}
                  className={`rounded-md border px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? "border-accent bg-accent text-text"
                      : "border-line bg-surface text-muted hover:border-accent hover:bg-surface-hover hover:text-accent-soft"
                  }`}
                  aria-pressed={isSelected}
                >
                  {technology}
                </button>
              )
            })}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent-soft"
            >
              View all projects
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects