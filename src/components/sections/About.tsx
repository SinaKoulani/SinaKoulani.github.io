import { profile } from "../../data/portfolio"
import Reveal from "../ui/Reveal"

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              About
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              {profile.about}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About;