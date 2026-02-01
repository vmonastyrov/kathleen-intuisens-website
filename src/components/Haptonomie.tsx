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
      image: img5
    },
    {
      title: 'Haptonomie für Paare',
      subtitle: 'Ein verbindender Raum für authentische Begegnung',
      description: 'Haptonomie eröffnet Paaren einen neuen Weg der Begegnung und des miteinander Teilens – jenseits von Routine, Gewohnheit und Sprachlosigkeit. Sie unterstützt, sich gegenseitig zu empfangen und anzunehmen.',
      image: img6
    }
  ]

  return (
    <>
      {/* Main Haptonomie Section */}
      <section id="haptonomie" className="section" aria-labelledby="haptonomie-heading" style={{ backgroundColor: 'var(--color-bg-section1)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <figure className="image" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <img
                  src={img1}
                  alt="Haptonomie - Einfühlsame Berührung und Verbindung"
                  style={{ objectFit: 'cover', width: '100%', height: '500px' }}
                />
              </figure>
            </div>
            <div className="column is-5 is-offset-1">
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--color-yellow-green)',
                fontWeight: 600,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }} aria-label="Seitenbereich">
                Was ist Haptonomie?
              </p>
              <h2 id="haptonomie-heading" className="title" style={{
                fontSize: '2.5rem',
                color: 'var(--color-heading)',
                marginBottom: '2rem',
                lineHeight: '1.2'
              }}>
                Ich fühle · ich bin · richtig · wie ich bin
              </h2>
              <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Haptonomie – die Kraft der einfühlsamen Berührung stärkt Vertrauen, Geborgenheit und innere Ruhe.
                  Sie öffnet den Raum für echte Begegnung mit uns selbst und anderen.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Haptonomie verbindet zwei altgriechische Begriffe: <em>nomos</em> – das Gesetz des Lebens und
                  <em> hapto</em> – berühren, verbinden, vereinen. Schon vor der Geburt erfahren wir über unsere Haut,
                  dass wir in Beziehung stehen: zu uns selbst, zu anderen und zur Welt.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Jede Berührung bestätigt unser Sein und stärkt unser Erleben von Sicherheit, Geborgenheit und
                  Ankommen bei uns selbst. So entstehen in uns Vertrauen, Stabilität und die Fähigkeit, tragende
                  Beziehungen zu gestalten.
                </p>
                <a
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button is-medium"
                  aria-label="Kontakt für Haptonomie-Sitzungen aufnehmen"
                  style={{
                    backgroundColor: 'var(--color-yellow-green)',
                    color: 'white',
                    border: 'none',
                    fontWeight: 600,
                    borderRadius: '8px',
                    textDecoration: 'none',
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

      {/* Applications Grid */}
      <section className="section" aria-labelledby="applications-heading" style={{ backgroundColor: 'white', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 id="applications-heading" className="title" style={{
              fontSize: '2.5rem',
              color: 'var(--color-heading)',
              marginBottom: '1rem'
            }}>
              Haptonomie-Anwendungen
            </h2>
            <p className="subtitle" style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Haptonomie begleitet in allen Lebensphasen
            </p>
          </div>

          <div className="columns is-multiline">
            {applications.map((app, index) => (
              <div key={index} className="column is-6">
                <article className="box" style={{
                  height: '100%',
                  padding: '0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--color-divider)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
                }}>
                  <figure className="image">
                    <img
                      src={app.image}
                      alt={`${app.title} - ${app.subtitle}`}
                      style={{ objectFit: 'cover', width: '100%', height: '250px' }}
                    />
                  </figure>
                  <div style={{ padding: '2rem' }}>
                    <h3 className="title is-5" style={{
                      color: 'var(--color-heading)',
                      marginBottom: '0.5rem'
                    }}>
                      {app.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-yellow-green)',
                      marginBottom: '1rem'
                    }}>
                      {app.subtitle}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      color: '#666',
                      lineHeight: '1.7'
                    }}>
                      {app.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Session Info */}
          <div className="box mt-6" style={{
            backgroundColor: 'var(--color-bg-section2)',
            border: 'none',
            borderRadius: '12px',
            padding: '2.5rem'
          }}>
            <h3 className="title is-4" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
              Wie läuft eine Haptonomie-Sitzung ab?
            </h3>
            <div className="content" style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.8' }}>
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
