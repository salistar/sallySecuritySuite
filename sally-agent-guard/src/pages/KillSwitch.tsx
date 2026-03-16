import { useState } from 'react';
import { Power, ShieldAlert, Zap, RefreshCw, AlertTriangle, Lock, Terminal, ArrowRight, ShieldCheck, Activity, BrainCircuit } from 'lucide-react';
import { cn } from '../lib/utils';

export const KillSwitch = () => {
  const [isPriming, setIsPriming] = useState(false);
  const [protocolActive, setProtocolActive] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handlePrime = () => {
    setIsPriming(true);
    setStatus('Negotiating agent suspension protocols...');
    setTimeout(() => {
      setIsPriming(false);
      setProtocolActive(true);
      setStatus('KILL SWITCH ACTIVE: 14 agents successfully quarantined.');
    }, 3000);
  };

  const handleReset = () => {
    setProtocolActive(false);
    setStatus(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 font-mono text-gradient">Emergency Kill Switch</h1>
          <p className="text-slate-400 text-sm">Immediate suspension of all autonomous agent runtimes across the neural network.</p>
        </div>
        <div className="flex items-center gap-3 bg-red-500/5 px-4 py-2 rounded-xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
           <BrainCircuit className="w-4 h-4 text-red-500" />
           <span className="text-[0.6rem] font-bold text-red-400 uppercase tracking-widest leading-none">Protocol: Armed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className={cn(
             "glass-panel p-12 border-red-500/20 relative overflow-hidden flex flex-col items-center justify-center transition-all duration-700",
             protocolActive ? "bg-red-500/10 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.2)]" : "bg-red-500/[0.01]"
           )}>
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Power className="w-64 h-64 text-red-500" />
              </div>

              {!protocolActive ? (
                <div className="text-center space-y-8 relative z-10 max-w-sm">
                   <div className="relative inline-block">
                      <div className="absolute inset-0 bg-red-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                      <button 
                        onClick={handlePrime}
                        disabled={isPriming}
                        className="relative w-32 h-32 rounded-full bg-dark-900 border-4 border-red-600 flex items-center justify-center group hover:bg-red-600 transition-all active:scale-95 shadow-2xl shadow-red-600/30 overflow-hidden"
                      >
                         <div className="absolute inset-x-0 bottom-0 h-0 bg-red-500/20 group-hover:h-full transition-all duration-700"></div>
                         {isPriming ? <RefreshCw className="w-10 h-10 text-white animate-spin" /> : <Power className="w-10 h-10 text-red-600 group-hover:text-white transition-colors" />}
                      </button>
                   </div>
                   
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Master Kill Protocol</h3>
                      <p className="text-xs text-slate-500 italic">Press to initiate immediate agent sandboxing and privilege revocation across the cluster.</p>
                   </div>

                   {status && (
                     <div className="p-3 bg-white/5 border border-white/5 rounded-xl animate-pulse">
                        <p className="text-[0.65rem] font-mono text-slate-400">{status}</p>
                     </div>
                   )}
                </div>
              ) : (
                <div className="text-center space-y-8 relative z-10 animate-in zoom-in duration-500">
                   <div className="w-24 h-24 bg-red-600 rounded-2xl mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] rotate-45 border-4 border-white/20">
                      <Lock className="w-10 h-10 text-white -rotate-45" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">System Locked</h3>
                      <p className="text-sm text-red-400 font-bold uppercase tracking-widest">{status}</p>
                   </div>
                   <button 
                    onClick={handleReset}
                    className="glass-button text-[0.6rem] font-bold uppercase tracking-[0.3em] border-red-500/20 hover:border-red-500 transition-all px-8 py-3"
                   >
                     Reset Protocol
                   </button>
                </div>
              )}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Sandboxing Integrity', value: '100%', status: 'Active', icon: ShieldCheck },
                { label: 'Network Latency', value: '0.4ms', status: 'Optimal', icon: Zap },
              ].map((m, i) => (
                <div key={i} className="glass-panel p-5 border-white/5 flex items-center gap-4 group hover:bg-white/[0.02] transition-colors">
                   <div className="w-10 h-10 rounded-xl bg-slate-500/10 flex items-center justify-center text-slate-500 group-hover:text-red-500 transition-colors">
                      <m.icon className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[0.6rem] text-slate-500 font-bold uppercase tracking-widest">{m.label}</p>
                      <div className="flex items-center gap-2">
                         <span className="text-lg font-mono font-bold text-white">{m.value}</span>
                         <span className="text-[0.5rem] font-bold text-emerald-500 uppercase tracking-tighter">{m.status}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
           <div className="glass-panel p-6 border-red-500/10">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-red-500" /> Execution Chain
              </h3>
              <div className="space-y-4">
                 {[
                   { step: '01', action: 'Wipe Inference Queues', state: protocolActive ? 'COMPLETE' : 'READY' },
                   { step: '02', action: 'Revoke JWT Keys', state: protocolActive ? 'COMPLETE' : 'READY' },
                   { step: '03', action: 'Isolated Sandbox Pivot', state: protocolActive ? 'COMPLETE' : 'READY' },
                   { step: '04', action: 'Signal Safety Director', state: protocolActive ? 'COMPLETE' : 'READY' },
                 ].map((cfg, i) => (
                   <div key={i} className="flex justify-between items-center p-3 bg-white/[0.02] rounded-xl border border-white/5 transition-all group hover:bg-white/5">
                      <div className="flex items-center gap-3">
                         <span className="text-[0.6rem] font-mono text-red-500/50">#{cfg.step}</span>
                         <p className="text-[0.65rem] text-slate-300 font-bold uppercase tracking-tight">{cfg.action}</p>
                      </div>
                      <p className={cn(
                        "text-[0.55rem] font-mono font-bold tracking-tighter",
                        cfg.state === 'COMPLETE' ? "text-emerald-500" : "text-slate-500"
                      )}>{cfg.state}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-6 bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                 <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-tight font-mono">Safety Note</h4>
              <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-red-500/30 pl-4 mb-4">
                "The Kill Switch is the ultimate fail-safe. It doesn't just block communication; it initiates a hard-shutdown of the latent space processing units to prevent recursive feedback loops."
              </p>
              <button className="text-[0.6rem] font-bold text-red-500 uppercase tracking-[0.2em] flex items-center gap-1 hover:translate-x-1 transition-transform">
                Full Protocol PDF <ArrowRight className="w-3 h-3" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
