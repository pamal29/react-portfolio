export default function Skills({ skills }) {
  return (
    <section id="skills" className="animate-fade-in animation-delay-1000">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-orange-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-500/30 rounded-xl p-6 hover:border-orange-400 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl mb-2">{skill.name}</p>
              <p className="text-xs uppercase text-orange-400">{skill.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
