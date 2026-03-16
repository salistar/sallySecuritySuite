import * as Recharts from 'recharts';
import * as Lucide from 'lucide-react';

const biasData = [
  { group: 'Gender', parity: 0.98 },
  { group: 'Ethnicity', parity: 0.95 },
  { group: 'Age', parity: 0.92 },
  { group: 'Region', parity: 0.96 },
  { group: 'Economic', parity: 0.89 },
];

const fairnessTrend = [
  { week: 'W1', score: 88 },
  { week: 'W2', score: 91 },
  { week: 'W3', score: 89 },
  { week: 'W4', score: 94 },
  { week: 'W5', score: 95 },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-widest text-gradient leading-none uppercase italic">Ethical Governance Dashboard</h1>
          <p className="text-slate-500 text-sm mt-3 font-medium border-l-2 border-indigo-500/50 pl-4 font-sans italic">Operationalizing AI fairness and accountability through continuous bias auditing.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-5 py-2.5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 flex items-center gap-3">
              <span className="text-[0.65rem] font-bold text-indigo-400 uppercase tracking-[0.2em] font-mono italic">Audit_Node: ACTIVE</span>
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Bias Variance Score', value: '0.04', detail: 'Target: <0.05', icon: 'BarChart2', color: 'text-indigo-400' },
          { label: 'Fairness Index', value: '94/100', detail: 'High Accountability', icon: 'Scale', color: 'text-sky-400' },
          { label: 'Transparency Logs', value: '14,2k', detail: 'Immutable Storage', icon: 'Eye', color: 'text-dark-500' },
          { label: 'Impact Resolution', value: '99.2%', detail: 'Ethics Verified', icon: 'CheckCircle', color: 'text-teal-400' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.icon] || Lucide.Circle;
          return (
            <div key={i} className="glass-panel p-6 border-white/5 hover:border-indigo-500/20 transition-all group overflow-hidden relative">
              <div className="absolute right-0 top-0 w-24 h-24 bg-indigo-500/5 blur-3xl rounded-full" />
              <div className="flex items-center justify-between mb-6">
                 <Icon className={cn("w-5 h-5", stat.color)} />
                 <span className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest font-mono italic pt-1">{stat.label}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tighter mb-1 font-mono">{stat.value}</h3>
              <p className="text-[0.6rem] font-bold text-slate-600 uppercase italic opacity-70 tracking-tighter">{stat.detail}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6">
          <h2 className="text-[0.7rem] font-bold text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-[0.2em] font-mono italic">Fairness Parity Over Time</h2>
          <div className="h-[300px]">
             <Recharts.ResponsiveContainer width="100%" height="100%">
                <Recharts.AreaChart data={fairnessTrend}>
                   <defs>
                      <linearGradient id="colorFairness" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                         <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                   </defs>
                   <Recharts.CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                   <Recharts.XAxis dataKey="week" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                   <Recharts.YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                   <Recharts.Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                   <Recharts.Area type="monotone" dataKey="score" stroke="#6366f1" fill="url(#colorFairness)" strokeWidth={3} />
                </Recharts.AreaChart>
             </Recharts.ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-br from-dark-900 to-indigo-950/20">
           <h2 className="text-[0.7rem] font-bold text-white mb-6 uppercase tracking-[0.2em] font-mono italic">Demographic Parity</h2>
           <div className="space-y-6">
              {biasData.map((item, i) => (
                <div key={i} className="space-y-2 group">
                   <div className="flex justify-between items-center text-[0.6rem] font-bold font-mono">
                      <span className="text-slate-400 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">{item.group}</span>
                      <span className="text-white">{(item.parity * 100).toFixed(0)}%</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.3)]" 
                        style={{ width: `${item.parity * 100}%` }}
                      />
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-12 p-4 rounded-xl border border-white/5 bg-indigo-500/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                 <Lucide.AlertCircle className="w-3 h-3 text-indigo-400" />
                 <span className="text-[0.6rem] font-bold text-indigo-400 uppercase tracking-widest">Ethical Insight</span>
              </div>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed font-sans italic opacity-70">
                "Significant parity variance detected in 'Economic' cluster for Model_Core_v4. Fairness correction pipeline initiated."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
