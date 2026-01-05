import React from 'react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, searchQuery, setSearchQuery, toggleSidebar }) => {
  const tabs: { id: ActiveTab; label: string }[] = [
    { id: 'dashboard', label: 'Intel' },
    { id: 'testnets', label: 'Testnets' },
    { id: 'nfts', label: 'NFTs' },
    { id: 'collab-network', label: 'Network' },
  ];

  return (
    <header className="h-20 md:h-24 bg-black/80 backdrop-blur-2xl border-b border-zinc-900 px-4 md:px-10 flex items-center justify-between shrink-0 sticky top-0 z-40 gap-4">
      <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
        {/* Hamburger */}
        <button 
          onClick={toggleSidebar}
          className="md:hidden w-10 h-10 shrink-0 flex flex-col items-center justify-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-xl active:scale-95 transition-all shadow-lg"
        >
          <div className="w-5 h-0.5 bg-emerald-500"></div>
          <div className="w-5 h-0.5 bg-emerald-500/70"></div>
          <div className="w-5 h-0.5 bg-emerald-500/40"></div>
        </button>

        {/* Mobile Branding */}
        <div className="md:hidden flex items-center gap-2 mr-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-lg">🐺</div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-tighter italic leading-none">Alphas Den</span>
            <span className="text-[6px] text-emerald-500 font-black uppercase tracking-widest mt-0.5 animate-pulse">V3 ONLINE</span>
          </div>
        </div>

        {/* Swipeable Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2.5 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 border-2 ${
                activeTab === tab.id
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'text-zinc-500 border-zinc-900 bg-zinc-950/50 hover:text-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4 shrink-0">
        <div className="flex items-center gap-3 px-4 py-3 bg-zinc-950 border border-zinc-900 rounded-xl focus-within:border-emerald-500/50 transition-all">
          <span className="text-zinc-600 text-xs italic font-black">SCAN</span>
          <input 
            type="text" 
            placeholder="..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-[11px] font-black uppercase tracking-widest focus:outline-none w-40 text-white placeholder-zinc-800"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;