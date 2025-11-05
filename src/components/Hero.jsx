// src/components/Hero.jsx
export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span>👋</span>
          <span>Available for work</span>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Rudransh Yerekar</span>
          <br />
          Software Developer
        </h1>
        
        <p className="hero-description">
          I build fast, accessible web applications with React and modern technologies. 
          Passionate about creating exceptional user experiences and clean, maintainable code.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="no-underline">
            <button>View Projects</button>
          </a>
          <a href="/data/Rudransh Yerekar.pdf" target="_blank" rel="noreferrer" className="no-underline">
            <button className="secondary">Download Resume</button>
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Month Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="floating-card">
          <div className="code-snippet">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-title">portfolio.js</span>
            </div>
            <div className="code-content">
              <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
              <br />
              &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">'Rudransh'</span>,
              <br />
              &nbsp;&nbsp;<span className="code-property">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'JS'</span>],
              <br />
              &nbsp;&nbsp;<span className="code-property">passion</span>: <span className="code-string">'coding'</span>
              <br />
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}