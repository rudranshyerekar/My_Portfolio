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
              I'm a Java Full-Stack Developer with hands-on experience building scalable web
              applications using Java, Spring Boot, React, SQL, and MongoDB. Currently working
              at RBrickks Technology in Pune, I handle full-stack development from responsive
              UIs to robust backend APIs.
            </p>

            <p data-aos="fade-up" data-aos-delay="400">
              With a B.Tech in Electronics & Telecommunication Engineering from GH Raisoni
              College (8.35 CGPA), I've developed strong problem-solving skills and technical
              expertise. My experience includes reducing application load times by 40%,
              increasing user engagement by 25%, and improving deployment stability through
              Docker containerization.
            </p>

            <p data-aos="fade-up" data-aos-delay="600">
              I'm passionate about writing clean, maintainable code and creating exceptional
              user experiences. My focus is on developing end-to-end features that combine
              elegant frontend design with powerful backend architecture.
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