import { ArrowDown } from 'lucide-react'
import { translations } from '../assets/translations'
import { projects } from '../assets/projects'
import { PortfolioProps } from '../types'
import Header from './Header'
import Footer from './Footer'
import ProjectCard from './ProjectCard'

const Portfolio = ({ language }: PortfolioProps) => {
  const t = translations[language]

  const imagePath = (name: string) => `/portfolio/images/${name}`

  const skills = [
    'HTML/CSS',
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Tailwind CSS',
    'Git',
    'MongoDB',
    'Express',
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Fixed Header */}
      <Header language={language} />

      {/* Main Content */}
      <main className="pt-16">
        {/* Header/Hero Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <img src={imagePath('avatar.jpg')} alt="Profile" className="rounded-full mx-auto mb-4 w-40 h-40" />
            <div className="flex justify-center gap-x-1 text-center mb-4">
              <p className="text-xl">{t.greeting}</p>
              <p className="text-2xl">👋</p>
            </div>
            <h1 className="text-5xl font-bold mb-3">{t.role}</h1>
            <p className="text-gray-400 font-bold">{t.tagline}</p>
          </div>
          <ArrowDown className="mx-auto w-6 h-6 animate-bounce" />
        </header>

        {/* About Section */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.aboutTitle}</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto text-center mb-12">{t.aboutText}</p>

            {/* Skills */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">{t.skillsTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-3 rounded-lg text-center hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.projectsTitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12">
                {projects.map((project) => (
                  <ProjectCard key={project.key} project={project} language={language} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-8 text-center">{t.contactTitle}</h2>
            <form className="max-w-xl mx-auto">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder={t.contactForm.name}
                  className="bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  placeholder={t.contactForm.email}
                  className="bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <textarea
                placeholder={t.contactForm.message}
                rows={6}
                className="w-full bg-gray-800 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.contactForm.submit}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer translations={t.footer} />
    </div>
  )
}

export default Portfolio
