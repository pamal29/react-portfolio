import { ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="animate-fade-in animation-delay-1500">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-orange-400 bg-clip-text text-transparent">
          Featured Projects
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto"></div>
      </div>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-500/30 rounded-xl p-6 hover:border-orange-400 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-xl mb-1">{project.title}</h4>
                <span className="text-xs px-3 py-1 bg-orange-700/40 border border-orange-500/50 rounded-full">
                  {project.tech}
                </span>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 hover:scale-125 transition-all"
              >
                <ExternalLink className="w-6 h-6 text-orange-400" />
              </a>
            </div>

            <p className="text-sm opacity-80">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
