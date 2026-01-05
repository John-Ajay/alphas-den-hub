import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import RightPanel from './components/RightPanel';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { ActiveTab, CollabManager, Project } from './types';
import { projectsData } from './data/projects';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen w-full bg-zinc-950 font-sans text-white overflow-hidden selection:bg-emerald-500/30">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsSidebarOpen(false);
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex flex-col flex-1 min-w-0 h-full relative overflow-hidden">
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          toggleSidebar={toggleSidebar}
        />

        <div className="flex flex-1 overflow-hidden relative">
          <main className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth custom-scrollbar">
            <div className="max-w-6xl mx-auto">
              
              {activeTab === 'collab-network' ? (
                <RegistrationForm onRegister={handleRegister} />
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <header className="border-b-[4px] border-emerald-500/20 pb-6 inline-block">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white italic leading-tight">
                      {activeTab === 'dashboard' ? 'THE FEED' : activeTab.toUpperCase()}
                    </h2>
                    <p className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[9px] md:text-[11px] mt-2 flex items-center gap-3">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></span>
                      Live Terminal Connection // Port 01
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-32">
                    {filteredProjects.map(project => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onClick={() => setSelectedProject(project)}
                      />
                    ))}
                    {filteredProjects.length === 0 && (
                      <div className="col-span-full py-40 text-center border border-zinc-900 rounded-[3rem] bg-zinc-900/10 border-dashed">
                        <p className="text-zinc-700 font-black uppercase tracking-[0.4em] text-xs">Awaiting Signal Frequency...</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </main>

          <RightPanel managers={managers} />
        </div>

        <footer className="h-12 border-t border-zinc-900 flex items-center justify-between px-6 bg-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-black shrink-0 z-20">
          <div className="flex items-center gap-6">
             <span className="flex items-center gap-2">
               <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
               Build v1.3.0
             </span>
             <span className="hidden md:inline text-zinc-500">DEN-PROTOCOL-V3</span>
          </div>
          <a href="https://x.com/Seldon_thegreat" target="_blank" className="text-emerald-500 hover:text-emerald-400 transition-colors">@Seldon_thegreat</a>
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