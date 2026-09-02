import { Code2, Palette, Cpu, Database, Boxes, Atom, Server, Cloud, GitBranch } from "lucide-react";

const skillIcons = {
  React: Atom,
  "Next.js": Atom,
  "Tailwind CSS": Palette,
  Python: Cpu,
  Java: Code2,
  "UI/UX Design": Palette,
  "Machine Learning": Boxes,
  JavaScript: Code2,
  TypeScript: Code2,
  HTML: Code2,
  CSS: Palette,
  "Node.js": Server,
  MongoDB: Database,
  PostgreSQL: Database,
  Docker: Boxes,
  "Cloud (AWS)": Cloud,
  Git: GitBranch,
};

// Higher = more filled dots shown next to the skill
const statusLevel = {
  Expert: 3,
  Advanced: 2,
  Intermediate: 1,
};

function ProficiencyDots({ status }) {
  const level = statusLevel[status] ?? 1;
  return (
    <span className="flex gap-0.5 ml-1">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i <= level ? "bg-neonPurple" : "bg-neutral-700"
          }`}
        />
      ))}
    </span>
  );
}

export default function Skills({ skills = [] }) {
  return (
    <section id="skills" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-3 text-center">Skills</h2>
        <p className="text-center text-neutral-500 text-sm mb-12">
          Dots indicate proficiency — Intermediate to Expert
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.name] || Code2;

            return (
              <div
                key={skill.name}
                title={skill.status}
                className="flex items-center gap-2 px-5 py-3 bg-neutral-900/60
                           rounded-full border border-neutral-700 hover:border-neonPurple
                           hover:bg-neutral-800/60 transition-all duration-300 cursor-default"
              >
                <Icon className="w-4 h-4 text-neonPurple" />
                <span className="text-sm font-medium">{skill.name}</span>
                <ProficiencyDots status={skill.status} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}