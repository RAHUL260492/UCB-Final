import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ucb-blue text-ucb-ivory pt-8 pb-6 border-t-8 border-ucb-orange relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-white leading-tight">Ready to take the next step?</h3>
            <p className="text-blue-100 text-sm mt-1">Apply for free or request info to learn more.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://urbancollege-28708.app451.sites.451.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-2.5 px-5 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px] inline-flex items-center justify-center"
            >
              Apply Now
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))}
              className="border-2 border-white/60 hover:bg-white hover:text-ucb-blue text-white font-bold py-2.5 px-5 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px] inline-flex items-center justify-center cursor-pointer"
            >
              Request Info
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo className="h-16 w-auto" variant="light" />
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed max-w-sm text-sm">
              Empowering a diverse community of learners through affordable, flexible, and supportive higher education since 1993.
            </p>

            <div className="space-y-3">
              <h5 className="font-display font-bold text-white">Stay Connected</h5>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/UrbanCollegeBoston" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-orange-glow hover:text-white hover:scale-125 hover:-rotate-6 transition-all duration-300 group"><Facebook className="w-5 h-5 group-hover:scale-110" /></a>
                <a href="https://www.instagram.com/urbancollegeofboston/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-orange-glow hover:text-white hover:scale-125 hover:rotate-6 transition-all duration-300 group"><Instagram className="w-5 h-5 group-hover:scale-110" /></a>
                <a href="https://www.linkedin.com/company/urban-college-of-boston-a-two-year-college-inc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-orange-glow hover:text-white hover:scale-125 hover:-rotate-6 transition-all duration-300 group"><Linkedin className="w-5 h-5 group-hover:scale-110" /></a>
                <a href="https://www.youtube.com/@Urban_College" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-ucb-orange-glow hover:text-white hover:scale-125 hover:rotate-6 transition-all duration-300 group"><Youtube className="w-5 h-5 group-hover:scale-110" /></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display font-bold text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Office of the President', path: '/president' },
                { name: 'Board of Trustees', path: '/trustees' },
                { name: 'Urban College Foundation', path: '/foundation' },
                { name: 'Leadership & Team', path: '/team' },
                { name: 'Admissions Overview', path: '/admissions' },
                { name: 'Information Sessions', path: '/info-sessions' },
                { name: 'Financial Aid & Funding', path: '/financial-services-and-funding-options' },
                { name: 'Tuition & Cost of Attendance', path: '/financial-aid' },
                { name: 'Tuition Payment Options', path: '/tuition-payment-options' },
                { name: 'Academic Calendar', path: '/policies-disclosures#academic-affairs' },
                { name: 'Library Services', path: '#' },
                { name: 'Career Center', path: '#' },
                { name: 'Student Portal', path: '#' },
                { name: 'Urban College Blog', path: '/blog' },
                { name: 'In the News', path: '/news' },
                { name: 'Join Our Team', path: '/employment' }
              ].map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('/') ? (
                    <Link to={item.path} className="text-blue-100 hover:text-ucb-orange transition-colors flex items-center group">
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-ucb-copper">›</span>
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </Link>
                  ) : (
                    <a href={item.path} className="text-blue-100 hover:text-ucb-orange transition-colors flex items-center group">
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-ucb-copper">›</span>
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg text-white mb-4">Programs</h4>
            <ul className="space-y-3">
              {[
                { name: 'Early Childhood Education', path: '/programs/early-childhood-education' },
                { name: 'Human Services Administration', path: '/programs/human-services-administration' },
                { name: 'General Studies', path: '/programs/general-studies-associate' },
                { name: 'Business Certificate', path: '/programs/business-certificate' },
                { name: 'Case Management Certificate', path: '/programs/case-management' },
                { name: "Children's Behavioral Health Certificate", path: '/programs/childrens-behavioral-health-certificate' },
                { name: 'Digital Marketing Certificate', path: '/programs/digital-marketing-certificate' },
                { name: 'Elder Care Certificate', path: '/programs/elder-care' },
                { name: 'Early Childhood Education Certificate', path: '/programs/early-childhood-education-certificate' },
                { name: 'General Studies Certificate', path: '/programs/general-studies-certificate' },
                { name: 'Human Services Certificate', path: '/programs/human-services-certificate' },
                { name: 'Paraprofessional Educator Certificate', path: '/programs/paraprofessional-educator-certificate' },
                { name: 'Project Management Certificate', path: '/programs/project-management-certificate' },
                { name: 'All Programs', path: '/programs' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-blue-100 hover:text-ucb-orange transition-colors flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-ucb-copper">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-lg text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-blue-100 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-ucb-green-glow/20 transition-colors">
                  <MapPin className="w-5 h-5 text-ucb-copper" />
                </div>
                <span className="mt-2">2 Boylston Street, 2nd Floor<br />Boston, MA 02116</span>
              </li>
              <li className="flex items-center gap-4 text-blue-100 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-ucb-green-glow/20 transition-colors">
                  <Phone className="w-5 h-5 text-ucb-copper" />
                </div>
                <span>617-555-0123</span>
              </li>
              <li className="flex items-center gap-4 text-blue-100 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-ucb-green-glow/20 transition-colors">
                  <Mail className="w-5 h-5 text-ucb-copper" />
                </div>
                <a href="mailto:admissions@urbancollege.edu" className="hover:text-white transition-colors">admissions@urbancollege.edu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200/80 gap-4 leading-relaxed">
          <p>© {new Date().getFullYear()} Urban College of Boston. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/policies-disclosures" className="hover:text-ucb-copper transition-colors">Policies & Disclosures</Link>
            <Link to="/policies-disclosures#privacy-policy" className="hover:text-ucb-copper transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-ucb-copper transition-colors">Non-Discrimination</a>
            <Link to="/accreditation" className="hover:text-ucb-copper transition-colors">Accreditation</Link>
            <a href="#" className="hover:text-ucb-copper transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;