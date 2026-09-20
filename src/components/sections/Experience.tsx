import { experience } from "../../data/portfolio"
import Badge from "../ui/Badge"
import PageHeader from "../ui/PageHeader"

const Experience = () => {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
        <PageHeader
          eyebrow="Experience"
          title="My Experience"
          description="A timeline of my development journey and the technologies I have worked with."
        />

        <div className="relative">
          <div
            className="absolute bottom-0 left-3 top-0 w-px bg-line"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((item) => (
              <article
                key={item.id}
                className="group relative pl-10 transition-transform duration-300 hover:translate-x-1"
              >
                <span
                  className="absolute left-0 top-6 h-7 w-7 -translate-y-1/2 rounded-full border-2 border-line bg-bg transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20"
                  aria-hidden="true"
                />

                <div className="rounded-xl border border-line bg-surface p-6 shadow-lg shadow-bg/20 transition-all duration-300 group-hover:border-accent/60 group-hover:bg-surface-hover group-hover:shadow-accent/5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-semibold text-text transition-colors duration-300 group-hover:text-accent-soft">
                      {item.title}
                    </h2>

                    <span className="text-sm font-medium text-accent-soft">
                      {item.year}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.techStack.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience