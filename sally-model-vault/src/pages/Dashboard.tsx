import * as Recharts from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const statsData = [
  { name: 'Mon', attempts: 45, blocked: 42 },
  { name: 'Tue', attempts: 52, blocked: 51 },
  { name: 'Wed', attempts: 48, blocked: 48 },
  { name: 'Thu', attempts: 70, blocked: 68 },
  { name: 'Fri', attempts: 61, blocked: 60 },
  { name: 'Sat', attempts: 38, blocked: 38 },
  { name: 'Sun', attempts: 42, blocked: 41 },
];

const modelHealth = [
  { name: 'Watermark Integrity', value: 98, color: '#06b6d4' },
  { name: 'Fingerprint Stability', value: 94, color: '#14b8a6' },
  { name: 'Extraction Resistance', value: 89, color: '#3b82f6' },
];

const recentThreats = [
  { id: 'T-8821', source: 'IP_NODE_HK_04', technique: 'API Model Mirroring', status: 'Blocked', risk: 'High' },
  { id: 'T-8819', source: 'VPN_GATE_US_12', technique: 'Brute-force Extraction', status: 'Intercepted', risk: 'Critical' },
  { id: 'T-8815', source: 'TOR_EXIT_772', technique: 'Dataset Poisoning', status: 'Deflected', risk: 'Medium' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tighter text-gradient leading-none">Model IP Overview</h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">Monitoring intellectual property protection for 42 foundational models.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3">
              <span className="text-[0.65rem] font-bold text-cyan-400 uppercase tracking-widest">Active_Scan: ON</span>
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Models Protected', value: '42', change: '+2 this week', icon: 'Database' },
          { label: 'Theft Attempts', value: '1,422', change: 'All Intercepted', icon: 'ShieldAlert' },
          { label: 'Watermark Verification', value: '99.9%', change: 'Real-time', icon: 'Fingerprint' },
          { label: 'IP_Loss_Prevention', value: '100%', change: 'Zero Leakage', icon: 'Lock' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.icon];
          return (
            <div key={i} className="glass-panel p-6 hover:border-cyan-500/30 transition-all cursor-default group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
                <p className="text-[0.65rem] font-bold text-teal-400/80 uppercase tracking-tight">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 border-cyan-500/10">
          <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-mono flex items-center gap-2">
            <Lucide.BarChart3 className="w-4 h-4 text-cyan-500" /> Extraction Attempt Monitoring
          </h3>
          <div className="h-[300px]">
            <Recharts.ResponsiveContainer width="100%" height="100%">
              <Recharts.AreaChart data={statsData}>
                <defs>
                  <linearGradient id="colorAttempts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Recharts.CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <Recharts.XAxis dataKey="name" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                <Recharts.YAxis stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                <Recharts.Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', fontSize: '12px' }}
                  itemStyle={{ color: '#06b6d4' }}
                />
                <Recharts.Area type="monotone" dataKey="attempts" stroke="#06b6d4" fillOpacity={1} fill="url(#colorAttempts)" strokeWidth={3} />
                <Recharts.Area type="monotone" dataKey="blocked" stroke="#14b8a6" fill="none" strokeWidth={2} strokeDasharray="5 5" />
              </Recharts.AreaChart>
            </Recharts.ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-b from-dark-900/40 to-cyan-900/10">
          <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-mono">Vault Integrity Health</h3>
          <div className="space-y-6">
            {modelHealth.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-[0.65rem] font-bold">
                  <span className="text-slate-400 uppercase tracking-widest">{item.name}</span>
                  <span className="text-white">{item.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10 border-dashed">
            <h4 className="text-[0.65rem] font-bold text-cyan-400 mb-2 uppercase flex items-center gap-2">
              <Lucide.Info className="w-3 h-3" /> Security Advisory
            </h4>
            <p className="text-[0.6rem] text-slate-400 leading-relaxed italic">
              "Detected 14% spike in API polling from HK region. Behavioral patterns suggest model mirroring attempt. Rate limiting applied."
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-teal-500/10">
        <div className="p-6 border-b border-white/5 bg-white/[0.02]">
           <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono">Recent Extraction Intercepts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Threat ID</th>
                <th className="px-6 py-4">Source Vector</th>
                <th className="px-6 py-4">Attack Technique</th>
                <th className="px-6 py-4">Risk Level</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              {recentThreats.map((threat) => (
                <tr key={threat.id} className="group hover:bg-cyan-500/[0.03] transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-white">{threat.id}</td>
                  <td className="px-6 py-4 text-xs text-slate-400">{threat.source}</td>
                  <td className="px-6 py-4 text-xs text-zinc-500">{threat.technique}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[0.5rem] font-bold uppercase",
                      threat.risk === 'Critical' ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                      threat.risk === 'High' ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" :
                      "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    )}>
                      {threat.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 text-xs text-teal-400 font-bold">
                       <Lucide.CheckCircle2 className="w-3 h-3" /> {threat.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
