// src/components/Projects.jsx
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="section-header" data-aos="fade-up">
        <h2>Featured Projects</h2>
        <p className="section-description">
          A collection of projects that showcase my skills and passion for development
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p,i) => (
          <ProjectCard 
            key={i} 
            p={p} 
            data-aos="fade-up" 
            data-aos-delay={i * 200}
          />
        ))}
      </div>
    </section>
  )
}
