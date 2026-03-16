import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Sandbox } from './pages/Sandbox';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="sandbox" element={<Sandbox />} />
          <Route path="monitoring" element={<div className="p-8 text-white">Monitoring Dashboard Coming Soon</div>} />
          <Route path="audit" element={<div className="p-8 text-white">Compliance Audit Logs Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white">Firewall Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
