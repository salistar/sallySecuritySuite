import { useState } from 'react';
import * as Lucide from 'lucide-react';

export const Proxy = () => {
  const [activeTab, setActiveTab] = useState('rules');

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-indigo-500/10 p-8 rounded-2xl border border-indigo-500/20 backdrop-blur-md">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 font-mono">Quantum Proxy Layer</h1>
          <p className="text-slate-400 text-sm italic">Ultra-low latency interceptor blocking sensitive vectors before they reach model providers.</p>
        </div>
        <div className="h-12 w-12 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-2">
          {['rules', 'intercepts', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-5 py-3 rounded-xl font-bold uppercase tracking-widest text-[0.65rem] transition-all border ${
                activeTab === tab 
                  ? 'bg-indigo-600 text-white border-indigo-400' 
                  : 'text-slate-500 border-white/5 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 glass-panel p-8 min-h-[400px]">
           {activeTab === 'rules' ? (
             <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                <div className="flex justify-between items-center mb-4">
                   <h3 className="text-white font-bold flex items-center gap-2">
                     <Lucide.Shield className="w-4 h-4 text-indigo-400" /> Active Security Policies
                   </h3>
                   <button className="text-[0.65rem] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:text-white transition-all">+ NEW_RULE</button>
                </div>
                
                <div className="space-y-3">
                   {[
                     { name: 'PII_REDACTION_STRICT', status: 'Enabled', hits: 12041 },
                     { name: 'SECRET_API_KEY_MASK', status: 'Enabled', hits: 842 },
                     { name: 'REVERSIBLE_TOKENIZATION', status: 'Bypass', hits: 0 },
                   ].map((rule) => (
                     <div key={rule.name} className="p-4 bg-white/5 border border-white/5 rounded-xl flex justify-between items-center hover:border-indigo-500/30 transition-all cursor-pointer group">
                        <div className="flex items-center gap-4">
                           <div className={`w-2 h-2 rounded-full ${rule.status === 'Enabled' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                           <span className="font-mono text-sm text-slate-200 group-hover:text-white">{rule.name}</span>
                        </div>
                        <span className="text-[0.6rem] font-bold text-slate-500 font-mono tracking-tighter">HITS: {rule.hits}</span>
                     </div>
                   ))}
                </div>
             </div>
           ) : (
             <div className="flex flex-col items-center justify-center h-full text-slate-600 font-mono text-[0.6rem] uppercase tracking-[0.3em]">
                System_Module_Standby
             </div>
           )}
        </div>
      </div>
    </div>
  );
};
