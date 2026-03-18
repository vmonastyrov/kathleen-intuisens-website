import mePhoto from '../assets/me.jpeg'

const About = () => {
  return (
    <section id="about" className="section section-muted" aria-labelledby="about-heading">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image figure-rounded figure-rounded--shadow">
              <img
                src={mePhoto}
                alt="Professionelle Hebamme Navanita K. Manke"
                className="img-fluid"
              />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <h2 id="about-heading" className="title section-title" style={{ marginBottom: '1.5rem' }}>
              Was ich weitergebe und teile, ist das was ich erfahre.
            </h2>
            <h3 className="subtitle section-subtitle">
              Navanita K. Manke
            </h3>
            <div className="content body-text">
              <p className="mb-paragraph">
                Der verbindende rote Faden meiner 35 Jahre als Trainerin, Hebamme, Heilpraktikerin für Psychotherapie
                und Intensivkrankenschwester ist die Haptonomie nach Frans Veldman jr.
              </p>
              <p className="mb-paragraph">
                6 Jahre habe ich in einem Meditationszentrum gelebt. Achtsamkeit, Körper- und Atemarbeit gebe ich
                als lebendige authentische Erfahrungen weiter.
              </p>
              <p className="mb-paragraph">
                Seit 2007 biete ich therapeutische Sitzungen und Gruppen an und begleite körperpsychotherapeutische
                Ausbildungen mit dem Therapeuten Dhyan Manish in D/F.
              </p>
              <p className="mb-paragraph-lg">
                Seit 2013 führe ich in Südfrankreich eine Hebammenpraxis mit präventiver Gynäkologie und haptonomischer
                Betreuung als Vision ganzheitlicher Hebammenarbeit jenseits einer Lebensabschnittbegleitung.
              </p>
              <a
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="button is-medium btn-primary"
                aria-label="Kontakt mit Navanita K. Manke aufnehmen"
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
