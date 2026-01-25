import { useState } from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <nav className="navbar is-white" role="navigation" aria-label="main navigation" style={{ padding: '0.5rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', backgroundColor: 'white' }}>
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/" aria-label="IntuiSens Homepage">
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
            <a className="navbar-item" href="#home" aria-label="Zur Startseite" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Home</a>
            <a className="navbar-item" href="#about" aria-label="Über Navanita K. Manke" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Über mich</a>
            <a className="navbar-item" href="#intuition" aria-label="Zum Bereich Intuition und Sensitivität" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Intuition & Sensitivität</a>
            <a className="navbar-item" href="#module" aria-label="Zu den Ausbildungsmodulen" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Module</a>
            <a className="navbar-item" href="#zusammenarbeit" aria-label="Zur Zusammenarbeit" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Zusammenarbeit</a>
            <a className="navbar-item" href="#kontakt" aria-label="Zum Kontaktformular" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Kontakt</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
