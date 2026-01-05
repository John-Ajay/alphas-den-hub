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
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed inset-y-0 left-0 z-50 md:relative md:flex h-full shrink-0 shadow-[20px_0_50px_rgba(0,0,0,0.8)] md:shadow-none transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* COLUMN 1: BRAND RAIL */}
        <div className="w-20 md:w-24 bg-black flex flex-col items-center py-8 md:py-10 border-r border-zinc-900 justify-between relative overflow-hidden shrink-0">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
            <div className="text-[8px] font-black animate-bar-flow flex flex-col gap-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className="whitespace-nowrap rotate-90">ALPHAS DEN // SIGNAL CORE</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 relative z-10">
            <div className="relative group cursor-pointer" onClick={() => { setActiveTab('dashboard'); onClose(); }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-800 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform duration-500">
                🐺
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-black rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-zinc-800 font-black text-lg uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 select-none">
              ALPHAS DEN
            </h1>
          </div>

          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="text-[8px] font-black text-emerald-500 tracking-tighter uppercase">SP {signalPower}%</div>
            <div className="w-1.5 h-20 bg-zinc-900 rounded-full overflow-hidden flex flex-col justify-end">
              <div 
                className="w-full bg-emerald-500 transition-all duration-1000 shadow-[0_0_10px_#10b981]" 
                style={{ height: `${signalPower}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: NAV RAIL */}
        <div className="w-56 md:w-64 bg-[#050505] flex flex-col border-r border-zinc-900">
          <div className="p-8 border-b border-zinc-900/50">
            <div className="flex items-center gap-2 mb-1">
               <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
               <span className="text-[8px] uppercase tracking-[0.3em] text-emerald-500 font-black">Online</span>
            </div>
            <h2 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Mainframe</h2>
          </div>

          <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
            <SidebarLink icon="⚡" label="Intel" active={activeTab === 'dashboard'} onClick={() => { setActiveTab('dashboard'); onClose(); }} />
            <SidebarLink icon="🛰️" label="Testnets" active={activeTab === 'testnets'} onClick={() => { setActiveTab('testnets'); onClose(); }} />
            <SidebarLink icon="💎" label="NFTs" active={activeTab === 'nfts'} onClick={() => { setActiveTab('nfts'); onClose(); }} />
            <SidebarLink icon="🤝" label="Network" active={activeTab === 'collab-network'} onClick={() => { setActiveTab('collab-network'); onClose(); }} />
          </nav>

          <div className="p-4 bg-black border-t border-zinc-900">
             <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/30 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-sm">👤</div>
                <div className="flex-1 min-w-0">
                   <div className="text-[10px] font-black text-white uppercase truncate">Seldon</div>
                   <div className="text-[7px] text-emerald-500 font-black uppercase tracking-widest">Rank IV</div>
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
    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
      active 
        ? 'bg-zinc-900 text-white border border-zinc-800 shadow-lg' 
        : 'text-zinc-500 hover:text-zinc-200'
    }`}
  >
    <span className={`text-lg transition-transform duration-500 ${active ? 'scale-110' : 'opacity-40'}`}>{icon}</span>
    {label}
  </button>
);

export default Sidebar;