import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const LANGUAGES = [
  "Your Language.",     // English
  "Tu Idioma.",         // Spanish
  "Seu Idioma.",        // Portuguese
  "Lang Ou.",           // Haitian Creole
  "你的语言。"            // Mandarin
];

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentFullText = LANGUAGES[textIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        // Finished typing, wait then delete
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        // Finished deleting, move to next language
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % LANGUAGES.length);
      } else {
        // Typing or Deleting
        const nextText = isDeleting 
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('sticky-nav-anchor');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop" 
          alt="Diverse students studying" 
          className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-[#1C1C1E] opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 min-h-[1.2em]">
          Affordable Degrees.<br/>
          Flexible Schedules.<br/>
          <span className="text-ucb-champagne block mt-2 h-[1.2em]">{displayText}<span className="animate-pulse text-ucb-emerald">|</span></span>
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-ucb-ivory opacity-90 mb-10 max-w-2xl mx-auto font-light">
          Join a bold, modern community designated as a Hispanic-Serving Institution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-ucb-emerald hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-900/20 flex items-center gap-2">
            Explore Programs <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-ucb-copper text-ucb-copper hover:bg-ucb-copper hover:text-white font-semibold py-4 px-8 rounded-full transition-all">
            Request Info
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <ChevronDown className="w-8 h-8 text-ucb-copper" />
      </div>
    </section>
  );
};

export default Hero;