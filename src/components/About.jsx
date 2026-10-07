import { Code, Sparkles, Target, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack, End to End",
      description:
        "Comfortable owning a feature from database schema to deployed UI .NET/PostgreSQL on the backend, React on the front.",
    },
    {
      icon: Sparkles,
      title: "Real-Time Systems",
      description:
        "Built ride-matching and live status flows with SignalR, PostGIS geolocation, and background workers.",
    },
    {
      icon: Target,
      title: "Debugs Under Pressure",
      description:
        "Comfortable tracing production issues from Docker network bindings to DbContext lifecycle bugs to root cause.",
    },
    {
      icon: Heart,
      title: "Ships Side Projects",
      description:
        "Builds outside of coursework too: computer vision tools, mobile apps, and small utilities I actually use.",
    },
  ];

  const topics = [
    "Real-Time Systems (SignalR)",
    "PostGIS & Geospatial Queries",
    "React Native",
    "AWS/Azure Hosting",
    "Machine Learning",
    "System Design",
  ];

  const card =
    "bg-bg-soft/50 backdrop-blur-sm border border-borderMuted rounded-2xl " +
    "transition-all duration-300 hover:border-neonPurple/50 " +
    "hover:shadow-lg hover:shadow-neonPurple/10";

  return (
    <section id="about" className="py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-neonPurple">
        About Me
      </h2>

      <div className="w-full space-y-6 lg:space-y-8">
        {/* Intro + Currently Exploring side by side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Introduction */}
          <div className={`${card} p-8 lg:col-span-2`}>
            <div className="space-y-4 text-textLight/90 text-lg leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-neonPurple font-semibold">
                  Pamal Pahasara
                </span>
                , a third-year Information Systems undergraduate at Sabaragamuwa
                University, building full-stack applications with{" "}
                <span className="text-neonPurple font-semibold">React</span>,{" "}
                <span className="text-neonPurple font-semibold">.NET</span>, and{" "}
                <span className="text-neonPurple font-semibold">PostgreSQL</span>.
              </p>

              <p>
                My main project is{" "}
                <span className="text-neonPurple font-semibold">NearU</span>, a
                campus services platform where I own the rides orchestration
                backend real-time ride matching with PostGIS distance
                calculations, OTP verification over SignalR, and a background
                worker handling driver assignment plus the food ordering module,
                end to end.
              </p>

              <p>
                Outside of that, I build smaller projects to learn specific
                things:{" "}
                <span className="text-neonPurple font-semibold">HydroTrack</span>
                , a React Native hydration tracker with streak. I've also worked
                through Coursera's supervised and deep learning coursework,
                which shows up in how I think about features now.
              </p>

              <p>
                I'm looking for opportunities where I can keep working across
                the stack backend systems, mobile apps, or applied ML and learn
                from people who've shipped more than I have.
              </p>
            </div>
          </div>

          {/* Currently Exploring */}
          <div className={`${card} p-8 flex flex-col`}>
            <h3 className="text-2xl font-bold text-neonPurple mb-6 text-center">
              Currently Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-3 my-auto">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-bg-soft border border-borderMuted rounded-full text-sm text-textLight
                             transition-all duration-300 hover:border-neonPurple hover:shadow-lg hover:shadow-neonPurple/20"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`${card} p-6 hover:-translate-y-1`}
              >
                <div className="flex flex-col gap-4">
                  <div className="p-3 w-fit bg-neonPurple/10 rounded-lg border border-neonPurple/30">
                    <Icon className="w-6 h-6 text-neonPurple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-textLight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-textLight/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}