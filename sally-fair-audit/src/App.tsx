import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { BiasScanner } from './pages/BiasScanner';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="bias" element={<BiasScanner />} />
          <Route path="parity" element={<div className="p-8 text-white">Parity Analysis Module Coming Soon</div>} />
          <Route path="certs" element={<div className="p-8 text-white">Certification & Badging Hub Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white">Audit Global Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
