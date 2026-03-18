import img1 from '../assets/1.png'
import img5 from '../assets/5.jpeg'
import img6 from '../assets/6.png'
import bild1 from '../assets/bild1.png'
import bild2 from '../assets/bild2.png'

const Haptonomie = () => {
  const applications = [
    {
      title: 'Haptonomie in der Schwangerschaft und bei der Geburt',
      subtitle: 'Empfangen, annehmen, akzeptieren, verbunden sein, ganz.',
      description: 'Schon im Mutterleib spürt ein Kind, dass es willkommen ist und frei, in Kontakt mit seinen Eltern zu treten. Durch haptonomische Berührung erfährt es Geborgenheit, Sicherheit, Liebe und die Bestätigung, so angenommen zu sein, wie es ist.',
      image: bild2
    },
    {
      title: 'Haptonomie für das Neugeborene und seine Eltern',
      subtitle: 'Angenommen, wie ich bin, geborgen, gesehen, verbunden.',
      description: 'Mit der Geburt tritt das Baby als eigenständiges Wesen ins Leben – und ist doch noch eng verbunden mit den Menschen, die es versorgen. Haptonomie unterstützt das Baby, seine Eigenständigkeit zu entfalten und aktiver am Familienalltag teilzunehmen.',
      image: bild1
    },
    {
      title: 'Haptonomie für Einzelpersonen',
      subtitle: 'Tief mit seinem Inneren in Verbindung, anerkennen, authentisch ganz werden',
      description: 'Haptonomie lädt ein, sich selbst in Tiefe zu begegnen – den eigenen Gefühlen, Verletzungen und inneren Wahrheiten. Durch achtsame Berührung entsteht ein Raum von Geborgenheit und Annahme, in dem Heilung und Ganzwerden möglich werden.',
      image: img6
    },
    {
      title: 'Haptonomie für Paare',
      subtitle: 'Ein verbindender Raum für authentische Begegnung',
      description: 'Haptonomie eröffnet Paaren einen neuen Weg der Begegnung und des miteinander Teilens – jenseits von Routine, Gewohnheit und Sprachlosigkeit. Sie unterstützt, sich gegenseitig zu empfangen und anzunehmen.',
      image: img5
    }
  ]

  return (
    <>
      {/* Main Haptonomie Section */}
      <section id="haptonomie" className="section section-muted" aria-labelledby="haptonomie-heading">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <figure className="image figure-rounded">
                <img
                  src={img1}
                  alt="Haptonomie - Einfühlsame Berührung und Verbindung"
                  className="img-cover img-cover--tall"
                />
              </figure>
            </div>
            <div className="column is-5 is-offset-1">
              <h2 id="haptonomie-heading" className="title section-title">
                Ich fühle · ich bin · richtig · wie ich bin
              </h2>
              <div className="content body-text">
                <p className="mb-paragraph">
                  Haptonomie – die Kraft der einfühlsamen Berührung stärkt Vertrauen, Geborgenheit und innere Ruhe.
                  Sie öffnet den Raum für echte Begegnung mit uns selbst und anderen.
                </p>
                <p className="mb-paragraph">
                  Haptonomie verbindet zwei altgriechische Begriffe: <em>nomos</em> – das Gesetz des Lebens und
                  <em> hapto</em> – berühren, verbinden, vereinen. Schon vor der Geburt erfahren wir über unsere Haut,
                  dass wir in Beziehung stehen: zu uns selbst, zu anderen und zur Welt.
                </p>
                <p className="mb-paragraph-lg">
                  Jede Berührung bestätigt unser Sein und stärkt unser Erleben von Sicherheit, Geborgenheit und
                  Ankommen bei uns selbst. So entstehen in uns Vertrauen, Stabilität und die Fähigkeit, tragende
                  Beziehungen zu gestalten.
                </p>
                <a
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button is-medium btn-primary"
                  aria-label="Kontakt für Haptonomie-Sitzungen aufnehmen"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="section section-light" aria-labelledby="applications-heading">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 id="applications-heading" className="title section-title section-title--tight">
              Haptonomie-Anwendungen
            </h2>
            <p className="subtitle intro-text intro-text--narrow" style={{ margin: '0 auto' }}>
              Haptonomie begleitet in allen Lebensphasen
            </p>
          </div>

          <div className="columns is-multiline">
            {applications.map((app, index) => (
              <div key={index} className="column is-6">
                <article className="box card-application">
                  <figure className="image">
                    <img
                      src={app.image}
                      alt={`${app.title} - ${app.subtitle}`}
                      className="img-cover img-cover--medium"
                    />
                  </figure>
                  <div className="card-application__body">
                    <h3 className="title is-5 card-title">
                      {app.title}
                    </h3>
                    <p className="app-card-subtitle">
                      {app.subtitle}
                    </p>
                    <p className="card-description">
                      {app.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Session Info */}
          <div className="box mt-6 info-box info-box--light">
            <h3 className="title is-4 card-title" style={{ marginBottom: '1.5rem' }}>
              Wie läuft eine Haptonomie-Sitzung ab?
            </h3>
            <div className="content body-text-sm">
              <p>
                Eine Sitzung dauert 20–75 Minuten und beginnt mit einem kurzen Vorgespräch, in dem das Anliegen
                geklärt wird. Die haptonomische Arbeit findet meist auf einer Matte, liegend oder halbsitzend, statt.
                Empfehlenswert sind körpernahe, bequeme Kleidungsstücke wie Leggings und ein leichtes Oberteil.
              </p>
              <p>
                Jede Person oder jedes Paar erhält eine eigene, passende Technik. Bei Paar- oder Schwangerschaftssitzungen
                werden die Gesten unter Anleitung vermittelt und geübt, sodass diese auch zu Hause fortgeführt werden können.
                Zum Abschluss gibt es ein Gespräch für Fragen und Integration des Erlebten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Haptonomie
