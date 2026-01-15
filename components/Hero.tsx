
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-20 md:pt-60 md:pb-40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Intelligence</span> of the Web.
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition-all hover:-translate-y-1 shadow-lg shadow-white/5"
            >
              View My Work
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold transition-all hover:bg-white/5"
            >
              Read About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
