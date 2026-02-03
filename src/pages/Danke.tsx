import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Danke = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Vielen Dank - IntuiSens</title>
        <meta name="description" content="Ihre Nachricht wurde erfolgreich gesendet." />
      </Helmet>

      <Header />
      <div style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingTop: '96px' }}>
        <div className="container" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
          <div style={{
            maxWidth: '600px',
            margin: '4rem auto',
            padding: '3rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-yellow-green)' }}>&#10003;</p>
            <h1 className="title" style={{ fontSize: '2rem', color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
              Vielen Dank für Ihre Nachricht!
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: '1.8' }}>
              Ich habe Ihre Anfrage erhalten und werde mich so schnell wie möglich bei Ihnen melden.
            </p>
            <Link
              to="/"
              className="button is-large"
              style={{
                backgroundColor: 'var(--color-yellow-green)',
                color: 'white',
                border: 'none',
                fontWeight: 600,
                borderRadius: '8px'
              }}
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Danke
