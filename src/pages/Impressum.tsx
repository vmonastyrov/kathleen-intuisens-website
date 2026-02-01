import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Impressum - IntuiSens</title>
        <meta name="description" content="Impressum von IntuiSens - Navanita K. Manke" />
      </Helmet>

      <Header />
      <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingTop: '96px' }}>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <Link to="/" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
            &larr; Zurück zur Startseite
          </Link>

          <h1 className="title" style={{ fontSize: '2.5rem', color: 'var(--color-heading)', marginBottom: '2rem' }}>
            Impressum
          </h1>

          <div className="content" style={{ maxWidth: '800px', lineHeight: '1.8', color: '#555' }}>
            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Verantwortlich für den Inhalt</h2>
            <p>
              <strong>Navanita Kathleen Manke</strong><br />
              Freiberufliche Hebamme (sage-femme libérale)<br />
              Registriert im Ordre des sages-femmes, Frankreich<br />
              <br />
              32, Chemin de Chamonix<br />
              26220 Dieulefit<br />
              Frankreich
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Kontakt</h2>
            <p>
              Telefon: +33 6 85 17 81 58<br />
              E-Mail: navanitamanke@live.fr
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Berufsbezeichnung</h2>
            <p>
              Berufsbezeichnung: Sage-femme (Hebamme)<br />
              Zuständige Kammer: Ordre des sages-femmes<br />
              Verliehen in: Frankreich
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Handelsregisternummer</h2>
            <p>
              SIRET: 792 639 270 000 42
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Verantwortlich für den Inhalt</h2>
            <p>
              Navanita Kathleen Manke<br />
              32, Chemin de Chamonix<br />
              26220 Dieulefit, Frankreich
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-yellow-green)' }}>
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Impressum
