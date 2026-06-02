import React, { useState } from 'react';
import { Program } from '../types';
import { ArrowRight, BookOpen, Code2, Heart, BookMarked, Briefcase, GraduationCap, Users, Laptop, Stethoscope, Baby, BarChart3 } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { Link } from 'react-router-dom';

const PROGRAM_ICONS: Record<string, React.FC<any>> = {
  '1': Baby,
  '2': Users,
  '3': BookMarked,
  '4': Stethoscope,
  '5': Heart,
  '6': Laptop,
  '7': Briefcase,
  '8': Users,
  '9': Heart,
  '10': BarChart3,
  '11': Stethoscope,
  '12': Baby,
  '13': BookMarked,
  '14': Users,
  '15': GraduationCap,
  '16': BarChart3,
};

const TILE_COLORS = [
  '#0066A2', '#006A3C', '#E68325', '#26AB9A',
  '#6487B0', '#A3B48C', '#0066A2', '#006A3C',
  '#E68325', '#26AB9A', '#6487B0', '#0066A2',
  '#006A3C', '#E68325', '#26AB9A', '#6487B0',
];

const PROGRAMS: Program[] = [
  { id: '1', title: 'Early Childhood Education', type: 'Associate Degree', tags: ['English & Spanish', '2 Years'], description: 'Prepare for a career nurturing the next generation.', link: '/programs/early-childhood-education' },
  { id: '2', title: 'Human Services Administration', type: 'Associate Degree', tags: ['English & Spanish', '2 Years'], description: 'Do you want to help people? Make a real difference in your community while building the skills and credentials for a rewarding career in social services.', link: '/programs/human-services-administration' },
  { id: '3', title: 'General Studies', type: 'Associate Degree', tags: ['English & Spanish', '2 Years'], description: 'Build a solid foundation for your bachelor\'s degree.', link: '/programs/general-studies-associate' },
  { id: '7', title: 'Business', type: 'Certificate', tags: ['English', '1 Year'], description: 'Build foundational business skills and advance your career.', link: '/programs/business-certificate' },
  { id: '8', title: 'Case Management', type: 'Certificate', tags: ['English', '9 Months'], description: 'Make a difference with specialized case management skills.', link: '/programs/case-management' },
  { id: '9', title: "Children's Behavioral Health", type: 'Certificate', tags: ['English & Spanish', '9 Months'], description: 'Support the behavioral health needs of children.', link: '/programs/childrens-behavioral-health-certificate' },
  { id: '10', title: 'Digital Marketing', type: 'Certificate', tags: ['English', '9 Months'], description: 'Master the tools to succeed in the digital economy.', link: '/programs/digital-marketing-certificate' },
  { id: '11', title: 'Elder Care', type: 'Certificate', tags: ['English', '1 Year'], description: 'Transform lives while building your own career. Master the skills that help older adults and their families thrive.', link: '/programs/elder-care' },
  { id: '12', title: 'Early Childhood Education', type: 'Certificate', tags: ['English & Spanish', '1 Year'], description: 'Begin your journey in early childhood education.', link: '/programs/early-childhood-education-certificate' },
  { id: '13', title: 'General Studies', type: 'Certificate', tags: ['English & Spanish', '1 Year'], description: 'Explore subjects and build foundational knowledge.', link: '/programs/general-studies-certificate' },
  { id: '14', title: 'Human Services', type: 'Certificate', tags: ['English & Spanish', '1 Year'], description: 'Launch your career helping others while you work. Build the credentials to advance your career in social services.', link: '/programs/human-services-certificate' },
  { id: '15', title: 'Paraprofessional Educator', type: 'Certificate', tags: ['English & Spanish', '1 Year'], description: 'Shape young minds and launch your teaching career. Support teachers and help students of all abilities succeed.', link: '/programs/paraprofessional-educator-certificate' },
  { id: '16', title: 'Project Management', type: 'Certificate', tags: ['English & Spanish', '1 Year'], description: 'Lead projects, build your career, and earn while you learn. Master project planning, scheduling, budgeting, and leadership.', link: '/programs/project-management-certificate' },
];

