import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const auditData = [
  { name: 'Jan', parity: 88, selection: 92 },
  { name: 'Feb', parity: 85, selection: 90 },
  { name: 'Mar', parity: 92, selection: 94 },
  { name: 'Apr', parity: 94, selection: 95 },
  { name: 'May', parity: 98, selection: 98 },
];

const demographicData = [
  { name: 'Group A', value: 98 },
  { name: 'Group B', value: 95 },
  { name: 'Group C', value: 97 },
  { name: 'Group D', value: 94 },
];

const recentAudits = [
  { id: 'AUD-01', model: 'Credit Scoring v4', score: '98%', status: 'Certified', time: '1h ago' },
  { id: 'AUD-02', model: 'HR Screening Bot', score: '82%', status: 'Flagged', time: '3h ago' },
  { id: 'AUD-03', model: 'Health Risk Engine', score: '95%', status: 'Certified', time: '8h ago' },
  { id: 'AUD-04', model: 'Facial Recog Beta', score: '64%', status: 'Failed', time: '1d ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono">Fairness Audit Central</h1>
          <p className="text-slate-400 text-sm">Algorithmic bias detection and equitable distribution certification for high-stakes AI.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 font-medium text-white text-[0.6rem] font-mono tracking-widest uppercase">Export Compliance PDF</button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2">
            <Lucide.FileBadge className="w-4 h-4" /> Start New Audit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Overall Parity', value: '96.4%', change: '+2.1%', iconName: 'Scale' },
          { label: 'Models Audited', value: '142', change: '+12', iconName: 'Shield' },
          { label: 'Bias Alerts', value: '3', change: '-5', iconName: 'AlertCircle' },
          { label: 'Audit Velocity', value: 'High', iconName: 'Activity' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
          return (
            <div key={i} className="glass-panel p-6 hover:border-indigo-500/20 transition-all cursor-default relative group">
               <div className="absolute top-4 right-4 text-indigo-500/10 group-hover:text-indigo-500/30 transition-colors">
                 <Icon className="w-8 h-8" />
               </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-end gap-3 font-mono">
                <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                {stat.change && (
                  <span className="text-xs font-bold mb-1.5 flex items-center text-indigo-400">
                     <Lucide.ArrowUpRight className="w-3 h-3 mr-0.5" /> {stat.change}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono uppercase tracking-widest text-sm">
             <Lucide.Activity className="w-5 h-5 text-indigo-500" /> Fairness Optimization Trend
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={auditData}>
                  <defs>
                    <linearGradient id="colorParity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="parity" stroke="#6366f1" fill="url(#colorParity)" strokeWidth={2} />
                  <Area type="monotone" dataKey="selection" stroke="#8b5cf6" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest text-wrap">Selection Rate Equality</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demographicData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={8} />
                  <YAxis stroke="#475569" fontSize={10} domain={[80, 100]} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-indigo-400 uppercase tracking-widest mb-1">Audit Insight</h4>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed italic border-l border-indigo-500/30 pl-3">
                "Demographic parity achieved for Group D after re-weighting protected attributes in training cluster Alpha."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-indigo-500/10 shadow-indigo-500/5">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-indigo-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm font-mono">Certification History</h3>
           <div className="flex gap-2">
             <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md font-bold text-indigo-400 uppercase tracking-widest text-[0.6rem]">COMPLIANCE: 94%</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Audit ID</th>
                <th className="px-6 py-4">Model Name</th>
                <th className="px-6 py-4">Fairness Score</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentAudits.map((audit) => (
                <tr key={audit.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-indigo-500">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{audit.id}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm whitespace-nowrap">{audit.model}</td>
                  <td className="px-6 py-4 font-bold text-slate-200">{audit.score}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[0.6rem] font-bold uppercase border",
                      audit.status === 'Certified' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      audit.status === 'Flagged' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    )}>
                      {audit.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{audit.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
