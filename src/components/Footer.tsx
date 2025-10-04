const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '4rem 1.5rem 2rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-cyan)', marginBottom: '1.5rem' }}>
              IntuiSens
            </h3>
            <p style={{ color: '#D1D5DB', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Innovative learning for everyone. Join our community-driven institution and unlock your potential.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#374151',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}>
                f
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#374151',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}>
                t
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#374151',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}>
                in
              </a>
            </div>
          </div>
          <div className="column is-2">
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="/" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cyan)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#about" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cyan)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  About
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#study" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cyan)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  Programs
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#faq" style={{ color: '#D1D5DB', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cyan)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem', color: '#D1D5DB' }}>Lifestyle Design</li>
              <li style={{ marginBottom: '0.75rem', color: '#D1D5DB' }}>World History</li>
              <li style={{ marginBottom: '0.75rem', color: '#D1D5DB' }}>Education</li>
              <li style={{ marginBottom: '0.75rem', color: '#D1D5DB' }}>Business Studies</li>
            </ul>
          </div>
          <div className="column is-3">
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact</h4>
            <p style={{ color: '#D1D5DB', lineHeight: '1.8' }}>
              <strong style={{ color: 'white' }}>Email:</strong> info@intuisens.edu<br />
              <strong style={{ color: 'white' }}>Phone:</strong> +1 (555) 123-4567<br />
              <strong style={{ color: 'white' }}>Address:</strong> 123 Campus Drive
            </p>
          </div>
        </div>
        <hr style={{ backgroundColor: '#374151', margin: '3rem 0 1.5rem', height: '1px', border: 'none' }} />
        <div style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '0.9rem' }}>
          <p>&copy; 2025 IntuiSens. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
