import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { PoisoningFilter } from './pages/PoisoningFilter';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="filter" element={<PoisoningFilter />} />
          <Route path="sanitize" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Automated Data Sanitization Pipeline - ACTIVE</div>} />
          <Route path="sync" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Integrity Patterns Global Sync - STANDBY</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Fusion Parameter Control - ENCRYPTED</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
