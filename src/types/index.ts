import { translations } from '../assets/translations'

export type Language = keyof typeof translations
export type Translations = (typeof translations)[Language]

type LocalizedContent = {
  [key in Language]: string
}

export type Project = {
  key: string
  title: LocalizedContent
  description: LocalizedContent
  image: string
  url: string
  repository: string
  preview: string
  technologies: string[]
}

// Portfolio Component Types
export interface PortfolioProps {
  language: Language
}

// ProjectCard Componen Types
export interface ProjectCardProps {
  project: Project
  language: Language
}

// Header Component Types
export interface HeaderProps {
  language: Language
}

// Footer Component Types
export type FooterTranslations = Translations['footer']
export interface FooterProps {
  translations: FooterTranslations
}
