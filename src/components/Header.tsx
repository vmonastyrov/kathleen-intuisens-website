import { useState } from 'react'
import logo from '../assets/photo_2025-10-15_23-36-2.jpg'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      {/* Logo positioned absolutely */}
      <a href="/" style={{
        position: 'absolute',
        top: '0.5rem',
        left: '8rem',
        zIndex: 100,
        display: 'block'
      }}>
        <img src={logo} alt="IntuiSens Logo" style={{ height: '180px', width: '180px', objectFit: 'contain' }} />
      </a>

      <nav className="navbar is-white" role="navigation" aria-label="main navigation" style={{ padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', backgroundColor: 'white' }}>
        <div className="container">
          <div className="navbar-brand">
            {/* Empty space for logo */}
            <div style={{ width: '200px' }}></div>

            <a
              role="button"
              className={`navbar-burger ${isActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-start">
            <a className="navbar-item" href="#home" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Home</a>
            <a className="navbar-item" href="#about" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Über mich</a>
            <a className="navbar-item" href="#intuition" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Intuition & Sensitivität</a>
            <a className="navbar-item" href="#haptonomie" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Haptonomie</a>
            <a className="navbar-item" href="#module" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Module</a>
            <a className="navbar-item" href="#zusammenarbeit" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Zusammenarbeit</a>
            <a className="navbar-item" href="#kontakt" style={{ fontWeight: 500, color: 'var(--color-subheading)' }}>Kontakt</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
