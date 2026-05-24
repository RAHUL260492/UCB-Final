import React, { useState, useEffect } from 'react';
import { X, ChevronRight, GraduationCap, CheckCircle, Star } from 'lucide-react';



const RFISidebar: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pulseAnim, setPulseAnim] = useState(false);
  const [formId, setFormId] = useState('urbancollege.forms.23262');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Periodic attention pulse on the floating CTA
  useEffect(() => {
    const timer = setInterval(() => {
      if (!panelOpen && scrolled) {
        setPulseAnim(true);
        setTimeout(() => setPulseAnim(false), 1000);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [panelOpen, scrolled]);

  const getFormIdForCurrentPath = (pathname: string): string => {
    const path = pathname.toLowerCase();
    
    if (path.includes('business-certificate')) return 'urbancollege.forms.23671';
    if (path.includes('childrens-behavioral-health-certificate')) return 'urbancollege.forms.23674';
    if (path.includes('mandarin') || path.includes('zh') || path.includes('chinese')) return 'urbancollege.forms.26517';
    if (path.includes('digital-marketing-certificate')) return 'urbancollege.forms.23672';
    if (path.includes('early-childhood-education-associate') || path.endsWith('early-childhood-education')) return 'urbancollege.forms.23663';
    if (path.includes('early-childhood-education-certificate') || path.includes('foundations-early-childhood')) return 'urbancollege.forms.23664';
    if (path.includes('elder-care')) return 'urbancollege.forms.23667';
    if (path.includes('general-studies-associate')) return 'urbancollege.forms.23665';
    if (path.includes('general-studies-certificate')) return 'urbancollege.forms.23666';
    if (path.includes('human-services-administration')) return 'urbancollege.forms.23662';
    if (path.includes('human-services-certificate')) return 'urbancollege.forms.23668';
    if (path.includes('paraprofessional-educator-certificate')) return 'urbancollege.forms.23673';
    if (path.includes('professional-studies')) return 'urbancollege.forms.23670';
    if (path.includes('project-management-certificate')) return 'urbancollege.forms.23669';
    if (path.includes('spanish') || path.includes('espanol') || path.includes('es')) return 'urbancollege.forms.26515';
    if (path.includes('your-future')) return 'urbancollege.forms.23661';
    if (path.includes('getstarted')) return 'urbancollege.forms.23660';
    if (path.includes('say-yes-a') || path.includes('say-yes-b')) return 'urbancollege.forms.26190';
    if (path.includes('whav')) return 'urbancollege.forms.23676';
    
    return 'urbancollege.forms.23262';
  };

  useEffect(() => {
    if (panelOpen) {
      const resolved = getFormIdForCurrentPath(window.location.pathname);
      setFormId(resolved);
    }
  }, [panelOpen]);

  useEffect(() => {
    if (!panelOpen) return;

    // Set configuration
    (window as any).__lum_config = {
      formId: formId,
      apiUrl: "https://urbancollege.api.451.io/v2/",
      accessToken: "WeJW3dZzCzD0RDuF04Sg2CMZQoJOmdjqYCzsE76e",
      featureToken: "sfdVcQug7oK8vr5G3uCr9QB1YZrqZapO2RBvSjzt",
      analyticsToken: "MVrxFM5pwBJlDgZgXU4xULMKzv3mMKApUUcL1dMe",
      sourceUrl: encodeURIComponent(window.location.href)
    };

    // Remove existing script if any
    const oldScript = document.querySelector('script[src*="embed-forms.451.io"]');
    if (oldScript) {
      oldScript.remove();
    }

    // Append embed script
    const script = document.createElement('script');
    script.src = "https://embed-forms.451.io/bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [formId, panelOpen]);

  return (
    <>
      {/* ─── Floating Sticky CTA Bar (Desktop, top-right) ─── */}
      <div
        className={`hidden md:block fixed right-0 z-40 transition-all duration-500 ease-out ${scrolled && !panelOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-[120%] pointer-events-none'
          }`}
        style={{ top: 'var(--header-height, 80px)', height: '60px' }}
      >
        <div
          className="h-full flex items-center px-4 gap-3"
          style={{
            background: 'linear-gradient(135deg, rgba(0,102,162,0.95) 0%, rgba(0,82,130,0.97) 100%)',
            backdropFilter: 'blur(12px)',
            borderBottomLeftRadius: '16px',
          }}
        >
          {/* Urgency text */}
          <div className="hidden sm:flex items-center gap-2 text-white/90 mr-1">
            <Star className="w-3 h-3 text-[#26AB9A] fill-current" />
            <span className="text-xs font-medium whitespace-nowrap">Classes enrolling now</span>
          </div>

          {/* Primary CTA button */}
          <button
            id="rfi-cta-button"
            onClick={() => setPanelOpen(true)}
            className={`flex items-center gap-2 bg-[#E68325] text-white px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#d4751c] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer ${pulseAnim ? 'animate-[ctaPulse_0.6s_ease-in-out]' : ''
              }`}
            style={{ boxShadow: '0 4px 20px rgba(230,131,37,0.5), 0 1px 4px rgba(0,0,0,0.15)' }}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Request Info</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ─── Mobile Floating CTA Tab (right edge) ─── */}
      <button
        onClick={() => setPanelOpen(true)}
        className={`md:hidden fixed right-0 top-[45%] -translate-y-1/2 z-40 bg-[#E68325] text-white py-4 px-2 rounded-l-lg font-bold text-[11px] tracking-[0.15em] transition-all duration-500 ease-out whitespace-nowrap cursor-pointer ${
          scrolled && !panelOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        } ${pulseAnim ? 'animate-[ctaPulse_0.6s_ease-in-out]' : ''}`}
        style={{ 
          writingMode: 'vertical-rl', 
          textOrientation: 'mixed',
          boxShadow: '-4px 0 15px rgba(230,131,37,0.35)'
        }}
        aria-label="Request Info"
      >
        REQUEST INFO
      </button>

      {/* ─── Backdrop ─── */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${panelOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        style={{ background: 'rgba(0,20,40,0.5)', backdropFilter: panelOpen ? 'blur(4px)' : 'none' }}
        onClick={() => setPanelOpen(false)}
      />

      {/* ─── Slide-in Panel from Right ─── */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[70] transform transition-transform duration-300 ease-out overflow-hidden flex flex-col ${panelOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ boxShadow: panelOpen ? '-8px 0 40px rgba(0,0,0,0.2)' : 'none' }}
      >
        {/* Panel Header — Blue gradient */}
        <div
          className="relative px-6 py-5 text-white shrink-0 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0066A2 0%, #004E7C 100%)' }}
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-sm">
                  <GraduationCap className="w-5 h-5 text-[#E68325]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight">Request Information</h3>
                  <p className="text-blue-200 text-[11px] mt-0.5 leading-relaxed">No obligation • Takes 30 seconds</p>
                </div>
              </div>
              <button
                onClick={() => setPanelOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-[11px] text-blue-200 mt-1">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#26AB9A]" /> Free Application</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#26AB9A]" /> No Commitment</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#26AB9A]" /> Reply in 24h</span>
            </div>
          </div>
        </div>

        {/* Panel Body — Scrollable */}
        <div className="flex-1 overflow-y-auto bg-gray-50/50">
          <div className="px-6 py-5">
            {/* Embed 451.io Form Element */}
            <div className="rfi-form-embed-container min-h-[400px]">
              {React.createElement('lum-root', { className: "text-gray-500 text-sm text-center py-10 block" }, "Loading official request form...")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RFISidebar;