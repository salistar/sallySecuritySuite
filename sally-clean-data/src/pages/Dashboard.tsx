import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ShieldCheck, Database, Activity, RefreshCw, Filter, ArrowUpRight, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

const poisoningData = [
  { name: 'Dataset1', clean: 95, anomalies: 5 },
  { name: 'Dataset2', clean: 88, anomalies: 12 },
  { name: 'Dataset3', clean: 99, anomalies: 1 },
  { name: 'Dataset4', clean: 92, anomalies: 8 },
];

const integrityHistory = [
  { time: '08:00', integrity: 99.2 },
  { time: '10:00', integrity: 98.5 },
  { time: '12:00', integrity: 94.1 },
  { time: '14:00', integrity: 97.8 },
  { time: '16:00', integrity: 99.5 },
];

const recentIngests = [
  { id: 1, source: 'Crawler_Main', size: '1.2TB', status: 'Protected', risk: 'Low', time: '12m ago' },
  { id: 2, source: 'User_Uploads', size: '45GB', status: 'Quarantined', risk: 'High', time: '45m ago' },
  { id: 3, source: 'API_Fusion', size: '890GB', status: 'Protected', risk: 'Low', time: '3h ago' },
  { id: 4, source: 'S3_Legacy', size: '2.4TB', status: 'Scanning', risk: 'Med', time: '8h ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono">Data Integrity & Fusion Center</h1>
          <p className="text-slate-400 text-sm">Protecting the AI supply chain by detecting poisoning, label-flipping, and training-time backdoors.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 font-medium text-white text-xs font-mono uppercase tracking-widest">Audit Supply Chain</button>
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Trigger Global Scan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Ingest Integrity', value: '98.8%', change: '+0.2%', icon: ShieldCheck },
          { label: 'Anomalies Isolated', value: '1,245', change: '+124', icon: Filter },
          { label: 'Storage Scrubbed', value: '45.2TB', change: '+4.1TB', icon: Database },
          { label: 'Fusion Status', value: 'Stable', icon: Activity },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 hover:border-purple-500/20 transition-all cursor-default relative group">
             <div className="absolute top-4 right-4 text-purple-500/10 group-hover:text-purple-500/30 transition-colors">
               <stat.icon className="w-8 h-8" />
             </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3 font-mono">
              <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
              {stat.change && (
                <span className="text-xs font-bold mb-1.5 flex items-center text-purple-400">
                   <ArrowUpRight className="w-3 h-3 mr-0.5" /> {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
             <Activity className="w-5 h-5 text-purple-500" /> Real-time Data Ingest Integrity
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={integrityHistory}>
                  <defs>
                    <linearGradient id="colorIntegrity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="time" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} domain={[90, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="integrity" stroke="#a855f7" fill="url(#colorIntegrity)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest">Dataset Poisoning Ratio</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={poisoningData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="clean" stackId="a" fill="#a855f7" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="anomalies" stackId="a" fill="#312e81" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-purple-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                 <AlertTriangle className="w-3 h-3" /> Integrity Insight
              </h4>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed italic">
                "Anomalous clusters detected in Dataset2. Semantic drift patterns suggest a coordinated label-flipping attempt on sentiment nodes."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-purple-500/10">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-purple-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm font-mono">Data Ingest Audit Log</h3>
           <div className="flex gap-2">
             <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-md font-bold text-purple-400 uppercase tracking-widest text-[0.6rem]">SCANNED: 100%</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Ingest Source</th>
                <th className="px-6 py-4">Volume</th>
                <th className="px-6 py-4">Risk Level</th>
                <th className="px-4 py-4">Scrub Status</th>
                <th className="px-6 py-4 text-right">Last Sync</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentIngests.map((ingest) => (
                <tr key={ingest.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-purple-500">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{ingest.source}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm tracking-tighter">{ingest.size}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[0.6rem] font-bold uppercase border",
                      ingest.risk === 'High' ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : 
                      ingest.risk === 'Med' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                    )}>
                      {ingest.risk}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                     <span className={cn(
                       "text-[0.6rem] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter",
                       ingest.status === 'Protected' ? "text-emerald-500 bg-emerald-500/10" : "text-amber-500 bg-amber-500/10"
                     )}>
                       {ingest.status}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{ingest.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
