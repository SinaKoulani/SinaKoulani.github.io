interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

const PageHeader = ({
  eyebrow,
  title,
  description,
}: PageHeaderProps) => {
  return (
    <header className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-accent" />

        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        )}
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </header>
  )
}

export default PageHeader