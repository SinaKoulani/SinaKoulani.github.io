export type SkillIcon =
  | "python"
  | "django"
  | "vue"
  | "nuxtjs"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "html"
  | "css"
  | "git"
  | "github"
  | "linux"

export interface Profile {
  name: string
  jobTitle: string
  stackLine: string
  heroDescription: string
  about: string
}

export interface Skill {
  id: string
  name: string
  description: string
  icon: SkillIcon
}

export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  highlights: string[]
  techStack: string[]
  githubUrl: string
  demoUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  year: string
  title: string
  techStack: string[]
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: "email" | "github" | "telegram" | "instagram"
}