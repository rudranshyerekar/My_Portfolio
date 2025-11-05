// src/components/Skills.jsx
export default function Skills(){
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Webpack", "Vite", "npm", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
        <p className="section-description">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-items">
              {category.skills.map(skill => (
                <div key={skill} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
