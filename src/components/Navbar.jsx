import { Home, Code, Briefcase, Phone, Github } from "lucide-react";

export default function Navbar({ scrollToSection }) {
  const navItems = [
    { icon: Home, label: "Home", section: "hero" },
    { icon: Code, label: "Skills", section: "skills" },
    { icon: Briefcase, label: "Projects", section: "projects" },
    { icon: Github, label: "Github", section: "github" },
    { icon: Phone, label: "Contact", section: "contact" },
  ];

  return (
    // Hidden below md — a fixed side dock doesn't work well on narrow screens.
    // See note below about adding a mobile nav (bottom bar or hamburger menu).
    <nav className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-6">
      {navItems.map((item, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(item.section)}
          className="group relative block"
        >
          <div className="w-12 h-12 bg-neutral-900/50 backdrop-blur-sm border-2
                      border-neutral-700 rounded-full flex items-center justify-center hover:scale-125
                      hover:bg-neonPurple hover:border-neonPurple transition-all duration-300">
            <item.icon className="w-5 h-5 text-white" />
          </div>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-neutral-900 border border-neutral-700 px-3 py-1 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}