import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: 'LayoutDashboard', label: 'Vault Overview', path: '/' },
  { icon: 'ShieldCheck', label: 'IP Scanner', path: '/scanner' },
  { icon: 'Fingerprint', label: 'Watermarking', path: '/watermark' },
  { icon: 'Activity', label: 'Theft Detection', path: '/threats' },
  { icon: 'Settings', label: 'Security Policy', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-white/5 bg-dark-950/50 flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Lucide.ShieldEllipsis className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tighter leading-none uppercase">ModelVault</h1>
            <span className="text-[0.6rem] font-mono font-bold text-cyan-500/80 tracking-widest uppercase">IP_Protection_Layer</span>
          </div>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = (Lucide as any)[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group relative overflow-hidden",
                  isActive 
                    ? "bg-white/5 text-cyan-400 border border-white/5" 
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium tracking-tight font-sans">{item.label}</span>
                {item.label === 'Theft Detection' && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-white/5">
        <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 mb-4">
          <div className="flex items-center gap-2 mb-2">
             <Lucide.Cpu className="w-3 h-3 text-cyan-400" />
             <span className="text-[0.6rem] font-bold text-cyan-400 uppercase tracking-widest">Model_Sentinel_v3</span>
          </div>
          <div className="h-1 w-full bg-dark-800 rounded-full overflow-hidden">
             <div className="h-full w-[84%] bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full" />
          </div>
          <p className="text-[0.55rem] text-slate-500 mt-2 font-mono">INTEGRITY_INDEX: 98.2%</p>
        </div>
      </div>
    </aside>
  );
};
