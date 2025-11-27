import { Home, Code, Briefcase, Phone } from "lucide-react";

export default function Navbar({ scrollToSection }) {
  const navItems = [
    { icon: Home, label: "Home", section: "hero" },
    { icon: Code, label: "Skills", section: "skills" },
    { icon: Briefcase, label: "Projects", section: "projects" },
    { icon: Phone, label: "Contact", section: "contact" }
  ];

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-6">
      {navItems.map((item, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(item.section)}
          className="group relative block"
        >
          <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border-2 border-neonPurple rounded-full flex items-center justify-center hover:scale-125 hover:bg-neonPurple hover:border-white transition-all duration-300">
            <item.icon className="w-5 h-5" />
          </div>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
