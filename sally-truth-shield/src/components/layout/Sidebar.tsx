import { NavLink } from 'react-router-dom';
import { Shield, LayoutDashboard, Search, Fingerprint, Activity, Settings, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Truth Center', path: '/' },
  { icon: Search, label: 'Deepfake Scanner', path: '/scan' },
  { icon: Fingerprint, label: 'Source Verification', path: '/verification' },
  { icon: Activity, label: 'Manipulation Audit', path: '/audit' },
  { icon: Settings, label: 'Shield Config', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-dark-800/80 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col h-full sticky top-0 left-0">
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="relative flex items-center justify-center bg-blue-500/10 p-2 rounded-xl border border-blue-500/20">
          <Shield className="w-6 h-6 text-blue-500" />
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-white font-mono">TruthShield</span>
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
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)]" 
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
        <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-4 relative overflow-hidden group hover:bg-blue-950/30 transition-all border-dashed">
          <div className="flex items-center gap-2 mb-2">
             <Globe className="w-3 h-3 text-blue-500" />
            <span className="text-[0.6rem] font-bold text-blue-400 uppercase tracking-widest">Global Watch</span>
          </div>
          <p className="text-[0.65rem] text-slate-500 leading-tight italic">Monitoring 45M media nodes for generative artifacts.</p>
        </div>
      </div>
    </aside>
  );
};
