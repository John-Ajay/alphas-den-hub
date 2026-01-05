import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  const [signalPower, setSignalPower] = useState(88);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalPower(prev => Math.min(100, Math.max(82, prev + (Math.floor(Math.random() * 5) - 2))));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed inset-y-0 left-0 z-50 md:relative md:flex h-full shrink-0 shadow-[40px_0_100px_rgba(0,0,0,0.9)] md:shadow-none transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* COLUMN 1: BRAND RAIL (Mobile & Desktop) */}
        <div className="w-20 md:w-24 bg-black flex flex-col items-center py-10 md:py-12 border-r border-zinc-900 justify-between relative overflow-hidden shrink-0">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
            <div className="text-[8px] font-black animate-bar-flow flex flex-col gap-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className="whitespace-nowrap rotate-90">ALPHAS DEN // SIGNAL CORE // ALPHAS DEN</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 relative z-10">
            <div className="relative group cursor-pointer" onClick={() => { setActiveTab('dashboard'); onClose(); }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-900 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform duration-500">
                🐺
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-[3px] border-black rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
            </div>
            
            <h1 className="text-zinc-800 font-black text-xl uppercase tracking-[0.5em] md:tracking-[0.7em] [writing-mode:vertical-lr] rotate-180 select-none group-hover:text-emerald-500 transition-colors">
              ALPHAS DEN
            </h1>
          </div>

          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="text-[8px] font-black text-emerald-500 tracking-tighter uppercase">SP {signalPower}%</div>
            <div className="w-2 h-24 bg-zinc-900/50 rounded-full overflow-hidden flex flex-col justify-end border border-zinc-800">
              <div 
                className="w-full bg-emerald-500 transition-all duration-1000 shadow-[0_0_15px_#10b981]" 
                style={{ height: `${signalPower}%` }}
              ></div>
            </div>
            <button onClick={onClose} className="md:hidden mt-4 w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center border border-zinc-800 font-black text-xs">
              ✕
            </button>
          </div>
        </div>

        {/* COLUMN 2: NAV RAIL */}
        <div className="w-60 md:w-64 bg-[#050505] flex flex-col border-r border-zinc-900">
          <div className="p-8 md:p-10 border-b border-zinc-900/50">
            <div className="flex items-center gap-2 mb-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></span>
               <span className="text-[9px] uppercase tracking-[0.4em] text-emerald-500 font-black italic">Core Active</span>
            </div>
            <h2 className="text-[11px] font-black text-zinc-600 uppercase tracking-widest leading-none">Mainframe Directory</h2>
          </div>

          <nav className="flex-1 px-4 py-8 space-y-3 overflow-y-auto custom-scrollbar">
            <SidebarLink icon="⚡" label="Intel Feed" active={activeTab === 'dashboard'} onClick={() => { setActiveTab('dashboard'); onClose(); }} />
            <SidebarLink icon="🛰️" label="Testnet Hub" active={activeTab === 'testnets'} onClick={() => { setActiveTab('testnets'); onClose(); }} />
            <SidebarLink icon="💎" label="NFT Alpha" active={activeTab === 'nfts'} onClick={() => { setActiveTab('nfts'); onClose(); }} />
            <SidebarLink icon="🤝" label="Collab Net" active={activeTab === 'collab-network'} onClick={() => { setActiveTab('collab-network'); onClose(); }} />
          </nav>

          <div className="p-6 bg-black border-t border-zinc-900">
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-emerald-500/30 transition-all group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 flex items-center justify-center text-xl shadow-inner group-hover:bg-zinc-700 transition-colors">👤</div>
                <div className="flex-1 min-w-0">
                   <div className="text-[11px] font-black text-white uppercase truncate tracking-widest leading-none">Seldon</div>
                   <div className="text-[8px] text-emerald-500 font-black uppercase tracking-[0.3em] mt-2 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                      Verified Agent
                   </div>
                </div>
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarLink: React.FC<{ icon: string; label: string; active?: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-5 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 group relative ${
      active 
        ? 'bg-zinc-900 text-white border border-zinc-800 shadow-2xl scale-105' 
        : 'text-zinc-500 hover:text-zinc-200'
    }`}
  >
    <span className={`text-xl transition-all duration-500 ${active ? 'scale-125 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}>
      {icon}
    </span>
    {label}
    {active && <div className="absolute right-4 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>}
  </button>
);

export default Sidebar;