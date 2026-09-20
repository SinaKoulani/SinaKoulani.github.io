import type { Skill } from "../../types/portfolio"
import { skillIcons } from "../../utils/skillIcons"

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = skillIcons[skill.icon]

  return (
    <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:bg-[var(--color-surface-hover)]">
      <Icon
        className="text-3xl text-[var(--color-accent)]"
        aria-hidden="true"
      />

      <h3 className="mt-4 text-lg font-semibold text-white">
        {skill.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
        {skill.description}
      </p>
    </article>
  )
}

export default SkillCard