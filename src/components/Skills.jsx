import React from 'react';
import { Code2, Wind, Coffee, Sparkles, Brain, Zap } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: "React", icon: <Code2 className="w-12 h-12" />, status: "proficient" },
    { name: "Tailwind CSS", icon: <Wind className="w-12 h-12" />, status: "proficient" },
    { name: "Python", icon: <Zap className="w-12 h-12" />, status: "proficient" },
    { name: "Java", icon: <Coffee className="w-12 h-12" />, status: "basic" },
    { name: "AI", icon: <Brain className="w-12 h-12" />, status: "learning" },
    { name: "Machine Learning", icon: <Sparkles className="w-12 h-12" />, status: "learning" }
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-center">Skills & Expertise</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-16"></div>

        <div className="relative">
          <div className="flex gap-8 animate-scroll">
            {[...skills, ...skills, ...skills].map((skill, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-48 h-48 border-4 border-black flex flex-col items-center justify-center gap-4 hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">{skill.name}</p>
                  <p className="text-xs uppercase tracking-wider mt-1 opacity-60">
                    {skill.status === 'proficient' && 'Proficient'}
                    {skill.status === 'basic' && 'Basic'}
                    {skill.status === 'learning' && 'Learning'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
}