import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: 'Shield', label: 'Safety Overview', path: '/' },
  { icon: 'MessageCircle', label: 'Safety Guard', path: '/guard' },
  { icon: 'UserCheck', label: 'Age Verification', path: '/age' },
  { icon: 'Bell', label: 'Grooming Alerts', path: '/alerts' },
  { icon: 'Settings', label: 'Parental Controls', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-white/5 bg-dark-950 flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-xl">
            <Lucide.Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tighter leading-none uppercase">ChildShield</h1>
            <span className="text-[0.6rem] font-mono font-bold text-rose-500 tracking-widest uppercase italic">Safe_IA_Interactions</span>
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
                    ? "bg-white/5 text-rose-400 border border-white/10" 
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
        <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
          <div className="flex items-center gap-2 mb-3">
             <Lucide.ShieldCheck className="w-3 h-3 text-rose-500" />
             <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest">Safety Engine Active</span>
          </div>
          <p className="text-[0.55rem] text-slate-500 font-mono italic">"Protecting 1.2M minor interactions..."</p>
        </div>
      </div>
    </aside>
  );
};
