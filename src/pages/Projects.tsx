import ProjectsSection from "../components/sections/Projects"
import usePageTitle from "../hooks/usePageTitle"

const Projects = () => {
  usePageTitle("Projects")

  return (
    <main>
      <ProjectsSection />
    </main>
  )
}

export default Projects