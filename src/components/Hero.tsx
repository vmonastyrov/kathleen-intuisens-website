import bild3 from '../assets/bild3.png'

const Hero = () => {
  return (
    <section id="home" className="hero is-medium hero-bg" aria-labelledby="hero-title" style={{
      backgroundImage: `linear-gradient(135deg, rgba(74, 109, 143, 0.6) 0%, rgba(33, 75, 120, 0.7) 100%), url(${bild3})`
    }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-8 is-offset-2 has-text-centered">
              <h1 id="hero-title" className="title hero-title">
                Berühren berührt
              </h1>
              <p className="subtitle hero-subtitle">
                Ich qualifiziere (werdende) Hebammen, Kinder und ihre Eltern mit allen Sinnen zu begleiten
              </p>
              <div className="buttons is-centered">
                <a
                  className="button is-medium btn-primary"
                  onClick={() => document.getElementById('intuition')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Mehr über Intuition und Sensitivität erfahren"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
