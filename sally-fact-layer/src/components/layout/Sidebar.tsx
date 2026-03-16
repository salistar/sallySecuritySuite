import { NavLink } from 'react-router-dom';
import { CheckCircle2, LayoutDashboard, Search, FileText, Database, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Search, label: 'Fact Verification', path: '/verify' },
  { icon: Database, label: 'Knowledge Base', path: '/kb' },
  { icon: FileText, label: 'Audit Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-dark-800/80 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col h-full sticky top-0 left-0">
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="relative flex items-center justify-center bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-white">FactLayer</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium",
                isActive 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 mt-auto">
        <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2 text-emerald-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-widest">Active Verification</span>
          </div>
          <p className="text-[0.7rem] text-slate-400 leading-tight">Cross-referencing across 450M+ Verified sources in real-time.</p>
        </div>
      </div>
    </aside>
  );
};
