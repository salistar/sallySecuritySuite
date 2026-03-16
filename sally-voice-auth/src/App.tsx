import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { LivenessCheck } from './pages/LivenessCheck';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="liveness" element={<LivenessCheck />} />
          <Route path="vault" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Module IdentityVault Coming Soon</div>} />
          <Route path="logs" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Module AuditLogs Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Module Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
