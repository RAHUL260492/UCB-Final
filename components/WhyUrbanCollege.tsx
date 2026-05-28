import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, DollarSign, Clock, Users, GraduationCap, Briefcase } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const FEATURES = [
  {
    icon: Globe,
    title: 'Multilingual Education',
    desc: 'Courses in English, Spanish, and Mandarin (with others in contract courses).',
    gradient: 'from-ucb-blue to-ucb-teal',
    bg: 'bg-blue-50',
    iconColor: 'text-ucb-blue',
    hoverBg: 'group-hover:bg-ucb-blue',
    accentColor: '#0066A2',
  },
  {
    icon: DollarSign,
    title: 'Radical Affordability',
    desc: 'Personalized financial aid plans and low tuition to keep your education affordable.',
    gradient: 'from-ucb-green to-ucb-teal',
    bg: 'bg-green-50',
    iconColor: 'text-ucb-green',
    hoverBg: 'group-hover:bg-ucb-green',
    accentColor: '#006A3C',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    desc: '8-week fast track, weekend, and evening options for working adults.',
    gradient: 'from-ucb-orange to-orange-400',
    bg: 'bg-orange-50',
    iconColor: 'text-ucb-orange',
    hoverBg: 'group-hover:bg-ucb-orange',
    accentColor: '#E68325',
  },
  {
    icon: Users,
    title: 'Community-Rooted',
    desc: 'Founded by ABCD. Proud HSI designated institution.',
    gradient: 'from-ucb-teal to-ucb-blue',
    bg: 'bg-teal-50',
    iconColor: 'text-ucb-teal',
    hoverBg: 'group-hover:bg-ucb-teal',
    accentColor: '#26AB9A',
  },
  {
    icon: GraduationCap,
    title: 'Start Here, Go Anywhere',
    desc: 'Direct transfer agreements to top 4-year universities in Boston.',
    gradient: 'from-ucb-periwinkle to-ucb-blue',
    bg: 'bg-ucb-periwinkle/10',
    iconColor: 'text-ucb-periwinkle',
    hoverBg: 'group-hover:bg-ucb-periwinkle',
    accentColor: '#6487B0',
  },
  {
    icon: Briefcase,
    title: 'Career-Ready Education',
    desc: 'Programs designed for skills employers seek.',
    gradient: 'from-ucb-orange to-ucb-teal',
    bg: 'bg-orange-50',
    iconColor: 'text-ucb-orange',
    hoverBg: 'group-hover:bg-ucb-orange',
    accentColor: '#E68325',
  },
];

const WhyUrbanCollege: React.FC = () => {
  return (
    <section id="why-urban-college" className="py-3 md:py-5 bg-white relative overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-ucb-sage/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-ucb-blue/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none animate-float-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section header */}
        <ScrollAnimation variant="fade-up" delay="0s" className="text-center mb-3 md:mb-5">
          <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Our Mission</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ucb-blue mb-3 leading-tight">
            Why Urban College?
          </h2>
          {/* Animated accent bar */}
          <div className="flex justify-center mb-4">
            <div
              className="h-1 bg-gradient-to-r from-ucb-blue via-ucb-teal to-ucb-green rounded-full"
              style={{ width: '56px', animation: 'widthGrow 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s both', ['--target-width' as any]: '56px' }}
            />
          </div>
          <p className="text-base text-gray-600 leading-relaxed font-light max-w-xl mx-auto">
            A college community dedicated to your success.
          </p>
        </ScrollAnimation>

        {/* Feature cards — staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, idx) => (
            <ScrollAnimation
              key={idx}
              variant="fade-up"
              delay={`${0.08 + idx * 0.1}s`}
              duration="700ms"
            >
              <div
                className="group p-5 rounded-2xl bg-white border border-gray-100 transition-all duration-400 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 flex flex-row gap-4 items-start cursor-default relative overflow-hidden"
                style={{ transition: 'all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)' }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`}
                  style={{ background: `linear-gradient(135deg, ${feature.accentColor}08 0%, ${feature.accentColor}04 100%)` }}
                />

                {/* Accent bar at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 group-hover:h-1 transition-all duration-300"
                  style={{ backgroundColor: feature.accentColor, opacity: 0.7 }}
                />

                {/* Icon circle */}
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10`}
                  style={{ boxShadow: `0 0 0 0 ${feature.accentColor}40` }}
                >
                  <feature.icon className={`w-6 h-6 ${feature.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>

                <div className="relative z-10">
                  <h3
                    className="font-display font-bold text-base text-ucb-blue mb-1 transition-colors duration-300"
                  >
                    <span className="bg-clip-text group-hover:text-transparent transition-all duration-300"
                      style={{ backgroundImage: `linear-gradient(135deg, ${feature.accentColor}, ${feature.accentColor}cc)` }}
                    >
                      {feature.title}
                    </span>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}

           {/* Learn more CTA */}
          <ScrollAnimation variant="fade-up" delay="0.6s" className="sm:col-span-2 lg:col-span-3 flex items-center justify-center mt-2">
            <Link to="/about" className="group text-ucb-green font-bold hover:text-ucb-blue transition-colors flex items-center gap-2 text-sm relative min-h-[44px]">
              <span>Learn about our history</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-ucb-blue group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
};

export default WhyUrbanCollege;