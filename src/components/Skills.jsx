import { Code2, Palette, Cpu, Database, Boxes, Atom, Server } from "lucide-react";

const skillIcons = {
  React: Atom,
  "Tailwind CSS": Palette,
  Python: Cpu,
  Java: Code2,
  AI: Cpu,
  "Machine Learning": Boxes,
  JavaScript: Code2,
  HTML: Code2,
  CSS: Palette,
  Node: Server,
  Database: Database,
};

export default function Skills({ skills = [] }) {
  return (
    <section id="skills" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.name] || Code2;

            return (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-5 py-3 bg-gray-800/50 
                           rounded-full border border-gray-600 hover:border-orange-400 
                           hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-5 h-5 text-orange-400" />
                <span className="text-base font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}