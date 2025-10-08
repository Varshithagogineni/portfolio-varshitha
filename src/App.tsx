import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero id="home" setActiveSection={() => {}} />
      <About id="about" setActiveSection={() => {}} />
      <Skills id="skills" setActiveSection={() => {}} />
      <Experience id="experience" setActiveSection={() => {}} />
      <Projects id="projects" setActiveSection={() => {}} />
      <Hackathons id="hackathons" setActiveSection={() => {}} />
      <Education id="education" setActiveSection={() => {}} />
      <Contact id="contact" setActiveSection={() => {}} />
      <Footer />
    </div>
  );
}

export default App;
