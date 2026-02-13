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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
      {/* Utility Bar */}
      <div className="bg-ucb-dark text-white text-xs py-2 hidden md:block border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-end items-center gap-6 font-medium">
          <a href="tel:+16175550123" className="flex items-center gap-1 hover:text-ucb-copper transition-colors">
            <Phone className="w-3 h-3" /> 617-555-0123
          </a>
          <button className="flex items-center gap-1 hover:text-ucb-copper transition-colors">
            <Globe className="w-3 h-3" /> Español
          </button>
          <button className="flex items-center gap-1 text-ucb-copper hover:text-white transition-colors">
            <MessageCircle className="w-3 h-3" /> Live Chat
          </button>
          <button className="bg-ucb-emerald text-white px-3 py-1 rounded hover:bg-emerald-600 transition-colors ml-2">
            Apply Now
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-ucb-ivory/95 frosted py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Logo 
              className={`h-12 md:h-14 w-auto transition-all duration-300 ${isScrolled ? '' : 'drop-shadow-lg'}`} 
              variant={isScrolled ? 'color' : 'light'} 
            />
          </a>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? 'text-ucb-dark' : 'text-white'}`}>
            {['Programs', 'Admissions & Aid', 'About UCB', 'Student Resources'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-ucb-emerald transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ucb-emerald transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className={`border ${isScrolled ? 'border-ucb-dark hover:bg-ucb-dark hover:text-white' : 'border-white hover:bg-white hover:text-ucb-dark'} px-5 py-2 rounded-full transition-colors`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-ucb-copper"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ucb-ivory shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col gap-4">
          {['Programs', 'Admissions & Aid', 'About UCB', 'Student Resources'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-xl font-display font-bold text-ucb-dark hover:text-ucb-emerald"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-gray-200 my-2"></div>
          <button className="w-full bg-ucb-emerald text-white py-3 rounded font-bold">Apply Now</button>
          <button className="w-full border border-ucb-dark text-ucb-dark py-3 rounded font-bold">Student Portal</button>
        </div>
      )}
    </header>
  );
};

export default Navigation;