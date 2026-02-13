import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Gonzalez',
    role: 'Class of 2024, Human Services',
    quote: "Being able to take classes in Spanish while improving my English changed everything. I didn't just get a degree; I got a family.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Jean Pierre',
    role: 'Certificate in Digital Literacy',
    quote: "I was working two jobs. The flexible schedule at UCB allowed me to study at night. Now I'm working in IT support.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Sarah Chen',
    role: 'Early Childhood Education',
    quote: "The professors actually care. They know your name, your story, and they push you to succeed. Best decision I ever made.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-ucb-champagne">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <Quote className="w-12 h-12 text-ucb-copper mb-8 opacity-50" />
          
          <div className="relative w-full max-w-4xl mx-auto min-h-[400px]">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id}
                className={`absolute inset-0 transition-all duration-700 transform flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                  idx === active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'
                }`}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full border-4 border-ucb-copper p-1">
                   <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                
                <div className="text-center md:text-left">
                  <p className="font-display text-2xl md:text-3xl font-medium text-ucb-dark leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <h4 className="font-bold text-xl text-ucb-emerald">{t.name}</h4>
                  <p className="text-gray-600 uppercase tracking-widest text-sm mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-ucb-dark/20 hover:bg-ucb-dark hover:text-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActive(idx)} 
                  className={`w-3 h-3 rounded-full transition-all ${active === idx ? 'bg-ucb-emerald w-8' : 'bg-gray-400'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full border border-ucb-dark/20 hover:bg-ucb-dark hover:text-white transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;