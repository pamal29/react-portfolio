import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Certificate from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="projects">
        <Skills />
      </div>
      <div id="certificates">
        <Certificate />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App