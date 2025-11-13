// src/components/ProjectCard.jsx
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function ProjectCard({p, ...props}){
  return (
    <div className="project-card" {...props}>
      <div className="project-image">
        {p.image && <img src={p.image} alt={p.title} />}
        <div className="project-overlay">
          <div className="project-links">
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link no-underline">
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
            {p.source && (
              <a href={p.source} target="_blank" rel="noreferrer" className="project-link no-underline">
                <FaGithub />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-description">{p.description}</p>
        
        <div className="project-tags">
          {p.tags?.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
