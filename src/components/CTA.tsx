const CTA = () => {
  return (
    <section className="section" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(135deg, var(--color-cyan) 0%, var(--color-teal) 100%)'
    }}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-7">
            <h2 className="title is-1 has-text-white" style={{ fontWeight: 800, fontSize: '3rem', marginBottom: '1.5rem' }}>
              Ready to Start Your Journey?
            </h2>
            <p className="subtitle has-text-white" style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.95 }}>
              Join thousands of students who have transformed their lives through quality education. Book a campus tour today and see why IntuiSens is the right choice for your future.
            </p>
          </div>
          <div className="column is-5 has-text-centered">
            <a className="button is-white is-large" style={{
              fontWeight: 600,
              padding: '1.75rem 3rem',
              borderRadius: '8px',
              fontSize: '1.1rem'
            }}>
              Book a Campus Tour →
            </a>
            <p className="has-text-white mt-4" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              Or call us at: <strong style={{ fontWeight: 700 }}>+1 (555) 123-4567</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
