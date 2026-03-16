import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { IPScanner } from './pages/IPScanner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="scanner" element={<IPScanner />} />
        <Route path="watermark" element={<div className="text-slate-500 font-mono p-8 italic border border-white/5 rounded-2xl bg-white/[0.02]">Watermarking_Module: Integration In Progress...</div>} />
        <Route path="threats" element={<div className="text-slate-500 font-mono p-8 italic border border-white/5 rounded-2xl bg-white/[0.02]">Theft_Detection_Stream: Pending Peer Connection...</div>} />
        <Route path="settings" element={<div className="text-slate-500 font-mono p-8 italic border border-white/5 rounded-2xl bg-white/[0.02]">Vault_Policy_Engine: Access Highly Restricted.</div>} />
      </Route>
    </Routes>
  );
}

export default App;
