import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Stats from '../components/Stats';
import { CheckCircle, ArrowRight, GraduationCap, BookOpen, ShieldCheck, Baby, Users, Heart, Briefcase, BarChart3, Stethoscope, Laptop, BookMarked } from 'lucide-react';
import SEO from '../components/SEO';

const APPLY_URL = 'https://urbancollege-28708.app451.sites.451.io/';

// ── Shared content for every marketing landing page (sourced from the live pages) ──
const VALUE_PROPS = [
    { title: 'Convenient Learning', desc: 'Study anywhere with our online courses.' },
    { title: 'Career Opportunities', desc: 'Transferable credits and pathways to family-sustaining jobs.' },
    { title: 'Affordable', desc: 'Most Urban College students graduate debt-free!' },
    { title: 'Free Application', desc: 'No application fee, and no SAT or ACT required.' },
    { title: 'Diverse & Inclusive', desc: '92% of students identify as Latine/Hispanic, Black/African American, and Asian.' },
    { title: 'Credit for Experience', desc: 'Receive course credits for your work experience.' },
    { title: 'Earn As You Go', desc: 'Earn a certificate while working in your chosen field.' },
    { title: 'Multilingual', desc: 'Courses and support in English, Spanish, and Mandarin.' },
];

const CERTIFICATE_PROGRAMS = [
    { name: 'Foundations of Early Childhood Education Certificate', slug: 'early-childhood-education-certificate', desc: 'Meets Massachusetts EEC lead-teacher requirements—become a preschool teacher, childcare worker, or family childcare provider.' },
    { name: 'General Studies Certificate', slug: 'general-studies-certificate', desc: 'Build a flexible foundation and explore multiple career paths before specializing.' },
    { name: 'Human Services Certificate', slug: 'human-services-certificate', desc: 'Prepare for case management, social services, behavior technician, and direct support roles.' },
    { name: 'Case Management Certificate', slug: 'case-management', desc: 'Support clients as a case manager, social services assistant, or behavioral case worker.' },
    { name: 'Elder Care Certificate', slug: 'elder-care', desc: 'Pursue community health worker, residential support specialist, or home health aide roles.' },
    { name: 'Business Certificate', slug: 'business-certificate', desc: 'Step into office manager, administrative assistant, bookkeeper, or entrepreneur roles.' },
    { name: 'Digital Marketing Certificate', slug: 'digital-marketing-certificate', desc: 'Launch a career as a social media specialist, marketing coordinator, or content creator.' },
    { name: 'Project Management Certificate', slug: 'project-management-certificate', desc: 'Become a project coordinator, operations supervisor, or program analyst.' },
    { name: "Children's Behavioral Health Certificate", slug: 'childrens-behavioral-health-certificate', desc: 'Train as a Registered Behavior Technician, community health worker, residential counselor, or youth worker.' },
    { name: 'Paraprofessional Educator Certificate', slug: 'paraprofessional-educator-certificate', desc: 'Support teachers in K-12 classrooms, particularly with students who have special needs.' },
];

// Icons + accent colors for the certificate cards (mirrors the homepage Programs design)
const CERT_ICONS = [Baby, BookMarked, Heart, Users, Stethoscope, Briefcase, BarChart3, Laptop, Heart, GraduationCap];
const CERT_COLORS = ['#0066A2', '#006A3C', '#CC6A14', '#26AB9A', '#6487B0', '#0066A2', '#006A3C', '#CC6A14', '#26AB9A', '#6487B0'];

const PARTNERS = [
    'Fitchburg State University', 'Southern New Hampshire University', 'Lasell University',
    'William James College', 'Lesley University', 'Franklin Cummings Tech',
    'University of Massachusetts Boston', 'Boston College: Woods College',
];

const TESTIMONIALS = [
    { quote: 'Urban College opened up a new pathway for me to start a real career with real advancement and more support for my family.', name: 'Drake', role: 'Class of 2024', tone: 'emerald' },
    { quote: "When I first came here, I didn't speak English, but I was pushed to continue to study and get my diploma. If you have any dreams, go forward.", name: 'Ramona S.', role: 'Alum', tone: 'blue' },
];

