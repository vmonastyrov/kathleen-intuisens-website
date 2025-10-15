const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-section1)', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Navanita K. Manke"
                style={{ objectFit: 'cover', width: '100%', height: '600px' }}
              />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-gold)',
              fontWeight: 600,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Über mich
            </p>
            <h2 className="title" style={{
              fontSize: '2.5rem',
              color: 'var(--color-heading)',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Was ich weitergebe und teile, ist das was ich erfahre
            </h2>
            <h3 className="subtitle" style={{
              fontSize: '1.5rem',
              color: 'var(--color-subheading)',
              marginBottom: '2rem',
              fontWeight: 600
            }}>
              Navanita K. Manke
            </h3>
            <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Der verbindende rote Faden meiner 35 Jahre als Trainerin, Hebamme, Heilpraktikerin für Psychotherapie
                und Intensivkrankenschwester ist die <strong>Haptonomie nach Frans Veldman jr.</strong>
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                6 Jahre habe ich in einem Meditationszentrum gelebt. Achtsamkeit, Körper- und Atemarbeit gebe ich
                als lebendige authentische Erfahrungen weiter.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Seit 2007 biete ich therapeutische Sitzungen und Gruppen an und begleite körperpsychotherapeutische
                Ausbildungen mit dem Therapeuten Dhyan Manish in D/F.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Seit 2013 führe ich in Südfrankreich eine Hebammenpraxis mit präventiver Gynäkologie und haptonomischer
                Betreuung als Vision ganzheitlicher Hebammenarbeit jenseits einer Lebensabschnittbegleitung.
              </p>
              <a
                href="#kontakt"
                className="button is-medium"
                style={{
                  backgroundColor: 'var(--color-yellow-green)',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  borderRadius: '8px'
                }}
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
