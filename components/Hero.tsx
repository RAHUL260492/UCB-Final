import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Globe, Sun, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const TAGLINES = [
  "Your Future.",
  "Your Community.",
  "Your Opportunity.",
  "Your Success.",
];

const HERO_TESTIMONIALS = [
  {
    id: '1',
    name: 'Alecia H.',
    role: 'ALUM',
    quote: "My experience with Urban College has been very positive because of the support I have received from the faculty and staff. Urban College helped me find my voice.",
    image: '/assets/images/testimonials/alecia-h.webp',
    nameColor: '#006A3C'
  },
  {
    id: '2',
    name: 'Ayesha M. W.',
    role: 'ALUM',
    quote: "Classes were in the evening, so I could get off work and then attend. This allowed me to maintain my life and work schedule, and personal things that matter, too.",
    image: '/assets/images/testimonials/ayesha-w.jpg',
    nameColor: '#0066A2'
  },
  {
    id: '3',
    name: 'Elijah W.',
    role: 'ALUM',
    quote: "I liked that I could do the work on my own schedule, but it still felt like I was part of a real college experience. I never felt alone.",
    image: '/assets/images/testimonials/elijah-w.png',
    nameColor: '#E68325'
  },
];

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPrevIndex(textIndex => textIndex);
      setTextIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 3500);

    const testInterval = setInterval(() => {
      setTestIndex((prev) => (prev + 1) % HERO_TESTIMONIALS.length);
    }, 12000);

    return () => {
      clearInterval(interval);
      clearInterval(testInterval);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center bg-gray-50 overflow-hidden pt-12 md:pt-20 pb-6 md:pb-10">

      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f6fa 25%, #f2f9f8 50%, #fdf6ec 75%, #f4f7fa 100%)',
          backgroundSize: '400% 400%'
        }}>
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 left-[5%] w-32 h-32 bg-ucb-blue/10 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 left-[15%] w-20 h-20 bg-ucb-green/15 rounded-full blur-xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-[10%] w-40 h-40 bg-ucb-orange/10 rounded-full blur-3xl animate-float-slow pointer-events-none" style={{ animationDelay: '0.8s' }} />
      <div className="absolute bottom-0 right-[25%] w-24 h-24 bg-ucb-teal/15 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#0066A2 1px, transparent 1px), linear-gradient(90deg, #0066A2 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

        {/* Left Content */}
        <div className="space-y-3 md:space-y-4">

          {/* Badge — slide in from left */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-ucb-blue/10 rounded-full bg-white/60 shadow-sm backdrop-blur-sm relative z-50"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-ucb-blue px-1">Your online community college</span>
          </div>

          {/* Heading — slide up */}
          <h1
            className="font-display font-black text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-ucb-blue tracking-tight"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            Flexible, affordable <br />
            <span className="text-gray-900 drop-shadow-sm">online education for all.</span>
          </h1>

          {/* Animated tagline */}
          <div
            className="h-8 md:h-10 flex items-center overflow-hidden"
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.6s ease 0.45s'
            }}
          >
            {TAGLINES.map((tag, i) => (
              <span
                key={tag}
                className="absolute font-serif italic text-xl md:text-2xl text-gray-800 border-l-4 border-ucb-teal pl-4"
                style={{
                  opacity: i === textIndex ? 1 : 0,
                  transform: i === textIndex ? 'translateX(0)' : 'translateX(-15px)',
                  transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed font-light border-t border-ucb-blue/10 pt-2"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
            }}
          >
            The only accredited online college designed for working students, English Language Learners, and parents.
            <strong className="text-gray-900 font-bold block mt-1 text-sm md:text-base">Associate Degrees &amp; Certificates for the Real World.</strong>
          </p>

          {/* RFI Form */}
          <div
            className={`bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-[0_8px_30px_rgba(0,102,162,0.06)] transition-all duration-300 shimmer-overlay ${name || email ? 'border-2 border-ucb-teal shadow-[0_0_20px_rgba(38,171,154,0.1)]' : 'border border-white'} max-w-[95%]`}
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sun className="w-3 h-3 text-ucb-teal" />
              <p className="text-[11px] font-bold text-ucb-blue uppercase tracking-wider leading-relaxed">Quick Info Request</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <input
                type="text" placeholder="Your name" value={name}
                onChange={e => setName(e.target.value)}
                className="flex-1 min-w-[110px] px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-ucb-teal focus:ring-[1px] focus:ring-ucb-teal transition-all min-h-[40px] shadow-sm"
              />
              <input
                type="email" placeholder="Email address" value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 min-w-[130px] px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-ucb-teal focus:ring-[1px] focus:ring-ucb-teal transition-all min-h-[40px] shadow-sm"
              />
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar', { detail: { formId: 'urbancollege.forms.25231', name, email } }))}
                className="px-4 py-2 bg-ucb-orange text-white text-sm font-bold rounded-lg hover:bg-ucb-orange-glow active:scale-[0.97] transition-all whitespace-nowrap hover:shadow-lg hover:-translate-y-0.5 min-h-[40px]"
                style={{ boxShadow: '0 2px 12px rgba(230,131,37,0.35)' }}
              >
                Get Info <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-2"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
            }}
          >
            <Link to="/programs" className="group relative px-6 py-3 bg-ucb-blue text-white font-bold rounded-none overflow-hidden hover:shadow-xl transition-all duration-300 text-sm shimmer-overlay min-h-[44px] inline-flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-2">
                Explore Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-ucb-blue-glow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out"></div>
            </Link>
            <Link to="/admissions" className="px-6 py-3 border-2 border-ucb-blue text-ucb-blue font-bold text-sm bg-transparent hover:bg-ucb-blue/5 transition-all duration-300 hover:-translate-y-0.5 min-h-[44px] inline-flex items-center justify-center">
              Apply Free
            </Link>
          </div>
        </div>

        {/* Right Testimonial Carousel */}
        <div className="relative mt-8 lg:mt-0 w-full hidden md:block"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.96)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
          }}
        >
          <div className="relative w-full lg:w-[105%] bg-transparent p-4 lg:p-6 overflow-hidden min-h-[300px] flex flex-col justify-center">

            {/* Background Quotes */}
            <div className="absolute top-4 inset-x-0 flex justify-center opacity-30">
              <Quote className="w-14 h-14 text-ucb-orange rotate-180" fill="currentColor" />
            </div>

            <div className="relative z-10 flex items-center gap-6 lg:gap-8 mt-6">

              {/* Circular Avatar */}
              <div className="shrink-0 relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-[5px] border-ucb-orange shadow-lg overflow-hidden relative">
                  {HERO_TESTIMONIALS.map((t, i) => (
                    <img
                      key={t.id + 'img'}
                      src={t.image}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale-[20%]"
                      style={{
                        opacity: i === testIndex ? 1 : 0,
                        transform: i === testIndex ? 'scale(1)' : 'scale(1.05)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-h-[140px] flex flex-col justify-center">
                <div className="relative">
                  {HERO_TESTIMONIALS.map((t, i) => (
                    <div
                      key={t.id + 'txt'}
                      className="absolute inset-0 flex flex-col justify-center"
                      style={{
                        opacity: i === testIndex ? 1 : 0,
                        transform: i === testIndex ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: i === testIndex ? 'auto' : 'none'
                      }}>
                      <p className="font-serif font-medium text-gray-900 text-lg lg:text-[22px] leading-[1.4] mb-4">
                        "{t.quote}"
                      </p>
                      <div>
                        <p className="font-bold text-[15px] mb-0.5" style={{ color: t.nameColor }}>{t.name}</p>
                        <p className="text-[10px] tracking-widest text-gray-500 font-semibold">{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
              {HERO_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === testIndex ? 'bg-ucb-orange w-4' : 'bg-ucb-orange/30'}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;