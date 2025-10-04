const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Graduate',
      quote: 'The education I received at IntuiSens prepared me perfectly for my career in tech. The professors were supportive and the curriculum was cutting-edge.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Business Administration',
      quote: 'I found not just an education, but a community that supported me every step of the way. The networking opportunities were invaluable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Education Major',
      quote: 'The hands-on experience and practical teaching opportunities gave me the confidence I needed to start my teaching career.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    }
  ]

  return (
    <section id="testimonials" className="section" style={{ padding: '6rem 1.5rem', backgroundColor: '#F9FAFB' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <span style={{ color: 'var(--color-cyan)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Success Stories</span>
          <h2 className="title is-1 mt-3" style={{ fontWeight: 800, fontSize: '3.5rem' }}>What Our Students Say</h2>
          <p className="subtitle is-4 mt-4" style={{ color: '#666', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            Hear from our successful graduates about their journey
          </p>
        </div>

        <div className="columns is-multiline mt-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="column is-4">
              <div className="box" style={{
                height: '100%',
                borderRadius: '12px',
                border: 'none',
                padding: '2.5rem',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--color-cyan)', marginBottom: '1rem' }}>"</div>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', fontStyle: 'italic' }}>
                    {testimonial.quote}
                  </p>
                </div>
                <div className="media" style={{ marginTop: '2rem' }}>
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={testimonial.image} alt={testimonial.name} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{testimonial.name}</p>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
