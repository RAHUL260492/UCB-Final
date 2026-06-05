import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import ScrollAnimation from '../components/ScrollAnimation';
import { CheckCircle, Award, BookOpen, Clock, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const APPLY_URL = 'https://urbancollege-28708.app451.sites.451.io/';

// Shared content for the marketing landing template (sourced from the live pages).
const LANDING_PROGRAMS = [
    { name: 'Early Childhood Education', slug: 'early-childhood-education', desc: 'Become a preschool teacher, childcare worker, or family childcare provider.' },
    { name: 'Human Services', slug: 'human-services-certificate', desc: 'Step into case management, social services, or direct support roles.' },
    { name: 'Case Management', slug: 'case-management', desc: 'Support clients as a case manager or behavioral case worker.' },
    { name: 'Elder Care', slug: 'elder-care', desc: 'Pursue community health worker, home health aide, and care roles.' },
    { name: 'Digital Marketing', slug: 'digital-marketing-certificate', desc: 'Launch a career as a social media or content marketing specialist.' },
    { name: 'General Studies', slug: 'general-studies-certificate', desc: 'Explore your options and build a flexible foundation for any path.' },
];

const LANDING_PARTNERS = [
    'Fitchburg State University', 'Southern New Hampshire University', 'Lasell University',
    'William James College', 'Lesley University', 'Franklin Cummings Tech',
    'UMass Boston', 'Boston College: Woods College',
];

const LANDING_TESTIMONIALS = [
    { quote: 'Urban College opened up a new pathway for me to start a real career with real advancement and more support for my family.', name: 'Drake', role: 'Class of 2024' },
    { quote: "I wouldn't be able to do the work I do without my certificates and degree from Urban College. If you have any dreams, go forward.", name: 'Ramona S.', role: 'Alum' },
];

const RFILandingPage: React.FC = () => {
    const location = useLocation();
    const [formId, setFormId] = useState('urbancollege.forms.23262');
    const [campaignName, setCampaignName] = useState('Request Information');
    const [campaignDesc, setCampaignDesc] = useState('Take the first step toward your degree. Fill out the short form below to receive detailed program information, admissions requirements, and financial aid options.');

    // Map pathnames to specific Form IDs and headlines
    const getCampaignDetails = (pathname: string) => {
        const path = pathname.toLowerCase();
        
        if (path.includes('getstarted')) {
            return {
                id: 'urbancollege.forms.23660',
                name: 'Get Started Today',
                desc: 'Your educational journey begins here. Discover how Urban College of Boston supports your goals with flexible, affordable, and multilingual programs.'
            };
        }
        if (path.includes('your-future')) {
            return {
                id: 'urbancollege.forms.23661',
                name: 'Build Your Future',
                desc: 'Invest in yourself and create long-term financial security for your family. Start your journey with classes designed to fit your busy lifestyle.'
            };
        }
        if (path.includes('say-yes-a') || path.includes('say-yes-b')) {
            return {
                id: 'urbancollege.forms.26190',
                name: 'Say Yes to College',
                desc: 'We make college accessible. Discover supportive pathways, scholarship programs, and individualized guidance to help you cross the graduation stage.'
            };
        }
        if (path.includes('join-urban-college')) {
            return {
                id: 'urbancollege.forms.23262',
                name: 'Join Urban College',
                desc: 'Your online community college. Accredited, affordable, and multilingual—start a career-building certificate or degree designed to fit your busy life.'
            };
        }
        if (path.includes('whav')) {
            // WHAV radio landing page — mirrors the "Your Future" page; keeps the WHAV form ID for attribution.
            return {
                id: 'urbancollege.forms.23676',
                name: 'Build Your Future',
                desc: 'Invest in yourself and create long-term financial security for your family. Start your journey with classes designed to fit your busy lifestyle.'
            };
        }

        return {
            id: 'urbancollege.forms.23262',
            name: 'Request Information',
            desc: 'Fill out this short form to learn more about associate degrees, certificate programs, financial aid, and bilingual study options.'
        };
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const details = getCampaignDetails(location.pathname);
        setFormId(details.id);
        setCampaignName(details.name);
        setCampaignDesc(details.desc);
    }, [location.pathname]);

    useEffect(() => {
        // Set configuration
        (window as any).__lum_config = {
            formId: formId,
            apiUrl: "https://urbancollege.api.451.io/v2/",
            accessToken: "WeJW3dZzCzD0RDuF04Sg2CMZQoJOmdjqYCzsE76e",
            featureToken: "sfdVcQug7oK8vr5G3uCr9QB1YZrqZapO2RBvSjzt",
            analyticsToken: "MVrxFM5pWBJlDgZgXU4xULMKzv3mMKApUUcL1dMe",
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
    }, [formId]);

    const benefits = [
        { title: "100% Online Classes", desc: "Balance your education with work, parenting, and family responsibilities.", icon: Clock },
        { title: "Multilingual Programs", desc: "Take courses in English, Spanish, or Mandarin while strengthening your language skills.", icon: GlobeIcon },
        { title: "Radical Affordability", desc: "Low-cost tuition paired with federal, state, and private grants. Free application process.", icon: DollarIcon },
        { title: "Individualized Support", desc: "Free tutoring, 1-on-1 academic advising, and personal mentors to guide you.", icon: Heart }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col justify-between selection:bg-ucb-orange selection:text-white pt-6 pb-12">
            <SEO
                title={`${campaignName} | Request Information`}
                description={campaignDesc}
                noindex
            />
            {/* Simple centered header for maximum conversion (reduces landing page drop-offs) */}
            <header className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-150/50 bg-white/50 backdrop-blur-md rounded-2xl mb-8">
                <Link to="/" className="flex items-center gap-2 group">
                    <Logo className="h-9 md:h-10 w-auto" variant="color" />
                </Link>
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                    <span>NECHE Accredited</span>
                    <span className="text-gray-300">|</span>
                    <a href="tel:617-665-8530" className="hover:text-ucb-blue transition-colors">617-665-8530</a>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-6xl flex-1 flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Side: Campaign Copy and Pitch */}
                <div className="flex-1 space-y-8">
                    <ScrollAnimation variant="slide-right" className="space-y-6">
                        <span className="inline-block px-3 py-1 bg-ucb-orange/10 text-ucb-orange text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Urban College of Boston
                        </span>
                        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-ucb-blue leading-tight">
                            {campaignName}
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                            {campaignDesc}
                        </p>
                        <div className="h-1 w-20 bg-ucb-orange rounded-full mt-4"></div>
                    </ScrollAnimation>

                    {/* Benefit Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <ScrollAnimation key={idx} variant="fade-up" delay={`${idx * 0.08}s`} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-ucb-blue/5 border border-ucb-blue/10 flex items-center justify-center shrink-0 text-ucb-blue">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-gray-800">{benefit.title}</h3>
                                        <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">{benefit.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>

                    {/* Trust Badges */}
                    <ScrollAnimation variant="fade-up" delay="0.4s" className="pt-4 flex flex-wrap gap-4 items-center justify-start text-[11px] text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-ucb-green" /> NECHE Accredited</span>
                        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-ucb-green" /> Federally Designated HSI & MSI</span>
                        <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-ucb-green" /> Nonprofit College</span>
                    </ScrollAnimation>
                </div>

                {/* Right Side: Embedded Form Card */}
                <div className="w-full lg:max-w-[460px]">
                    <ScrollAnimation variant="slide-left" className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-8 relative">
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-ucb-blue to-ucb-orange"></div>
                        
                        <div className="mb-6 text-center lg:text-left">
                            <h3 className="font-display font-bold text-lg text-ucb-blue">Request Information</h3>
                            <p className="text-gray-400 text-xs mt-1 font-light">Takes less than a minute. No obligation.</p>
                        </div>

                        {/* Element451 dynamic root form container */}
                        <div className="rfi-form-embed-container min-h-[460px] bg-gray-50/50 rounded-2xl p-4 border border-gray-150/40 relative">
                            {React.createElement('lum-root', { className: "text-gray-400 text-xs text-center py-20 block font-light" }, "Loading official form details...")}
                        </div>
                    </ScrollAnimation>
                </div>
            </main>

            {/* Online programs showcase */}
            <section className="container mx-auto px-6 max-w-6xl mt-20">
                <ScrollAnimation variant="fade-up" className="text-center mb-10">
                    <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Online Programs</span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Career-Building Certificates &amp; Degrees</h2>
                    <p className="text-gray-500 font-light mt-2 max-w-2xl mx-auto text-sm">
                        Finish in as little as one year—100% online, in English, Spanish, and Mandarin.
                    </p>
                </ScrollAnimation>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {LANDING_PROGRAMS.map((p, idx) => (
                        <ScrollAnimation key={p.slug} variant="fade-up" delay={`${(idx % 3) * 0.06}s`} className="h-full">
                            <Link to={`/programs/${p.slug}`} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col h-full">
                                <h3 className="font-display font-bold text-ucb-blue group-hover:text-ucb-orange transition-colors">{p.name}</h3>
                                <p className="text-xs text-gray-500 font-light leading-relaxed mt-2 flex-1">{p.desc}</p>
                                <span className="mt-3 inline-flex items-center gap-1 text-ucb-orange font-bold text-xs">
                                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        </ScrollAnimation>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/programs" className="inline-flex items-center gap-1.5 text-ucb-blue font-bold text-sm hover:text-ucb-orange transition-colors">
                        Explore all programs <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Transfer pathways */}
            <section className="container mx-auto px-6 max-w-6xl mt-20">
                <ScrollAnimation variant="fade-up" className="bg-ucb-blue rounded-3xl p-8 md:p-10 text-white">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-display font-bold">Transfer &amp; Keep Going</h2>
                        <p className="text-blue-100 font-light text-sm mt-2 max-w-2xl mx-auto">
                            Articulation agreements help our graduates step into bachelor's programs at partner universities.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {LANDING_PARTNERS.map((p) => (
                            <span key={p} className="bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-medium">{p}</span>
                        ))}
                    </div>
                </ScrollAnimation>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-6 max-w-5xl mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {LANDING_TESTIMONIALS.map((t, idx) => (
                        <ScrollAnimation key={t.name} variant="fade-up" delay={`${idx * 0.08}s`} className="h-full">
                            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm h-full flex flex-col">
                                <p className="text-sm text-gray-600 font-light italic leading-relaxed flex-1">"{t.quote}"</p>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="font-display font-bold text-ucb-blue text-sm">{t.name}</p>
                                    <p className="text-[10px] font-bold text-ucb-orange uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </section>

            {/* Closing CTA */}
            <section className="container mx-auto px-6 max-w-5xl mt-20">
                <ScrollAnimation variant="fade-up" className="bg-gradient-to-r from-ucb-orange to-orange-500 rounded-3xl p-8 md:p-10 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-display font-black">Your Future Starts With One Step</h2>
                    <p className="text-white/90 font-light text-sm mt-2 max-w-xl mx-auto">
                        Free application. No SAT/ACT required. Most Urban College students graduate debt-free.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-ucb-orange font-bold py-3 px-7 rounded-full text-sm uppercase tracking-wider hover:bg-ucb-blue hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                            Apply Free
                        </a>
                        <a href="tel:617-665-8530" className="bg-white/15 border border-white/30 text-white font-bold py-3 px-7 rounded-full text-sm uppercase tracking-wider hover:bg-white/25 transition-colors min-h-[44px] inline-flex items-center gap-1.5">
                            Call (617) 665-8530
                        </a>
                    </div>
                </ScrollAnimation>
            </section>

            {/* Simple footer for landing page */}
            <footer className="container mx-auto px-6 pt-12 text-center border-t border-gray-150/40 mt-12 space-y-4">
                <p className="text-[11px] text-gray-400 font-light">
                    Urban College of Boston is a private, nonprofit institution accredited by the New England Commission of Higher Education (NECHE).
                </p>
                <p className="text-[10px] text-gray-400 font-light">
                    © {new Date().getFullYear()} Urban College of Boston • 2 Boylston Street, 2nd Floor, Boston, MA 02116 • Phone: (617) 665-8530
                </p>
                <div className="flex justify-center gap-4 text-[10px] font-semibold text-gray-400">
                    <Link to="/about" className="hover:text-ucb-blue transition-colors">About Us</Link>
                    <span>•</span>
                    <Link to="/policies-disclosures" className="hover:text-ucb-blue transition-colors">Policies & Disclosures</Link>
                    <span>•</span>
                    <Link to="/" className="hover:text-ucb-blue transition-colors">Main Homepage</Link>
                </div>
            </footer>
        </div>
    );
};

// Custom Globe Icon matching standard Lucide format
const GlobeIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
);

// Custom Dollar Icon matching standard Lucide format
const DollarIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);

export default RFILandingPage;
