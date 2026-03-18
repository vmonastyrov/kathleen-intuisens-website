import basisIcon from '../assets/basis-icon.jpeg'

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
    <section id="module" className="section section-muted" aria-labelledby="modules-heading">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 id="modules-heading" className="title section-title">
            Ausbildungs-Module für Hochschulstudium und Hebammenpraxis
          </h2>
        </div>

        {/* Basis Module */}
        <div className="box info-box info-box--white" style={{ marginBottom: '3rem' }}>
          <div className="columns is-vcentered">
            <div className="column is-2 has-text-centered">
              <img
                src={basisIcon}
                alt="Basis-Modul Icon"
                className="avatar-icon"
              />
            </div>
            <div className="column is-10">
              <h3 className="title is-3 card-title">
                Das Basis-Modul
              </h3>
              <p className="body-text-sm mb-paragraph">
                Berührung – Beziehung – Präsenz
              </p>
              <p className="body-text-sm mb-paragraph">
                Zentrale Kompetenzen im Hebammenberuf: Praxisnahes Wissen und verkörperte Erfahrung
                in der Haptonomie und Achtsamkeit
              </p>
              <p className="body-text-sm">
                Abhängig von den Ressourcen als 3-tägiges „Basis-Intensivseminar" oder 1-tägiges
                „Basis-Einführungsseminar" mit Teilnahmebescheinigung
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Modules */}
        <div className="mb-5">
          <h3 className="title is-4 has-text-centered card-title" style={{ marginBottom: '2rem' }}>
            Die Aufbau-Module
          </h3>
          <p className="has-text-centered intro-text intro-text--narrow">
            6 Module sind im Baukastensystem einzeln buchbar. Optimalerweise ein Modul je Semester.
            Dauer jeweils 5-tägig plus Selbststudium und Portfolioarbeit mit Zertifikat, optional curricular integrierbar, 1 ECTS-Punkt je Modul.
          </p>
        </div>

        <div className="columns is-multiline">
          {advancedModules.map((module, index) => (
            <div key={index} className="column is-6-tablet is-4-desktop">
              <div className="box card-module">
                <div className="module-number">
                  {module.number}
                </div>
                <h4 className="title is-5 card-title card-title--tall">
                  {module.title}
                </h4>
                <ul className="custom-list">
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>
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
            <div className="box info-box info-box--blue" style={{ height: '100%' }}>
              <h4 className="title is-4 card-title" style={{ marginBottom: '1.5rem' }}>
                Methodik
              </h4>
              <ul className="info-list">
                <li>Praxisübungen in Einzel-, Paar- und Gruppenarbeit</li>
                <li>Selbsterfahrung und Reflexion</li>
                <li>Anleitung, kollegiale Beratung, Supervision</li>
                <li>Impulsvorträge und Diskussion</li>
              </ul>
            </div>
          </div>
          <div className="column is-6">
            <div className="box info-box info-box--blue" style={{ height: '100%' }}>
              <h4 className="title is-4 card-title" style={{ marginBottom: '1.5rem' }}>
                Qualitätssicherung
              </h4>
              <ul className="info-list">
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
