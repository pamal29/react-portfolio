import { useState } from "react";
import BackgroundBlobs from "./components/BackgroundBlobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Social from "./components/Social";
import Education from "./components/Education";
import GithubStats from "./components/GithubStats";
import About from "./components/About";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    { name: "React", status: "Expert" },
    { name: "Next.js", status: "Expert" },
    { name: "TypeScript", status: "Advanced" },
    { name: "Node.js", status: "Advanced" },
    { name: "Python", status: "Intermediate" },
    { name: "UI/UX Design", status: "Advanced" },
    { name: "Cloud (AWS)", status: "Intermediate" },
    { name: "MongoDB", status: "Advanced" },
    { name: "PostgreSQL", status: "Intermediate" },
    { name: "Docker", status: "Intermediate" },
    { name: "Git", status: "Expert" },
    { name: "Tailwind CSS", status: "Expert" },
  ];

  const projects = [
    {
      title: "NearU — Campus Services Platform",
      description:
        "Capstone project: rides, food, and accommodation for university campuses. I own the rides orchestration backend — real-time matching with PostGIS distance calculations, OTP verification over SignalR, and a background worker for driver assignment — plus the food ordering module end to end.",
      link: "https://github.com/Nearu-Project-SUSL", 
      tech: [".NET", "PostgreSQL", "React", "React Native", "SignalR"],
      featured: true,
    },
    {
      title: "HydroTrack",
      description:
        "A React Native hydration tracker with streak tracking, a 7-day history chart, and an animated SVG progress ring.",
      link: "https://github.com/pamal29/HydroTrack", 
      tech: ["React Native", "TypeScript"],
    },
    {
      title: "PickAFlick",
      description: "A movie and TV watchlist web app with authentication and a Supabase backend.",
      link: "https://github.com/pamal29/PickAFlick", 
      tech: ["React", "Supabase"],
    },
  ];

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    }
  };

  const handleDownloadCV = () => {
    const content = `PAMAL PAHASARA
Full Stack Developer & AI Enthusiast
========================================

CONTACT
• GitHub  : https://github.com/pamal29
• Email   : [your email here]
• Location: Sri Lanka

EDUCATION
• BSc Information Systems — Sabaragamuwa University of Sri Lanka (2023–2028)

CERTIFICATIONS
• Supervised Machine Learning: Regression and Classification — Coursera (2025)
• Advanced Learning Algorithms — Coursera (2025)

SKILLS
• Languages  : JavaScript, TypeScript, Python, Java
• Frontend   : React, Next.js, Tailwind CSS, UI/UX Design
• Backend    : Node.js
• Databases  : MongoDB, PostgreSQL
• DevOps     : Docker, Git, Cloud (AWS)

PROJECTS
• Movie Recommendation Website (Python)
  https://github.com/pamal29/Movie-Recommendations

• Movie Streaming Website (HTML/CSS)
  https://github.com/pamal29/Movie-Stream-Website

• Snake Game (Java)
  https://github.com/pamal29/snakeGame
`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Pamal_Pahasara_CV.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-bg min-h-screen w-full">
      <div className="relative max-w-5xl mx-auto px-6">
        <BackgroundBlobs />
        <Navbar scrollToSection={scrollToSection} />

        {/* No outer boxed card — sections sit directly on the background,
            separated by generous vertical spacing and thin dividers instead */}
        <div className="relative z-10 w-full">
          <Hero handleDownloadCV={handleDownloadCV} />

          <div className="border-t border-borderMuted">
            <About />
          </div>

          <div className="border-t border-borderMuted">
            <Skills skills={skills} />
          </div>

          <div className="border-t border-borderMuted">
            <Education />
          </div>

          <div className="border-t border-borderMuted">
            <Projects projects={projects} />
          </div>

          <div className="border-t border-borderMuted">
            <GithubStats />
          </div>

          <div className="border-t border-borderMuted">
            <ContactForm
              submitted={submitted}
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          </div>

          <Social />
        </div>
      </div>
    </div>
  );
}