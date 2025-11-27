import { Github, Download } from "lucide-react";

export default function Hero({ handleDownloadCV }) {
  return (
    <section id="hero" className="text-center pt-20 pb-16">
      
      <p
        className="text-lg mb-3 text-mutedLight"
      >
        Hi, I am 
      </p>

      <h1
        className="text-6xl font-extrabold mb-3 text-neonPurple"
      >
        Pamal Pahasara
      </h1>


      <h2
        className="text-3xl font-semibold mb-10 text-textLight/90"
      >
        Creative Developer
      </h2>

      <div
        className="flex gap-4 justify-center flex-wrap"
      >
        <button
          onClick={() => window.open('https://github.com/pamal29', '_blank')}
          className="px-6 py-3 rounded-full flex items-center gap-2 
                     bg-black text-white border border-white
                     transition-all duration-300 hover:scale-110"
        >
          <Github className="w-5 h-5" />
          View GitHub
        </button>

        <button
          onClick={handleDownloadCV}
          className="px-6 py-3 rounded-full flex items-center gap-2 
                     bg-black text-white border border-white
                     transition-all duration-300 hover:scale-110"
        >
          <Download className="w-5 h-5" />
          Download CV
        </button>
      </div>
    </section>
  );
}
