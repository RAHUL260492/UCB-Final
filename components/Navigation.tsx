import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Utility Bar */}
      <div className={`bg-ucb-blue text-white text-xs transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 py-0' : 'h-10 py-2'} hidden md:block border-b border-white/10`}>
        <div className="container mx-auto px-6 flex justify-end items-center gap-6 font-medium h-full">
          <a href="tel:+16175550123" className="flex items-center gap-1 hover:text-ucb-gold transition-colors">
            <Phone className="w-3 h-3" /> 617-555-0123
          </a>
          <button className="flex items-center gap-1 hover:text-ucb-gold transition-colors">
            <Globe className="w-3 h-3" /> Español
          </button>
          <button className="flex items-center gap-1 text-ucb-gold hover:text-white transition-colors">
            <MessageCircle className="w-3 h-3" /> Live Chat
          </button>
          <button className="bg-ucb-orange text-white px-4 py-0.5 rounded-full hover:bg-orange-600 transition-colors ml-2 font-bold tracking-wide text-[10px] uppercase">
            Apply Now
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 text-ucb-black' : 'bg-transparent py-6 text-ucb-black'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-50">
            <Logo
              className={`h-12 md:h-14 w-auto transition-all duration-500 ${isScrolled ? '' : 'drop-shadow-sm'}`}
              variant={'color'}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold">
            {['Programs', 'Admissions & Aid', 'About UCB', 'Student Resources'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="hover:text-ucb-blue transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ucb-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className={`border-2 ${isScrolled ? 'border-ucb-blue text-ucb-blue hover:bg-ucb-blue hover:text-white' : 'border-ucb-blue text-ucb-blue hover:bg-ucb-blue hover:text-white'} px-6 py-2 rounded-full transition-all duration-300 font-bold hover:shadow-lg`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-ucb-blue p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {['Programs', 'Admissions & Aid', 'About UCB', 'Student Resources'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl font-display font-bold text-ucb-black hover:text-ucb-blue flex justify-between items-center group"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
                <span className="text-ucb-orange opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <div className="h-px bg-gray-100 my-4"></div>
            <button className="w-full bg-ucb-orange text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform">
              Apply Now
            </button>
            <button className="w-full border-2 border-ucb-blue text-ucb-blue py-4 rounded-xl font-bold text-lg hover:bg-ucb-blue hover:text-white transition-colors">
              Student Portal
            </button>

            <div className="flex justify-center gap-6 mt-6 text-ucb-blue">
              <a href="#" className="hover:text-ucb-orange"><Globe className="w-6 h-6" /></a>
              <a href="#" className="hover:text-ucb-orange"><Phone className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;