import { useState } from 'react';
import { Share2, Eye, Zap, Search, AlertCircle, RefreshCw, Layers, Sparkles, Terminal, ArrowRight, Binary } from 'lucide-react';
import { cn } from '../lib/utils';

export const DecisionPaths = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [traceId, setTraceId] = useState('');
  const [results, setResults] = useState<{ step: string; weight: number; status: string; logic: string }[] | null>(null);

  const handleAnalyze = () => {
    if (!traceId.trim()) return;
    setIsAnalyzing(true);
    setResults(null);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults([
        { step: 'Input Normalization', weight: 0.12, status: 'Neutral', logic: 'Features scaled to [-1, 1] range successfully.' },
        { step: 'Layer 1: Pattern Sync', weight: 0.45, status: 'Positive', logic: 'High semantic overlap with "verified_actor" cluster.' },
        { step: 'Layer 2: Identity Hash', weight: -0.15, status: 'Negative', logic: 'Minor variance in geo-location metadata detected.' },
        { step: 'Clustering Output', weight: 0.88, status: 'Positive', logic: 'Final attribution confirms 94% approval confidence.' },
      ]);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 font-mono text-gradient">Path Decomposition</h1>
          <p className="text-slate-400 text-sm">Step-by-step audit of the neural decision chain for any specific prediction ID.</p>
        </div>
        <div className="flex items-center gap-3 bg-amber-500/5 px-4 py-2 rounded-xl border border-amber-500/20">
           <Binary className="w-4 h-4 text-amber-500" />
           <span className="text-[0.6rem] font-bold text-amber-400 uppercase tracking-widest">Trace Mode: Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="glass-panel p-8 border-amber-500/20 bg-amber-500/[0.01] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-all duration-[2000ms]">
                 <Share2 className="w-48 h-48 text-amber-500" />
              </div>

              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Decomposition Engine</h3>
              
              <div className="space-y-6 relative z-10">
                 <div className="relative">
                    <input 
                      type="text" 
                      value={traceId}
                      onChange={(e) => setTraceId(e.target.value)}
                      placeholder="Enter Prediction ID (e.g., DEC-921)..."
                      className="w-full bg-dark-900 border border-white/5 rounded-2xl py-5 px-6 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all font-mono text-sm placeholder:text-slate-700 shadow-inner"
                    />
                    <button 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || !traceId.trim()}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white px-8 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-amber-600/20 uppercase tracking-widest text-[0.65rem]"
                    >
                      {isAnalyzing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                      Decompose
                    </button>
                 </div>

                 <div className="flex flex-wrap gap-4 px-2">
                    <button className="text-[0.6rem] font-bold text-slate-500 hover:text-amber-400 uppercase tracking-widest transition-colors flex items-center gap-1.5">
                       <Layers className="w-3 h-3" /> Visual Flow
                    </button>
                    <div className="w-px h-3 bg-white/5"></div>
                    <button className="text-[0.6rem] font-bold text-slate-500 hover:text-amber-400 uppercase tracking-widest transition-colors flex items-center gap-1.5">
                       <Terminal className="w-3 h-3" /> Logic Raw Logs
                    </button>
                 </div>
              </div>
           </div>

           {results && (
             <div className="space-y-4 animate-in slide-in-from-top-4 duration-700">
                <div className="flex items-center justify-between px-2">
                   <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 font-mono">
                      <Sparkles className="w-4 h-4 text-amber-500" /> Neural State Trace
                   </h3>
                </div>
                <div className="space-y-3">
                  {results.map((item, i) => (
                    <div key={i} className="glass-panel p-5 border-l-4 border-l-amber-500 transition-all hover:bg-white/[0.02] flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 flex items-center justify-center text-xs font-mono font-bold text-amber-500 shrink-0">
                          {i + 1}
                       </div>
                       <div className="flex-1">
                          <p className="text-sm font-bold text-white mb-1">{item.step}</p>
                          <p className="text-xs text-slate-500 italic">"{item.logic}"</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[0.5rem] text-slate-500 font-bold uppercase mb-1">Impact</p>
                          <span className={cn(
                            "text-xs font-mono font-bold px-2 py-0.5 rounded",
                            item.status === 'Positive' ? "bg-emerald-500/10 text-emerald-500" : 
                            item.status === 'Negative' ? "bg-rose-500/10 text-rose-500" : "bg-slate-500/10 text-slate-500"
                          )}>
                             {item.weight > 0 ? '+' : ''}{item.weight}
                          </span>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
           )}
        </div>

        <div className="lg:col-span-2 space-y-6">
           <div className="glass-panel p-6 border-amber-500/10 relative overflow-hidden">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-12 flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-500" /> Local Attribution (LIME)
              </h3>
              
              <div className="space-y-5">
                 {[
                   { feature: 'User_Actor', weight: 82 },
                   { feature: 'Geo_Cluster', weight: -34 },
                   { feature: 'Device_Id', weight: 56 },
                   { feature: 'Auth_Stack', weight: 12 },
                 ].map((feat, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[0.6rem] font-bold uppercase tracking-widest">
                         <span className="text-slate-400">{feat.feature}</span>
                         <span className={feat.weight > 0 ? 'text-emerald-500' : 'text-rose-500'}>{feat.weight}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <div 
                           className={cn("h-full rounded-full transition-all duration-[2000ms]", feat.weight > 0 ? 'bg-amber-500' : 'bg-rose-500')} 
                           style={{ width: `${Math.abs(feat.weight)}%` }}
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-6 bg-amber-950/20 border border-amber-500/20 rounded-2xl relative group">
              <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-widest flex items-center gap-2">
                 <AlertCircle className="w-3 h-3" /> Transparency Note
              </h4>
              <p className="text-[0.65rem] text-slate-400 leading-relaxed italic border-l border-amber-500/50 pl-4">
                "Neural decisions are often high-dimensional. LIME provides a local linear approximation, allowing us to see WHY a specific input was flagged without needing to understand the entire global weights."
              </p>
              <button className="mt-4 text-[0.6rem] font-bold text-amber-400 uppercase tracking-[0.2em] flex items-center gap-1 hover:translate-x-1 transition-transform">
                Read whitepaper <ArrowRight className="w-3 h-3" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
