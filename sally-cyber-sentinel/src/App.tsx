import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { ThreatHunter } from './pages/ThreatHunter';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="hunter" element={<ThreatHunter />} />
          <Route path="incidents" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Incident Feed Engine Coming Soon</div>} />
          <Route path="intel" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Intel Vault Integration Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Sentinel Config Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
