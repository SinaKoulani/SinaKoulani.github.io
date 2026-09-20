import type { Skill } from "../../types/portfolio"
import { skillIcons } from "../../utils/skillIcons"

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = skillIcons[skill.icon]

  return (
    <article className="group rounded-xl border border-line bg-surface p-6 shadow-lg shadow-bg/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover hover:shadow-accent/5">
      <Icon
        className="text-3xl text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-accent-soft"
        aria-hidden="true"
      />

      <h3 className="mt-4 text-lg font-semibold text-text transition-colors duration-300 group-hover:text-accent-soft">
        {skill.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted">
        {skill.description}
      </p>
    </article>
  )
}

export default SkillCard