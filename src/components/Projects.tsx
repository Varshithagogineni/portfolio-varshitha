
interface ProjectsProps {
  id: string
  setActiveSection: (section: string) => void
}

const Projects = ({ id, setActiveSection: _setActiveSection }: ProjectsProps) => {
  const projects = [
    {
      title: 'VoiceFit',
      subtitle: 'Voice-Controlled Fitness Tracker',
      period: 'Jul 2025 – Aug 2025',
      description: 'Built a mobile-first PWA using React, TypeScript, Tailwind CSS, and Whisper STT for voice-to-text fitness tracking with real-time workout logging and offline support.',
      highlights: [
        'Designed accessible UI with real-time workout tracking',
        'Automated workflows in n8n for seamless data processing',
        'Integrated live dashboards for progress tracking and analytics'
      ],
      tags: ['React', 'TypeScript', 'Whisper STT', 'Supabase', 'n8n', 'PWA', 'Tailwind CSS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Deepfake Image Forgery Detection',
      subtitle: 'CNN-Based Detection Model',
      period: 'Jan 2023 – Mar 2023',
      description: 'Developed a Convolutional Neural Network model achieving 92.23% accuracy for detecting tampered and manipulated images under compression.',
      highlights: [
        'Achieved 92.23% accuracy on compressed image datasets',
        'Implemented CNN architecture for robust forgery detection',
        'Applied computer vision techniques for feature extraction'
      ],
      tags: ['Python', 'Deep Learning', 'CNNs', 'Computer Vision', 'Anomaly Detection'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Vehicle Maintenance Tracker',
      subtitle: 'Role-Based Maintenance System',
      period: 'Mar 2025 – May 2025',
      description: 'Designed role-based frontend forms for service logs and parts tracking, integrated with RESTful APIs, alert systems, and real-time monitoring dashboards.',
      highlights: [
        'Built role-based access control for different user types',
        'Integrated RESTful APIs for seamless data synchronization',
        'Developed real-time alert systems and monitoring dashboards'
      ],
      tags: ['React', 'REST APIs', 'TypeScript', 'Real-time Dashboard', 'Role-Based Access'],
      color: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Building intelligent systems that solve real-world problems
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">{project.subtitle}</p>
                  </div>
                  <span className="text-gray-600 font-medium text-sm md:text-base whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
