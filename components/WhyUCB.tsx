import React from 'react';
import { Globe, DollarSign, Clock, Users, GraduationCap } from 'lucide-react';

const FEATURES = [
  { icon: Globe, title: 'Multilingual Education', desc: 'Courses offered in English, Spanish, Mandarin, Haitian Creole, and Portuguese.' },
  { icon: DollarSign, title: 'Radical Affordability', desc: 'Most students graduate debt-free thanks to grants and low tuition.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: '8-week fast track, weekend, and evening options for working adults.' },
  { icon: Users, title: 'Community-Rooted', desc: 'Founded by ABCD. Proud HSI & AANAPISI designated institution.' },
  { icon: GraduationCap, title: 'Career Pathways', desc: 'Direct transfer agreements to top 4-year universities in Boston.' },
];

const WhyUCB: React.FC = () => {
  return (
    <section id="why-ucb" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ucb-champagne/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="text-ucb-copper font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ucb-dark mb-8 leading-tight">
              Why Urban College?
            </h2>
            <div className="w-20 h-1.5 bg-ucb-emerald rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We are more than a college. We are a community dedicated to your success, regardless of your background or language.
            </p>
            <button className="mt-8 text-ucb-emerald font-bold hover:text-ucb-dark transition-colors flex items-center gap-2 group">
              Learn about our history <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:border-ucb-emerald/30 hover:shadow-xl hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-ucb-ivory flex items-center justify-center shrink-0 group-hover:bg-ucb-emerald transition-colors duration-500 shadow-inner">
                  <feature.icon className="w-8 h-8 text-ucb-copper group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ucb-dark mb-3 group-hover:text-ucb-emerald transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUCB;