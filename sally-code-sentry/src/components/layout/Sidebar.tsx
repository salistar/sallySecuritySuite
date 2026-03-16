import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { iconName: 'LayoutDashboard', label: 'Security Overview', path: '/' },
  { iconName: 'Terminal', label: 'Code Scanner', path: '/scanner' },
  { iconName: 'PackageSearch', label: 'Slopsquatting Scan', path: '/slop' },
  { iconName: 'FileCode2', label: 'License Audit', path: '/license' },
  { iconName: 'Settings', label: 'Scanner Config', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-white/5 bg-dark-900/40 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform duration-500">
            <Lucide.Code2 className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-mono">Sally<span className="text-emerald-500">Code</span></span>
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
                  ? "bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 shadow-inner shadow-emerald-500/5" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-colors duration-300",
                "group-hover:text-emerald-400"
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
          <Lucide.HelpCircle className="w-5 h-5 group-hover:text-emerald-400" />
          Documentation
        </NavLink>
      </div>
    </aside>
  );
};
