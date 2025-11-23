import { Github, Download } from "lucide-react";

export default function Hero({ handleDownloadCV }) {
  return (
    <section id="hero" className="text-center pt-8 pb-12">
      <p className="text-lg mb-2 opacity-70 animate-fade-in-down">Hi I am</p>

      <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-orange-400 bg-clip-text text-transparent animate-fade-in-up">
        Pamal Pahasara
      </h1>

      <h2 className="text-3xl font-semibold mb-8 opacity-90 animate-fade-in">
        Creative Developer
      </h2>

      <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up animation-delay-500">
        <button
          onClick={() => window.open('https://github.com/pamal29', '_blank')}
          className="px-6 py-3 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-110"
        >
          <Github className="w-5 h-5" />
          View Github
        </button>

        <button
          onClick={handleDownloadCV}
          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-110"
        >
          <Download className="w-5 h-5" />
          Download CV
        </button>
      </div>
    </section>
  );
}
