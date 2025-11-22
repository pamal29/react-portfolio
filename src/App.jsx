import { useState, useEffect } from "react";
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Certificate from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Darkmodetoggle from './components/Darkmodetoggle.jsx'
import Loader from './components/Loader.jsx'

function App() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black"
      }}>
        <Loader />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Darkmodetoggle />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App