import { GraduationCap, BookOpen, Award } from 'lucide-react';

interface EducationProps {
  id: string
  setActiveSection: (section: string) => void
}

const Education = ({ id, setActiveSection: _setActiveSection }: EducationProps) => {
  const coursework = [
    'Data Modeling',
    'Systems Design',
    'Web Development',
    'Data Visualization',
  ];

  const interests = [
    'Cybersecurity',
    'Generative AI',
    'Anomaly Detection',
    'AI Agents',
    'Data Visualization',
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Education & Research
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                <GraduationCap className="text-white" size={40} />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Master of Science in Information Science
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  University of North Texas, Denton, TX
                </p>
                <div className="flex flex-wrap gap-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Award className="text-blue-600" size={20} />
                    <span className="font-bold">GPA: 4.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Graduation: May 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-blue-600" size={24} />
                  <h4 className="text-xl font-bold text-gray-900">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-blue-600" size={24} />
                  <h4 className="text-xl font-bold text-gray-900">Research Interests</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
