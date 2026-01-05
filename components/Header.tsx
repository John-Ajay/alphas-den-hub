
import React from 'react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
  const tabs: { id: ActiveTab; label: string }[] = [
    { id: 'dashboard', label: 'Home' },
    { id: 'testnets', label: 'Testnets' },
    { id: 'nfts', label: 'NFTs' },
    { id: 'collab-network', label: 'Network' },
  ];

  return (
    <header className="h-24 bg-white border-b-2 border-slate-50 px-10 flex items-center justify-between shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-500 ${
              activeTab === tab.id
                ? 'bg-zinc-950 text-white shadow-2xl shadow-zinc-950/20'
                : 'text-slate-400 hover:text-zinc-900 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl group focus-within:border-zinc-950 transition-all duration-300">
          <span className="text-slate-400 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="Search Signal..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-[11px] font-black uppercase tracking-widest focus:outline-none w-56 text-zinc-950 placeholder-slate-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
