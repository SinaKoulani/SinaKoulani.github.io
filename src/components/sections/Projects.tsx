import { projects } from "../../data/portfolio"
import ProjectCard from "../ui/ProjectCard"
import Reveal from "../ui/Reveal"

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects