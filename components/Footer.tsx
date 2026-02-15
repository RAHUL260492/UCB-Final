import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ucb-dark text-ucb-ivory pt-24 pb-12 border-t-8 border-ucb-emerald relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Logo className="w-96 h-auto" variant="light" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Logo className="h-16 w-auto" variant="light" />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Empowering a diverse community of learners through affordable, flexible, and supportive higher education since 1993.
            </p>

            <div className="space-y-4">
              <h5 className="font-display font-bold text-white">Stay Connected</h5>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-copper hover:text-white transition-all hover:scale-110 group"><Facebook className="w-5 h-5 group-hover:animate-bounce" /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-copper hover:text-white transition-all hover:scale-110 group"><Instagram className="w-5 h-5 group-hover:animate-pulse" /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-copper hover:text-white transition-all hover:scale-110 group"><Linkedin className="w-5 h-5 group-hover:animate-pulse" /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-copper hover:text-white transition-all hover:scale-110 group"><Twitter className="w-5 h-5 group-hover:animate-bounce" /></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display font-bold text-xl text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Academic Calendar', 'Library Services', 'Career Center', 'Faculty Directory', 'Student Portal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-ucb-copper">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xl text-white mb-8">Programs</h4>
            <ul className="space-y-4">
              {['Early Childhood Ed', 'Human Services', 'General Studies', 'Health Administration', 'Professional Certs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-ucb-copper">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xl text-white mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-ucb-emerald/20 transition-colors">
                  <MapPin className="w-5 h-5 text-ucb-copper" />
                </div>
                <span className="mt-2">2 Boylston Street, 2nd Floor<br />Boston, MA 02116</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-ucb-emerald/20 transition-colors">
                  <Phone className="w-5 h-5 text-ucb-copper" />
                </div>
                <span>617-555-0123</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-ucb-emerald/20 transition-colors">
                  <Mail className="w-5 h-5 text-ucb-copper" />
                </div>
                <a href="mailto:admissions@urbancollege.edu" className="hover:text-white transition-colors">admissions@urbancollege.edu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Urban College of Boston. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-ucb-copper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ucb-copper transition-colors">Non-Discrimination</a>
            <a href="#" className="hover:text-ucb-copper transition-colors">Accreditation</a>
            <a href="#" className="hover:text-ucb-copper transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;