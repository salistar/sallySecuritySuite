import * as Recharts from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const epsilonData = [
  { name: '00:00', epsilon: 0.12 },
  { name: '04:00', epsilon: 0.15 },
  { name: '08:00', epsilon: 0.35 },
  { name: '12:00', epsilon: 0.42 },
  { name: '16:00', epsilon: 0.38 },
  { name: '20:00', epsilon: 0.22 },
  { name: '23:59', epsilon: 0.18 },
];

const budgetData = [
  { name: 'Marketing', value: 45, color: '#6366f1' },
  { name: 'Research', value: 30, color: '#8b5cf6' },
  { name: 'External', value: 15, color: '#a855f7' },
  { name: 'Dev', value: 10, color: '#d946ef' },
];

const privacyLogs = [
  { id: 'P-902', action: 'Noise Injection', status: 'Success', epsilon: '+0.002', time: '2m ago' },
  { id: 'P-901', action: 'Query Audit', status: 'Blocked', epsilon: 'N/A', time: '5m ago' },
  { id: 'P-899', action: 'Synthetic Export', status: 'Success', epsilon: '+0.015', time: '12m ago' },
  { id: 'P-895', action: 'Model Scrubbing', status: 'Active', epsilon: '0.000', time: '1h ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono leading-none tracking-tight">Privacy Mesh Intelligence</h1>
          <p className="text-slate-400 text-sm italic mt-2 border-l-2 border-indigo-500/50 pl-4">Distributed Differential Privacy (DP) monitoring and encrypted inference orchestration.</p>
        </div>
        <div className="flex gap-3 text-[0.6rem] font-mono">
          <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
             Mesh_Sync: 100%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Privacy Budget (ε)', value: '1.42 / 8.0', change: 'Epsilon usage', iconName: 'ShieldPlus' },
          { label: 'Protected Queries', value: '1.8M', change: '+240K today', iconName: 'MessageSquareLock' },
          { label: 'Synthetic Rows', value: '45.2M', change: '+1.2M rows', iconName: 'Copy' },
          { label: 'Leak Prevention', value: '100%', iconName: 'Zap' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
          return (
            <div key={i} className="glass-panel p-6 hover:border-indigo-500/20 transition-all cursor-default relative group">
               <div className="absolute top-4 right-4 text-indigo-500/10 group-hover:text-indigo-500/30 transition-colors">
                 <Icon className="w-8 h-8" />
               </div>
              <p className="text-[0.65rem] font-bold text-slate-500 mb-1 uppercase tracking-widest">{stat.label}</p>
              <div className="flex items-end gap-3 font-mono mt-3">
                <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                {stat.change && (
                  <span className="text-[0.6rem] font-medium mb-1.5 text-slate-500 uppercase tracking-tighter italic">
                     {stat.change}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
           <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2 font-mono uppercase tracking-widest">
             <Lucide.Activity className="w-5 h-5 text-indigo-500" /> Differential Privacy Epsilon Consumption
           </h3>
           <div className="h-[320px]">
              <Recharts.ResponsiveContainer width="100%" height="100%">
                <Recharts.AreaChart data={epsilonData}>
                  <defs>
                    <linearGradient id="colorEpsilon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Recharts.CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <Recharts.XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <Recharts.YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <Recharts.Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px' }} />
                  <Recharts.Area type="monotone" dataKey="epsilon" stroke="#6366f1" fill="url(#colorEpsilon)" strokeWidth={3} />
                </Recharts.AreaChart>
              </Recharts.ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-b from-dark-900/40 to-indigo-900/10 flex flex-col">
           <h3 className="text-sm font-bold text-white mb-6 font-mono uppercase tracking-widest">Budget Allocation</h3>
           <div className="flex-1 min-h-[240px]">
              <Recharts.ResponsiveContainer width="100%" height="100%">
                <Recharts.PieChart>
                  <Recharts.Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {budgetData.map((entry, index) => (
                      <Recharts.Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Recharts.Pie>
                  <Recharts.Tooltip contentStyle={{ backgroundColor: '#020617', border: 'none' }} />
                </Recharts.PieChart>
              </Recharts.ResponsiveContainer>
           </div>
           
           <div className="mt-4 space-y-2">
              {budgetData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-[0.65rem] font-mono">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-400">{item.name}</span>
                   </div>
                   <span className="text-white font-bold">{item.value}%</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-indigo-500/[0.02]">
           <h3 className="text-[0.65rem] font-bold text-white uppercase tracking-[0.2em] font-mono">Privacy Node Audit stream</h3>
           <div className="flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[0.6rem] font-bold text-emerald-400 uppercase tracking-tighter">Compliance: Verified</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.6rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Event ID</th>
                <th className="px-6 py-4">Privacy Action</th>
                <th className="px-6 py-4">Epsilon Delta</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {privacyLogs.map((log) => (
                <tr key={log.id} className="group hover:bg-white/[0.02] transition-colors font-mono">
                  <td className="px-6 py-4 font-bold text-white text-xs">{log.id}</td>
                  <td className="px-6 py-4 text-slate-400 text-xs">{log.action}</td>
                  <td className="px-6 py-4 text-xs font-bold text-indigo-400">{log.epsilon}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[0.55rem] font-bold uppercase border",
                      log.status === 'Success' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      log.status === 'Active' ? "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    )}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-[0.65rem]">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
