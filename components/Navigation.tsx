import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Globe, MessageCircle, ChevronDown, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

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
  const navLinks: Array<{ name: string; path: string; dropdown?: any[]; groups?: any[] }> = [
    { name: 'About Urban College', path: '/#why-urban-college' },
    {
      name: 'Programs',
      path: '/#programs',
      groups: [
        {
          title: 'Associate Degrees',
          items: [
            { name: 'Early Childhood Education', path: '/programs/early-childhood-education' },
            { name: 'General Studies', path: '/programs/general-studies-associate' },
            { name: 'Human Services Administration', path: '/programs/human-services-administration' },
          ]
        },
        {
          title: 'Certificates',
          items: [
            { name: 'Business', path: '/programs/business-certificate' },
            { name: 'Case Management', path: '/programs/case-management' },
            { name: "Children's Behavioral Health", path: '/programs/childrens-behavioral-health-certificate' },
            { name: 'Digital Marketing', path: '/programs/digital-marketing-certificate' },
            { name: 'Elder Care', path: '/programs/elder-care' },
            { name: 'Early Childhood Education', path: '/programs/early-childhood-education-certificate' },
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
    { name: 'Admissions & Aid', path: '/#financial-aid' },
    { 
      name: 'Student Resources', 
      path: '/#resources',
      dropdown: [
        { name: 'Learning Resource Center', path: '/learning-resource-center' },
        { name: 'Student Government', path: '/student-government' },
        { name: 'Mental Health', path: '/mental-health' }
      ]
    },
    { name: 'Workforce & Community', path: '/workforce-development' },
    { name: 'Donate', path: '#' },
    { name: 'Blog', path: '/blog' }
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
            Now enrolling for Fall 2026. Classes start September 8th. <Link to="#" className="underline ml-2 hover:text-ucb-blue transition-colors">Apply Today</Link>
          </div>
          <button onClick={() => setBannerOpen(false)} className="hover:text-ucb-blue transition-colors p-1" aria-label="Close banner">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Utility Bar */}
      <div className={`bg-ucb-blue text-white text-xs transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 py-0' : 'h-12 py-1'} hidden md:block border-b border-white/10`}>
        <div className="container mx-auto px-6 flex justify-end items-center gap-6 font-medium h-full">
          <a href="tel:+16175550123" className="flex items-center gap-1 hover:text-ucb-gold transition-colors">
            <Phone className="w-3 h-3" /> 617-555-0123
          </a>
          <button className="flex items-center gap-1 hover:text-ucb-gold transition-colors min-h-[44px]">
            <Globe className="w-3 h-3" /> Español
          </button>
          <button className="flex items-center gap-1 text-ucb-gold hover:text-white transition-colors min-h-[44px]">
            <MessageCircle className="w-3 h-3" /> Live Chat
          </button>
          <button className="bg-ucb-orange text-white px-4 py-0.5 rounded-full hover:bg-ucb-orange-glow transition-colors ml-2 font-bold tracking-wide text-[10px] uppercase min-h-[44px]">
            Apply Now
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-500 ${isDarkPage
        ? isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 text-ucb-black'
          : 'bg-ucb-blue py-6 text-white'
        : 'bg-white/98 backdrop-blur-sm py-3 text-ucb-black shadow-sm'
        }`}>
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center gap-y-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            {/* Compact logo (image only) at lg, full logo at xl+ */}
            <Logo
              className={`h-10 lg:h-11 xl:h-12 w-auto transition-all duration-500 ${isScrolled ? '' : 'drop-shadow-sm'}`}
              variant={useWhiteNav ? 'light' : 'color'}
              compact={true}
            />
          </Link>

          {/* Desktop Links — only at xl (1280px+) to avoid overlap on tablets */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6 font-semibold text-sm 2xl:text-base">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group/item">
                <Link
                  to={item.path}
                  className={`hover:text-ucb-blue transition-colors relative group py-2 flex items-center gap-1 ${location.pathname === item.path ? 'text-ucb-blue' : ''} ${useWhiteNav && location.pathname !== item.path ? 'hover:text-ucb-gold' : ''}`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4 mt-0.5 group-hover/item:rotate-180 transition-transform duration-300" />}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-ucb-blue transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'} ${useWhiteNav ? 'bg-white' : ''}`}></span>
                </Link>

                {/* Dropdown (Mega Menu or Nested) */}
                {(item.dropdown || item.groups) && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 min-w-[320px] xl:min-w-[600px] z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-4 px-6 text-ucb-black max-h-[70vh] overflow-y-auto">
                      {item.dropdown ? (
                        <div className="grid grid-cols-1 gap-1">
                          {item.dropdown.map((subItem: any) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-center px-4 py-2 text-sm hover:bg-ucb-blue/5 hover:text-ucb-blue transition-colors text-gray-700 font-medium rounded-lg"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ) : item.groups ? (
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
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
            <a
              href="#contact"
              className={`border-2 px-4 2xl:px-6 py-2 rounded-full transition-all duration-300 font-bold hover:shadow-lg whitespace-nowrap ${useWhiteNav
                ? 'border-white text-white hover:bg-white hover:text-ucb-blue'
                : isScrolled
                  ? 'border-ucb-blue text-ucb-blue hover:bg-ucb-blue-glow hover:border-ucb-blue-glow hover:text-white'
                  : 'border-ucb-blue text-ucb-blue hover:bg-ucb-blue-glow hover:border-ucb-blue-glow hover:text-white'
                }`}
            >
              Contact
            </a>
            {/* Desktop Search */}
            <button
              onClick={() => { setSearchOpen(!searchOpen); if(mobileMenuOpen) setMobileMenuOpen(false); }}
              className={`p-2 rounded-full transition-all duration-300 ${useWhiteNav ? 'text-white hover:bg-white/20' : 'text-ucb-blue hover:bg-ucb-blue/10'}`}
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile/Tablet Menu Toggle — shown below xl (1280px) */}
          <div className="xl:hidden flex items-center gap-1">
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
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Search className="w-6 h-6 text-ucb-blue shrink-0" />
          <input 
            type="text" 
            placeholder="Search Urban College..." 
            className="flex-1 bg-transparent border-none outline-none text-xl md:text-2xl text-ucb-blue placeholder-gray-300 font-display font-light placeholder:font-light"
            autoFocus={searchOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const query = e.currentTarget.value.trim();
                if (query) {
                  navigate(`/search?q=${encodeURIComponent(query)}`);
                }
                setSearchOpen(false);
              } else if (e.key === 'Escape') {
                setSearchOpen(false);
              }
            }}
          />
          <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-ucb-orange transition-colors p-2 shrink-0">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-out xl:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block text-lg text-gray-600 hover:text-ucb-blue font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))
                      ) : item.groups ? (
                        item.groups.map((group: any) => (
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
                        ))
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-auto space-y-4">
            <div className="h-px bg-gray-100 my-4"></div>
            <button className="w-full bg-ucb-orange text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform min-h-[44px]">
              Apply Now
            </button>
            <button className="w-full border-2 border-ucb-blue text-ucb-blue py-4 rounded-xl font-bold text-lg hover:bg-ucb-blue hover:text-white transition-colors min-h-[44px]">
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
    </>
  );
};

export default Navigation;