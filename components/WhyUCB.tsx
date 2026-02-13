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
    <section id="why-ucb" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ucb-dark mb-6 sticky top-32">
              Why Urban College?
              <span className="block text-lg font-sans font-normal text-gray-500 mt-4">
                We are more than a college. We are a community dedicated to your success, regardless of your background or language.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {FEATURES.map((feature, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-xl bg-ucb-ivory border border-gray-100 transition-all hover:border-ucb-emerald hover:shadow-lg flex gap-6 items-start cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-ucb-champagne flex items-center justify-center shrink-0 group-hover:bg-ucb-emerald transition-colors">
                  <feature.icon className="w-6 h-6 text-ucb-copper group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ucb-dark mb-2 group-hover:text-ucb-emerald transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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