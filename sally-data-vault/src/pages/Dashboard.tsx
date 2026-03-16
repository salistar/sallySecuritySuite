import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const leakData = [
  { name: '08:00', detected: 12, blocked: 10 },
  { name: '10:00', detected: 45, blocked: 45 },
  { name: '12:00', detected: 89, blocked: 88 },
  { name: '14:00', detected: 34, blocked: 34 },
  { name: '16:00', detected: 67, blocked: 67 },
  { name: '18:00', detected: 23, blocked: 23 },
  { name: '20:00', detected: 98, blocked: 98 },
];

const categoryData = [
  { name: 'PII (Name/Email)', value: 45 },
  { name: 'Financial (Credit Card)', value: 25 },
  { name: 'Secrets (API Keys)', value: 20 },
  { name: 'Code Source', value: 10 },
];

const recentIntercepts = [
  { id: 1, type: 'Credit Card', user: 'j.dupont@corp.com', service: 'ChatGPT', status: 'Masked', time: '12s ago' },
  { id: 2, type: 'API Key (AWS)', user: 'dev_team_alpha', service: 'Copilot', status: 'Blocked', time: '45s ago' },
  { id: 3, type: 'Customer Data', user: 'sales_rep_03', service: 'Claude', status: 'Masked', time: '3m ago' },
  { id: 4, type: 'Source Code', user: 'intern_dev', service: 'Cursor', status: 'Blocked', time: '8m ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">DLP Intelligent Gateway</h1>
          <p className="text-slate-400 text-sm">Contextual data leak prevention and reversible tokenization for LLM interactions.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 font-medium text-white text-xs font-mono uppercase tracking-widest">DOCKER_PULL_PROXY</button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2">
            <Lucide.ShieldAlert className="w-4 h-4" /> Policy Enforcement Engine
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Prompts Processed (24h)', value: '1.2M', change: '+15.2%', iconName: 'FileText' },
          { label: 'Sensitive Items Blocked', value: '4,821', change: '+8.4%', iconName: 'Shield' },
          { label: 'PII Elements Masked', value: '12,940', change: '+22.1%', iconName: 'EyeOff' },
          { label: 'Compliance Index', value: '99.8%', iconName: 'Shield' },
        ].map((stat, i) => {
           const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
           return (
            <div key={i} className="bg-dark-800/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-6 hover:border-indigo-500/20 transition-all cursor-default relative group">
               <div className="absolute top-4 right-4 text-indigo-500/10 group-hover:text-indigo-500/30 transition-colors">
                 <Icon className="w-8 h-8" />
               </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-end gap-3 font-mono">
                <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                {stat.change && (
                  <span className="text-xs font-bold mb-1.5 flex items-center text-indigo-400">
                     {stat.change}
                  </span>
                )}
              </div>
            </div>
           );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-dark-800/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-6 min-h-[400px]">
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
             <Lucide.Activity className="w-5 h-5 text-indigo-500" /> Interception Activity (Hourly)
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={leakData}>
                  <defs>
                    <linearGradient id="colorDetected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="detected" stroke="#6366f1" fill="url(#colorDetected)" strokeWidth={2} />
                  <Area type="monotone" dataKey="blocked" stroke="#8b5cf6" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-dark-800/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-6">
           <h3 className="text-lg font-bold text-white mb-6">Threat Categories (%)</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#475569" width={100} fontSize={10} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-6 space-y-4">
              <div className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                 <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Compliance Insight</h4>
                 <p className="text-[0.7rem] text-slate-500 leading-relaxed italic">
                   "RGPD/loi 09-08 compliance module automatically matched 95% of Moroccan PII patterns in French/Arabic prompts."
                 </p>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-dark-800/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
           <h3 className="text-lg font-bold text-white">Live Interception Stream</h3>
           <div className="flex gap-2 text-[0.6rem]">
              <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md font-bold text-indigo-400 uppercase tracking-widest animate-pulse">GATEWAY ONLINE</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Data Type</th>
                <th className="px-6 py-4">Source User</th>
                <th className="px-6 py-4">AI Provider</th>
                <th className="px-6 py-4">Gateway Action</th>
                <th className="px-6 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentIntercepts.map((intercept) => (
                <tr key={intercept.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-indigo-500">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{intercept.type}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">{intercept.user}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[0.6rem] text-slate-300 font-bold uppercase tracking-widest leading-loose">
                      {intercept.service}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "flex items-center gap-2 text-xs font-bold",
                      intercept.status === 'Masked' ? "text-indigo-400" : "text-rose-500"
                    )}>
                      {intercept.status === 'Masked' ? <Lucide.EyeOff className="w-3 h-3" /> : <Lucide.Shield className="w-3 h-3" />}
                      {intercept.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{intercept.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
