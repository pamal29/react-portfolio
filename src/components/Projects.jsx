import { ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold mb-2">
          Featured Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-gray-800/30 backdrop-blur-sm border border-gray-500/30 
                       rounded-xl p-6 shadow-md transition-all duration-300
                       hover:scale-[1.05] hover:border-neonPurple"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-xl mb-1 group-hover:text-neonPurple transition">
                  {project.title}
                </h4>

                <span className="text-xs px-3 py-1 bg-neonPurple border border-black rounded-full">
                  {project.tech}
                </span>
              </div>

              <ExternalLink className="w-6 h-6 text-neonPurple opacity-70 
                                       group-hover:opacity-100 group-hover:scale-125 
                                       transition-all duration-300" />
            </div>

            <p className="text-sm opacity-80">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
