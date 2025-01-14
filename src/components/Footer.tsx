import { Mail, Github, Linkedin } from 'lucide-react'
import { FooterProps } from '../types'

const Footer = ({ translations: t }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        {/* <p className="text-gray-400 mb-2">{t.developedBy}</p> */}
        <p className="text-gray-400 text-sm">
          © {currentYear} {t.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
