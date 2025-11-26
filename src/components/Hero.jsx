import { Github, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ handleDownloadCV }) {
  return (
    <section id="hero" className="text-center pt-20 pb-16 bg-bgDark">
      
      {/* Small Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg mb-3 text-mutedLight"
      >
        Hi, I am
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-extrabold mb-3 
                   bg-gradient-to-r from-textLight to-accentOrange
                   bg-clip-text text-transparent"
      >
        Pamal Pahasara
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold mb-10 text-textLight/90"
      >
        Creative Developer
      </motion.h2>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        {/* GitHub Button */}
        <button
          onClick={() => window.open('https://github.com/pamal29', '_blank')}
          className="px-6 py-3 rounded-full flex items-center gap-2 
                     bg-cardDark text-textLight border border-borderDark
                     hover:border-accentOrange hover:text-accentOrange
                     transition-all duration-300 hover:scale-110"
        >
          <Github className="w-5 h-5" />
          View GitHub
        </button>

        {/* CV Button */}
        <button
          onClick={handleDownloadCV}
          className="px-6 py-3 rounded-full flex items-center gap-2 
                     bg-accentOrange text-bgDark font-semibold 
                     hover:bg-accentOrange/90 transition-all duration-300
                     hover:scale-110 shadow-lg shadow-accentOrange/30"
        >
          <Download className="w-5 h-5" />
          Download CV
        </button>
      </motion.div>
    </section>
  );
}
