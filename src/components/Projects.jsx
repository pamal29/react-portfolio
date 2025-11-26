import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-16 animate-fade-in animation-delay-1500">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-orange-400 bg-clip-text text-transparent">
          Featured Projects
        </h3>
      </div>

      {/* Responsive 3-Card Row */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="block group bg-gray-800/30 backdrop-blur-sm border border-gray-500/30 
                      rounded-xl p-6 shadow-md transition-all duration-300
                      hover:scale-[1.05] hover:border-orange-400 hover:shadow-orange-600/20"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-xl mb-1 group-hover:text-orange-300 transition">
                  {project.title}
                </h4>

                <span className="text-xs px-3 py-1 bg-orange-700/40 border border-orange-500/50 rounded-full">
                  {project.tech}
                </span>
              </div>

              <ExternalLink className="w-6 h-6 text-orange-400 opacity-70 
                                       group-hover:opacity-100 group-hover:scale-125 
                                       transition-all duration-300" />
            </div>

            <p className="text-sm opacity-80">{project.description}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}