import { ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { profile, socialLinks } from "../../data/portfolio"
import Button from "../ui/Button"
import Reveal from "../ui/Reveal"
import TypingText from "../ui/TypingText"

const githubLink = socialLinks.find((link) => link.icon === "github")

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-64 w-64 rounded-full bg-accent-deep/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-4 py-20">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Frontend Developer
              </span>
            </div>

            <p className="text-lg font-medium text-accent-soft">
              <TypingText text={profile.jobTitle} />
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-5 text-lg text-muted sm:text-xl">
              {profile.stackLine}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {profile.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/projects">
                <Button>
                  View Projects
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>

              {githubLink && (
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    <FaGithub size={18} aria-hidden="true" />
                    {githubLink.label}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero