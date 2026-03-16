import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Proxy } from './pages/Proxy';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="proxy" element={<Proxy />} />
          <Route path="policies" element={<div className="p-8 text-white">DLP Policies Coming Soon</div>} />
          <Route path="audit" element={<div className="p-8 text-white">Immutable Audit Trail Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white">Gateway Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
