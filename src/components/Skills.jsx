// src/components/Skills.jsx
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaNpm,
  FaCode, FaServer, FaTools, FaEdit
} from 'react-icons/fa'
import {
  SiTypescript, SiTailwindcss, SiExpress, SiGraphql,
  SiWebpack, SiVite
} from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Java", icon: <FaCode /> },
        { name: "Spring Boot", icon: <FaServer /> },
        { name: "Hibernate", icon: <FaServer /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaCode /> }
      ]
    },
    {
      title: "Database & Tools",
      icon: <FaTools />,
      skills: [
        { name: "MySQL", icon: <FaServer /> },
        { name: "MongoDB", icon: <FaServer /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaTools /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "GitHub", icon: <FaGitAlt /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header" data-aos="fade-up">
        <h2>Skills & Technologies</h2>
        <p className="section-description">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-category"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="skill-category-header">
              <div className="category-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skill-items">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200 + skillIndex * 100}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
