import { useState } from 'react';
import * as Lucide from 'lucide-react';

export const BiasScanner = () => {
  const [isScanning, setIsScanning] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono">Bias Scanner Engine</h2>
          <p className="text-slate-400 text-sm italic">Scanning for statistical parity and disparate impact across sensitive attributes.</p>
        </div>
        <button 
          onClick={startScan}
          disabled={isScanning}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2 uppercase tracking-widest text-xs"
        >
          {isScanning ? <Lucide.RefreshCw className="w-4 h-4 animate-spin" /> : <Lucide.ScanSearch className="w-4 h-4" />}
          {isScanning ? 'Scanning...' : 'Run Audit'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Protected Attributes', value: 'Age, Gender, Geo', icon: Lucide.Fingerprint },
          { label: 'Reference Set', value: 'Census 2026', icon: Lucide.Database },
          { label: 'Fairness Goal', value: 'Parity > 0.95', icon: Lucide.Scale },
        ].map((item, i) => (
          <div key={i} className="glass-panel p-6 border-white/5 bg-white/5">
             <item.icon className="w-8 h-8 text-indigo-500 mb-4 opacity-50" />
             <p className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
             <p className="text-xl font-mono text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
