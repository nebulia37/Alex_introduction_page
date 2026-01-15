
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Professional Journey</h2>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:hidden" />
              
              <div className="grid md:grid-cols-[200px,1fr] gap-4 md:gap-12">
                <div className="text-slate-500 font-mono text-sm pt-1">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-cyan-400 font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
