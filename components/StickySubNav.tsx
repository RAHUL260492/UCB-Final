import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'programs', label: 'Programs' },
  { id: 'why-urban-college', label: 'Why Urban College' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'financial-aid', label: 'Aid & Scholarships' },
  { id: 'testimonials', label: 'Stories' },
  { id: 'faq', label: 'FAQ' },
];

const StickySubNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('programs');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsSticky(window.scrollY >= heroHeight);

      // Simple scroll spy logic
      SECTIONS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isSticky) return <div id="sticky-nav-anchor" />;

  return (
    <div 
      id="sticky-nav-anchor" 
      className="sticky z-40 bg-ucb-ivory border-b border-ucb-champagne shadow-sm overflow-x-auto no-scrollbar"
      style={{ top: 'var(--header-height, 70px)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap min-w-max">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`py-4 text-sm md:text-base font-medium transition-all border-b-2 ${activeSection === section.id
                  ? 'text-ucb-emerald border-ucb-emerald'
                  : 'text-ucb-dark/60 border-transparent hover:text-ucb-emerald hover:border-ucb-emerald/30'
                }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickySubNav;