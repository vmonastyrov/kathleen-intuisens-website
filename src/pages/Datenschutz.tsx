import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
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

      <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh' }}>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <Link to="/" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
            &larr; Zurück zur Startseite
          </Link>

          <h1 className="title" style={{ fontSize: '2.5rem', color: 'var(--color-heading)', marginBottom: '2rem' }}>
            Datenschutzerklärung
          </h1>

          <div className="content" style={{ maxWidth: '800px', lineHeight: '1.8', color: '#555' }}>
            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>1. Datenschutz auf einen Blick</h2>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p>
              [Hosting-Anbieter eintragen - z.B. GitHub Pages, Netlify, etc.]
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Navanita K. Manke<br />
              [Adresse eintragen]<br />
              Telefon: +49 160 22 726 724<br />
              E-Mail: info@intuisens.de
            </p>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>4. Datenerfassung auf dieser Website</h2>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>

            <h3 style={{ color: 'var(--color-heading)', fontSize: '1.25rem', marginTop: '1.5rem' }}>Anfrage per E-Mail, Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>5. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte:</p>
            <ul>
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Datenschutz
