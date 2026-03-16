import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { DecisionPaths } from './pages/DecisionPaths';
import { cn } from './lib/utils';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="paths" element={<DecisionPaths />} />
          <Route path="attribution" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Feature Attribution Map - CALCULATING</div>} />
          <Route path="fairness" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Bias & Fairness Metrics - ACTIVE</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase tracking-widest text-xs">Explicability Parameters - ENCRYPTED</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
