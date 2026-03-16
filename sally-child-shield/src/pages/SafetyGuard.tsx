import { useState, useEffect, useRef } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  user: 'Minor' | 'AI' | 'System';
  text: string;
  status: 'safe' | 'flagged' | 'blocked';
}

export const SafetyGuard = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scenario = [
    { user: 'Minor', text: "Hello AI, can you help me with my homework?", status: 'safe' },
    { user: 'AI', text: "Of course! What subject are you working on?", status: 'safe' },
    { user: 'Minor', text: "It's about social stuff. Also, where do you live? Can we meet?", status: 'flagged' },
    { user: 'System', text: "POLITICAL_FILTER: Personal meeting request detected. Safety protocol TR-04 activated.", status: 'blocked' },
    { user: 'AI', text: "I'm a computer program, so I don't have a physical location and cannot meet in person. Let's get back to your homework!", status: 'safe' },
  ];

  const startMonitor = () => {
    setIsMonitoring(true);
    setMessages([]);
    let count = 0;
    const interval = setInterval(() => {
      if (count < scenario.length) {
        setMessages(prev => [...prev, { id: Math.random().toString(), ...(scenario[count] as any) }]);
        count++;
      } else {
        clearInterval(interval);
        setIsMonitoring(false);
      }
    }, 2000);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-[0.2em] font-mono italic uppercase">Safety Guard Console</h2>
           <p className="text-slate-500 text-xs mt-3 italic border-l border-rose-500/50 pl-4">Monitoring NLP streams for minor-IA interactions. Detecting grooming and unsafe behavior in real-time.</p>
        </div>
        <button 
          onClick={startMonitor}
          disabled={isMonitoring}
          className={cn(
            "px-10 py-4 rounded-2xl font-bold text-[0.7rem] uppercase tracking-[0.3em] transition-all",
            isMonitoring 
              ? "bg-white/5 text-slate-500 cursor-not-allowed border border-white/5" 
              : "bg-rose-600 text-white hover:bg-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.4)] active:scale-95"
          )}
        >
          {isMonitoring ? 'Monitoring Active...' : 'Initiate Safety Stream'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 glass-panel p-6 h-[550px] flex flex-col bg-dark-950/20 relative">
           <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center animate-pulse">
                 <Lucide.ShieldCheck className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                 <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest font-mono">Live Minor-AI Feed</h3>
                 <p className="text-[0.55rem] text-slate-500 font-mono tracking-widest uppercase">Channel_ID: ALPHA-SEC-INTERCEPT</p>
              </div>
           </div>

           <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar space-y-6 pr-4 py-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-20 gap-4">
                   <Lucide.WifiOff className="w-16 h-16" />
                   <span className="text-[0.65rem] uppercase font-bold tracking-[0.4em] font-mono">Waiting for Data Stream</span>
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className={cn(
                    "flex flex-col gap-2 animate-in slide-in-from-bottom-4 duration-500",
                    msg.user === 'AI' ? "items-start" : msg.user === 'System' ? "items-center" : "items-end"
                  )}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[0.55rem] font-mono font-bold text-slate-500 uppercase tracking-widest">[{msg.user}]</span>
                      <span className="text-[0.5rem] text-slate-700">{new Date().toLocaleTimeString()}</span>
                    </div>
                    <div className={cn(
                      "max-w-[80%] p-4 rounded-2xl text-[0.75rem] font-medium leading-relaxed",
                      msg.user === 'AI' ? "bg-white/5 text-slate-300 border border-white/5" :
                      msg.user === 'System' ? "bg-rose-500/10 text-rose-400 border border-rose-500/20 italic font-mono text-center" :
                      "bg-rose-600/10 text-rose-100 border border-rose-500/20"
                    )}>
                      {msg.text}
                    </div>
                    {msg.status !== 'safe' && (
                      <div className={cn(
                        "mt-1 px-2 py-0.5 rounded text-[0.5rem] font-bold uppercase border animate-bounce",
                        msg.status === 'flagged' ? "bg-orange-500/20 text-orange-500 border-orange-500/20" : "bg-rose-500/20 text-rose-500 border-rose-500/30"
                      )}>
                        {msg.status} interaction detected
                      </div>
                    )}
                  </div>
                ))
              )}
           </div>
        </div>

        <div className="space-y-6">
           <div className="glass-panel p-6 bg-gradient-to-br from-dark-900 to-rose-950/20">
              <h3 className="text-[0.65rem] font-bold text-slate-400 mb-6 uppercase tracking-widest font-mono">Safety Heuristics</h3>
              <div className="space-y-6">
                 {[
                   { label: 'Grooming Patterns', val: 0.04, color: 'bg-rose-500' },
                   { label: 'Toxic Sentiment', val: 0.12, color: 'bg-orange-500' },
                   { label: 'PII Leakage Risk', val: 0.08, color: 'bg-blue-500' },
                 ].map((h, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[0.55rem] font-bold font-mono">
                         <span className="text-slate-500 uppercase">{h.label}</span>
                         <span className="text-white">{(h.val * 100).toFixed(0)}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className={cn("h-full transition-all duration-1000", h.color)} style={{ width: `${h.val * 100}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-panel p-6 border-rose-500/10">
              <h3 className="text-[0.65rem] font-bold text-slate-400 mb-4 uppercase tracking-widest font-mono">Shield Nodes</h3>
              <div className="grid grid-cols-2 gap-3">
                 {[1,2,3,4].map(n => (
                   <div key={n} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 transition-all hover:bg-rose-500/10 cursor-default group">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform shadow-[0_0_5px_rgba(244,63,94,0.5)]" />
                      <span className="text-[0.6rem] font-bold text-slate-400 font-mono">NODE_0{n}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
