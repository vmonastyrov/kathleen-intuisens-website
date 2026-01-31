import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AGB from './pages/AGB'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import 'bulma/css/bulma.min.css'
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
        </Routes>
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
