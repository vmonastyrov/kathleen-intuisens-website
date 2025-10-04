const Hero = () => {
  return (
    <section className="hero is-fullheight-with-navbar" style={{
      background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.9) 0%, rgba(0, 169, 157, 0.9) 100%), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h1 className="title has-text-white" style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '2rem', fontWeight: 800 }}>
                Innovative learning for everyone
              </h1>
              <p className="subtitle has-text-white" style={{ fontSize: '1.3rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                Empowering students to achieve their dreams through quality education and innovative teaching methods
              </p>
              <div className="buttons">
                <a className="button is-white is-large" style={{ fontWeight: 600, padding: '1.75rem 3rem', borderRadius: '8px' }}>
                  Apply Now →
                </a>
              </div>
            </div>
            <div className="column is-6">
              <div className="box" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '2.5rem', borderRadius: '12px' }}>
                <div className="columns is-mobile is-multiline has-text-centered">
                  <div className="column is-6">
                    <p style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-teal)', marginBottom: '0.5rem' }}>92%</p>
                    <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>Job Placement</p>
                  </div>
                  <div className="column is-6">
                    <p style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-cyan)', marginBottom: '0.5rem' }}>1850</p>
                    <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>Founded</p>
                  </div>
                  <div className="column is-6">
                    <p style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-green)', marginBottom: '0.5rem' }}>15K+</p>
                    <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>Students</p>
                  </div>
                  <div className="column is-6">
                    <p style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-yellow)', marginBottom: '0.5rem' }}>200+</p>
                    <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>Programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
