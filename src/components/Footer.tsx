const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-heading)', color: 'white', padding: '4rem 1.5rem 2rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
              IntuiSens
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Berühren berührt. Ich qualifiziere (werdende) Hebammen, Kinder und ihre Eltern mit allen Sinnen zu begleiten.
            </p>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>Navanita K. Manke</h4>
            <p style={{ color: '#D1D5DB', lineHeight: '2', fontSize: '1.05rem' }}>
              <strong style={{ color: 'white' }}>Telefon:</strong> +49 160 22 726 724<br />
              <span style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>
                Telefonisch erreichbar Mo–Fr 8–9 Uhr<br />
                Rückruf innerhalb von 48 Std. bei Nachricht auf AB
              </span>
            </p>
            <p style={{ color: '#D1D5DB', lineHeight: '2', marginTop: '1rem', fontSize: '1.05rem' }}>
              <strong style={{ color: 'white' }}>E-Mail:</strong> <a href="mailto:info@intuisens.de" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none' }}>info@intuisens.de</a><br />
              <strong style={{ color: 'white' }}>Website:</strong> <a href="https://www.intuisens.de" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none' }}>www.intuisens.de</a>
            </p>
          </div>
          <div className="column is-3 is-offset-1">
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#home" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#about" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Über mich
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#intuition" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Intuition & Sensitivität
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#haptonomie" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Haptonomie
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#module" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Module
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#zusammenarbeit" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Zusammenarbeit
                </a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Rechtliches</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  AGB
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Impressum
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#D1D5DB', transition: 'color 0.2s', textDecoration: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow-green)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '3rem 0 1.5rem', height: '1px', border: 'none' }} />
        <div style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '0.9rem' }}>
          <p>&copy; 2025 IntuiSens. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
