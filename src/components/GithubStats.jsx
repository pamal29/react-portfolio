import { Github, GitFork, Star, Code } from "lucide-react";

export default function GithubStats() {
  const username = "pamal29"; 

  const stats = [
    {
      icon: Code,
      label: "Public Repos",
      value: "15+",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      label: "Total Stars",
      value: "20+",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: GitFork,
      label: "Forks",
      value: "10+",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Github,
      label: "Contributions",
      value: "500+",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="github" className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-neonPurple">
        GitHub Activity
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-xl p-6
                           transition-all duration-300 hover:border-neonPurple/50 hover:scale-105
                           hover:shadow-lg hover:shadow-neonPurple/10 text-center"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-textLight/70">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Stats Card */}
          <div className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-6
                         transition-all duration-300 hover:border-neonPurple/50">
            <h3 className="text-xl font-semibold text-neonPurple mb-4">Overall Stats</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=1c1917&title_color=a855f7&icon_color=a855f7&text_color=e5e5e5`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </div>

          {/* Top Languages Card */}
          <div className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-6
                         transition-all duration-300 hover:border-neonPurple/50">
            <h3 className="text-xl font-semibold text-neonPurple mb-4">Most Used Languages</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=1c1917&title_color=a855f7&text_color=e5e5e5`}
              alt="Top Languages"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* GitHub Streak */}
        <div className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-6
                       transition-all duration-300 hover:border-neonPurple/50">
          <h3 className="text-xl font-semibold text-neonPurple mb-4 text-center">Contribution Streak</h3>
          <div className="flex justify-center">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=1c1917&ring=a855f7&fire=a855f7&currStreakLabel=a855f7`}
              alt="GitHub Streak"
              className="w-full max-w-2xl rounded-lg"
            />
          </div>
        </div>

        

        {/* Call to Action */}
        <div className="text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-black text-white border border-white
                     transition-all duration-300 hover:scale-110 hover:border-neonPurple
                     hover:shadow-lg hover:shadow-neonPurple/20"
          >
            <Github className="w-5 h-5" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}