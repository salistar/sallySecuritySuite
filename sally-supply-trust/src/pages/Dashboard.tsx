import * as Recharts from 'recharts';
import * as Lucide from 'lucide-react';

const supplyStats = [
  { name: 'Model Weights', count: 124, risk: 'Low' },
  { name: 'Base Models', count: 12, risk: 'Medium' },
  { name: 'Data Sources', count: 45, risk: 'Safe' },
  { name: 'Training Nodes', count: 156, risk: 'Low' },
];

const vulnerabilityData = [
  { month: 'Jan', critical: 2, high: 14, medium: 45 },
  { month: 'Feb', critical: 1, high: 8, medium: 32 },
  { month: 'Mar', critical: 4, high: 12, medium: 28 },
  { month: 'Apr', critical: 0, high: 5, medium: 12 },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-widest text-gradient leading-none uppercase italic">Supply Chain Integrity</h1>
          <p className="text-slate-500 text-sm mt-3 font-medium border-l-2 border-amber-500/50 pl-4 font-sans">Full-lifecycle traceability for AI components. Securing model provenance from HuggingFace to Production.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
              <span className="text-[0.65rem] font-bold text-amber-500 uppercase tracking-widest">SBOM_SCANNER: ONLINE</span>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total AI Assets', value: '3,284', detail: 'Verified SBOMs', icon: 'Package' },
          { label: 'Base Model Integrity', value: '100%', detail: 'Checksums Valid', icon: 'ShieldCheck' },
          { label: 'Provenace Depth', value: '12-Layers', detail: 'End-to-end Trace', icon: 'Link' },
          { label: 'Vulnerability Score', value: '98.2', detail: 'Excellent', icon: 'Activity' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.icon] || Lucide.Circle;
          return (
            <div key={i} className="glass-panel p-6 border-white/5 hover:border-amber-500/20 transition-all cursor-default">
              <div className="flex items-center justify-between mb-4">
                 <Icon className="w-5 h-5 text-amber-500" />
                 <span className="text-[0.6rem] font-bold text-slate-600 uppercase tracking-widest font-mono">{stat.label}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">{stat.value}</h3>
              <p className="text-[0.65rem] font-medium text-slate-500 italic uppercase">{stat.detail}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6">
          <h2 className="text-[0.7rem] font-bold text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-[0.2em] font-mono">Supply Chain Vulnerability Index</h2>
          <div className="h-[300px]">
             <Recharts.ResponsiveContainer width="100%" height="100%">
                <Recharts.AreaChart data={vulnerabilityData}>
                   <defs>
                      <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                         <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                   </defs>
                   <Recharts.CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                   <Recharts.XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                   <Recharts.YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                   <Recharts.Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                   <Recharts.Area type="monotone" dataKey="high" stroke="#f59e0b" fill="url(#colorRisk)" strokeWidth={3} />
                   <Recharts.Area type="monotone" dataKey="medium" stroke="#f97316" fill="none" strokeWidth={2} strokeDasharray="4 4" />
                </Recharts.AreaChart>
             </Recharts.ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-br from-dark-900 to-amber-950/10">
           <h2 className="text-[0.7rem] font-bold text-white mb-6 uppercase tracking-[0.2em] font-mono italic">Asset Risk Distribution</h2>
           <div className="space-y-6">
              {supplyStats.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:bg-amber-500/5 transition-all">
                   <div>
                      <p className="text-[0.65rem] font-bold text-white uppercase tracking-tight">{item.name}</p>
                      <p className="text-[0.6rem] text-slate-500 font-mono tracking-widest">{item.count} NODES</p>
                   </div>
                   <span className={cn(
                     "px-2 py-0.5 rounded text-[0.55rem] font-bold uppercase",
                     item.risk === 'Safe' ? "bg-green-500/20 text-green-400" :
                     item.risk === 'Low' ? "bg-blue-500/20 text-blue-400" :
                     "bg-orange-500/20 text-orange-400"
                   )}>
                     {item.risk}
                   </span>
                </div>
              ))}
           </div>
           
           <div className="mt-8 p-4 rounded-xl border border-white/5 bg-white/5">
              <div className="flex items-center gap-3 mb-2">
                 <Lucide.AlertCircle className="w-3 h-3 text-amber-500" />
                 <span className="text-[0.6rem] font-bold text-amber-500 uppercase tracking-widest">Trust Advisory</span>
              </div>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed font-sans italic opacity-60">
                "Detected version mismatch in base weight checksum for sally-nlp-v3. Possible supply chain poisoning attempt in transit from Edge_Node_02."
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
