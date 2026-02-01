import { useState } from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const Intuition = () => {
  const [expandedMethod, setExpandedMethod] = useState<string | null>(null)

  const techniqueDetails: Record<string, { title: string; color: string; items: { title: string; description: string }[] }> = {
    haptonomie: {
      title: 'Haptonomie – Berührung & Beziehung',
      color: '#214B78',
      items: [
        {
          title: 'Haptonomie in der Schwangerschaft und bei der Geburt',
          description: 'Schon im Mutterleib spürt ein Kind, dass es willkommen ist und frei, in Kontakt mit seinen Eltern zu treten. Durch haptonomische Berührung erfährt es Geborgenheit, Sicherheit, Liebe und die Bestätigung, so angenommen zu sein, wie es ist.'
        },
        {
          title: 'Haptonomie für das Neugeborene und seine Eltern',
          description: 'Mit der Geburt tritt das Baby als eigenständiges Wesen ins Leben – und ist doch noch eng verbunden mit den Menschen, die es versorgen. Haptonomie unterstützt das Baby, seine Eigenständigkeit zu entfalten und aktiver am Familienalltag teilzunehmen.'
        },
        {
          title: 'Haptonomie für Einzelpersonen',
          description: 'Haptonomie lädt ein, sich selbst in Tiefe zu begegnen – den eigenen Gefühlen, Verletzungen und inneren Wahrheiten. Durch achtsame Berührung entsteht ein Raum von Geborgenheit und Annahme, in dem Heilung und Ganzwerden möglich werden.'
        },
        {
          title: 'Haptonomie für Paare',
          description: 'Haptonomie eröffnet Paaren einen neuen Weg der Begegnung und des miteinander Teilens – jenseits von Routine, Gewohnheit und Sprachlosigkeit. Sie unterstützt, sich gegenseitig zu empfangen und anzunehmen.'
        }
      ]
    },
    atemarbeit: {
      title: 'Atemarbeit – Atem als Ressource',
      color: '#214B78',
      items: [
        {
          title: 'Atem als Werkzeug der Selbstregulation',
          description: 'Der Atem ist eine Brücke zum autonomen Nervensystem. Durch bewusste Atemführung können Stress, Angst und innere Unruhe reguliert werden. Der Rhythmus des Atems führt zu Ruhe, Zentrierung und innerer Stabilität.'
        },
        {
          title: 'Atem als Spiegel der Emotion',
          description: 'Jede Emotion verändert unseren natürlichen Atem. Durch achtsames Atmen werden innere Spannungen spürbar und können sich lösen. Präventiv kann atmen benutzt werden um starke Emotionen direkt abzubauen ohne sie zu unterdrücken. So entsteht Raum für Lebendigkeit, authentischen Ausdruck und tiefes emotionales Gleichgewicht.'
        },
        {
          title: 'Atem als Tor zur Bewusstheit',
          description: 'Im bewussten Atem öffnet sich ein stiller Raum, in dem Wahrnehmung klar und das Denken ruhig wird. Atemarbeit führt in den gegenwärtigen Moment – zu Präsenz, Weite und innerem Frieden. Alle spirituellen Wege nutzen den Atem als Schlüssel für Meditation und Kontemplation.'
        },
        {
          title: 'Atem als therapeutisches Mittel',
          description: 'Mit jedem Atemzug versorgen wir unsere Zellen mit Sauerstoff. Emotionale Spannungen und alte Traumata können diesen Fluss blockieren. Durch eine tiefe, geführte Atmung wird dieses Körpergedächtnis und das Unterbewusstsein berührt, ausgedrückt und aufgelöst – Heilung geschieht durch Bewusstwerdung und Atem.'
        }
      ]
    },
    achtsamkeit: {
      title: 'Achtsamkeit – Innere Präsenz',
      color: '#214B78',
      items: [
        {
          title: 'Achtsamkeit als innere Haltung',
          description: 'Achtsamkeit bedeutet, den gegenwärtigen Moment bewusst wahrzunehmen – ohne Urteil, mit Offenheit und Mitgefühl. Sie schafft eine innere Haltung von Präsenz und Akzeptanz, in der sich Ruhe und Klarheit entfalten. So entsteht ein Raum, in dem Erfahrung nicht kontrolliert, sondern bewusst erlebt werden darf.'
        },
        {
          title: 'Achtsamkeit als Weg zur Selbstwahrnehmung',
          description: 'Durch achtsames Spüren und Beobachten wird der Kontakt zu den eigenen Empfindungen, Gedanken und Gefühlen gestärkt. Diese bewusste Selbstwahrnehmung hilft, frühzeitig Überforderung zu erkennen und Ressourcen zu aktivieren. Achtsamkeit fördert Selbstfürsorge – die Basis für eine einfühlsame Begleitung anderer.'
        },
        {
          title: 'Achtsamkeit in der Begleitung',
          description: 'In achtsamer Präsenz begegnet die Hebamme der Frau nicht aus Handlung, sondern aus Sein. Diese Haltung schafft Vertrauen, Sicherheit und Raum für authentische Begegnung. Achtsamkeit lässt den Kontakt lebendig, klar und respektvoll werden – im Geburtsraum ebenso wie im Alltag.'
        },
        {
          title: 'Achtsamkeit als spirituelle Praxis',
          description: 'Achtsamkeit verbindet Körper, Atem und Bewusstsein zu einer Einheit. Sie führt über das Tun hinaus in ein einfaches Da-Sein, in dem Stille, Verbundenheit und Sinn erfahrbar werden. So wird Achtsamkeit zu einer Praxis des inneren Friedens – und zu einem Weg der Rückkehr in das Jetzt.'
        }
      ]
    },
    sophrologie: {
      title: 'Sophrologie',
      color: '#214B78',
      items: [
        {
          title: 'Vertiefte Körperwahrnehmung für Entspannung und Stressabbau',
          description: 'Durch achtsame Bewegung, bewusstes Atmen und gezielte Körperwahrnehmung gelangt der Körper in einen Zustand tiefer Entspannung. Das Nervensystem beruhigt sich, körperliche Spannungen lösen sich, und der Körper wird als lebendiger Resonanzraum für Vitalität und Wohlbefinden erfahrbar.'
        },
        {
          title: 'Verstand – Mentale Klarheit und beruhigte Gedanken',
          description: 'Atemlenkung, Visualisierung und Fokussierung helfen, das Gedankenkarussell zu unterbrechen. Der Geist wird klarer und ruhiger. Stärkende innere Bilder fördern Stabilität, Selbstvertrauen und Gelassenheit – besonders in anspruchsvollen Situationen.'
        },
        {
          title: 'Selbstwirksamkeit durch Selbstvertrauen und emotionale Balance',
          description: 'Sophrologie unterstützt dabei, Gefühle bewusst wahrzunehmen und konstruktiv zu regulieren. Durch integrierte Emotionserfahrungen entsteht innere Stabilität. So wächst das Vertrauen in die eigene Kraft, und ein gelassener Umgang mit Herausforderungen wird möglich.'
        },
        {
          title: 'Innere Präsenz und intuitive Tiefe',
          description: 'In wacher, tiefer Entspannung entsteht ein Zustand innerer Präsenz. Die Wahrnehmung wird klarer, Intuition kann sich entfalten, und der Zugang zum gegenwärtigen Moment öffnet sich. Das innere Bewusstsein erfährt Weite, Ruhe und Verbundenheit.'
        }
      ]
    }
  }

  const methods = [
    {
      id: 'haptonomie',
      title: 'Haptonomie – Berührung & Beziehung',
      description: 'Berührung und einfühlende Kommunikation zwischen Hebamme, Mutter/Vater und Kind',
      icon: icon1
    },
    {
      id: 'atemarbeit',
      title: 'Atemarbeit als Ressource',
      description: 'Regulierung des autonomen Nervensystems durch bewusste Atemführung',
      icon: icon2
    },
    {
      id: 'achtsamkeit',
      title: 'Achtsamkeit – Innere Präsenz',
      description: 'Selbst- und Fremdwahrnehmung, emotionale Selbstregulation und Führung',
      icon: icon3
    },
    {
      id: 'sophrologie',
      title: 'Sophrologie',
      description: 'Körperwahrnehmung, mentale Klarheit und emotionale Balance',
      icon: icon4
    }
  ]

  const handleToggle = (methodId: string) => {
    setExpandedMethod(expandedMethod === methodId ? null : methodId)
  }

  const expandedDetails = expandedMethod ? techniqueDetails[expandedMethod] : null

  return (
    <section id="intuition" className="section" aria-labelledby="intuition-heading" style={{ backgroundColor: 'white', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <p style={{
            fontSize: '1.75rem',
            color: 'var(--color-yellow-green)',
            fontWeight: 600,
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }} aria-label="Seitenbereich">
            Intuition und Sensitivität
          </p>
          <h2 id="intuition-heading" className="title" style={{
            fontSize: '2.5rem',
            color: 'var(--color-heading)',
            marginBottom: '2rem',
            lineHeight: '1.3',
            maxWidth: '900px',
            margin: '0 auto 2rem'
          }}>
            Intuition und Sensitivität in der Geburts-, Frauen und Familienbegleitung
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto 3rem'
          }}>
            <strong>„Weise Frau – Sage-femme"</strong> ist auch heute noch die Berufsbezeichnung der französischen Hebammen. Das Studium macht uns wissend und professionell kompetent. Weise machen uns unsere Erfahrungen, unsere Offenheit und Empfänglichkeit.
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto 3rem'
          }}>
            In meinen Ausbildungs-Modulen erfahren die Teilnehmenden über praktische Übungen, feine Signale und Reaktionen wahrzunehmen und auf sie entspannend einzugehen. Diese ermöglichen eine bewusste, intuitive Verbindung mit dem ungeborenen Kind und den Eltern. Die Teilnehmenden entwickeln eine innere Präsenz, mit der sie Eltern in das Hineinwachsen in ihre neue Rolle bewusster begleiten und Selbst-Sicherheit vermitteln können. Und so eine noch sensiblere Geburts-, Frauen- und Familienbegleitung.
          </p>
        </div>

        <div className="has-text-centered mb-5">
          <h3 className="title is-4" style={{
            color: 'var(--color-heading)',
            marginBottom: '1rem'
          }}>
            Die praxisorientierten Module verbinden vier körpertherapeutische Verfahren
          </h3>
        </div>

        <div className="columns is-multiline">
          {methods.map((method) => (
            <div key={method.id} className="column is-6-tablet is-3-desktop">
              <div className="box" style={{
                height: '100%',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                border: expandedMethod === method.id ? `2px solid ${techniqueDetails[method.id].color}` : '2px solid var(--color-divider)',
                backgroundColor: expandedMethod === method.id ? `${techniqueDetails[method.id].color}10` : '#F4F0E9',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <img
                    src={method.icon}
                    alt={method.title}
                    style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                  />
                </div>
                <h4 className="title is-5" style={{
                  color: 'var(--color-heading)',
                  marginBottom: '1rem',
                  minHeight: '3rem'
                }}>
                  {method.title}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: '1.6',
                  flex: 1
                }}>
                  {method.description}
                </p>
                <button
                  onClick={() => handleToggle(method.id)}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: expandedMethod === method.id ? techniqueDetails[method.id].color : 'var(--color-yellow-green)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {expandedMethod === method.id ? 'Schließen' : 'Mehr erfahren'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Details Section */}
        {expandedDetails && (
          <div style={{
            marginTop: '3rem',
            padding: '2.5rem',
            backgroundColor: `${expandedDetails.color}08`,
            borderRadius: '12px',
            border: `2px solid ${expandedDetails.color}30`,
            animation: 'fadeIn 0.3s ease'
          }}>
            <div className="has-text-centered mb-5">
              <h3 className="title is-3" style={{ color: expandedDetails.color }}>
                {expandedDetails.title}
              </h3>
            </div>

            <div className="columns is-multiline">
              {expandedDetails.items.map((item, index) => (
                <div key={index} className="column is-6">
                  <article className="box" style={{
                    height: '100%',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: `2px solid ${expandedDetails.color}20`,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
                  }}>
                    <h4 className="title is-5" style={{
                      color: expandedDetails.color,
                      marginBottom: '1rem',
                      fontSize: '1.15rem'
                    }}>
                      {index + 1}. {item.title}
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      color: '#555',
                      lineHeight: '1.7'
                    }}>
                      {item.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>

            <div className="has-text-centered mt-5">
              <button
                onClick={() => setExpandedMethod(null)}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: 'transparent',
                  color: expandedDetails.color,
                  border: `2px solid ${expandedDetails.color}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Schließen
              </button>
            </div>
          </div>
        )}

        <div className="box mt-6" style={{
          backgroundColor: '#EBE7E0',
          border: '2px solid var(--color-divider)',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
        }}>
          <p className="title is-5" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
            Kompakt eingebettet sind aktuelle Erkenntnisse der
          </p>
          <div className="content" style={{ fontSize: '1.05rem', color: '#555', lineHeight: '2' }}>
            <ul>
              <li>körperbasierten Psychotherapie</li>
              <li>prä- und perinatalen Psychologie, klinische Psychologie, Verhaltenspsychologie</li>
              <li>psychosomatischen Frauen-, Geburts- und Familienbegleitung</li>
              <li>Neurobiologie von Berührung, Atmung und Bewusstsein</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intuition
