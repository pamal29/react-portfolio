import { GraduationCap, Calendar, MapPin, Award, BadgeCheck } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Information Systems",
      institution: "Sabaragamuwa University of Sri Lanka",
      location: "Sabaragamuwa, Sri Lanka",
      period: "2023 – 2028",
      status: "Currently Pursuing",
      achievements: [
        "Actively developing skills in full-stack development and machine learning",
        "Completed two Coursera specialisations alongside undergraduate studies",
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Machine Learning",
        "Software Engineering",
        "Cloud Computing",
      ],
    },
  ];

  const certifications = [
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera · DeepLearning.AI",
      year: "2025",
    },
    {
      name: "Advanced Learning Algorithms",
      issuer: "Coursera · DeepLearning.AI",
      year: "2025",
    },
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-neonPurple">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Degree */}
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-8
                       transition-all duration-300 hover:border-neonPurple/50 hover:shadow-lg hover:shadow-neonPurple/10"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-neonPurple/10 rounded-xl border border-neonPurple/30">
                <GraduationCap className="w-6 h-6 text-neonPurple" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  {/* "Currently Pursuing" badge */}
                  {edu.status && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full
                                     bg-neonPurple/20 text-neonPurple border border-neonPurple/40
                                     animate-pulse">
                      {edu.status}
                    </span>
                  )}
                </div>
                <p className="text-lg text-textLight/90 font-semibold mb-2">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-textLight/70 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-neonPurple mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Highlights
              </h4>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="text-textLight/80 flex items-start gap-2">
                    <span className="text-neonPurple mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-lg font-semibold text-neonPurple mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black border border-white/30 rounded-full text-sm text-white
                               transition-all duration-300 hover:border-neonPurple hover:scale-105"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Certifications */}
        <div
          className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-8
                     transition-all duration-300 hover:border-neonPurple/50 hover:shadow-lg hover:shadow-neonPurple/10"
        >
          <h3 className="text-2xl font-bold text-neonPurple mb-6 flex items-center gap-2">
            <BadgeCheck className="w-6 h-6" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-black/50 border border-white/20 rounded-xl
                           transition-all duration-300 hover:border-neonPurple hover:scale-105"
              >
                <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-textLight/70">{cert.issuer}</p>
                <p className="text-sm text-neonPurple font-medium mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}