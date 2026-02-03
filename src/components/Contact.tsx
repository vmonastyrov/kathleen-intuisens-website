import { useState, useEffect } from 'react'

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const clearForm = () => {
      if (sessionStorage.getItem('formSubmitted') === 'true') {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTouched({})
        setErrors({})
      }
    }

    // При обычном монтировании
    clearForm()

    // При возврате из bfcache
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        clearForm()
      }
    }
    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [])

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Bitte geben Sie Ihren Namen ein'
    }
    if (name.trim().length < 2) {
      return 'Der Name muss mindestens 2 Zeichen lang sein'
    }
    if (name.length > 100) {
      return 'Der Name darf maximal 100 Zeichen lang sein'
    }
    const nameRegex = /^[a-zA-ZäöüÄÖÜßéèêëàâáãåçñíìîïóòôõúùûýÿæœ\s\-']+$/
    if (!nameRegex.test(name)) {
      return 'Der Name darf nur Buchstaben, Leerzeichen und Bindestriche enthalten'
    }
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Bitte geben Sie Ihre E-Mail-Adresse ein'
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(email)) {
      return 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }
    return undefined
  }

  const validateSubject = (subject: string): string | undefined => {
    if (subject.length > 200) {
      return 'Der Betreff darf maximal 200 Zeichen lang sein'
    }
    return undefined
  }

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Bitte geben Sie Ihre Nachricht ein'
    }
    if (message.trim().length < 10) {
      return 'Die Nachricht muss mindestens 10 Zeichen lang sein'
    }
    if (message.length > 5000) {
      return 'Die Nachricht darf maximal 5000 Zeichen lang sein'
    }
    return undefined
  }

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return validateName(value)
      case 'email':
        return validateEmail(value)
      case 'subject':
        return validateSubject(value)
      case 'message':
        return validateMessage(value)
      default:
        return undefined
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message)
    }
    setErrors(newErrors)
    setTouched({ name: true, email: true, subject: true, message: true })
    return !Object.values(newErrors).some(error => error !== undefined)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault()
      return
    }
    sessionStorage.setItem('formSubmitted', 'true')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (touched[name]) {
      setErrors({
        ...errors,
        [name]: validateField(name, value)
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched({
      ...touched,
      [name]: true
    })
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    })
  }

  return (
    <section id="kontakt" className="section" aria-labelledby="contact-heading" style={{ backgroundColor: 'var(--color-bg-section1)', padding: '5rem 1.5rem' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <p style={{
              fontSize: '1.75rem',
              color: 'var(--color-yellow-green)',
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
            <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              <p style={{ marginBottom: '2rem' }}>
                Rufen Sie mich gerne an oder schreiben Sie mir eine Mail. Ich freue mich auf den Austausch mit Ihnen!
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-heading)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Navanita Kathleen Manke
                </h4>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Telefon:</strong> <a href="tel:+4915122726724" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none' }}>+49 151 22 726 724</a><br />
                  <span style={{ fontSize: '0.95rem', color: '#555' }}>
                    Telefonisch erreichbar Mo–Fr 8–9 Uhr<br />
                    Rückruf innerhalb von 48 Std. bei Nachricht auf AB
                  </span>
                </p>
                <p>
                  <strong>E-Mail:</strong> <a href="mailto:navanita@live.de" style={{ color: 'var(--color-yellow-green)', textDecoration: 'none' }}>navanita@live.de</a>
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

              <form
                action="https://formspree.io/f/xgozkroe"
                method="POST"
                onSubmit={handleSubmit}
                aria-label="Kontaktformular"
              >
                
                <div className="field">
                  <label htmlFor="contact-name" className="label" style={{ color: 'var(--color-heading)' }}>
                    Name <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <input
                      id="contact-name"
                      className={`input ${touched.name && errors.name ? 'is-danger' : ''}`}
                      type="text"
                      name="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={100}
                      aria-required="true"
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby="name-help name-error"
                      style={{
                        borderColor: touched.name && errors.name ? '#f14668' : 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="name-help" className="sr-only">Bitte geben Sie Ihren Namen ein</span>
                    {touched.name && errors.name && (
                      <p id="name-error" className="help is-danger" style={{ color: '#f14668' }}>{errors.name}</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-email" className="label" style={{ color: 'var(--color-heading)' }}>
                    E-Mail <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <input
                      id="contact-email"
                      className={`input ${touched.email && errors.email ? 'is-danger' : ''}`}
                      type="email"
                      name="email"
                      placeholder="ihre.email@beispiel.de"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-required="true"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby="email-help email-error"
                      style={{
                        borderColor: touched.email && errors.email ? '#f14668' : 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="email-help" className="sr-only">Bitte geben Sie Ihre E-Mail-Adresse ein</span>
                    {touched.email && errors.email && (
                      <p id="email-error" className="help is-danger" style={{ color: '#f14668' }}>{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-subject" className="label" style={{ color: 'var(--color-heading)' }}>Betreff</label>
                  <div className="control">
                    <input
                      id="contact-subject"
                      className={`input ${touched.subject && errors.subject ? 'is-danger' : ''}`}
                      type="text"
                      name="subject"
                      placeholder="Betreff Ihrer Nachricht"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={200}
                      aria-invalid={touched.subject && !!errors.subject}
                      aria-describedby="subject-help subject-error"
                      style={{
                        borderColor: touched.subject && errors.subject ? '#f14668' : 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="subject-help" className="sr-only">Optional: Betreff Ihrer Anfrage</span>
                    {touched.subject && errors.subject && (
                      <p id="subject-error" className="help is-danger" style={{ color: '#f14668' }}>{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-message" className="label" style={{ color: 'var(--color-heading)' }}>
                    Nachricht <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <textarea
                      id="contact-message"
                      className={`textarea ${touched.message && errors.message ? 'is-danger' : ''}`}
                      name="message"
                      placeholder="Ihre Nachricht an mich..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={5000}
                      aria-required="true"
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby="message-help message-error"
                      style={{
                        borderColor: touched.message && errors.message ? '#f14668' : 'var(--color-divider)',
                        backgroundColor: 'white',
                        color: '#363636',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        colorScheme: 'light'
                      }}
                    />
                    <span id="message-help" className="sr-only">Bitte geben Sie Ihre Nachricht ein</span>
                    {touched.message && errors.message && (
                      <p id="message-error" className="help is-danger" style={{ color: '#f14668' }}>{errors.message}</p>
                    )}
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
                  <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '1rem' }}>
                    * Pflichtfelder
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
