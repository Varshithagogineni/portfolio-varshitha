import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import profilePhoto from '../profile-photo.jpg';

interface HeroProps {
  id: string
  setActiveSection: (section: string) => void
}

const Hero = ({ id, setActiveSection }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src={profilePhoto} 
              alt="Varshitha Gogineni" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log('Image failed to load, showing fallback');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
              onLoad={() => console.log('Image loaded successfully')}
            />
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold" style={{display: 'none'}}>
              VG
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
          Varshitha Gogineni
        </h1>

        <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
          Information Science Graduate | AI & Cybersecurity Enthusiast
        </p>

        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-10 space-y-4">
          <p>
            Graduate student pursuing M.S. in Information Science at the University of North Texas with a perfect 4.0 GPA.
            My journey in technology is driven by a passion for building intelligent systems that solve real-world problems.
          </p>
          <p className="font-semibold text-gray-900">
            Currently building at the intersection of AI and security.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="mailto:varshithagogineni007@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Mail size={20} />
            Contact Me
          </a>

          <a
            href="/resume.html"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download size={20} />
            View Resume
          </a>
        </div>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://linkedin.com/in/varshitha-gogineni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="https://github.com/Varshithagogineni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>

          <a
            href="mailto:varshithagogineni007@gmail.com"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
