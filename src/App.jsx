import { useState } from "react";
import BackgroundBlobs from "./components/BackgroundBlobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
  });

  const skills = [
    { name: "React", status: "basic" },
    { name: "Tailwind CSS", status: "basic" },
    { name: "Python", status: "basic" },
    { name: "Java", status: "basic" },
    { name: "AI", status: "learning" },
    { name: "Machine Learning", status: "learning" },
  ];

  const projects = [
    {
      title: "Movie Recommendation Website",
      description: "A Movie Recommendation site built with Python",
      link: "https://github.com/pamal29/Movie-Recommendations",
      tech: "Python"
    },
    {
      title: "Movie Streaming Website",
      description: "Responsive movie streaming website",
      link: "https://github.com/pamal29/Movie-Stream-Website",
      tech: "HTML/CSS"
    },
    {
      title: "Snake Game",
      description: "Classic Snake Game built in Java",
      link: "https://github.com/pamal29/snakeGame",
      tech: "Java"
    }
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
    const content = `
Pamal Pahasara
Creative Developer

Skills:
React, Tailwind, Python, Java, AI, ML
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Pamal_CV.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <BackgroundBlobs />
      <Navbar scrollToSection={scrollToSection} />

      <div className="p-8 md:p-12 space-y-16 bg-gray-900/30 backdrop-blur-xl border border-gray-400/30 rounded-3xl mt-10 shadow-xl">
        <Hero handleDownloadCV={handleDownloadCV} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <ContactForm
          submitted={submitted}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}


