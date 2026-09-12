import { useState } from "react";
import BackgroundBlobs from "./components/BackgroundBlobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Social from "./components/Social";
import Education from "./components/Education";
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
      title: "NearU — Rides & Food Backend",
      link: "https://github.com/Nearu-Project-SUSL",
      image: "/projects/nearu.png",
      featured: true,
      tech: [".NET", "PostgreSQL/PostGIS", "SignalR", "EF Core", "React"],
      description:
        "Campus services platform. Owned real-time ride matching end-to-end — PostGIS/Haversine distance validation, OTP verification over SignalR, and a background worker (GhostRiderWorker) handling driver assignment with row-locked repositories to prevent double-assignment. Also built the food ordering module from schema to UI.",
    },
    {
      title: "RepoInsight",
      link: "https://github.com/pamal29/repoinsight",
      image: "/projects/repoinsight.png",
      tech: ["FastAPI", "React", "GitHub REST API", "Docker", "GitHub Actions"],
      description:
        "A GitHub repo analyzer with a full CI/CD pipeline I set up myself — GitHub Actions builds a Docker image, pushes it to GHCR, and deploys to an EC2 instance on push to main.",
    },
    {
      title: "AirSolve",
      link: "https://github.com/pamal29/airsolve",
      image: "/projects/airsolve.png",
      tech: ["Python", "OpenCV", "MediaPipe", "Tesseract OCR", "SymPy"],
      description:
        "A computer-vision math solver — tracks hand gestures via MediaPipe to let you draw equations in the air, OCRs the result with Tesseract, and solves it symbolically with SymPy.",
    },
    {
      title: "HydroTrack",
      link: "https://github.com/pamal29/HydroTrack",
      image: "/projects/hydrotrack.png",
      tech: ["React Native", "Expo"],
      description:
        "A hydration tracker with daily streaks, built to learn React Native and mobile state persistence patterns.",
    },
    {
      title: "PickAFlick",
      link: "https://github.com/pamal29/PickAFlick",
      simple: true,
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
  const link = document.createElement("a");
  link.href = "/Pamal_Pahasara_CV.pdf"; 
  link.download = "Pamal_Pahasara_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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