import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AGB from './pages/AGB'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Danke from './pages/Danke'
import 'bulma/css/versions/bulma-no-dark-mode.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/danke" element={<Danke />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
