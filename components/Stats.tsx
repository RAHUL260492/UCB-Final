import React from 'react';
import { Stat } from '../types';

const STATS: Stat[] = [
  { id: '1', value: '94', suffix: '%', label: 'Graduate Debt-Free' },
  { id: '2', value: '1,200', prefix: '$', label: 'Avg Out-of-Pocket Cost' },
  { id: '3', value: '5', label: 'Languages Offered' },
  { id: '4', value: '30+', label: 'Years of Impact' },
];

const Stats: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-ucb-dark text-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center group">
              <div className="font-display font-bold text-4xl md:text-6xl text-ucb-emerald mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="font-sans text-ucb-champagne text-lg tracking-wide uppercase text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-ucb-ivory text-xl font-light leading-relaxed">
            At Urban College, we believe financial barriers should never stand in the way of education. Our model is built on radical affordability and community support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;