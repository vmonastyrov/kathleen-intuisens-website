import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Создаем mailto ссылку с заполненными данными
    const mailtoLink = `mailto:info@intuisens.de?subject=${encodeURIComponent(formData.subject || 'Anfrage von ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
    )}`

    // Открываем почтовый клиент
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="kontakt" className="section" style={{ backgroundColor: 'var(--color-bg-section1)', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-gold)',
              fontWeight: 600,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Kontakt
            </p>
            <h2 className="title" style={{
              fontSize: '2.5rem',
              color: 'var(--color-heading)',
              marginBottom: '2rem',
              lineHeight: '1.2'
            }}>
              Ich freue mich auf Ihre Nachricht
            </h2>
            <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              <p style={{ marginBottom: '2rem' }}>
                Rufen Sie mich gerne an oder schreiben Sie mir eine Mail. Ich freue mich auf den Austausch mit Ihnen!
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-heading)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Navanita K. Manke
                </h4>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Telefon:</strong> <a href="tel:+4916022726724" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none' }}>+49 160 22 726 724</a><br />
                  <span style={{ fontSize: '0.95rem', color: '#777' }}>
                    Telefonisch erreichbar Mo–Fr 8–9 Uhr<br />
                    Rückruf innerhalb von 48 Std. bei Nachricht auf AB
                  </span>
                </p>
                <p>
                  <strong>E-Mail:</strong> <a href="mailto:info@intuisens.de" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none' }}>info@intuisens.de</a>
                </p>
              </div>
            </div>
          </div>

          <div className="column is-6 is-offset-1">
            <div className="box" style={{
              padding: '2.5rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <h3 className="title is-4" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                Kontaktformular
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label" style={{ color: 'var(--color-heading)' }}>Name *</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={{ color: 'var(--color-heading)' }}>E-Mail *</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="ihre.email@beispiel.de"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={{ color: 'var(--color-heading)' }}>Betreff</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="subject"
                      placeholder="Betreff Ihrer Nachricht"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" style={{ color: 'var(--color-heading)' }}>Nachricht *</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Ihre Nachricht an mich..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-large is-fullwidth"
                      style={{
                        backgroundColor: 'var(--color-yellow-green)',
                        color: 'white',
                        border: 'none',
                        fontWeight: 600,
                        borderRadius: '8px'
                      }}
                    >
                      Nachricht senden
                    </button>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#777', marginTop: '1rem' }}>
                    * Pflichtfelder. Ihre Nachricht wird in Ihrem E-Mail-Programm geöffnet.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
