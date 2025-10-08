import { Award, MapPin, Calendar, Sparkles, Trophy } from 'lucide-react';

interface HackathonsProps {
  id: string
  setActiveSection: (section: string) => void
}

const Hackathons = ({ id, setActiveSection: _setActiveSection }: HackathonsProps) => {
  const events = [
    {
      title: 'Dallas AI Summit',
      role: 'Top 15 Presenter',
      period: 'Summer 2025',
      location: 'Dallas, TX',
      description: 'Selected among the Top 15 projects to present VoiceFit to AI professionals and industry leaders.',
      highlights: [
        'Showcased real-time voice-to-text fitness tracking and automation workflows',
        'Presented using OpenAI Whisper + Supabase integration',
        'Engaged in professional feedback sessions with AI leaders on deployment and scalability'
      ],
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'A New Agent Hackathon',
      role: 'Participant & Builder',
      period: 'October 2025',
      location: 'San Francisco, CA',
      description: 'Building cutting-edge AI agents with a focus on integration, reliability, and real-world applications.',
      highlights: [
        'Developing AI agents with advanced integration capabilities',
        'Collaborating with top builders in the AI agent space',
        'Focus on creating production-ready, scalable agent systems'
      ],
      icon: Sparkles,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Hackathons & Events
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Building with the best, learning from the best, shipping the best
        </p>

        <div className="space-y-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`${event.bgColor} rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}>
                    <event.icon className="text-white" size={36} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-2`}>
                        {event.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="font-medium">{event.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2">
                    {event.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <Award className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">
              Actively seeking opportunities to collaborate, build, and ship at hackathons and tech events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