// Map pathnames to specific Form IDs and hero headlines
const getCampaignDetails = (pathname: string): { id: string; name: string; desc: string; image?: string } => {
    const path = pathname.toLowerCase();

    if (path.includes('getstarted')) {
        return {
            id: 'urbancollege.forms.23660',
            name: 'Get Started Today',
            desc: 'Your educational journey begins here. Discover how Urban College supports your goals with flexible, affordable, and multilingual programs.',
            image: '/assets/images/get-started-header.jpg',
        };
    }
    if (path.includes('your-future')) {
        return {
            id: 'urbancollege.forms.23661',
            name: 'Learn More. Earn More.',
            desc: 'Career-focused certificates that work for your schedule and your budget.',
            image: '/assets/images/your-future-header.jpg',
        };
    }
    if (path.includes('say-yes-b')) {
        return {
            id: 'urbancollege.forms.26190',
            name: 'You Belong in College',
            desc: 'Join students from all over the world in a welcoming, supportive environment.',
            image: '/assets/images/say-yes-b-header.jpg',
        };
    }
    if (path.includes('say-yes-a')) {
        return {
            id: 'urbancollege.forms.26190',
            name: 'Skills Today. Stability Tomorrow.',
            desc: 'Your success builds their future. Say yes to an affordable, flexible, online path to a career you love.',
            image: '/assets/images/say-yes-a-header.jpg',
        };
    }
    if (path.includes('say-yes')) {
        return {
            id: 'urbancollege.forms.26190',
            name: 'Skills Today. Stability Tomorrow.',
            desc: 'Your success builds their future. Say yes to an affordable, flexible, online path to a career you love.',
        };
    }
    if (path.includes('join-urban-college')) {
        return {
            id: 'urbancollege.forms.23262',
            name: 'Join Urban College',
            desc: 'Your online community college—accredited, affordable, and multilingual. Start a career-building certificate or degree designed to fit your busy life.',
            image: '/assets/images/get-started-header.jpg',
        };
    }
    if (path.includes('whav')) {
        // WHAV radio landing page — mirrors the "Your Future" page; keeps the WHAV form ID for attribution.
        return {
            id: 'urbancollege.forms.23676',
            name: 'Learn More. Earn More.',
            desc: 'Career-focused certificates that work for your schedule and your budget.',
            image: '/assets/images/your-future-header.jpg',
        };
    }

    return {
        id: 'urbancollege.forms.23262',
        name: 'Your Online Community College',
        desc: 'Fill out the short form to learn more about our associate degrees, certificate programs, financial aid, and multilingual study options.',
    };
};

