import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Experience from "./components/sections/Experience"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <NavBar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App;