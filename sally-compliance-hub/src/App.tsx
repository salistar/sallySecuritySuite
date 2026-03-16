import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { RegulatoryAudit } from './pages/RegulatoryAudit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="audit" element={<RegulatoryAudit />} />
        <Route path="docs" element={<div className="text-slate-500 font-mono p-12 border border-white/5 bg-white/[0.02] rounded-2xl italic">Documentation_Storage_v1.0 (Access Denied: Pending DPO Approval)</div>} />
        <Route path="risk" element={<div className="text-slate-500 font-mono p-12 border border-white/5 bg-white/[0.02] rounded-2xl italic">Risk_Mapping_Engine (Initializing Node Matrix...)</div>} />
        <Route path="history" element={<div className="text-slate-500 font-mono p-12 border border-white/5 bg-white/[0.02] rounded-2xl italic">Audit_History_Ledger (Syncing Immutable Blockchain Trails...)</div>} />
      </Route>
    </Routes>
  );
}

export default App;
