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
    <section id="faq" className="py-24 bg-ucb-ivory">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display font-bold text-4xl text-ucb-dark mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-ucb-dark">{faq.q}</span>
                {openIndex === idx ? <Minus className="text-ucb-copper" /> : <Plus className="text-ucb-emerald" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
           <a href="#" className="inline-flex items-center text-ucb-copper font-bold hover:underline">
             Have more questions? Chat with our team <span className="ml-2">→</span>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;