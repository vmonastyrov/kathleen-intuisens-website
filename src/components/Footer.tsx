import { Link, useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
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
    <footer role="contentinfo" className="footer-section">
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <h3 className="footer-brand">
              IntuiSens
            </h3>
            <p className="footer-text footer-text--intro">
              Berühren berührt. Ich qualifiziere (werdende) Hebammen, Kinder und ihre Eltern mit allen Sinnen zu begleiten.
            </p>
            <p className="footer-text mb-paragraph">
              Navanita K. Manke
            </p>
            <p className="footer-text">
              Telefon: +49 151 22 726 724<br />
              Telefonisch erreichbar Mo–Fr 8–9 Uhr<br />
              Rückruf innerhalb von 48 Std. bei Nachricht auf AB
            </p>
            <p className="footer-text" style={{ marginTop: '1rem' }}>
              E-Mail: <a href="mailto:info@intuisens.de" className="accent-link">info@intuisens.de</a><br />
              Website: <a href="https://www.intuisens.de" className="accent-link">www.intuisens.de</a>
            </p>
          </div>
          <div className="column is-3 is-offset-1">
            <nav aria-label="Footer Navigation">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-nav-list">
                <li><a className="footer-link" onClick={() => scrollToSection('home')} aria-label="Zur Startseite">Home</a></li>
                <li><a className="footer-link" onClick={() => scrollToSection('about')} aria-label="Über Navanita K. Manke">Über mich</a></li>
                <li><a className="footer-link" onClick={() => scrollToSection('intuition')} aria-label="Zum Bereich Intuition und Sensitivität">Intuition & Sensitivität</a></li>
                <li><a className="footer-link" onClick={() => scrollToSection('module')} aria-label="Zu den Ausbildungsmodulen">Module</a></li>
                <li><a className="footer-link" onClick={() => scrollToSection('zusammenarbeit')} aria-label="Zur Zusammenarbeit">Zusammenarbeit</a></li>
              </ul>
            </nav>
          </div>
          <div className="column is-3">
            <nav aria-label="Rechtliche Informationen">
              <h4 className="footer-heading">Rechtliches</h4>
              <ul className="footer-nav-list">
                <li><Link to="/agb" className="footer-link" aria-label="Allgemeine Geschäftsbedingungen">AGB</Link></li>
                <li><Link to="/impressum" className="footer-link" aria-label="Impressum">Impressum</Link></li>
                <li><Link to="/datenschutz" className="footer-link" aria-label="Datenschutzerklärung">Datenschutz</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-copyright">
          <p>&copy; 2025 IntuiSens. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
