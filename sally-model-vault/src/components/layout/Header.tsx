import * as Lucide from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-dark-950/80 backdrop-blur-xl z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Lucide.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search fingerprints, models, or audit trails..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-[0.65rem] font-bold text-teal-400 uppercase tracking-widest">Vault_Active</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold text-white">IP_ADMIN_ALPHA</p>
            <p className="text-[0.6rem] text-cyan-500 font-mono">SECURE_ID: 99x-A1</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dark-800 to-dark-700 border border-white/10 flex items-center justify-center relative group cursor-pointer">
            <Lucide.User className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-600 border-2 border-dark-950 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};
