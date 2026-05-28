import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Clock, Globe, Briefcase, CheckCircle, TrendingUp, Users, DollarSign, 
    Award, GraduationCap, ArrowRight, ChevronDown, BookOpen, Quote 
} from 'lucide-react';

// ─── Custom Message Circle Icon for Bilingual ─────────────────────────────────
const MessageCircleIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
);

// ─── Program Data ─────────────────────────────────────────────────────────────

interface ProgramItem {
    title: string;
    type: 'Associate Degree' | 'Certificate';
    credits: string;
    languages: string;
    extra?: string;
    description: string;
    link: string;
}

const DEGREES: ProgramItem[] = [
    {
        title: "Early Childhood Education Associate Degree",
        type: "Associate Degree",
        credits: "60 credits",
        languages: "English, Spanish & Mandarin",
        extra: "Start working immediately!",
        description: "Turn your love for children into a rewarding career. Start working after completing ECE104—earn while you learn! Become a childcare center director, preschool teacher, or start your own childcare business.",
        link: "/programs/early-childhood-education"
    },
    {
        title: "General Studies Associate Degree",
        type: "Associate Degree",
        credits: "60 credits",
        languages: "English",
        extra: "Fully transferable",
        description: "Don't see the program you are interested in? Know you want to pursue a bachelor's degree? Keep your costs low, get started at Urban College, and prepare to transfer to the bachelor's degree of your choosing.",
        link: "/programs/general-studies-associate"
    },
    {
        title: "Human Services Administration Associate Degree",
        type: "Associate Degree",
        credits: "60 credits",
        languages: "English & Spanish",
        extra: "Internships + LSWA eligibility",
        description: "Transform lives while building your career in social services. Includes hands-on internships and qualifies you to apply for Licensed Social Work Associate (LSWA) credentials.",
        link: "/programs/human-services-administration"
    }
];

const CERTIFICATES: ProgramItem[] = [
    {
        title: "Business Certificate",
        type: "Certificate",
        credits: "18 credits",
        languages: "English & Spanish",
        description: "Build management, communication, and entrepreneurship skills. Become an office manager, administrative assistant, bookkeeper, or start your own business.",
        link: "/programs/business-certificate"
    },
    {
        title: "Case Management Certificate",
        type: "Certificate",
        credits: "21 credits",
        languages: "English",
        description: "Master the skills to support individuals and families navigating life's challenges. Become a case manager, social services assistant, or behavioral case worker.",
        link: "/programs/case-management"
    },
    {
        title: "Children's Behavioral Health Certificate",
        type: "Certificate",
        credits: "16 credits",
        languages: "English & Spanish",
        description: "Prepare for Registered Behavior Technician (RBT®) certification and Community Health Worker credentials. Support children with special needs and their families with skill and compassion.",
        link: "/programs/childrens-behavioral-health-certificate"
    },
    {
        title: "Digital Marketing Certificate",
        type: "Certificate",
        credits: "18 credits",
        languages: "English & Spanish",
        description: "Master social media, branding, and content creation. Become a social media specialist, marketing coordinator, or content creator.",
        link: "/programs/digital-marketing-certificate"
    },
    {
        title: "Foundations of Early Childhood Education Certificate",
        type: "Certificate",
        credits: "19 credits",
        languages: "English, Spanish & Mandarin",
        description: "Turn your love for children into a career. This certificate meets the Massachusetts Department of Early Education and Care requirements for a lead teacher credential. Become a preschool teacher, childcare worker, or start your own family childcare business.",
        link: "/programs/early-childhood-education-certificate"
    },
    {
        title: "Elder Care Certificate",
        type: "Certificate",
        credits: "21 credits",
        languages: "English & Spanish",
        extra: "58% Job Growth!",
        description: "Enter Massachusetts' fastest-growing field. Earn Community Health Worker Certification and support older adults and their families.",
        link: "/programs/elder-care"
    },
    {
        title: "General Studies Certificate",
        type: "Certificate",
        credits: "21 credits",
        languages: "English",
        description: "Not sure what you want to study? Explore different subjects while earning transferable credits toward an associate degree.",
        link: "/programs/general-studies-certificate"
    },
    {
        title: "Human Services Certificate",
        type: "Certificate",
        credits: "21 credits",
        languages: "English & Spanish",
        extra: "8% Job Growth",
        description: "Launch your career helping others. Become a case manager, social services assistant, behavior technician, or direct support professional.",
        link: "/programs/human-services-certificate"
    },
    {
        title: "Paraprofessional Educator Certificate",
        type: "Certificate",
        credits: "21 credits",
        languages: "English & Spanish",
        description: "Support K-12 teachers and students with disabilities. Join Massachusetts schools that are actively seeking qualified educators.",
        link: "/programs/paraprofessional-educator-certificate"
    },
    {
        title: "Project Management Certificate",
        type: "Certificate",
        credits: "18 credits",
        languages: "English & Spanish",
        description: "Build skills in planning, scheduling, budgeting, and leadership. Open doors across every industry as a project coordinator or manager.",
        link: "/programs/project-management-certificate"
    }
];

