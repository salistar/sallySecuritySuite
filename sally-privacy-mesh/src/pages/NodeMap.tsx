import { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const nodes = [
  { id: 1, x: 200, y: 150, label: 'Compute_A', status: 'Active' },
  { id: 2, x: 500, y: 100, label: 'Compute_B', status: 'Active' },
  { id: 3, x: 700, y: 300, label: 'Compute_C', status: 'Maintenance' },
  { id: 4, x: 400, y: 400, label: 'Gateway_North', status: 'Active' },
  { id: 5, x: 100, y: 350, label: 'Gateway_South', status: 'Active' },
];

export const NodeMap = () => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes([Math.floor(Math.random() * 5) + 1]);
      setTimeout(() => setActiveNodes([]), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-indigo-500/5 p-8 rounded-3xl border border-indigo-500/10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tighter">Inference Mesh Topology</h2>
          <p className="text-slate-400 text-sm italic">Live visualization of privacy-preserving neural computation nodes and encrypted traffic flows.</p>
        </div>
        <div className="flex gap-4 font-mono text-xs">
           <div className="flex flex-col items-end border-r border-white/10 pr-4">
              <span className="text-slate-500 uppercase">Latency</span>
              <span className="text-emerald-400 font-bold">12ms avg</span>
           </div>
           <div className="flex flex-col items-end">
              <span className="text-slate-500 uppercase">Encryption</span>
              <span className="text-indigo-400 font-bold">AES-GCM-256</span>
           </div>
        </div>
      </div>

      <div className="glass-panel p-8 min-h-[600px] relative overflow-hidden bg-dark-900 shadow-inner">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)', backgroundSize: '40px 40px' }} />
         
         <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Connections */}
            <line x1="200" y1="150" x2="500" y2="100" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="500" y1="100" x2="700" y2="300" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="700" y1="300" x2="400" y2="400" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="400" y1="400" x2="100" y2="350" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="350" x2="200" y2="150" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="200" y1="150" x2="400" y2="400" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            
            {activeNodes.length > 0 && (
              <motion.circle 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                cx={nodes.find(n => n.id === activeNodes[0])?.x}
                cy={nodes.find(n => n.id === activeNodes[0])?.y}
                r="40"
                fill="rgba(99, 102, 241, 0.1)"
              />
            )}
         </svg>

         {nodes.map((node) => (
           <motion.div 
             key={node.id}
             style={{ left: node.x, top: node.y }}
             className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
             whileHover={{ scale: 1.1 }}
           >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all shadow-xl",
                node.status === 'Active' ? "bg-indigo-500/20 border-indigo-500 shadow-indigo-500/20" : "bg-dark-800 border-white/10 grayscale"
              )}>
                 <Lucide.Cpu className={cn("w-6 h-6", node.status === 'Active' ? "text-indigo-400" : "text-slate-600")} />
              </div>
              <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-dark-950 px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                 <p className="text-[0.65rem] font-bold text-white font-mono">{node.label}</p>
                 <p className="text-[0.55rem] text-slate-500 font-mono uppercase">{node.status} // load: {node.status === 'Active' ? '24%' : '0%'}</p>
              </div>
           </motion.div>
         ))}

         <div className="absolute bottom-8 right-8 space-y-4">
            <div className="glass-panel p-4 w-64 border-indigo-500/20">
               <h4 className="text-[0.6rem] font-bold text-indigo-400 uppercase tracking-widest mb-3 font-mono">Mesh Health Metrics</h4>
               <div className="space-y-3">
                  <div className="flex justify-between items-center text-[0.6rem] font-mono">
                     <span className="text-slate-500">Node Sync</span>
                     <span className="text-white">99.8%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-500" style={{ width: '99.8%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-[0.6rem] font-mono">
                     <span className="text-slate-500">Encryption Layer</span>
                     <span className="text-indigo-400 font-bold uppercase italic">Locked</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="absolute top-8 left-8 flex flex-col gap-2">
            <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.3em] font-mono mb-2">Legend</span>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-indigo-500" />
               <span className="text-[0.6rem] font-mono text-slate-400">Secure Node</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-dark-800 border border-white/10" />
               <span className="text-[0.6rem] font-mono text-slate-400">Offline Node</span>
            </div>
         </div>
      </div>
    </div>
  );
};
