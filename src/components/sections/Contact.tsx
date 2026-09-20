import { Mail } from "lucide-react"
import { FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa"
import { socialLinks } from "../../data/portfolio"
import Reveal from "../ui/Reveal"

const socialIcons = {
  email: Mail,
  github: FaGithub,
  telegram: FaTelegramPlane,
  instagram: FaInstagram,
}

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Contact
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Feel free to reach out through any of the platforms below.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon]

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto:") ? undefined : "noreferrer"
                    }
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                  >
                    <Icon size={18} aria-hidden="true" />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

