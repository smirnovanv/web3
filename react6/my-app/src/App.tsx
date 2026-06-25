import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainHeader } from './components/MainHeader';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { LabsNavigation } from './components/LabsNavigation';
import { SyncSkating } from './pages/SyncSkating';
import { OlympicMedalists } from './pages/OlympicMedalists';
import { Lab5 } from './pages/Lab5';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainHeader />
        <Navigation />
        <main style={{
          display: 'flex',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '2rem',
          minHeight: 'calc(100vh - 350px)',
          alignItems: 'flex-start'
        }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/sync-skating" element={<SyncSkating />} />
              <Route path="/olympic-medalists" element={<OlympicMedalists />} />
              <Route path="/lab-5" element={<Lab5 />} />
            </Routes>
          <aside style={{
            flex: '0 0 300px',
            padding: '1.5rem',
            backgroundColor: '#f8faff',
            borderRadius: '12px',
            border: '1px solid #e0ecf5',
            position: 'sticky',
            top: '2rem'
          }}>
            <h2> Навигация </h2>
            <LabsNavigation />
          </aside>
        </main>
        <footer>
          <p> Copyright © 2026. Смирнова Наталья </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App
