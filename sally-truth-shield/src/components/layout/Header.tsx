import { Bell, Search, User, ShieldCheck, Zap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-dark-900/60 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search media hashes, source IDs..." 
            className="w-full bg-white/5 border border-white/10 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-200"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
           <ShieldCheck className="w-4 h-4 text-blue-500" />
           <span className="text-[0.65rem] font-bold text-blue-500 uppercase tracking-[0.2em] px-1">Verification: High</span>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
        </button>

        <div className="h-8 w-px bg-white/5"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center border border-white/20 text-white font-bold text-xs shadow-lg shadow-blue-600/20">
            TS
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-slate-200">Truth Lead</p>
            <p className="text-[0.6rem] text-blue-400 font-bold uppercase tracking-widest leading-none">Security Suite</p>
          </div>
        </div>
      </div>
    </header>
  );
};
