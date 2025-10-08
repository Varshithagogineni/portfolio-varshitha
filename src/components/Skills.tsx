import { Code, Brain, Wrench, Layers } from 'lucide-react';

interface SkillsProps {
  id: string
  setActiveSection: (section: string) => void
}

const Skills = ({ id, setActiveSection: _setActiveSection }: SkillsProps) => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: Code,
      skills: ['Python', 'SQL', 'React', 'TypeScript', 'HTML5', 'Tailwind CSS', 'REST APIs', 'Git/GitHub'],
      color: 'bg-blue-600'
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Deep Learning', 'CNNs', 'RAG', 'Anomaly Detection', 'Whisper STT', 'Computer Vision'],
      color: 'bg-blue-700'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Supabase', 'n8n', 'RapidMiner'],
      color: 'bg-blue-800'
    },
    {
      title: 'Software Engineering',
      icon: Layers,
      skills: ['Agile', 'CI/CD', 'Component-Based Architecture', 'Accessibility', 'Performance Optimization'],
      color: 'bg-blue-900'
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          A comprehensive toolkit for building intelligent, secure, and scalable systems
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Continuous Learning'].map((strength, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