const RFILandingPage: React.FC = () => {
    const location = useLocation();
    const { id: formId, name: campaignName, desc: campaignDesc, image: heroImage } = getCampaignDetails(location.pathname);

    useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

    return (
        <div className="bg-white">
            <SEO
                title={`${campaignName} | Urban College of Boston`}
                description={campaignDesc}
                noindex
            />

            {/* Tagline bar */}
            <div className="bg-ucb-orange text-white text-center text-base md:text-xl font-extrabold uppercase tracking-[0.18em] py-3.5 md:py-4 text-shadow-legible">
                Your online community college
            </div>

            {/* Hero with embedded RFI form */}
            <section className="relative bg-gradient-to-br from-ucb-blue to-blue-950 text-white overflow-hidden">
                {heroImage && (
                    <>
                        <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
                        <div className="absolute inset-0 bg-gradient-to-br from-ucb-blue/90 via-ucb-blue/80 to-blue-950/85" />
                    </>
                )}
                <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-ucb-orange/20 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 max-w-6xl py-14 md:py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        {/* Headline */}
                        <ScrollAnimation variant="slide-right">
                            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                                Urban College of Boston
                            </span>
                            <h1 className="font-display font-black text-4xl md:text-5xl leading-[1.05]">
                                {campaignName}
                            </h1>
                            <p className="text-lg text-blue-100 font-light mt-5 max-w-md leading-relaxed">
                                {campaignDesc}
                            </p>
                            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-blue-100">
                                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-ucb-gold" /> NECHE Accredited</span>
                                <span className="inline-flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-ucb-gold" /> Hispanic-Serving Institution</span>
                                <span className="inline-flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-ucb-gold" /> Nonprofit College</span>
                            </div>
                        </ScrollAnimation>

                        {/* Embedded Element451 RFI form */}
                        <ScrollAnimation variant="slide-left">
                            <div className="bg-ucb-orange rounded-3xl p-2.5 shadow-2xl">
                                <div className="bg-white rounded-2xl overflow-hidden">
                                    <div className="px-5 pt-5 pb-2 text-center">
                                        <h2 className="font-display font-bold text-lg text-ucb-blue">Request Information</h2>
                                        <p className="text-gray-400 text-xs mt-1 font-light">Takes less than a minute. No obligation.</p>
                                    </div>
                                    <iframe
                                        src={`${import.meta.env.BASE_URL}rfi-form.html?formId=${formId}`}
                                        title="Request Information Form"
                                        className="w-full border-0 bg-transparent"
                                        style={{ minHeight: '520px' }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Value propositions */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                        {VALUE_PROPS.map((v) => (
                            <div key={v.title} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-ucb-emerald shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-display font-bold text-sm text-ucb-blue">{v.title}</h3>
                                    <p className="text-xs text-gray-500 font-light leading-relaxed mt-0.5">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Online certificate programs (accordion) */}
            <section className="py-16 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Online Certificate Programs</h2>
                        <p className="text-gray-500 font-light mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                            Urban College offers flexible online certificate programs. Depending on the course of study, students
                            complete between 18 credits (6 courses) and 27 credits (9 courses). Each certificate can be applied
                            toward an associate degree.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {CERTIFICATE_PROGRAMS.map((p, idx) => {
                            const IconComp = CERT_ICONS[idx % CERT_ICONS.length];
                            const accent = CERT_COLORS[idx % CERT_COLORS.length];
                            return (
                                <ScrollAnimation key={p.slug} delay={`${0.05 + idx * 0.04}s`} variant="fade-up" className="h-full">
                                    <Link
                                        to={`/programs/${p.slug}`}
                                        className="group relative h-full flex flex-col p-5 rounded-xl border border-gray-200 hover:border-transparent shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                                        style={{ backgroundColor: 'white', backgroundImage: `linear-gradient(to bottom right, white 70%, ${accent}1A 100%)` }}
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all" style={{ backgroundColor: accent }} />
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: `${accent}15`, color: accent }}>
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <span className="self-start text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 mb-2">Certificate</span>
                                        <h3 className="font-display font-bold text-base mb-1.5 leading-tight text-ucb-blue">{p.name.replace(' Certificate', '')}</h3>
                                        <p className="text-xs leading-relaxed text-gray-500 flex-1">{p.desc}</p>
                                        <span className="mt-3 pt-2.5 border-t border-gray-100 flex items-center font-bold gap-1 uppercase tracking-widest text-[10px]" style={{ color: accent }}>
                                            View Program <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/programs" className="inline-flex items-center gap-1.5 text-ucb-blue font-bold text-sm hover:text-ucb-orange transition-colors">
                            Explore all programs <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Admissions */}
            <section className="py-16 bg-ucb-blue text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <h2 className="text-2xl md:text-3xl font-display font-bold">You Belong in College</h2>
                        <p className="text-blue-100 font-light leading-relaxed mt-4 text-sm md:text-base">
                            Thank you for your interest in attending Urban College!
                        </p>
                        <p className="text-blue-100 font-light leading-relaxed mt-4 text-sm md:text-base">
                            Urban College is different. We understand that most modern students are working while earning their
                            college degree. That's why our programs are all online, flexible, and affordable—so they fit into your busy life.
                        </p>
                        <p className="text-white font-semibold leading-relaxed mt-4 text-base md:text-lg">
                            Start your future today.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-7 rounded-full text-sm uppercase tracking-wider transition-colors shadow-md min-h-[44px] inline-flex items-center">
                                Get Started
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Impact stats bar */}
            <Stats />

            {/* Admissions requirements */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <ScrollAnimation variant="fade-up">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue text-center mb-5">Admissions Requirements</h2>
                        <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                            Urban College of Boston is an open-enrollment college. Any student who has a high school diploma or has
                            successfully completed a GED or HiSET can apply and enroll—all associate degrees and certificate programs
                            are open enrollment. During the application process, you'll be asked to provide:
                        </p>
                        <ul className="mt-5 space-y-2.5 max-w-md mx-auto">
                            <li className="flex items-start gap-2.5 text-sm text-gray-700 font-light">
                                <CheckCircle className="w-4 h-4 text-ucb-emerald shrink-0 mt-0.5" /> A copy of your high school diploma, GED, or HiSET
                            </li>
                            <li className="flex items-start gap-2.5 text-sm text-gray-700 font-light">
                                <CheckCircle className="w-4 h-4 text-ucb-emerald shrink-0 mt-0.5" /> A copy of your photo ID
                            </li>
                        </ul>
                        <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base mt-5">
                            You may also be asked to complete a short English placement test after submitting your application. Once
                            we receive it, we'll schedule times for you to meet with an Advisor about your academic goals and with the
                            Financial Services team to make a plan to pay for your courses.
                        </p>
                        <div className="text-center mt-7">
                            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="bg-ucb-blue hover:bg-ucb-blue-glow text-white font-bold py-3 px-7 rounded-full text-sm uppercase tracking-wider transition-colors shadow-md min-h-[44px] inline-flex items-center">
                                Get Started
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* College transfer pathways */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">College Transfer Pathways</h2>
                        <p className="text-gray-500 font-light leading-relaxed mt-3 max-w-2xl mx-auto text-sm">
                            Urban College supports students and graduates exploring transfer options. Articulation agreements describe
                            how a student may transfer into a specific bachelor's program at a partner institution—including entrance
                            requirements and the expected transfer of courses and credits.
                        </p>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {PARTNERS.map((p) => (
                            <div key={p} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4 text-center text-xs font-semibold text-ucb-blue flex items-center justify-center min-h-[64px]">
                                {p}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About us + testimonials */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-10">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">About Us</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">Embrace Your Dreams. Empower Your Life.</h2>
                        <p className="text-gray-600 font-light leading-relaxed mt-4 max-w-3xl mx-auto text-sm md:text-base">
                            Urban College of Boston is a private nonprofit institution opening new pathways to opportunity through
                            individualized, supportive, and multilingual education. We offer courses in English, Spanish, and Mandarin
                            with online synchronous and asynchronous instruction, and we support you at every step—from the application
                            and financial aid processes to tutoring, technology help, and planning what comes after graduation.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.name} className={`rounded-3xl p-7 text-white shadow-md ${t.tone === 'emerald' ? 'bg-ucb-emerald' : 'bg-ucb-blue'}`}>
                                <p className="text-sm font-light italic leading-relaxed">"{t.quote}"</p>
                                <div className="mt-4 pt-4 border-t border-white/20">
                                    <p className="font-display font-bold text-sm">{t.name}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured testimonial + closing CTA */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <p className="text-xl md:text-2xl font-display font-light italic leading-relaxed">
                            "Urban College has motivated me and encouraged me to continue my education."
                        </p>
                        <p className="mt-4 font-display font-bold text-ucb-gold">Gladimy</p>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-blue-200">Early Childhood Education Associate Degree Program</p>
                        <div className="mt-8">
                            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="bg-ucb-orange hover:bg-ucb-orange-glow text-white font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider transition-colors shadow-md min-h-[44px] inline-flex items-center">
                                Start Your Journey
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

export default RFILandingPage;
