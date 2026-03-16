import { NavLink } from 'react-router-dom';
import { Shield, LayoutDashboard, Terminal, Activity, FileCheck, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Terminal, label: 'Prompt Sandbox', path: '/sandbox' },
  { icon: Activity, label: 'Monitoring', path: '/monitoring' },
  { icon: FileCheck, label: 'Audit Logs', path: '/audit' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-dark-800/80 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col h-full sticky top-0 left-0">
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="relative flex items-center justify-center bg-primary-500/10 p-2 rounded-xl border border-primary-500/20">
          <Shield className="w-6 h-6 text-primary-500" />
          <div className="absolute inset-0 bg-primary-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-white">PromptArmor</span>
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
                  ? "bg-primary-500/10 text-primary-400 border border-primary-500/20 shadow-[0_0_20px_rgba(245,158,11,0.05)]" 
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
        <div className="bg-gradient-to-br from-primary-900/10 to-dark-900/50 border border-primary-500/20 rounded-xl p-4 relative overflow-hidden group">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-ping"></div>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Firewall Active</span>
          </div>
          <p className="text-[0.7rem] text-slate-500 leading-tight">3-Layer Semantic Protection active across all LLM endpoints.</p>
        </div>
      </div>
    </aside>
  );
};
