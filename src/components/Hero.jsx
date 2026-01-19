// src/components/Hero.jsx
import { FaEye, FaDownload, FaHandPeace } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content" data-aos="fade-right">
        <div className="hero-badge">
          <FaHandPeace className="badge-icon" />
          <span>Available for work</span>
          <HiSparkles className="sparkle-icon" />
        </div>

        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
          Hi, I'm <span className="highlight">Rudransh Yerekar</span>
          <br />
          Java Full-Stack Developer
        </h1>

        <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
          Full-Stack Developer with hands-on experience building scalable web applications using Java, Spring Boot, React, SQL, and MongoDB.
          Proficient in developing end-to-end features including frontend UI, backend APIs, and database design with a focus on clean, maintainable code.
        </p>

        <div className="hero-actions" data-aos="fade-up" data-aos-delay="600">
          <a href="#projects" className="no-underline">
            <button>
              <FaEye />
              View Projects
            </button>
          </a>
          <a href="/data/Rudransh Yerekar.pdf" target="_blank" rel="noreferrer" className="no-underline">
            <button className="secondary">
              <FaDownload />
              Download Resume
            </button>
          </a>
        </div>

        <div className="hero-stats" data-aos="fade-up" data-aos-delay="800">
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">Months Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Major Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" data-aos="fade-left" data-aos-delay="400">
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