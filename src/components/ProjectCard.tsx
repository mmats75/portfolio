import { Github, ExternalLink } from 'lucide-react'
import { ProjectCardProps } from '../types'
import { translations } from '../assets/translations'

const imagePath = (image: string) => `/portfolio/images/${image}`

const ProjectCard = ({ project, language }: ProjectCardProps) => {
  const t = translations[language]

  return (
    <div className="bg-[#111] rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 md:hover:scale-105">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={imagePath(project.image)} alt={project.title[language]} className="w-full" />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title[language]}</h3>
          <p className="text-gray-400 text-sm">{project.description[language]}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="inline-block px-2.5 py-1 bg-[#222] rounded text-xs text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm  text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} />
            {t.projectRepository}
          </a>
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            {t.projectDemoSite}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
