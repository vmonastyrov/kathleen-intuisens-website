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
    <section id="kontakt" className="section" aria-labelledby="contact-heading" style={{ backgroundColor: 'var(--color-bg-section1)', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-accent)',
              fontWeight: 600,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }} aria-label="Seitenbereich">
              Kontakt
            </p>
            <h2 id="contact-heading" className="title" style={{
              fontSize: '2.5rem',
              color: 'var(--color-heading)',
              marginBottom: '2rem',
              lineHeight: '1.2'
            }}>
              Ich freue mich auf Ihre Nachricht
            </h2>
            <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
              <p style={{ marginBottom: '2rem' }}>
                Rufen Sie mich gerne an oder schreiben Sie mir eine Mail. Ich freue mich auf den Austausch mit Ihnen!
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-heading)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Navanita K. Manke
                </h4>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Telefon:</strong> <a href="tel:+4916022726724" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none' }}>+49 160 22 726 724</a><br />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
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
              <form onSubmit={handleSubmit} aria-label="Kontaktformular">
                <div className="field">
                  <label htmlFor="contact-name" className="label" style={{ color: 'var(--color-heading)' }}>
                    Name <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <input
                      id="contact-name"
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="name-help"
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: 'var(--color-text)',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="name-help" className="sr-only">Bitte geben Sie Ihren Namen ein</span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-email" className="label" style={{ color: 'var(--color-heading)' }}>
                    E-Mail <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <input
                      id="contact-email"
                      className="input"
                      type="email"
                      name="email"
                      placeholder="ihre.email@beispiel.de"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="email-help"
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: 'var(--color-text)',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="email-help" className="sr-only">Bitte geben Sie Ihre E-Mail-Adresse ein</span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-subject" className="label" style={{ color: 'var(--color-heading)' }}>Betreff</label>
                  <div className="control">
                    <input
                      id="contact-subject"
                      className="input"
                      type="text"
                      name="subject"
                      placeholder="Betreff Ihrer Nachricht"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-describedby="subject-help"
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: 'var(--color-text)',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="subject-help" className="sr-only">Optional: Betreff Ihrer Anfrage</span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-message" className="label" style={{ color: 'var(--color-heading)' }}>
                    Nachricht <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <textarea
                      id="contact-message"
                      className="textarea"
                      name="message"
                      placeholder="Ihre Nachricht an mich..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="message-help"
                      style={{
                        borderColor: 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: 'var(--color-text)',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="message-help" className="sr-only">Bitte geben Sie Ihre Nachricht ein</span>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-large is-fullwidth"
                      style={{
                        backgroundColor: 'var(--color-button)',
                        color: 'var(--color-button-text)',
                        border: 'none',
                        fontWeight: 600,
                        borderRadius: '8px'
                      }}
                    >
                      Nachricht senden
                    </button>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '1rem' }}>
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
