const Hero = () => {
  return (
    <section id="home" className="hero is-medium" aria-labelledby="hero-title" style={{
      backgroundColor: '#214B78',
      backgroundImage: 'linear-gradient(135deg, rgba(74, 109, 143, 0.7) 0%, rgba(33, 75, 120, 0.8) 100%), url(https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=1920&q=80)',
      backgroundSize: 'cover, cover',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, no-repeat'
    }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-8 is-offset-2 has-text-centered">
              <h1 id="hero-title" className="title has-text-white" style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '2rem', fontWeight: 700 }}>
                Berühren berührt
              </h1>
              <p className="subtitle has-text-white" style={{ fontSize: '1.5rem', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 3rem' }}>
                Ich qualifiziere (werdende) Hebammen, Kinder und ihre Eltern mit allen Sinnen zu begleiten
              </p>
              <div className="buttons is-centered">
                <a
                  className="button is-large"
                  href="#intuition"
                  aria-label="Mehr über Intuition und Sensitivität erfahren"
                  style={{
                    backgroundColor: 'var(--color-yellow-green)',
                    color: 'white',
                    fontWeight: 600,
                    padding: '1.75rem 3rem',
                    borderRadius: '8px',
                    border: 'none'
                  }}
                >
                  Mehr erfahren →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
