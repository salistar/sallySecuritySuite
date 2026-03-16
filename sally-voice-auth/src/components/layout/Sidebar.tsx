import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { iconName: 'LayoutDashboard', label: 'Auth Dashboard', path: '/' },
  { iconName: 'Mic2', label: 'Liveness Check', path: '/liveness' },
  { iconName: 'ShieldCheck', label: 'Identity Vault', path: '/vault' },
  { iconName: 'History', label: 'Audit Logs', path: '/logs' },
  { iconName: 'Settings', label: 'Security Config', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-white/5 bg-dark-900/40 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-600/20 group-hover:scale-110 transition-transform duration-500">
            <Lucide.Mic2 className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-mono">Sally<span className="text-amber-500">Voice</span></span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = (Lucide as any)[item.iconName] || Lucide.Shield;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group",
                isActive 
                  ? "bg-amber-600/10 text-amber-400 border border-amber-500/20 shadow-inner shadow-amber-500/5" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-colors duration-300",
                "group-hover:text-amber-400"
              )} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 space-y-1.5 border-t border-white/5">
        <NavLink
            to="/help"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
        >
          <Lucide.HelpCircle className="w-5 h-5 group-hover:text-amber-400" />
          Help Center
        </NavLink>
      </div>
    </aside>
  );
};
