export default function CurrentlyBuilding({ projects }) {
  return (
    <section id="currently-building" className="py-16">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold mb-2 text-textLight">Currently Building</h3>
        <p className="text-muted text-sm">
          Work in progress — not polished yet, but moving
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-bg-soft/50 backdrop-blur-sm border border-borderMuted
                       rounded-xl p-6 transition-all duration-300 hover:border-neonPurple/50"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-lg text-textLight">{project.title}</h4>
              <span className="text-xs px-3 py-1 bg-neonPurple/10 text-neonPurple
                           border border-neonPurple/30 rounded-full whitespace-nowrap">
                {project.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {(Array.isArray(project.tech) ? project.tech : [project.tech]).map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 text-mutedLight
                             border border-borderMuted rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-sm text-mutedLight leading-relaxed">
              {project.description}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs text-neonPurple hover:underline"
              >
                Follow progress →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}