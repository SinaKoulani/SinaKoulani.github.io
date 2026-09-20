import { FaGithub } from "react-icons/fa"
import { profile, socialLinks } from "../../data/portfolio"
import Reveal from "../ui/Reveal"
import TypingText from "../ui/TypingText"

const githubLink = socialLinks.find((link) => link.icon === "github")

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-4 py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-lg font-medium text-[var(--color-accent-hover)]">
              <TypingText text={profile.jobTitle} />
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-5 text-lg text-[var(--color-text-muted)] sm:text-xl">
              {profile.stackLine}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              {profile.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                View Projects
              </a>

              {githubLink && (
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                >
                  <FaGithub size={18} aria-hidden="true" />
                  {githubLink.label}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero;