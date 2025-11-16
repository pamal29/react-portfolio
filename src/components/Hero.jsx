import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-8 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* LEFT TEXT SECTION */}
        <div className="text-center md:text-left">
          <p className="text-lg sm:text-xl text-black mb-4 sm:mb-6">
            Hi I am
          </p>

          <p className="text-4xl sm:text-5xl text-black font-semibold mb-4">
            Pamal Pahasara
          </p>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-black">
            Creative Developer
          </h2>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
            <button
              onClick={() => window.open('https://github.com/pamal29', '_blank')}
              className="px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300"
            >
              View Github
            </button>

            <button
              onClick={() => setActiveSection && setActiveSection('projects')}
              className="px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-picture.jpg"
            alt="picture"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
