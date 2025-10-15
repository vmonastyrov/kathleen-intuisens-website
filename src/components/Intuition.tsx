const Intuition = () => {
  const methods = [
    {
      title: 'Haptonomie – Berührung & Beziehung',
      description: 'Berührung und einfühlende Kommunikation zwischen Hebamme, Mutter/Vater und Kind',
      icon: '🤝'
    },
    {
      title: 'Atemarbeit als Ressource',
      description: 'Regulierung des autonomen Nervensystems durch bewusste Atemführung',
      icon: '🌬️'
    },
    {
      title: 'Achtsamkeitsarbeit – Innere Präsenz',
      description: 'Selbst- und Fremdwahrnehmung, emotionale Selbstregulation und Führung',
      icon: '🧘'
    },
    {
      title: 'Hypnose',
      description: 'Schmerzlinderung, Ressourcenaktivierung und inneres Gleichgewicht',
      icon: '✨'
    }
  ]

  return (
    <section id="intuition" className="section" style={{ backgroundColor: 'white', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-gold)',
            fontWeight: 600,
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Intuition und Sensitivität
          </p>
          <h2 className="title" style={{
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
          {methods.map((method, index) => (
            <div key={index} className="column is-6-tablet is-3-desktop">
              <div className="box" style={{
                height: '100%',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                border: '2px solid var(--color-divider)',
                backgroundColor: 'white',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                  {method.icon}
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
                  lineHeight: '1.6'
                }}>
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="box mt-6" style={{
          backgroundColor: 'var(--color-bg-section2)',
          border: 'none',
          borderRadius: '12px',
          padding: '2.5rem'
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
