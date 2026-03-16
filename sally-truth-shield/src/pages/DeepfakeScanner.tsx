import { useState } from 'react';
import { Search, Globe, Shield, AlertTriangle, RefreshCw, Zap, ExternalLink, Image, ArrowRight, ShieldCheck, Fingerprint, Camera, Play } from 'lucide-react';
import { cn } from '../lib/utils';

export const DeepfakeScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [results, setResults] = useState<{ veracity: number; status: string; artifacts: string[] } | null>(null);

  const handleScan = () => {
    if (!fileUrl.trim()) return;
    setIsScanning(true);
    setResults(null);
    
    setTimeout(() => {
      setIsScanning(false);
      setResults({
        veracity: fileUrl.includes('deep') || fileUrl.includes('ai') ? 14 : 98,
        status: fileUrl.includes('deep') || fileUrl.includes('ai') ? 'DEEPFAKE DETECTED' : 'TRUSTED CONTENT',
        artifacts: fileUrl.includes('deep') || fileUrl.includes('ai') 
          ? ['Inconsistent ear-bone shadows', 'Temporal jitter in blinks', 'Audio-video lip sync mismatch'] 
          : ['Verified signature match', 'Natural biometric variance found']
      });
    }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 font-mono text-gradient">Deepfake Vision Lab</h1>
          <p className="text-slate-400 text-sm">Forensic analysis of video, audio, and imagery using generative artifact detection models.</p>
        </div>
        <div className="flex items-center gap-3 bg-blue-500/5 px-4 py-2 rounded-xl border border-blue-500/20">
           <Fingerprint className="w-4 h-4 text-blue-500" />
           <span className="text-[0.6rem] font-bold text-blue-400 uppercase tracking-widest leading-none">C2PA VALIDATION: ON</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
           <div className="glass-panel p-8 border-blue-500/20 bg-blue-500/[0.01] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-all duration-[2000ms]">
                 <Globe className="w-48 h-48 text-blue-500" />
              </div>

              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Forensic Analysis Ingest</h3>
              
              <div className="space-y-6 relative z-10">
                 <div className="relative">
                    <input 
                      type="text" 
                      value={fileUrl}
                      onChange={(e) => setFileUrl(e.target.value)}
                      placeholder="Enter media URL, hash, or cloud URI for inspection..."
                      className="w-full bg-dark-900 border border-white/5 rounded-2xl py-5 px-6 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all font-mono text-sm placeholder:text-slate-700 shadow-inner"
                    />
                    <button 
                      onClick={handleScan}
                      disabled={isScanning || !fileUrl.trim()}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-8 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-600/20 uppercase tracking-widest text-[0.65rem]"
                    >
                      {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                      Run Analysis
                    </button>
                 </div>

                 <div className="flex flex-wrap gap-4 px-2">
                    <button className="text-[0.6rem] font-bold text-slate-500 hover:text-blue-400 uppercase tracking-widest transition-colors flex items-center gap-1.5 font-mono">
                       <Camera className="w-3 h-3" /> Image Forensic
                    </button>
                    <div className="w-px h-3 bg-white/5"></div>
                    <button className="text-[0.6rem] font-bold text-slate-500 hover:text-blue-400 uppercase tracking-widest transition-colors flex items-center gap-1.5 font-mono">
                       <Play className="w-3 h-3" /> Video Timeline
                    </button>
                 </div>
              </div>
           </div>

           {results && (
             <div className="space-y-4 animate-in slide-in-from-top-4 duration-700">
                <div className="flex items-center justify-between px-2">
                   <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 font-mono">
                      <Search className="w-4 h-4 text-blue-500" /> Artifact Discovered
                   </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.artifacts.map((art, i) => (
                    <div key={i} className="glass-panel p-5 border-l-4 border-l-blue-500 transition-all hover:bg-white/[0.02] flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                          <AlertTriangle className="w-5 h-5" />
                       </div>
                       <p className="text-sm font-bold text-white tracking-tight leading-tight">{art}</p>
                    </div>
                  ))}
                </div>
             </div>
           )}
        </div>

        <div className="lg:col-span-2 space-y-6">
           <div className="glass-panel p-6 border-blue-500/10 relative overflow-hidden">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-12 flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Veracity Index
              </h3>
              
              <div className="flex flex-col items-center justify-center py-4 relative">
                 <div className="w-48 h-48 rounded-full border-8 border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                    <p className="text-4xl font-mono font-bold text-white relative z-10">{results ? results.veracity : '0'}<span className="text-sm opacity-50">%</span></p>
                    <p className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-[0.2em] relative z-10 mt-1">Truth Level</p>
                    
                    {results && (
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center animate-in zoom-in duration-500 opacity-20",
                        results.veracity < 50 ? "bg-rose-500" : "bg-emerald-500"
                      )}></div>
                    )}
                 </div>
              </div>

              <div className="mt-8 space-y-3 font-mono">
                 <div className="flex justify-between items-center p-3 bg-white/[0.02] rounded-xl border border-white/5">
                    <p className="text-[0.65rem] text-slate-500 font-bold uppercase">Veridict Status</p>
                    <p className={cn(
                      "text-[0.65rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded",
                      results?.veracity && results.veracity < 50 ? "text-rose-500 bg-rose-500/10" : "text-emerald-500 bg-emerald-500/10"
                    )}>{results ? results.status : 'Pending Scan'}</p>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-white/[0.02] rounded-xl border border-white/5">
                    <p className="text-[0.65rem] text-slate-500 font-bold uppercase">GAN Profile</p>
                    <p className="text-[0.65rem] text-white font-bold">{results ? 'StyleGAN2 Match' : 'N/A'}</p>
                 </div>
              </div>
           </div>

           <div className="p-6 bg-blue-950/20 border border-blue-500/20 rounded-2xl relative group">
              <h4 className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-widest flex items-center gap-2">
                 <Zap className="w-3 h-3" /> Deep Insight
              </h4>
              <p className="text-[0.65rem] text-slate-400 leading-relaxed italic border-l border-blue-500/50 pl-4 mb-4">
                "Modern deepfakes often leave microscopic artifacts in the frequency domain. Our model analyzes Fourier transform variances to detect synthetic noise patterns invisible to the human eye."
              </p>
              <button className="text-[0.6rem] font-bold text-blue-500 uppercase tracking-[0.2em] flex items-center gap-1 hover:translate-x-1 transition-transform">
                Technical Documentation <ArrowRight className="w-3 h-3" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
