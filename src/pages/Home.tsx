import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
import Button from "../components/ui/Button"
import usePageTitle from "../hooks/usePageTitle"

const Home = () => {
  usePageTitle("Home")

  return (
    <main>
      <Hero />

      <Projects
        featuredOnly
        limit={3}
        showFilters={false}
        showViewAll
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Skills
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                What I Work With
              </h2>
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-soft"
            >
              View all skills
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <Skills limit={6} />
        </div>
      </section>

      <section className="bg-bg-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="rounded-2xl border border-line bg-surface p-8 text-center shadow-lg shadow-bg/20 sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
              Let&apos;s connect and talk about what you are building.
            </p>

            <div className="mt-7">
              <Link to="/contact">
                <Button>
                  Get in Touch
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home