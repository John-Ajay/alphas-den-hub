
import React from 'react';
import { ActiveTab } from '../types';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-72 bg-zinc-950 text-white flex flex-col h-full shrink-0 border-r border-zinc-800 shadow-2xl relative z-20">
      {/* ROW 1: DEDICATED BRAND SPACE */}
      <div className="p-8 pb-10 cursor-pointer group bg-zinc-900/50 border-b border-zinc-800/50" onClick={() => setActiveTab('dashboard')}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-emerald-500 font-black">Official Portal</span>
        </div>
        
        <div className="space-y-0 relative">
          <h1 className="text-4xl font-black tracking-tighter italic leading-none bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-emerald-400 transition-all duration-500">
            ALPHAS <br/>DEN
          </h1>
          <div className="h-1 w-12 bg-emerald-500 mt-4 group-hover:w-full transition-all duration-700 rounded-full"></div>
        </div>
      </div>

      {/* ROW 2: NAVIGATION COLUMN */}
      <nav className="flex-1 px-4 py-8 space-y-1 overflow-y-auto">
        <div className="px-4 py-4 text-[10px] uppercase tracking-widest text-zinc-600 font-black flex items-center gap-2 mb-2">
          <span className="w-4 h-[1px] bg-zinc-800"></span>
          HUB Navigation
        </div>
        <SidebarLink 
          icon="🎯" 
          label="Dashboard" 
          active={activeTab === 'dashboard'} 
          onClick={() => setActiveTab('dashboard')} 
        />
        <SidebarLink 
          icon="🛰️" 
          label="Testnets" 
          active={activeTab === 'testnets'} 
          onClick={() => setActiveTab('testnets')} 
        />
        <SidebarLink 
          icon="💎" 
          label="NFTs" 
          active={activeTab === 'nfts'} 
          onClick={() => setActiveTab('nfts')} 
        />
        <SidebarLink 
          icon="🤝" 
          label="Collab Network" 
          active={activeTab === 'collab-network'} 
          onClick={() => setActiveTab('collab-network')} 
        />
      </nav>

      {/* ROW 3: USER FOOTER */}
      <div className="p-6 bg-zinc-900/30 border-t border-zinc-900 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg shadow-inner">
            🐺
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-tight text-white">Seldon</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Alpha Founder</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const SidebarLink: React.FC<{ icon: string; label: string; active?: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
      active 
        ? 'bg-zinc-800 text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-zinc-700 translate-x-1' 
        : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 hover:translate-x-1'
    }`}
  >
    <span className="text-base filter grayscale brightness-125 group-hover:grayscale-0">{icon}</span>
    {label}
  </button>
);

export default Sidebar;
