// src/pages/NotFound.jsx
import { FaHome, FaEnvelope } from 'react-icons/fa'

export default function NotFound(){
  return (
    <section className="not-found">
      <div className="not-found-content">
        <div className="not-found-visual" data-aos="zoom-in">
          <div className="error-code">404</div>
          <div className="error-animation">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
        
        <div className="not-found-text" data-aos="fade-up" data-aos-delay="200">
          <h1>Oops! Page Not Found</h1>
          <p>
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, it happens to the best of us!
          </p>
          
          <div className="not-found-actions" data-aos="fade-up" data-aos-delay="400">
            <a href="/" className="no-underline">
              <button>
                <FaHome />
                Go Home
              </button>
            </a>
            <a href="#contact" className="no-underline">
              <button className="secondary">
                <FaEnvelope />
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
