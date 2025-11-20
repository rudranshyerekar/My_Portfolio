// src/components/Contact.jsx
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane,
  FaWhatsapp 
} from 'react-icons/fa'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <div className="contact-content" data-aos="fade-right">
          <div className="section-header">
            <h2>Let's Work Together</h2>
            <p className="section-description">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="contact-info">
            
            {/* Email */}
            <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:rudranshyerekar45@gmail.com">
                  rudranshyerekar45@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/rudransh-yerekar-0ba16a216" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-item" data-aos="fade-up" data-aos-delay="600">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a 
                  href="https://github.com/rudranshyerekar" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  View my code
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-item" data-aos="fade-up" data-aos-delay="800">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <a 
                  href="https://wa.me/9422183258" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
        
        <div className="contact-form-container" data-aos="fade-left" data-aos-delay="400">
          <form className="contact-form" action="https://formspree.io/f/your-id" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project..." 
                rows="5" 
                required 
              />
            </div>
            
            <button type="submit" className="submit-button">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
