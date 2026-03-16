import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { VerifyPage } from './pages/Verify';

// Set global dark mode class
document.documentElement.classList.add('dark');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="verify" element={<VerifyPage />} />
          <Route path="kb" element={<div className="p-8 text-white">Knowledge Base Connectors Coming Soon</div>} />
          <Route path="reports" element={<div className="p-8 text-white">Audit Reports & Export Coming Soon</div>} />
          <Route path="settings" element={<div className="p-8 text-white">Fact Checking Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
