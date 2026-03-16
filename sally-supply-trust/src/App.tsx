import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { ProvenanceScan } from './pages/ProvenanceScan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="scan" element={<ProvenanceScan />} />
        <Route path="sbom" element={<div className="text-slate-500 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center uppercase tracking-widest">SBOM_Ledger: "Awaiting encrypted weight signatures."</div>} />
        <Route path="lineage" element={<div className="text-slate-500 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center uppercase tracking-widest">Lineage_Graph: "Initializing Supply Chain Node Matrix..."</div>} />
        <Route path="settings" element={<div className="text-slate-500 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center uppercase tracking-widest">Trust_Policy_Engine: "ROOT Access Required."</div>} />
      </Route>
    </Routes>
  );
}

export default App;
