// src/components/About.jsx
import { FaRocket, FaBullseye, FaUsers, FaCode } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about-container">
        <div className="about-content" data-aos="fade-right">
          <div className="section-header">
            <h2>About Me</h2>
          </div>

          <div className="about-text">
            <p data-aos="fade-up" data-aos-delay="200">
              I'm a passionate software developer with a love for creating beautiful,
              functional web applications. With expertise in React and modern JavaScript,
              I enjoy turning complex problems into simple, elegant solutions.
            </p>

            <p data-aos="fade-up" data-aos-delay="400">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with the
              developer community. I believe in writing clean, maintainable code
              and creating exceptional user experiences.
            </p>

            <p data-aos="fade-up" data-aos-delay="600">
              Currently, I'm focused on building scalable web applications and
              expanding my knowledge in cloud technologies and DevOps practices.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item" data-aos="fade-up" data-aos-delay="200">
              <div className="highlight-icon">
                <FaRocket />
              </div>
              <div className="highlight-content">
                <h4>Fast Learner</h4>
                <p>Quick to adapt to new technologies and frameworks</p>
              </div>
            </div>

            <div className="highlight-item" data-aos="fade-up" data-aos-delay="400">
              <div className="highlight-icon">
                <FaBullseye />
              </div>
              <div className="highlight-content">
                <h4>Problem Solver</h4>
                <p>Love tackling complex challenges with creative solutions</p>
              </div>
            </div>

            <div className="highlight-item" data-aos="fade-up" data-aos-delay="600">
              <div className="highlight-icon">
                <FaUsers />
              </div>
              <div className="highlight-content">
                <h4>Team Player</h4>
                <p>Collaborate effectively in agile development environments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-visual" data-aos="fade-left" data-aos-delay="400">
          <div className="about-image-placeholder">
            <div className="placeholder-content">
              <FaCode className="code-icon" />
              <div className="code-lines">
                <div className="code-line"></div>
                <div className="code-line short"></div>
                <div className="code-line"></div>
                <div className="code-line medium"></div>
                <div className="code-line"></div>
                <div className="code-line short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}