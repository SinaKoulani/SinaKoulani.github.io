import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary"
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 active:scale-95"

  const variants = {
    primary:
      "bg-accent text-text shadow-lg shadow-accent/10 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-accent/20",
    secondary:
      "border border-line text-text hover:-translate-y-0.5 hover:border-accent hover:bg-surface hover:text-accent-soft",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button