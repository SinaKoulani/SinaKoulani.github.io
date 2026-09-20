import { skills } from "../../data/portfolio"
import Reveal from "../ui/Reveal"
import SkillCard from "../ui/SkillCard"

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Reveal key={skill.id}>
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills