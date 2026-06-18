import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Globe, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { openChat } from '../src/lib/chat';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenus, setMobileSubmenus] = useState<Record<string, boolean>>({});
  const [bannerOpen, setBannerOpen] = useState(true);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync header height exactly to a CSS variable to allow other elements to dock below it
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [bannerOpen, isScrolled]);
  const navLinks: Array<{ name: string; path: string; dropdown?: any[]; groups?: any[]; className?: string }> = [
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Accreditation', path: '/accreditation' },
        { name: 'Alumni', path: '/alumni' },
        { name: 'Board of Trustees', path: '/board-of-trustees' },
        { name: 'Employment Opportunities', path: '/employment' },
        { name: 'Leadership & Administration', path: '/team' },
        { name: 'Office of the President', path: '/president' },
        { name: 'Our Mission & Vision', path: '/mission' },
        { name: 'Urban College Foundation', path: '/foundation' }
      ]
    },
    {
      name: 'Programs',
      path: '/programs',
      groups: [
        {
          title: 'Associate Degrees',
          items: [
            { name: 'Early Childhood Education', path: '/programs/early-childhood-education-associate-degree' },
            { name: 'General Studies', path: '/programs/general-studies-associate-degree' },
            { name: 'Human Services Administration', path: '/programs/human-services-administration-associate-degree' },
          ]
        },
        {
          title: 'Certificates',
          items: [
            { name: 'Business', path: '/programs/business-certificate' },
            { name: 'Case Management', path: '/programs/case-management-certificate' },
            { name: "Children's Behavioral Health", path: '/programs/childrens-behavioral-health-certificate' },
            { name: 'Digital Marketing', path: '/programs/digital-marketing-certificate' },
            { name: 'Early Childhood Education', path: '/programs/foundations-early-childhood-education-certificate' },
            { name: 'Elder Care', path: '/programs/elder-care-certificate' },
            { name: 'General Studies', path: '/programs/general-studies-certificate' },
            { name: 'Human Services', path: '/programs/human-services-certificate' },
            { name: 'Paraprofessional Educator', path: '/programs/paraprofessional-educator-certificate' },
            { name: 'Project Management', path: '/programs/project-management-certificate' },
          ]
        },
        {
          title: 'Non-Degree Seeking',
          items: [
             { name: 'Professional Studies', path: '/programs/professional-studies' }
          ]
        }
      ]
    },
    { 
      name: 'Admissions & Aid', 
      path: '/admissions',
      dropdown: [
        { name: 'Admissions Overview', path: '/admissions' },
        { name: 'Financial Aid & Funding', path: '/financial-services-and-funding-options' },
        { name: 'Information Sessions', path: '/info-sessions' },
        { name: 'Tuition & Cost of Attendance', path: '/financial-aid' },
        { name: 'Tuition Payment Options', path: '/tuition-payment-options' }
      ]
    },
    { 
      name: 'Students',
      path: '/students',
      dropdown: [
        { name: 'Academic Calendar', path: '/academic-calendar' },
        { name: 'College Catalog', path: 'https://catalog.urbancollege.edu/' },
        { name: 'College Transfer Pathways', path: '/college-transfer-pathways' },
        { name: 'Commencement Ceremony', path: '/commencement' },
        { name: 'Learning Resource Center', path: '/learning-resource-center' },
        { name: 'Registration', path: '/course-registration' },
        { name: 'Student Government Association', path: '/student-government' },
        { name: 'Student Services', path: '/student-services-overview' },
        { name: 'Technology Account Guide', path: '/technology-account-guide' },
        { name: 'Transcript Requests', path: '/transcript-requests' }
      ]
    },
    { name: 'Training', path: '/training', className: 'hidden lg:block' },
    {
      name: 'Blog',
      path: '/blog',
      className: 'hidden lg:block',
      dropdown: [
        { name: 'In the News', path: '/news' },
        { name: 'Urban College Blog', path: '/blog' }
      ]
    },
    { name: 'Donate', path: '/donate' }
  ];

  const [initialHeight, setInitialHeight] = useState<number | 'auto'>('auto');

  // Monitor the un-scrolled height of the header to create a perfect placeholder spacer
  useEffect(() => {
    if (headerRef.current && !isScrolled) {
      setInitialHeight(headerRef.current.offsetHeight);
    }
  }, [bannerOpen]); // Recalculate if banner is dismissed

  const isDarkPage = location.pathname.startsWith('/programs/');
  const useWhiteNav = isDarkPage && !isScrolled;

  return (
    <>
      {/* Invisible placeholder avoids layout shifts and overlapping UI without causing sticky-flicker */}
      <div style={{ height: initialHeight }} aria-hidden="true" />
      
      <header ref={headerRef} className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Announcement Banner */}
      {bannerOpen && (
        <div className="bg-ucb-orange text-white text-xs md:text-sm font-medium py-2 px-4 flex justify-between items-center relative z-50">
          <div className="container mx-auto text-center flex-1">
            Now enrolling for Fall 2026. Classes Start September 1st. <a href="https://urbancollege-28708.app451.sites.451.io/" target="_blank" rel="noopener noreferrer" className="underline ml-2 hover:text-ucb-blue transition-colors">Apply Today</a>
          </div>
          <button onClick={() => setBannerOpen(false)} className="hover:text-ucb-blue transition-colors p-1" aria-label="Close banner">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Utility Bar */}
      <div className={`bg-ucb-blue text-white text-xs transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 py-0' : 'h-12 py-1'} hidden md:block border-b border-white/10`}>
        <div className="container mx-auto px-6 flex justify-end items-center gap-6 font-medium h-full">
          <a href="tel:+16174497070" className="flex items-center gap-1 hover:text-ucb-gold transition-colors">
            <Phone className="w-3 h-3" /> 617-449-7070
          </a>
          <Link to="/espanol" className="flex items-center gap-1 hover:text-ucb-gold transition-colors min-h-[44px]">
            <Globe className="w-3 h-3" /> Español
          </Link>
          <Link to="/mandarin" className="flex items-center gap-1 hover:text-ucb-gold transition-colors min-h-[44px]">
            <Globe className="w-3 h-3" /> 中文
          </Link>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-rfi-sidebar'))}
            className="border border-white/40 text-white px-4 py-2 rounded-full hover:bg-white hover:text-ucb-blue transition-colors ml-2 font-bold tracking-wide text-[10px] uppercase min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            Request Info
          </button>
          <a
            href="https://urbancollege-28708.app451.sites.451.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ucb-orange text-white px-4 py-2 rounded-full hover:bg-ucb-orange-glow transition-colors font-bold tracking-wide text-[10px] uppercase min-h-[44px] flex items-center justify-center"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-500 ${isDarkPage
        ? isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 text-ucb-black'
          : 'bg-ucb-blue py-6 text-white'
        : 'bg-white/98 backdrop-blur-sm py-3 text-ucb-black shadow-sm'
        }`}>
        <div className="container mx-auto px-4 md:px-4 xl:px-6 flex flex-wrap justify-between items-center gap-y-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            {/* Logo text is now always visible on all screen sizes */}
            <Logo
              className={`h-10 md:h-11 xl:h-12 w-auto transition-all duration-500 ${isScrolled ? '' : 'drop-shadow-sm'}`}
              variant={useWhiteNav ? 'light' : 'color'}
            />
          </Link>

          {/* Desktop Links — shown at md (768px+) to avoid collapse on 13" laptop screens */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 2xl:gap-5 font-semibold text-xs xl:text-sm 2xl:text-base">
            {navLinks.map((item) => (
              <div key={item.name} className={`relative group/item ${item.className || ''}`}>
                <Link
                  to={item.path}
                  className={`hover:text-ucb-blue transition-colors relative group py-2 flex items-center gap-1 ${location.pathname === item.path ? 'text-ucb-blue' : ''} ${useWhiteNav && location.pathname !== item.path ? 'hover:text-ucb-gold' : ''}`}
                >
                  {item.name}
                  {(item.dropdown || item.groups) && <ChevronDown className="w-4 h-4 mt-0.5 group-hover/item:rotate-180 transition-transform duration-300" />}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-ucb-blue transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'} ${useWhiteNav ? 'bg-white' : ''}`}></span>
                </Link>

                {/* Dropdown (Mega Menu or Nested) */}
                {(item.dropdown || item.groups) && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 min-w-[320px] md:min-w-[500px] lg:min-w-[550px] xl:min-w-[600px] z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-4 px-6 text-ucb-black max-h-[70vh] overflow-y-auto">
                      {item.dropdown ? (
                        <div className="grid grid-cols-1 gap-1">
                          {item.dropdown.map((subItem: any) => (
                            subItem.path.startsWith('http') || subItem.path.endsWith('.pdf') ? (
                              <a
                                key={subItem.name}
                                href={subItem.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 text-sm hover:bg-ucb-blue/5 hover:text-ucb-blue transition-colors text-gray-700 font-medium rounded-lg"
                              >
                                {subItem.name}
                              </a>
                            ) : (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="flex items-center px-4 py-2 text-sm hover:bg-ucb-blue/5 hover:text-ucb-blue transition-colors text-gray-700 font-medium rounded-lg"
                              >
                                {subItem.name}
                              </Link>
                            )
                          ))}
                        </div>
                      ) : item.groups ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                          {item.groups.map((group: any) => (
                            <div key={group.title} className="flex flex-col">
                              <h4 className="text-sm font-bold text-ucb-orange mb-2 uppercase tracking-wide border-b border-gray-100 pb-2">{group.title}</h4>
                              <div className="flex flex-col gap-1 mt-2">
                                {group.items.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="text-sm text-gray-600 hover:text-ucb-blue transition-colors py-1.5 font-medium leading-tight"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className={`border-2 px-3 xl:px-4 2xl:px-6 py-1.5 xl:py-2 rounded-full transition-all duration-300 font-bold hover:shadow-lg whitespace-nowrap ${useWhiteNav
                ? 'border-white text-white hover:bg-white hover:text-ucb-blue'
                : isScrolled
                  ? 'border-ucb-blue text-ucb-blue hover:bg-ucb-blue-glow hover:border-ucb-blue-glow hover:text-white'
                  : 'border-ucb-blue text-ucb-blue hover:bg-ucb-blue-glow hover:border-ucb-blue-glow hover:text-white'
                }`}
            >
              Contact
            </Link>
            {/* Desktop Live Chat */}
            <button
              onClick={openChat}
              className={`p-2 rounded-full transition-all duration-300 ${useWhiteNav ? 'text-white hover:bg-white/20' : 'text-ucb-blue hover:bg-ucb-blue/10'}`}
              aria-label="Open live chat"
              title="Live chat"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            {/* Desktop Search */}
            <button
              onClick={() => { setSearchOpen(!searchOpen); if(mobileMenuOpen) setMobileMenuOpen(false); }}
              className={`p-2 rounded-full transition-all duration-300 ${useWhiteNav ? 'text-white hover:bg-white/20' : 'text-ucb-blue hover:bg-ucb-blue/10'}`}
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile/Tablet Menu Toggle — shown below md (768px) */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => { setSearchOpen(!searchOpen); if(mobileMenuOpen) setMobileMenuOpen(false); }}
              className={`p-2 rounded-full transition-all duration-300 ${useWhiteNav && !mobileMenuOpen && !searchOpen ? 'text-white hover:bg-white/20' : 'text-ucb-blue hover:bg-ucb-blue/10'}`}
              aria-label="Search site"
            >
              <Search className="w-6 h-6" />
            </button>
            <button
              className={`relative z-50 p-2 ${useWhiteNav && !mobileMenuOpen && !searchOpen ? 'text-white' : 'text-ucb-blue'}`}
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); if(searchOpen) setSearchOpen(false); }}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown Search Bar */}
      <div 
        className={`w-full bg-white overflow-hidden transition-all duration-300 ease-in-out absolute top-full left-0 origin-top shadow-xl border-t border-gray-100 ${searchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const query = (formData.get('search') as string || '').trim();
            if (query) {
              navigate(`/search?q=${encodeURIComponent(query)}`);
              setSearchOpen(false);
            }
          }}
          className="container mx-auto px-6 py-4 flex items-center gap-4 animate-in fade-in duration-200"
        >
          <button 
            type="submit" 
            className="p-2 hover:bg-gray-150 active:bg-gray-200 rounded-xl transition-all text-ucb-blue shrink-0 flex items-center justify-center outline-none focus:ring-2 focus:ring-ucb-blue/30 cursor-pointer min-h-[44px]"
            aria-label="Submit search query"
          >
            <Search className="w-6 h-6 hover:scale-105 transition-transform" />
          </button>
          <input 
            type="text" 
            name="search"
            placeholder="Search Urban College..." 
            className="flex-1 bg-transparent border-none outline-none text-xl md:text-2xl text-ucb-blue placeholder-gray-300 font-display font-light placeholder:font-light focus:ring-0 w-full"
            autoFocus={searchOpen}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setSearchOpen(false);
              }
            }}
          />
          <button 
            type="button" 
            onClick={() => setSearchOpen(false)} 
            className="text-gray-400 hover:text-ucb-orange transition-colors p-2 shrink-0 flex items-center justify-center cursor-pointer min-h-[44px]"
            aria-label="Close search dropdown"
          >
            <X className="w-6 h-6" />
          </button>
        </form>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-4 md:px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => {
              const isSubmenuOpen = !!mobileSubmenus[item.name];
              return (
                <div key={item.name}>
                  <div className="flex justify-between items-center group">
                    <Link
                      to={item.path}
                      className="text-2xl font-display font-bold text-ucb-black hover:text-ucb-blue"
                      onClick={(e) => {
                        if (item.dropdown || item.groups) {
                          e.preventDefault();
                          toggleMobileSubmenu(item.name);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                    {(item.dropdown || item.groups) && (
                      <button onClick={() => toggleMobileSubmenu(item.name)} className="p-2" aria-label={`Toggle ${item.name} menu`}>
                        <ChevronDown className={`w-6 h-6 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {item.dropdown || item.groups ? (
                    <div className={`space-y-3 pl-4 border-l-2 border-gray-100 overflow-y-auto transition-all duration-300 ${isSubmenuOpen ? 'mt-4 max-h-[80vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
                      {item.dropdown ? (
                        item.dropdown.map((subItem: any) => (
                          subItem.path.startsWith('http') || subItem.path.endsWith('.pdf') ? (
                            <a
                              key={subItem.name}
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-lg text-gray-600 hover:text-ucb-blue font-medium py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block text-lg text-gray-600 hover:text-ucb-blue font-medium py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))
                      ) : item.groups ? (
                        <div className="space-y-4">
                          {item.path === '/programs' && (
                            <Link
                              to="/programs"
                              className="block text-lg text-ucb-blue hover:text-ucb-orange font-bold py-2 mb-2 border-b border-gray-150"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Programs Overview
                            </Link>
                          )}
                          {item.groups.map((group: any) => (
                            <div key={group.title} className="mb-4">
                              <h4 className="text-ucb-orange font-bold text-sm uppercase tracking-wider mb-2">{group.title}</h4>
                              <div className="flex flex-col gap-2 pl-2">
                                {group.items.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-base text-gray-600 hover:text-ucb-blue font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

           <div className="mt-auto space-y-4">
            <div className="h-px bg-gray-100 my-4"></div>
            <a
              href="https://urbancollege-28708.app451.sites.451.io/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-ucb-orange text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform min-h-[44px] flex items-center justify-center"
            >
              Apply Now
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-rfi-sidebar'));
              }}
              className="w-full border-2 border-ucb-blue text-ucb-blue py-4 rounded-xl font-bold text-lg hover:bg-ucb-blue hover:text-white transition-colors min-h-[44px] cursor-pointer"
            >
              Request Info
            </button>
            <a
              href="https://portal.urbancollege.edu/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full border-2 border-ucb-blue text-ucb-blue py-4 rounded-xl font-bold text-lg hover:bg-ucb-blue hover:text-white transition-colors min-h-[44px] flex items-center justify-center"
            >
              Student Portal
            </a>

            <div className="flex justify-center gap-4 mt-6 text-ucb-blue items-center text-sm font-semibold">
              <Link to="/espanol" className="hover:text-ucb-orange flex items-center gap-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Globe className="w-5 h-5" /> Español
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/mandarin" className="hover:text-ucb-orange flex items-center gap-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Globe className="w-5 h-5" /> 中文
              </Link>
              <span className="text-gray-300">|</span>
              <a href="tel:+16174497070" className="hover:text-ucb-orange flex items-center gap-1.5">
                <Phone className="w-5 h-5" /> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navigation;