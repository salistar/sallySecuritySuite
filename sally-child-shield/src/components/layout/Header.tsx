import * as Lucide from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-dark-950/50 backdrop-blur-xl z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Lucide.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
          <input 
            type="text" 
            placeholder="Search transcripts, alerts, or safety logs..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500/30 transition-all font-sans"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20">
          <Lucide.Zap className="w-3 h-3 text-rose-500" />
          <span className="text-[0.65rem] font-bold text-rose-500 uppercase tracking-widest leading-none">Guard_Live</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-rose-900/20 border border-rose-500/20 flex items-center justify-center cursor-pointer hover:bg-rose-900/30 transition-all">
          <Lucide.Bell className="w-5 h-5 text-rose-400" />
        </div>

        <div className="flex items-center gap-3 border-l border-white/10 pl-6 cursor-pointer group">
          <div className="text-right">
            <p className="text-xs font-bold text-white uppercase group-hover:text-rose-300 transition-colors">Safety_Admin</p>
            <p className="text-[0.6rem] text-slate-600 font-mono">ID: SHIELD-009</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center overflow-hidden">
            <Lucide.User className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      </div>
    </header>
  );
};
