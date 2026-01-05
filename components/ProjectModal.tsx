
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
        
        <div className="p-10 border-b-4 border-zinc-950 flex items-start justify-between bg-white sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                {project.type}
              </span>
              <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest px-3 py-1 bg-zinc-50 rounded-full">
                {project.status}
              </span>
            </div>
            <h2 className="text-5xl font-black text-zinc-950 tracking-tighter italic uppercase">{project.title}</h2>
          </div>
          <button onClick={onClose} className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-50 hover:bg-zinc-950 hover:text-white text-zinc-300 transition-all duration-300 text-xl font-black">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 scroll-smooth">
          <section>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-4">Signal Intel</h4>
            <p className="text-zinc-800 text-lg font-bold leading-tight">{project.description}</p>
          </section>

          {project.tasks && (
            <section className="bg-zinc-950 p-8 rounded-[2rem] border-4 border-emerald-500/20">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Action Pipeline
              </h4>
              <ul className="space-y-4">
                {project.tasks.map((task, idx) => (
                  <li key={idx} className="flex gap-4 text-sm text-zinc-300 font-bold leading-snug items-start">
                    <span className="text-emerald-500 font-black">[{idx + 1}]</span>
                    {task}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="p-10 bg-zinc-50 flex items-center justify-between sticky bottom-0 z-10 border-t border-zinc-100">
          <p className="text-[10px] text-zinc-300 font-black uppercase tracking-[0.3em]">Identity Verified</p>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-zinc-950 text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-emerald-500 transition-all shadow-2xl active:scale-95"
          >
            Access Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
