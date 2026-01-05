
import React from 'react';
import { CollabManager } from '../types';

interface RightPanelProps {
  managers: CollabManager[];
}

const RightPanel: React.FC<RightPanelProps> = ({ managers }) => {
  return (
    <aside className="w-96 p-10 overflow-y-auto bg-slate-50 border-l-2 border-slate-100 shrink-0 hidden lg:block">
      <div className="flex flex-col gap-2 mb-10">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-950 border-b-2 border-zinc-950 pb-2">
          Directory
        </h3>
        <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">
          Verified Agents Only
        </p>
      </div>
      
      <div className="space-y-8">
        {managers.length > 0 ? (
          managers.map((manager) => (
            <div key={manager.id} className="p-8 bg-white border-2 border-slate-100 rounded-[2rem] hover:border-zinc-950 transition-all duration-500 shadow-sm relative group overflow-hidden">
              <h4 className="font-black text-zinc-950 text-xl leading-none italic uppercase mb-2">
                {manager.name}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-bold">
                {manager.description}
              </p>
              <a href={manager.xLink} target="_blank" className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-700 underline">
                Verify
              </a>
            </div>
          ))
        ) : (
          <div className="text-center py-20 border-4 border-dashed border-slate-100 rounded-[3rem]">
            <p className="text-slate-200 text-[10px] font-black uppercase tracking-[0.4em]">Awaiting Data</p>
          </div>
        )}
      </div>

      <div className="mt-16 p-8 rounded-[2rem] bg-zinc-950 text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-emerald-500 italic">Security Notice</h4>
        <p className="text-[10px] text-zinc-500 leading-normal font-bold">
          All alpha is experimental. The Den verification confirms community standing, not financial security.
        </p>
      </div>
    </aside>
  );
};

export default RightPanel;
