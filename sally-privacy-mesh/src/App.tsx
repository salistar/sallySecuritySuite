import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { NodeMap } from './pages/NodeMap';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="mesh" element={<NodeMap />} />
          <Route path="budget" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Privacy Budget Monitor Coming Soon</div>} />
          <Route path="audit" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Data Leak Audit Engine Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white font-mono uppercase text-xs tracking-widest opacity-50">Mesh Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
