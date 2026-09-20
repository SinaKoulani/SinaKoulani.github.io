import { ArrowUpRight, Mail, Send } from "lucide-react"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { socialLinks } from "../../data/portfolio"
import PageHeader from "../ui/PageHeader"

const iconMap = {
  email: Mail,
  github: FaGithub,
  telegram: Send,
  instagram: FaInstagram,
}

const Contact = () => {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <PageHeader
          eyebrow="Contact"
          title="Let's Connect"
          description="Feel free to reach out through any of the platforms below."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]

            return (
              <a
                key={link.id}
                href={link.href}
                target={link.icon === "email" ? undefined : "_blank"}
                rel={
                  link.icon === "email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between rounded-xl border border-line bg-surface p-5 shadow-lg shadow-bg/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover hover:shadow-accent/5"
              >
                <div className="flex items-center gap-4">
                  <Icon
                    size={22}
                    className="text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-accent-soft"
                    aria-hidden="true"
                  />

                  <span className="font-medium text-text transition-colors duration-300 group-hover:text-accent-soft">
                    {link.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                  aria-hidden="true"
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact