import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: "Can I work while studying?", a: "Absolutely. 85% of our students work while attending. We offer evening, weekend, and asynchronous online classes to fit your schedule." },
  { q: "Is financial aid available?", a: "Yes. As an accredited institution, we accept federal financial aid (FAFSA). We also offer institutional scholarships. Many students attend with zero out-of-pocket costs." },
  { q: "Do you offer classes in Spanish?", a: "Yes. Our Early Childhood Education and General Studies programs have specific tracks taught entirely or partially in Spanish, allowing you to learn while improving your English." },
  { q: "Are credits transferable?", a: "Yes. We have articulation agreements with Lesley University, Regis College, and other local institutions, making it easy to transfer your Associate degree into a Bachelor's program." }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-ucb-ivory relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-ucb-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about starting your journey.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openIndex === idx
                  ? 'shadow-lg border-ucb-emerald/30'
                  : 'shadow-sm border-gray-100 hover:border-ucb-emerald/20'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-ucb-emerald' : 'text-ucb-dark'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-ucb-emerald text-white rotate-180' : 'bg-gray-100 text-ucb-dark'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-ucb-champagne/30 rounded-2xl p-8">
          <p className="font-bold text-ucb-dark mb-4">Still have questions?</p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-ucb-dark border border-ucb-dark/10 rounded-full font-bold hover:bg-ucb-dark hover:text-white transition-all shadow-sm">
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;