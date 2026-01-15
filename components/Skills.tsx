
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Tech Stack</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-sm border-b border-cyan-500/20 pb-2">
                {cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div 
                    key={skill.name}
                    className="group relative px-4 py-2 bg-slate-800/50 border border-white/5 rounded-lg hover:border-cyan-500/30 transition-all"
                  >
                    <span className="text-slate-300 group-hover:text-white">{skill.name}</span>
                    <div className="mt-2 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cyan-500 rounded-full" 
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
