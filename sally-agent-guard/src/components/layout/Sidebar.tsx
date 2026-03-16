import { NavLink } from 'react-router-dom';
import { Shield, LayoutDashboard, Zap, Lock, Activity, Settings, Power } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Control Center', path: '/' },
  { icon: Zap, label: 'Kill Switch', path: '/killswitch' },
  { icon: Lock, label: 'IAM Protocols', path: '/iam' },
  { icon: Activity, label: 'Sandbox Monitor', path: '/sandbox' },
  { icon: Settings, label: 'Guard Config', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-dark-800/80 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col h-full sticky top-0 left-0">
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="relative flex items-center justify-center bg-red-500/10 p-2 rounded-xl border border-red-500/20">
          <Shield className="w-6 h-6 text-red-500" />
          <div className="absolute inset-0 bg-red-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
        </div>
        <span className="font-bold text-lg tracking-tight text-white font-mono">AgentGuard</span>
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
                  ? "bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.05)]" 
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
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 relative overflow-hidden group hover:bg-red-950/30 transition-all border-dashed">
          <div className="flex items-center gap-2 mb-2">
             <Power className="w-3 h-3 text-red-500 animate-pulse" />
            <span className="text-[0.6rem] font-bold text-red-400 uppercase tracking-widest">Global Protocol</span>
          </div>
          <p className="text-[0.65rem] text-slate-500 leading-tight italic">Kill-switch sequence primed. 14 agents in quarantine.</p>
        </div>
      </div>
    </aside>
  );
};
