import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center m-0 p-0">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_50px_rgba(168,85,247,0.5)] animate-pulse" />
        </div>
        <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Welcome
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Creative Developer & Designer
        </p>
        <button 
          onClick={() => setActiveSection('projects')}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all"
        >
          View My Work
        </button>
      </div>
    </section>
  );
}