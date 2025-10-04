import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import StudyAreas from './components/StudyAreas'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>IntuiSens - Innovative Learning for Everyone</title>
        <meta name="description" content="Founded in 1850, IntuiSens is a community-driven institution with 92% job placement rate. Explore our areas of study and join our innovative learning community." />
        <meta name="keywords" content="education, university, learning, innovation, campus" />
        <meta property="og:title" content="IntuiSens - Innovative Learning for Everyone" />
        <meta property="og:description" content="Founded in 1850, IntuiSens is a community-driven institution with 92% job placement rate." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Hero />
      <About />
      <StudyAreas />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default App
