import { useState } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const LivenessCheck = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<'idle' | 'success' | 'fail'>('idle');
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setIsScanning(true);
    setScanResult('idle');
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanResult(Math.random() > 0.2 ? 'success' : 'fail');
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-amber-500/5 p-8 rounded-3xl border border-amber-500/10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tighter">Spectral Liveness Scanner</h2>
          <p className="text-slate-400 text-sm italic">Challenge-response biometric verification using high-frequency spectral fingerprinting.</p>
        </div>
        <div className="flex gap-4">
           <div className="flex flex-col items-end">
              <span className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest">Engine Status</span>
              <span className="text-xs font-mono text-emerald-400">NOMINAL_READY</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] to-transparent pointer-events-none" />
           
           <AnimatePresence mode="wait">
             {isScanning ? (
               <motion.div 
                 key="scanning"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.1 }}
                 className="flex flex-col items-center gap-8"
               >
                 <div className="relative w-48 h-48">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/30"
                    />
                    <div className="absolute inset-4 rounded-full border-2 border-amber-500/50 flex items-center justify-center overflow-hidden bg-dark-950">
                       <div className="flex items-end gap-1 px-4 h-12">
                          {[1,2,3,4,5,6,7,8,9,10].map(i => (
                            <motion.div 
                              key={i}
                              animate={{ height: [10, 40, 20, 35, 15] }}
                              transition={{ duration: 0.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                              className="w-1.5 bg-amber-500 rounded-full"
                            />
                          ))}
                       </div>
                    </div>
                 </div>
                 <div className="text-center">
                    <p className="font-mono text-xl font-bold text-amber-500 tracking-tighter mb-2">SCANNING_VOICE_PRINT</p>
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">{progress}% COMPLETED</p>
                 </div>
               </motion.div>
             ) : scanResult === 'success' ? (
               <motion.div 
                 key="success"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="flex flex-col items-center gap-6 text-center"
               >
                 <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <Lucide.CheckCircle2 className="w-12 h-12 text-emerald-500" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Verification Successful</h3>
                    <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">98.9% HUMAN_CONFIDENCE_SCORE</p>
                 </div>
                 <button onClick={() => setScanResult('idle')} className="text-slate-500 hover:text-white text-xs underline font-mono">Reset Engine</button>
               </motion.div>
             ) : scanResult === 'fail' ? (
               <motion.div 
                 key="fail"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="flex flex-col items-center gap-6 text-center"
               >
                 <div className="w-24 h-24 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                    <Lucide.XCircle className="w-12 h-12 text-rose-500" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Cloning Attempt Detected</h3>
                    <p className="text-rose-400 font-mono text-sm tracking-widest uppercase">Hallucinated spectral peaks identified</p>
                 </div>
                 <button onClick={() => setScanResult('idle')} className="text-slate-500 hover:text-white text-xs underline font-mono">Reset Engine</button>
               </motion.div>
             ) : (
               <div className="flex flex-col items-center gap-8 text-center p-8">
                  <div className="w-32 h-32 rounded-full border-4 border-white/5 flex items-center justify-center bg-white/[0.02]">
                     <Lucide.Mic2 className="w-16 h-16 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Ready for Voice Capture</h3>
                    <p className="text-slate-400 text-sm max-w-xs leading-relaxed">System is calibrated for spectral analysis. Please initiate biometric challenge.</p>
                  </div>
                  <button 
                    onClick={startScan}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl shadow-amber-600/20 active:scale-95 border border-white/10"
                  >
                    START_CHALLENGE_RESPONSE
                  </button>
               </div>
             )}
           </AnimatePresence>
        </div>

        <div className="space-y-6">
           <div className="glass-panel p-6">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest font-mono flex items-center gap-2">
                 <Lucide.Fingerprint className="w-4 h-4 text-amber-500" /> Biometric Telemetry
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Spectral Continuity', value: 94, color: 'bg-amber-500' },
                   { label: 'Phoneme Consistency', value: 88, color: 'bg-amber-500' },
                   { label: 'Ambient Noise Floor', value: 12, color: 'bg-emerald-500' },
                   { label: 'Clocking Jitter', value: 5, color: 'bg-emerald-500' },
                 ].map((stat, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center text-[0.65rem] font-bold font-mono uppercase tracking-tighter">
                         <span className="text-slate-500">{stat.label}</span>
                         <span className="text-white">{stat.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: isScanning ? `${Math.random()*100}%` : `${stat.value}%` }}
                           className={cn("h-full", stat.color)}
                         ></motion.div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-panel p-6 bg-amber-500/[0.02]">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest font-mono flex items-center gap-2">
                 <Lucide.History className="w-4 h-4 text-amber-500" /> Security Log
              </h3>
              <div className="space-y-3">
                 {[
                   { msg: 'System.Biometrics initialized...', time: '14:20:01' },
                   { msg: 'Neural.Spectral.Map loaded successfully', time: '14:20:05' },
                   { msg: 'Awaiting challenge-response data...', time: '14:21:12' },
                 ].map((log, i) => (
                   <div key={i} className="flex gap-4 text-[0.6rem] font-mono border-l border-white/10 pl-3">
                      <span className="text-amber-500/50">[{log.time}]</span>
                      <span className="text-slate-400">{log.msg}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
