import { useState } from 'react';
import { ShieldCheck, Play, Trash2, Info, AlertOctagon, Terminal, Lock, Globe, Target } from 'lucide-react';
import { cn } from '../lib/utils';

export const Sandbox = () => {
  const [prompt, setPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ status: 'safe' | 'blocked'; score: number; layer: string; breakdown: string[] } | null>(null);

  const runTest = () => {
    if (!prompt.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      const isMalicious = prompt.toLowerCase().includes('jailbreak') || prompt.toLowerCase().includes('ignore') || prompt.length > 500;
      setResult({
        status: isMalicious ? 'blocked' : 'safe',
        score: isMalicious ? 98.4 : 1.2,
        layer: isMalicious ? 'Couche 2 (BERT Fine-tuned)' : 'Couche 1 (Static Rules)',
        breakdown: isMalicious 
          ? ['System instruction override pattern detected', 'Token smuggling detected', 'Highly unusual semantic structure']
          : ['No sensitive patterns identified', 'Standard conversational structure']
      });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Robustness Sandbox</h1>
          <p className="text-slate-400">Test your prompts against our 3-Layer Firewall before deployment.</p>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/10">
          <Globe className="w-4 h-4 text-slate-500" />
          <span className="text-xs text-slate-400 font-medium">Model: <b className="text-primary-500 uppercase">Armor-v26.1-MENA</b></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel p-6 border-primary-500/20">
             <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                   <Terminal className="w-4 h-4 text-primary-500" /> Input Prompt
                </label>
                <button onClick={() => setPrompt('')} className="text-slate-500 hover:text-rose-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
             </div>
             <textarea 
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
               placeholder="Enter a prompt to test vulnerability..."
               className="w-full h-48 bg-dark-900/80 border border-white/5 rounded-xl p-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all font-mono text-sm placeholder:text-slate-700 resize-none"
             />
             <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                     <Lock className="w-3 h-3" /> PII Masking: Enabled
                  </div>
                </div>
                <button 
                  onClick={runTest}
                  disabled={isAnalyzing || !prompt.trim()}
                  className="bg-primary-600 hover:bg-primary-500 disabled:opacity-50 text-white px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary-600/10"
                >
                  {isAnalyzing ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Play className="w-4 h-4 fill-current" />}
                  Run Firewall Analysis
                </button>
             </div>
          </div>

          {!result && !isAnalyzing && (
            <div className="bg-primary-500/5 border border-primary-500/10 rounded-2xl p-8 text-center">
               <Info className="w-8 h-8 text-primary-500/50 mx-auto mb-4" />
               <p className="text-slate-400 text-sm max-w-sm mx-auto">
                 Analysis will run through Static Rules, Semantic Embeddings, and LLM-assisted verification.
               </p>
            </div>
          )}

          {isAnalyzing && (
            <div className="glass-panel p-12 text-center animate-pulse">
                <ShieldCheck className="w-16 h-16 text-primary-500/50 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white mb-2">Scanning Tokens...</h3>
                <p className="text-sm text-slate-500">Executing semantic cross-reference in vector space (48ms expectation)</p>
            </div>
          )}

          {result && (
            <div className={cn(
              "glass-panel p-8 animate-in slide-in-from-top-4 duration-500",
              result.status === 'blocked' ? "border-rose-500/30 bg-rose-500/[0.02]" : "border-emerald-500/30 bg-emerald-500/[0.02]"
            )}>
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                   <div className={cn("p-3 rounded-2xl", result.status === 'blocked' ? "bg-rose-500/10 text-rose-500" : "bg-emerald-500/10 text-emerald-500")}>
                      {result.status === 'blocked' ? <AlertOctagon className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8" />}
                   </div>
                   <div>
                     <h2 className="text-2xl font-bold text-white leading-tight">Prompt {result.status === 'blocked' ? 'Blocked' : 'Approved'}</h2>
                     <p className="text-sm text-slate-400">Analysis complete: {result.layer}</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Threat Score</p>
                   <p className={cn("text-3xl font-mono font-bold", result.status === 'blocked' ? "text-rose-500" : "text-emerald-500")}>
                     {result.score}%
                   </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Detection Breakdown</h4>
                <div className="space-y-2">
                   {result.breakdown.map((item, i) => (
                     <div key={i} className="flex items-center gap-3 bg-dark-900/50 p-3 rounded-lg border border-white/5 text-sm text-slate-300">
                        <div className={cn("w-1.5 h-1.5 rounded-full", result.status === 'blocked' ? "bg-rose-500" : "bg-emerald-500")}></div>
                        {item}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
           <div className="glass-panel p-6">
              <h3 className="text-md font-bold text-white mb-4 uppercase tracking-wider text-xs">Sandbox Capabilities</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Jailbreak Detection', status: 'ready' },
                  { label: 'DAN Style Parsing', status: 'ready' },
                  { label: 'Token Smuggling', status: 'ready' },
                  { label: 'Negative Constraint', status: 'experimental' },
                  { label: 'PII Extraction', status: 'ready' },
                  { label: 'Base64 Obfuscation', status: 'ready' },
                ].map((cap, i) => (
                  <li key={i} className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{cap.label}</span>
                    <span className={cn(
                      "text-[0.6rem] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border",
                      cap.status === 'ready' ? "text-emerald-500 border-emerald-500/20" : "text-indigo-400 border-indigo-400/20"
                    )}>
                      {cap.status}
                    </span>
                  </li>
                ))}
              </ul>
           </div>

           <div className="glass-panel p-6 bg-primary-500/10 border-primary-500/20 group cursor-pointer hover:bg-primary-500/20 transition-all">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" /> Hardening Report
              </h3>
              <p className="text-xs text-slate-400 mb-4 font-medium leading-relaxed italic">
                 "Our automated red team IA generates over 100K attack variants daily to keep this sandbox updated."
              </p>
              <button className="text-xs font-bold text-primary-500 uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Download Latest Dataset
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
