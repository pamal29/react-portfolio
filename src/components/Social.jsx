import { Github, Linkedin, Mail } from "lucide-react";

export default function Social() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/pamal29",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/pamal-pahasara-990ba2324/", 
    },
    
  ];

  return (
    <section id="connect" className="py-16">
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
                className="group flex flex-col items-center gap-2 p-4 rounded-xl
                           bg-neutral-900/50 border border-neutral-700
                           transition-all duration-300 hover:scale-110 hover:border-neonPurple
                           hover:shadow-lg hover:shadow-neonPurple/20 w-[90px]"
                aria-label={social.name}
              >
                <Icon className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-neonPurple" />
                <span className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neonPurple">
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