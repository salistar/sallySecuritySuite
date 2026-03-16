import { NavLink } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: 'Shield', label: 'Compliance Overview', path: '/' },
  { icon: 'Stethoscope', label: 'Regulatory Audit', path: '/audit' },
  { icon: 'FileText', label: 'Documentation Hub', path: '/docs' },
  { icon: 'GanttChart', label: 'Risk Mapping', path: '/risk' },
  { icon: 'History', label: 'Audit Trail', path: '/history' },
];

export const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-white/5 bg-dark-950 flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10 group cursor-default">
          <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10 shadow-xl">
            <Lucide.Gavel className="w-6 h-6 text-slate-300" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tighter leading-none uppercase">ComplianceHub</h1>
            <span className="text-[0.6rem] font-mono font-bold text-slate-500 tracking-widest uppercase italic">RegTech_Intelligence</span>
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
                    ? "bg-white/5 text-white border border-white/10" 
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
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
             <Lucide.AlertCircle className="w-3 h-3 text-orange-400" />
             <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest">EU AI Act Deadline</span>
          </div>
          <p className="text-[0.55rem] text-slate-500 font-mono">DAYS_REMAINING: 114</p>
        </div>
      </div>
    </aside>
  );
};
