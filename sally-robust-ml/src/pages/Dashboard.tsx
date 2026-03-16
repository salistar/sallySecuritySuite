import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const attackData = [
  { name: '08:00', detected: 450, blocked: 442 },
  { name: '10:00', detected: 890, blocked: 885 },
  { name: '12:00', detected: 1200, blocked: 1198 },
  { name: '14:00', detected: 600, blocked: 595 },
  { name: '16:00', detected: 750, blocked: 745 },
  { name: '18:00', detected: 300, blocked: 300 },
];

const categoryData = [
  { name: 'FGSM', value: 45 },
  { name: 'PGD', value: 25 },
  { name: 'DeepFool', value: 20 },
  { name: 'CW-Attack', value: 10 },
];

const recentThreats = [
  { id: 'ATK-402', model: 'ResNet-50', type: 'PGD L-inf', status: 'Purified', time: '12s ago' },
  { id: 'ATK-389', model: 'BERT-Base', type: 'Synonym Swap', status: 'Blocked', time: '1m ago' },
  { id: 'ATK-210', model: 'StableDiffusion', type: 'Pixel Injection', status: 'Purified', time: '5m ago' },
  { id: 'ATK-105', model: 'Llama-3', type: 'Prompt Drift', status: 'Flagged', time: '12m ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono">Robustness Control Center</h1>
          <p className="text-slate-400 text-sm">Real-time defense against adversarial perturbations and white-box model extraction.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 font-medium text-white text-xs font-mono">STRESS_TEST_V7</button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2">
            <Lucide.Zap className="w-4 h-4" /> Trigger Auto-Purification
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Attacks Blocked (24h)', value: '14,281', change: '+12%', iconName: 'Shield' },
          { label: 'Purification Latency', value: '18ms', change: '-4ms', iconName: 'Activity' },
          { label: 'Model Integrity', value: '99.9%', iconName: 'Shield' }, // Using Shield as Brain fallback
          { label: 'Threat Level', value: 'Elevated', iconName: 'AlertCircle' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
          return (
            <div key={i} className="glass-panel p-6 hover:border-emerald-500/20 transition-all cursor-default relative group">
               <div className="absolute top-4 right-4 text-emerald-500/10 group-hover:text-emerald-500/30 transition-colors">
                 <Icon className="w-8 h-8" />
               </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-end gap-3 font-mono">
                <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                {stat.change && (
                  <span className="text-xs font-bold mb-1.5 flex items-center text-emerald-400">
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
             <Lucide.Target className="w-5 h-5 text-emerald-500" /> Adversarial Detection Stream
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={attackData}>
                  <defs>
                    <linearGradient id="colorDetected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="detected" stroke="#10b981" fill="url(#colorDetected)" strokeWidth={2} />
                  <Area type="monotone" dataKey="blocked" stroke="#34d399" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest">Attack Vectors</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#475569" width={80} fontSize={10} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest mb-1">Robustness Insight</h4>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed italic border-l border-emerald-500/30 pl-3">
                "PGD attacks increased 24% this hour. Auto-purification activated for Visual Cluster B. No integrity loss reported."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-emerald-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm font-mono">Neutralization Log</h3>
           <div className="flex gap-2">
             <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md font-bold text-emerald-400 uppercase tracking-widest text-[0.6rem]">PURIFIER STATUS: ACTIVE</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Threat ID</th>
                <th className="px-6 py-4">Target Model</th>
                <th className="px-6 py-4">Vector</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentThreats.map((threat) => (
                <tr key={threat.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-emerald-500">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{threat.id}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">{threat.model}</td>
                  <td className="px-6 py-4 text-slate-300 text-xs font-mono">{threat.type}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[0.6rem] font-bold uppercase border",
                      threat.status === 'Purified' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      threat.status === 'Blocked' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                    )}>
                      {threat.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{threat.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
