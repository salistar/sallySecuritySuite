import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { iconName: 'LayoutDashboard', label: 'DLP Dashboard', path: '/' },
  { iconName: 'Search', label: 'Data Proxy', path: '/proxy' },
  { iconName: 'Database', label: 'Asset Scan', path: '/scan' },
  { iconName: 'EyeOff', label: 'Masking Vault', path: '/vault' },
  { iconName: 'ShieldAlert', label: 'Leak Logs', path: '/logs' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-white/5 bg-dark-900/40 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-500">
            <Lucide.Lock className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-mono">Sally<span className="text-indigo-400">Vault</span></span>
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
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-inner shadow-indigo-500/5" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-colors duration-300",
                "group-hover:text-indigo-400"
              )} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 space-y-1.5 border-t border-white/5">
        <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
        >
          <Lucide.Settings className="w-5 h-5 group-hover:text-indigo-400" />
          Settings
        </NavLink>
        <NavLink
            to="/help"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
        >
          <Lucide.HelpCircle className="w-5 h-5 group-hover:text-indigo-400" />
          Help Center
        </NavLink>
      </div>
    </aside>
  );
};
