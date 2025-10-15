import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Intuition from './components/Intuition'
import Haptonomie from './components/Haptonomie'
import Modules from './components/Modules'
import Zusammenarbeit from './components/Zusammenarbeit'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>IntuiSens - Haptonomie & Intuitive Hebammenausbildung</title>
        <meta name="description" content="IntuiSens bietet Ausbildungsmodule für Hebammen in Haptonomie, Achtsamkeit und körpertherapeutischen Methoden. Navanita K. Manke qualifiziert werdende Hebammen mit allen Sinnen." />
        <meta name="keywords" content="Haptonomie, Hebammenausbildung, Intuition, Sensitivität, Achtsamkeit, Geburtsvorbereitung, Navanita Manke" />
        <meta property="og:title" content="IntuiSens - Haptonomie & Intuitive Hebammenausbildung" />
        <meta property="og:description" content="Ausbildungsmodule für Hebammen in Haptonomie und körpertherapeutischen Methoden" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Hero />
      <About />
      <Intuition />
      <Haptonomie />
      <Modules />
      <Zusammenarbeit />
      <Contact />
      <Footer />
    </>
  )
}

export default App
