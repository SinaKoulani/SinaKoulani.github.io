import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { profile, socialLinks } from "../../data/portfolio"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
]

const Footer = () => {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            to="/about"
            className="font-semibold text-text transition-colors hover:text-accent-soft"
          >
            {profile.name}
          </Link>

          <p className="mt-2 text-sm text-muted">
            {profile.jobTitle}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-3"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="relative text-sm text-muted transition-colors hover:text-accent-soft after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.icon === "email" ? undefined : "_blank"}
              rel={
                link.icon === "email"
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
              className="group text-muted transition-colors hover:text-accent-soft"
            >
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer