import { Bell, Search, User, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-dark-900/60 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search agent IDs, sandbox logs, IAM rules..." 
            className="w-full bg-white/5 border border-white/10 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all text-slate-200"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full">
           <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
           <span className="text-[0.65rem] font-bold text-red-500 uppercase tracking-[0.2em] px-1">Restricted Access</span>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        <div className="h-8 w-px bg-white/5"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center border border-white/20 text-white font-bold text-xs shadow-lg shadow-red-600/20">
            AG
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-slate-200">Protocol lead</p>
            <p className="text-[0.6rem] text-red-400 font-bold uppercase tracking-widest leading-none">Safety Director</p>
          </div>
        </div>
      </div>
    </header>
  );
};
