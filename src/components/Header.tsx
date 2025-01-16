import { Github, Globe, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Language, HeaderProps } from '../types'

const Header = ({ language }: HeaderProps) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isMouseOverGlobe, setIsMouseOverGlobe] = useState(false)
  const [isMouseOverPulldown, setIsMouseOverPulldown] = useState(false)

  const handleLanguageChange = (newLanguage: Language) => {
    navigate(newLanguage === 'en' ? '/en' : '/')
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(isMouseOverGlobe || isMouseOverPulldown)
  }, [isMouseOverGlobe, isMouseOverPulldown])

  return (
    <header className="fixed top-0 w-full bg-gray-800 shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="relative w-16 flex justify-center">
          <button
            className="px-0 bg-gray-800 text-gray-400 hover:text-gray-100 border-0"
            style={{ color: isOpen ? '#f3f4f6' : '#9ca3af' }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsMouseOverGlobe(true)}
            onMouseLeave={() => setIsMouseOverGlobe(false)}
          >
            <Globe size={24} />
          </button>

          {isOpen && (
            <div
              className="absolute top-10 bg-transparent border-0"
              onMouseEnter={() => setIsMouseOverPulldown(true)}
              onMouseLeave={() => setIsMouseOverPulldown(false)}
            >
              <button
                className={`w-full px-4 py-2 text-center rounded-none rounded-t-lg border-0 bg-gray-700 hover:bg-gray-100 ${
                  language === 'en' ? 'text-blue-600 font-bold' : 'text-gray-100 font-normal hover:text-gray-900'
                }`}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </button>
              <button
                className={`w-full px-4 py-2 text-center rounded-none rounded-b-lg border-x-0 border-b-0 border-gray-600 bg-gray-700 hover:bg-gray-100 hover:border-gray-600 ${
                  language === 'ja' ? 'text-blue-600 font-bold' : 'text-gray-100 font-normal hover:text-gray-900'
                }`}
                onClick={() => handleLanguageChange('ja')}
              >
                日本語
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
