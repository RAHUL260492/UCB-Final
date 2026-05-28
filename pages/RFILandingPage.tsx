import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import ScrollAnimation from '../components/ScrollAnimation';
import { CheckCircle, Award, BookOpen, Clock, Heart, ShieldCheck } from 'lucide-react';

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
        if (path.includes('whav')) {
            return {
                id: 'urbancollege.forms.23676',
                name: 'Opportunity Awaits',
                desc: 'Special campaign program in association with WHAV. Request information to learn about available scholarship funds, online courses, and free support services.'
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
    }, [formId]);

    const benefits = [
        { title: "100% Online Classes", desc: "Balance your education with work, parenting, and family responsibilities.", icon: Clock },
        { title: "Multilingual Programs", desc: "Take courses in English, Spanish, or Mandarin while strengthening your language skills.", icon: GlobeIcon },
        { title: "Radical Affordability", desc: "Low-cost tuition paired with federal, state, and private grants. Free application process.", icon: DollarIcon },
        { title: "Individualized Support", desc: "Free tutoring, 1-on-1 academic advising, and personal mentors to guide you.", icon: Heart }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col justify-between selection:bg-ucb-orange selection:text-white pt-6 pb-12">
            {/* Simple centered header for maximum conversion (reduces landing page drop-offs) */}
            <header className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-150/50 bg-white/50 backdrop-blur-md rounded-2xl mb-8">
                <Link to="/" className="flex items-center gap-2 group">
                    <Logo className="h-9 md:h-10 w-auto" variant="color" />
                </Link>
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                    <span>NECHE Accredited</span>
                    <span className="text-gray-300">|</span>
                    <a href="tel:617-449-7070" className="hover:text-ucb-blue transition-colors">617-449-7070</a>
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

            {/* Simple footer for landing page */}
            <footer className="container mx-auto px-6 pt-12 text-center border-t border-gray-150/40 mt-12 space-y-4">
                <p className="text-[11px] text-gray-400 font-light">
                    Urban College of Boston is a private, nonprofit institution accredited by the New England Commission of Higher Education (NECHE).
                </p>
                <p className="text-[10px] text-gray-400 font-light">
                    © {new Date().getFullYear()} Urban College of Boston • 2 Boylston Street, 2nd Floor, Boston, MA 02116 • Phone: (617) 449-7070
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
