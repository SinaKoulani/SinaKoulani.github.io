import type { IconType } from "react-icons"
import type { SkillIcon } from "../types/portfolio"
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa"
import {
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export const skillIcons: Record<SkillIcon, IconType> = {
  python: FaPython,
  django: SiDjango,
  vue: FaVuejs,
  nuxtjs: SiNextdotjs,
  javascript: FaJs,
  typescript: SiTypescript,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  html: FaHtml5,
  css: FaCss3Alt,
  git: FaGitAlt,
  github: FaGithub,
  linux: FaLinux,
}