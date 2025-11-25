import { motion } from "framer-motion";
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
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.name] || Code2;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 bg-gray-900/40 border border-gray-700 rounded-xl shadow-lg 
                           backdrop-blur-md hover:scale-105 transition"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-7 h-7 text-white" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                <p className="text-sm text-gray-400 mt-2">{skill.status}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
