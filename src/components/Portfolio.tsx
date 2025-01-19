import { ArrowDown } from 'lucide-react'
import { translations } from '../assets/translations'
import { projects } from '../assets/projects'
import { FormData, PortfolioProps, ValidationErrors } from '../types'
import Header from './Header'
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import DOMPurify from 'dompurify'

const Portfolio = ({ language }: PortfolioProps) => {
  const t = translations[language]

  const imagePath = (name: string) => `/portfolio/images/${name}`

  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
  }>({ type: null })
  const [errors, setErrors] = useState<ValidationErrors>({})

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

  // Validation function
  const validateForm = (data: FormData): ValidationErrors => {
    const errors: ValidationErrors = {}

    // Name validation
    if (data.user_name.trim().length < 2) {
      errors.user_name = t.contactForm.errors?.nameMin || '名前は2文字以上で入力してください'
    } else if (data.user_name.trim().length > 50) {
      errors.user_name = t.contactForm.errors?.nameMax || '名前は50文字以下で入力してください'
    } else if (!/^[\p{L}\s-]+$/u.test(data.user_name.trim())) {
      errors.user_name = t.contactForm.errors?.nameInvalid || '名前に使用できない文字が含まれています'
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!emailRegex.test(data.user_email.trim())) {
      errors.user_email = t.contactForm.errors?.emailInvalid || '有効なメールアドレスを入力してください'
    }

    // Message validation
    if (data.message.trim().length < 10) {
      errors.message = t.contactForm.errors?.messageMin || 'メッセージは10文字以上で入力してください'
    }
    if (data.message.trim().length > 1000) {
      errors.message = t.contactForm.errors?.messageMax || 'メッセージは1000文字以下で入力してください'
    }

    return errors
  }

  // Input sanitization
  const sanitizeInput = (value: string): string => {
    // Remove any HTML tags and sanitize the input
    return DOMPurify.sanitize(value.trim(), {
      ALLOWED_TAGS: [], // No HTML tags allowed
      ALLOWED_ATTR: [], // No attributes allowed
    })
  }

  // handleInputChange with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Handle textarea newlines by keeping the original value before sanitization
    const sanitizedValue = name === 'message' ? value : sanitizeInput(value)

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof ValidationErrors]
        return newErrors
      })
    }
  }

  // handleSubmit with validation
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Sanitize all form data
    const sanitizedData = {
      user_name: sanitizeInput(formData.user_name),
      user_email: sanitizeInput(formData.user_email),
      message: sanitizeInput(formData.message),
    }

    // Validate form
    const validationErrors = validateForm(sanitizedData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null })

    try {
      emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement
      )

      setSubmitStatus({ type: 'success' })
      setFormData({ user_name: '', user_email: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus({ type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder={t.contactForm.name}
                    className={`w-full bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
              ${errors.user_name ? 'border-2 border-red-500' : ''}`}
                  />
                  {errors.user_name && <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder={t.contactForm.email}
                    className={`w-full bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
              ${errors.user_email ? 'border-2 border-red-500' : ''}`}
                  />
                  {errors.user_email && <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>}
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.contactForm.message}
                  rows={6}
                  className={`w-full bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
            ${errors.message ? 'border-2 border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-0.5">{errors.message}</p>}
              </div>

              {submitStatus.type && (
                <div
                  className={`mt-3.5 p-3 rounded-lg text-center ${
                    submitStatus.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                  }`}
                >
                  {submitStatus.type === 'success' ? t.contactForm.successMessage : t.contactForm.errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className={`w-full bg-blue-600 text-white py-3 mt-4 rounded-lg transition-colors
          ${isSubmitting || Object.keys(errors).length > 0 ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              >
                {isSubmitting ? t.contactForm.sending : t.contactForm.submit}
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
