import { useState } from 'react'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation" style={{ padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', backgroundColor: 'white' }}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/" style={{ fontWeight: 700, fontSize: '1.75rem', color: 'var(--color-heading)' }}>
            IntuiSens
          </a>

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
  )
}

export default Header
