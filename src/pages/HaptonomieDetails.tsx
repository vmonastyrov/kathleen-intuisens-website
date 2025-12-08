import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HaptonomieDetails = () => {
  return (
    <>
      <Header />
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)', padding: '5rem 1.5rem', minHeight: '70vh' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs" style={{ marginBottom: '2rem' }}>
            <ul>
              <li><Link to="/" style={{ color: 'var(--color-subheading)' }}>Home</Link></li>
              <li className="is-active"><a href="#" aria-current="page">Haptonomie Details</a></li>
            </ul>
          </nav>

          <h1 className="title is-1" style={{ color: 'var(--color-heading)', marginBottom: '2rem' }}>
            Mehr über Haptonomie
          </h1>

          <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haptonomie nach Frans Veldman jr.
              ist eine tiefgreifende Methode der Berührung und Begleitung. Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>

            <h2 className="title is-3" style={{ color: 'var(--color-heading)', marginTop: '3rem', marginBottom: '1.5rem' }}>
              Die Wissenschaft hinter Haptonomie
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <h2 className="title is-3" style={{ color: 'var(--color-heading)', marginTop: '3rem', marginBottom: '1.5rem' }}>
              Praktische Anwendungen
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>

            <div className="box" style={{
              backgroundColor: 'var(--color-bg-section2)',
              padding: '2rem',
              marginTop: '3rem',
              borderLeft: '4px solid var(--color-gold)'
            }}>
              <p className="title is-5" style={{ color: 'var(--color-heading)', marginBottom: '1rem' }}>
                Interessiert an einer Haptonomie-Sitzung?
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Kontaktieren Sie mich für weitere Informationen oder um einen Termin zu vereinbaren.
              </p>
              <Link
                to="/#kontakt"
                className="button is-medium"
                style={{
                  backgroundColor: 'var(--color-button)',
                  color: 'var(--color-heading)',
                  border: 'none',
                  fontWeight: 600,
                  borderRadius: '8px'
                }}
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HaptonomieDetails
