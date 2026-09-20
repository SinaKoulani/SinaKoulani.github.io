const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-[var(--color-text-muted)]">
        © {currentYear} All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;