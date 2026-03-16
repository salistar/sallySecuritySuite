import { useState } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const ThreatHunter = () => {
  const [activeHunter, setActiveHunter] = useState(false);
  const [huntLog, setHuntLog] = useState<{ id: string, msg: string, risk: 'low' | 'med' | 'high' }[]>([]);

  const toggleHunter = () => {
    if (!activeHunter) {
      setActiveHunter(true);
      const hunterInterval = setInterval(() => {
         const newLog = {
            id: `H-${Math.floor(Math.random() * 9000) + 1000}`,
            msg: [
               'Analyzing encrypted payload in subnet_alpha...',
               'Correlating IP addresses with TOR exit nodes...',
               'Reverse-engineering obfuscated agent behavior...',
               'Scanning for lateral movement patterns...',
               'Verifying zero-day vulnerability signatures...'
            ][Math.floor(Math.random() * 5)],
            risk: (['low', 'med', 'high'] as const)[Math.floor(Math.random() * 3)]
         };
         setHuntLog(prev => [newLog, ...prev].slice(0, 10));
      }, 1500);
      (window as any).hunterInterval = hunterInterval;
    } else {
      setActiveHunter(false);
      clearInterval((window as any).hunterInterval);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-rose-500/5 p-8 rounded-3xl border border-rose-500/10 shadow-xl shadow-rose-500/5">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tighter italic">Autonomous Threat Hunter</h2>
          <p className="text-slate-400 text-sm italic border-l-2 border-rose-500/50 pl-4 uppercase tracking-widest text-[0.65rem] opacity-70">Hunting malicious actors using deep-neural correlation engines and SOAR automation.</p>
        </div>
        <button 
          onClick={toggleHunter}
          className={cn(
             "px-10 py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95 border uppercase tracking-[0.2em] text-xs font-mono",
             activeHunter 
               ? "bg-rose-500 text-white border-white/20 shadow-rose-500/20" 
               : "bg-dark-900 text-slate-400 border-white/10 hover:border-rose-500/50"
          )}
        >
          {activeHunter ? 'DEACTIVATE_HUNTER' : 'ACTIVATE_SENTINEL'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 glass-panel p-8 min-h-[500px] flex flex-col relative overflow-hidden font-mono border-rose-500/10">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-rose-500">
               <Lucide.Crosshair className="w-64 h-64" />
            </div>

            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-sm bg-rose-500 animate-pulse" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest leading-none">Live Hunt Log</h3>
               </div>
               <div className="text-[0.6rem] text-slate-600 font-bold uppercase tracking-widest">v2.0 // SOAR_ENGINE_READY</div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-4">
               <AnimatePresence>
                 {huntLog.map((log) => (
                   <motion.div 
                     key={log.id}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0 }}
                     className="bg-black/40 border-l-2 border-rose-500/50 p-4 rounded-r-xl flex items-center justify-between group hover:bg-rose-500/5 transition-colors"
                   >
                      <div className="flex flex-col gap-1">
                         <span className="text-[0.6rem] font-bold text-rose-500">{log.id} // HUNT_EVENT</span>
                         <span className="text-[0.65rem] text-slate-300 italic group-hover:text-white transition-colors">"{log.msg}"</span>
                      </div>
                      <span className={cn(
                        "text-[0.55rem] font-bold px-1.5 py-0.5 rounded uppercase border font-mono",
                        log.risk === 'high' ? "bg-rose-500/20 text-rose-500 border-rose-500/30" : 
                        log.risk === 'med' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" : 
                        "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
                      )}>{log.risk}</span>
                   </motion.div>
                 ))}
               </AnimatePresence>
               {huntLog.length === 0 && (
                 <div className="h-full flex flex-col items-center justify-center gap-6 opacity-20">
                    <Lucide.ScanSearch className="w-20 h-20" />
                    <p className="uppercase tracking-[0.4em] text-xs">Awaiting_Neural_Sync</p>
                 </div>
               )}
            </div>
         </div>

         <div className="space-y-6">
            <div className="glass-panel p-6 border-rose-500/10">
               <h3 className="text-xs font-bold text-white mb-6 font-mono uppercase tracking-widest flex items-center gap-2">
                  <Lucide.Target className="w-4 h-4 text-rose-500" /> Hunt Calibration
               </h3>
               <div className="space-y-5">
                  {[
                    { label: 'Neural Precision', value: 98, color: 'bg-rose-500' },
                    { label: 'Latency Offset', value: 12, color: 'bg-rose-500' },
                    { label: 'False Positive Ratio', value: 0.02, color: 'bg-emerald-500' },
                    { label: 'Threat Surface Coverage', value: 100, color: 'bg-emerald-500' },
                  ].map((s, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[0.6rem] font-mono text-slate-500 uppercase tracking-tighter">
                          <span>{s.label}</span>
                          <span className="text-white">{s.value}%</span>
                       </div>
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: `${s.value}%` }}
                             className={cn("h-full", s.color)}
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="glass-panel p-6 bg-gradient-to-br from-rose-900/10 to-transparent">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center border border-rose-500/20 shadow-lg shadow-rose-500/10">
                     <Lucide.Cpu className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono italic">Threat DB Sync</h4>
                    <p className="text-[0.65rem] text-slate-500 font-mono mt-1 opacity-80 uppercase font-mono tracking-tight leading-none italic">Updated 4s ago // 1.2M IOCs</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
