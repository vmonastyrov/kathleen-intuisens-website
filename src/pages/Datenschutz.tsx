import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung - IntuiSens</title>
        <meta name="description" content="Datenschutzerklärung von IntuiSens - Navanita K. Manke" />
      </Helmet>

      <Header />
      <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingTop: '96px' }}>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <Link to="/" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
            &larr; Zurück zur Startseite
          </Link>

          <h1 className="title" style={{ fontSize: '2.5rem', color: 'var(--color-heading)', marginBottom: '2rem' }}>
            Datenschutzerklärung
          </h1>

          <div className="content" style={{ maxWidth: '800px', lineHeight: '1.8', color: '#555' }}>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Navanita Kathleen Manke<br />
              32, Chemin de Chamonix<br />
              26220 Dieulefit, Frankreich<br />
              Telefon: +33 6 85 17 81 58<br />
              E-Mail: navanitamanke@live.fr
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>2. Hosting</h2>
            <p>
              Diese Website wird bei <strong>GitHub Pages</strong> gehostet (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA).
            </p>
            <p>
              Beim Besuch der Website erfasst GitHub automatisch technische Daten wie Ihre IP-Adresse in Server-Logfiles. Diese Daten werden zur Bereitstellung der Website benötigt. Wir setzen keine Cookies und keine Analyse-Tools ein.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Website). Die Datenübertragung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln.
            </p>
            <p>
              Mehr Informationen:{' '}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-yellow-green)' }}>
                GitHub Privacy Statement
              </a>
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>3. Kontaktformular</h2>
            <p>
              Für das Kontaktformular nutzen wir <strong>Formspree</strong> (Formspree, Inc., 3500 South DuPont Highway, Suite R-203, Dover, DE 19901, USA).
            </p>
            <p>
              Wenn Sie das Formular absenden, werden Ihre Angaben (Name, E-Mail, Nachricht) an Formspree übertragen und uns per E-Mail zugestellt. Die Datenübertragung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
            <p>
              Mehr Informationen:{' '}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-yellow-green)' }}>
                Formspree Privacy Policy
              </a>
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>4. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch. Bei Fragen oder Beschwerden können Sie sich an uns oder an eine Datenschutz-Aufsichtsbehörde wenden.
            </p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Datenschutz
