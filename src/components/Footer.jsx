// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-info">
          <p className="footer-text">
            © {new Date().getFullYear()} Rudransh Yerekar
          </p>
        </div>
        
        <div className="footer-links">

          {/* GitHub */}
          <a 
            href="https://github.com/rudranshyerekar" 
            target="_blank" 
            rel="noreferrer" 
            className="footer-link"
          >
            <FaGithub />
            GitHub
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/rudransh-yerekar-0ba16a216" 
            target="_blank" 
            rel="noreferrer" 
            className="footer-link"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* Email */}
          <a 
            href="mailto:rudranshyerekar45@gmail.com" 
            className="footer-link"
          >
            <FaEnvelope />
            Email
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/9422183258"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>
      </div>
    </footer>
  )
}
