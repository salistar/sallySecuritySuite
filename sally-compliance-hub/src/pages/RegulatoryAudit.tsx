import { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

export const RegulatoryAudit = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{check: string, status: 'pass' | 'fail' | 'warn'}[]>([]);

  const startAudit = () => {
    setIsAuditing(true);
    setProgress(0);
    setResults([]);
  };

  useEffect(() => {
    if (isAuditing && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(p => p + 1);
        
        if (progress === 15) setResults(prev => [...prev, { check: "EU AI Act - Risk Classification (High Risk)", status: 'pass' }]);
        if (progress === 35) setResults(prev => [...prev, { check: "GDPR - Data Privacy Impact Assessment (DPIA)", status: 'warn' }]);
        if (progress === 55) setResults(prev => [...prev, { check: "NIST - Technical Documentation Completeness", status: 'fail' }]);
        if (progress === 75) setResults(prev => [...prev, { check: "Transparency - Model Explainability Log", status: 'pass' }]);
        if (progress === 90) setResults(prev => [...prev, { check: "Governance - Human-in-the-loop Controls", status: 'pass' }]);
      }, 40);
      return () => clearTimeout(timer);
    } else if (progress === 100) {
      setIsAuditing(false);
    }
  }, [isAuditing, progress]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <div className="flex justify-between items-end border-b border-white/5 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase font-mono italic">Regulatory Audit Engine</h2>
          <p className="text-slate-500 text-xs mt-2 italic font-sans border-l border-slate-700 pl-4">Systematic validation of AI assets against the EU AI Act and NIST frameworks.</p>
        </div>
        <button 
          onClick={startAudit}
          disabled={isAuditing}
          className={cn(
            "px-8 py-3 rounded-xl font-bold text-[0.7rem] uppercase tracking-widest transition-all",
            isAuditing 
              ? "bg-white/5 text-slate-500 cursor-not-allowed border border-white/10" 
              : "bg-slate-800 text-white border border-white/10 hover:bg-slate-700 active:scale-95 shadow-2xl"
          )}
        >
          {isAuditing ? 'Audit Cycle Active...' : 'Initiate Compliance Audit'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-panel p-8 flex flex-col items-center justify-center min-h-[450px] relative bg-slate-900/40">
            <div className="relative mb-12">
               <div className={cn(
                 "w-40 h-40 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700",
                 isAuditing ? "border-slate-500/50 scale-110" : ""
               )}>
                 <Lucide.Scale className={cn(
                   "w-16 h-16 transition-all duration-1000",
                   isAuditing ? "text-slate-200 rotate-12" : "text-slate-800"
                 )} />
               </div>
               {isAuditing && (
                  <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-8">
                     <span className="text-[0.6rem] font-mono font-bold text-slate-400 uppercase animate-pulse">Scanning_Legals...</span>
                  </div>
               )}
            </div>

            <div className="w-full space-y-4">
               <div className="flex justify-between text-[0.6rem] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  <span>Cycle Progress</span>
                  <span>{progress}%</span>
               </div>
               <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-400 transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
               </div>
            </div>

            {progress === 100 && (
              <div className="mt-8 flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-xl animate-in zoom-in-95">
                 <Lucide.ShieldAlert className="w-4 h-4 text-orange-400" />
                 <span className="text-[0.6rem] font-bold text-orange-400 uppercase tracking-widest">Audit Terminal: Attention Required</span>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-3 glass-panel p-6 bg-dark-950/40 border-white/5 flex flex-col h-[450px]">
           <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <Lucide.Activity className="w-4 h-4 text-slate-500" />
              <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono">Live Audit Result Matrix</h3>
           </div>
           
           <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 font-mono pr-4">
              {results.length === 0 ? (
                <div className="h-full flex items-center justify-center flex-col gap-4 opacity-20">
                   <Lucide.Inbox className="w-12 h-12" />
                   <span className="text-[0.65rem] uppercase font-bold tracking-[0.3em]">No Active Audit Data</span>
                </div>
              ) : (
                results.map((res, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 animate-in slide-in-from-right-4 duration-500">
                    <div className={cn(
                      "mt-0.5 p-1 rounded-full",
                      res.status === 'pass' ? "bg-green-500/20 text-green-500" :
                      res.status === 'fail' ? "bg-red-500/20 text-red-500" : "bg-orange-500/20 text-orange-500"
                    )}>
                      {res.status === 'pass' ? <Lucide.Check className="w-3 h-3" /> :
                       res.status === 'fail' ? <Lucide.X className="w-3 h-3" /> : <Lucide.AlertCircle className="w-3 h-3" />}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[0.65rem] font-bold text-white uppercase tracking-tight">{res.check}</p>
                      <p className="text-[0.6rem] text-slate-500 italic uppercase">STATUS: {res.status}</p>
                    </div>
                    <span className="ml-auto text-[0.55rem] text-slate-700 font-bold uppercase">{new Date().toLocaleTimeString()}</span>
                  </div>
                ))
              )}
           </div>
        </div>
      </div>
    </div>
  );
};
