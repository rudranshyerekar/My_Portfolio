import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaCode } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo no-underline">
          <FaCode className="logo-icon" />
          <span className="logo-text">Rudransh Yerekar</span>
          <span className="logo-dot"></span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </header>
  )
}
