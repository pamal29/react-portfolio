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
    {
      degree: "GCE Advanced Level — Physical Science Stream",
      institution: "Richmond College, Galle",
      location: "Galle, Sri Lanka",
      period: "Completed", // e.g. "2020 – 2022"
      status: "",
      achievements: [
        "Combined Mathematics: B",
        "Chemistry: C",
        "Physics: C",
      ],
      coursework: [],
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

  const card =
    "bg-bg-soft/50 backdrop-blur-sm border border-borderMuted rounded-2xl " +
    "transition-all duration-300 hover:border-neonPurple/50 " +
    "hover:shadow-lg hover:shadow-neonPurple/10";

  return (
    <section id="education" className="py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-neonPurple">
        Education
      </h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Degree + A/L */}
        <div className="lg:col-span-2 space-y-6">
          {education.map((edu, index) => (
            <div key={index} className={`${card} p-8`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-neonPurple/10 rounded-xl border border-neonPurple/30 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-neonPurple" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-textLight">
                      {edu.degree}
                    </h3>
                    {edu.status && (
                      <span
                        className="px-3 py-1 text-xs font-semibold rounded-full
                                   bg-neonPurple/20 text-neonPurple border border-neonPurple/40
                                   animate-pulse"
                      >
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-textLight/90 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-textLight/70">
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

              <div className={edu.coursework.length > 0 ? "mb-6" : ""}>
                <h4 className="text-lg font-semibold text-neonPurple mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {edu.status ? "Highlights" : "Results"}
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-textLight/80 flex items-start gap-2"
                    >
                      <span className="text-neonPurple mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {edu.coursework.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-neonPurple mb-3">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-bg-soft border border-borderMuted rounded-full text-sm text-textLight
                                   transition-all duration-300 hover:border-neonPurple"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`${card} p-8 self-start`}>
          <h3 className="text-2xl font-bold text-neonPurple mb-6 flex items-center gap-2">
            <BadgeCheck className="w-6 h-6" />
            Certifications
          </h3>
          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-bg-soft/50 border border-borderMuted rounded-xl
                           transition-all duration-300 hover:border-neonPurple hover:-translate-y-1"
              >
                <h4 className="font-semibold text-textLight mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-textLight/70">{cert.issuer}</p>
                <p className="text-sm text-neonPurple font-medium mt-1">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}