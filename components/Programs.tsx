import React, { useState } from 'react';
import { Program } from '../types';
import { ArrowRight, BookOpen, Briefcase, Award } from 'lucide-react';

const PROGRAMS: Program[] = [
  { id: '1', title: 'Early Childhood Education', type: 'Associate', tags: ['Multilingual', 'Online'], description: 'Prepare for a career nurturing the next generation.' },
  { id: '2', title: 'Human Services Administration', type: 'Associate', tags: ['Hybrid', 'Fast Track'], description: 'Lead with compassion in social work and community services.' },
  { id: '3', title: 'General Studies', type: 'Associate', tags: ['Flexible', 'Transfer Pathway'], description: 'Build a solid foundation for your bachelor’s degree.' },
  { id: '4', title: 'Clinical Research Coordination', type: 'Certificate', tags: ['High Growth', '12 Months'], description: 'Enter the booming biotech and medical research field.' },
  { id: '5', title: 'Community Health Worker', type: 'Certificate', tags: ['Bilingual', 'Job Ready'], description: 'Support public health initiatives in your community.' },
  { id: '6', title: 'Digital Literacy', type: 'Certificate', tags: ['Foundational', 'Free for qualified'], description: 'Master the essential tools for the modern workplace.' },
];

const Programs: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Associate' | 'Certificate'>('All');

  const filteredPrograms = PROGRAMS.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="programs" className="py-24 bg-ucb-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ucb-dark mb-4">
            Your Path Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible schedules designed for working adults. Classes in your language.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-md border border-gray-100 inline-flex">
            {['All', 'Associate', 'Certificate'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  filter === tab 
                    ? 'bg-ucb-emerald text-white shadow-sm' 
                    : 'text-gray-500 hover:text-ucb-emerald'
                }`}
              >
                {tab === 'All' ? 'All Programs' : `${tab}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id} 
              className="group bg-ucb-champagne rounded-xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-ucb-emerald/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-24 h-24 text-ucb-emerald" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {program.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-ucb-emerald bg-white/60 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-display font-bold text-2xl text-ucb-dark mb-3 leading-tight">
                  {program.title}
                </h3>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                   <p className="text-gray-700 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {program.description}
                  </p>
                </div>

                <div className="flex items-center text-ucb-emerald font-bold mt-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Plum Callout */}
        <div className="mt-16 bg-ucb-plum rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden">
           <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
           <div className="relative z-10">
             <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">Not sure where to start?</h3>
             <p className="text-purple-100">Take our 2-minute assessment to find your perfect fit.</p>
           </div>
           <button className="mt-6 md:mt-0 bg-white text-ucb-plum hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors relative z-10">
             Start Program Finder Quiz
           </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;