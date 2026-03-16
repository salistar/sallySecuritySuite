import { useState } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<'idle' | 'success' | 'fail'>('idle');
  const [scanLog, setScanLog] = useState<string[]>([]);

  const runScan = () => {
    setIsScanning(true);
    setScanResult('idle');
    setScanLog([]);
    
    const steps = [
      'Initializing static analysis engine...',
      'Mapping AST of generated code snippets...',
      'Comparing imports against slopsquatting database...',
      'Analyzing data flow for injection vectors...',
      'Verifying license compliance headers...',
      'Deep-scanning for hardcoded secrets...',
      'Finalizing integrity report...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setScanLog(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setScanResult(Math.random() > 0.3 ? 'success' : 'fail');
      }
    }, 800);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-emerald-500/5 p-8 rounded-3xl border border-emerald-500/10 shadow-inner">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tighter">AI-Generated Code Sentry</h2>
          <p className="text-slate-400 text-sm italic border-l-2 border-emerald-500/50 pl-4">Scanning code artifacts for vulnerabilities, hallucinations, and licensing compliance gaps.</p>
        </div>
        <button 
          onClick={runScan}
          disabled={isScanning}
          className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-xl shadow-emerald-600/20 flex items-center gap-3 uppercase tracking-widest text-xs border border-white/10"
        >
          {isScanning ? <Lucide.RefreshCw className="w-4 h-4 animate-spin" /> : <Lucide.Play className="w-4 h-4 fill-current" />}
          {isScanning ? 'Scanner Active' : 'Start Audit'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 min-h-[450px] flex flex-col relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse-slow"></div>
           
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest font-mono flex items-center gap-2">
                 <Lucide.Terminal className="w-4 h-4 text-emerald-500" /> Audit Logs
              </h3>
              <span className="text-[0.6rem] font-mono text-slate-500">v4.2.0-secure</span>
           </div>

           <div className="flex-1 space-y-3 font-mono text-[0.7rem] bg-black/40 p-6 rounded-xl border border-white/5 overflow-y-auto custom-scrollbar shadow-inner">
              <AnimatePresence>
                {scanLog.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4 border-l border-emerald-500/20 pl-4 py-1"
                  >
                    <span className="text-emerald-500 font-bold tracking-tighter">[SYS_COMP]</span>
                    <span className="text-slate-300">{log}</span>
                    <Lucide.Check className="w-3 h-3 text-emerald-500 ml-auto" />
                  </motion.div>
                ))}
              </AnimatePresence>
              {!isScanning && scanLog.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center opacity-30 gap-4">
                   <Lucide.SearchCode className="w-12 h-12" />
                   <p className="uppercase tracking-[0.3em]">Awaiting_Input_Stream</p>
                </div>
              )}
           </div>

           {scanResult !== 'idle' && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className={cn(
                 "mt-6 p-6 rounded-2xl border flex items-center justify-between",
                 scanResult === 'success' ? "bg-emerald-500/10 border-emerald-500/30" : "bg-rose-500/10 border-rose-500/30"
               )}
             >
               <div className="flex items-center gap-4">
                  <div className={cn("p-2 rounded-lg", scanResult === 'success' ? "bg-emerald-500/20" : "bg-rose-500/20")}>
                    {scanResult === 'success' ? <Lucide.ShieldCheck className="w-6 h-6 text-emerald-500" /> : <Lucide.ShieldAlert className="w-6 h-6 text-rose-500" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">{scanResult === 'success' ? 'Codebase Certified' : 'Compliance Denied'}</h4>
                    <p className="text-[0.6rem] text-slate-400 mt-1 uppercase font-mono">{scanResult === 'success' ? 'Zero vulnerabilities found among 1.2k tokens' : 'Critical CVE-2026-9041 pattern detected'}</p>
                  </div>
               </div>
               <button onClick={() => setScanResult('idle')} className="text-slate-500 hover:text-white text-[0.6rem] uppercase tracking-widest font-mono underline">Dismiss</button>
             </motion.div>
           )}
        </div>

        <div className="space-y-6">
           <div className="glass-panel p-6 border-emerald-500/10">
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-mono flex items-center gap-2">
                 <Lucide.PackagePlus className="w-4 h-4 text-emerald-500" /> Dependency Tree Monitor
              </h3>
              <div className="space-y-4">
                 {[
                   { name: '@sally/gateway-sdk', status: 'verified', size: '124kb' },
                   { name: 'fast-auth-plus', status: 'MALICIOUS', size: '8kb' },
                   { name: 'lucide-react', status: 'verified', size: '201kb' },
                   { name: 'framer-motion', status: 'verified', size: '142kb' },
                 ].map((dep, i) => (
                   <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all group">
                      <div className="flex items-center gap-3">
                         <Lucide.Package className="w-4 h-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
                         <span className="text-xs font-mono text-slate-300">{dep.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <span className="text-[0.6rem] font-mono text-slate-600 uppercase">{dep.size}</span>
                         <span className={cn(
                           "text-[0.55rem] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider font-mono leading-none",
                           dep.status === 'verified' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-rose-500/10 text-rose-500 border-rose-500/20 animate-pulse"
                         )}>{dep.status}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-panel p-6 bg-emerald-500/[0.02]">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest font-mono flex items-center gap-2 font-mono">
                 <Lucide.HardDrive className="w-4 h-4 text-emerald-500" /> Resource Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-dark-900 border border-white/5 p-4 rounded-xl shadow-inner">
                    <p className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest mb-1">Compute Load</p>
                    <p className="text-2xl font-mono text-white tracking-widest">12<span className="text-xs text-slate-600">%</span></p>
                 </div>
                 <div className="bg-dark-900 border border-white/5 p-4 rounded-xl shadow-inner">
                    <p className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest mb-1">CVE Database</p>
                    <p className="text-2xl font-mono text-white tracking-widest">98<span className="text-xs text-slate-600">%</span></p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
