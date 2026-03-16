import { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

interface AuditLog {
  id: string;
  asset: string;
  hash: string;
  status: 'verified' | 'suspicious' | 'corrupted';
}

export const ProvenanceScan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<AuditLog[]>([]);

  const startScan = () => {
    setIsScanning(true);
    setProgress(0);
    setLogs([]);
  };

  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(p => p + 1);
        
        if (progress === 15) setLogs(prev => [{ id: 'L-001', asset: 'BaseWeights_v1', hash: 'SHA256:8f4e...', status: 'verified' }, ...prev]);
        if (progress === 35) setLogs(prev => [{ id: 'L-002', asset: 'Pre-trainedTokenizer', hash: 'SHA256:d92x...', status: 'verified' }, ...prev]);
        if (progress === 55) setLogs(prev => [{ id: 'L-003', asset: 'CustomLinearLayer', hash: 'SHA256:A1E2...', status: 'suspicious' }, ...prev]);
        if (progress === 75) setLogs(prev => [{ id: 'L-004', asset: 'Config_Hyperparams', hash: 'SHA256:00BF...', status: 'verified' }, ...prev]);
        if (progress === 90) setLogs(prev => [{ id: 'L-005', asset: 'QuantizationMap', hash: 'SHA256:99XX...', status: 'verified' }, ...prev]);
      }, 50);
      return () => clearTimeout(timer);
    } else if (progress === 100) {
      setIsScanning(false);
    }
  }, [isScanning, progress]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <div className="flex justify-between items-end border-b border-amber-500/10 pb-8">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-[0.2em] font-mono italic uppercase">AI Asset Provenance Scanner</h2>
           <p className="text-slate-500 text-xs mt-3 italic border-l border-amber-500/50 pl-4">Verifying layer-by-layer supply chain integrity for model weights and configuration files.</p>
        </div>
        <button 
          onClick={startScan}
          disabled={isScanning}
          className={cn(
            "px-10 py-4 rounded-2xl font-bold text-[0.7rem] uppercase tracking-[0.3em] transition-all",
            isScanning 
              ? "bg-white/5 text-slate-500 cursor-not-allowed border border-white/5" 
              : "bg-amber-600 text-white hover:bg-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] active:scale-95"
          )}
        >
          {isScanning ? 'Scanner Active...' : 'Initiate Asset Scan'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 glass-panel p-6 bg-dark-950 flex flex-col justify-center items-center h-[500px]">
           <div className="relative mb-8">
              <div className={cn(
                "w-32 h-32 rounded-3xl border-2 border-white/10 flex items-center justify-center transition-all duration-700 hover:rotate-45 rotate-12",
                isScanning ? "border-amber-500/50 scale-110 shadow-[0_0_30px_rgba(245,158,11,0.2)]" : ""
              )}>
                 <Lucide.SearchCode className={cn("w-12 h-12 transition-all", isScanning ? "text-amber-400" : "text-slate-800")} />
              </div>
              {isScanning && <div className="absolute inset-0 border-2 border-amber-500/20 rounded-3xl animate-ping" />}
           </div>

           <div className="w-full space-y-4 px-4 text-center">
              <div className="flex justify-between text-[0.6rem] font-bold font-mono text-slate-500 uppercase tracking-widest">
                 <span>Scanning Integrity</span>
                 <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-amber-500 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
              </div>
           </div>
        </div>

        <div className="lg:col-span-3 glass-panel p-6 flex flex-col bg-dark-950/40 border-amber-500/10 h-[500px]">
           <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <Lucide.Terminal className="w-4 h-4 text-amber-500" />
              <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono italic">Traceability Audit Log</h3>
           </div>
           
           <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 font-mono">
              {logs.length === 0 ? (
                <div className="h-full flex items-center justify-center text-slate-800 text-[0.6rem] uppercase font-bold tracking-[0.5em]">
                   Awaiting Supply Chain Data
                </div>
              ) : (
                logs.map((log) => (
                  <div key={log.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 animate-in slide-in-from-right-4 duration-500 group hover:border-amber-500/20">
                     <div className={cn(
                       "w-2 h-2 rounded-full",
                       log.status === 'verified' ? "bg-amber-500" : 
                       log.status === 'suspicious' ? "bg-orange-500 animate-pulse" : "bg-red-500"
                     )} />
                     <div className="flex-1">
                        <div className="flex justify-between mb-1">
                           <span className="text-[0.65rem] font-bold text-white uppercase">{log.asset}</span>
                           <span className="text-[0.55rem] text-slate-600">ID: {log.id}</span>
                        </div>
                        <p className="text-[0.6rem] text-slate-500 truncate">{log.hash}</p>
                     </div>
                     <span className={cn(
                       "px-2 py-0.5 rounded text-[0.5rem] font-bold uppercase",
                       log.status === 'verified' ? "text-amber-500/80" : "text-orange-500"
                     )}>
                        {log.status}
                     </span>
                  </div>
                ))
              )}
           </div>

           {progress === 100 && (
             <div className="mt-4 p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 flex items-center gap-4 animate-in zoom-in-95">
                <Lucide.ShieldAlert className="w-5 h-5 text-orange-400" />
                <div>
                   <p className="text-[0.65rem] font-bold text-orange-400 uppercase tracking-widest">Provenance Warning: ANOMALY_DETECTED</p>
                   <p className="text-[0.55rem] text-slate-500 uppercase mt-1">Weight distribution for customLayer mismatch against SBOM record.</p>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};
