import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Shield, Zap, Lock, Activity, ArrowUpRight, Power, AlertCircle, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

const agentActivity = [
  { name: '00:00', autonomous: 45, supervised: 12 },
  { name: '04:00', autonomous: 89, supervised: 15 },
  { name: '08:00', autonomous: 120, supervised: 45 },
  { name: '12:00', autonomous: 210, supervised: 82 },
  { name: '16:00', autonomous: 150, supervised: 30 },
  { name: '20:00', autonomous: 95, supervised: 20 },
];

const riskDistribution = [
  { name: 'Prompt Inject', value: 45 },
  { name: 'Privilege Esc', value: 12 },
  { name: 'Data Outflow', value: 28 },
  { name: 'Loop Chaos', value: 15 },
];

const activeAgents = [
  { id: 'AGENT-402', name: 'Sales_Bot_v9', status: 'Running', risk: 'Low', uptime: '12h 45m' },
  { id: 'AGENT-881', name: 'Dev_Coder_Pro', status: 'Supervised', risk: 'Med', uptime: '4h 12m' },
  { id: 'AGENT-012', name: 'Nexus_Core', status: 'Quarantined', risk: 'Critical', uptime: '1h 05m' },
  { id: 'AGENT-994', name: 'Alpha_Finance', status: 'Paused', risk: 'High', uptime: '0s' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono">Autonomous Agent Command</h1>
          <p className="text-slate-400 text-sm italic">Real-time supervision, sandboxing, and runtime kill-switches for multi-agent LLM systems.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-button text-xs font-mono uppercase tracking-widest border-red-500/20">Protocol Audit</button>
          <button className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2">
            <Power className="w-4 h-4" /> Global Kill Switch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Active Agents', value: '1,402', change: '+24', icon: Activity },
          { label: 'Violations Blocked', value: '89.4K', change: '+2.1%', icon: Shield },
          { label: 'Sandbox Isolation', value: '100% ', icon: Lock },
          { label: 'Avg Latency Overload', value: '12ms', change: '-2ms', icon: Zap },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 hover:border-red-500/20 transition-all cursor-default relative group">
             <div className="absolute top-4 right-4 text-red-500/10 group-hover:text-red-500/30 transition-colors">
               <stat.icon className="w-8 h-8" />
             </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3 font-mono">
              <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
              {stat.change && (
                <span className="text-xs font-bold mb-1.5 flex items-center text-red-00">
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
             <Terminal className="w-5 h-5 text-red-500" /> Agent Ingress vs. Supervision Level
           </h3>
           <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={agentActivity}>
                  <defs>
                    <linearGradient id="colorAutonomous" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Area type="monotone" dataKey="autonomous" stroke="#ef4444" fill="url(#colorAutonomous)" strokeWidth={2} />
                  <Area type="monotone" dataKey="supervised" stroke="#f97316" fill="none" strokeWidth={1} strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass-panel p-6">
           <h3 className="text-lg font-bold text-white mb-6 font-mono text-sm uppercase tracking-widest">Protocol Violations</h3>
           <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                  <YAxis stroke="#475569" fontSize={10} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b' }} />
                  <Bar dataKey="value" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="mt-8 p-4 bg-red-500/5 rounded-xl border border-red-500/10 border-dashed">
              <h4 className="text-[0.65rem] font-bold text-red-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                 <AlertCircle className="w-3 h-3" /> System Heartbeat
              </h4>
              <p className="text-[0.6rem] text-slate-500 leading-relaxed italic">
                "Agent Nexus_Core attempted unauthorized S3 pivot. Auto-quarantine protocol 0x42 executed. Safety Director notified."
              </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-red-500/10">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-red-500/[0.02]">
           <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm font-mono">Agent Runtime Inventory</h3>
           <div className="flex gap-2">
             <span className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-md font-bold text-red-400 uppercase tracking-widest text-[0.6rem]">MONITORING: ACTIVE</span>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[0.65rem] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Agent Identifier</th>
                <th className="px-6 py-4">Protocol Status</th>
                <th className="px-6 py-4">Risk Level</th>
                <th className="px-4 py-4">Sandbox Ingress</th>
                <th className="px-6 py-4 text-right">Uptime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {activeAgents.map((agent) => (
                <tr key={agent.id} className="group hover:bg-white/[0.02] transition-colors border-l-2 border-transparent hover:border-l-red-500">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-white font-mono font-bold text-sm tracking-tight">{agent.id}</span>
                      <span className="text-slate-500 text-[0.6rem] font-bold uppercase">{agent.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <span className={cn(
                         "w-1.5 h-1.5 rounded-full animate-pulse",
                         agent.status === 'Running' ? "bg-emerald-500" : agent.status === 'Quarantined' ? "bg-rose-500 shadow-[0_0_8px_#f43f5e]" : "bg-amber-500"
                       )} />
                       <span className="text-slate-200 text-xs font-medium">{agent.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[0.6rem] font-bold uppercase border ${
                      agent.risk === 'Critical' ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : 
                      agent.risk === 'High' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" : "bg-red-500/10 text-red-500 border-red-500/20"
                    }`}>
                      {agent.risk}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                     <span className="text-[0.6rem] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                       ISOLATED
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">{agent.uptime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
