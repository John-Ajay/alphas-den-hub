
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import RightPanel from './components/RightPanel';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { ActiveTab, CollabManager, Project } from './types';
import { projectsData } from './data/project';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [managers] = useState<CollabManager[]>([]);

  const handleRegister = (newManager: Omit<CollabManager, 'id'>) => {
    alert("Application submitted! Our team will review your profile shortly.");
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
      if (activeTab === 'dashboard') return matchesSearch;
      if (activeTab === 'collab-network') return false;
      return p.type === activeTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="flex h-screen w-full bg-white font-sans text-slate-900 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex flex-col flex-1 min-w-0 h-full">
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        <div className="flex flex-1 overflow-hidden relative">
          <main className="flex-1 overflow-y-auto p-6 md:p-12 bg-white scroll-smooth custom-scrollbar">
            <div className="max-w-6xl mx-auto">
              
              {activeTab === 'collab-network' ? (
                <RegistrationForm onRegister={handleRegister} />
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <header className="border-b-4 border-zinc-950 pb-6 inline-block">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-zinc-900">
                      {activeTab === 'dashboard' ? 'THE FEED' : activeTab.toUpperCase()}
                    </h2>
                    <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mt-2">
                      Verified Alpha Data // Block {new Date().getFullYear()}
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
                    {filteredProjects.map(project => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onClick={() => setSelectedProject(project)}
                      />
                    ))}
                    {filteredProjects.length === 0 && (
                      <div className="col-span-full py-32 text-center border-4 border-zinc-50 rounded-[3rem] bg-zinc-50/50">
                        <p className="text-zinc-300 font-black uppercase tracking-[0.4em] text-xs">No Signal Detected</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </main>

          <RightPanel managers={managers} />
        </div>

        <footer className="h-10 border-t border-slate-100 flex items-center justify-between px-8 bg-white text-[9px] uppercase tracking-[0.2em] text-slate-300 font-black shrink-0">
          <div className="flex items-center gap-4">
             <span>Build v1.2.0</span>
             <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
             <span>Alphas Den Protocol</span>
          </div>
          <div className="flex items-center gap-1">
             <span>Creator: </span>
             <a href="https://x.com/Seldon_thegreat" target="_blank" className="text-zinc-900 hover:text-emerald-500 transition-colors"> @Seldon_thegreat</a>
          </div>
        </footer>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
