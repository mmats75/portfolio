import { translations } from '../assets/translations'

export type Language = keyof typeof translations
export type Translations = (typeof translations)[Language]

// Portfolio Component Types
export interface PortfolioProps {
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
