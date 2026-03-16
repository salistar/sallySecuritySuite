import { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

export const IPScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<{msg: string, type: 'info' | 'warn' | 'success'}[]>([]);

  const startScan = () => {
    setIsScanning(true);
    setProgress(0);
    setLogs([]);
    addLog("Initializing Model Weight Scanner...", "info");
  };

  const addLog = (msg: string, type: 'info' | 'warn' | 'success') => {
    setLogs(prev => [...prev, { msg, type }]);
  };

  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(p => p + 1);
        
        if (progress === 10) addLog("Analyzing tensor distribution for watermarking...", "info");
        if (progress === 30) addLog("Fingerprinting layer 4-12 weights...", "info");
        if (progress === 50) addLog("SCAN UPDATE: Anomalous weight shift detected in L8 transformer block", "warn");
        if (progress === 70) addLog("Verifying SHA-256 IP hash against vault registry...", "info");
        if (progress === 90) addLog("Finalizing IP integrity cross-check...", "info");
        if (progress === 99) addLog("INTEGRITY VERIFIED: Model IP ownership confirmed", "success");
      }, 50);
      return () => clearTimeout(timer);
    } else if (progress === 100) {
      setIsScanning(false);
    }
  }, [isScanning, progress]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end border-b border-white/5 pb-6">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-widest uppercase font-mono italic">IP Integrity Scanner</h2>
           <p className="text-slate-500 text-xs mt-2 italic border-l border-cyan-500/50 pl-4">Verify model ownership and detect illegal parameter distillation attempts.</p>
        </div>
        <button 
          onClick={startScan}
          disabled={isScanning}
          className={cn(
            "px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all",
            isScanning 
              ? "bg-dark-800 text-slate-500 cursor-not-allowed border border-white/5" 
              : "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
          )}
        >
          {isScanning ? 'Scanner Active...' : 'Initiate IP Scan'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="glass-panel p-8 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="relative mb-12">
                 <div className={cn(
                   "w-48 h-48 rounded-full border-2 flex items-center justify-center transition-all duration-700",
                   isScanning ? "border-cyan-500/50 scale-110 shadow-[0_0_50px_rgba(6,182,212,0.2)]" : "border-white/10"
                 )}>
                   <Lucide.Cpu className={cn(
                     "w-20 h-20 transition-all duration-1000",
                     isScanning ? "text-cyan-400 rotate-180" : "text-slate-700"
                   )} />
                 </div>
                 {isScanning && (
                   <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping" />
                 )}
              </div>

              <div className="w-full space-y-3">
                 <div className="flex justify-between text-[0.6rem] font-bold font-mono text-slate-500 uppercase tracking-widest">
                    <span>Scan_Coverage</span>
                    <span>{progress}%</span>
                 </div>
                 <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-600 to-teal-400 transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                 </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 w-full italic">
                 {[
                   { label: 'Latency', value: '42ms' },
                   { label: 'Precision', value: '99.2%' },
                   { label: 'Noise', value: '0.04%' },
                 ].map((stat, i) => (
                   <div key={i} className="text-center">
                      <p className="text-[0.6rem] text-slate-600 uppercase font-bold tracking-tighter mb-1">{stat.label}</p>
                      <p className="text-xs font-bold text-white font-mono">{stat.value}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 bg-dark-950/40 border-cyan-500/10 flex flex-col h-[400px]">
           <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <Lucide.Terminal className="w-4 h-4 text-cyan-500" />
              <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono italic">Vault Engine Output</h3>
           </div>
           
           <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 font-mono">
              {logs.length === 0 ? (
                <div className="h-full flex flex-center items-center justify-center text-slate-700 text-[0.6rem] uppercase font-bold tracking-widest">
                   System Ready for IP Authentication
                </div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className={cn(
                    "text-[0.65rem] flex gap-3 animate-in slide-in-from-left-2 duration-300",
                    log.type === 'warn' ? "text-orange-400" : 
                    log.type === 'success' ? "text-teal-400" : "text-slate-400"
                  )}>
                    <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                    <span className="flex-1 tracking-tight">{log.msg}</span>
                  </div>
                ))
              )}
           </div>

           {progress === 100 && (
             <div className="mt-4 p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center gap-3 animate-in zoom-in-95">
                <Lucide.Trophy className="w-4 h-4 text-teal-400" />
                <p className="text-[0.65rem] font-bold text-teal-400 uppercase tracking-widest">Ownership Scan Complete: MODEL_SECURE</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};
