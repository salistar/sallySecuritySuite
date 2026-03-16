import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: 'Box', label: 'Supply Overview', path: '/' },
  { icon: 'SearchCode', label: 'Provenance Scan', path: '/scan' },
  { icon: 'ShieldCheck', label: 'SBOM Registry', path: '/sbom' },
  { icon: 'Link', label: 'Model Lineage', path: '/lineage' },
  { icon: 'Settings', label: 'Trust Policies', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-white/5 bg-dark-950 flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl">
            <Lucide.Container className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tighter leading-none uppercase">SupplyTrust</h1>
            <span className="text-[0.6rem] font-mono font-bold text-amber-500 tracking-widest uppercase italic">AI_Supply_Security</span>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = (Lucide as any)[item.icon] || Lucide.Circle;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group",
                  isActive 
                    ? "bg-white/5 text-amber-400 border border-white/10" 
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium tracking-tight font-sans">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-8">
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
          <div className="flex items-center gap-2 mb-3">
             <Lucide.PackageCheck className="w-3 h-3 text-amber-500" />
             <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest">SBOM Engine Verified</span>
          </div>
          <p className="text-[0.55rem] text-slate-500 font-mono italic">"Securing 4,281 model dependencies."</p>
        </div>
      </div>
    </aside>
  );
};
