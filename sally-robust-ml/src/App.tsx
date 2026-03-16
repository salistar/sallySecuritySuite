import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { AttackSimulator } from './pages/AttackSimulator';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="simulator" element={<AttackSimulator />} />
          <Route path="vulns" element={<div className="p-8 text-white font-mono">Vulnerability Mapping Engine - INITIALIZING...</div>} />
          <Route path="stats" element={<div className="p-8 text-white font-mono">Robustness Statistics - COLLECTING...</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono">Defense Global Settings - LOCKED</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
