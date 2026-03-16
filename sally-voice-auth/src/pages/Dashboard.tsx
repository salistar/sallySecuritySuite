import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const voiceData = [
  { name: '08:00', real: 850, clones: 12 },
  { name: '10:00', real: 1200, clones: 45 },
  { name: '12:00', real: 2100, clones: 89 },
  { name: '14:00', real: 1800, clones: 34 },
  { name: '16:00', real: 2400, clones: 67 },
  { name: '18:00', real: 1500, clones: 23 },
  { name: '20:00', real: 900, clones: 98 },
];

const dialectData = [
  { name: 'Standard EN', value: 98.5 },
  { name: 'Maghreb FR', value: 96.2 },
  { name: 'Gulf Arabic', value: 94.8 },
  { name: 'Levant Arabic', value: 95.1 },
];

const recentIncidents = [
  { id: 'V-2004', user: 'j.doe@bank.com', score: 92, status: 'Blocked', time: '12s ago' },
  { id: 'V-2003', user: 'customer_821', score: 98, status: 'Verified', time: '45s ago' },
  { id: 'V-2001', user: 'vip_client_09', score: 88, status: 'Blocked', time: '3m ago' },
  { id: 'V-1998', user: 'unknown_caller', score: 95, status: 'Blocked', time: '8m ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono leading-none">Voice Auth Intelligence</h1>
          <p className="text-slate-400 text-sm italic border-l-2 border-amber-500/50 pl-4 mt-2">Biometric liveness detection and spectral clone analysis for global call centers.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 rounded-xl bg-dark-900 border border-white/5 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
             <span className="text-[0.6rem] font-mono text-slate-400 uppercase tracking-widest">Spectral_Nodes_Sync: 100%</span>
          </div>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-amber-600/20 flex items-center gap-2 border border-amber-400/20">
            <Lucide.Target className="w-4 h-4" /> Calibrate Model
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Voice Verifications', value: '142,801', change: '+12.4%', iconName: 'Activity' },
          { label: 'Clones Detected', value: '3,412', change: '+8.1%', iconName: 'ShieldAlert' },
          { label: 'Avg Latency', value: '42ms', change: '-2ms', iconName: 'Timer' },
          { label: 'Accuracy Score', value: '99.98%', change: 'Stable', iconName: 'Zap' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
          return (
            <div key={i} className="glass-panel p-6 hover:border-amber-500/20 transition-all cursor-default relative group">
               <div className="absolute top-4 right-4 text-amber-500/10 group-hover:text-amber-500/30 transition-colors">
                 <Icon className="w-8 h-8" />
               </div>
              <p className="text-[0.65rem] font-bold text-slate-500 mb-1 uppercase tracking-widest leading-none">{stat.label}</p>
              <div className="flex items-end gap-3 font-mono mt-3">
                <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                {stat.change && (
                  <span className={cn(
                    "text-[0.65rem] font-bold mb-1.5 flex items-center",
                    stat.change.startsWith('+') ? "text-emerald-400" : "text-amber-400"
                  )}>
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
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono uppercase tracking-widest text-sm">
             <Lucide.Mic2 className="w-5 h-5 text-amber-500" /> Real-time Authentication Stream
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={voiceData}>
                  <defs>
                    <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="real" stroke="#f59e0b" fill="url(#colorReal)" strokeWidth={3} />
                  <Area type="monotone" dataKey="clones" stroke="#ef4444" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-b from-dark-900/40 to-amber-900/10">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest">Dialect Confidence Profile</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dialectData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#cbd5e1" width={100} fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-amber-400 uppercase tracking-widest mb-2 font-mono">Neural Insights</h4>
              <p className="text-[0.65rem] text-slate-400 leading-relaxed italic">
                "Spectral anomalies detected in MENA region proxies. High correlation with ElevenLabs v2 'Deep-Voice' synthesis model."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-orange-500/10 shadow-orange-500/5">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-amber-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-xs font-mono">Recent Cloning Attempts</h3>
           <div className="flex gap-2">
             <span className="px-2 py-1 bg-rose-500/10 border border-rose-500/20 rounded-md font-bold text-rose-500 uppercase tracking-widest text-[0.6rem]">Threat_Level: Elevated</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Verification ID</th>
                <th className="px-6 py-4">User Identity</th>
                <th className="px-6 py-4">Confidence Score</th>
                <th className="px-6 py-4">Result</th>
                <th className="px-6 py-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentIncidents.map((incident) => (
                <tr key={incident.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-amber-500 pl-4">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{incident.id}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm whitespace-nowrap">{incident.user}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: `${incident.score}%` }} />
                       </div>
                       <span className="text-xs font-bold font-mono">{incident.score}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[0.6rem] font-bold uppercase border",
                      incident.status === 'Verified' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    )}>
                      {incident.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{incident.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
