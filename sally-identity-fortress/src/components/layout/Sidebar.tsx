import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { iconName: 'LayoutDashboard', label: 'Identity Overview', path: '/' },
  { iconName: 'UserCheck', label: 'Verification Engine', path: '/verify' },
  { iconName: 'Fingerprint', label: 'Biometric Audit', path: '/biometric' },
  { iconName: 'ShieldAlert', label: 'Fraud Detection', path: '/fraud' },
  { iconName: 'Settings', label: 'Security Policy', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-white/5 bg-dark-900/40 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
            <Lucide.ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-mono">Sally<span className="text-blue-500">Fortress</span></span>
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
                  ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-inner shadow-blue-500/5" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-colors duration-300",
                "group-hover:text-blue-400"
              )} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 flex items-center gap-4">
         <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
            <Lucide.Lock className="w-4 h-4 text-emerald-500" />
         </div>
         <span className="text-[0.6rem] font-mono text-slate-500 uppercase tracking-widest">Fortress_V2_Secure</span>
      </div>
    </aside>
  );
};
