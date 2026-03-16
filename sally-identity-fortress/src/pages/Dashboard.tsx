import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const riskData = [
  { name: '08:00', synthetic: 5, human: 120 },
  { name: '10:00', synthetic: 12, human: 180 },
  { name: '12:00', synthetic: 45, human: 250 },
  { name: '14:00', synthetic: 28, human: 210 },
  { name: '16:00', synthetic: 67, human: 300 },
  { name: '18:00', synthetic: 15, human: 150 },
  { name: '20:00', synthetic: 8, human: 90 },
];

const biometricsData = [
  { name: 'Facial Match', value: 98.2 },
  { name: 'Voice Print', value: 94.5 },
  { name: 'ID Authenticity', value: 99.1 },
  { name: 'Liveness', value: 96.8 },
];

const recentVerifications = [
  { id: 'KYC-8001', user: 'Alex Murphy', score: 98, status: 'Verified', time: '2m ago' },
  { id: 'KYC-7998', user: 'Unknown_Asset', score: 42, status: 'Flagged', time: '12m ago' },
  { id: 'KYC-7995', user: 'Sarah Connor', score: 99, status: 'Verified', time: '25m ago' },
  { id: 'KYC-7992', user: 'Agent_Smith', score: 15, status: 'Blocked', time: '1h ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono leading-none tracking-tight uppercase">Identity Fortress Control</h1>
          <p className="text-slate-400 text-sm italic mt-2 border-l-2 border-blue-500/50 pl-4">Advanced synthetic identity detection and biometric integrity monitoring for high-trust environments.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 border border-blue-400/20">
            <Lucide.ShieldCheck className="w-4 h-4" /> Run Global Audit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Total Identities', value: '412,042', change: '+2.4k', iconName: 'Users' },
          { label: 'Synthetic Detected', value: '1,204', change: '+12 today', iconName: 'UserX' },
          { label: 'Avg Risk Score', value: '12.4', change: '-2.1', iconName: 'Gauge' },
          { label: 'Trust Index', value: '99.9%', iconName: 'Shield' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.iconName] || Lucide.Shield;
          return (
            <div key={i} className="glass-panel p-6 hover:border-blue-500/20 transition-all cursor-default relative group">
               <div className="absolute top-4 right-4 text-blue-500/10 group-hover:text-blue-500/30 transition-colors">
                 <Icon className="w-8 h-8" />
               </div>
              <p className="text-[0.65rem] font-bold text-slate-500 mb-1 uppercase tracking-widest">{stat.label}</p>
              <div className="flex items-end gap-3 font-mono mt-3">
                <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                {stat.change && (
                  <span className={cn(
                    "text-[0.65rem] font-bold mb-1.5 flex items-center",
                    stat.change.startsWith('+') ? "text-blue-400" : "text-emerald-400"
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
           <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2 font-mono uppercase tracking-widest">
             <Lucide.Activity className="w-5 h-5 text-blue-500" /> Identity Ingress & Fraud Vectors
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={riskData}>
                  <defs>
                    <linearGradient id="colorHuman" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="human" stroke="#3b82f6" fill="url(#colorHuman)" strokeWidth={3} />
                  <Area type="monotone" dataKey="synthetic" stroke="#f43f5e" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-b from-dark-900/40 to-blue-900/10">
           <h3 className="text-sm font-bold text-white mb-6 font-mono uppercase tracking-widest">Biometric Confidence</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={biometricsData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#cbd5e1" width={100} fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-blue-400 uppercase tracking-widest mb-2 font-mono">Neural Assessment</h4>
              <p className="text-[0.65rem] text-slate-400 leading-relaxed font-mono italic">
                "Detected 12 IDs sharing common generative latent space signatures. Synthetic farm profile identified in Southeast Asia region."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-blue-500/10">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-blue-500/[0.02]">
           <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono">Real-time Identity Verification Stream</h3>
           <div className="flex gap-2 text-[0.6rem] font-mono">
              <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md font-bold text-blue-400 uppercase tracking-widest animate-pulse">Monitoring_Active</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Verification ID</th>
                <th className="px-6 py-4">User Identity</th>
                <th className="px-6 py-4">Risk Score</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentVerifications.map((verify) => (
                <tr key={verify.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-blue-500">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{verify.id}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm whitespace-nowrap">{verify.user}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className={cn("h-full", verify.score > 80 ? "bg-emerald-500" : verify.score > 50 ? "bg-amber-500" : "bg-rose-500")} style={{ width: `${verify.score}%` }} />
                       </div>
                       <span className="text-xs font-bold font-mono">{verify.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[0.6rem] font-bold uppercase border",
                      verify.status === 'Verified' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      verify.status === 'Flagged' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    )}>
                      {verify.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{verify.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
