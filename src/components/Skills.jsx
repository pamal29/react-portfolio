import {
  Code2, Palette, Cpu, Database, Boxes, Atom, Server, Cloud, GitBranch,
} from "lucide-react";

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

const categories = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML", "CSS", "UI/UX Design"],
  Backend: ["Node.js", "Python", "Java", "MongoDB", "PostgreSQL"],
  "DevOps & AI": ["Docker", "Cloud (AWS)", "Git", "Machine Learning"],
};

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
            i <= level ? "bg-neonPurple" : "bg-borderMuted"
          }`}
        />
      ))}
    </span>
  );
}

function SkillPill({ skill }) {
  const Icon = skillIcons[skill.name] || Code2;
  return (
    <div
      title={skill.status}
      className="flex items-center gap-2 px-4 py-2 rounded-full
                 border border-borderMuted bg-bg-soft/60
                 hover:border-neonPurple hover:bg-bg-soft/90
                 transition-all duration-300 cursor-default"
    >
      <Icon className="w-4 h-4 text-neonPurple" />
      <span className="text-sm font-medium">{skill.name}</span>
      <ProficiencyDots status={skill.status} />
    </div>
  );
}

export default function Skills({ skills = [] }) {
  // Any skill not listed in a category goes into "Other" so nothing disappears
  const categorized = new Set(Object.values(categories).flat());
  const uncategorized = skills.filter((s) => !categorized.has(s.name));

  const groups = [
    ...Object.entries(categories).map(([title, names]) => ({
      title,
      items: skills.filter((s) => names.includes(s.name)),
    })),
    ...(uncategorized.length ? [{ title: "Other", items: uncategorized }] : []),
  ].filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="py-16 text-textLight">
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-3 text-center">Skills</h2>
        <p className="text-center text-muted text-sm mb-12">
          Dots indicate proficiency — Intermediate to Expert
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {groups.map(({ title, items }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-borderMuted bg-bg-soft/40"
            >
              <h3 className="text-lg font-semibold mb-5 text-neonPurple">
                {title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}