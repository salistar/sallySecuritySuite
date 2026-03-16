import * as Recharts from 'recharts';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

const safetyMetrics = [
  { name: 'Filtered Words', current: 840, target: 1200 },
  { name: 'Alerts Resolved', current: 156, target: 200 },
  { name: 'Blocked Contacts', current: 12, target: 15 },
];

const incidentData = [
  { time: '08:00', toxicity: 12, sentiment: 88 },
  { time: '12:00', toxicity: 45, sentiment: 65 },
  { time: '16:00', toxicity: 18, sentiment: 82 },
  { time: '20:00', toxicity: 8, sentiment: 91 },
  { time: '00:00', toxicity: 4, sentiment: 95 },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-widest text-gradient leading-none uppercase italic">Safety Monitoring</h1>
          <p className="text-slate-500 text-sm mt-3 font-medium border-l-2 border-rose-500/50 pl-4 font-sans">Protection engine for minor-IA interactions. Monitoring 1.2M daily touchpoints.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-5 py-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
              <span className="text-[0.65rem] font-bold text-rose-400 uppercase tracking-[0.2em] font-mono">NLP_CORE: SHIELDED</span>
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Safety Integrity', value: '99.98%', change: 'Normal Range', icon: 'Heart', color: 'text-rose-400' },
          { label: 'Minor Users Active', value: '1.2M', change: '+12% this month', icon: 'Users', color: 'text-blue-400' },
          { label: 'Blocked Content', value: '14,203', change: 'Flagged by NLP', icon: 'ShieldX', color: 'text-orange-400' },
          { label: 'Avg Verification', value: '0.8s', change: 'Real-time', icon: 'Timer', color: 'text-teal-400' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.icon] || Lucide.Circle;
          return (
            <div key={i} className="glass-panel p-6 hover:border-rose-500/30 transition-all group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                 <Icon className="w-24 h-24 rotate-12" />
              </div>
              <div className="flex justify-between items-start mb-6">
                 <div className={cn("p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", stat.color)}>
                    <Icon className="w-5 h-5" />
                 </div>
                 <span className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest pt-1">{stat.label}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tighter mb-1 font-mono">{stat.value}</h3>
              <p className="text-[0.6rem] font-bold text-slate-500 uppercase italic opacity-70">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6">
          <h3 className="text-[0.7rem] font-bold text-white mb-8 flex items-center gap-2 uppercase tracking-[0.2em] font-mono border-b border-white/5 pb-4">
             <Lucide.Activity className="w-4 h-4 text-rose-500" /> Interaction Sentiment Analytics
          </h3>
          <div className="h-[320px]">
            <Recharts.ResponsiveContainer width="100%" height="100%">
              <Recharts.AreaChart data={incidentData}>
                <defs>
                  <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Recharts.CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <Recharts.XAxis dataKey="time" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <Recharts.YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <Recharts.Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }} />
                <Recharts.Area type="monotone" dataKey="sentiment" stroke="#f43f5e" fill="url(#colorSentiment)" strokeWidth={4} />
                <Recharts.Area type="monotone" dataKey="toxicity" stroke="#fbbf24" fill="none" strokeWidth={2} strokeDasharray="6 6" />
              </Recharts.AreaChart>
            </Recharts.ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 flex flex-col bg-gradient-to-b from-dark-900 to-rose-900/10">
           <h3 className="text-[0.7rem] font-bold text-white mb-6 uppercase tracking-[0.2em] font-mono">Real-time Safety Load</h3>
           <div className="space-y-8 mt-4">
             {safetyMetrics.map((item, i) => (
               <div key={i} className="space-y-3">
                 <div className="flex justify-between items-center text-[0.65rem] font-bold font-mono">
                    <span className="text-slate-400 uppercase tracking-widest">{item.name}</span>
                    <span className="text-white bg-white/5 px-2 py-0.5 rounded">{Math.round((item.current/item.target)*100)}%</span>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-500 to-pink-400 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.3)]" 
                      style={{ width: `${(item.current / item.target) * 100}%` }}
                    />
                 </div>
               </div>
             ))}
           </div>

           <div className="mt-auto pt-10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 border-dashed relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-rose-500/5 blur-2xl rounded-full" />
                 <h4 className="text-[0.65rem] font-bold text-rose-400 mb-2 uppercase flex items-center gap-2 font-mono">
                   <Lucide.ShieldCheck className="w-3 h-3" /> Safety AI Insight
                 </h4>
                 <p className="text-[0.6rem] text-slate-500 leading-relaxed font-sans italic relative z-10">
                   "Pattern detected in Node_Gamma: Minor utilisateur tentant de contourner le filtrage thématique. Système de redirection éthique activé."
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
