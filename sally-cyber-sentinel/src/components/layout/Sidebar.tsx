import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { iconName: 'LayoutDashboard', label: 'SOC Command', path: '/' },
  { iconName: 'Crosshair', label: 'Threat Hunter', path: '/hunter' },
  { iconName: 'Activity', label: 'Incident Feed', path: '/incidents' },
  { iconName: 'Database', label: 'Intelligence Vault', path: '/intel' },
  { iconName: 'Settings', label: 'SOC Settings', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-white/5 bg-dark-900/40 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-600/20 group-hover:scale-110 transition-transform duration-500">
            <Lucide.Eye className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-mono uppercase">Sally<span className="text-rose-500">Sentinel</span></span>
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
                  ? "bg-rose-600/10 text-rose-400 border border-rose-500/20 shadow-inner shadow-rose-500/5" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-colors duration-300",
                "group-hover:text-rose-400"
              )} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 bg-rose-500/5 border-t border-white/5">
         <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
            <span className="text-[0.6rem] font-bold text-rose-400 uppercase tracking-[0.2em] font-mono">SOC_LEVEL: ALPHA</span>
         </div>
         <p className="text-[0.55rem] text-slate-500 font-mono leading-tight">Augmentation active. Processing 1.2M events/sec.</p>
      </div>
    </aside>
  );
};
