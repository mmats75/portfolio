import { Github, Sun, Moon, Linkedin, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Language } from '../types'

const Flag = ({ country }: { country: Language }) => {
  const flags = {
    en: (
      <svg className="w-6 h-4" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="40" fill="#fff" />
        <g fill="#bf0a30">
          {[...Array(13)].map((_, i) => (
            <rect key={i} y={i * 3.077} width="60" height="1.538" />
          ))}
        </g>
        <rect width="24" height="21.538" fill="#002868" />
        <g fill="#fff">
          {[...Array(50)].map((_, i) => {
            const row = Math.floor(i / 6)
            const col = i % 6
            const x = col * 4 + (row % 2 ? 2 : 0)
            const y = row * 2.15
            return <circle key={i} cx={x} cy={y} r="0.8" />
          })}
        </g>
      </svg>
    ),
    ja: (
      <svg className="w-6 h-4" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="40" fill="#fff" />
        <circle cx="30" cy="20" r="12" fill="#bc002d" />
      </svg>
    ),
  }
  return flags[country]
}

const Header = ({ language }: { language: Language }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setIsOpen(false)
    navigate(newLanguage === 'en' ? '/en' : '/')
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-100 dark:bg-dark-secondary shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-0 bg-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors border-0"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex flex-nowrap space-x-1 p-0 bg-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors border-0"
            style={{ color: isOpen ? (isDarkMode ? '#f3f4f6' : '#111827') : isDarkMode ? '#9ca3af' : '#6b7280' }}
          >
            <Globe size={24} />
            <span>{language === 'en' ? 'EN' : 'JP'}</span>

            {isOpen && (
              <div className="absolute top-8 -right-4 bg-gray-400 rounded-xl shadow-lg">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="flex items-center space-x-2 w-full px-4 py-2 rounded-b-none rounded-t-5 bg-gray-200 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-700 border-0"
                >
                  <Flag country="en" />
                  <span className={`${language === 'en' ? 'font-bold' : ''}`}>English</span>
                </button>
                <button
                  onClick={() => handleLanguageChange('ja')}
                  className="flex items-center space-x-2 w-full px-4 py-2 mt-[1px] rounded-t-none rounded-b-5 bg-gray-200 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-700 border-0"
                >
                  <Flag country="ja" />
                  <span className={`${language === 'ja' ? 'font-bold' : ''}`}>日本語</span>
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
