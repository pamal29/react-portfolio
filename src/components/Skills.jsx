import React from 'react';

export default function Skills() {
  const skills = [
    { 
      name: "React", 
      svg: <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>,
      status: "basic" 
    },
    { 
      name: "Tailwind CSS", 
      svg: <svg viewBox="0 0 256 154" className="w-12 h-12">
        <defs>
          <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
            <stop stopColor="#2298BD" offset="0%"/>
            <stop stopColor="#0ED7B5" offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#gradient)"/>
      </svg>,
      status: "basic" 
    },
    { 
      name: "Python", 
      svg: <svg viewBox="0 0 256 255" className="w-12 h-12">
        <defs>
          <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="pythonA">
            <stop stopColor="#387EB8" offset="0%"/>
            <stop stopColor="#366994" offset="100%"/>
          </linearGradient>
          <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="pythonB">
            <stop stopColor="#FFE052" offset="0%"/>
            <stop stopColor="#FFC331" offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#pythonA)"/>
        <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#pythonB)"/>
      </svg>,
      status: "basic" 
    },
    { 
      name: "Java", 
      svg: <svg viewBox="0 0 256 346" className="w-12 h-12">
        <path d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034 0 0 7.93 4.972 19.003 9.279-67.611 28.977-153.019-1.679-99.913-16.517M74.292 229.659s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43 0 0 5.526 5.602 14.215 8.666-81.747 23.904-172.798 1.885-114.296-17.532" fill="#5382A1"/>
        <path d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858 0 0-118.238 29.53-61.765 94.6" fill="#E76F00"/>
        <path d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471-12.323-5.36 10.787-12.8 18.056-14.362 7.581-1.644 11.914-1.337 11.914-1.337-13.705-9.655-88.583 18.957-38.034 27.15 137.853 22.356 251.292-10.066 215.535-26.195M88.9 190.48s-62.771 14.91-22.228 20.323c17.118 2.292 51.243 1.774 83.03-.89 25.978-2.19 52.063-6.85 52.063-6.85s-9.16 3.923-15.787 8.448c-63.744 16.765-186.886 8.966-151.435-8.183 29.981-14.492 54.358-12.848 54.358-12.848M201.506 253.422c64.8-33.672 34.839-66.03 13.927-61.67-5.126 1.066-7.424 1.992-7.424 1.992s1.907-2.987 5.542-4.27c41.416-14.555 73.299 42.9-13.349 65.647 0 0 .998-.895 1.304-1.699" fill="#5382A1"/>
        <path d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377-32.73-29.53-56.75-55.526-40.635-79.72C111.395 74.612 176.918 57.393 162.439.37" fill="#E76F00"/>
        <path d="M95.268 344.665c62.199 3.982 157.712-2.209 159.974-31.64 0 0-4.348 11.158-51.404 20.018-53.088 9.99-118.564 8.824-157.399 2.421.001 0 7.95 6.58 48.83 9.201" fill="#5382A1"/>
      </svg>,
      status: "basic" 
    },
    { 
      name: "AI", 
      svg: <svg viewBox="0 0 256 256" className="w-12 h-12">
        <defs>
          <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea"/>
            <stop offset="100%" stopColor="#764ba2"/>
          </linearGradient>
        </defs>
        <circle cx="128" cy="80" r="24" fill="url(#aiGrad)"/>
        <circle cx="80" cy="160" r="24" fill="url(#aiGrad)"/>
        <circle cx="176" cy="160" r="24" fill="url(#aiGrad)"/>
        <line x1="128" y1="104" x2="100" y2="140" stroke="url(#aiGrad)" strokeWidth="8"/>
        <line x1="128" y1="104" x2="156" y2="140" stroke="url(#aiGrad)" strokeWidth="8"/>
        <line x1="80" y1="184" x2="176" y2="184" stroke="url(#aiGrad)" strokeWidth="8"/>
        <path d="M 60 220 Q 128 190 196 220" stroke="url(#aiGrad)" strokeWidth="8" fill="none"/>
      </svg>,
      status: "learning" 
    },
    { 
      name: "Machine Learning", 
      svg: <svg viewBox="0 0 256 256" className="w-12 h-12">
        <defs>
          <linearGradient id="mlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f093fb"/>
            <stop offset="100%" stopColor="#f5576c"/>
          </linearGradient>
        </defs>
        <rect x="40" y="120" width="40" height="100" rx="8" fill="url(#mlGrad)" opacity="0.6"/>
        <rect x="90" y="80" width="40" height="140" rx="8" fill="url(#mlGrad)" opacity="0.7"/>
        <rect x="140" y="100" width="40" height="120" rx="8" fill="url(#mlGrad)" opacity="0.8"/>
        <rect x="190" y="60" width="40" height="160" rx="8" fill="url(#mlGrad)"/>
        <path d="M 60 120 L 110 80 L 160 100 L 210 60" stroke="url(#mlGrad)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="60" cy="120" r="6" fill="url(#mlGrad)"/>
        <circle cx="110" cy="80" r="6" fill="url(#mlGrad)"/>
        <circle cx="160" cy="100" r="6" fill="url(#mlGrad)"/>
        <circle cx="210" cy="60" r="6" fill="url(#mlGrad)"/>
      </svg>,
      status: "learning" 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-8xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-center">Skills & Expertise</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-16"></div>

        <div className="relative overflow-visible">
          <div className="flex gap-8 animate-scroll">
            {[...skills, ...skills, ...skills].map((skill, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-48 h-48 border-4 border-black rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="group-hover:scale-110 transition-transform group-hover:brightness-0 group-hover:invert">
                  {skill.svg}
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
              transform: translateX(calc(-256px * ${skills.length} - 32px * ${skills.length}));
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
}