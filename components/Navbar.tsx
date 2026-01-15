
import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter text-white group">
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">ALEX</span>
          <span className="text-slate-400">.</span>
          RIVERA
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-cyan-400 transition-all hover:scale-105"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile menu trigger could be here, omitted for brevity but standard layout kept */}
      </div>
    </nav>
  );
};

export default Navbar;
