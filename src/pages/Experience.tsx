import ExperienceSection from "../components/sections/Experience"
import usePageTitle from "../hooks/usePageTitle"

const Experience = () => {
  usePageTitle("Experience")

  return (
    <main>
      <ExperienceSection />
    </main>
  )
}

export default Experience