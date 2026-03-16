import * as Lucide from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-dark-950/50 backdrop-blur-xl z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Lucide.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
          <input 
            type="text" 
            placeholder="Search regulations, policies, or audit records..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-slate-500 transition-all font-sans"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
          <Lucide.ShieldCheck className="w-3 h-3 text-green-500" />
          <span className="text-[0.65rem] font-bold text-green-500 uppercase tracking-widest leading-none">Compliant</span>
        </div>

        <div className="flex items-center gap-3 border-l border-white/10 pl-6 cursor-pointer group">
          <div className="text-right">
            <p className="text-xs font-bold text-white uppercase group-hover:text-slate-300 transition-colors">Compliance_Lead_01</p>
            <p className="text-[0.6rem] text-slate-600 font-mono">DPO_AUTH_VERIFIED</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
            <Lucide.User className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      </div>
    </header>
  );
};
