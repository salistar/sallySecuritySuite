import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { SafetyGuard } from './pages/SafetyGuard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="guard" element={<SafetyGuard />} />
        <Route path="age" element={<div className="text-slate-500 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center">Age_Verification_Module: "Awaiting behavioral biometric sync..."</div>} />
        <Route path="alerts" element={<div className="text-slate-500 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center">Grooming_Detection_Stream: "Zero threats detected in active nodes."</div>} />
        <Route path="settings" element={<div className="text-slate-500 font-mono p-16 border-2 border-dashed border-white/5 bg-white/[0.01] rounded-3xl italic text-center">Parental_Control_Vault: "Access encrypted."</div>} />
      </Route>
    </Routes>
  );
}

export default App;
