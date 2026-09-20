import type {
  Experience,
  Profile,
  Project,
  Skill,
  SocialLink,
} from "../types/portfolio"

export const profile: Profile = {
  name: "Sina Koulani",
  jobTitle: "Frontend Developer",
  stackLine: "React • TypeScript • Tailwind CSS",
  heroDescription:
    "I build modern, responsive web experiences with a focus on clean code, thoughtful interfaces, and great user experiences.",
  about:
    "I am a frontend developer passionate about building modern web applications and continuously improving my skills through practical projects.",
}

export const skills: Skill[] = [
  {
    id: "python",
    name: "Python",
    description: "Building reliable applications and backend solutions.",
    icon: "python",
  },
  {
    id: "django",
    name: "Django",
    description: "Developing structured and scalable web applications.",
    icon: "django",
  },
  {
    id: "vue",
    name: "Vue.js",
    description: "Building reactive and component-based user interfaces.",
    icon: "vue",
  },
  {
    id: "nuxtjs",
    name: "Nuxt.js",
    description: "Building modern applications with the Vue.js ecosystem.",
    icon: "nuxtjs",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Creating interactive and dynamic web experiences.",
    icon: "javascript",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Writing safer and more maintainable frontend code.",
    icon: "typescript",
  },
  {
    id: "react",
    name: "React",
    description: "Creating reusable and scalable user interfaces.",
    icon: "react",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "Building modern React applications and web experiences.",
    icon: "nextjs",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "Building responsive interfaces with utility-first styling.",
    icon: "tailwind",
  },
  {
    id: "html",
    name: "HTML",
    description: "Creating semantic and accessible web structures.",
    icon: "html",
  },
  {
    id: "css",
    name: "CSS",
    description: "Creating responsive layouts and polished visual interfaces.",
    icon: "css",
  },
  {
    id: "git",
    name: "Git",
    description: "Managing source code and tracking project changes.",
    icon: "git",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Collaborating on projects and managing repositories.",
    icon: "github",
  },
  {
    id: "linux",
    name: "Linux",
    description: "Working with Linux environments and development tools.",
    icon: "linux",
  },
]

export const projects: Project[] = [
  {
    id: "project-one",
    name: "E-Commerce Platform",
    description:
      "A modern e-commerce frontend focused on product browsing, shopping cart functionality, and a responsive user experience.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/SinaKoulani/project-one",
    demoUrl: "https://example.com/project-one",
  },
  {
    id: "project-two",
    name: "Task Management App",
    description:
      "A responsive task management interface for organizing daily work and keeping track of progress.",
    techStack: ["React", "TypeScript", "CSS"],
    githubUrl: "https://github.com/SinaKoulani/project-two",
    demoUrl: "https://example.com/project-two",
  },
  {
    id: "project-three",
    name: "Weather Dashboard",
    description:
      "A clean weather dashboard interface designed to present weather information in an easy-to-understand format.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/SinaKoulani/project-three",
    demoUrl: "https://example.com/project-three",
  },
  {
    id: "project-four",
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, technical skills, experience, and contact information.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/SinaKoulani/project-four",
  },
]

export const experience: Experience[] = [
  {
    id: "experience-one",
    year: "2026",
    title: "Frontend Development",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "experience-two",
    year: "2025",
    title: "React Development Projects",
    techStack: ["React", "JavaScript", "CSS"],
  },
  {
    id: "experience-three",
    year: "2024",
    title: "Web Development Foundations",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
]

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    href: "mailto:kolanisina727@gmail.com",
    icon: "email",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/SinaKoulani",
    icon: "github",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/iw3ina",
    icon: "telegram",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/iw3ina",
    icon: "instagram",
  },
]