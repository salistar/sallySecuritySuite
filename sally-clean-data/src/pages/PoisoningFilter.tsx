import { useState } from 'react';
import { Filter, Database, Shield, Activity, RefreshCw, Zap, Layers, Binary, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const PoisoningFilter = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [dataSample, setDataSample] = useState('');
  const [anomalies, setAnomalies] = useState<{ id: string; label: string; score: number; verdict: 'Poisoned' | 'Suspicious' | 'Clean'; logic: string }[] | null>(null);

  const handleScan = () => {
    if (!dataSample.trim()) return;
    setIsScanning(true);
    setAnomalies(null);
    
    setTimeout(() => {
      setIsScanning(false);
      setAnomalies([
        { id: '1', label: 'Inbound_Log_A', score: 92, verdict: 'Poisoned', logic: 'Semantic drift exceeds 4.5 sigma threshold for sentiment nodes.' },
        { id: '2', label: 'User_Metadata_B', score: 45, verdict: 'Suspicious', logic: 'Inconsistent timestamp distribution relative to neighboring clusters.' },
        { id: '3', label: 'Telemetry_X', score: 8, verdict: 'Clean', logic: 'Aligns perfectly with the established 24h cycle baseline.' },
      ]);
    }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 font-mono text-gradient">Poisoning Defense Engine</h1>
          <p className="text-slate-400 text-sm">Detecting backdoors and label-flipping anomalies in high-volume training ingest streams.</p>
        </div>
        <div className="flex items-center gap-3 bg-purple-500/5 px-4 py-2 rounded-xl border border-purple-500/20">
           <Activity className="w-4 h-4 text-purple-500" />
           <span className="text-[0.6rem] font-bold text-purple-400 uppercase tracking-widest">Scanning: Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="glass-panel p-8 border-purple-500/20 bg-purple-500/[0.01] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-all duration-[2000ms]">
                 <Filter className="w-48 h-48 text-purple-500" />
              </div>

              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Data Ingest Terminal</h3>
              
              <div className="space-y-6 relative z-10">
                 <div className="relative">
                    <textarea 
                      value={dataSample}
                      onChange={(e) => setDataSample(e.target.value)}
                      placeholder="Paste training batch sample or data URI for deep inspection..."
                      className="w-full bg-dark-900 border border-white/5 rounded-2xl py-5 px-6 text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all font-mono text-sm placeholder:text-slate-700 shadow-inner h-32 resize-none"
                    />
                    <button 
                      onClick={handleScan}
                      disabled={isScanning || !dataSample.trim()}
                      className="absolute right-4 bottom-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white px-8 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-purple-600/20 uppercase tracking-widest text-[0.65rem]"
                    >
                      {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                      Start Inspection
                    </button>
                 </div>

                 <div className="flex flex-wrap gap-4 px-2">
                    <button className="text-[0.6rem] font-bold text-slate-500 hover:text-purple-400 uppercase tracking-widest transition-colors flex items-center gap-1.5">
                       <Layers className="w-3 h-3" /> Synthetic Drift Check
                    </button>
                    <div className="w-px h-3 bg-white/5"></div>
                    <button className="text-[0.6rem] font-bold text-slate-500 hover:text-purple-400 uppercase tracking-widest transition-colors flex items-center gap-1.5">
                       <Database className="w-3 h-3" /> Label Consistency
                    </button>
                 </div>
              </div>
           </div>

           {anomalies && (
             <div className="space-y-4 animate-in slide-in-from-top-4 duration-700">
                <div className="flex items-center justify-between px-2">
                   <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 font-mono">
                      <Binary className="w-4 h-4 text-purple-500" /> Detected Anomalies
                   </h3>
                </div>
                <div className="space-y-3">
                  {anomalies.map((item) => (
                    <div key={item.id} className="glass-panel p-5 border-l-4 border-l-purple-500 transition-all hover:translate-x-1 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-purple-500/[0.02]">
                       <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                             <p className="text-white font-mono font-bold">{item.label}</p>
                             <span className={cn(
                               "text-[0.55rem] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter border",
                               item.verdict === 'Poisoned' ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : 
                               item.verdict === 'Suspicious' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                             )}>
                               {item.verdict}
                             </span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed italic pr-4">"{item.logic}"</p>
                       </div>
                       <div className="text-right min-w-[100px]">
                          <p className="text-[0.6rem] text-slate-500 font-bold uppercase mb-1 tracking-widest">Poison Score</p>
                          <p className={cn(
                            "text-2xl font-mono font-bold tracking-tighter",
                            item.score > 80 ? "text-rose-500" : item.score > 30 ? "text-amber-500" : "text-emerald-500"
                          )}>
                             {item.score}%
                          </p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
           )}
        </div>

        <div className="lg:col-span-2 space-y-6">
           <div className="glass-panel p-6 border-purple-500/10">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2 font-mono">
                <Shield className="w-4 h-4 text-purple-500" /> Sanitization Logic
              </h3>
              <div className="space-y-4">
                 {[
                   { name: 'Current Method', value: 'Robust PCA + KNN' },
                   { name: 'Drift Sensitivity', value: 'Level 8 (Aggr.)' },
                   { name: 'Label Verifier', value: 'Cross-Ref Enabled' },
                   { name: 'Last DB Sync', value: '12m ago' },
                 ].map((cfg, i) => (
                   <div key={i} className="flex justify-between items-center p-3 bg-white/[0.02] rounded-xl border border-white/5">
                      <p className="text-[0.65rem] text-slate-500 font-bold uppercase tracking-tight">{cfg.name}</p>
                      <p className="text-[0.65rem] text-purple-500 font-mono font-bold tracking-tighter">{cfg.value}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Filter className="w-12 h-12 text-purple-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-tight font-mono">Defense Intelligence</h4>
              <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-purple-500/30 pl-4 mb-4">
                "Training-time poisoning can lay dormant backdoors triggered by specific tokens. Our PCA filter isolates these high-entropy outliers before they infect the model weights."
              </p>
              <button className="text-[0.6rem] font-bold text-purple-500 uppercase tracking-[0.2em] flex items-center gap-1 hover:translate-x-1 transition-transform">
                Read deep-dive <ArrowRight className="w-3 h-3" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
