import { ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold mb-2 text-textLight">Featured Projects</h3>
        <p className="text-muted text-sm">
          A few things I've built and shipped
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          if (project.simple) {
            return (
              <a key={i} href={project.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between group bg-bg-soft/50
                           backdrop-blur-sm border border-borderMuted rounded-xl p-6
                           transition-all duration-300 hover:border-neonPurple hover:-translate-y-1">
                <h4 className="font-bold text-lg text-textLight group-hover:text-neonPurple transition">
                  {project.title}
                </h4>
                <ExternalLink className="w-5 h-5 text-muted flex-shrink-0
                             group-hover:text-neonPurple group-hover:scale-110
                             transition-all duration-300" />
              </a>
            );
          }

          return (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer"
              className={`block group bg-bg-soft/50 backdrop-blur-sm border border-borderMuted
                         rounded-xl overflow-hidden transition-all duration-300
                         hover:border-neonPurple hover:-translate-y-1
                         ${project.featured ? "lg:col-span-2" : ""}`}>
              {project.image && (
                <div className="relative w-full aspect-video overflow-hidden bg-bg-soft">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top
                               transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-textLight group-hover:text-neonPurple transition">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(project.tech) ? project.tech : [project.tech]).map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-neonPurple/10 text-neonPurple
                                     border border-neonPurple/30 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted flex-shrink-0
                               group-hover:text-neonPurple group-hover:scale-110
                               transition-all duration-300" />
                </div>
                <p className="text-sm text-mutedLight leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}