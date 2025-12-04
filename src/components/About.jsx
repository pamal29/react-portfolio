import { Code, Sparkles, Target, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Passionate about building end-to-end solutions with modern technologies"
    },
    {
      icon: Sparkles,
      title: "Creative Problem Solver",
      description: "I love turning complex challenges into elegant, user-friendly applications"
    },
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Focused on writing clean, efficient code and creating seamless user experiences"
    },
    {
      icon: Heart,
      title: "Continuous Learner",
      description: "Always exploring new technologies and staying current with industry trends"
    }
  ];

  return (
    <section id="about" className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-neonPurple">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Introduction */}
        <div className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-8
                       transition-all duration-300 hover:border-neonPurple/50 hover:shadow-lg hover:shadow-neonPurple/10">
          <div className="space-y-4 text-textLight/90 text-lg leading-relaxed">
            <p>
              Hi there! 👋 I'm <span className="text-neonPurple font-semibold">Pamal Pahasara</span>, 
              a passionate developer who loves creating innovative web applications and exploring 
              the fascinating world of technology. My journey in software development started with 
              curiosity and has grown into a deep commitment to building meaningful digital experiences.
            </p>
            
            <p>
              I specialize in full-stack development with a strong focus on modern frameworks like 
              <span className="text-neonPurple font-semibold"> React</span>, 
              <span className="text-neonPurple font-semibold"> Next.js</span>, and 
              <span className="text-neonPurple font-semibold"> Node.js</span>. I'm also enthusiastic 
              about exploring <span className="text-neonPurple font-semibold">AI and Machine Learning</span>, 
              constantly seeking ways to integrate intelligent solutions into my projects.
            </p>

            <p>
              Beyond coding, I believe in the power of continuous learning and collaboration. Whether 
              it's experimenting with new technologies, contributing to open-source projects, or 
              solving complex algorithmic challenges, I'm always eager to expand my skills and push 
              the boundaries of what's possible.
            </p>

            <p>
              When I'm not in front of a screen, you might find me exploring the latest tech trends, 
              working on personal projects, or sharing knowledge with the developer community. I'm 
              always open to new opportunities and exciting collaborations!
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-xl p-6
                           transition-all duration-300 hover:border-neonPurple/50 hover:scale-105
                           hover:shadow-lg hover:shadow-neonPurple/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neonPurple/10 rounded-lg border border-neonPurple/30 flex-shrink-0">
                    <Icon className="w-6 h-6 text-neonPurple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-textLight/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What I'm Currently Working On */}
        <div className="bg-stone-900/50 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-8
                       transition-all duration-300 hover:border-neonPurple/50 hover:shadow-lg hover:shadow-neonPurple/10">
          <h3 className="text-2xl font-bold text-neonPurple mb-4 text-center">
            Currently Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Advanced React Patterns", "AI Integration", "Cloud Architecture", "TypeScript", "Web3", "System Design"].map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-black border border-white/30 rounded-full text-sm text-white
                           transition-all duration-300 hover:border-neonPurple hover:scale-110 hover:shadow-lg hover:shadow-neonPurple/20"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}