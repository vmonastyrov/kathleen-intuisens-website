import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AGB = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>AGB - IntuiSens</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen von IntuiSens - Navanita K. Manke" />
      </Helmet>

      <Header />
      <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingTop: '96px' }}>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <Link to="/" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
            &larr; Zurück zur Startseite
          </Link>

          <h1 className="title" style={{ fontSize: '2.5rem', color: 'var(--color-heading)', marginBottom: '2rem' }}>
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="content" style={{ maxWidth: '800px', lineHeight: '1.8', color: '#555' }}>
            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 1 Geltungsbereich</h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Navanita K. Manke, IntuiSens (nachfolgend "Anbieterin") und den Teilnehmern (nachfolgend "Teilnehmer") über die Teilnahme an Seminaren, Workshops und Ausbildungsmodulen.
            </p>
            <p>
              (2) Abweichende Bedingungen des Teilnehmers werden nicht anerkannt, es sei denn, die Anbieterin stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 2 Anmeldung und Vertragsschluss</h2>
            <p>
              (1) Die Anmeldung zu Veranstaltungen erfolgt schriftlich per E-Mail oder über das Kontaktformular auf der Website.
            </p>
            <p>
              (2) Der Vertrag kommt durch die schriftliche Bestätigung der Anmeldung durch die Anbieterin zustande.
            </p>
            <p>
              (3) Mit der Anmeldung erkennt der Teilnehmer diese AGB an.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 3 Teilnahmegebühren und Zahlung</h2>
            <p>
              (1) Die Teilnahmegebühren ergeben sich aus der jeweiligen Veranstaltungsbeschreibung.
            </p>
            <p>
              (2) Die Zahlung ist vor Veranstaltungsbeginn fällig, sofern nicht anders vereinbart.
            </p>
            <p>
              (3) Bei Ratenzahlung sind die vereinbarten Raten zu den festgelegten Terminen zu zahlen.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 4 Rücktritt und Stornierung</h2>
            <p>
              (1) Der Teilnehmer kann seine Anmeldung schriftlich stornieren.
            </p>
            <p>
              (2) Bei Stornierung gelten folgende Regelungen:
            </p>
            <ul>
              <li>Bis 4 Wochen vor Veranstaltungsbeginn: kostenfreie Stornierung</li>
              <li>Bis 2 Wochen vor Veranstaltungsbeginn: 50% der Teilnahmegebühr</li>
              <li>Weniger als 2 Wochen vor Veranstaltungsbeginn: 100% der Teilnahmegebühr</li>
            </ul>
            <p>
              (3) Bei Stellung eines geeigneten Ersatzteilnehmers entfällt die Stornogebühr.
            </p>
            <p>
              (4) Die Anbieterin behält sich vor, Veranstaltungen bei zu geringer Teilnehmerzahl oder aus wichtigem Grund abzusagen. In diesem Fall werden bereits gezahlte Gebühren vollständig erstattet.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 5 Durchführung der Veranstaltungen</h2>
            <p>
              (1) Die Anbieterin ist berechtigt, Veranstaltungstermine und -orte bei wichtigem Grund zu ändern. Die Teilnehmer werden hierüber rechtzeitig informiert.
            </p>
            <p>
              (2) Die Anbieterin behält sich vor, Dozenten auszutauschen, sofern dies die Qualität der Veranstaltung nicht beeinträchtigt.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 6 Haftung</h2>
            <p>
              (1) Die Anbieterin haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
            </p>
            <p>
              (2) Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, außer bei Verletzung von Leben, Körper und Gesundheit.
            </p>
            <p>
              (3) Die Teilnahme an praktischen Übungen erfolgt auf eigene Verantwortung.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 7 Urheberrecht</h2>
            <p>
              (1) Alle Seminarunterlagen sind urheberrechtlich geschützt.
            </p>
            <p>
              (2) Die Vervielfältigung, Weitergabe oder Veröffentlichung von Seminarinhalten ist ohne ausdrückliche schriftliche Genehmigung nicht gestattet.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 8 Datenschutz</h2>
            <p>
              Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und den geltenden Datenschutzgesetzen.
            </p>

            <h2 style={{ color: 'var(--color-heading)', fontSize: '1.5rem', marginTop: '2rem' }}>§ 9 Schlussbestimmungen</h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
            <p>
              (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
            <p>
              (3) Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz der Anbieterin.
            </p>

            <p style={{ marginTop: '3rem', fontStyle: 'italic', color: '#777' }}>
              Stand: Januar 2025
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AGB
