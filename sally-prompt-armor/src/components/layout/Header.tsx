import { Bell, Search, User, Zap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-dark-900/60 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search threats, API keys, rules..." 
            className="w-full bg-white/5 border border-white/10 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-slate-600 text-slate-200"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
           <Zap className="w-4 h-4 text-primary-500" />
           <span className="text-xs font-bold text-primary-500 tracking-wide uppercase">48ms P99 Latency</span>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full ring-2 ring-dark-900"></span>
        </button>

        <div className="h-8 w-px bg-white/5"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center border border-white/20">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">SOC Analyst</p>
            <p className="text-[0.65rem] text-primary-500 font-bold uppercase tracking-widest">Enterprise</p>
          </div>
        </div>
      </div>
    </header>
  );
};
