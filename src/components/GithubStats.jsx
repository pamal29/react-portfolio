import { Github } from "lucide-react";

export default function GithubStats() {
  const username = "pamal29";

  // Shared query params for both stat images
  const imgParams = new URLSearchParams({
    username,
    theme: "radical",
    hide_border: "true",
    bg_color: "0a0a0a",
    title_color: "8b5cf6",
    icon_color: "8b5cf6",
    text_color: "e5e5e5",
  }).toString();

  const streakParams = new URLSearchParams({
    user: username,
    theme: "radical",
    hide_border: "true",
    background: "0a0a0a",
    ring: "8b5cf6",
    fire: "8b5cf6",
    currStreakLabel: "8b5cf6",
  }).toString();

  return (
    <section id="github" className="py-16">
      <h2 className="text-4xl font-bold mb-2 text-center text-neonPurple">
        GitHub Activity
      </h2>
      <p className="text-center text-neutral-500 text-sm mb-10">
        Live stats, pulled directly from GitHub
      </p>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Overall Stats Card */}
        <div className="bg-stone-900/50 backdrop-blur-sm border border-borderMuted rounded-2xl p-6
                       transition-all duration-300 hover:border-neonPurple/50">
          <h3 className="text-xl font-semibold text-neonPurple mb-4">Overall Stats</h3>
          <img
            src={`https://github-readme-stats.vercel.app/api?${imgParams}&show_icons=true`}
            alt="GitHub Stats"
            className="w-full rounded-lg"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* GitHub Streak — using vercel-hosted mirror, more reliable than herokuapp */}
        <div className="bg-stone-900/50 backdrop-blur-sm border border-borderMuted rounded-2xl p-6
                       transition-all duration-300 hover:border-neonPurple/50">
          <h3 className="text-xl font-semibold text-neonPurple mb-4 text-center">
            Contribution Streak
          </h3>
          <div className="flex justify-center">
            <img
              src={`https://streak-stats.demolab.com/?${streakParams}`}
              alt="GitHub Streak"
              className="w-full max-w-2xl rounded-lg"
              onError={(e) => {
                e.currentTarget.src = `https://github-readme-stats.vercel.app/api?${imgParams}&show_icons=true`;
              }}
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
                     bg-neonPurple text-black font-medium
                     transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
          >
            <Github className="w-5 h-5" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}