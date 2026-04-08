import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronRight, GraduationCap, Send, CheckCircle, ArrowRight, Phone, Mail, User, BookOpen, Star } from 'lucide-react';

const RFISidebar: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', program: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [pulseAnim, setPulseAnim] = useState(false);

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

  // Listen for custom event from Hero form
  useEffect(() => {
    const openPanel = (e: CustomEvent) => {
      if (e.detail?.name) setForm(f => ({ ...f, firstName: e.detail.name }));
      if (e.detail?.email) setForm(f => ({ ...f, email: e.detail.email }));
      setPanelOpen(true);
    };
    window.addEventListener('openRFIPanel', openPanel as EventListener);
    return () => window.removeEventListener('openRFIPanel', openPanel as EventListener);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPanelOpen(false);
      setForm({ firstName: '', lastName: '', email: '', phone: '', program: '' });
    }, 3500);
  }, []);

  // Focus ring style for teal outline
  const inputFocusClass = 'focus:outline-none focus:ring-[3px] focus:ring-[#26AB9A] focus:border-transparent focus:bg-white';

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
            className={`flex items-center gap-2 bg-[#E68325] text-white px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#d4751c] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ${pulseAnim ? 'animate-[ctaPulse_0.6s_ease-in-out]' : ''
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
        className={`md:hidden fixed right-0 top-[45%] -translate-y-1/2 z-40 bg-[#E68325] text-white py-4 px-2 rounded-l-lg font-bold text-[11px] tracking-[0.15em] transition-all duration-500 ease-out whitespace-nowrap ${
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
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
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-5">
            {submitted ? (
              /* ─── Success State ─── */
              <div className="text-center py-4 md:py-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#26AB9A]/20 to-green-50 rounded-full flex items-center justify-center mx-auto mb-5 relative">
                  <CheckCircle className="w-10 h-10 text-[#26AB9A]" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#26AB9A]/30 animate-ping" />
                </div>
                <h4 className="font-bold text-xl text-[#0066A2] mb-2">Thank You!</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">An enrollment advisor will contact you within 1 business day.</p>
                <div className="bg-blue-50 rounded-xl p-4 text-left">
                  <p className="text-xs font-bold text-[#0066A2] uppercase tracking-wider mb-2 leading-relaxed">What happens next?</p>
                  <div className="space-y-2">
                    {['We review your inquiry', 'An advisor calls or emails you', 'You get a personalized plan'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#0066A2] text-white text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ─── Form ─── */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      <User className="w-3 h-3 text-gray-400" />First Name <span className="text-[#E68325]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 ${inputFocusClass} transition-all text-sm`}
                      placeholder="Maria"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      <User className="w-3 h-3 text-gray-400" />Last Name <span className="text-[#E68325]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 ${inputFocusClass} transition-all text-sm`}
                      placeholder="Gonzalez"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    <Mail className="w-3 h-3 text-gray-400" />Email Address <span className="text-[#E68325]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 ${inputFocusClass} transition-all text-sm`}
                    placeholder="maria@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    <Phone className="w-3 h-3 text-gray-400" />Phone <span className="text-gray-400 normal-case font-normal leading-relaxed">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 ${inputFocusClass} transition-all text-sm`}
                    placeholder="(617) 555-0123"
                  />
                </div>

                {/* Program */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    <BookOpen className="w-3 h-3 text-gray-400" />Program of Interest
                  </label>
                  <select
                    value={form.program}
                    onChange={e => setForm(f => ({ ...f, program: e.target.value }))}
                    onFocus={() => setFocusedField('program')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 ${inputFocusClass} transition-all text-sm`}
                  >
                    <option value="">Select a program...</option>
                    <optgroup label="Associate Degrees">
                      <option>Early Childhood Education (A.S.)</option>
                      <option>Human Services Administration (A.S.)</option>
                      <option>General Studies (A.S.)</option>
                    </optgroup>
                    <optgroup label="Certificates">
                      <option>Business Certificate</option>
                      <option>Case Management</option>
                      <option>Children's Behavioral Health</option>
                      <option>Digital Marketing</option>
                      <option>Elder Care</option>
                      <option>ECE Certificate</option>
                      <option>General Studies Certificate</option>
                      <option>Human Services Certificate</option>
                      <option>Paraprofessional Educator</option>
                      <option>Project Management</option>
                    </optgroup>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#E68325] text-white font-bold py-3.5 rounded-xl hover:bg-[#d4751c] active:scale-[0.98] transition-all duration-200 text-sm flex items-center justify-center gap-2 group relative overflow-hidden min-h-[44px]"
                  style={{ boxShadow: '0 4px 16px rgba(230,131,37,0.35)' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Information <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4751c] to-[#E68325] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                  By submitting, you agree to be contacted by Urban College of Boston. No commitment required.
                </p>
              </form>
            )}

            {/* Quick facts — always visible below form */}
            {!submitted && (
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3 leading-relaxed">Quick Facts</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Application Fee', value: 'FREE', color: '#26AB9A' },
                    { label: 'Most Students Pay', value: '$0 Tuition', color: '#E68325' },
                    { label: 'Start Date', value: 'Rolling', color: '#0066A2' },
                    { label: 'Format', value: 'Online & Hybrid', color: '#0066A2' },
                  ].map(item => (
                    <div key={item.label} className="bg-gray-50 rounded-lg p-2.5 text-center">
                      <div className="text-xs font-bold" style={{ color: item.color }}>{item.value}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 leading-relaxed">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Vertical Tab Trigger (desktop, visible before scroll) ─── */}
      <button
        id="rfi-tab-trigger"
        onClick={() => setPanelOpen(true)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 font-bold tracking-widest transition-all duration-500 hidden lg:flex items-center ${scrolled || panelOpen ? 'opacity-0 pointer-events-none translate-x-full' : 'opacity-100 translate-x-0'
          }`}
      >
        <div
          className="bg-[#E68325] text-white py-5 px-2.5 rounded-l-xl hover:bg-[#d4751c] transition-colors"
          style={{ writingMode: 'vertical-rl', fontSize: '11px', letterSpacing: '0.15em', boxShadow: '-4px 0 16px rgba(230,131,37,0.3)' }}
        >
          REQUEST INFO
        </div>
      </button>
    </>
  );
};

export default RFISidebar;