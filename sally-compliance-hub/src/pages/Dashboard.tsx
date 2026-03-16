import * as Recharts from 'recharts';
import * as Lucide from 'lucide-react';

const complianceScore = [
  { name: 'EU AI Act', value: 87 },
  { name: 'GDPR', value: 92 },
  { name: 'NIST AI RMF', value: 74 },
  { name: 'ISO 42001', value: 65 },
];

const timelineData = [
  { name: 'Jan', compliance: 65 },
  { name: 'Feb', compliance: 72 },
  { name: 'Mar', compliance: 78 },
  { name: 'Apr', compliance: 85 },
  { name: 'May', compliance: 87 },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tighter">Regulatory Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium italic">Unified compliance monitoring against 4 global AI frameworks.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[0.7rem] font-bold text-slate-300 uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              <Lucide.Download className="w-3 h-3" /> Export Audit PDF
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Overall Compliance', value: '82%', detail: 'Good Standing', color: 'text-green-500', icon: 'ShieldCheck' },
          { label: 'Open Gap Items', value: '14', detail: '3 Critical', color: 'text-orange-500', icon: 'FileWarning' },
          { label: 'Documentation Ready', value: '94%', detail: 'Update Required', color: 'text-slate-300', icon: 'FileText' },
          { label: 'Audit Risk Level', value: 'Low', detail: 'NIST Standard', color: 'text-blue-500', icon: 'Activity' },
        ].map((stat, i) => {
          const Icon = (Lucide as any)[stat.icon] || Lucide.Circle;
          return (
            <div key={i} className="glass-panel p-6 border-white/5 group hover:border-white/10 transition-all cursor-default">
              <div className="flex items-center justify-between mb-4">
                 <Icon className={cn("w-5 h-5", stat.color)} />
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
          <h2 className="text-sm font-bold text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-widest font-mono">Compliance Maturation Curve</h2>
          <div className="h-[300px]">
            <Recharts.ResponsiveContainer width="100%" height="100%">
              <Recharts.BarChart data={timelineData}>
                <Recharts.CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <Recharts.XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <Recharts.YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <Recharts.Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                <Recharts.Bar dataKey="compliance" fill="#334155" radius={[4, 4, 0, 0]} />
              </Recharts.BarChart>
            </Recharts.ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 bg-gradient-to-br from-dark-900 to-dark-800">
           <h2 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-mono">Framework Distribution</h2>
           <div className="space-y-6">
             {complianceScore.map((item, i) => (
               <div key={i} className="space-y-2">
                 <div className="flex justify-between items-center text-[0.6rem] font-bold">
                    <span className="text-slate-400 uppercase tracking-widest">{item.name}</span>
                    <span className="text-white">{item.value}%</span>
                 </div>
                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-500 rounded-full" 
                      style={{ width: `${item.value}%` }}
                    />
                 </div>
               </div>
             ))}
           </div>

           <div className="mt-10 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 border-dashed">
             <div className="flex items-center gap-2 mb-2">
               <Lucide.AlertTriangle className="w-3 h-3 text-orange-500" />
               <span className="text-[0.6rem] font-bold text-orange-500 uppercase tracking-widest">Compliance Gap Alert</span>
             </div>
             <p className="text-[0.6rem] text-slate-500 italic leading-relaxed">
               "NIST AI RMF Section 3.2 documentation is absent in the current audit package. Auto-generation recommendation triggered."
             </p>
           </div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden border-white/5">
         <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono">Framework Gap Registry</h3>
            <span className="text-[0.6rem] font-mono text-slate-600">Total Items: 114</span>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left font-sans">
               <thead className="bg-white/[0.02] text-[0.6rem] text-slate-500 uppercase tracking-widest font-bold">
                  <tr>
                     <th className="px-6 py-4 font-medium">Regulation</th>
                     <th className="px-6 py-4 font-medium">Control ID</th>
                     <th className="px-6 py-4 font-medium">Requirement</th>
                     <th className="px-6 py-4 font-medium">Asset</th>
                     <th className="px-6 py-4 text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5 font-mono text-[0.65rem]">
                  {[
                    { reg: 'EU AI Act', id: 'ART-10-2', req: 'Model Explainability Report', asset: 'Sally_LLM_v4', status: 'Pending' },
                    { reg: 'GDPR', id: 'DPIA-04', req: 'Bias Variance Assessment', asset: 'Recruitment_Agent', status: 'In Review' },
                    { reg: 'NIST', id: 'GOV-2.1', req: 'Role-based Access Policy', asset: 'Data_Lake_Primary', status: 'Implemented' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 font-bold text-white">{row.reg}</td>
                      <td className="px-6 py-4 text-slate-400">{row.id}</td>
                      <td className="px-6 py-4 text-slate-400 font-sans italic">{row.req}</td>
                      <td className="px-6 py-4 text-zinc-500">{row.asset}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[0.55rem] font-bold uppercase border",
                          row.status === 'Pending' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" :
                          row.status === 'In Review' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                          "bg-green-500/10 text-green-500 border-green-500/20"
                        )}>
                          {row.status}
                        </span>
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

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
