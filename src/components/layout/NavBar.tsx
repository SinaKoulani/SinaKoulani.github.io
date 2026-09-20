import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { profile } from "../../data/portfolio"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-accent-soft"
        : "text-muted hover:text-text"
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-lg font-bold text-text transition-colors hover:text-accent-soft"
        >
          {profile.name}
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={getLinkClassName}
              onClick={closeMenu}
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 text-text transition-colors hover:bg-surface md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-line md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-surface text-accent-soft"
                      : "text-muted hover:bg-surface hover:text-text"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar