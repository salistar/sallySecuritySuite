import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { EthicsAudit } from './pages/EthicsAudit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="audit" element={<EthicsAudit />} />
        <Route path="transparency" element={<div className="text-slate-600 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center uppercase tracking-[0.3em]">Transparency_Portal: "Rendering model decision logs..."</div>} />
        <Route path="impact" element={<div className="text-slate-600 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center uppercase tracking-[0.3em]">Stakeholder_Matrix: "Awaiting socio-technical data feed..."</div>} />
        <Route path="settings" element={<div className="text-slate-600 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center uppercase tracking-[0.3em]">Ethics_Policy_Vault: "Governance ROOT Access Required."</div>} />
      </Route>
    </Routes>
  );
}

export default App;
