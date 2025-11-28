import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export default function Social() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/pamal29",
      color: "hover:text-neonPurple"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-neonPurple"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourprofile",
      color: "hover:text-neonPurple"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "hover:text-neonPurple"
    }
  ];

  return (
    <section id="connect">

      <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-2 p-4 rounded-xl 
                             bg-black border border-white/30 
                             transition-all duration-300 hover:scale-110 hover:border-neonPurple
                             hover:shadow-lg hover:shadow-neonPurple/20 w-[90px]`}
                  aria-label={social.name}
                >
                  <Icon className={`w-7 h-7 text-white transition-colors duration-300 ${social.color}`} />
                  <span className={`text-sm text-white/80 transition-colors duration-300 group-hover:text-neonPurple`}>
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
      </div>
    </section>
  );
}