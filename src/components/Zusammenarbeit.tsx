import bild4 from '../assets/bild4.png'

const Zusammenarbeit = () => {
  return (
    <section id="zusammenarbeit" className="section section-light" aria-labelledby="zusammenarbeit-heading">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6">
            <figure className="image figure-rounded figure-rounded--shadow">
              <img
                src={bild4}
                alt="Hochschul-Kooperation für Hebammenausbildung"
                className="img-cover img-cover--tall"
                style={{ display: 'block' }}
              />
            </figure>
          </div>
          <div className="column is-5 is-offset-1">
            <h2 id="zusammenarbeit-heading" className="title section-title">
              Zusammenarbeit mit Hochschulen
            </h2>
            <div className="content body-text">
              <p className="mb-paragraph">
                Die IntuiSens-Module ermöglichen es Hochschulen, sich in der Hebammenausbildung als
                integrativer, innovativer Anbieter zu präsentieren.
              </p>
              <p className="mb-paragraph-lg">
                Gerne stimme ich mit Ihnen die Form und den Umfang einer Zusammenarbeit ab, zum Beispiel über:
              </p>
              <ul className="mb-paragraph-lg" style={{ paddingLeft: '1.5rem' }}>
                <li className="mb-paragraph" style={{ marginBottom: '0.75rem' }}>Fakultative Bausteine</li>
                <li className="mb-paragraph" style={{ marginBottom: '0.75rem' }}>Im Rahmen eines Pilotprojekts in Verbindung mit einer Evaluation und Publikationen</li>
                <li style={{ marginBottom: '0.75rem' }}>Perspektivisch möglicherweise auch als Wahlpflichtfach</li>
              </ul>
              <a
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="button is-medium btn-primary"
                aria-label="Kontakt für Hochschul-Kooperation aufnehmen"
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
