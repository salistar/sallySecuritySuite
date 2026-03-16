import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const scanData = [
  { name: 'Mon', vulns: 12, secrets: 2 },
  { name: 'Tue', vulns: 25, secrets: 8 },
  { name: 'Wed', vulns: 15, secrets: 5 },
  { name: 'Thu', vulns: 45, secrets: 12 },
  { name: 'Fri', vulns: 32, secrets: 4 },
  { name: 'Sat', vulns: 12, secrets: 1 },
  { name: 'Sun', vulns: 8, secrets: 0 },
];

const categoryData = [
  { name: 'Injection', value: 45 },
  { name: 'Broken Auth', value: 25 },
  { name: 'XSS', value: 20 },
  { name: 'Insecure Deps', value: 10 },
];

const recentScans = [
  { id: 'S-402', repo: 'sally-frontend-core', issues: 12, status: 'Failed', time: '1h ago' },
  { id: 'S-401', repo: 'auth-validator-node', issues: 0, status: 'Passed', time: '3h ago' },
  { id: 'S-400', repo: 'data-processing-py', issues: 3, status: 'Warning', time: '8h ago' },
  { id: 'S-399', repo: 'llm-gateway-proxy', issues: 1, status: 'Warning', time: '1d ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono leading-none tracking-tight">Code Integrity Central</h1>
          <p className="text-slate-400 text-sm italic mt-2">Zero-trust code validation for AI-generated artifacts and LLM-driven supply chains.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2 border border-emerald-400/20">
            <Lucide.Plus className="w-4 h-4" /> New Repository Scan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Total Lines Scanned', value: '1.2M', change: '+150K', iconName: 'FileCode' },
          { label: 'Vulnerabilities Fixed', value: '482', change: '+22', iconName: 'CheckCircle2' },
          { label: 'Secrets Exposed', value: '3', change: '-5', iconName: 'KeyRound' },
          { label: 'Security Score', value: 'A+', iconName: 'Shield' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
          return (
            <div key={i} className="glass-panel p-6 hover:border-emerald-500/20 transition-all cursor-default relative group">
               <div className="absolute top-4 right-4 text-emerald-500/10 group-hover:text-emerald-500/30 transition-colors">
                 <Icon className="w-8 h-8" />
               </div>
              <p className="text-[0.65rem] font-bold text-slate-500 mb-1 uppercase tracking-widest">{stat.label}</p>
              <div className="flex items-end gap-3 font-mono mt-3">
                <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                {stat.change && (
                  <span className="text-[0.65rem] font-bold mb-1.5 flex items-center text-emerald-400">
                     <Lucide.TrendingUp className="w-3 h-3 mr-1" /> {stat.change}
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
             <Lucide.Activity className="w-5 h-5 text-emerald-500" /> Vulnerability Detection Trend
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={scanData}>
                  <defs>
                    <linearGradient id="colorVulns" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="vulns" stroke="#10b981" fill="url(#colorVulns)" strokeWidth={3} />
                  <Area type="monotone" dataKey="secrets" stroke="#06b6d4" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-b from-dark-900/40 to-emerald-900/10">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest">OWASP Top 10 Distribution</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#cbd5e1" width={100} fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest mb-2 font-mono italic">Security Insight</h4>
              <p className="text-[0.65rem] text-slate-400 leading-relaxed font-mono">
                "Hallucinated package import 'fast-auth-plus' detected in LLM-generated snippet. Slopsquatting vector neutralized."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-emerald-500/10 shadow-emerald-500/5">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-emerald-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-xs font-mono">Live Repository Scanning Stream</h3>
           <div className="flex gap-2 text-[0.6rem] font-mono">
              <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md font-bold text-emerald-400 uppercase tracking-widest animate-pulse">Scanning_Active</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Scan ID</th>
                <th className="px-6 py-4">Repository</th>
                <th className="px-6 py-4">Issues Found</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Last Scan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentScans.map((scan) => (
                <tr key={scan.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-emerald-500">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{scan.id}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm whitespace-nowrap font-mono">{scan.repo}</td>
                  <td className="px-6 py-4 font-bold text-slate-200 font-mono tracking-tighter">{scan.issues} findings</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[0.6rem] font-bold uppercase border",
                      scan.status === 'Passed' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      scan.status === 'Warning' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    )}>
                      {scan.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{scan.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
