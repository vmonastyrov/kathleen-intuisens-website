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

    clearForm()

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        clearForm()
      }
    }
    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [])

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Bitte geben Sie Ihren Namen ein'
    if (name.trim().length < 2) return 'Der Name muss mindestens 2 Zeichen lang sein'
    if (name.length > 100) return 'Der Name darf maximal 100 Zeichen lang sein'
    const nameRegex = /^[a-zA-ZäöüÄÖÜßéèêëàâáãåçñíìîïóòôõúùûýÿæœ\s\-']+$/
    if (!nameRegex.test(name)) return 'Der Name darf nur Buchstaben, Leerzeichen und Bindestriche enthalten'
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Bitte geben Sie Ihre E-Mail-Adresse ein'
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(email)) return 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    return undefined
  }

  const validateSubject = (subject: string): string | undefined => {
    if (subject.length > 200) return 'Der Betreff darf maximal 200 Zeichen lang sein'
    return undefined
  }

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Bitte geben Sie Ihre Nachricht ein'
    if (message.trim().length < 10) return 'Die Nachricht muss mindestens 10 Zeichen lang sein'
    if (message.length > 5000) return 'Die Nachricht darf maximal 5000 Zeichen lang sein'
    return undefined
  }

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name': return validateName(value)
      case 'email': return validateEmail(value)
      case 'subject': return validateSubject(value)
      case 'message': return validateMessage(value)
      default: return undefined
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
    setFormData({ ...formData, [name]: value })
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    setErrors({ ...errors, [name]: validateField(name, value) })
  }

  return (
    <section id="kontakt" className="section section-muted" aria-labelledby="contact-heading">
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <h2 id="contact-heading" className="title section-title">
              Ich freue mich auf Ihre Nachricht.
            </h2>
            <div className="content body-text">
              <p className="mb-paragraph-lg">
                Rufen Sie mich gerne an oder schreiben Sie mir eine Mail. Ich freue mich auf den Austausch mit Ihnen!
              </p>

              <div className="mb-paragraph-lg">
                <p className="mb-paragraph">
                  Navanita Kathleen Manke
                </p>
                <p className="mb-paragraph">
                  Telefon: <a href="tel:+4915122726724" className="accent-link">+49 151 22 726 724</a><br />
                  Telefonisch erreichbar Mo–Fr 8–9 Uhr<br />
                  Rückruf innerhalb von 48 Std. bei Nachricht auf AB
                </p>
                <p>
                  E-Mail: <a href="mailto:info@intuisens.de" className="accent-link">info@intuisens.de</a>
                </p>
              </div>
            </div>
          </div>

          <div className="column is-6 is-offset-1">
            <div className="box form-box">
              <h3 className="title is-4 card-title" style={{ marginBottom: '1.5rem' }}>
                Kontaktformular
              </h3>

              <form
                action="https://formspree.io/f/xgozkroe"
                method="POST"
                onSubmit={handleSubmit}
                aria-label="Kontaktformular"
              >

                <div className="field">
                  <label htmlFor="contact-name" className="label form-label">
                    Name <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <input
                      id="contact-name"
                      className={`input form-input ${touched.name && errors.name ? 'form-input--error' : ''}`}
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
                    />
                    <span id="name-help" className="sr-only">Bitte geben Sie Ihren Namen ein</span>
                    {touched.name && errors.name && (
                      <p id="name-error" className="help form-help-error">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-email" className="label form-label">
                    E-Mail <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <input
                      id="contact-email"
                      className={`input form-input ${touched.email && errors.email ? 'form-input--error' : ''}`}
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
                    />
                    <span id="email-help" className="sr-only">Bitte geben Sie Ihre E-Mail-Adresse ein</span>
                    {touched.email && errors.email && (
                      <p id="email-error" className="help form-help-error">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-subject" className="label form-label">Betreff</label>
                  <div className="control">
                    <input
                      id="contact-subject"
                      className={`input form-input ${touched.subject && errors.subject ? 'form-input--error' : ''}`}
                      type="text"
                      name="subject"
                      placeholder="Betreff Ihrer Nachricht"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={200}
                      aria-invalid={touched.subject && !!errors.subject}
                      aria-describedby="subject-help subject-error"
                    />
                    <span id="subject-help" className="sr-only">Optional: Betreff Ihrer Anfrage</span>
                    {touched.subject && errors.subject && (
                      <p id="subject-error" className="help form-help-error">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact-message" className="label form-label">
                    Nachricht <span aria-label="Pflichtfeld">*</span>
                  </label>
                  <div className="control">
                    <textarea
                      id="contact-message"
                      className={`textarea form-input ${touched.message && errors.message ? 'form-input--error' : ''}`}
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
                    />
                    <span id="message-help" className="sr-only">Bitte geben Sie Ihre Nachricht ein</span>
                    {touched.message && errors.message && (
                      <p id="message-error" className="help form-help-error">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-large is-fullwidth btn-primary"
                    >
                      Nachricht senden
                    </button>
                  </div>
                  <p className="form-note">
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
