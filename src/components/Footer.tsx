import { Github, Linkedin } from 'lucide-react'
import { FooterProps } from '../types'

const Footer = ({ translations: t }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-8 bg-gray-200 dark:bg-dark-secondary shadow-md">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          {/* <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a> */}
        </div>
        <p className="text-sm text-gray-500  dark:text-gray-400 ">
          © {currentYear} {t.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
