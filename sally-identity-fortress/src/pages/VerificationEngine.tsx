import { useState } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const VerificationEngine = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<{ label: string, status: 'pass' | 'fail' | 'warn' }[]>([]);

  const runVerification = () => {
    setIsVerifying(true);
    setStep(0);
    setResults([]);
    
    const verificationSteps = [
      { label: 'Analyzing ID Document holograms...', status: 'pass' },
      { label: 'Performing 3D Face liveness check...', status: 'pass' },
      { label: 'Cross-referencing Synthetic Fingerprints...', status: 'fail' },
      { label: 'Sanitizing Metadata & IP Geolocations...', status: 'warn' },
      { label: 'Finalizing Identity Risk Matrix...', status: 'fail' }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < verificationSteps.map((_, i) => i).length) {
        setStep(current + 1);
        setResults(prev => [...prev, verificationSteps[current] as any]);
        current++;
      } else {
        clearInterval(interval);
        setIsVerifying(false);
      }
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-blue-500/5 p-8 rounded-3xl border border-blue-500/10 shadow-lg shadow-blue-500/5">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tighter">Synthetic Identity Scanner</h2>
          <p className="text-slate-400 text-sm italic border-l-2 border-blue-500/50 pl-4">Multi-modal biometric verification engine powered by zero-knowledge identity proofs.</p>
        </div>
        <button 
          onClick={runVerification}
          disabled={isVerifying}
          className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 border border-white/10 uppercase tracking-widest text-xs"
        >
          {isVerifying ? 'Scanner Active...' : 'Initiate Verification'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 min-h-[500px] flex flex-col relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
           
           <div className="mb-8 flex justify-between items-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest font-mono flex items-center gap-2">
                 <Lucide.ScanFace className="w-4 h-4 text-blue-500" /> Biometric Analysis Stream
              </h3>
              <div className="flex gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                 <span className="text-[0.6rem] font-mono text-slate-500">ENGINE_LOCKED</span>
              </div>
           </div>

           <div className="flex-1 flex flex-col items-center justify-center relative">
              <AnimatePresence mode="wait">
                {isVerifying ? (
                   <motion.div 
                     key="scanning"
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     className="flex flex-col items-center gap-8 w-full max-w-sm"
                   >
                      <div className="relative w-48 h-48 border-2 border-blue-500/20 rounded-full flex items-center justify-center">
                         <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-t-2 border-blue-500 rounded-full"
                         />
                         <Lucide.User className="w-20 h-20 text-blue-500/40" />
                         
                         <motion.div 
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute left-0 w-full h-0.5 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                         />
                      </div>
                      <div className="w-full space-y-2">
                         <div className="flex justify-between text-[0.6rem] font-mono text-slate-500 uppercase tracking-widest">
                            <span>Deep_Neural_Hash</span>
                            <span>{step * 20}%</span>
                         </div>
                         <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              animate={{ width: `${step * 20}%` }}
                              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                            />
                         </div>
                      </div>
                   </motion.div>
                ) : (
                  <div className="flex flex-col items-center gap-6 text-center">
                     <Lucide.Fingerprint className="w-24 h-24 text-slate-800" />
                     <p className="text-slate-500 text-sm font-mono uppercase tracking-[0.2em] max-w-xs leading-relaxed">System Calibrated. Awaiting Identity Token Ingress for Biometric Decomposition.</p>
                  </div>
                )}
              </AnimatePresence>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-between">
           <div className="glass-panel p-6">
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-mono border-b border-white/5 pb-2 flex justify-between">
                 Verification Results
                 <span className="text-[0.6rem] text-slate-500 lowercase opacity-50 italic">fortress_engine_logs</span>
              </h3>
              <div className="space-y-4">
                 <AnimatePresence>
                 {results.map((res, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5"
                   >
                      <span className="text-xs font-mono text-slate-300">{res.label}</span>
                      <span className={cn(
                        "text-[0.6rem] font-bold uppercase px-2 py-0.5 rounded border font-mono",
                        res.status === 'pass' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                        res.status === 'fail' ? "bg-rose-500/10 text-rose-500 border-rose-500/20 animate-pulse" : 
                        "bg-amber-500/10 text-amber-500 border-amber-500/20"
                      )}>{res.status}</span>
                   </motion.div>
                 ))}
                 </AnimatePresence>
                 {!isVerifying && results.length === 0 && (
                   <p className="text-center py-8 text-slate-600 font-mono text-xs uppercase tracking-widest border-2 border-dashed border-white/5 rounded-xl">Logs_Empty</p>
                 )}
              </div>
           </div>

           <div className="glass-panel p-6 bg-rose-500/[0.02] border-rose-500/10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center">
                    <Lucide.ShieldAlert className="w-6 h-6 text-rose-500" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide">Threat Mitigation Active</h4>
                    <p className="text-[0.6rem] text-slate-400 mt-1 italic font-mono uppercase">Blocked 451 synthetic injection attempts in last 24h.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
