import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { DeepfakeScanner } from './pages/DeepfakeScanner';
import { cn } from './lib/utils';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="scan" element={<DeepfakeScanner />} />
          <Route path="verification" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Automated Source Verification - ONLINE</div>} />
          <Route path="audit" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Propaganda & Manipulation Audit - ACTIVE</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Shield Parameters - ENCRYPTED</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
