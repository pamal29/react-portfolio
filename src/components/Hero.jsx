import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        
        
        <div className="text-center md:text-left">
          <p className="text-xl text-white mb-8">
            Hi I am 
          </p>

          <p className='text-5xl text-white mb-8'>
            Pamal Pahasara
          </p>
          
          <h2 className="text-7xl font-bold mb-8 text-white bg-clip-text">
           Creative Developer 
          </h2>
          
          
          <div className="grid grid-cols-2 gap-4 justify-start max-w-md">
            <button
              onClick={() =>  window.open('https://github.com/pamal29', '_blank')}
              className="px-8 py-3 text-white rounded-full border border-white w-full"
            >
              View Github
            </button>
            <button
              onClick={() => setActiveSection && setActiveSection('projects')}
              className="px-8 py-3 text-white rounded-full border border-white w-full"
            >
              Download CV
            </button>
          </div>

          
        </div>

  
        <div className="flex justify-center md:justify-end">
          <img src='../../public/hero-picture.jpg' 
               alter='picture'
               className="w-64 h-64 rounded-full object-cover shadow-[0_0_50px_rgba(255,255,255,0.8)]">

          </img>
    
        </div>
      </div>
    </section>
  );
}
