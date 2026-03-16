import { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

export const EthicsAudit = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [auditLogs, setAuditLogs] = useState<{msg: string, type: 'info' | 'warn' | 'success'}[]>([]);

  const startAudit = () => {
    setIsAuditing(true);
    setProgress(0);
    setAuditLogs([]);
  };

  const addLog = (msg: string, type: 'info' | 'warn' | 'success') => {
    setAuditLogs(prev => [...prev, { msg, type }]);
  };

  useEffect(() => {
    if (isAuditing && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(p => p + 1);
        
        if (progress === 10) addLog("Loading Model Bias Matrix...", "info");
        if (progress === 30) addLog("Testing demographic parity across 42 dimensions...", "info");
        if (progress === 50) addLog("WARN: Detected 8% variance in age-based decision nodes.", "warn");
        if (progress === 70) addLog("Recalibrating fairness weights for 'Economic' cluster...", "info");
        if (progress === 90) addLog("Finalizing Transparency Index cross-check...", "info");
        if (progress === 99) addLog("AUDIT COMPLETE: Governance standards met (Variance < 0.05)", "success");
      }, 50);
      return () => clearTimeout(timer);
    } else if (progress === 100) {
      setIsAuditing(false);
    }
  }, [isAuditing, progress]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <div className="flex justify-between items-end border-b border-indigo-500/10 pb-8">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-[0.2em] font-mono italic uppercase italic leading-none">Accountability Audit Terminal</h2>
           <p className="text-slate-500 text-xs mt-3 italic border-l border-indigo-500/50 pl-4 font-sans">Automated fairness verification system. Testing model decisions against global ethical frameworks.</p>
        </div>
        <button 
          onClick={startAudit}
          disabled={isAuditing}
          className={cn(
            "px-10 py-4 rounded-xl font-bold text-[0.7rem] uppercase tracking-[0.3em] transition-all",
            isAuditing 
              ? "bg-white/5 text-slate-500 cursor-not-allowed border border-white/5" 
              : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)] active:scale-95 border border-indigo-500/50 uppercase"
          )}
        >
          {isAuditing ? 'Audit Active...' : 'Initiate Ethics Audit'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 glass-panel p-6 bg-dark-950 flex flex-col justify-center items-center h-[550px] border-indigo-500/5">
           <div className="relative mb-12 group cursor-pointer">
              <div className={cn(
                "w-36 h-36 rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-700 shadow-2xl",
                isAuditing ? "border-indigo-500/50 scale-110 shadow-[0_0_30px_rgba(99,102,241,0.2)] rotate-3" : "group-hover:rotate-12 transition-transform"
              )}>
                 <Lucide.Scale className={cn("w-16 h-16 transition-all", isAuditing ? "text-indigo-400 rotate-12" : "text-slate-800")} />
              </div>
              {isAuditing && <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-2xl animate-ping" />}
           </div>

           <div className="w-full space-y-4 px-4 text-center">
              <div className="flex justify-between text-[0.6rem] font-bold font-mono text-slate-500 uppercase tracking-widest leading-none">
                 <span>Accountability Cycle</span>
                 <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                 <div className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
              </div>
           </div>
        </div>

        <div className="lg:col-span-3 glass-panel p-6 flex flex-col bg-dark-950/40 border-indigo-500/10 h-[550px]">
           <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <Lucide.Terminal className="w-4 h-4 text-indigo-500" />
              <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono italic">Operational Ethics Stream</h3>
           </div>
           
           <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 font-mono pr-4">
              {auditLogs.length === 0 ? (
                <div className="h-full flex items-center justify-center flex-col gap-6 opacity-10">
                   <Lucide.Scale className="w-16 h-16" />
                   <span className="text-[0.7rem] uppercase font-bold tracking-[0.6em] font-mono">System Standby</span>
                </div>
              ) : (
                auditLogs.map((log, i) => (
                  <div key={i} className={cn(
                    "flex items-start gap-4 p-4 rounded-xl border animate-in slide-in-from-right-4 duration-500",
                    log.type === 'warn' ? "bg-orange-500/5 text-orange-400 border-orange-500/10" : 
                    log.type === 'success' ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-white/[0.02] text-slate-400 border-white/5"
                  )}>
                     <span className="text-[0.6rem] text-slate-600 font-bold whitespace-nowrap">[{new Date().toLocaleTimeString()}]</span>
                     <span className="text-[0.65rem] font-bold uppercase tracking-tight">{log.msg}</span>
                  </div>
                ))
              )}
           </div>

           {progress === 100 && (
             <div className="mt-6 p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center gap-5 animate-in zoom-in-95 group transition-all hover:bg-indigo-500/20">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                   <Lucide.Award className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                   <p className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono">Fairness Certification Issued</p>
                   <p className="text-[0.6rem] text-indigo-400/80 uppercase mt-1 italic tracking-widest">Hash: 0xETHICS_VERIFIED_{Math.random().toString(16).slice(2,8).toUpperCase()}</p>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};
