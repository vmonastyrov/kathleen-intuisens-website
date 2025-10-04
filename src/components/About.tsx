const About = () => {
  return (
    <section id="about" className="section" style={{ padding: '6rem 1.5rem', backgroundColor: '#F9FAFB' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <span style={{ color: 'var(--color-cyan)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Story</span>
          <h2 className="title is-1 mt-3" style={{ fontWeight: 800, fontSize: '3.5rem' }}>About IntuiSens</h2>
          <p className="subtitle is-4 mt-4" style={{ color: '#666', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            A community-driven institution with over 170 years of excellence in education
          </p>
        </div>

        <div className="columns is-multiline mt-6">
          <div className="column is-12">
            <div style={{
              background: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              borderRadius: '12px'
            }}></div>
          </div>
        </div>

        <div className="columns is-centered mt-6">
          <div className="column is-8 has-text-centered">
            <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#555' }}>
              With a remarkable <strong style={{ color: 'var(--color-teal)' }}>92% job placement rate</strong>, we've helped thousands of students achieve their dreams and build successful careers through innovative teaching methods and personalized support.
            </p>
          </div>
        </div>

        <div className="columns is-multiline mt-6 has-text-centered">
          <div className="column is-12">
            <p style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#999', marginBottom: '2rem' }}>Trusted by leading organizations</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6 }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>COMPANY</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>BRAND</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>PARTNER</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>LOGO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
