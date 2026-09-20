import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-medium text-muted transition-all duration-300 hover:border-accent hover:bg-surface-hover hover:text-accent-soft">
      {children}
    </span>
  )
}

export default Badge