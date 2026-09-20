import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProjectDetail from "./pages/ProjectDetail"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App