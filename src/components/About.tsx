import { GraduationCap, Target, Heart, TrendingUp } from 'lucide-react';

interface AboutProps {
  id: string
  setActiveSection: (section: string) => void
}

const About = ({ id, setActiveSection: _setActiveSection }: AboutProps) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              My journey into technology began with a fascination for how systems work and how they can be made more secure and intelligent.
              Today, as a graduate student at the University of North Texas, I'm turning that curiosity into expertise.
            </p>

            <p className="text-lg">
              With a perfect 4.0 GPA in my M.S. Information Science program, I've immersed myself in data modeling, systems design,
              web development, and visualization. But my learning doesn't stop in the classroom. I actively participate in hackathons,
              present at AI summits, and build projects that push the boundaries of what's possible with AI and cybersecurity.
            </p>

            <p className="text-lg">
              My career goal is clear: to become an Information Security Analyst who leverages AI and machine learning to detect threats,
              prevent breaches, and build resilient systems. I'm passionate about creating AI agents that are not just intelligent,
              but also secure, scalable, and production-ready.
            </p>

            <p className="text-lg font-semibold text-gray-900">
              What drives me is the intersection of innovation and security—building systems that are both cutting-edge and trustworthy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Academic Excellence</h3>
                  <p className="text-gray-700">
                    4.0 GPA in M.S. Information Science at UNT, graduating May 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Career Goal</h3>
                  <p className="text-gray-700">
                    Aspiring Information Security Analyst specializing in AI-powered threat detection
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Core Strengths</h3>
                  <p className="text-gray-700">
                    Problem solving, team collaboration, continuous learning, and clear communication
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Passion Areas</h3>
                  <p className="text-gray-700">
                    AI agents, cybersecurity, anomaly detection, and building scalable systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
