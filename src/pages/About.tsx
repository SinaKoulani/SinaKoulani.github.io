import AboutSection from "../components/sections/About"
import Skills from "../components/sections/Skills"
import usePageTitle from "../hooks/usePageTitle"

const About = () => {
  usePageTitle("About")

  return (
    <main>
      <AboutSection />
      <Skills />
    </main>
  )
}

export default About