import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Shield, Zap, Search, Fingerprint, Activity, ArrowUpRight, Globe, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

const detectionData = [
  { name: 'Mon', verified: 1200, deepfakes: 45 },
  { name: 'Tue', verified: 2100, deepfakes: 112 },
  { name: 'Wed', verified: 4500, deepfakes: 210 },
  { name: 'Thu', verified: 3200, deepfakes: 89 },
  { name: 'Fri', verified: 5800, deepfakes: 342 },
  { name: 'Sat', verified: 1500, deepfakes: 22 },
  { name: 'Sun', verified: 1800, deepfakes: 15 },
];

const artifactData = [
  { name: 'Gan Artifacts', value: 45 },
  { name: 'Audio Phasing', value: 25 },
  { name: 'Eye Jitter', value: 18 },
  { name: 'Sync Issues', value: 12 },
];

const recentVerifications = [
  { id: 'IMG-402', type: 'Profile Photo', source: 'Twitter_Ingest', veracity: '98%', status: 'Clear', time: '2m ago' },
  { id: 'VID-881', type: 'News Clip', source: 'Telegram_Feed', veracity: '12%', status: 'Deepfake', time: '15m ago' },
  { id: 'AUD-012', type: 'Voice Note', source: 'WhatsApp_Upload', veracity: '45%', status: 'Suspect', time: '45m ago' },
  { id: 'IMG-994', type: 'ID Card', source: 'KYC_Internal', veracity: '99%', status: 'Clear', time: '1h ago' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono">Media Integrity Shield</h1>
          <p className="text-slate-400 text-sm">Deepfake detection, provenance tracking, and generative artifact analysis in a post-truth era.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-button text-xs font-mono uppercase tracking-widest border-blue-500/20">Media Audit History</button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
            <Globe className="w-4 h-4" /> Sync Global Hashes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Files Verified', value: '45.8K', change: '+12%', icon: Shield },
          { label: 'Deepfakes Isolated', value: '1,245', change: '+14%', icon: AlertTriangle },
          { label: 'Detection Latency', value: '250ms', change: '-45ms', icon: Zap },
          { label: 'Active Watchdogs', value: '89', icon: Globe },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 hover:border-blue-500/20 transition-all cursor-default relative group">
             <div className="absolute top-4 right-4 text-blue-500/10 group-hover:text-blue-500/30 transition-colors">
               <stat.icon className="w-8 h-8" />
             </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3 font-mono">
              <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
              {stat.change && (
                <span className="text-xs font-bold mb-1.5 flex items-center text-blue-400">
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
             <Activity className="w-5 h-5 text-blue-500" /> Verification Stream vs. Generative Noise
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={detectionData}>
                  <defs>
                    <linearGradient id="colorVerified" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="verified" stroke="#3b82f6" fill="url(#colorVerified)" strokeWidth={2} />
                  <Area type="monotone" dataKey="deepfakes" stroke="#ef4444" fill="none" strokeWidth={1} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest">Artifact Distribution</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={artifactData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#475569" width={70} fontSize={10} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-blue-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                 <Fingerprint className="w-3 h-3" /> Integrity Insight
              </h4>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed italic">
                "C2PA signatures missing on News_Clip source. GAN-based artifacting detected in facial landmarks (89% confidence)."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-blue-500/10">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-blue-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm font-mono">Live Verification Ledger</h3>
           <div className="flex gap-2 text-[0.6rem]">
             <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md font-bold text-blue-400 uppercase tracking-widest">REAL-TIME INGEST</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Media File Identifier</th>
                <th className="px-6 py-4">Source Origin</th>
                <th className="px-6 py-4">Veracity Score</th>
                <th className="px-4 py-4">Veridict</th>
                <th className="px-6 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentVerifications.map((item) => (
                <tr key={item.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-blue-500">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-white font-mono font-bold text-sm tracking-tight">{item.id}</span>
                      <span className="text-slate-500 text-[0.6rem] font-bold uppercase">{item.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm italic tracking-tight">{item.source}</td>
                  <td className="px-6 py-4 text-slate-300 text-xs font-mono">{item.veracity}</td>
                  <td className="px-4 py-4">
                     <span className={cn(
                       "text-[0.6rem] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter",
                       item.status === 'Clear' ? "text-emerald-500 bg-emerald-500/10" : item.status === 'Suspect' ? "bg-amber-500/10 text-amber-500" : "bg-rose-500/10 text-rose-500"
                     )}>
                       {item.status}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
