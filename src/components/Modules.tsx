const Modules = () => {
  const advancedModules = [
    {
      number: '1',
      title: 'Selbstwahrnehmung – Nähe & Distanz',
      topics: ['Präsenz und Auftreten', 'Grundlagen der Achtsamkeitsmeditation', 'Atemwahrnehmung und Entspannung', 'Einführung in die Haptonomie', 'Basisschulung „fühlende Hand"', 'Selbstfürsorge: Umgang mit Stress']
    },
    {
      number: '2',
      title: 'Kontakt – Begleitung & Führung',
      topics: ['Atemarbeit als Ressource', 'Haptonomie: Gewicht, Schwerkraft und Halt', 'Berührungsqualitäten', 'Hypnose: suggestive Sprachmuster', 'Ruheinseln im Klinikalltag']
    },
    {
      number: '3',
      title: 'Kommunikation & Resonanz',
      topics: ['Achtsamkeit: Meditation in Bewegung', 'Haptonomie: Resonanz zwischen Hebamme, Mutter, Vater und Kind', 'Dynamische Kontaktaufnahme', 'Hypnose: Sprachführung, positive Suggestion']
    },
    {
      number: '4',
      title: 'Anwendung im klinischen Kontext',
      topics: ['Achtsamkeit mit Gebärenden unter Stress', 'Hypnose in der Geburtsvorbereitung', 'Atemarbeit in Wehenphasen', 'Haptonomie in Paarübungen', 'Haptonomische Begleitung unter Geburt']
    },
    {
      number: '5',
      title: 'Integration & Vertiefung',
      topics: ['Kombination von Atemarbeit, Hypnose & Achtsamkeit', 'Haptonomie postpartal', 'Schwierige Geburtssituationen', 'Selbstregulation: Belastung & Trauma', 'Sensibilität & Präsenz im Team']
    },
    {
      number: '6',
      title: 'Professionalisierung & Transfer',
      topics: ['Persönlicher Methodenkoffer', 'Supervision & Reflexion eigener Praxiserfahrungen', 'Verbindung zu Studien', 'Professionalisierung: Grenzen & Möglichkeiten', 'Abschluss: Integration in die Hebammenrolle']
    }
  ]

  return (
    <section id="module" className="section" aria-labelledby="modules-heading" style={{ backgroundColor: 'var(--color-bg-section1)', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }} aria-label="Seitenbereich">
            Ausbildungs-Module
          </p>
          <h2 id="modules-heading" className="title" style={{
            fontSize: '2.5rem',
            color: 'var(--color-heading)',
            marginBottom: '2rem'
          }}>
            Ausbildungs-Module für Hochschulstudium und Hebammenpraxis
          </h2>
        </div>

        {/* Basis Module */}
        <div className="box" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '3rem',
          marginBottom: '3rem',
          border: '2px solid var(--color-divider)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
        }}>
          <div className="columns is-vcentered">
            <div className="column is-2 has-text-centered">
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-button)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--color-heading)'
              }}>
                ★
              </div>
            </div>
            <div className="column is-10">
              <h3 className="title is-3" style={{ color: 'var(--color-heading)', marginBottom: '1rem' }}>
                Das Basis-Modul
              </h3>
              <p className="subtitle is-5" style={{ color: 'var(--color-subheading)', marginBottom: '1.5rem' }}>
                Berührung – Beziehung – Präsenz
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.8', marginBottom: '1rem' }}>
                <strong>Zentrale Kompetenzen im Hebammenberuf:</strong> Praxisnahes Wissen und verkörperte Erfahrung
                in der Haptonomie und Achtsamkeit
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-light)' }}>
                Abhängig von den Ressourcen als 3-tägiges „Basis-Intensivseminar" oder 1-tägiges
                „Basis-Einführungsseminar" mit Teilnahmebescheinigung
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Modules */}
        <div className="mb-5">
          <h3 className="title is-4 has-text-centered" style={{ color: 'var(--color-heading)', marginBottom: '2rem' }}>
            Die Aufbau-Module
          </h3>
          <p className="has-text-centered" style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            6 Module sind im Baukastensystem einzeln buchbar. Optimalerweise ein Modul je Semester.
            Dauer jeweils 5-tägig plus Selbststudium und Portfolioarbeit mit Zertifikat, optional curricular integrierbar, 1 ECTS-Punkt je Modul.
          </p>
        </div>

        <div className="columns is-multiline">
          {advancedModules.map((module, index) => (
            <div key={index} className="column is-6-tablet is-4-desktop">
              <div className="box" style={{
                height: '100%',
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: 'white',
                border: '1px solid var(--color-divider)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-button)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--color-button-text)'
                }}>
                  {module.number}
                </div>
                <h4 className="title is-5" style={{
                  color: 'var(--color-heading)',
                  marginBottom: '1.5rem',
                  minHeight: '3rem'
                }}>
                  {module.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {module.topics.map((topic, idx) => (
                    <li key={idx} style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-text-light)',
                      marginBottom: '0.75rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--color-yellow-green)',
                        fontWeight: 'bold'
                      }}>•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology & Quality */}
        <div className="columns is-multiline mt-5">
          <div className="column is-6">
            <div className="box" style={{
              height: '100%',
              backgroundColor: 'var(--color-bg-section2)',
              border: 'none',
              borderRadius: '12px',
              padding: '2.5rem'
            }}>
              <h4 className="title is-4" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                Methodik
              </h4>
              <ul style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '2' }}>
                <li>Praxisübungen in Einzel-, Paar- und Gruppenarbeit</li>
                <li>Selbsterfahrung und Reflexion</li>
                <li>Anleitung, kollegiale Beratung, Supervision</li>
                <li>Impulsvorträge und Diskussion</li>
              </ul>
            </div>
          </div>
          <div className="column is-6">
            <div className="box" style={{
              height: '100%',
              backgroundColor: 'var(--color-bg-section2)',
              border: 'none',
              borderRadius: '12px',
              padding: '2.5rem'
            }}>
              <h4 className="title is-4" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                Qualitätssicherung
              </h4>
              <ul style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '2' }}>
                <li>Portfolioarbeit: schriftliche Reflexion und Dokumentation</li>
                <li>Praktische Demonstration gewählter Methoden</li>
                <li>Selbststudium/Literaturarbeit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modules