const faqs = [
    { q: "How long does it take to complete a certificate?", a: "In as little as one year! Certificates range from 16-21 credits. Study full-time or part-time—the program fits into your busy life." },
    { q: "Are programs entirely online?", a: "Yes! All programs are 100% online with both synchronous and asynchronous options. Learn on your schedule." },
    { q: "Can I study in a language other than English?", a: "Absolutely! Many programs offer courses in English, Spanish, and Mandarin. ESL support is available for all students." },
    { q: "Do certificate credits transfer to an associate degree?", a: "Yes! Every certificate credit transfers directly into the corresponding associate degree at Urban College. You can continue your education whenever you're ready." },
    { q: "Can I transfer to a bachelor's program?", a: "Yes! Our transfer agreements with partner colleges make it easy to continue toward a bachelor's degree. Check out our College Transfer Pathways page for details." },
    { q: "Am I eligible for financial aid?", a: "Yes! Most degree-seeking students are eligible for financial aid, scholarships, and grants. Contact our financial aid office at (617) 449-7070 for personalized guidance. Our financial aid advisors work with each student to find pathways toward affordable education." }
];

const AcademicPrograms: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'Degrees' | 'Certificates'>('All');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="pt-24 lg:pt-32 bg-gray-50/50">
            <PageHeader 
                title="Academic Programs"
                subtitle="Affordable Online Programs Designed to Fit Your Busy Life"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Academic Programs' }
                ]}
                imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 bg-ucb-orange/10 text-ucb-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Achieve Your Dreams—On Your Terms
                    </span>
                    <h2 className="text-3xl font-display font-bold text-ucb-blue mb-4">
                        Your Affordable Pathway to Opportunity
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Whether you're looking to advance your current career, explore a new path, or want an accessible way to start college—we have an affordable online program for you!
                    </p>
                    <p className="text-gray-500 leading-relaxed font-light">
                        Every Urban College program is designed to fit into your busy life, making it possible to achieve your dreams on your terms. Our programs are short-term, career-focused, fully online, affordable, flexible, and multilingual.
                    </p>
                </div>
            </section>

            {/* What Makes Us Different Grid */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-ucb-blue mb-3">What Makes Our Programs Different</h2>
                        <p className="text-gray-500">Flexible options tailored for modern working adults.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "100% Online", desc: "Learn anywhere, anytime—on your schedule", icon: Globe },
                            { title: "Flexible", desc: "Full-semester or 8-week Fast Track options, Fall/Spring/Summer", icon: Clock },
                            { title: "Affordable", desc: "Low-cost tuition with personalized financial aid options", icon: DollarSign },
                            { title: "Career-Focused", desc: "Gain job-ready skills you can use immediately", icon: Briefcase },
                            { title: "Short-Term", desc: "Complete a certificate in as little as one year", icon: Award },
                            { title: "Multilingual", desc: "Study in English, Spanish, or Mandarin with ESL support", icon: MessageCircleIcon }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-ucb-blue/10 flex items-center justify-center shrink-0 text-ucb-blue">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stackable Credentials Pathway */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 bg-ucb-orange/10 text-ucb-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Stackable Credentials
                    </span>
                    <h2 className="text-3xl font-display font-bold text-ucb-blue mb-4">Build Your Future—One Step at a Time</h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Our programs are designed to stack—each credential builds toward the next. Start with a certificate, continue to an associate degree, then transfer to a bachelor's program. Every credit you earn counts.
                    </p>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-ucb-blue via-ucb-orange to-gray-200 -translate-y-1/2 z-0" />
                        <div className="grid md:grid-cols-3 gap-6 relative z-10">
                            {[
                                { step: "1", label: "Certificate", desc: "16-21 credits to build core skills" },
                                { step: "2", label: "Associate Degree", desc: "60 credits stackable block" },
                                { step: "3", label: "Bachelor's Degree", desc: "Transfer ready to partner colleges" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-ucb-blue/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                                    <div className="w-8 h-8 rounded-full bg-ucb-orange text-white font-bold flex items-center justify-center mx-auto mb-3">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-ucb-blue mb-1">{item.label}</h4>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mt-8 italic">
                        Already have a degree? Use a certificate to layer new skills onto your existing credentials and advance your career.
                    </p>
                </div>
            </section>

            {/* Catalog Grid */}
            <section className="py-16 bg-gray-50/50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-ucb-blue mb-2">Explore Our Programs</h2>
                            <p className="text-gray-500">Find the perfect schedule, credit count, and subject area.</p>
                        </div>
                        <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 flex gap-1 self-start">
                            {['All', 'Degrees', 'Certificates'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab as any)}
                                    className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${filter === tab
                                        ? 'bg-ucb-blue text-white shadow-sm'
                                        : 'text-gray-500 hover:text-ucb-blue'
                                    }`}
                                >
                                    {tab === 'All' ? 'All Programs' : tab === 'Degrees' ? 'Associate Degrees' : 'Certificates'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Program Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Render Associate Degrees */}
                        {(filter === 'All' || filter === 'Degrees') && DEGREES.map((prog, idx) => (
                            <div key={`deg-${idx}`} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                                <div className="p-6">
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ucb-blue/10 text-ucb-blue">
                                            {prog.type}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                                            {prog.credits}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ucb-blue mb-2.5 leading-tight">{prog.title}</h3>
                                    <p className="text-xs font-bold text-ucb-orange uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                        <Globe className="w-3.5 h-3.5" /> {prog.languages}
                                    </p>
                                    {prog.extra && (
                                        <div className="text-xs bg-ucb-emerald/10 text-ucb-emerald font-semibold px-2.5 py-1 rounded-lg inline-block mb-3">
                                            {prog.extra}
                                        </div>
                                    )}
                                    <p className="text-sm text-gray-500 leading-relaxed font-light mt-1">{prog.description}</p>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <Link to={prog.link} className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-ucb-blue hover:text-ucb-orange transition-colors">
                                        Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* Render Certificates */}
                        {(filter === 'All' || filter === 'Certificates') && CERTIFICATES.map((prog, idx) => (
                            <div key={`cert-${idx}`} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                                <div className="p-6">
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ucb-orange/10 text-ucb-orange">
                                            {prog.type}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                                            {prog.credits}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ucb-blue mb-2.5 leading-tight">{prog.title}</h3>
                                    <p className="text-xs font-bold text-ucb-orange uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                        <Globe className="w-3.5 h-3.5" /> {prog.languages}
                                    </p>
                                    {prog.extra && (
                                        <div className="text-xs bg-ucb-orange/10 text-ucb-orange font-semibold px-2.5 py-1 rounded-lg inline-block mb-3">
                                            {prog.extra}
                                        </div>
                                    )}
                                    <p className="text-sm text-gray-500 leading-relaxed font-light mt-1">{prog.description}</p>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <Link to={prog.link} className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-ucb-blue hover:text-ucb-orange transition-colors">
                                        Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Professional Studies Card */}
                    <div className="mt-12 bg-gradient-to-r from-ucb-blue to-blue-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
                        <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
                            <BookOpen className="w-96 h-96" />
                        </div>
                        <div className="relative z-10 max-w-2xl">
                            <span className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                                Non-Degree Option
                            </span>
                            <h3 className="text-2xl font-bold mb-2">Professional Studies & Single Courses</h3>
                            <p className="opacity-90 text-sm leading-relaxed mb-4">
                                Not ready for a full program? Professional Studies lets you take any available course alongside degree-seeking students—perfect for learning a new subject, supporting career growth, or satisfying your curiosity.
                            </p>
                            <p className="text-xs font-semibold text-ucb-gold mb-6">
                                Best of all: every credit you earn can be applied toward a certificate at Urban College if you decide to continue your education later.
                            </p>
                            <Link to="/programs/professional-studies" className="inline-flex items-center bg-white text-ucb-blue hover:bg-ucb-orange hover:text-white font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px]">
                                Learn More About Professional Studies <ArrowRight className="w-4 h-4 ml-1.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Is Urban College Right for You & Student Services */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Is UCB Right for You */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-ucb-blue mb-6">Is Urban College Right for You?</h2>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                Our college and community are tailored to support diverse learning styles, languages, and professional goals.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Want or need to work while earning your degree",
                                    "Are returning to education after time away",
                                    "Are a bilingual learner seeking an inclusive, supportive college",
                                    "Are a diverse student looking for a college that understands your journey (including multilingual paths and students of color)",
                                    "Want to build toward your future without student debt"
                                ].map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-ucb-emerald shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600 font-medium leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Student centered experience */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-ucb-blue mb-6">A Supportive, Student-Centered Experience</h2>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                We believe education should fit into your busy life, not complicate it. You're not just a student—you're family.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "1-on-1 Academic Advising", desc: "Personalized guidance and regular check-ins" },
                                    { title: "Career Services", desc: "Resume help, interview prep, and job search support" },
                                    { title: "Free Tutoring", desc: "In any subject area, whenever you need it" },
                                    { title: "English as a Second Language", desc: "Tailored to multilingual learners" },
                                    { title: "Technical Support", desc: "For any online learning platform issues" }
                                ].map((service, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50">
                                        <h4 className="font-bold text-sm text-gray-900 mb-1 leading-snug">{service.title}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Quote className="w-12 h-12 text-ucb-orange/30 mx-auto mb-6" />
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic mb-6">
                        “The professors [at Urban College] are incredibly supportive, empathetic, and thoughtful. I was able to work at my own pace with online courses. With such an environment, I am inspired to persevere and keep going."
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-ucb-orange/10 flex items-center justify-center text-ucb-orange font-bold">
                            S
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-ucb-blue text-sm">Seraphina</h4>
                            <p className="text-xs text-gray-400">Alumna</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Accordion */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-ucb-blue mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Everything you need to know about our academic programs.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openFaq === idx ? 'shadow-md border-ucb-blue/20' : 'shadow-sm border-gray-100 hover:border-gray-200'}`}>
                                <button 
                                    onClick={() => toggleFaq(idx)} 
                                    className="w-full flex justify-between items-center p-5 text-left group min-h-[44px]"
                                >
                                    <span className={`font-bold text-base pr-4 transition-colors ${openFaq === idx ? 'text-ucb-blue' : 'text-gray-800 group-hover:text-ucb-blue'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-ucb-blue text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>
                                <div 
                                    className="overflow-hidden transition-all duration-300"
                                    style={{ maxHeight: openFaq === idx ? '200px' : '0', opacity: openFaq === idx ? 1 : 0 }}
                                >
                                    <div className="p-5 pt-0 border-t border-gray-50 text-sm text-gray-600 leading-relaxed font-light">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Apply */}
            <section className="py-16 bg-gradient-to-r from-ucb-orange to-orange-600 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl font-display font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto leading-relaxed">
                        Apply for FREE today. No application fee. Let's build your future together.
                    </p>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-md mx-auto mb-8 text-left">
                        <h4 className="font-bold text-base mb-3 text-ucb-gold uppercase tracking-wider">What You Need:</h4>
                        <ul className="space-y-2 text-sm text-white/90">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                                <span>Copy of your high school transcript or diploma, GED, or HiSET</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                                <span>Photo ID</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                                <span>Completed online application</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/admissions" className="bg-white text-ucb-orange hover:bg-ucb-blue hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-sm min-h-[44px] inline-flex items-center justify-center">
                            Apply Online Now
                        </Link>
                        <a href="/admissions#advisor-meeting" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-ucb-orange font-bold py-3 px-8 rounded-full transition-all text-sm min-h-[44px] inline-flex items-center justify-center">
                            Schedule Advisor Meeting
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcademicPrograms;
