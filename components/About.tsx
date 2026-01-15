
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/alex/800/800" 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-2xl -z-10 opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-slate-700 rounded-2xl -z-10" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A bit about me</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                I am a lifelong learner and problem solver based in {PERSONAL_INFO.location}. 
                My journey in tech began with a curiosity about how things work, 
                which evolved into a career building complex systems that impact thousands of users.
              </p>
              <p>
                When I'm not coding, you can find me exploring the outdoors, experimenting with 
                new cooking recipes, or contributing to open-source AI tools. I believe 
                that technology should be an enabler, making life simpler and more creative.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <span className="block text-2xl font-bold text-white">8+</span>
                  <span className="text-sm">Years Experience</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <span className="block text-2xl font-bold text-white">40+</span>
                  <span className="text-sm">Projects Shipped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
