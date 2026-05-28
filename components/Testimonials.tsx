import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Alecia H.',
    role: 'Alum',
    quote: "My experience with Urban College has been very positive because of the suppport I have received from the faculty and staff. Urban College helped me find my voice and helped me believed in myself and gain confidence.",
    image: '/assets/images/testimonials/alecia-h.webp',
    accentColor: 'var(--color-ucb-blue)',
  },
  {
    id: '2',
    name: 'Adzele B.',
    role: 'Alum',
    quote: "My experience with Urban College has been very positive because of the suppport I have received from the faculty and staff. Urban College helped me find my voice and helped me believed in myself and gain confidence.",
    image: '/assets/images/testimonials/adzele-b.webp',
    accentColor: 'var(--color-ucb-green)',
  },
  {
    id: '3',
    name: 'Ayesha M. W.',
    role: 'Alum',
    quote: "The hours were a big part of choosing Urban College. Classes were in the evening, so I could get off work and then attend. This allowed me to maintain my life and work schedule, and personal things that matter, too. As an adult with bills to pay, I couldn’t take off work to attend school, so it worked well.",
    image: '/assets/images/testimonials/ayesha-w.jpg',
    accentColor: 'var(--color-ucb-orange)',
  },
  {
    id: '4',
    name: 'Dominga V.',
    role: 'Alum',
    quote: "Urban College opened doors for me, opened opportunities for me that I never envisioned. I dare to say that everything in my life is thanks to Urban College.",
    image: '/assets/images/testimonials/dominga-v.png',
    accentColor: 'var(--color-ucb-teal)',
  },
  {
    id: '5',
    name: 'Elijah W.',
    role: 'Alum',
    quote: "I liked that I could do the work on my own schedule, but it still felt like I was part of a real college experience. I never felt alone.",
    image: '/assets/images/testimonials/elijah-w.png',
    accentColor: 'var(--color-ucb-blue)',
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (idx: number, dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 350);
  };

  const next = () => goTo((active + 1) % TESTIMONIALS.length, 'right');
  const prev = () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, 'left');

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [active]);

  const t = TESTIMONIALS[active];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-4 md:py-6 relative overflow-hidden bg-white"
    >
      {/* Floating decorative quote marks */}
      <div className="absolute top-4 left-8 opacity-10 pointer-events-none animate-float-slow">
        <Quote className="w-32 h-32 text-ucb-periwinkle" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute bottom-4 right-8 opacity-10 pointer-events-none animate-float-slow" style={{ animationDelay: '1.5s' }}>
        <Quote className="w-20 h-20 text-ucb-periwinkle rotate-180" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section heading */}
        <div
          className="text-center mb-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.1s'
          }}
        >
          <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Student Stories</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ucb-blue">What Our Students Say</h2>
        </div>

        {/* Card */}
        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s'
          }}
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden">

            {/* Animated top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-700 rounded-t-3xl"
              style={{ backgroundColor: t.accentColor }}
            />

            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div
                className="shrink-0 relative"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? `translateX(${direction === 'right' ? '-20px' : '20px'}) scale(0.9)`
                    : 'translateX(0) scale(1)',
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)'
                }}
              >
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg"
                  style={{ border: `3px solid ${t.accentColor}` }}
                >
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                {/* Floating color dot */}
                <div
                  className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ backgroundColor: t.accentColor }}
                >
                  <Quote className="w-3 h-3 text-white fill-white" />
                </div>
              </div>

              {/* Content */}
              <div
                className="flex-1"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? `translateX(${direction === 'right' ? '20px' : '-20px'})`
                    : 'translateX(0)',
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)'
                }}
              >
                {/* Stars Removed */}

                <blockquote className="text-sm md:text-base font-medium text-gray-700 leading-relaxed mb-4 italic">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 rounded-full transition-colors duration-500" style={{ backgroundColor: t.accentColor }} />
                  <div>
                    <span className="font-bold text-ucb-blue text-sm leading-relaxed">{t.name}</span>
                    <span className="text-gray-400 text-xs ml-1 uppercase tracking-wider leading-relaxed">• {t.role}</span>
                  </div>
                </div>
              </div>

              {/* Large quote icon */}
              <div className="hidden md:block shrink-0 opacity-10">
                <Quote className="w-12 h-12" style={{ color: t.accentColor }} />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={prev}
            className="p-2.5 rounded-full border-2 border-ucb-blue/20 hover:border-ucb-blue hover:bg-ucb-blue hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 text-ucb-blue min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Animated dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx, idx > active ? 'right' : 'left')}
                className="h-2 rounded-full transition-all duration-400 ease-out"
                style={{
                  width: active === idx ? '28px' : '8px',
                  backgroundColor: active === idx ? t.accentColor : '#D1D5DB'
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2.5 rounded-full border-2 border-ucb-blue/20 hover:border-ucb-blue hover:bg-ucb-blue hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 text-ucb-blue min-h-[44px]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;