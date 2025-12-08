const Footer = () => {
  return (
    <footer role="contentinfo" style={{ backgroundColor: 'var(--color-footer-bg)', color: 'white', padding: '4rem 1.5rem 2rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
              IntuiSens
            </h3>
            <p style={{ color: 'var(--color-footer-text)', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Berühren berührt. Ich qualifiziere (werdende) Hebammen, Kinder und ihre Eltern mit allen Sinnen zu begleiten.
            </p>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>Navanita K. Manke</h4>
            <p style={{ color: 'var(--color-footer-text)', lineHeight: '2', fontSize: '1.05rem' }}>
              <strong style={{ color: 'white' }}>Telefon:</strong> +49 160 22 726 724<br />
              <span style={{ fontSize: '0.9rem', color: 'var(--color-footer-text-muted)' }}>
                Telefonisch erreichbar Mo–Fr 8–9 Uhr<br />
                Rückruf innerhalb von 48 Std. bei Nachricht auf AB
              </span>
            </p>
            <p style={{ color: 'var(--color-footer-text)', lineHeight: '2', marginTop: '1rem', fontSize: '1.05rem' }}>
              <strong style={{ color: 'white' }}>E-Mail:</strong> <a href="mailto:info@intuisens.de" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>info@intuisens.de</a><br />
              <strong style={{ color: 'white' }}>Website:</strong> <a href="https://www.intuisens.de" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>www.intuisens.de</a>
            </p>
          </div>
          <div className="column is-3 is-offset-1">
            <nav aria-label="Footer Navigation">
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#home" aria-label="Zur Startseite" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Home
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#about" aria-label="Über Navanita K. Manke" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Über mich
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#intuition" aria-label="Zum Bereich Intuition und Sensitivität" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Intuition & Sensitivität
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#haptonomie" aria-label="Zum Bereich Haptonomie" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Haptonomie
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#module" aria-label="Zu den Ausbildungsmodulen" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Module
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#zusammenarbeit" aria-label="Zur Zusammenarbeit" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Zusammenarbeit
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="column is-3">
            <nav aria-label="Rechtliche Informationen">
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Rechtliches</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" aria-label="Allgemeine Geschäftsbedingungen" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    AGB
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" aria-label="Impressum" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Impressum
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" aria-label="Datenschutzerklärung" style={{ color: 'var(--color-footer-text)', transition: 'color 0.2s', textDecoration: 'none' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                     onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-footer-text)'}>
                    Datenschutz
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '3rem 0 1.5rem', height: '1px', border: 'none' }} />
        <div style={{ textAlign: 'center', color: 'var(--color-footer-text-muted)', fontSize: '0.9rem' }}>
          <p>&copy; 2025 IntuiSens. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
