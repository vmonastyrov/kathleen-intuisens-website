import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    setIsActive(false)

    // If not on home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
    <nav className="navbar is-white navbar-fixed" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" aria-label="IntuiSens Homepage" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
              <img src={logo} alt="IntuiSens Logo - Berühren berührt" className="navbar-logo" />
            </a>

            <a
              role="button"
              className={`navbar-burger ${isActive ? 'is-active' : ''}`}
              aria-label="Hauptmenü"
              aria-expanded={isActive}
              aria-controls="navbar-menu"
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span className="sr-only">{isActive ? 'Menü schließen' : 'Menü öffnen'}</span>
            </a>
          </div>

          <div id="navbar-menu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-start">
            <a className="navbar-item nav-link" onClick={() => scrollToSection('home')}>Home</a>
            <a className="navbar-item nav-link" onClick={() => scrollToSection('about')}>Über mich</a>
            <a className="navbar-item nav-link" onClick={() => scrollToSection('intuition')}>Intuition & Sensitivität</a>
            <a className="navbar-item nav-link" onClick={() => scrollToSection('module')}>Module</a>
            <a className="navbar-item nav-link" onClick={() => scrollToSection('zusammenarbeit')}>Zusammenarbeit</a>
            <a className="navbar-item nav-link" onClick={() => scrollToSection('kontakt')}>Kontakt</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
