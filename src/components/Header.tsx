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
      <nav className="navbar is-white" role="navigation" aria-label="main navigation" style={{ padding: '0.5rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: 'white', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" aria-label="IntuiSens Homepage" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
              <img src={logo} alt="IntuiSens Logo - Berühren berührt" style={{ height: '80px', maxHeight: '80px' }} />
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
            <a className="navbar-item" onClick={() => scrollToSection('home')} style={{ fontWeight: 500, fontSize: '1.1rem', color: 'var(--color-subheading)', cursor: 'pointer' }}>Home</a>
            <a className="navbar-item" onClick={() => scrollToSection('about')} style={{ fontWeight: 500, fontSize: '1.1rem', color: 'var(--color-subheading)', cursor: 'pointer' }}>Über mich</a>
            <a className="navbar-item" onClick={() => scrollToSection('intuition')} style={{ fontWeight: 500, fontSize: '1.1rem', color: 'var(--color-subheading)', cursor: 'pointer' }}>Intuition & Sensitivität</a>
            <a className="navbar-item" onClick={() => scrollToSection('module')} style={{ fontWeight: 500, fontSize: '1.1rem', color: 'var(--color-subheading)', cursor: 'pointer' }}>Module</a>
            <a className="navbar-item" onClick={() => scrollToSection('zusammenarbeit')} style={{ fontWeight: 500, fontSize: '1.1rem', color: 'var(--color-subheading)', cursor: 'pointer' }}>Zusammenarbeit</a>
            <a className="navbar-item" onClick={() => scrollToSection('kontakt')} style={{ fontWeight: 500, fontSize: '1.1rem', color: 'var(--color-subheading)', cursor: 'pointer' }}>Kontakt</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
