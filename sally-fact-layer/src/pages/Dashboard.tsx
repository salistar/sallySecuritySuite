import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertCircle, FileCheck, Search, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const verificationTrend = [
  { name: 'Mon', volume: 450, hallucinations: 42 },
  { name: 'Tue', volume: 520, hallucinations: 38 },
  { name: 'Wed', volume: 610, hallucinations: 55 },
  { name: 'Thu', volume: 480, hallucinations: 30 },
  { name: 'Fri', volume: 720, hallucinations: 68 },
  { name: 'Sat', volume: 300, hallucinations: 12 },
  { name: 'Sun', volume: 250, hallucinations: 10 },
];

const sourceDistribution = [
  { name: 'Academic/PubMed', value: 45, color: '#10b981' },
  { name: 'Legal/Official', value: 30, color: '#0ea5e9' },
  { name: 'Wikipedia/General', value: 15, color: '#f59e0b' },
  { name: 'News (Real-time)', value: 10, color: '#6366f1' },
];

const recentClaims = [
  { id: 1, content: "GPT-4 claims the CEO of X is still Y.", status: 'False', score: 12, source: 'Wikipedia 2026' },
  { id: 2, content: "The clinical trial for Drug Z had 98% efficacy.", status: 'Verified', score: 99, source: 'PubMed ID: 345...' },
  { id: 3, content: "Statute of limitations for X in Morocco is 5 years.", status: 'Verified', score: 97, source: 'Legifrance / Adala' },
  { id: 4, content: "Quantum Supremacy was achieved in 2021 by Google.", status: 'Mixed', score: 65, source: 'Multiple News' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Hallucination Monitoring</h1>
          <p className="text-slate-400">Track and verify LLM outputs across your enterprise stack.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-button text-xs">Download Audit Log</button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
            <Search className="w-4 h-4" /> Global Verification Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Total Verifications', value: '48.2K', change: '+18%', icon: Search, trend: 'up' },
          { label: 'Avg Hallucination Rate', value: '14.2%', change: '-2.4%', icon: AlertCircle, trend: 'down' },
          { label: 'Precision Score', value: '99.2%', icon: FileCheck, trend: 'neutral' },
          { label: 'Avg Latency/Fact', value: '1.2s', icon: Zap, trend: 'neutral' },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 group hover:border-emerald-500/30 transition-all duration-500">
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3">
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              {stat.change && (
                <span className={cn(
                  "text-xs font-bold mb-1 flex items-center",
                  stat.trend === 'up' ? "text-emerald-500" : "text-emerald-500"
                )}>
                   {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
           <h3 className="text-lg font-bold text-white mb-6">Verification Volume vs. Hallucinations</h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={verificationTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="volume" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
                  <Bar dataKey="hallucinations" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={10} />
                </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6">Verified Source Distribution</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceDistribution}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sourceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
           </div>
           <div className="space-y-3 mt-4">
              {sourceDistribution.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    {item.name}
                  </div>
                  <span className="text-white font-bold">{item.value}%</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="glass-panel pt-6">
        <div className="px-6 mb-6 flex justify-between items-center">
           <h3 className="text-lg font-bold text-white">Live Verification Stream</h3>
           <div className="flex items-center gap-2 text-[0.65rem] text-emerald-500 font-bold bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
              <span className="animate-pulse">●</span> PROCESSING: 42 CLMS/SEC
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-white/5">
              <tr>
                <th className="px-6 py-4">Claim Content Fragment</th>
                <th className="px-6 py-4">Trust Status</th>
                <th className="px-6 py-4">Fact Score</th>
                <th className="px-6 py-4">Primary Source</th>
                <th className="px-6 py-4 text-right">Evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentClaims.map((claim) => (
                <tr key={claim.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-slate-300 text-sm italic">"{claim.content}"</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-[0.6rem] font-bold uppercase border",
                      claim.status === 'Verified' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                      claim.status === 'False' ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                    )}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("font-mono font-bold", claim.score > 80 ? "text-emerald-500" : claim.score < 40 ? "text-rose-500" : "text-amber-500")}>
                      {claim.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{claim.source}</td>
                  <td className="px-6 py-4 text-right px-6">
                    <button className="text-xs font-bold text-emerald-500 hover:text-white underline underline-offset-4 decoration-emerald-500/30">View Diff</button>
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
