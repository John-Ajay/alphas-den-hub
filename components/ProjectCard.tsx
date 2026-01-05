
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group p-8 bg-white border-2 border-slate-50 rounded-[2.5rem] hover:border-zinc-950 transition-all duration-500 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col justify-between min-h-[280px] cursor-pointer"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border ${
            project.type === 'testnets' 
              ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
              : 'bg-zinc-50 text-zinc-600 border-zinc-100'
          }`}>
            {project.type}
          </div>
          <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest px-3 py-1 bg-zinc-50/50 rounded-full">
            {project.status}
          </span>
        </div>
        <h3 className="text-2xl font-black text-zinc-950 group-hover:text-emerald-600 transition-colors mb-3 leading-none italic uppercase tracking-tighter">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed font-bold line-clamp-3">
          {project.description}
        </p>
      </div>
      
      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
        <span className="inline-flex items-center text-[9px] font-black uppercase tracking-[0.3em] text-zinc-950 group-hover:text-emerald-500 transition-all">
          Details <span className="ml-2 text-xs">→</span>
        </span>
        <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-zinc-950 group-hover:text-zinc-950 transition-all">
          <span className="text-xs">↗</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
