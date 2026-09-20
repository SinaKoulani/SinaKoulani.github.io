import { skills } from "../../data/portfolio"
import PageHeader from "../ui/PageHeader"
import SkillCard from "../ui/SkillCard"

interface SkillsProps {
  limit?: number
}

const Skills = ({ limit }: SkillsProps) => {
  const visibleSkills = limit ? skills.slice(0, limit) : skills

  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <PageHeader
          eyebrow="Skills"
          title="Technologies I Work With"
          description="A collection of technologies and tools I use to build modern web experiences."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills