import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Target, ShieldAlert, Zap, Users, ArrowUpRight, ArrowDownRight, Globe, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const attackTrendData = [
  { name: '00:00', attacks: 450, blocked: 448 },
  { name: '04:00', attacks: 320, blocked: 320 },
  { name: '08:00', attacks: 890, blocked: 885 },
  { name: '12:00', attacks: 1200, blocked: 1198 },
  { name: '16:00', attacks: 980, blocked: 979 },
  { name: '20:00', attacks: 1500, blocked: 1495 },
  { name: '23:59', attacks: 1100, blocked: 1099 },
];

const severityData = [
  { name: 'Jailbreak', value: 45 },
  { name: 'Token Smuggling', value: 25 },
  { name: 'Indirect Injection', value: 15 },
  { name: 'Social Eng', value: 10 },
  { name: 'PII Leak', value: 5 },
];

const recentThreats = [
  { id: 1, type: 'DAN Jailbreak', target: 'Azure OpenAI (Prod)', status: 'Blocked', score: 99.8, time: '30s ago' },
  { id: 2, type: 'System Leak', target: 'Anthropic Claude (Dev)', status: 'Blocked', score: 92.4, time: '2m ago' },
  { id: 3, type: 'Sql Injection in Prompt', target: 'GPT-4 Global', status: 'Blocked', score: 87.1, time: '5m ago' },
  { id: 4, type: 'Indirect (Web link)', target: 'Llama 3 Internal', status: 'Flagged', score: 64.5, time: '12m ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">SOC-Grade Monitoring</h1>
          <p className="text-slate-400">Real-time prompt injection firewall metrics and threat intelligence.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="glass-button text-xs font-bold uppercase tracking-widest text-primary-500 border-primary-500/20">Export STIX/TAXII</button>
          <button className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-primary-600/20 flex items-center gap-2">
            <Target className="w-4 h-4" /> Global Red Team Sync
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Total Requests (24h)', value: '2.4M', change: '+12.5%', icon: Zap, trend: 'up' },
          { label: 'Attacks Blocked', value: '18,492', change: '+32.1%', icon: ShieldAlert, trend: 'up' },
          { label: 'Unique Threat Actors', value: '1,204', change: '-4.2%', icon: Users, trend: 'down' },
          { label: 'Avg Latency Overhead', value: '42ms', change: 'Optimal', icon: Globe, trend: 'neutral' },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 group hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon className="w-12 h-12 text-primary-500" />
            </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3 font-mono">
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              {stat.trend !== 'neutral' && (
                <span className={cn(
                  "text-xs font-bold mb-1.5 flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-white/5",
                  stat.trend === 'up' ? "text-rose-500" : "text-emerald-500"
                )}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3"/> : <ArrowDownRight className="w-3 h-3"/>}
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
             <Activity className="w-5 h-5 text-primary-500" /> Attacks vs. Blocks (Real-time)
           </h3>
           <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={attackTrendData}>
                  <defs>
                    <linearGradient id="colorAttacks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="attacks" stroke="#f59e0b" fill="url(#colorAttacks)" strokeWidth={2} />
                  <Area type="monotone" dataKey="blocked" stroke="#10b981" fill="none" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6">Attack Vectors (%)</h3>
           <div className="space-y-6">
             {severityData.map((item) => (
               <div key={item.name} className="space-y-2">
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-200 font-medium">{item.name}</span>
                   <span className="text-primary-500 font-bold">{item.value}%</span>
                 </div>
                 <div className="h-2 bg-dark-900 rounded-full overflow-hidden border border-white/5">
                   <div 
                     className="h-full bg-gradient-to-r from-primary-600 to-amber-400 rounded-full transition-all duration-1000" 
                     style={{ width: `${item.value}%` }}
                   ></div>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-8 p-4 bg-primary-500/5 rounded-xl border border-primary-500/10">
              <p className="text-xs text-slate-400 leading-relaxed italic">
                *BERT fine-tuned model (Couche 2) detected over 12K variants of 'DAN' jailbreaks in the last 6 hours alone.
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
           <h3 className="text-lg font-bold text-white">Live Threat Stream</h3>
           <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             FILTER: CRITICAL ONLY
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-xs uppercase tracking-widest font-bold">
              <tr>
                <th className="px-6 py-4">Threat Type</th>
                <th className="px-6 py-4">Target Provider</th>
                <th className="px-6 py-4">Detection Score</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentThreats.map((threat) => (
                <tr key={threat.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-2 h-2 rounded-full", threat.score > 90 ? "bg-rose-500" : "bg-amber-500")}></div>
                      <span className="text-white font-mono font-bold">{threat.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm">{threat.target}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <span className="font-bold text-slate-200">{threat.score}%</span>
                       <div className="w-24 h-1 bg-dark-900 rounded-full overflow-hidden">
                          <div className="h-full bg-primary-500" style={{ width: `${threat.score}%` }}></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-sm whitespace-nowrap">{threat.time}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-bold text-primary-500 hover:text-white transition-colors uppercase border border-primary-500/20 px-3 py-1.5 rounded-lg">View Payload</button>
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
