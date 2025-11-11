import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        
        
        <div className="text-center md:text-left">
          <p className="text-xl text-black mb-8">
            Hi I am 
          </p>

          <p className='text-5xl text-black mb-8'>
            Pamal Pahasara
          </p>
          
          <h2 className="font-sans text-7xl font-bold mb-8 text-black bg-clip-text">
           Creative Developer 
          </h2>
          
          
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <button
              onClick={() =>  window.open('https://github.com/pamal29', '_blank')}
              className="relative px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300"
            >
              View Github
            </button>
            <button
              onClick={() => setActiveSection && setActiveSection('projects')}
              className="relative px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Download CV
            </button>
          </div>

          
        </div>

  
        <div className="flex justify-center md:justify-end">
          <img src='/hero-picture.jpg' 
               alter='picture'
               className="w-64 h-64 rounded-full object-cover">

          </img>
    
        </div>
      </div>
    </section>
  );
}
