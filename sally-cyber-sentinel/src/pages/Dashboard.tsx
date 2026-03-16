import * as Recharts from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const threatData = [
  { name: '08:00', blocked: 1200, hunting: 450 },
  { name: '10:00', blocked: 1800, hunting: 890 },
  { name: '12:00', blocked: 2500, hunting: 1200 },
  { name: '14:00', blocked: 2100, hunting: 1560 },
  { name: '16:00', blocked: 3400, hunting: 540 },
  { name: '18:00', blocked: 1500, hunting: 320 },
  { name: '20:00', blocked: 900, hunting: 210 },
];

const incidentSeverity = [
  { name: 'Critical', value: 3, color: '#f43f5e' },
  { name: 'High', value: 12, color: '#fb923c' },
  { name: 'Medium', value: 45, color: '#fbbf24' },
  { name: 'Low', value: 120, color: '#38bdf8' },
];

const liveEvents = [
  { id: 'E-4012', event: 'Massive Brute Force', target: 'Auth-Global-API', level: 'Critical', time: '12s ago' },
  { id: 'E-4009', event: 'SSH Tunneling Detected', target: 'Prod-DB-Mesh', level: 'High', time: '1m ago' },
  { id: 'E-4005', event: 'Credential Stuffing', target: 'User-Vault', level: 'Medium', time: '4m ago' },
  { id: 'E-4001', event: 'Unusual Geo-Login', target: 'Admin-Portal', level: 'Medium', time: '8m ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono leading-none tracking-tighter uppercase">Cyber Sentinel SOC Alpha</h1>
          <p className="text-slate-400 text-sm italic mt-2 border-l-2 border-rose-500/50 pl-4">Next-gen AI-augmented security operations center. Hunting threats in the noise.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
             <span className="text-[0.6rem] font-mono text-rose-400 font-bold uppercase tracking-widest leading-none">AI_Core_Augmented: 12.4x Speed</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         {[
           { label: 'Events Analyzed', value: '41.2M', change: '+1.2M/h', iconName: 'Activity' },
           { label: 'Active Incidents', value: '3', change: 'Critical', iconName: 'ShieldAlert' },
           { label: 'Mean Time to Detect', value: '1.2s', change: 'Record Low', iconName: 'Timer' },
           { label: 'Threat Intelligence', value: 'Live', change: 'Global Sync', iconName: 'Globe' },
         ].map((stat, i) => {
           const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
           return (
             <div key={i} className="glass-panel p-6 hover:border-rose-500/20 transition-all cursor-default relative group bg-gradient-to-br from-dark-900 to-dark-950">
                <div className="absolute top-4 right-4 text-rose-500/10 group-hover:text-rose-500/30 transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
               <p className="text-[0.65rem] font-bold text-slate-500 mb-1 uppercase tracking-widest">{stat.label}</p>
               <div className="flex items-end gap-3 font-mono mt-3">
                 <h3 className="text-3xl font-bold text-white tracking-tighter italic">{stat.value}</h3>
                 {stat.change && (
                   <span className="text-[0.6rem] font-bold mb-1.5 text-rose-400 uppercase tracking-tighter border-b border-rose-500/20">
                      {stat.change}
                   </span>
                 )}
               </div>
             </div>
           );
         })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 glass-panel p-6 min-h-[400px] border-rose-900/20">
            <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2 font-mono uppercase tracking-widest">
              <Lucide.Zap className="w-5 h-5 text-rose-500" /> Real-time Attack Surface Pressure
            </h3>
            <div className="h-[320px]">
               <Recharts.ResponsiveContainer width="100%" height="100%">
                 <Recharts.AreaChart data={threatData}>
                   <defs>
                     <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                       <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <Recharts.CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                   <Recharts.XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                   <Recharts.YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                   <Recharts.Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px' }} />
                   <Recharts.Area type="monotone" dataKey="blocked" stroke="#f43f5e" fill="url(#colorBlocked)" strokeWidth={3} />
                   <Recharts.Area type="monotone" dataKey="hunting" stroke="#fb923c" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                 </Recharts.AreaChart>
               </Recharts.ResponsiveContainer>
            </div>
         </div>

         <div className="glass-panel p-6 bg-gradient-to-b from-dark-900/40 to-rose-900/10">
            <h3 className="text-sm font-bold text-white mb-6 font-mono uppercase tracking-widest">Active Incident Distribution</h3>
            <div className="space-y-6 mt-4">
               {incidentSeverity.map((item, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[0.65rem] font-bold font-mono">
                       <span className="text-slate-400 uppercase tracking-widest">{item.name}</span>
                       <span className="text-white bg-white/5 px-2 py-0.5 rounded">{item.value}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full rounded-full" style={{ width: `${(item.value / 180) * 100}%`, backgroundColor: item.color }}></div>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-12 p-4 bg-rose-500/5 rounded-xl border border-rose-500/10 border-dashed">
               <h4 className="text-[0.6rem] font-bold text-rose-400 uppercase tracking-widest mb-2 font-mono flex items-center gap-2">
                  <Lucide.Crosshair className="w-3 h-3" /> Sentinel Insight
               </h4>
               <p className="text-[0.65rem] text-slate-400 leading-relaxed font-mono italic">
                 "Suspicious pattern match in Nginx logs. Correlated with known BlackHat 2026 exploit vector. Automated firewall rule drafted."
               </p>
            </div>
         </div>
      </div>

      <div className="glass-panel overflow-hidden border-rose-500/10">
         <div className="p-6 border-b border-white/5 flex justify-between items-center bg-rose-500/[0.02]">
            <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono">SOAR Automated Incident Stream</h3>
            <div className="flex items-center gap-4">
               <span className="text-[0.6rem] font-mono text-slate-600">Events/Sec: 1.4K</span>
               <div className="flex items-center gap-2 px-2 py-1 bg-rose-500/10 border border-rose-500/20 rounded-md">
                 <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                 <span className="text-[0.6rem] font-bold text-rose-400 uppercase tracking-tighter">SOC_SYNC: ALIVE</span>
               </div>
            </div>
         </div>
         <div className="overflow-x-auto font-mono">
           <table className="w-full text-left">
             <thead className="bg-white/5 text-slate-500 text-[0.6rem] font-bold uppercase tracking-widest">
               <tr>
                 <th className="px-6 py-4 border-r border-white/5">Event ID</th>
                 <th className="px-6 py-4 border-r border-white/5">Security Event</th>
                 <th className="px-6 py-4 border-r border-white/5">Target Asset</th>
                 <th className="px-6 py-4 border-r border-white/5">Level</th>
                 <th className="px-6 py-4 text-right">Time</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-white/5">
               {liveEvents.map((ev) => (
                 <tr key={ev.id} className="group hover:bg-rose-500/[0.03] transition-colors border-l-2 border-transparent hover:border-l-rose-500">
                   <td className="px-6 py-4 font-bold text-white text-xs">{ev.id}</td>
                   <td className="px-6 py-4 text-slate-400 text-xs">{ev.event}</td>
                   <td className="px-6 py-4 text-zinc-500 text-xs">{ev.target}</td>
                   <td className="px-6 py-4">
                     <span className={cn(
                       "px-2 py-1 rounded text-[0.55rem] font-bold uppercase border",
                       ev.level === 'Critical' ? "bg-rose-500/20 text-rose-500 border-rose-500/30 animate-pulse" : 
                       ev.level === 'High' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" : "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
                     )}>
                       {ev.level}
                     </span>
                   </td>
                   <td className="px-6 py-4 text-right text-slate-500 text-xs">{ev.time}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>
    </div>
  );
};
