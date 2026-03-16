import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { VerificationEngine } from './pages/VerificationEngine';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="verify" element={<VerificationEngine />} />
          <Route path="biometric" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Biometric Audit Coming Soon</div>} />
          <Route path="fraud" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Fraud Detection Matrix Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Security Policy Config Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
