import { useState } from 'react'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation" style={{ padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/" style={{ fontWeight: 700, fontSize: '1.75rem', color: 'var(--color-teal)' }}>
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
            <a className="navbar-item" href="/" style={{ fontWeight: 500 }}>Home</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" style={{ fontWeight: 500 }}>Pages</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#about">About</a>
                <a className="navbar-item" href="#campus">Campus Life</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" style={{ fontWeight: 500 }}>CMS Pages</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#study">Study Areas</a>
                <a className="navbar-item" href="#blog">Blog</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" style={{ fontWeight: 500 }}>Utility Pages</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#faq">FAQ</a>
                <a className="navbar-item" href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" style={{ backgroundColor: 'var(--color-cyan)', color: 'white', fontWeight: 600, padding: '1.5rem 2rem', borderRadius: '8px' }}>
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
