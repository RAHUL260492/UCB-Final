import React from 'react';
import { Stat } from '../types';
import ScrollAnimation from './ScrollAnimation';

const STATS: Stat[] = [
  { id: '1', value: '94', suffix: '%', label: 'Graduate Debt-Free' },
  { id: '2', value: '1,200', prefix: '$', label: 'Avg Out-of-Pocket Cost' },
  { id: '3', value: '5', label: 'Languages Offered' },
  { id: '4', value: '30+', label: 'Years of Impact' },
];

const Stats: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-ucb-blue text-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-ucb-green/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <ScrollAnimation key={stat.id} delay={`${idx * 0.1}s`} className="flex flex-col items-center group relative p-4">
              <div className="font-display font-bold text-5xl md:text-7xl text-ucb-gold mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                <span className="text-3xl align-top opacity-50 mr-1">{stat.prefix}</span>
                {stat.value}
                <span className="text-3xl align-top opacity-50 ml-1">{stat.suffix}</span>
              </div>
              <div className="font-sans text-white/80 tracking-widest uppercase text-xs font-bold px-4 border-t border-white/10 pt-4 w-full group-hover:bg-white/5 transition-colors rounded-b-lg">
                {stat.label}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay="0.4s" className="mt-20 text-center max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl hover:border-ucb-gold/50 transition-colors">
          <p className="font-display text-2xl md:text-3xl text-white font-medium leading-relaxed">
            "At Urban College, we believe financial barriers should never stand in the way of education. Our model is built on <span className="text-ucb-gold border-b-2 border-ucb-gold pb-1 inline-block hover:scale-105 transition-transform">radical affordability</span> and community support."
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Stats;