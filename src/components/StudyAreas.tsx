const StudyAreas = () => {
  const areas = [
    {
      title: 'Lifestyle Design',
      instructor: 'By Sarah Miller',
      lessons: '12 Lessons',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&q=80',
      color: 'var(--color-yellow)'
    },
    {
      title: 'World History',
      instructor: 'By Prof. James Wilson',
      lessons: '18 Lessons',
      image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&q=80',
      color: 'var(--color-green)'
    },
    {
      title: 'Education & Teaching',
      instructor: 'By Dr. Emily Chen',
      lessons: '15 Lessons',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      color: 'var(--color-cyan)'
    },
    {
      title: 'Digital Arts',
      instructor: 'By Alex Turner',
      lessons: '20 Lessons',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
      color: 'var(--color-lime)'
    },
    {
      title: 'Business Studies',
      instructor: 'By Prof. David Brown',
      lessons: '16 Lessons',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      color: 'var(--color-teal)'
    },
    {
      title: 'Environmental Science',
      instructor: 'By Dr. Lisa Green',
      lessons: '14 Lessons',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80',
      color: 'var(--color-green)'
    }
  ]

  return (
    <section id="study" className="section" style={{ padding: '6rem 1.5rem' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <span style={{ color: 'var(--color-cyan)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Programs</span>
          <h2 className="title is-1 mt-3" style={{ fontWeight: 800, fontSize: '3.5rem' }}>Areas of Study</h2>
          <p className="subtitle is-4 mt-4" style={{ color: '#666', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            Explore our diverse range of academic programs designed to help you succeed
          </p>
        </div>

        <div className="columns is-multiline mt-6">
          {areas.map((area, index) => (
            <div key={index} className="column is-4">
              <div className="card" style={{
                border: 'none',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={area.image} alt={area.title} style={{ objectFit: 'cover' }} />
                  </figure>
                </div>
                <div className="card-content" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>{area.instructor}</span>
                    <span style={{ fontSize: '0.85rem', color: area.color, fontWeight: 600 }}>{area.lessons}</span>
                  </div>
                  <h3 className="title is-5" style={{ marginBottom: '1rem' }}>{area.title}</h3>
                  <a style={{ color: 'var(--color-cyan)', fontWeight: 600, fontSize: '0.95rem' }}>
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudyAreas
