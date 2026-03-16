import { useState } from 'react';
import { Clock, FileCheck, AlertTriangle, ExternalLink, Database, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

export const VerifyPage = () => {
  const [text, setText] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [results, setResults] = useState<{ id: string; claim: string; status: 'verified' | 'refuted' | 'unknown'; score: number; source: string }[] | null>(null);

  const handleVerify = () => {
    if (!text.trim()) return;
    setIsVerifying(true);
    setResults(null);
    
    setTimeout(() => {
      setIsVerifying(false);
      setResults([
        { id: '1', claim: 'The population of Tokyo is 14 million.', status: 'verified', score: 99, source: 'Official Stats Japan 2025' },
        { id: '2', claim: 'Capital of France is Lyon.', status: 'refuted', score: 0, source: 'French Constitution Art. 2' },
        { id: '3', claim: 'New AI regulation (Act 090-B) takes effect tomorrow.', status: 'unknown', score: 45, source: 'No verified official logs found' },
      ]);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Post-Generation Verification</h1>
          <p className="text-slate-400">Atomic claim decomposition and cross-referencing moteur.</p>
        </div>
        <div className="flex items-center gap-3 bg-dark-800 p-2 rounded-xl border border-white/5">
           <Cpu className="w-4 h-4 text-emerald-500" />
           <span className="text-xs font-bold text-slate-300">GPU Mode: <b className="text-emerald-500">Accelerated</b></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="glass-panel p-6">
             <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-500" /> AI Generated Content
                </label>
                <div className="text-[0.65rem] text-slate-600 font-mono">15% Expected Hallucination Rate</div>
             </div>
             <textarea 
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Paste AI response here to verify facts..."
               className="w-full h-64 bg-dark-900/50 border border-white/5 rounded-xl p-6 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all font-sans text-md placeholder:text-slate-700 resize-none"
             />
             <div className="mt-6 flex justify-end">
                <button 
                  onClick={handleVerify}
                  disabled={isVerifying || !text.trim()}
                  className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-3 shadow-xl shadow-emerald-600/10"
                >
                  {isVerifying ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <FileCheck className="w-5 h-5" />}
                  Verify Atomic Claims
                </button>
             </div>
          </div>

          {results && (
            <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
               <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Validation Results <span className="text-xs text-slate-500 font-normal">({results.length} claims extracted)</span>
               </h3>
               <div className="space-y-3">
                 {results.map((item) => (
                   <div key={item.id} className={cn(
                     "glass-panel p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4",
                     item.status === 'verified' ? "border-l-emerald-500" : item.status === 'refuted' ? "border-l-rose-500" : "border-l-amber-500"
                   )}>
                      <div className="flex-1 space-y-1">
                        <p className="text-slate-200 font-medium">"{item.claim}"</p>
                        <div className="flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-widest">
                           <span className={cn(item.status === 'verified' ? "text-emerald-500" : item.status === 'refuted' ? "text-rose-500" : "text-amber-500")}>
                             {item.status}
                           </span>
                           <span className="text-slate-600">Source: {item.source}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="text-right">
                           <p className="text-[0.6rem] text-slate-500 font-bold uppercase mb-1">Score</p>
                           <p className={cn("text-xl font-mono font-bold", item.score > 80 ? "text-emerald-500" : "text-rose-500")}>
                             {item.score}%
                           </p>
                         </div>
                         <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                           <ExternalLink className="w-4 h-4" />
                         </button>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
           <div className="glass-panel p-6">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Verification Modes</h3>
              <div className="space-y-2">
                 {[
                   { id: 'gen', label: 'General / Wikipedia', active: true },
                   { id: 'med', label: 'Medical (PubMed)', active: false },
                   { id: 'leg', label: 'Legal (Legifrance)', active: false },
                   { id: 'fin', label: 'Financial (Reuters)', active: false },
                 ].map((mode) => (
                   <button key={mode.id} className={cn(
                     "w-full px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between",
                     mode.active ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-dark-900 border-white/5 text-slate-500 hover:border-white/10"
                   )}>
                     {mode.label}
                     {mode.active && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>}
                   </button>
                 ))}
              </div>
           </div>

           <div className="glass-panel p-6 border-emerald-500/20 bg-emerald-500/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-500">
                    <Clock className="w-4 h-4" />
                 </div>
                 <h4 className="text-sm font-bold text-white">Trust Latency</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Atomic cross-referencing takes 500ms per statement. Batch processing enabled for documents {'>'} 2k words.
              </p>
              <div className="h-1 bg-dark-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[65%]"></div>
              </div>
              <div className="mt-2 flex justify-between text-[0.6rem] font-bold text-slate-500 uppercase">
                <span>Synchronous</span>
                <span>3s Queue</span>
              </div>
           </div>

           <div className="glass-panel p-6 group cursor-pointer hover:border-emerald-500/30 transition-all">
              <AlertTriangle className="w-6 h-6 text-amber-500 mb-3" />
              <h4 className="text-sm font-bold text-white mb-2">Hallucination Threshold</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Settings claim rejection if source match score is below 40%. This is the current enterprise baseline.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};
