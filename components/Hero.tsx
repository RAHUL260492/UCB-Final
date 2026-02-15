import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Globe } from 'lucide-react';

const LANGUAGES = [
  "Your Language.",
  "Tu Idioma.",
  "Seu Idioma.",
  "Lang Ou.",
  "Zhōngwén."
];

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LANGUAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#0066A2 1px, transparent 1px), linear-gradient(90deg, #0066A2 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-ucb-blue/10 rounded-full bg-blue-50/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-ucb-green animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-ucb-blue">Est. 1993 • Boston, MA</span>
          </div>

          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-ucb-blue tracking-tight">
            URBAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ucb-green to-ucb-blue">COLLEGE</span>
          </h1>

          <div className="h-24 md:h-32 flex items-center">
            <span className="font-serif italic text-4xl md:text-6xl text-ucb-green border-l-4 border-ucb-blue pl-6 animate-fade-in-up key-[2]">
              {LANGUAGES[textIndex]}
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-light border-t border-ucb-blue/10 pt-8">
            The only college in Boston designed specifically for working adults, immigrants, and parents.
            <strong className="text-ucb-blue font-semibold block mt-2">Associate Degrees & Certificates for the Real World.</strong>
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group relative px-8 py-4 bg-ucb-blue text-white font-bold rounded-none overflow-hidden hover:shadow-xl transition-all duration-300">
              <span className="relative z-10 flex items-center gap-3">
                Explore Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-ucb-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </button>
            <button className="px-8 py-4 border-2 border-ucb-blue text-ucb-blue font-bold hover:bg-ucb-blue hover:text-white transition-colors duration-300">
              Request Info
            </button>
          </div>
        </div>

        {/* Right Image (Arch Mask) */}
        <div className="relative hidden lg:block h-[800px]">
          <div className="absolute top-0 right-0 w-4/5 h-full bg-ucb-blue rounded-t-[200px] transform translate-x-10 translate-y-10"></div>
          <div className="absolute top-0 right-0 w-4/5 h-full rounded-t-[200px] overflow-hidden border-4 border-white shadow-2xl relative z-10 group">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
              alt="Student studying"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ucb-blue/80 to-transparent opacity-60"></div>

            <div className="absolute bottom-10 left-10 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-ucb-gold" />
                <span className="text-sm font-bold uppercase tracking-wider">Diverse Community</span>
              </div>
              <p className="text-3xl font-serif italic text-white">"Education without borders."</p>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-32 -left-12 bg-ucb-orange text-white p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-xl animate-bounce duration-[3000ms] z-20">
            <Sparkles className="w-8 h-8 mb-2" />
            <span className="font-bold text-sm leading-tight">Accredited & <br />Non-Profit</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;