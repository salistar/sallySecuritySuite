import * as Lucide from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-dark-950/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md group">
          <Lucide.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search voice signatures, audit logs..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[0.65rem] font-bold text-amber-400 uppercase tracking-widest leading-none">Liveness Engine Online</span>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Lucide.Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full border-2 border-dark-950" />
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white leading-none">Admin_User</p>
            <p className="text-[0.65rem] font-medium text-slate-500 mt-1 uppercase tracking-wider">Cyber_Security_Lead</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-[1px]">
            <div className="w-full h-full rounded-[11px] bg-dark-900 flex items-center justify-center font-bold text-amber-500">
              AD
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