const Programs: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Associate Degree' | 'Certificate'>('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const handleFilterChange = (newFilter: 'All' | 'Associate Degree' | 'Certificate') => {
    setFilter(newFilter);
    setVisibleCount(8);
  };

  const filteredPrograms = PROGRAMS.filter(p => filter === 'All' || p.type === filter);
  const visiblePrograms = filteredPrograms.slice(0, visibleCount);

  return (
    <section id="programs" className="py-3 md:py-5 bg-gray-50 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollAnimation delay="0.1s">
          <div className="text-center mb-3">
            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Academics</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ucb-blue mb-3">
              Your Path Starts Here
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
              Flexible schedules for busy lives. Classes in your language.
              <span className="block mt-1 font-semibold text-ucb-green text-sm leading-relaxed">Real-world skills for real-world careers.</span>
            </p>
          </div>
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation delay="0.2s" className="flex justify-center mb-4">
          <div className="bg-white p-1 rounded-full shadow-md border border-gray-100 inline-flex gap-1">
            {['All', 'Associate Degree', 'Certificate'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleFilterChange(tab as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${filter === tab
                  ? 'bg-ucb-blue text-white shadow-md transform scale-105'
                  : 'text-gray-500 hover:text-ucb-blue-glow hover:bg-ucb-blue-glow/5'
                  }`}
              >
                {tab === 'All' ? 'All Programs' : tab === 'Associate Degree' ? 'Associate Degrees' : 'Certificates'}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[minmax(160px,auto)]">
          {visiblePrograms.map((program, idx) => {
            const IconComp = PROGRAM_ICONS[program.id] || BookOpen;
            const accentColor = TILE_COLORS[idx % TILE_COLORS.length];
            return (
              <ScrollAnimation key={program.id} delay={`${0.05 + (idx * 0.045)}s`} variant="fade-up">
                <div
                  className="group relative border border-gray-200 hover:border-transparent transition-all duration-350 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 rounded h-full shimmer-overlay"
                  style={{
                    transition: 'all 0.35s cubic-bezier(0.34, 1.2, 0.64, 1)',
                    backgroundColor: 'white',
                    backgroundImage: `linear-gradient(to bottom right, white 70%, ${accentColor}1A 100%)`
                  }}
                >
                  {/* Color accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{ backgroundColor: accentColor }}></div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor, boxShadow: `0 0 0 0 ${accentColor}20` }}>
                    <IconComp className="w-5 h-5 transition-transform duration-300" />
                  </div>

                  <div className="flex-1">
                    <div className="flex gap-1 mb-2 flex-wrap">
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 leading-relaxed">
                        {program.type}
                      </span>
                      {program.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-bold text-base mb-1.5 leading-tight text-ucb-blue group-hover:text-opacity-90">
                      {program.title}
                    </h3>

                    {/* Description in hover tooltip */}
                    <p className="text-xs leading-relaxed text-gray-500 line-clamp-2">
                      {program.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gray-100 group-hover:border-opacity-50 transition-colors">
                    {program.link && program.link !== '#' ? (
                      <Link to={program.link} className="flex items-center font-bold gap-1 group/btn uppercase tracking-widest text-[10px] hover:text-ucb-orange transition-colors"
                        style={{ color: accentColor }}>
                        View Program
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <button className="flex items-center font-bold gap-1 group/btn uppercase tracking-widest text-[10px] transition-colors min-h-[44px]"
                        style={{ color: accentColor }}>
                        View Program
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}          {visibleCount < filteredPrograms.length && (
            <div className="sm:col-span-2 lg:col-span-4 flex justify-center mt-6 mb-8">
              <button
                onClick={() => setVisibleCount(prev => prev + 8)}
                className="w-auto bg-white text-ucb-blue hover:bg-ucb-blue hover:text-white font-bold py-[2px] px-[52px] rounded-[100px] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm leading-none tracking-wide flex items-center justify-center min-h-[32px]"
              >
                View more
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Programs;