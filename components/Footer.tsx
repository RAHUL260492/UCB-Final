import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ucb-dark text-ucb-ivory py-16 border-t-4 border-ucb-emerald">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo className="h-16 w-auto" variant="light" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering a diverse community of learners through affordable, flexible, and supportive higher education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-ucb-copper transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-ucb-copper transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-ucb-copper transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Career Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Faculty Directory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Student Portal</a></li>
            </ul>
          </div>

           {/* Programs */}
           <div>
            <h4 className="font-display font-bold text-white mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Early Childhood Ed</a></li>
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Human Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">General Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-ucb-emerald transition-colors">Professional Certificates</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-ucb-copper shrink-0" />
                <span>2 Boylston Street, 2nd Floor<br/>Boston, MA 02116</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-ucb-copper shrink-0" />
                <span>617-555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-ucb-copper shrink-0" />
                <span>admissions@urbancollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Urban College of Boston. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Non-Discrimination</a>
            <a href="#" className="hover:text-white">Accreditation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;