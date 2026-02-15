import React, { useState } from 'react';
import { Program } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

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
    <section id="programs" className="py-24 bg-gray-50 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation delay="0.1s">
          <div className="text-center mb-16">
            <span className="text-ucb-orange font-bold tracking-widest uppercase text-sm mb-4 block">Academics</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ucb-blue mb-6">
              Your Path Starts Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Flexible schedules designed for working adults. Classes in your language.
              <span className="block mt-2 font-semibold text-ucb-green">Real-world skills for real-world careers.</span>
            </p>
          </div>
        </ScrollAnimation>

        {/* Filter Tabs */}
        <ScrollAnimation delay="0.2s" className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-lg border border-gray-100 inline-flex gap-2">
            {['All', 'Associate', 'Certificate'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${filter === tab
                  ? 'bg-ucb-blue text-white shadow-md transform scale-105'
                  : 'text-gray-500 hover:text-ucb-blue hover:bg-gray-50'
                  }`}
              >
                {tab === 'All' ? 'All Programs' : `${tab}s`}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {filteredPrograms.map((program, idx) => (
            <ScrollAnimation key={program.id} delay={`${0.1 + (idx * 0.1)}s`}>
              <div
                className="group relative bg-white border border-gray-200 hover:border-ucb-blue transition-all duration-300 p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 rounded-sm h-full"
              >
                {/* Background Icon for visual interest */}
                <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 duration-700">
                  <BookOpen className="w-48 h-48 text-ucb-blue" />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 border text-ucb-green border-ucb-green bg-green-50/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-3xl mb-4 leading-tight text-ucb-blue">
                    {program.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-gray-600">
                    {program.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-ucb-blue/20 transition-colors">
                  <button className="flex items-center font-bold gap-2 group/btn uppercase tracking-widest text-sm text-ucb-blue">
                    View Program
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}

          {/* Callout Tile */}
          <ScrollAnimation delay="0.4s" className="lg:col-span-2">
            <div className="bg-ucb-orange text-white p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-lg rounded-sm h-full">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>
              <div className="relative z-10 max-w-md">
                <h3 className="font-display font-bold text-3xl mb-2">Unsure which path?</h3>
                <p className="opacity-90 font-medium">Take our 2-minute assessment to discover your perfect program match.</p>
              </div>
              <button className="relative z-10 bg-white text-ucb-orange hover:bg-ucb-blue hover:text-white font-bold py-4 px-8 transition-colors shadow-lg whitespace-nowrap hover:scale-105 transform duration-300">
                Start Finder
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Programs;