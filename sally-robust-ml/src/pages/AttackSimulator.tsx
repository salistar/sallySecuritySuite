import { useState } from 'react';
import * as Lucide from 'lucide-react';

export const AttackSimulator = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [targetModel, setTargetModel] = useState('ResNet-50');
  const [attackType, setAttackType] = useState('PGD');

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 text-gradient font-mono">Adversarial Sandbox</h1>
          <p className="text-slate-400 text-sm">Stress-test models against evasion, poisoning, and extraction vectors in a controlled environment.</p>
        </div>
        <div className="flex items-center gap-3 bg-emerald-500/5 px-4 py-2 rounded-xl border border-emerald-500/20">
           <Lucide.Shield className="w-4 h-4 text-emerald-500" />
           <span className="text-[0.6rem] font-bold text-emerald-400 uppercase tracking-widest font-mono">Status: Ready</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 space-y-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-4">Simulation Config</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider ml-1">Target Architecture</label>
              <select 
                value={targetModel}
                onChange={(e) => setTargetModel(e.target.value)}
                className="w-full bg-dark-900 border border-white/5 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all font-mono text-sm"
              >
                <option>ResNet-50</option>
                <option>BERT-Base</option>
                <option>ViT-Large</option>
                <option>Llama-3 (8B)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider ml-1">Attack Vector</label>
              <select 
                value={attackType}
                onChange={(e) => setAttackType(e.target.value)}
                className="w-full bg-dark-900 border border-white/5 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all font-mono text-sm"
              >
                <option>PGD (Projected Gradient Descent)</option>
                <option>FGSM (Fast Gradient Sign Method)</option>
                <option>DeepFool</option>
                <option>Model Extraction (Query-based)</option>
              </select>
            </div>

            <button 
              onClick={handleSimulate}
              disabled={isSimulating}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[0.7rem] mt-4"
            >
              {isSimulating ? <Lucide.RefreshCw className="w-4 h-4 animate-spin" /> : <Lucide.Zap className="w-4 h-4" />}
              {isSimulating ? 'Executing Attack...' : 'Launch Simulation'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 border-emerald-500/10 h-full relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-all duration-[2000ms]">
                <Lucide.Target className="w-32 h-32 text-emerald-500" />
             </div>
             
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
               <Lucide.Activity className="w-4 h-4 text-emerald-500" /> Live Feed
             </h3>

             {isSimulating ? (
               <div className="space-y-4 animate-in fade-in duration-500">
                  <div className="flex items-center gap-3 text-emerald-500 font-mono text-xs">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     Generating perturbations...
                  </div>
                  <div className="h-1 bg-dark-900 rounded-full overflow-hidden border border-white/5">
                     <div className="h-full bg-emerald-500 animate-progress" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-8">
                     <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
                        <p className="text-[0.6rem] text-slate-500 uppercase font-bold mb-1">Success Prob.</p>
                        <p className="text-xl font-mono text-white">84.2%</p>
                     </div>
                     <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
                        <p className="text-[0.6rem] text-slate-500 uppercase font-bold mb-1">Perturbation</p>
                        <p className="text-xl font-mono text-white">ε=0.031</p>
                     </div>
                  </div>
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center h-48 text-slate-600 space-y-3">
                  <Lucide.Lock className="w-8 h-8 opacity-20" />
                  <p className="text-xs font-mono uppercase tracking-widest">Awaiting Command</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
