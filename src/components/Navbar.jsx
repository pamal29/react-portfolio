import React from 'react';

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm border-b border-purple-500/30 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Portfolio
          </h1>
          <div className="flex gap-6">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize hover:text-purple-400 transition-colors ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

