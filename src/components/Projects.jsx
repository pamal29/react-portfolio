import { ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold mb-2">
          Featured Projects
        </h3>
        <p className="text-neutral-500 text-sm">
          A few things I've built and shipped
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block group bg-neutral-900/50 backdrop-blur-sm border border-neutral-700
                       rounded-xl p-6 transition-all duration-300
                       hover:border-neonPurple hover:-translate-y-1
                       ${project.featured ? "lg:col-span-2" : ""}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-xl mb-2 group-hover:text-neonPurple transition">
                  {project.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(project.tech) ? project.tech : [project.tech]).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-neonPurple/10 text-neonPurple
                                 border border-neonPurple/30 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ExternalLink className="w-5 h-5 text-neutral-500 flex-shrink-0
                                       group-hover:text-neonPurple group-hover:scale-110
                                       transition-all duration-300" />
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}