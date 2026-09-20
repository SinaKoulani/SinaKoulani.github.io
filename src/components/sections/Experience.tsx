import { experience } from "../../data/portfolio"
import Reveal from "../ui/Reveal"

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Experience
          </h2>
        </Reveal>

        <div className="relative mt-10 border-l border-[var(--color-border)] pl-6">
          <div className="space-y-10">
            {experience.map((item) => (
              <Reveal key={item.id}>
                <article className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)]" />

                  <p className="text-sm font-medium text-[var(--color-accent-hover)]">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.techStack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience