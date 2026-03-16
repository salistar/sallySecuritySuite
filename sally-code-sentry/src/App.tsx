import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Scanner } from './pages/Scanner';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="scanner" element={<Scanner />} />
          <Route path="slop" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Module Slopsquatting Scanner Coming Soon</div>} />
          <Route path="license" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Module License Audit Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Module Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
