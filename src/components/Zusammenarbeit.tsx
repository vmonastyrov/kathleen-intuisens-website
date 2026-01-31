import zusammenarbeitImg from '../assets/4.png'

const Zusammenarbeit = () => {
  return (
    <section id="zusammenarbeit" className="section" aria-labelledby="zusammenarbeit-heading" style={{ backgroundColor: 'white', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6">
            <figure className="image" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <img
                src={zusammenarbeitImg}
                alt="Hochschul-Kooperation für Hebammenausbildung"
                style={{ objectFit: 'cover', width: '100%', height: '500px', display: 'block' }}
              />
            </figure>
          </div>
          <div className="column is-5 is-offset-1">
            <p style={{
              fontSize: '1.75rem',
              color: 'var(--color-yellow-green)',
              fontWeight: 600,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }} aria-label="Seitenbereich">
              Zusammenarbeit
            </p>
            <h2 id="zusammenarbeit-heading" className="title" style={{
              fontSize: '2.5rem',
              color: 'var(--color-heading)',
              marginBottom: '2rem',
              lineHeight: '1.2'
            }}>
              Zusammenarbeit mit Hochschulen
            </h2>
            <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Die IntuiSens-Module ermöglichen es Hochschulen, sich in der Hebammenausbildung als
                <strong> integrativer, innovativer Anbieter</strong> zu präsentieren.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Gerne stimme ich mit Ihnen die Form und den Umfang einer Zusammenarbeit ab, zum Beispiel über:
              </p>
              <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}>Fakultative Bausteine</li>
                <li style={{ marginBottom: '0.75rem' }}>Im Rahmen eines Pilotprojekts in Verbindung mit einer Evaluation und Publikationen</li>
                <li style={{ marginBottom: '0.75rem' }}>Perspektivisch möglicherweise auch als Wahlpflichtfach</li>
              </ul>
              <a
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="button is-large"
                aria-label="Kontakt für Hochschul-Kooperation aufnehmen"
                style={{
                  backgroundColor: 'var(--color-yellow-green)',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: 'pointer'
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

export default Zusammenarbeit
