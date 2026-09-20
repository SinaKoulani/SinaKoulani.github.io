import { profile } from "../../data/portfolio"
import PageHeader from "../ui/PageHeader"
import TypingText from "../ui/TypingText"

const About = () => {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
        <PageHeader
          eyebrow="About Me"
          title="A little about me"
        />

        <div className="rounded-xl border border-line bg-surface p-6 shadow-lg shadow-bg/20 sm:p-8">
          <p className="text-base leading-8 text-muted sm:text-lg">
            <TypingText
              text={profile.about}
              speed={25}
            />
          </p>
        </div>
      </div>
    </section>
  )
}

export default About