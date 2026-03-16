import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { KillSwitch } from './pages/KillSwitch';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="killswitch" element={<KillSwitch />} />
          <Route path="iam" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Agent Identity & Access Management - ENCRYPTED</div>} />
          <Route path="sandbox" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Runtime Sandbox Monitoring - ACTIVE</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Global Protocol Controls - LOCKED</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
