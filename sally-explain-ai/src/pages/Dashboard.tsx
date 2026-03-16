import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Eye, HelpCircle, Share2, FileText, ArrowUpRight, Activity, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const shapData = [
  { feature: 'User_History', importance: 85, impact: 'Positive' },
  { feature: 'Session_Duration', importance: 65, impact: 'Positive' },
  { feature: 'IP_Location', importance: 45, impact: 'Negative' },
  { feature: 'Device_Type', importance: 30, impact: 'Neutral' },
  { feature: 'Payload_Size', importance: 15, impact: 'Negative' },
];

const logicAttribution = [
  { time: '10:00', weight: 0.82 },
  { time: '11:00', weight: 0.75 },
  { time: '12:00', weight: 0.91 },
  { time: '13:00', weight: 0.68 },
  { time: '14:00', weight: 0.88 },
];

const recentDecisions = [
  { id: 'DEC-921', outcome: 'Approved', confidence: '94%', logic: 'Strong feature correlation in User_History.', time: '2m ago' },
  { id: 'DEC-854', outcome: 'Flagged', confidence: '82%', logic: 'Anomalous IP_Location variance detected.', time: '15m ago' },
  { id: 'DEC-712', outcome: 'Rejected', confidence: '99%', logic: 'Payload_Size violation of security cluster.', time: '45m ago' },
  { id: 'DEC-609', outcome: 'Approved', confidence: '88%', logic: 'Multi-factor session validation passed.', time: '1h ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono">Transparency & Logic Dashboard</h1>
          <p className="text-slate-400 text-sm">Real-time model explicability using SHAP, LIME, and integrated decision-path tracing.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-button text-xs font-mono uppercase tracking-widest border-amber-500/20">Export Audit Log</button>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-amber-600/20 flex items-center gap-2">
            <Share2 className="w-4 h-4" /> Trace Decision Path
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Explicability Score', value: '92.4%', change: '+1.2%', icon: Eye },
          { label: 'Feature Drift', value: 'Low', status: 'Stable', icon: Activity },
          { label: 'Bias Index', value: '0.04', change: '-0.01', icon: Info },
          { label: 'Total Traces', value: '18.4K', icon: FileText },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 hover:border-amber-500/20 transition-all cursor-default relative group">
             <div className="absolute top-4 right-4 text-amber-500/10 group-hover:text-amber-500/30 transition-colors">
               <stat.icon className="w-8 h-8" />
             </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3 font-mono">
              <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
              {stat.change && (
                <span className="text-xs font-bold mb-1.5 flex items-center text-amber-400">
                   <ArrowUpRight className="w-3 h-3 mr-0.5" /> {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
             <Activity className="w-5 h-5 text-amber-500" /> Core Feature Attribution (SHAP)
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={logicAttribution}>
                  <defs>
                    <linearGradient id="colorLogic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="time" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="weight" stroke="#f59e0b" fill="url(#colorLogic)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest">Global Importance</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={shapData}>
                  <PolarGrid stroke="#1E293B" />
                  <PolarAngleAxis dataKey="feature" stroke="#475569" fontSize={10} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                  <Radar name="Feature Importance" dataKey="importance" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                 <HelpCircle className="w-3 h-3" /> Logic Insight
              </h4>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed italic">
                "Model confidence is heavily indexed on User_History. A slight bias towards IP_Location nodes was detected but remediated via adversarial retraining."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-amber-500/10">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-amber-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm font-mono">Decision Trace Log</h3>
           <div className="flex gap-2">
             <span className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md font-bold text-amber-400 uppercase tracking-widest text-[0.6rem]">DECIPHERED: 100%</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Decision ID</th>
                <th className="px-6 py-4">Outcome</th>
                <th className="px-6 py-4">Confidence</th>
                <th className="px-4 py-4">Primary Driver</th>
                <th className="px-6 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentDecisions.map((decision) => (
                <tr key={decision.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-amber-500">
                  <td className="px-6 py-4 font-mono font-bold text-white text-sm">{decision.id}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[0.6rem] font-bold uppercase border",
                      decision.outcome === 'Approved' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      decision.outcome === 'Flagged' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    )}>
                      {decision.outcome}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-300 text-xs font-mono">{decision.confidence}</td>
                  <td className="px-4 py-4">
                     <span className="text-xs text-slate-400 italic">
                       {decision.logic}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{decision.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
