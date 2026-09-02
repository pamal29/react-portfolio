import { Github, Download } from "lucide-react";

export default function Hero({ handleDownloadCV }) {
  return (
    <section id="hero" className="text-center pt-24 pb-20">
      <p className="text-sm mb-4 text-neutral-500 tracking-wide uppercase">
        Hi, I am
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
        Pamal Pahasara
      </h1>

      <h2 className="text-xl md:text-2xl font-medium mb-5 text-neutral-400">
        Full Stack Developer{" "}
        <span className="text-neonPurple">&amp; AI Enthusiast</span>
      </h2>

      <p className="text-base text-neutral-500 max-w-md mx-auto mb-12 leading-relaxed">
        Undergraduate at Sabaragamuwa University — building modern web apps
        and exploring machine learning.
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        {/* Primary action — solid fill */}
        <button
          onClick={() => window.open("https://github.com/pamal29", "_blank")}
          className="px-6 py-3 rounded-full flex items-center gap-2
                     bg-neonPurple text-black font-medium
                     transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
        >
          <Github className="w-5 h-5" />
          View GitHub
        </button>

        {/* Secondary action — outline, no fill */}
        <button
          onClick={handleDownloadCV}
          className="px-6 py-3 rounded-full flex items-center gap-2
                     text-white border border-neutral-700
                     transition-all duration-300 hover:border-neonPurple hover:text-neonPurple"
        >
          <Download className="w-5 h-5" />
          Download CV
        </button>
      </div>
    </section>
  );
}