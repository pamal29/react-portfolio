import React from 'react';
import { FadeIn, SlideInLeft, SlideInRight } from '../utils/ScrollAnimations';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 sm:px-8 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* LEFT TEXT SECTION */}
        <SlideInLeft duration={800}>
          <div className="text-center md:text-left">
            <FadeIn delay={200}>
              <p className="text-lg sm:text-xl text-black dark:text-white mb-4 sm:mb-6">
                Hi I am
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-4xl sm:text-5xl text-black dark:text-white font-semibold mb-4">
                Pamal Pahasara
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-white">
                Creative Developer
              </h2>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
                <button className="px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300
                                    dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                  View Github
                </button>
                <button className="px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300
                                    dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                  Download CV
                </button>
              </div>
            </FadeIn>
          </div>
        </SlideInLeft>

        {/* RIGHT IMAGE SECTION */}
        <SlideInRight duration={800}>
          <div className="flex justify-center md:justify-end">
            <img
              src="/hero-picture.jpg"
              alt="picture"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
            />
          </div>
        </SlideInRight>
      </div>
    </section>
  );
}