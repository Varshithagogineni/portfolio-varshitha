import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  id: string
  setActiveSection: (section: string) => void
}

const Experience = ({ id, setActiveSection: _setActiveSection }: ExperienceProps) => {
  const responsibilities = [
    'Support students with academic and technical queries during class and office hours',
    'Manage course technology including software setup, secure access (BitLocker), and troubleshooting',
    'Monitor and resolve student support tickets and emails with clear, timely responses',
    'Collaborating on a Voice AI project to automate responses to course FAQs, improving accessibility'
  ];

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Teaching Assistant
                </h3>
                <p className="text-lg text-blue-600 font-semibold">
                  University of North Texas
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={20} />
                <span className="font-semibold">Dec 2024 – Present</span>
              </div>
            </div>

            <div className="space-y-4">
              {responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle
                    className="text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                  <p className="text-gray-700 leading-relaxed">{resp}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <div className="flex items-center gap-2 text-blue-700 font-semibold mb-3">
                <Briefcase size={20} />
                <span>Key Technologies & Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Voice AI', 'BitLocker', 'Student Support', 'Technical Troubleshooting', 'FAQ Automation'].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
