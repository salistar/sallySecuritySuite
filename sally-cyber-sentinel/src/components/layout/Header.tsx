import * as Lucide from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-dark-950/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md group">
          <Lucide.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-rose-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search threats, IOCs, or user behavior..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500/50 transition-all font-mono"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full">
           <Lucide.Zap className="w-3 h-3 text-rose-500" />
           <span className="text-[0.65rem] font-bold text-rose-400 uppercase tracking-widest leading-none">AI_Agent_Guard: ON</span>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-rose-500 transition-colors">
          <Lucide.ShieldAlert className="w-5 h-5 font-bold" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-dark-950" />
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white leading-none">SOC_Lead</p>
            <p className="text-[0.65rem] font-medium text-slate-500 mt-1 uppercase tracking-wider">Augmentation_Lead</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center font-bold text-white shadow-lg shadow-rose-500/10 border border-white/5">
            SOC
          </div>
        </div>
      </div>
    </header>
  );
};
