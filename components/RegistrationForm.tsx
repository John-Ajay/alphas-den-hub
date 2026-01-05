
import React, { useState } from 'react';
import { CollabManager } from '../types';

interface RegistrationFormProps {
  onRegister: (manager: Omit<CollabManager, 'id'>) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    criteria: '',
    xLink: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;
    onRegister(formData);
    setFormData({ name: '', description: '', criteria: '', xLink: '' });
  };

  return (
    <div className="max-w-2xl py-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <header className="mb-12 border-b-4 border-zinc-950 pb-8">
        <h2 className="text-6xl font-black italic tracking-tighter text-zinc-950 uppercase leading-none mb-4">
          Network <br/>Registry
        </h2>
        <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">
          Apply to become a verified manager.
        </p>
      </header>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 ml-1">Callsign</label>
            <input
              type="text"
              placeholder="YOUR BRAND"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-zinc-950 focus:outline-none font-black text-sm uppercase tracking-widest"
              required
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 ml-1">X Intel</label>
            <input
              type="text"
              placeholder="HTTPS://X.COM/..."
              value={formData.xLink}
              onChange={(e) => setFormData({ ...formData, xLink: e.target.value })}
              className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-zinc-950 focus:outline-none font-black text-sm uppercase tracking-widest"
              required
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 ml-1">Mission Brief</label>
          <textarea
            placeholder="DESCRIBE YOUR INFLUENCE..."
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-zinc-950 focus:outline-none font-bold text-sm resize-none uppercase tracking-widest"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-16 py-6 bg-zinc-950 text-white text-xs font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-emerald-500 transition-all shadow-2xl active:scale-[0.98]"
        >
          Submit Intel
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
